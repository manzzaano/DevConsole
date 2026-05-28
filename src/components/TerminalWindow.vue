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
      @mousedown="onWindowMouseDown"
    >
      <!-- Title bar -->
      <div
        class="bg-white/[3%] rounded-t-[24px] p-3 flex items-center gap-2 flex-shrink-0 z-10"
        :class="[
          { 'select-none': !isMobile && !isMaximized },
          isMinimized ? 'rounded-b-[24px]' : 'border-b border-white/[15%]'
        ]"
        @mousedown="onTitleBarMouseDown"
        @dblclick="onTitleBarDblClick"
      >
        <!-- Window controls -->
        <div class="flex items-center gap-2">
          <button
            @click.stop="handleClose"
            @mouseenter="hoveredBtn = 'close'"
            @mouseleave="hoveredBtn = ''"
            class="w-4 h-4 rounded-full flex items-center justify-center"
            style="background:#ff5f57;box-shadow:0 0 8px rgba(255,95,87,0.5)"
          >
            <span class="text-[8px] font-black leading-none" style="color:rgba(0,0,0,0.5)">✕</span>
          </button>
          <button
            @click.stop="handleMinimize"
            @mouseenter="hoveredBtn = 'min'"
            @mouseleave="hoveredBtn = ''"
            class="w-4 h-4 rounded-full flex items-center justify-center"
            style="background:#ffbd2e;box-shadow:0 0 8px rgba(255,189,46,0.5)"
          >
            <span class="text-[9px] font-black leading-none" style="color:rgba(0,0,0,0.5)">−</span>
          </button>
          <button
            @click.stop="handleMaximize"
            @mouseenter="hoveredBtn = 'max'"
            @mouseleave="hoveredBtn = ''"
            class="w-4 h-4 rounded-full flex items-center justify-center"
            style="background:#28c940;box-shadow:0 0 8px rgba(40,201,64,0.5)"
          >
            <span class="text-[8px] font-black leading-none" style="color:rgba(0,0,0,0.5)">⤢</span>
          </button>

          <Transition name="btn-label">
            <span
              v-if="hoveredBtn"
              class="ml-1 text-[11px] font-mono text-white/45 select-none pointer-events-none"
            >{{ btnLabel }}</span>
          </Transition>
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
          <div class="md:hidden flex flex-wrap gap-1.5 mb-4 p-2 bg-white/[3%] rounded-[24px] border border-white/[15%] justify-center">
            <button @click.stop="handleMobileKey('tab')" class="glass-btn-sm font-bold min-w-[44px] min-h-[44px] flex items-center justify-center text-[11px] px-3">TAB</button>
            <button @click.stop="handleMobileKey('arrowup')" class="glass-btn-sm font-bold min-w-[44px] min-h-[44px] flex items-center justify-center text-[11px] px-3">▲</button>
            <button @click.stop="handleMobileKey('arrowdown')" class="glass-btn-sm font-bold min-w-[44px] min-h-[44px] flex items-center justify-center text-[11px] px-3">▼</button>
            <button @click.stop="handleMobileKey('l', true)" class="glass-btn-sm font-bold min-w-[44px] min-h-[44px] flex items-center justify-center text-[11px] px-3">CLS</button>
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

      <!-- 8-direction resize handles (desktop, not maximized, not minimized) -->
      <template v-if="!isMobile && !isMaximized && !isMinimized">
        <div class="absolute top-0 left-0 w-3 h-3 z-30 cursor-nw-resize"     @mousedown.prevent="onResizeStart($event, 'nw')" />
        <div class="absolute top-0 right-0 w-3 h-3 z-30 cursor-ne-resize"    @mousedown.prevent="onResizeStart($event, 'ne')" />
        <div class="absolute bottom-0 left-0 w-3 h-3 z-30 cursor-sw-resize"  @mousedown.prevent="onResizeStart($event, 'sw')" />
        <div class="absolute bottom-0 right-0 w-3 h-3 z-30 cursor-se-resize" @mousedown.prevent="onResizeStart($event, 'se')" />
        <div class="absolute top-0 left-3 right-3 h-1.5 z-30 cursor-n-resize"    @mousedown.prevent="onResizeStart($event, 'n')" />
        <div class="absolute bottom-0 left-3 right-3 h-1.5 z-30 cursor-s-resize" @mousedown.prevent="onResizeStart($event, 's')" />
        <div class="absolute top-3 bottom-3 left-0 w-1.5 z-30 cursor-w-resize"   @mousedown.prevent="onResizeStart($event, 'w')" />
        <div class="absolute top-3 bottom-3 right-0 w-1.5 z-30 cursor-e-resize"  @mousedown.prevent="onResizeStart($event, 'e')" />
      </template>
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
const dragging    = ref(false);
const resizing    = ref(false);
const hoveredBtn  = ref('');

const btnLabel = computed(() => {
  if (hoveredBtn.value === 'close') return 'cerrar';
  if (hoveredBtn.value === 'min')   return isMinimized.value ? 'restaurar' : 'minimizar';
  if (hoveredBtn.value === 'max')   return isMaximized.value ? 'restaurar' : 'maximizar';
  return '';
});

