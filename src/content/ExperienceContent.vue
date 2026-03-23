<template>
  <div class="space-y-8">
    <p class="text-gray-400 italic mb-4 text-sm font-mono">
      // {{ t.initMessage }}
    </p>

    <div class="grid grid-cols-1 gap-6">
      <div
        class="project-card border border-white/10 bg-white/5 p-5 rounded-xl flex flex-col group hover:border-blue-400 transition-all duration-300"
      >
        <div class="flex justify-between items-start mb-4">
          <div>
            <span
              class="text-[10px] text-blue-500 font-mono tracking-widest uppercase"
              >[ {{ t.deployment }} 00 ]</span
            >
            <h4 class="text-xl font-bold text-blue-400">
              ENTREREDES CONSULTORÍA TECNOLÓGICA
            </h4>
            <p class="text-xs text-gray-400">
              {{ t.roleEntreredes }} | {{ t.dateEntreredes }}
            </p>
          </div>
          <i data-lucide="layers" class="w-5 h-5 text-blue-500"></i>
        </div>

        <div class="space-y-2 font-mono text-xs text-gray-300 mb-4">
          <p v-for="(task, index) in t.tasksEntreredes" :key="index">
            <span class="text-blue-500">[ {{ task.status }} ]</span>
            {{ task.desc }}
          </p>
        </div>

        <div class="flex flex-wrap gap-2 pt-3 border-t border-white/5">
          <span
            v-for="tech in stackEntreredes"
            :key="tech"
            class="inline-block px-3 py-1 rounded-full text-[10px] font-mono border transition-all duration-300 cursor-default bg-blue-400/10 border-blue-400/30 text-blue-400 hover:bg-blue-400/20 hover:shadow-[0_0_12px_rgba(59,130,246,0.4)] hover:-translate-y-0.5"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <div
        class="project-card border border-white/10 bg-white/5 p-5 rounded-xl flex flex-col group hover:border-emerald-400 transition-all duration-300"
      >
        <div class="flex justify-between items-start mb-4">
          <div>
            <span
              class="text-[10px] text-emerald-500 font-mono tracking-widest uppercase"
              >[ {{ t.deployment }} 01 ]</span
            >
            <h4 class="text-xl font-bold text-emerald-400">
              Savia by Berger-Levrault
            </h4>
            <p class="text-xs text-gray-400">
              {{ t.roleSavia }} | {{ t.dateSavia }}
            </p>
          </div>
          <i data-lucide="terminal" class="w-5 h-5 text-emerald-500"></i>
        </div>

        <div class="space-y-2 font-mono text-xs text-gray-300 mb-4">
          <p v-for="(task, index) in t.tasksSavia" :key="index">
            <span class="text-emerald-500">[ {{ task.status }} ]</span>
            {{ task.desc }}
          </p>
        </div>

        <div class="flex flex-wrap gap-2 pt-3 border-t border-white/5">
          <span
            v-for="tech in stackSavia"
            :key="tech"
            class="inline-block px-3 py-1 rounded-full text-[10px] font-mono border transition-all duration-300 cursor-default bg-emerald-400/10 border-emerald-400/30 text-emerald-400 hover:bg-emerald-400/20 hover:shadow-[0_0_12px_rgba(52,211,153,0.4)] hover:-translate-y-0.5"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <div
        class="project-card border border-white/10 bg-white/5 p-5 rounded-xl flex flex-col group hover:border-yellow-400 transition-all duration-300"
      >
        <div class="flex justify-between items-start mb-4">
          <div>
            <span
              class="text-[10px] text-yellow-500 font-mono tracking-widest uppercase"
              >[ {{ t.deployment }} 02 ]</span
            >
            <h4 class="text-xl font-bold text-yellow-400">Cojali S.L.</h4>
            <p class="text-xs text-gray-400">
              {{ t.roleCojali }} | {{ t.dateCojali }}
            </p>
          </div>
          <i data-lucide="cpu" class="w-5 h-5 text-yellow-500"></i>
        </div>

        <div class="space-y-2 font-mono text-xs text-gray-300 mb-4">
          <p v-for="(task, index) in t.tasksCojali" :key="index">
            <span class="text-yellow-500">[ {{ task.status }} ]</span>
            {{ task.desc }}
          </p>
        </div>
      </div>

      <div
        class="project-card border border-cyan-500/20 bg-cyan-500/5 p-5 rounded-xl flex flex-col group hover:border-cyan-400 transition-all duration-300"
      >
        <div class="flex justify-between items-start mb-4">
          <div>
            <span
              class="text-[10px] text-cyan-400 font-mono tracking-widest uppercase"
              >[ {{ t.coreLabel }} ]</span
            >
            <h4 class="text-xl font-bold text-cyan-400">{{ t.roleKitchen }}</h4>
            <p class="text-xs text-gray-400 text-cyan-400/60">
              {{ t.dateKitchen }}
            </p>
          </div>
          <i data-lucide="zap" class="w-5 h-5 text-cyan-400"></i>
        </div>

        <div class="space-y-2 font-mono text-xs text-gray-300 mb-4">
          <p v-for="(task, index) in t.tasksKitchen" :key="index">
            <span class="text-cyan-400">[ {{ task.status }} ]</span>
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

