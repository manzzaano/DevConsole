<template>
  <div
    class="bg-[#1a1b26] text-gray-300 flex items-center justify-center min-h-screen p-4"
  >
    <div
      id="window"
      class="w-full max-w-4xl h-[90vh] bg-black bg-opacity-75 rounded-xl shadow-2xl flex flex-col backdrop-blur-sm border border-gray-700 relative"
    >
      <div
        class="bg-gray-800 rounded-t-xl p-3 flex items-center gap-2 border-b border-gray-700 flex-shrink-0 z-10"
      >
        <div class="w-3 h-3 bg-red-500 rounded-full"></div>
        <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>

      <div
        id="terminal"
        class="p-4 md:p-6 flex-grow flex flex-col overflow-hidden z-10"
        @click="focusInput"
      >
        <TerminalOutput ref="outputComponent" />

        <div
          v-if="isDemoMode"
          class="flex items-center mt-2 flex-shrink-0"
        >
          <span class="text-emerald-400 glow">manzano@portfolio:~$</span>
          <span id="demo-typing" class="ml-2 whitespace-pre"></span>
        </div>

        <TerminalInput
          v-if="!isDemoMode"
          ref="inputComponent"
          v-model="inputText"
          :isFocused="isFocused"
          :inputLineId="'input-line'"
          @keydown="onKeyDown"
        />
      </div>
    </div>

    <Modal
      :modalHidden="modalHidden"
      :title="modalTitle"
      :content="modalContent"
      @close="closeWindow"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import TerminalOutput from "./TerminalOutput.vue";
import TerminalInput from "./TerminalInput.vue";
import Modal from "./Modal.vue";
// Importamos el composable con toda la lógica
import { useTerminal } from "../composables/useTerminal";

// --- Referencias a Componentes Hijos ---
const outputComponent = ref(null);
const inputComponent = ref(null);
// Ref al *elemento* HTML de la línea de input (para estilado de foco)
const inputLineRef = ref(null);

// --- Instancia del Composable ---
const {
  inputText,
  isFocused,
  isDemoMode, // <--- 1. DESESTRUCTURAR isDemoMode
  modalHidden,
  modalTitle,
  modalContent,
  onKeyDown,
  loadContentAndInit,
  onDocumentKeyDown,
  focusInput,
  closeWindow,
} = useTerminal({
  outputRef: outputComponent,
  inputRef: inputComponent,
  inputLineRef,
});

// --- Ciclo de Vida ---
onMounted(() => {
  document.addEventListener("keydown", onDocumentKeyDown);

  nextTick(() => {
    // Asignar la referencia al elemento HTML del input (inputLineRef)
    if (inputComponent.value) {
      if (inputComponent.value.inputLineRef) {
        inputLineRef.value = inputComponent.value.inputLineRef;
      } else if (inputComponent.value.inputRefLocal) {
        inputLineRef.value = inputComponent.value.inputRefLocal;
      }

      try {
        if (typeof inputComponent.value.focus === "function") {
          inputComponent.value.focus();
        }
      } catch (e) {}
    }

    loadContentAndInit();
  });

  // Fallback de foco (solo si no estamos en modo demo)
  setTimeout(() => {
    try {
      if (
        !isDemoMode.value && // <-- 2. AÑADIR CONDICIÓN
        inputComponent.value &&
        typeof inputComponent.value.focus === "function"
      )
        inputComponent.value.focus();
    } catch (e) {}
  }, 120);
});

// Limpieza al desmontar el componente
onBeforeUnmount(() => {
  document.removeEventListener("keydown", onDocumentKeyDown);
});
</script>