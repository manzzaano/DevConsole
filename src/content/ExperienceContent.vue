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

      <div
        class="glass-card p-5 flex flex-col group"
      >
        <div class="flex justify-between items-start mb-4">
          <div>
            <span
              class="text-[10px] sm:text-xs accent-teal font-mono tracking-widest uppercase"
              >[ {{ t.coreLabel }} ]</span
            >
            <h4 class="text-lg sm:text-xl font-bold accent-teal font-sans">{{ t.roleKitchen }}</h4>
            <p class="text-xs text-white/40">
              {{ t.dateKitchen }}
            </p>
          </div>
          <i data-lucide="zap" class="w-5 h-5 text-white/40"></i>
        </div>

        <div class="space-y-2 font-mono text-[11px] sm:text-xs text-white/70 mb-4">
          <p v-for="(task, index) in t.tasksKitchen" :key="index">
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

const stackEntreredes = ["Laravel", "Filament PHP", "PHP", "Gemini AI", "PHPUnit", "Docker", "Jobs"];
const stackSavia      = ["React", "Vite", "Azure", "JavaScript", "Git"];

const content = {
  en: {
    initMessage: "Initializing workload execution trace...",
    deployment: "DEPLOYMENT",
    coreLabel: "OPERATIONAL_CORE",
    roleLeo: "Founder & Full Stack Developer",
    dateLeo: "May 2026 - Present",
    tasksLeo: [
      { status: "RUNNING", desc: "Design and development of Full Stack web systems end-to-end" },
      { status: "OK", desc: "Software architecture with production focus and technical criteria" },
      { status: "OK", desc: "SaaS products and client solutions under the leo/ brand" },
    ],
    roleEntreredes: "Full Stack Developer | Laravel",
    dateEntreredes: "February 2026 - May 2026",
    tasksEntreredes: [
      { status: "DONE", desc: "Autonomous full stack development of a landing page SaaS (Laravel + Filament PHP), deployed to production with Docker" },
      { status: "DONE", desc: "Gemini AI integration via async Jobs & Queues — non-blocking model request processing" },
      { status: "DONE", desc: "Advanced PHPUnit testing: load, security & fuzzing before deployment" },
    ],
    roleSavia: "Frontend Software Developer",
    dateSavia: "March - April 2025",
    tasksSavia: [
      { status: "OK", desc: "Reusable frontend components with React & Vite" },
      { status: "OK", desc: "Test environment deployment on Microsoft Azure" },
      { status: "DONE", desc: "Version control via Git/GitHub" },
    ],
    roleCojali: "Software QA Analyst",
    dateCojali: "February 2025",
    tasksCojali: [
      { status: "OK", desc: "Clean Code standards & QA process application" },
      { status: "OK", desc: "Complex algorithmics & software testing" },
      { status: "DONE", desc: "Corporate tools & workflows integration" },
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
    roleLeo: "Founder & Full Stack Developer",
    dateLeo: "Mayo 2026 - Actualidad",
    tasksLeo: [
      { status: "EJECUTANDO", desc: "Diseño y desarrollo de sistemas web Full Stack de principio a fin" },
      { status: "OK", desc: "Arquitectura de software con criterio técnico y foco en producción" },
      { status: "OK", desc: "Productos SaaS y soluciones para clientes bajo la marca leo/" },
    ],
    roleEntreredes: "Full Stack Developer | Laravel",
    dateEntreredes: "Febrero 2026 - Mayo 2026",
    tasksEntreredes: [
      { status: "DONE", desc: "Desarrollo full stack autónomo de un SaaS generador de landing pages (Laravel + Filament PHP), llevado a producción con Docker" },
      { status: "DONE", desc: "Integración de Gemini AI mediante Jobs y Queues asíncronos — procesamiento de peticiones al modelo sin bloquear la aplicación" },
      { status: "DONE", desc: "Testing avanzado con PHPUnit: pruebas de carga, seguridad y fuzzing antes del despliegue" },
    ],
    roleSavia: "Frontend Software Developer",
    dateSavia: "Marzo - Abril 2025",
    tasksSavia: [
      { status: "OK", desc: "Componentes frontend reutilizables con React & Vite" },
      { status: "OK", desc: "Despliegue de entornos de prueba en Microsoft Azure" },
      { status: "DONE", desc: "Control de versiones Git/GitHub" },
    ],
    roleCojali: "Software QA Analyst",
    dateCojali: "Febrero 2025",
    tasksCojali: [
      { status: "OK", desc: "Aplicación de estándares Clean Code y procesos de QA" },
      { status: "OK", desc: "Algoritmia compleja y testing de software" },
      { status: "DONE", desc: "Integración en herramientas y flujos corporativos" },
    ],
    roleKitchen: "Ayudante de Cocina",
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