const stackEntreredes = ["Laravel", "PHP", "IA Models", "APIs", "Jobs"];
const stackSavia = ["React", "Vite", "Azure", "JavaScript", "Git"];

const content = {
  en: {
    initMessage: "Initializing workload execution trace...",
    deployment: "DEPLOYMENT",
    coreLabel: "OPERATIONAL_CORE",
    roleEntreredes: "Full Stack Developer",
    dateEntreredes: "February 2026 - Present",
    tasksEntreredes: [
      {
        status: "RUNNING",
        desc: "Integral development of scalable web solutions",
      },
      { status: "OK", desc: "Third-party API & AI Model integration" },
      { status: "OK", desc: "Software architecture with Laravel ecosystem" },
      { status: "OK", desc: "Background task processing & Job management" },
    ],
    roleSavia: "Fronted Software Developer",
    dateSavia: "March - April 2025",
    tasksSavia: [
      { status: "OK", desc: "Frontend architecture with React & Vite" },
      { status: "OK", desc: "Cloud implementation on Azure" },
      { status: "OK", desc: "Version control via Git/GitHub" },
      { status: "DONE", desc: "UI/UX interface optimization" },
    ],
    roleCojali: "Software QA Analyst",
    dateCojali: "February 2025",
    tasksCojali: [
      { status: "OK", desc: "Software testing & Bug tracking" },
      { status: "OK", desc: "Logics application & Analysis" },
      { status: "DONE", desc: "Corporate tools integration" },
    ],
    roleKitchen: "Kitchen Assistant",
    dateKitchen: "March 2025 - Present",
    tasksKitchen: [
      { status: "HIGH", desc: "Pressure tolerance & Stress management" },
      { status: "OK", desc: "Resource & Time optimization" },
      { status: "DONE", desc: "Team sync & Workflow consistency" },
    ],
  },
  es: {
    initMessage: "Iniciando trazado de ejecución de carga de trabajo...",
    deployment: "DESPLIEGUE",
    coreLabel: "NÚCLEO_OPERATIVO",
    roleEntreredes: "Full Stack Developer",
    dateEntreredes: "Febrero 2026 - Actualidad",
    tasksEntreredes: [
      {
        status: "EJECUTANDO",
        desc: "Desarrollo integral de soluciones web escalables",
      },
      { status: "OK", desc: "Integración de APIs de terceros y modelos de IA" },
      { status: "OK", desc: "Arquitectura de software con ecosistema Laravel" },
      { status: "OK", desc: "Procesamiento de tareas en segundo plano (Jobs)" },
    ],
    roleSavia: "Fronted Software Developer",
    dateSavia: "Marzo - Abril 2025",
    tasksSavia: [
      { status: "OK", desc: "Arquitectura frontend con React & Vite" },
      { status: "OK", desc: "Implementación cloud en Azure" },
      { status: "OK", desc: "Control de versiones Git/GitHub" },
      { status: "DONE", desc: "Optimización de interfaces UI/UX" },
    ],
    roleCojali: "Software QA Analyst",
    dateCojali: "Febrero 2025",
    tasksCojali: [
      { status: "OK", desc: "Testing de software & seguimiento de bugs" },
      { status: "OK", desc: "Aplicación de lógica & Análisis" },
      { status: "DONE", desc: "Integración en herramientas corporativas" },
    ],
    roleKitchen: "Ayudante de Cocina (Compaginando con estudios)",
    dateKitchen: "Marzo 2025 - Actualidad",
    tasksKitchen: [
      { status: "ALTA", desc: "Tolerancia a la presión & gestión del estrés" },
      { status: "OK", desc: "Optimización de recursos & tiempos" },
      { status: "DONE", desc: "Sincronización de equipo & consistencia" },
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
