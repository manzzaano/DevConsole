<template>
  <div class="space-y-8">
    <p class="text-white/40 italic mb-4 text-sm font-mono">
      // {{ t.initMessage }}
    </p>

    <div class="grid grid-cols-1 gap-6">
      <!-- Entreredes -->
      <div
        class="glass-card p-5 flex flex-col group"
      >
        <div class="flex justify-between items-start mb-4">
          <div>
            <span
              class="text-[10px] sm:text-xs accent-teal font-mono tracking-widest uppercase"
              >[ {{ t.deployment }} 00 ]</span
            >
            <h4 class="text-lg sm:text-xl font-bold accent-teal font-sans">
              ENTREREDES CONSULTORÍA TECNOLÓGICA
            </h4>
            <p class="text-xs text-white/40">
              {{ t.roleEntreredes }} | {{ t.dateEntreredes }}
            </p>
          </div>
          <i data-lucide="layers" class="w-5 h-5 text-white/40"></i>
        </div>

        <div class="space-y-2 font-mono text-[11px] sm:text-xs text-white/70 mb-4">
          <p v-for="(task, index) in t.tasksEntreredes" :key="index">
            <span class="accent-teal font-mono text-[10px]">[ {{ task.status }} ]</span>
            {{ task.desc }}
          </p>
        </div>

        <div class="flex flex-wrap gap-2 pt-3 border-t border-white/[8%]">
          <span
            v-for="tech in stackEntreredes"
            :key="tech"
            class="glass-tag accent-teal text-[10px] sm:text-xs"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Savia -->
      <div
        class="glass-card p-5 flex flex-col group"
      >
        <div class="flex justify-between items-start mb-4">
          <div>
            <span
              class="text-[10px] sm:text-xs accent-teal font-mono tracking-widest uppercase"
              >[ {{ t.deployment }} 01 ]</span
            >
            <h4 class="text-lg sm:text-xl font-bold accent-teal font-sans">
              Savia by Berger-Levrault
            </h4>
            <p class="text-xs text-white/40">
              {{ t.roleSavia }} | {{ t.dateSavia }}
            </p>
          </div>
          <i data-lucide="terminal" class="w-5 h-5 text-white/40"></i>
        </div>

        <div class="space-y-2 font-mono text-[11px] sm:text-xs text-white/70 mb-4">
          <p v-for="(task, index) in t.tasksSavia" :key="index">
            <span class="accent-teal font-mono text-[10px]">[ {{ task.status }} ]</span>
            {{ task.desc }}
          </p>
        </div>

        <div class="flex flex-wrap gap-2 pt-3 border-t border-white/[8%]">
          <span
            v-for="tech in stackSavia"
            :key="tech"
            class="glass-tag accent-teal text-[10px] sm:text-xs"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <div
        class="glass-card p-5 flex flex-col group"
      >
        <div class="flex justify-between items-start mb-4">
          <div>
            <span
              class="text-[10px] sm:text-xs accent-teal font-mono tracking-widest uppercase"
              >[ {{ t.deployment }} 02 ]</span
            >
            <h4 class="text-lg sm:text-xl font-bold accent-teal font-sans">Cojali S.L.</h4>
            <p class="text-xs text-white/40">
              {{ t.roleCojali }} | {{ t.dateCojali }}
            </p>
          </div>
          <i data-lucide="cpu" class="w-5 h-5 text-white/40"></i>
        </div>

        <div class="space-y-2 font-mono text-[11px] sm:text-xs text-white/70 mb-4">
          <p v-for="(task, index) in t.tasksCojali" :key="index">
            <span class="accent-teal font-mono text-[10px]">[ {{ task.status }} ]</span>
            {{ task.desc }}
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, nextTick } from "vue";

const props = defineProps({
  lang: { type: String, default: "en" },
});

const stackEntreredes = ["Laravel", "Filament PHP", "PHP", "Gemini AI", "PHPUnit", "Docker"];
const stackSavia      = ["React 19", "Vite", "JavaScript", "TypeScript", "Git"];

// Same facts and voice as the Experience section of leosoftware.dev
const content = {
  en: {
    initMessage: "Loading work history...",
    deployment: "DEPLOYMENT",
    roleEntreredes: "Full Stack Developer",
    dateEntreredes: "Feb 2026 - May 2026 · 4 months",
    tasksEntreredes: [
      { status: "DONE", desc: "I built a landing-page generator SaaS on my own, with Laravel and Filament PHP" },
      { status: "DONE", desc: "I took it to production with Docker and integrated Gemini through async Jobs, so heavy tasks ran in the background" },
      { status: "DONE", desc: "Tests with PHPUnit before every deployment, including load, security and fuzzing tests" },
    ],
    roleSavia: "Frontend Software Developer",
    dateSavia: "Mar 2025 - Apr 2025 · 2 months",
    tasksSavia: [
      { status: "DONE", desc: "Frontend app with React 19 and Vite that handled 1000+ records" },
      { status: "DONE", desc: "Instant search, multiple filters and local persistence" },
      { status: "DONE", desc: "Reusable components, versioned with Git" },
    ],
    roleCojali: "Software QA Analyst",
    dateCojali: "Feb 2025 · 1 month",
    tasksCojali: [
      { status: "DONE", desc: "An internal technical survey system to evaluate staff" },
      { status: "DONE", desc: "Functional testing and quality assurance in the development cycle" },
    ],
  },
  es: {
    initMessage: "Cargando historial de trabajo...",
    deployment: "DESPLIEGUE",
    roleEntreredes: "Full Stack Developer",
    dateEntreredes: "Feb 2026 - May 2026 · 4 meses",
    tasksEntreredes: [
      { status: "DONE", desc: "Desarrollé yo solo un SaaS que genera landing pages, con Laravel y Filament PHP" },
      { status: "DONE", desc: "Lo dejé en producción con Docker e integré Gemini mediante Jobs asíncronos, para que las tareas pesadas fueran en segundo plano" },
      { status: "DONE", desc: "Tests con PHPUnit antes de cada despliegue, incluidas pruebas de carga, seguridad y fuzzing" },
    ],
    roleSavia: "Frontend Software Developer",
    dateSavia: "Mar 2025 - Abr 2025 · 2 meses",
    tasksSavia: [
      { status: "DONE", desc: "Aplicación frontend con React 19 y Vite que movía más de 1000 registros" },
      { status: "DONE", desc: "Búsqueda instantánea, filtrado múltiple y persistencia local" },
      { status: "DONE", desc: "Componentes reutilizables, con control de versiones en Git" },
    ],
    roleCojali: "Software QA Analyst",
    dateCojali: "Feb 2025 · 1 mes",
    tasksCojali: [
      { status: "DONE", desc: "Un sistema interno de encuestas técnicas para evaluar al personal" },
      { status: "DONE", desc: "Testing funcional y aseguramiento de calidad en el ciclo de desarrollo" },
    ],
  },
};

const t = computed(() => content[props.lang] || content.en);

onMounted(() => {
  nextTick(() => {
    if (window.lucide) window.lucide.createIcons();
  });
});
</script>
