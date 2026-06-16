import { neofetchData } from "../data/content.js";
import { ref, nextTick, computed } from "vue";
import { windowCommands, allCommands } from "../constants/commands";
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

  const promptPath = "~";

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

  let isFirstWelcome = true;

  const printWelcomeMessage = () => {
    const name = getText("welcome_name");
    const role = getText("neofetch_role");

    if (isFirstWelcome) {
      isFirstWelcome = false;
      const mono = 'class="text-base font-mono mb-0.5"';
      const seq = [
        [0,    `<div ${mono}><span class="text-white/25">[ BOOT  ]</span><span class="text-white/45"> DevConsole v2.0</span></div>`],
        [170,  `<div ${mono}><span style="color:#4ade80">[ OK    ]</span><span class="text-white/40"> Loading kernel...</span></div>`],
        [340,  `<div ${mono}><span style="color:#4ade80">[ OK    ]</span><span class="text-white/40"> Mounting filesystem...</span></div>`],
        [510,  `<div ${mono}><span style="color:#4ade80">[ INIT  ]</span><span class="text-white/40"> Loading profile: </span><span class="text-white/70">${name}</span></div>`],
        [680,  `<div ${mono} mb-4"><span style="color:#4ade80">[ READY ]</span><span class="text-white/40"> Environment initialized</span></div>`],
        [950,  `<div class="border-l-2 pl-4 py-2 mb-3" style="border-color:rgba(74,222,128,0.5)"><p class="text-4xl sm:text-5xl font-bold leading-tight" style="color:#4ade80">${name}</p><p class="text-sm mt-2 tracking-wide" style="color:rgba(74,222,128,0.85)">▸ ${role}</p></div>`],
        [1100, `<div class="h-px mb-3" style="background:linear-gradient(90deg,rgba(74,222,128,0.3),transparent)"></div>`],
        [1200, `<div class="text-base font-mono"><p class="text-white/55">${getText("welcome_help")}</p><p class="text-white/55 mt-0.5">${getText("welcome_shortcuts")}</p></div>`],
      ];
      seq.forEach(([delay, html]) => setTimeout(() => appendHtml(html), delay));
    } else {
      appendHtml(`
        <div class="mb-4 text-base font-mono">
          <div class="border-l-2 pl-4 py-2 mb-3" style="border-color:rgba(74,222,128,0.5)">
            <p class="text-4xl sm:text-5xl font-bold leading-tight" style="color:#4ade80">${name}</p>
            <p class="text-sm mt-2 tracking-wide" style="color:rgba(74,222,128,0.85)">▸ ${role}</p>
          </div>
          <div class="h-px mb-3" style="background:linear-gradient(90deg,rgba(74,222,128,0.3),transparent)"></div>
          <p class="text-white/55">${getText("welcome_help")}</p>
          <p class="text-white/55 mt-0.5">${getText("welcome_shortcuts")}</p>
        </div>`);
    }
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
          "neofetch^2000",
          "about^1500",
          "skills^1500",
          "projects^1500",
          "education^1500",
          "experience^1500",
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
      `<div class="flex"><span class="accent-teal font-bold">ismael@leosoftware</span><span class="text-white/70">:</span><span class="accent-warm">${escapeHtml(promptPath)}</span><span class="text-white/70">$</span><p class="ml-2 text-white">${escapeHtml(cmd)}</p></div>`,
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
          <li class="text-white/60"><span class="accent-teal font-bold">demo</span> <span class="text-white/30">—</span> ${getText("help_demo")}</li>
          <li class="text-white/60"><span class="accent-teal font-bold">neofetch</span> <span class="text-white/30">—</span> ${getText("help_neofetch")}</li>
          <li class="text-white/60"><span class="accent-teal font-bold">clear</span> <span class="text-white/30">—</span> ${getText("help_clear")}</li>
          <li class="text-white/60"><span class="accent-violet font-bold">Ctrl+L</span> <span class="text-white/30">—</span> ${getText("help_clear_shortcut")}</li>
          <li class="text-white/60"><span class="accent-teal font-bold">exit</span> <span class="text-white/30">—</span> ${getText("help_exit")}</li>
          <li class="text-white/60"><span class="accent-teal font-bold">leo/</span> <span class="text-white/30">—</span> ${getText("help_leo")}</li>
        </ul>`;
      appendHtml(`<div>${helpText}</div>`);
    } else if (command === "exit" || command === "leo/") {
      appendHtml(
        `<div><p class="text-white/50">Navegando a leosoftware.dev...</p></div>`,
      );
      setTimeout(() => {
        window.location.href = "https://leosoftware.dev";
      }, 800);
    } else if (command === "ls" || command === "cat" || command === "cd" || command === "pwd") {
      appendHtml(
        `<div><p class="text-white/50 italic">${getText("unix_removed")}</p></div>`,
      );
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
            `<div class="flex"><span class="accent-teal font-bold">ismael@leosoftware</span><span class="text-white/70">:</span><span class="accent-warm">${escapeHtml(promptPath)}</span><span class="text-white/70">$</span><p class="ml-2 text-white/70">${escapeHtml(partialCommand)}</p></div>`,
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

  const setLang = (lang) => {
    if (lang !== "en" && lang !== "es") return;
    currentLang.value = lang;
    localStorage.setItem("portfolioLang", lang);
    document.documentElement.lang = lang;
  };

  async function loadContentAndInit() {
    document.documentElement.lang = currentLang.value;
    try {
      translations.value = await loadContentJson();
      printWelcomeMessage();

      const cmds = ["about", "projects", "skills", "experience", "education", "contact"];
      const chipStyle = [
        "display:inline-block",
        "padding:3px 10px",
        "margin:2px 2px",
        "border-radius:5px",
        "font-family:monospace",
        "font-size:11px",
        "background:rgba(74,222,128,0.08)",
        "border:1px solid rgba(74,222,128,0.22)",
        "color:rgba(74,222,128,0.9)",
        "cursor:pointer",
      ].join(";");
      const chips = cmds.map((c) => `<button data-cmd="${c}" style="${chipStyle}">${c}</button>`).join("");

      const hint =
        currentLang.value === "es"
          ? "Pulsa un comando o escríbelo:"
          : "Click a command or type it:";
      const shortcuts =
        currentLang.value === "es"
          ? `↑↓ historial · TAB completar · <button data-cmd="demo" style="${chipStyle}">demo</button> para el tour`
          : `↑↓ history · TAB complete · <button data-cmd="demo" style="${chipStyle}">demo</button> for a tour`;

      const onboarding = `
        <div style="font-family:monospace;margin-top:6px">
          <p style="color:rgba(255,255,255,0.38);font-size:11px;margin-bottom:6px">── commands ───────────────────</p>
          <p style="color:rgba(255,255,255,0.45);font-size:12px;margin-bottom:5px">${hint}</p>
          <div style="margin-bottom:8px">${chips}</div>
          <p style="color:rgba(255,255,255,0.3);font-size:11px">${shortcuts}</p>
        </div>`;
      setTimeout(() => appendHtml(`<div>${onboarding}</div>`), 1400);
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
    setLang,
    getText,
  };
}