const winX = ref(0);
const winY = ref(0);
const winW = ref(0);
const winH = ref(0);

const MIN_W = 480;
const MIN_H = 320;

let prevState   = null;
let prevMinH    = 0;

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
  left:       `${winX.value}px`,
  top:        `${winY.value}px`,
  width:      `${winW.value}px`,
  height:     `${winH.value}px`,
  overflow:   'hidden',
  transition: (dragging.value || resizing.value)
    ? 'none'
    : 'left 0.22s ease, top 0.22s ease, width 0.22s ease, height 0.22s ease',
}));

/* ── Drag ─────────────────────────────────────────────────── */

let dragOffX = 0;
let dragOffY = 0;

function onTitleBarMouseDown(e) {
  if (isMobile.value || isMaximized.value) return;
  if (e.target.closest('button, [class*="group/"]')) return;
  dragging.value = true;
  dragOffX = e.clientX - winX.value;
  dragOffY = e.clientY - winY.value;
}

function onTitleBarDblClick(e) {
  if (isMobile.value || e.target.closest('button')) return;
  handleMaximize();
}

/* ── Resize (8 directions) ────────────────────────────────── */

let resizeDir  = '';
let resStartX  = 0;
let resStartY  = 0;
let resStartW  = 0;
let resStartH  = 0;
let resStartLeft = 0;
let resStartTop  = 0;

function onResizeStart(e, dir) {
  resizing.value = true;
  resizeDir  = dir;
  resStartX  = e.clientX;
  resStartY  = e.clientY;
  resStartW  = winW.value;
  resStartH  = winH.value;
  resStartLeft = winX.value;
  resStartTop  = winY.value;
}

/* ── Global mouse handlers ────────────────────────────────── */

function onMouseMove(e) {
  if (dragging.value) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    winX.value = Math.max(0, Math.min(e.clientX - dragOffX, vw - winW.value));
    winY.value = Math.max(0, Math.min(e.clientY - dragOffY, vh - 48));
  }
  if (resizing.value) {
    const dx = e.clientX - resStartX;
    const dy = e.clientY - resStartY;
    let nW = resStartW;
    let nH = resStartH;
    let nX = resStartLeft;
    let nY = resStartTop;

    if (resizeDir.includes('e')) nW = Math.max(MIN_W, resStartW + dx);
    if (resizeDir.includes('s')) nH = Math.max(MIN_H, resStartH + dy);
    if (resizeDir.includes('w')) {
      nW = Math.max(MIN_W, resStartW - dx);
      nX = resStartLeft + (resStartW - nW);
    }
    if (resizeDir.includes('n')) {
      nH = Math.max(MIN_H, resStartH - dy);
      nY = resStartTop + (resStartH - nH);
    }

    winW.value = nW;
    winH.value = nH;
    winX.value = nX;
    winY.value = nY;
  }
}

function onMouseUp() {
  dragging.value = false;
  resizing.value = false;
}

/* ── Window controls ──────────────────────────────────────── */

function handleClose() {
  window.location.href = 'https://leosoftware.dev';
}

const TRANSITION_MS = 240; // matches CSS 0.22s + buffer

function restoreFromMaximized() {
  if (prevState) {
    winX.value = prevState.x;
    winY.value = prevState.y;
    winW.value = prevState.w;
    winH.value = prevState.h;
  }
  isMaximized.value = false;
}

function doMinimize() {
  prevMinH = winH.value;
  isMinimized.value = true;
  winH.value = 48;
}

function doMaximize() {
  prevState = { x: winX.value, y: winY.value, w: winW.value, h: winH.value };
  winX.value = 0;
  winY.value = 0;
  winW.value = window.innerWidth;
  winH.value = window.innerHeight;
  isMaximized.value = true;
}

function handleMinimize() {
  if (isMobile.value) return;

  if (isMinimized.value) {
    // Restore from minimized → normal
    isMinimized.value = false;
    winH.value = prevMinH || 600;
    setTimeout(focusInput, 0);
    return;
  }

  if (isMaximized.value) {
    // Maximized → restore first, then minimize after transition
    restoreFromMaximized();
    setTimeout(doMinimize, TRANSITION_MS);
    return;
  }

  doMinimize();
}

function handleMaximize() {
  if (isMobile.value) return;

  if (isMaximized.value) {
    // Restore from maximized → normal
    restoreFromMaximized();
    return;
  }

  if (isMinimized.value) {
    // Minimized → restore first, then maximize after transition
    isMinimized.value = false;
    winH.value = prevMinH || 600;
    setTimeout(doMaximize, TRANSITION_MS);
    return;
  }

  doMaximize();
}

function onWindowResize() {
  isMobile.value = window.innerWidth < 768;
  if (isMaximized.value) {
    winW.value = window.innerWidth;
    winH.value = window.innerHeight;
  }
}

/* ── Always-on focus ─────────────────────────────────────── */

function onWindowMouseDown() {
  if (isMinimized.value) return;
  setTimeout(focusInput, 0);
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

.btn-label-enter-active,
.btn-label-leave-active { transition: opacity 0.15s ease; }
.btn-label-enter-from,
.btn-label-leave-to { opacity: 0; }
</style>
