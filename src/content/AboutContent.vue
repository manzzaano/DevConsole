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
      <div class="text-white/70 space-y-4 leading-relaxed font-sans">
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
    levelValue: "Full Stack Developer",
    locationLabel: "LOCATION",
    locationValue: "Remote / Spain",
    coreLabel: "CORE",
    coreValue: "Full Stack · AI Integration",
    statusLabel: "STATUS",
    statusValue: "Open to work",
    ageLabel: "AGE",
    logTitle: "Identity_Logs_v1.1.2",
    bio1: "Full Stack developer — backend first. I need to understand what happens under the framework to make good architecture decisions. Clean code and QA mindset are the only way I know how to work.",
    bio2: "I integrate AI as a technical primitive: async processing pipelines, model APIs wired into real business logic. Production systems, not demos.",
    bio3: "Currently running <strong>leo/</strong> — my own software studio. Open to remote, hybrid or in-person roles in Spain.",
  },
  es: {
    userLabel: "USUARIO",
    userName: "Ismael Manzano",
    levelLabel: "NIVEL",
    levelValue: "Full Stack Developer",
    locationLabel: "UBICACIÓN",
    locationValue: "Remoto / España",
    coreLabel: "CORE",
    coreValue: "Full Stack · Integración IA",
    statusLabel: "ESTADO",
    statusValue: "Buscando empleo",
    ageLabel: "EDAD",
    logTitle: "Registros_de_Identidad_v1.1.2",
    bio1: "Desarrollador Full Stack — backend primero. Necesito entender qué ocurre por debajo del framework para tomar buenas decisiones de arquitectura. Clean Code y mentalidad de QA no son fases extra: es la única forma en que sé programar.",
    bio2: "Integro IA como primitiva técnica: procesamiento asíncrono, APIs de modelos conectadas a lógica de negocio real. Sistemas en producción, no demos.",
    bio3: "Actualmente llevo <strong>leo/</strong> — mi propia firma de desarrollo. Abierto a remoto, híbrido o presencial en España.",
  },
};

const t = computed(() => {
  const c = content[props.lang] || content.en;
  const suffix = props.lang === "es" ? `${calcAge()} a\u00f1os` : `${calcAge()} years`;
  return { ...c, ageValue: suffix };
});
</script>
