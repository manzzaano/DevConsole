<template>
  <div class="flex flex-col gap-8">
    <div class="flex flex-col md:flex-row items-center gap-10">
      <div class="relative flex-shrink-0">
        <img
          src="../assets/foto-perfil.png"
          alt="Ismael Manzano"
          class="w-40 h-40 aspect-square rounded-full object-cover border-4 border-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.2)]"
        />
      </div>

      <div class="flex-grow space-y-4 font-mono w-full">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
          <p>
            <span class="text-emerald-400 font-bold uppercase tracking-tight"
              >> {{ t.userLabel }}:
            </span>
            <span class="text-gray-200">{{ t.userName }}</span>
          </p>
          <p>
            <span class="text-emerald-400 font-bold uppercase tracking-tight"
              >> {{ t.levelLabel }}:
            </span>
            <span class="text-gray-200">{{ t.levelValue }}</span>
          </p>
          <p>
            <span class="text-emerald-400 font-bold uppercase tracking-tight"
              >> {{ t.locationLabel }}:
            </span>
            <span class="text-gray-200">{{ t.locationValue }}</span>
          </p>
          <p>
            <span class="text-emerald-400 font-bold uppercase tracking-tight"
              >> {{ t.coreLabel }}:
            </span>
            <span class="text-gray-200">{{ t.coreValue }}</span>
          </p>
          <p>
            <span class="text-emerald-400 font-bold uppercase tracking-tight"
              >> {{ t.statusLabel }}:
            </span>
            <span class="text-gray-200">{{ t.statusValue }}</span>
          </p>
          <p>
            <span class="text-emerald-400 font-bold uppercase tracking-tight"
              >> {{ t.ageLabel }}:
            </span>
            <span class="text-gray-200">{{ t.ageValue }}</span>
          </p>
        </div>
      </div>
    </div>

    <div class="space-y-4 pt-6 border-t border-white/5">
      <p class="text-xs text-emerald-500/60 font-mono italic">
        // {{ t.logTitle }}
      </p>
      <div class="text-gray-300 space-y-4 leading-relaxed">
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
    levelValue: "Junior Developer",
    locationLabel: "LOCATION",
    locationValue: "Ciudad Real, ES",
    coreLabel: "CORE",
    coreValue: "Multiplatform Dev",
    statusLabel: "STATUS",
    statusValue: "Open for Hire",
    ageLabel: "AGE",
    ageValue: "20 years",
    logTitle: "Identity_Logs_v1.0.4",
    bio1: "I've always been driven by the curiosity of understanding <span class='text-emerald-400'>what happens behind the screen</span>. This passion led me to specialize in Multiplatform Application Development (DAM).",
    bio2: "My background as a kitchen assistant has forged a disciplined work ethic, teaching me <span class='text-yellow-400 font-bold'>time management and consistency</span> under extreme pressure.",
    bio3: "I enjoy solving complex problems, building practical tools, and constantly upgrading my tech stack to add value to innovative professional projects.",
  },
  es: {
    userLabel: "USUARIO",
    userName: "Ismael Manzano",
    levelLabel: "NIVEL",
    levelValue: "Desarrollador Junior",
    locationLabel: "UBICACIÓN",
    locationValue: "Ciudad Real, ES",
    coreLabel: "CORE",
    coreValue: "Dev Multiplataforma",
    statusLabel: "ESTADO",
    statusValue: "Disponible para Contratación",
    ageLabel: "EDAD",
    ageValue: "20 años",
    logTitle: "Registros_de_Identidad_v1.0.4",
    bio1: "Siempre me ha movido la curiosidad por entender <span class='text-emerald-400'>qué sucede detrás de la pantalla</span>. Esta pasión me llevó a especializarme en Desarrollo de Aplicaciones Multiplataforma (DAM).",
    bio2: "Mi experiencia como ayudante de cocina ha forjado una ética de trabajo disciplinada, enseñándome <span class='text-yellow-400 font-bold'>gestión del tiempo y constancia</span> bajo presión extrema.",
    bio3: "Disfruto resolviendo problemas complejos, construyendo herramientas prácticas y actualizando constantemente mi stack tecnológico para aportar valor en proyectos profesionales innovadores.",
  },
};

const t = computed(() => content[props.lang] || content.en);
</script>
