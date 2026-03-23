<template>
  <div
    class="relative text-gray-300 flex items-center justify-center min-h-screen p-2 md:p-4 overflow-hidden bg-black"
  >
    <canvas
      ref="canvasRef"
      class="absolute inset-0 z-0 pointer-events-none w-full h-full"
    ></canvas>

    <div
      id="window"
      class="w-full max-w-4xl h-[92dvh] md:h-[90dvh] bg-black/80 rounded-xl shadow-[0_12px_48px_rgba(0,0,0,0.8)] flex flex-col backdrop-blur-md border border-white/5 relative z-10"
    >
      <div
        class="bg-white/5 rounded-t-xl p-3 flex items-center gap-2 border-b border-white/10 flex-shrink-0 z-10"
      >
        <div
          class="w-3 h-3 bg-red-500/80 rounded-full shadow-[0_0_5px_rgba(239,68,68,0.5)]"
        ></div>
        <div
          class="w-3 h-3 bg-yellow-500/80 rounded-full shadow-[0_0_5px_rgba(234,179,8,0.5)]"
        ></div>
        <div
          class="w-3 h-3 bg-green-500/80 rounded-full shadow-[0_0_5px_rgba(34,197,94,0.5)]"
        ></div>
        <div class="ml-2 text-xs text-gray-500 font-mono hidden sm:block">
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
          <span class="manzano-green glow">manzzaano@portfolio:~$</span>
          <span id="demo-typing" class="ml-2 whitespace-pre"></span>
        </div>

        <div v-if="!isDemoMode" class="mt-2">
          <div
            class="md:hidden flex flex-wrap gap-2 mb-4 p-2 bg-white/5 rounded-lg border border-white/10"
          >
            <button @click.stop="handleMobileKey('tab')" class="mobile-btn">
              TAB
            </button>
            <button @click.stop="handleMobileKey('arrowup')" class="mobile-btn">
              ▲ UP
            </button>
            <button
              @click.stop="handleMobileKey('arrowdown')"
              class="mobile-btn"
            >
              ▼ DWN
            </button>
            <button
              @click.stop="handleMobileKey('l', true)"
              class="mobile-btn text-red-400"
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

const outputComponent = ref(null);
const inputComponent = ref(null);
const inputLineRef = ref(null);
const canvasRef = ref(null);
const terminalElement = ref(null);
let animationFrameId = null;

// Extraemos los nuevos valores reactivos para la Modal
const {
  inputText,
  isFocused,
  isDemoMode,
  suggestionRemainder,
  modalHidden,
  modalTitle,
  modalComponent, // <--- Nueva prop dinámica
  currentLang, // <--- Idioma para los componentes de contenido
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

// --- Lógica WebGL (Sin cambios para mantener el estilo visual) ---
const initWebGLShader = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  const gl = canvas.getContext("webgl");
  if (!gl) return;

  const vsSource = `
    attribute vec2 position;
    void main() { gl_Position = vec4(position, 0.0, 1.0); }
  `;

  const fsSource = `
    precision highp float;
    uniform vec2 iResolution;
    uniform float iTime;

    vec3 colormap(float x) {
      vec3 black = vec3(0.0, 0.0, 0.0); 
      vec3 emerald = vec3(0.204, 0.827, 0.600); 
      return mix(black, emerald, smoothstep(0.3, 0.5, x)); 
    }

    float rand(vec2 n) { return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453); }

    float noise(vec2 p){
      vec2 ip = floor(p);
      vec2 u = fract(p);
      u = u*u*(3.0-2.0*u);
      float res = mix(
        mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
        mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
      return res*res;
    }

    const mat2 mtx = mat2( 0.80,  0.60, -0.60,  0.80 );

    float fbm( vec2 p ) {
      float f = 0.0;
      f += 0.500000*noise( p + iTime * 0.03 ); p = mtx*p*2.02;
      f += 0.031250*noise( p ); p = mtx*p*2.01;
      f += 0.250000*noise( p ); p = mtx*p*2.03;
      f += 0.125000*noise( p ); p = mtx*p*2.01;
      f += 0.062500*noise( p ); p = mtx*p*2.04;
      f += 0.015625*noise( p + sin(iTime * 0.02) );
      return f/0.96875;
    }

    float pattern( in vec2 p ) { return fbm( p + fbm( p + fbm( p ) ) ); }

    float randomGrain(vec2 uv, float time) {
        return fract(sin(dot(uv, vec2(12.9898, 78.233)) + time) * 43758.5453);
    }

    void main() {
      vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / min(iResolution.y, iResolution.x);
      vec2 fbm_uv = uv * 2.2; 
      float shade = pattern(fbm_uv);
      vec3 color = colormap(shade);
      float grain = randomGrain(gl_FragCoord.xy, iTime);
      color = mix(color, color * (1.0 + (grain - 0.5) * 0.08), 0.6); 
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  const compileShader = (type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return shader;
  };

  const program = gl.createProgram();
  gl.attachShader(program, compileShader(gl.VERTEX_SHADER, vsSource));
  gl.attachShader(program, compileShader(gl.FRAGMENT_SHADER, fsSource));
  gl.linkProgram(program);
  gl.useProgram(program);

  const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  const positionLoc = gl.getAttribLocation(program, "position");
  gl.enableVertexAttribArray(positionLoc);
  gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

  const iResolutionLoc = gl.getUniformLocation(program, "iResolution");
  const iTimeLoc = gl.getUniformLocation(program, "iTime");

  const render = (time) => {
    if (
      canvas.width !== window.innerWidth ||
      canvas.height !== window.innerHeight
    ) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    gl.uniform2f(iResolutionLoc, canvas.width, canvas.height);
    gl.uniform1f(iTimeLoc, time / 1000.0);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    animationFrameId = requestAnimationFrame(render);
  };
  requestAnimationFrame(render);
};

onMounted(() => {
  document.addEventListener("keydown", onDocumentKeyDown);
  initWebGLShader();
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
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
});
</script>

<style scoped>
.manzano-green {
  color: #34d399;
}
.mobile-btn {
  @apply bg-white/10 hover:bg-white/20 active:bg-emerald-500/50 
         px-4 py-2 rounded text-xs font-mono font-bold 
         transition-colors border border-white/5;
}
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(52, 211, 153, 0.2);
  border-radius: 10px;
}
</style>
