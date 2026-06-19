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
    coreValue: "Full Stack · Software Architecture",
    statusLabel: "STATUS",
    statusValue: "Available for the next challenge",
    ageLabel: "AGE",
    logTitle: "Identity_Logs_v1.1.2",
    bio1: "21. Self-taught — not from a CS degree. I entered higher education in 2024 and it clicked. I stopped memorizing patterns and started understanding why they exist. Most of what I know I learned alone: breaking systems, reading docs at 3 AM, fixing bugs with nobody telling me 'this looks right'.",
    bio2: "I own the entire stack — from architecture to production. If it breaks, it's on me. I'd rather have it that way. There's a difference between code that works and code that's well done. Between someone who writes features and someone who builds systems.",
    bio3: "<strong>leo/</strong> is my signature on every line — no agency, no middlemen. Development, architecture, and technical criteria. Open to remote, hybrid or on-site in Spain.",
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
    statusValue: "Disponible para el siguiente reto",
    ageLabel: "EDAD",
    logTitle: "Registros_de_Identidad_v1.1.2",
    bio1: "21 años. Autodidacta — no vengo de una carrera de ingeniería. Entré al grado superior en 2024 y me enganchó: dejé de aprenderme patrones y empecé a entender por qué existen. Gran parte de lo que sé lo aprendí solo: rompiendo sistemas, leyendo documentación de madrugada, arreglando errores sin que nadie me dijera 'esto está bien'.",
    bio2: "Me hago cargo de todo lo que construyo — desde la arquitectura hasta producción. Si falla, es culpa mía. Y lo prefiero así. Hay diferencia entre código que funciona y código que está bien hecho. Entre alguien que escribe features y alguien que construye sistemas.",
    bio3: "<strong>leo/</strong> es mi firma en cada línea — sin agencia, sin intermediarios. Desarrollo, arquitectura y criterio técnico. Abierto a remoto, híbrido o presencial en España.",
  },
};

const t = computed(() => {
  const c = content[props.lang] || content.en;
  const suffix = props.lang === "es" ? `${calcAge()} a\u00f1os` : `${calcAge()} years`;
  return { ...c, ageValue: suffix };
});
</script>
