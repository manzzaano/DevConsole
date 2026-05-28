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

const BIRTH = new Date("2005-04-26");

function calcAge() {
  const today = new Date();
  let age = today.getFullYear() - BIRTH.getFullYear();
  const m = today.getMonth() - BIRTH.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < BIRTH.getDate())) age--;
  return age;
}

const content = {
  en: {
    userLabel: "USER",
    userName: "Ismael Manzano",
    levelLabel: "LEVEL",
    levelValue: "Backend & Systems Developer",
    locationLabel: "LOCATION",
    locationValue: "Remote / Spain",
    coreLabel: "CORE",
    coreValue: "Backend Engineering",
    statusLabel: "STATUS",
    statusValue: "Active @ Entreredes",
    ageLabel: "AGE",
    logTitle: "Identity_Logs_v1.1.2",
    bio1: "Backend and systems developer. I build for correctness first — clean architecture, predictable behavior, no shortcuts.",
    bio2: "I work with AI integration as a technical primitive: RAG pipelines, agent orchestration, model APIs wired into production systems. Infrastructure, not a feature.",
    bio3: "Currently at Entreredes building scalable web solutions with Laravel, PHP, and AI model integration. Available for remote projects.",
  },
  es: {
    userLabel: "USUARIO",
    userName: "Ismael Manzano",
    levelLabel: "NIVEL",
    levelValue: "Desarrollador Backend & Sistemas",
    locationLabel: "UBICACIÓN",
    locationValue: "Remoto / España",
    coreLabel: "CORE",
    coreValue: "Ingeniería Backend",
    statusLabel: "ESTADO",
    statusValue: "Activo en Entreredes",
    ageLabel: "EDAD",
    logTitle: "Registros_de_Identidad_v1.1.2",
    bio1: "Desarrollador backend y de sistemas. Construyo desde la corrección primero — arquitectura limpia, comportamiento predecible, sin atajos.",
    bio2: "Integro IA como primitiva técnica: pipelines RAG, orquestación de agentes, APIs de modelos en sistemas en producción. Infraestructura, no una feature.",
    bio3: "Actualmente en Entreredes construyendo soluciones web escalables con Laravel, PHP e integración de modelos de IA. Disponible para proyectos remotos.",
  },
};

const t = computed(() => {
  const c = content[props.lang] || content.en;
  const suffix = props.lang === "es" ? `${calcAge()} a\u00f1os` : `${calcAge()} years`;
  return { ...c, ageValue: suffix };
});
</script>
