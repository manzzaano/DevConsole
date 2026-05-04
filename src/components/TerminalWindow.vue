<template>
  <div
    class="relative text-white flex items-center justify-center min-h-screen p-2 md:p-4 overflow-hidden"
  >
    <canvas
      ref="canvasRef"
      class="fixed inset-0 z-0 pointer-events-none"
    ></canvas>
    <div class="fixed inset-0 z-[1] pointer-events-none opacity-[0.045] bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27200%27 height=%27200%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.65%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27200%27 height=%27200%27 filter=%27url(%23n)%27/%3E%3C/svg%3E')] bg-repeat bg-[length:200px_200px]"></div>

    <div
      id="window"
      class="glass-panel p-0 w-full max-w-4xl h-[92dvh] md:h-[90dvh] flex flex-col relative z-10"
    >
      <div
        class="bg-white/[3%] rounded-t-[24px] p-3 flex items-center gap-2 border-b border-white/[15%] flex-shrink-0 z-10"
      >
        <div
          class="w-3 h-3 bg-white/30 rounded-full shadow-[0_0_4px_rgba(255,255,255,0.2)]"
        ></div>
        <div
          class="w-3 h-3 bg-white/20 rounded-full shadow-[0_0_4px_rgba(255,255,255,0.15)]"
        ></div>
        <div
          class="w-3 h-3 bg-white/12 rounded-full shadow-[0_0_4px_rgba(255,255,255,0.1)]"
        ></div>
        <div class="ml-2 text-xs text-white/30 font-mono hidden sm:block">
          manzzaano@portfolio
        </div>
      </div>

      <div
        id="terminal"
        ref="terminalElement"
        class="p-4 md:p-6 flex-grow flex flex-col overflow-y-auto z-10 scroll-smooth custom-scrollbar"
        @click="focusInput"
      >
        <TerminalOutput ref="outputComponent" />

        <div
          v-if="isDemoMode"
          class="flex items-center mt-2 flex-shrink-0 text-sm md:text-base"
        >
          <span class="text-white glow">manzzaano@portfolio:~$</span>
          <span id="demo-typing" class="ml-2 whitespace-pre"></span>
        </div>

        <div v-if="!isDemoMode" class="mt-2">
          <div
            class="md:hidden flex flex-wrap gap-2 mb-4 p-2 bg-white/[3%] rounded-[24px] border border-white/[15%]"
          >
            <button @click.stop="handleMobileKey('tab')" class="glass-btn-sm font-bold">
              TAB
            </button>
            <button @click.stop="handleMobileKey('arrowup')" class="glass-btn-sm font-bold">
              ▲ UP
            </button>
            <button
              @click.stop="handleMobileKey('arrowdown')"
              class="glass-btn-sm font-bold"
            >
              ▼ DWN
            </button>
            <button
              @click.stop="handleMobileKey('l', true)"
              class="glass-btn-sm font-bold"
            >
              CLS
            </button>
          </div>

          <TerminalInput
            ref="inputComponent"
            v-model="inputText"
            :isFocused="isFocused"
            :suggestionRemainder="suggestionRemainder"
            :inputLineId="'input-line'"
            @keydown="onKeyDown"
          />
        </div>
      </div>
    </div>

    <Modal
      :modalHidden="modalHidden"
      :title="modalTitle"
      :componentName="modalComponent"
      :currentLang="currentLang"
      @close="closeWindow"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import TerminalOutput from "./TerminalOutput.vue";
import TerminalInput from "./TerminalInput.vue";
import Modal from "./Modal.vue";
import { useTerminal } from "../composables/useTerminal";
import { useBackground } from "../composables/useBackground";

const outputComponent = ref(null);
const inputComponent = ref(null);
const inputLineRef = ref(null);
const canvasRef = ref(null);
const terminalElement = ref(null);

useBackground(canvasRef);

const {
  inputText,
  isFocused,
  isDemoMode,
  suggestionRemainder,
  modalHidden,
  modalTitle,
  modalComponent,
  currentLang,
  onKeyDown,
  loadContentAndInit,
  onDocumentKeyDown,
  focusInput,
  closeWindow,
} = useTerminal({
  outputRef: outputComponent,
  inputRef: inputComponent,
  inputLineRef,
  terminalRef: terminalElement,
});

const handleMobileKey = (key, ctrl = false) => {
  onKeyDown({
    key,
    ctrlKey: ctrl,
    preventDefault: () => {},
  });
  focusInput();
};

onMounted(() => {
  document.addEventListener("keydown", onDocumentKeyDown);
  nextTick(() => {
    if (inputComponent.value) {
      inputLineRef.value =
        inputComponent.value.inputLineRef || inputComponent.value.inputRefLocal;
      inputComponent.value.focus?.();
    }
    loadContentAndInit();
  });
});

onBeforeUnmount(() => {
  document.removeEventListener("keydown", onDocumentKeyDown);
});
</script>

<style scoped>
@reference "../assets/styles.css";

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 10px;
}
</style>
