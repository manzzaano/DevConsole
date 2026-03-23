import { neofetchData } from "../data/content.js";
import { ref, nextTick, computed } from "vue";
import { windowCommands, allCommands } from "../constants/commands";
import { loadContentJson } from "../services/contentService";
import { escapeHtml } from "../utils/escapeHtml";
import Typed from "typed.js";

/**
 * Composable para gestionar toda la lógica de la terminal y navegación.
 */
export function useTerminal({
  outputRef,
  inputRef,
  inputLineRef,
  terminalRef,
}) {
  // --- Estado Reactivo ---
  const inputText = ref("");
  const isFocused = ref(true);
  const isDemoMode = ref(false);

  // --- Lógica para sugerencia visual (Ghost text) ---
  const suggestionRemainder = computed(() => {
    const val = inputText.value.toLowerCase();
    if (!val || val.includes(" ")) return "";
    const match = allCommands.find((c) => c.startsWith(val));
    return match ? match.slice(val.length) : "";
  });

  // --- Estado del Modal (Refactorizado para Componentes) ---
  const modalHidden = ref(true);
  const modalTitle = ref("");
  const modalComponent = ref(null); // Ahora almacena el nombre del componente

  // --- Historial de Comandos ---
  let commandHistory = [];
  let historyIndex = -1;

  // --- Internacionalización (i18n) ---
  const getInitialLang = () => {
    const savedLang = localStorage.getItem("portfolioLang");
    return savedLang === "en" || savedLang === "es" ? savedLang : "en";
  };

  const currentLang = ref(getInitialLang());
  const translations = ref({});

  const getText = (key) =>
    (translations.value[currentLang.value] &&
      translations.value[currentLang.value][key]) ||
    key;

  // --- Lógica de Scroll Automático ---
  const scrollToBottom = () => {
    nextTick(() => {
      if (terminalRef && terminalRef.value) {
        terminalRef.value.scrollTop = terminalRef.value.scrollHeight;
      }
    });
  };

  // --- Manipulación del Output ---
  const appendHtml = (html) => {
    if (outputRef && outputRef.value && outputRef.value.appendHtml) {
      outputRef.value.appendHtml(html);
      scrollToBottom();
    }
  };

  const clearOutput = () => {
    if (outputRef && outputRef.value && outputRef.value.clear) {
      outputRef.value.clear();
    }
  };

  const printWelcomeMessage = () => {
    const welcomeMessage = `
      <div class="mb-4">
        <p class="text-2xl font-bold text-emerald-400 glow">${getText("welcome_title")}</p>
        <p>${getText("welcome_help")}</p>
        <p>${getText("welcome_shortcuts")}</p>
      </div>`;
    appendHtml(welcomeMessage);
  };

  // --- Lógica de Ventana/Modal ---
  const openWindow = (command) => {
    if (inputLineRef && inputLineRef.value && inputLineRef.value.classList)
      inputLineRef.value.classList.remove("is-focused");

    if (inputRef && inputRef.value && inputRef.value.inputRefLocal) {
      inputRef.value.inputRefLocal.disabled = true;
    }

    // Seteamos el título desde el JSON (solo texto plano ahora)
    modalTitle.value = getText(`${command}_title`);

    // Identificamos qué componente cargar (p.e. 'about', 'projects')
    modalComponent.value = command;
    modalHidden.value = false;
  };

  const closeWindow = () => {
    modalHidden.value = true;
    modalComponent.value = null;

    if (!isDemoMode.value) {
      if (inputLineRef && inputLineRef.value && inputLineRef.value.classList)
        inputLineRef.value.classList.add("is-focused");

      if (inputRef && inputRef.value && inputRef.value.inputRefLocal) {
        inputRef.value.inputRefLocal.disabled = false;
      }

      isFocused.value = true;
      nextTick(focusInput);
    }
  };

  const focusInput = () => {
    nextTick(() => {
      if (inputRef?.value?.focus) {
        inputRef.value.focus();
      }
    });
  };

  const clearTerminal = () => {
    clearOutput();
    printWelcomeMessage();
    if (!isDemoMode.value) {
      nextTick(focusInput);
    }
  };

  // --- Lógica de Demo ---
  let typedInstance = null;

  const stopDemo = () => {
    if (typedInstance) {
      typedInstance.destroy();
      typedInstance = null;
    }
    isDemoMode.value = false;
    nextTick(focusInput);
  };

  async function startDemo() {
    if (isDemoMode.value) return;
    isDemoMode.value = true;

    const runCommand = (cmd) => {
      executeCommand(cmd);
      if (windowCommands.includes(cmd)) {
        setTimeout(closeWindow, 1500);
        return new Promise((resolve) => setTimeout(resolve, 2000));
      }
      return new Promise((resolve) => setTimeout(resolve, 1500));
    };

    await nextTick();

    try {
      typedInstance = new Typed("#demo-typing", {
        strings: [
          "help^1000",
          "about^1500",
          "neofetch^2000",
          "projects^1500",
          "skills^1500",
          "contact^1500",
          "clear^1000",
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1000,
        loop: false,
        showCursor: true,
        cursorChar: "▋",
        onStringTyped: async (arrayPos, self) => {
          const cmd = self.strings[arrayPos].split("^")[0];
          await runCommand(cmd);
          if (arrayPos === self.strings.length - 1) {
            setTimeout(() => {
              stopDemo();
              appendHtml(`<div><p>${getText("welcome_help")}</p></div>`);
            }, 2000);
          }
        },
      });
    } catch (e) {
      console.error("Error al iniciar Typed.js", e);
      stopDemo();
    }
  }

  // --- Ejecución de Comandos ---
  const executeCommand = (cmdRaw) => {
    const cmd = String(cmdRaw);
    const [command, ...args] = cmd.split(" ").filter(Boolean);

    if (command === "demo") {
      clearTerminal();
      startDemo();
      return;
    }

    appendHtml(
      `<div class="flex"><span class="text-emerald-400 glow">manzzaano@portfolio:~$</span><p class="ml-2">${escapeHtml(cmd)}</p></div>`,
    );

    if (windowCommands.includes(command)) {
      appendHtml(
        `<div><p>${getText("opening_app")} <span class="text-yellow-400">${command}</span>...</p></div>`,
      );
      openWindow(command);
    } else if (command === "neofetch") {
      const asciiHtml = `<pre class="text-emerald-400 glow leading-[1.1] font-bold text-[2.2vw] sm:text-[12px] md:text-[14px] overflow-hidden mb-2">${neofetchData.ascii}</pre>`;

      const statsHtml = neofetchData.stats
        .map((stat) => {
          const displayValue = stat.key ? getText(stat.key) : stat.value;
          const valueHtml = stat.url
            ? `<a href="${stat.url}" target="_blank" class="text-cyan-400 hover:underline hover:text-cyan-300 transition-colors">${displayValue}</a>`
            : `<span class="text-gray-300">${displayValue}</span>`;
          return `<div><span class="text-emerald-400 font-bold">${stat.label}:</span> ${valueHtml}</div>`;
        })
        .join("");

      appendHtml(
        `<div class="flex flex-col my-4 overflow-hidden">${asciiHtml}<div class="flex flex-col whitespace-nowrap ml-2"><div class="text-gray-500 mb-2">--------------------------------</div>${statsHtml}</div></div>`,
      );
    } else if (command === "clear") {
      clearTerminal();
    } else if (command === "lang") {
      const lang = args[0];
      if (lang === "en" || lang === "es") {
        currentLang.value = lang;
        localStorage.setItem("portfolioLang", lang);
        document.documentElement.lang = lang;
        appendHtml(`<div><p>${getText("lang_changed")}</p></div>`);
        setTimeout(clearTerminal, 800);
      } else {
        appendHtml(
          `<div><p class="text-red-400 glow">${getText("lang_usage")}</p></div>`,
        );
      }
    } else if (command === "help") {
      const helpText = `
        <p class="mb-2">${getText("help_header")}</p>
        <ul class="list-disc list-inside">
          ${windowCommands.map((c) => `<li><span class="text-emerald-400 glow">${c}</span> - ${getText("help_" + c)}</li>`).join("")}
          <li><span class="text-emerald-400 glow">lang</span> - ${getText("help_lang")}</li>
          <li><span class="text-emerald-400 glow">neofetch</span> - ${getText("help_neofetch")}</li>
          <li><span class="text-emerald-400 glow">clear</span> - ${getText("help_clear")}</li>
          <li><span class="text-yellow-400 glow">Ctrl+L</span> - ${getText("help_clear_shortcut")}</li>
        </ul>`;
      appendHtml(`<div>${helpText}</div>`);
    } else {
      appendHtml(
        `<div><p class="text-red-400 glow">${getText("command_not_found")} '${escapeHtml(command)}'. ${getText("type_help")}</p></div>`,
      );
    }
  };

  const onKeyDown = (e) => {
    const key = (e.key || "").toString().toLowerCase();
    if (isDemoMode.value) {
      e.preventDefault();
      return;
    }

    if (key === "enter") {
      e.preventDefault();
      const command = inputText.value.trim().toLowerCase();
      if (command) {
        if (command !== commandHistory[0]) commandHistory.unshift(command);
        historyIndex = -1;
        executeCommand(command);
      }
      inputText.value = "";
      nextTick(focusInput);
      return;
    }

    if (key === "arrowup") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        inputText.value = commandHistory[historyIndex] || "";
      }
      return;
    }

    if (key === "arrowdown") {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        inputText.value = commandHistory[historyIndex] || "";
      } else {
        historyIndex = -1;
        inputText.value = "";
      }
      return;
    }

    if (key === "arrowright" && suggestionRemainder.value) {
      e.preventDefault();
      inputText.value += suggestionRemainder.value;
      return;
    }

    if (key === "tab") {
      e.preventDefault();
      if (suggestionRemainder.value) {
        inputText.value += suggestionRemainder.value;
      } else {
        const partialCommand = inputText.value.trim().toLowerCase();
        const matches = allCommands.filter((c) => c.startsWith(partialCommand));
        if (matches.length === 1) {
          inputText.value = matches[0];
        } else if (matches.length > 1) {
          appendHtml(
            `<div class="flex"><span class="text-emerald-400 glow">manzzaano@portfolio:~$</span><p class="ml-2">${escapeHtml(partialCommand)}</p></div>`,
          );
          appendHtml(
            `<div class="flex flex-wrap gap-x-4">${matches.join(" ")}</div>`,
          );
        }
      }
      return;
    }

    if (key === "l" && e.ctrlKey) {
      e.preventDefault();
      clearTerminal();
      return;
    }
    if (key === "escape" && !modalHidden.value) {
      closeWindow();
      return;
    }
  };

  const onDocumentKeyDown = (e) => {
    const key = (e.key || "").toString().toLowerCase();
    if (key !== "escape") return;
    if (isDemoMode.value) {
      e.preventDefault();
      stopDemo();
      appendHtml(
        `<div><p class="text-yellow-400 glow">Demo detenida.</p></div>`,
      );
      return;
    }
    if (!modalHidden.value) closeWindow();
  };

  async function loadContentAndInit() {
    document.documentElement.lang = currentLang.value;
    try {
      translations.value = await loadContentJson();
      printWelcomeMessage();
      const langDemo =
        currentLang.value === "es"
          ? '¿Es tu primera vez aquí? Escribe "<span class="text-yellow-400 glow">demo</span>" para un tour rápido.'
          : 'First time here? Type "<span class="text-yellow-400 glow">demo</span>" for a quick tour.';
      appendHtml(`<div><p>${langDemo}</p></div>`);
      nextTick(focusInput);
    } catch (e) {
      appendHtml(
        `<p class="text-red-400 glow">Error: No se pudo cargar el contenido. Por favor, refresca la página.</p>`,
      );
    }
  }

  return {
    inputText,
    isFocused,
    isDemoMode,
    suggestionRemainder,
    modalHidden,
    modalTitle,
    modalComponent, // Exponemos el nombre del componente activo
    currentLang, // Exponemos el idioma para que los componentes lo usen
    onKeyDown,
    onDocumentKeyDown,
    loadContentAndInit,
    focusInput,
    clearTerminal,
    executeCommand,
    closeWindow,
    openWindow,
    getText, // Exponemos la función de traducción
  };
}
