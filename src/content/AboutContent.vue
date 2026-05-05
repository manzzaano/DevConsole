<template>
  <div class="flex flex-col gap-8">
    <div class="flex flex-col md:flex-row items-center gap-10">
      <div class="relative flex-shrink-0">
        <img
          src="../assets/foto-perfil.png"
          alt="Ismael Manzano"
          class="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 aspect-square rounded-full object-cover border-4 border-white/[15%] shadow-[0_0_15px_rgba(255,255,255,0.1)]"
        />
      </div>

      <div class="flex-grow space-y-4 font-mono w-full">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
          <p>
            <span class="accent-teal font-bold uppercase tracking-tight"
              >> {{ t.userLabel }}:
            </span>
            <span class="text-white">{{ t.userName }}</span>
          </p>
          <p>
            <span class="accent-teal font-bold uppercase tracking-tight"
              >> {{ t.levelLabel }}:
            </span>
            <span class="text-white">{{ t.levelValue }}</span>
          </p>
          <p>
            <span class="accent-teal font-bold uppercase tracking-tight"
              >> {{ t.locationLabel }}:
            </span>
            <span class="text-white">{{ t.locationValue }}</span>
          </p>
          <p>
            <span class="accent-teal font-bold uppercase tracking-tight"
              >> {{ t.coreLabel }}:
            </span>
            <span class="text-white">{{ t.coreValue }}</span>
          </p>
          <p>
            <span class="accent-teal font-bold uppercase tracking-tight"
              >> {{ t.statusLabel }}:
            </span>
            <span class="text-white">{{ t.statusValue }}</span>
          </p>
          <p>
            <span class="accent-teal font-bold uppercase tracking-tight"
              >> {{ t.ageLabel }}:
            </span>
            <span class="text-white">{{ t.ageValue }}</span>
          </p>
        </div>
      </div>
    </div>

    <div class="space-y-4 pt-6 border-t border-white/[8%]">
      <p class="text-xs text-white/30 font-mono italic">
        // {{ t.logTitle }}
      </p>
      <div class="text-white/70 space-y-4 leading-relaxed">
        <p v-html="t.bio1"></p>
        <p v-html="t.bio2"></p>
        <p v-html="t.bio3"></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  lang: { type: String, default: "en" },
});

const content = {
  en: {
    userLabel: "USER",
    userName: "Ismael Manzano",
    levelLabel: "LEVEL",
    levelValue: "Software Engineer",
    locationLabel: "LOCATION",
    locationValue: "Remote / Spain",
    coreLabel: "CORE",
    coreValue: "Backend Engineering",
    statusLabel: "STATUS",
    statusValue: "Active @ Entreredes",
    ageLabel: "AGE",
    ageValue: "20 years",
    logTitle: "Identity_Logs_v1.1.2",
    bio1: "Software Developer with a strict engineering focus. I prioritize understanding the technical <strong>'why'</strong> to build logical, efficient, and clean systems that stand the test of time.",
    bio2: "High-productivity developer committed to technical excellence. I design architectures that prioritize <strong>performance and scalability</strong>, ensuring every line of code adds measurable value to the system.",
    bio3: "Specialized in Backend Engineering and the strategic integration of <strong>Artificial Intelligence</strong>. I build robust tools and automated systems, constantly evolving my stack to solve complex professional challenges.",
  },
  es: {
    userLabel: "USUARIO",
    userName: "Ismael Manzano",
    levelLabel: "NIVEL",
    levelValue: "Software Engineer",
    locationLabel: "UBICACIÓN",
    locationValue: "Remoto / España",
    coreLabel: "CORE",
    coreValue: "Ingeniería Backend",
    statusLabel: "ESTADO",
    statusValue: "Activo en Entreredes",
    ageLabel: "EDAD",
    ageValue: "20 años",
    logTitle: "Registros_de_Identidad_v1.1.2",
    bio1: "Software Developer con un estricto enfoque en ingeniería. Priorizo entender el <strong>'porqué'</strong> técnico para construir sistemas lógicos, eficientes y limpios.",
    bio2: "Desarrollador de alta productividad comprometido con la excelencia técnica. Diseño arquitecturas que priorizan el <strong>rendimiento y la escalabilidad</strong>, garantizando que cada línea de código aporte valor real.",
    bio3: "Especializado en Ingeniería Backend y en la integración estratégica de <strong>Inteligencia Artificial</strong>. Construyo herramientas robustas y sistemas automatizados, evolucionando constantemente mi stack para resolver retos profesionales complejos.",
  },
};

const t = computed(() => content[props.lang] || content.en);
</script>
