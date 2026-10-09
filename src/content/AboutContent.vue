<template>
  <div class="flex flex-col gap-8">
    <div class="flex flex-col md:flex-row items-center gap-10">
      <div class="relative flex-shrink-0">
        <img
          src="../assets/foto-perfil.jpg"
          alt="Ismael Manzano"
          width="1080"
          height="810"
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
    lead: (age) => `I'm ${age}, I'm a full stack developer and I trained in multiplatform app development (DAM). I'm now studying web development (DAW) as complementary training, to add depth on the web side to what I already do in apps and backend. It doesn't take away from my availability: I'm open to job offers and can start right away, remotely or on-site from Spain.`,
    bio: [
      "During my internship at Entreredes I ended up running one of their projects on my own: <strong class='text-white'>a SaaS that generates landing pages, built with Laravel and Filament</strong>, which I took to production with Docker and Gemini integrated through queues. Before that I was at Savia, doing frontend with React, and at Cojali, in QA.",
      "My supervisor there summed it up by saying I wasn't <strong class='text-white'>\"the typical intern profile\"</strong>: I could take on work on my own without anyone having to keep an eye on me.",
      "While I was studying I worked the olive harvest in winter and then as a kitchen assistant in a bar, and even so, whenever I had a moment, I was coding. Almost everything I know I learned on my own, trying things and breaking them until I understood why they failed. It's slower, but <strong class='text-white'>what you learn that way stays with you</strong>.",
      "My experience is measured in months, not years, and I'm not going to pretend otherwise. What I do bring is the habit of owning things: at Entreredes I was given a project and took it all the way to production. I do my best work in teams where I can <strong class='text-white'>take on responsibility from the start</strong>.",
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
    lead: (age) => `Tengo ${age} años, soy desarrollador full stack y me formé en el grado superior de DAM. Ahora curso DAW como formación complementaria, para sumar profundidad en web a lo que ya hago en aplicaciones y backend. No me resta disponibilidad: estoy abierto a ofertas de trabajo y puedo incorporarme ya, en remoto o presencial desde España.`,
    bio: [
      "En mis prácticas en Entreredes acabé llevando yo solo uno de sus desarrollos: <strong class='text-white'>un SaaS que genera landing pages, hecho con Laravel y Filament</strong>, que dejé en producción con Docker y con Gemini integrado mediante colas. Antes pasé por Savia, haciendo frontend con React, y por Cojali, en QA.",
      "Mi supervisor allí lo resumió diciendo que no era <strong class='text-white'>\"el perfil típico de prácticas\"</strong>: podía llevar trabajo por mi cuenta sin que nadie tuviera que estar encima.",
      "Mientras estudiaba trabajé los inviernos en la campaña de la aceituna y luego de ayudante de cocina en un bar, y aun así, en cuanto tenía un rato, estaba con el código. Casi todo lo que sé lo he aprendido por mi cuenta, probando cosas y rompiéndolas hasta entender por qué fallaban. Es más lento, pero <strong class='text-white'>lo que aprendes así no se te olvida</strong>.",
      "Mi experiencia se mide en meses, no en años, y no voy a fingir otra cosa. Lo que sí traigo es la costumbre de hacerme cargo: en Entreredes me dieron un proyecto y lo llevé hasta producción. Donde mejor rindo es en equipos en los que puedo <strong class='text-white'>asumir responsabilidad desde el principio</strong>.",
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
