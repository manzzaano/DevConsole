import { ref, nextTick } from "vue";
import {
  windowCommands,
  terminalCommandsList,
  allCommands,
} from "../constants/commands";
import { loadContentJson } from "../services/contentService";
import { escapeHtml } from "../utils/escapeHtml";
import Typed from "typed.js"; // <--- 1. Importar Typed.js

/**
 * Composable para gestionar toda la lógica de la terminal.
 * @param {object} refs - Referencias a componentes y elementos del DOM.
 * @param {import('vue').Ref<object|null>} refs.outputRef - Ref al componente TerminalOutput.
 * @param {import('vue').Ref<object|null>} refs.inputRef - Ref al componente TerminalInput.
 * @param {import('vue').Ref<HTMLElement|null>} refs.inputLineRef - Ref al elemento contenedor de la línea de input.
 */
export function useTerminal({ outputRef, inputRef, inputLineRef }) {
  // --- Estado Reactivo ---
  const inputText = ref(""); // El texto actual en el input
  const isFocused = ref(true); // Estado de foco de la terminal
  const isDemoMode = ref(false); // <--- 2. Estado para el modo demo

  // --- Estado del Modal ---
  const modalHidden = ref(true);
  const modalTitle = ref("");
  const modalContent = ref("");

  // --- Historial de Comandos ---
  let commandHistory = [];
  let historyIndex = -1; // -1 = nuevo comando, 0 = último, etc.

  // --- Internacionalización (i18n) ---
  const getInitialLang = () => {
    const savedLang = localStorage.getItem("portfolioLang");
    return savedLang === "en" || savedLang === "es" ? savedLang : "en";
  };
  let currentLang = getInitialLang();
  const translations = ref({});

  const getText = (key) =>
    (translations.value[currentLang] && translations.value[currentLang][key]) ||
    key;

  // --- Manipulación del Output ---

  const appendHtml = (html) => {
    if (outputRef && outputRef.value && outputRef.value.appendHtml) {
      outputRef.value.appendHtml(html);
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
        <p class="text-2xl font-bold text-emerald-400 glow">${getText(
          "welcome_title"
        )}</p>
        <p>${getText("welcome_help")}</p>
        <p>${getText("welcome_shortcuts")}</p>
      </div>`;
    appendHtml(welcomeMessage);
  };

  // --- Lógica de Ventana/Modal ---

  const openWindow = (command) => {
    if (inputLineRef && inputLineRef.value && inputLineRef.value.classList)
      inputLineRef.value.classList.remove("is-focused");
    
    if (inputRef && inputRef.value) {
      if (inputRef.value.inputRefLocal) {
        try {
          inputRef.value.inputRefLocal.disabled = true;
        } catch (e) {}
      }
    }

    modalTitle.value = getText(`${command}_title`);
    modalContent.value = getText(`${command}_html`);
    modalHidden.value = false;

    nextTick(() => {
      try {
        if (window.lucide && window.lucide.createIcons)
          window.lucide.createIcons();
      } catch (e) {
        console.error("lucide createIcons error:", e);
      }
    });
  };

  const closeWindow = () => {
    modalHidden.value = true;
    modalContent.value = "";
    
    // Solo restaura el foco si no estamos en modo demo
    if (!isDemoMode.value) {
      if (inputLineRef && inputLineRef.value && inputLineRef.value.classList)
        inputLineRef.value.classList.add("is-focused");
      
      if (inputRef && inputRef.value) {
        if (inputRef.value.inputRefLocal) {
          try {
            inputRef.value.inputRefLocal.disabled = false;
          } catch (e) {}
        }
      }
      
      isFocused.value = true;
      nextTick(focusInput);
    }
  };

  const focusInput = () => {
    nextTick(() => {
      if (
        inputRef &&
        inputRef.value &&
        typeof inputRef.value.focus === "function"
      ) {
        inputRef.value.focus();
      }
    });
  };
  
  const clearTerminal = () => {
    clearOutput();
    printWelcomeMessage();
    // No enfocar si la demo está a punto de empezar
    if (!isDemoMode.value) {
      nextTick(focusInput);
    }
  };

  // --- Lógica de Demo (Typed.js) ---
  let typedInstance = null; // Guardar la instancia para destruirla

  /** Detiene y limpia la demo si está en curso. */
  const stopDemo = () => {
    if (typedInstance) {
      typedInstance.destroy();
      typedInstance = null;
    }
    isDemoMode.value = false;
    nextTick(focusInput); // Devuelve el foco al input real
  };

  /** Inicia la demo automatizada. */
  async function startDemo() {
    if (isDemoMode.value) return; // Demo ya en curso

    isDemoMode.value = true;
    
    // Helper para simular la ejecución de comandos
    const runCommand = (cmd) => {
      executeCommand(cmd); // Llama a tu función real
      
      // Si el comando abre una ventana, la cerramos para la demo
      if (windowCommands.includes(cmd)) {
          setTimeout(closeWindow, 1500); // Cierra la ventana después de 1.5s
          return new Promise(resolve => setTimeout(resolve, 2000)); // Espera total 2s
      }
      // Pausa estándar para otros comandos
      return new Promise(resolve => setTimeout(resolve, 1500));
    };

    // Espera a que el v-if en TerminalWindow.vue renderice #demo-typing
    await nextTick(); 

    try {
      typedInstance = new Typed('#demo-typing', {
        strings: [
          'help^1000',      // Escribe 'help', espera 1s
          'projects^1500',  // Borra, escribe 'projects', espera 1.5s
          'skills^1500',    // Borra, escribe 'skills', espera 1.5s
          'contact^1500',   // Borra, escribe 'contact', espera 1.5s
          'clear^1000'      // Borra, escribe 'clear', espera 1s
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1000,
        loop: false,
        showCursor: true,
        cursorChar: '▋',
        onStringTyped: async (arrayPos, self) => {
          // Obtener el comando (sin los caracteres de pausa '^1000')
          const cmd = self.strings[arrayPos].split('^')[0]; 
          
          await runCommand(cmd); // Ejecuta el comando y espera
          
          // Al final de la demo
          if (arrayPos === self.strings.length - 1) {
            setTimeout(() => {
              stopDemo(); // Limpia y finaliza la demo
              // Mensaje final
              appendHtml(`<div><p>${getText("welcome_help")}</p></div>`);
            }, 2000); // Espera 2s después del 'clear'
          }
        }
      });
    } catch (e) {
      console.error("Error al iniciar Typed.js. ¿Existe el elemento #demo-typing en TerminalWindow.vue?", e);
      stopDemo(); // Revierte si falla
    }
  }

  // --- Ejecución de Comandos ---

  const executeCommand = (cmdRaw) => {
    const cmd = String(cmdRaw);
    const [command, ...args] = cmd.split(" ").filter(Boolean);
    
    // --- 7. Comando especial 'demo' ---
    if (command === "demo") {
      clearTerminal(); // Limpia la terminal
      startDemo();     // Inicia la demo
      return;          // No ejecuta el resto
    }
    
    // Imprime el comando ejecutado (eco)
    appendHtml(
      `<div class="flex"><span class="text-emerald-400 glow">manzano@portfolio:~$</span><p class="ml-2">${escapeHtml(
        cmd
      )}</p></div>`
    );

    // --- Enrutamiento de Comandos ---
    if (windowCommands.includes(command)) {
      appendHtml(
        `<div><p>${getText(
          "opening_app"
        )} <span class="text-yellow-400">${command}</span>...</p></div>`
      );
      openWindow(command);
    } else if (command === "clear") {
      clearTerminal();
    } else if (command === "lang") {
      const lang = args[0];
      if (lang === "en" || lang === "es") {
        currentLang = lang;
        localStorage.setItem("portfolioLang", lang);
        document.documentElement.lang = lang;
        appendHtml(`<div><p>${getText("lang_changed")}</p></div>`);
        setTimeout(clearTerminal, 800);
      } else {
        appendHtml(
          `<div><p class="text-red-400 glow">${getText("lang_usage")}</p></div>`
        );
      }
    } else if (command === "help") {
      const helpText = `
        <p class="mb-2">${getText("help_header")}</p>
        <ul class="list-disc list-inside">
          ${windowCommands
            .map(
              (c) =>
                `<li><span class="text-emerald-400 glow">${c}</span> - ${getText(
                  "help_" + c
                )}</li>`
            )
            .join("")}
          <li><span class="text-emerald-400 glow">lang</span> - ${getText(
            "help_lang"
          )}</li>
          <li><span class="text-emerald-400 glow">clear</span> - ${getText(
            "help_clear"
          )}</li>
          <li><span class="text-yellow-400 glow">Ctrl+L</span> - ${getText(
            "help_clear_shortcut"
          )}</li>
        </ul>`;
      appendHtml(`<div>${helpText}</div>`);
    } else {
      // Comando no encontrado
      appendHtml(
        `<div><p class="text-red-400 glow">${getText(
          "command_not_found"
        )} '${escapeHtml(command)}'. ${getText("type_help")}</p></div>`
      );
    }
  };

  // --- Manejadores de Eventos de Teclado ---

  const onKeyDown = (e) => {
    const key = (e.key || "").toString().toLowerCase();

    // <--- 8. Bloquear input durante la demo ---
    // Si la demo está activa, ignoramos todas las teclas.
    // 'Escape' se maneja en onDocumentKeyDown
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

    if (key === "tab") {
      e.preventDefault();
      const partialCommand = inputText.value.trim().toLowerCase();
      const matches = allCommands.filter((c) => c.startsWith(partialCommand));
      
      if (matches.length === 1) {
        inputText.value = matches[0];
      } else if (matches.length > 1) {
        appendHtml(
          `<div class="flex"><span class="text-emerald-400 glow">manzano@portfolio:~$</span><p class="ml-2">${escapeHtml(
            partialCommand
          )}</p></div>`
        );
        appendHtml(
          `<div class="flex flex-wrap gap-x-4">${matches.join(" ")}</div>`
        );
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

  /** Manejador global para la tecla Escape (cierra el modal O detiene la demo). */
  const onDocumentKeyDown = (e) => {
    const key = (e.key || "").toString().toLowerCase();
    if (key !== "escape") return; // Solo nos importa Escape

    // <--- 9. 'Escape' para detener la demo ---
    if (isDemoMode.value) {
      e.preventDefault();
      stopDemo();
      appendHtml(`<div><p class="text-yellow-400 glow">Demo detenida.</p></div>`);
      return;
    }
    
    // Comportamiento original: cerrar modal
    if (!modalHidden.value) {
      closeWindow();
    }
  };

  // --- Inicialización ---

  async function loadContentAndInit() {
    document.documentElement.lang = currentLang;
    try {
      translations.value = await loadContentJson();
      printWelcomeMessage();
      
      // <--- 6. Añadir invitación a la demo ---
      const langDemo = currentLang === 'es' 
        ? '¿Es tu primera vez aquí? Escribe "<span class=\"text-yellow-400 glow\">demo</span>" para un tour rápido.'
        : 'First time here? Type "<span class=\"text-yellow-400 glow\">demo</span>" for a quick tour.';
      appendHtml(`<div><p>${langDemo}</p></div>`);
      
      // Inicializar iconos
      try {
        if (window.lucide && window.lucide.createIcons)
          window.lucide.createIcons();
      } catch (err) {
        console.error("lucide init error:", err);
      }
      
      // Foco inicial
      nextTick(focusInput);

    } catch (e) {
      appendHtml(
        `<p class="text-red-400 glow">Error: No se pudo cargar el contenido del portafolio. Por favor, refresca la página.</p>`
      );
      console.error(e);
    }
  }

  // --- API Expuesta por el Composable ---
  return {
    inputText,
    isFocused,
    isDemoMode, // <--- 3. Exponer el estado de la demo
    modalHidden,
    modalTitle,
    modalContent,
    onKeyDown,
    onDocumentKeyDown,
    loadContentAndInit,
    focusInput,
    clearTerminal,
    executeCommand,
    closeWindow,
    openWindow,
  };
}