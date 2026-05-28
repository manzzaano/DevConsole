<template>
  <div
    class="relative text-white overflow-hidden"
    :class="isMobile ? 'flex items-center justify-center min-h-screen p-2' : 'min-h-screen'"
  >
    <FlowField />

    <div
      id="window"
      ref="windowEl"
      class="glass-panel p-0 flex flex-col z-10"
      :class="isMobile ? 'relative w-full max-w-4xl mx-0 sm:mx-2 h-[95dvh] sm:h-[92dvh]' : 'fixed'"
      :style="!isMobile ? windowStyle : {}"
    >
      <!-- Title bar -->
      <div
        class="bg-white/[3%] rounded-t-[24px] p-3 flex items-center gap-2 border-b border-white/[15%] flex-shrink-0 z-10"
        :class="{ 'select-none': !isMobile && !isMaximized }"
        @mousedown="onTitleBarMouseDown"
      >
        <!-- macOS window controls -->
        <div class="flex items-center gap-1.5 group/btns">
          <button
            @click.stop="handleClose"
            class="w-3 h-3 rounded-full flex items-center justify-center"
            style="background: #ff5f57; box-shadow: 0 0 6px rgba(255,95,87,0.45)"
            title="Cerrar"
          >
            <span class="opacity-0 group-hover/btns:opacity-100 text-[7px] font-black leading-none transition-opacity" style="color: rgba(0,0,0,0.5)">✕</span>
          </button>
          <button
            @click.stop="handleMinimize"
            class="w-3 h-3 rounded-full flex items-center justify-center"
            style="background: #ffbd2e; box-shadow: 0 0 6px rgba(255,189,46,0.45)"
            title="Minimizar"
          >
            <span class="opacity-0 group-hover/btns:opacity-100 text-[8px] font-black leading-none transition-opacity" style="color: rgba(0,0,0,0.5)">−</span>
          </button>
          <button
            @click.stop="handleMaximize"
            class="w-3 h-3 rounded-full flex items-center justify-center"
            style="background: #28c940; box-shadow: 0 0 6px rgba(40,201,64,0.45)"
            title="Maximizar"
          >
            <span class="opacity-0 group-hover/btns:opacity-100 text-[7px] font-black leading-none transition-opacity" style="color: rgba(0,0,0,0.5)">⤢</span>
          </button>
        </div>

        <div class="ml-2 text-xs font-mono hidden sm:block">
          <span class="accent-teal">ismael@leosoftware</span><span class="text-white/30">:</span><span class="accent-warm">~</span>
        </div>
      </div>

      <!-- Terminal content -->
      <div
        v-show="!isMinimized"
        id="terminal"
        ref="terminalElement"
        class="p-3 sm:p-4 md:p-6 flex-grow flex flex-col overflow-y-auto z-10 scroll-smooth custom-scrollbar"
        @click="focusInput"
      >
        <TerminalOutput ref="outputComponent" />

        <div
          v-if="isDemoMode"
          class="flex items-center mt-2 flex-shrink-0 text-sm md:text-base"
        >
          <span class="accent-teal font-bold text-xs sm:text-sm md:text-base">ismael@leosoftware</span><span class="text-white/70 text-xs sm:text-sm md:text-base">:</span><span class="accent-warm text-xs sm:text-sm md:text-base">{{ promptPath }}</span><span class="text-white/70 text-xs sm:text-sm md:text-base">$</span>
          <span id="demo-typing" class="ml-2 whitespace-pre text-white text-xs sm:text-sm md:text-base"></span>
        </div>

        <div v-if="!isDemoMode" class="mt-2">
          <div
            class="md:hidden flex flex-wrap gap-1.5 mb-4 p-2 bg-white/[3%] rounded-[24px] border border-white/[15%] justify-center"
          >
            <button @click.stop="handleMobileKey('tab')" class="glass-btn-sm font-bold min-w-[44px] min-h-[44px] flex items-center justify-center text-[11px] px-3">
              TAB
            </button>
            <button @click.stop="handleMobileKey('arrowup')" class="glass-btn-sm font-bold min-w-[44px] min-h-[44px] flex items-center justify-center text-[11px] px-3">
              ▲
            </button>
            <button
              @click.stop="handleMobileKey('arrowdown')"
              class="glass-btn-sm font-bold min-w-[44px] min-h-[44px] flex items-center justify-center text-[11px] px-3"
            >
              ▼
            </button>
            <button
              @click.stop="handleMobileKey('l', true)"
              class="glass-btn-sm font-bold min-w-[44px] min-h-[44px] flex items-center justify-center text-[11px] px-3"
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
            :promptPath="promptPath"
            @keydown="onKeyDown"
          />
        </div>
      </div>

      <!-- Resize handle (desktop, not maximized) -->
      <div
        v-if="!isMobile && !isMinimized && !isMaximized"
        class="absolute bottom-0 right-0 w-5 h-5 z-20 cursor-se-resize"
        style="background: linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.07) 50%); border-radius: 0 0 24px 0"
        @mousedown.prevent.stop="onResizeStart"
      />
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
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from "vue";
import TerminalOutput from "./TerminalOutput.vue";
import TerminalInput from "./TerminalInput.vue";
import Modal from "./Modal.vue";
import FlowField from "./FlowField.vue";
import { useTerminal } from "../composables/useTerminal";

