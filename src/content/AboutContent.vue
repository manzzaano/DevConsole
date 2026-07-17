<template>
  <div class="flex flex-col gap-8">
    <div class="flex flex-col md:flex-row items-center gap-10">
      <div class="relative flex-shrink-0">
        <img
          src="../assets/foto-perfil.jpg"
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
    coreValue: "Full Stack · Software Architecture",
    statusLabel: "STATUS",
    statusValue: "Open to work",
    ageLabel: "AGE",
    logTitle: "Identity_Logs_v1.1.2",
    bio1: "I'm 21 and I've been studying a Higher National Diploma in Multiplatform App Development since 2024, although a good part of what I know comes from learning on my own: reading documentation, building side projects and debugging until I understand why something fails. I care more about understanding why a pattern exists than applying it from memory.",
    bio2: "I usually work across the whole cycle of a project, from the initial architecture to the production deployment. That means making decisions I can justify later: strict typing where the language allows it, tests before shipping, and keeping the codebase in a state someone else could pick up without much context.",
    bio3: "<strong>leo/</strong> is the name I develop my personal projects and client work under. I'm currently open to remote, hybrid or on-site positions in Spain.",
  },
  es: {
    userLabel: "USUARIO",
    userName: "Ismael Manzano",
    levelLabel: "NIVEL",
    levelValue: "Full Stack Developer",
    locationLabel: "UBICACIÓN",
    locationValue: "Remoto / España",
    coreLabel: "CORE",
    coreValue: "Full Stack · Arquitectura de Software",
    statusLabel: "ESTADO",
    statusValue: "En búsqueda activa",
    ageLabel: "EDAD",
    logTitle: "Registros_de_Identidad_v1.1.2",
    bio1: "Tengo 21 años y estudio el Grado Superior de Desarrollo de Aplicaciones Multiplataforma desde 2024, aunque buena parte de lo que sé viene de aprender por mi cuenta: leer documentación, montar proyectos propios y depurar errores hasta entender por qué ocurren. Me interesa más entender por qué existe un patrón que aplicarlo de memoria.",
    bio2: "Suelo trabajar en todo el ciclo de un proyecto, desde la arquitectura inicial hasta el despliegue en producción. Eso implica tomar decisiones que pueda justificar después: tipado estricto donde el lenguaje lo permite, tests antes de desplegar y mantener el código en un estado que otra persona pueda retomar sin demasiado contexto.",
    bio3: "<strong>leo/</strong> es el nombre bajo el que desarrollo mis proyectos personales y trabajos para clientes. Actualmente estoy abierto a puestos en remoto, híbridos o presenciales en España.",
  },
};

const t = computed(() => {
  const c = content[props.lang] || content.en;
  const suffix = props.lang === "es" ? `${calcAge()} a\u00f1os` : `${calcAge()} years`;
  return { ...c, ageValue: suffix };
});
</script>
