import { neofetchData } from "../data/content.js";
import { resolvePath, getPromptPath } from "../data/filesystem.js";
import { ref, nextTick, computed } from "vue";
import { windowCommands, allCommands, unixCommands } from "../constants/commands";
import { loadContentJson } from "../services/contentService";
import { escapeHtml } from "../utils/escapeHtml";
import Typed from "typed.js";

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
  const currentPath = ref("~");

  const promptPath = computed(() => getPromptPath(currentPath.value));

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
        <p class="text-2xl font-bold heading-gradient">${getText("welcome_title")}</p>
        <p class="text-white/70">${getText("welcome_help")}</p>
        <p class="text-white/70">${getText("welcome_shortcuts")}</p>
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
    currentPath.value = "~";
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
          "ls -l^1500",
          "cat perfil.txt^2000",
          "cd proyectos/^1200",
          "ls^1500",
          "cd ..^1200",
          "pwd^1000",
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
      `<div class="flex"><span class="accent-teal font-bold">manzzaano@portfolio</span><span class="text-white/70">:</span><span class="accent-warm">${escapeHtml(promptPath.value)}</span><span class="text-white/70">$</span><p class="ml-2 text-white">${escapeHtml(cmd)}</p></div>`,
    );

    if (windowCommands.includes(command)) {
      appendHtml(
        `<div><p class="text-white/50">${getText("opening_app")} <span class="text-white/80">${command}</span>...</p></div>`,
      );
      openWindow(command);
    } else if (command === "neofetch") {
      const asciiHtml = `<pre class="accent-teal leading-[1.1] font-bold text-[2.2vw] sm:text-[12px] md:text-[14px] overflow-hidden mb-2">${neofetchData.ascii}</pre>`;

      const statsHtml = neofetchData.stats
        .map((stat) => {
          const displayValue = stat.key ? getText(stat.key) : stat.value;
          const valueHtml = stat.url
            ? `<a href="${stat.url}" target="_blank" class="accent-cyan underline underline-offset-2 hover:text-white transition-colors">${displayValue}</a>`
            : `<span class="text-white/85">${displayValue}</span>`;
          return `<div><span class="accent-warm font-bold">${stat.label}:</span> ${valueHtml}</div>`;
        })
        .join("");

      appendHtml(
        `<div class="flex flex-col my-4 overflow-hidden">${asciiHtml}<div class="flex flex-col whitespace-nowrap ml-2"><div class="text-white/[12%] mb-2">--------------------------------</div>${statsHtml}</div></div>`,
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
        <p class="mb-2 accent-warm">${getText("help_header")}</p>
        <ul class="list-disc list-inside space-y-0.5 marker:text-white/30">
          ${windowCommands.map((c) => `<li class="text-white/60"><span class="accent-teal font-bold">${c}</span> <span class="text-white/30">—</span> ${getText("help_" + c)}</li>`).join("")}
          <li class="text-white/60"><span class="accent-teal font-bold">lang</span> <span class="text-white/30">—</span> ${getText("help_lang")}</li>
          <li class="text-white/60"><span class="accent-teal font-bold">neofetch</span> <span class="text-white/30">—</span> ${getText("help_neofetch")}</li>
          <li class="text-white/60"><span class="accent-teal font-bold">clear</span> <span class="text-white/30">—</span> ${getText("help_clear")}</li>
          <li class="text-white/60"><span class="accent-violet font-bold">Ctrl+L</span> <span class="text-white/30">—</span> ${getText("help_clear_shortcut")}</li>
          <li class="text-white/30 mt-2 italic">── Unix ──</li>
          <li class="text-white/60"><span class="accent-cyan font-bold">ls</span> <span class="text-white/30">—</span> List directory contents</li>
          <li class="text-white/60"><span class="accent-cyan font-bold">cat &lt;file&gt;</span> <span class="text-white/30">—</span> Print file contents</li>
          <li class="text-white/60"><span class="accent-cyan font-bold">cd &lt;dir&gt;</span> <span class="text-white/30">—</span> Change directory</li>
          <li class="text-white/60"><span class="accent-cyan font-bold">pwd</span> <span class="text-white/30">—</span> Print working directory</li>
        </ul>`;
      appendHtml(`<div>${helpText}</div>`);
    } else if (command === "ls") {
      const showLong = args.includes("-l");
      const dir = resolvePath(currentPath.value);
      if (!dir || dir.type !== "dir") {
        appendHtml(`<div><p class="text-red-400 glow">ls: cannot access '${escapeHtml(currentPath.value)}': Not a directory</p></div>`);
        return;
      }
      const entries = Object.entries(dir.children);
      if (entries.length === 0) {
        appendHtml(`<div><p class="text-white/40">(empty)</p></div>`);
        return;
      }
      const lines = entries.map(([name, node]) => {
        if (node.type === "dir") {
          const desc = showLong && node.description
            ? ` <span class="text-white/20 text-[10px]">// ${escapeHtml(node.description)}</span>`
            : "";
          return `<div><span class="dir-name">${escapeHtml(name)}/</span>${desc}</div>`;
        }
        if (node.executable) {
          const desc = showLong && node.description
            ? ` <span class="text-white/20 text-[10px]">// ${escapeHtml(node.description)}</span>`
            : "";
          return `<div><span class="file-exe">*${escapeHtml(name)}</span>${desc}</div>`;
        }
        if (node.binary) {
          const desc = showLong && node.description
            ? ` <span class="text-white/20 text-[10px]">// ${escapeHtml(node.description)}</span>`
            : "";
          return `<div><span class="file-bin">${escapeHtml(name)}</span>${desc}</div>`;
        }
        const desc = showLong && node.description
          ? ` <span class="text-white/20 text-[10px]">// ${escapeHtml(node.description)}</span>`
          : "";
        return `<div><span class="file-regular">${escapeHtml(name)}</span>${desc}</div>`;
      });
      appendHtml(`<div>${lines.join("")}</div>`);
    } else if (command === "cat") {
      if (args.length === 0) {
        appendHtml(`<div><p class="text-red-400 glow">cat: missing operand. Usage: cat &lt;file&gt;</p></div>`);
        return;
      }
      const fileName = args[0];
      const dir = resolvePath(currentPath.value);
      if (!dir || dir.type !== "dir") {
        appendHtml(`<div><p class="text-red-400 glow">cat: cannot access '${escapeHtml(fileName)}': Not a directory</p></div>`);
        return;
      }
      const file = dir.children[fileName];
      if (!file) {
        appendHtml(`<div><p class="text-red-400 glow">cat: ${escapeHtml(fileName)}: No such file</p></div>`);
        return;
      }
      if (file.type === "dir") {
        appendHtml(`<div><p class="text-red-400 glow">cat: ${escapeHtml(fileName)}: Is a directory</p></div>`);
        return;
      }
      const summary = file.summary?.[currentLang.value] || file.summary?.en || "(no content)";
      const hint = file.modal
        ? (currentLang.value === "es"
            ? `<p class="text-white/30 text-[10px] mt-2">Usa '<span class="accent-teal">${file.modal}</span>' para vista completa.</p>`
            : `<p class="text-white/30 text-[10px] mt-2">Use '<span class="accent-teal">${file.modal}</span>' for full view.</p>`)
        : "";
      appendHtml(`<div><p class="text-white/80 leading-relaxed">${escapeHtml(summary)}</p>${hint}</div>`);
    } else if (command === "cd") {
      if (args.length === 0) {
        currentPath.value = "~";
        return;
      }
      const target = args[0];
      if (target === "~" || target === "~/" || target === "/") {
        currentPath.value = "~";
        return;
      }
      if (target === "..") {
        if (currentPath.value === "~") return;
        const parts = currentPath.value.replace(/^~\/?/, "").split("/").filter(Boolean);
        if (parts.length === 0) return;
        parts.pop();
        currentPath.value = parts.length > 0 ? "~/" + parts.join("/") : "~";
        return;
      }
      const targetClean = target.replace(/\/$/, "");
      const dir = resolvePath(currentPath.value);
      if (!dir || dir.type !== "dir") return;
      const child = dir.children[targetClean];
      if (!child || child.type !== "dir") {
        appendHtml(`<div><p class="text-red-400 glow">cd: ${escapeHtml(target)}: No such directory</p></div>`);
        return;
      }
      const newPathParts = currentPath.value.replace(/^~\/?/, "").split("/").filter(Boolean);
      newPathParts.push(targetClean);
      currentPath.value = "~/" + newPathParts.join("/");
    } else if (command === "pwd") {
      appendHtml(`<div><p class="accent-cyan">${escapeHtml(promptPath.value)}</p></div>`);
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
            `<div class="flex"><span class="accent-teal font-bold">manzzaano@portfolio</span><span class="text-white/70">:</span><span class="accent-warm">${escapeHtml(promptPath.value)}</span><span class="text-white/70">$</span><p class="ml-2 text-white/70">${escapeHtml(partialCommand)}</p></div>`,
          );
          appendHtml(
            `<div class="flex flex-wrap gap-x-4 text-white/60">${matches.join(" ")}</div>`,
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
        `<div><p class="text-white/50">Demo detenida.</p></div>`,
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
          ? '<p class="text-white/50">¿Es tu primera vez aquí? Escribe <span class="text-white glow">demo</span> para un tour rápido.</p>'
          : '<p class="text-white/50">First time here? Type <span class="text-white glow">demo</span> for a quick tour.</p>';
      appendHtml(`<div>${langDemo}</div>`);
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
    promptPath,
    currentPath,
    modalHidden,
    modalTitle,
    modalComponent,
    currentLang,
    onKeyDown,
    onDocumentKeyDown,
    loadContentAndInit,
    focusInput,
    clearTerminal,
    executeCommand,
    closeWindow,
    openWindow,
    getText,
  };
}