const outputComponent = ref(null);
const inputComponent  = ref(null);
const inputLineRef    = ref(null);
const terminalElement = ref(null);
const windowEl        = ref(null);

const {
  inputText, isFocused, isDemoMode, suggestionRemainder, promptPath,
  modalHidden, modalTitle, modalComponent, currentLang,
  onKeyDown, loadContentAndInit, onDocumentKeyDown, focusInput, closeWindow,
} = useTerminal({
  outputRef:    outputComponent,
  inputRef:     inputComponent,
  inputLineRef,
  terminalRef:  terminalElement,
});

/* ── Window state ─────────────────────────────────────────── */

const isMobile    = ref(false);
const isMinimized = ref(false);
const isMaximized = ref(false);

const winX = ref(0);
const winY = ref(0);
const winW = ref(0);
const winH = ref(0);

const MIN_W = 480;
const MIN_H = 320;

let prevState = null;

function initWindow() {
  isMobile.value = window.innerWidth < 768;
  if (isMobile.value) return;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  winW.value = Math.min(896, vw * 0.92);
  winH.value = vh * 0.9;
  winX.value = (vw - winW.value) / 2;
  winY.value = (vh - winH.value) / 2;
}

const windowStyle = computed(() => ({
  left:   `${winX.value}px`,
  top:    `${winY.value}px`,
  width:  `${winW.value}px`,
  height: isMinimized.value ? 'auto' : `${winH.value}px`,
}));

/* ── Drag ─────────────────────────────────────────────────── */

let dragging = false;
let dragOffX = 0;
let dragOffY = 0;

function onTitleBarMouseDown(e) {
  if (isMobile.value || isMaximized.value) return;
  if (e.target.closest('button')) return;
  dragging = true;
  dragOffX  = e.clientX - winX.value;
  dragOffY  = e.clientY - winY.value;
}

/* ── Resize ───────────────────────────────────────────────── */

let resizing  = false;
let resStartX = 0;
let resStartY = 0;
let resStartW = 0;
let resStartH = 0;

function onResizeStart(e) {
  resizing  = true;
  resStartX = e.clientX;
  resStartY = e.clientY;
  resStartW = winW.value;
  resStartH = winH.value;
}

/* ── Global mouse handlers ────────────────────────────────── */

function onMouseMove(e) {
  if (dragging) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    winX.value = Math.max(0, Math.min(e.clientX - dragOffX, vw - winW.value));
    winY.value = Math.max(0, Math.min(e.clientY - dragOffY, vh - 48));
  }
  if (resizing) {
    winW.value = Math.max(MIN_W, resStartW + (e.clientX - resStartX));
    winH.value = Math.max(MIN_H, resStartH + (e.clientY - resStartY));
  }
}

function onMouseUp() {
  dragging = false;
  resizing = false;
}

/* ── Window controls ──────────────────────────────────────── */

function handleClose() {
  window.location.href = 'https://leosoftware.dev';
}

function handleMinimize() {
  if (isMobile.value) return;
  isMinimized.value = !isMinimized.value;
}

function handleMaximize() {
  if (isMobile.value) return;
  if (isMaximized.value) {
    if (prevState) {
      winX.value = prevState.x;
      winY.value = prevState.y;
      winW.value = prevState.w;
      winH.value = prevState.h;
    }
    isMaximized.value = false;
  } else {
    prevState = { x: winX.value, y: winY.value, w: winW.value, h: winH.value };
    winX.value = 0;
    winY.value = 0;
    winW.value = window.innerWidth;
    winH.value = window.innerHeight;
    isMaximized.value = true;
  }
}

function onWindowResize() {
  isMobile.value = window.innerWidth < 768;
  if (isMaximized.value) {
    winW.value = window.innerWidth;
    winH.value = window.innerHeight;
  }
}

/* ── Mobile keys ──────────────────────────────────────────── */

const handleMobileKey = (key, ctrl = false) => {
  onKeyDown({ key, ctrlKey: ctrl, preventDefault: () => {} });
  focusInput();
};

/* ── Lifecycle ────────────────────────────────────────────── */

onMounted(() => {
  initWindow();
  document.addEventListener('keydown',   onDocumentKeyDown);
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup',   onMouseUp);
  window.addEventListener('resize',      onWindowResize);
  nextTick(() => {
    if (inputComponent.value) {
      inputLineRef.value = inputComponent.value.inputLineRef || inputComponent.value.inputRefLocal;
      inputComponent.value.focus?.();
    }
    loadContentAndInit();
  });
});

onBeforeUnmount(() => {
  document.removeEventListener('keydown',   onDocumentKeyDown);
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup',   onMouseUp);
  window.removeEventListener('resize',      onWindowResize);
});
</script>

<style scoped>
@reference "../assets/styles.css";

.custom-scrollbar::-webkit-scrollbar { width: 6px; }
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 10px;
}
</style>
