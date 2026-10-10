<template>
  <div class="flex flex-col gap-8">
    <div class="flex flex-col md:flex-row items-center gap-10">
      <div class="relative flex-shrink-0">
        <img
          src="../assets/foto-perfil.jpg"
          alt="Ismael Manzano"
          width="1200"
          height="900"
          draggable="false"
          class="block w-60 md:w-64 h-auto rounded-2xl select-none"
          @contextmenu.prevent
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
        <p v-for="(para, i) in t.bio" :key="i" v-html="para"></p>
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

// Same copy and voice as the "Sobre mí" section of leosoftware.dev
const content = {
  en: {
    userLabel: "USER",
    userName: "Ismael Manzano León",
    levelLabel: "ROLE",
    levelValue: "Full Stack Developer",
    locationLabel: "LOCATION",
    locationValue: "Spain · remote or on-site",
    coreLabel: "STACK",
    coreValue: "Laravel · React · Vue · Flutter",
    statusLabel: "TRAINING",
    statusValue: "DAM (2024-2026) · DAW, complementary",
    ageLabel: "AGE",
    logTitle: "Hi, I'm Ismael.",
    lead: (age) => `I'm ${age} and a full stack developer, trained in Multiplatform Application Development (DAM). I'm now studying Web Application Development (DAW) as complementary training, and it doesn't reduce my availability: I'm open to job offers and can start right away, remotely or on-site from Spain.`,
    bio: [
      "During my internship at Entreredes I ran one of their projects on my own: <strong class='text-white'>a SaaS that generates landing pages, built with Laravel and Filament</strong>, which I took to production with Docker and Gemini integrated through queues. Before that I did frontend with React at Savia and QA at Cojali.",
      "My supervisor put it this way: I wasn't <strong class='text-white'>\"the typical intern profile\"</strong>; I could take on work on my own without anyone watching over me.",
      "While studying I worked the olive harvest and as a kitchen assistant, and spent my free time coding. Most of what I know I learned on my own, breaking things until I understood why they failed. It's slower, but <strong class='text-white'>what you learn that way sticks</strong>.",
      "My experience is measured in months, not years, and I don't hide it. What I bring is the habit of owning things: at Entreredes I was given a project and took it to production. I do my best work where I can <strong class='text-white'>take on responsibility from the start</strong>.",
    ],
  },
  es: {
    userLabel: "USUARIO",
    userName: "Ismael Manzano León",
    levelLabel: "ROL",
    levelValue: "Full Stack Developer",
    locationLabel: "UBICACIÓN",
    locationValue: "España · remoto o presencial",
    coreLabel: "STACK",
    coreValue: "Laravel · React · Vue · Flutter",
    statusLabel: "FORMACIÓN",
    statusValue: "DAM (2024-2026) · DAW, complementario",
    ageLabel: "EDAD",
    logTitle: "Hola, soy Ismael.",
    lead: (age) => `Tengo ${age} años y soy desarrollador full stack, formado en Desarrollo de Aplicaciones Multiplataforma (DAM). Ahora curso Desarrollo de Aplicaciones Web (DAW) como formación complementaria, sin que me reste disponibilidad: estoy abierto a ofertas de trabajo y puedo incorporarme ya, en remoto o presencial desde España.`,
    bio: [
      "En mis prácticas en Entreredes llevé yo solo uno de sus desarrollos: <strong class='text-white'>un SaaS que genera landing pages, con Laravel y Filament</strong>, que dejé en producción con Docker y con Gemini integrado mediante colas. Antes hice frontend con React en Savia y QA en Cojali.",
      "Mi supervisor lo resumió así: no era <strong class='text-white'>\"el perfil típico de prácticas\"</strong>; podía llevar trabajo por mi cuenta sin que nadie estuviera encima.",
      "Mientras estudiaba trabajé en la campaña de la aceituna y de ayudante de cocina, y el tiempo libre se lo dedicaba al código. Casi todo lo he aprendido por mi cuenta, rompiendo cosas hasta entender por qué fallaban. Es más lento, pero <strong class='text-white'>lo que aprendes así no se olvida</strong>.",
      "Mi experiencia se mide en meses, no en años, y no lo escondo. Lo que traigo es la costumbre de hacerme cargo: en Entreredes me dieron un proyecto y lo llevé a producción. Rindo mejor donde puedo <strong class='text-white'>asumir responsabilidad desde el principio</strong>.",
    ],
  },
};

const t = computed(() => {
  const c = content[props.lang] || content.en;
  const age = calcAge();
  const suffix = props.lang === "es" ? `${age} años` : `${age} years`;
  return { ...c, ageValue: suffix, bio: [c.lead(age), ...c.bio] };
});
</script>
