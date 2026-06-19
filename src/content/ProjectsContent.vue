<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div
      v-for="(project, index) in t.projectList"
      :key="index"
      :class="['glass-card p-5 flex flex-col group block-invert']"
    >
      <div class="flex justify-between items-start mb-3 gap-4">
        <div>
            <span class="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-white/40">
            [ {{ project.id }} ]
          </span>
          <h4 class="text-lg sm:text-xl font-bold text-white transition-all font-sans">
            {{ project.title }}
          </h4>
        </div>

        <div class="flex-shrink-0 pt-1">
          <a
            :href="project.github"
            target="_blank"
            class="text-white/40 hover:text-[#4ade80] transition-colors block accent-cyan"
            :aria-label="project.github.includes('github') ? 'View ' + project.title + ' on GitHub' : 'View ' + project.title"
          >
            <!-- GitHub Icon -->
            <svg
              v-if="project.github.includes('github')"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
              />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <!-- Web/External Link Icon -->
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>

      <p
        class="text-sm text-white/70 mb-4 flex-grow leading-relaxed font-sans"
        v-html="project.description"
      ></p>

      <div class="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/[8%]">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="glass-tag"
        >
          {{ tag }}
        </span>
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
    projectList: [
      {
        id: "Project_01",
        title: "DevConsole",
        github: "https://github.com/manzzaano/DevConsole",
        description:
          'Web terminal emulation engine. Command dispatcher decoupled from the renderer. <strong>useTerminal</strong> composable as reactive state machine injectable without touching the DOM. Ghost text autocomplete with real-time prefix matching, i18n lazy-loaded from external JSON, demo mode with async orchestration via Typed.js.',
        tags: ["Vue 3", "Vite", "Typed.js", "Tailwind"],
      },
      {
        id: "Project_02",
        title: "leo/",
        github: "https://leosoftware.dev",
        description:
          'Personal portfolio and development journal. Built with <strong>Next.js 15</strong> and TypeScript. 100/100 Lighthouse scores. Strict type safety, Server Components, zero technical debt.',
        tags: ["Next.js 15", "TypeScript", "Tailwind v4"],
      },
      {
        id: "Project_03",
        title: "PokeCore",
        github: "https://manzzaano.github.io/PokeCore",
        description:
          'Interactive Pokédex with <strong>React 19 and Vite</strong>. 1025 Pokémon with instant search, type filtering, persistent favorites, animated stats modal, shiny sprite toggle. 100% Spanish, mobile-first.',
        tags: ["React 19", "Vite", "TanStack Query"],
      },
      {
        id: "Project_04",
        title: "Kairos",
        github: "https://github.com/manzzaano/Kairos",
        description:
          '<strong>Flutter</strong> app + FastAPI backend + Google Gemini. Converts task abandonment into quantifiable debt. AI-generated stoic reflections, real-time geofencing, tunnel vision with automatic time-blocking.',
        tags: ["Flutter", "FastAPI", "Google Gemini"],
      },
      {
        id: "Project_05",
        title: "Regicide",
        github: "https://github.com/manzzaano/Regicide",
        description:
          'Pure strategy card game. Perfect information, no unfair RNG. Clear state machine with four phases. Every decision has predictable consequences. Wins based on thinking, not luck.',
        tags: ["Game Design", "State Machine", "Strategy"],
      },
    ],
  },
  es: {
    projectList: [
      {
        id: "Proyecto_01",
        title: "DevConsole",
        github: "https://github.com/manzzaano/DevConsole",
        description:
          'Motor de emulación de terminal web. Command dispatcher desacoplado del renderer. Composable <strong>useTerminal</strong> como máquina de estado reactiva inyectable sin tocar el DOM. Ghost text autocomplete con prefix matching en tiempo real, i18n lazy cargado desde JSON externo, demo mode con orquestación async via Typed.js.',
        tags: ["Vue 3", "Vite", "Typed.js", "Tailwind"],
      },
      {
        id: "Proyecto_02",
        title: "leo/",
        github: "https://leosoftware.dev",
        description:
          'Portafolio personal y diario de desarrollo. Construido con <strong>Next.js 15</strong> y TypeScript. 100/100 en Lighthouse. Tipado estricto, Server Components, cero deuda técnica.',
        tags: ["Next.js 15", "TypeScript", "Tailwind v4"],
      },
      {
        id: "Proyecto_03",
        title: "PokeCore",
        github: "https://manzzaano.github.io/PokeCore",
        description:
          'Pokédex interactiva con <strong>React 19 y Vite</strong>. 1025 Pokémon con búsqueda instantánea, filtro por tipo, favoritos persistentes, modal con stats animadas, toggle de sprites shiny. 100% en español, mobile-first.',
        tags: ["React 19", "Vite", "TanStack Query"],
      },
      {
        id: "Proyecto_04",
        title: "Kairos",
        github: "https://github.com/manzzaano/Kairos",
        description:
          'App <strong>Flutter</strong> + backend FastAPI + Google Gemini. Convierte el abandono de tareas en deuda cuantificable. Reflexiones estoicas generadas por IA, geofencing en tiempo real, túnel de visión con time-blocking automático.',
        tags: ["Flutter", "FastAPI", "Google Gemini"],
      },
      {
        id: "Proyecto_05",
        title: "Regicide",
        github: "https://github.com/manzzaano/Regicide",
        description:
          'Juego de cartas de estrategia pura. Información perfecta, sin RNG injusto. Máquina de estado clara con cuatro fases. Cada decisión tiene consecuencias predecibles. Gana quien piensa mejor.',
        tags: ["Game Design", "State Machine", "Strategy"],
      },
    ],
  },
};

const t = computed(() => content[props.lang] || content.en);
</script>
