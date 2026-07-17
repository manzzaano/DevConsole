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
          'Web terminal emulator built with Vue 3, the one you are looking at right now. The command dispatcher is decoupled from the renderer, and the <strong>useTerminal</strong> composable holds all the state as a reactive machine that can be injected without touching the DOM. It includes ghost-text autocomplete based on prefix matching, translations loaded from an external JSON file, and a demo mode driven by Typed.js.',
        tags: ["Vue 3", "Vite", "Typed.js", "Tailwind"],
      },
      {
        id: "Project_02",
        title: "leo/",
        github: "https://leosoftware.dev",
        description:
          'Personal portfolio and development journal built with <strong>Next.js 15</strong> and TypeScript. It uses Server Components and strict typing throughout, and scores 100/100 across all four Lighthouse categories.',
        tags: ["Next.js 15", "TypeScript", "Tailwind v4"],
      },
      {
        id: "Project_03",
        title: "PokeCore",
        github: "https://manzzaano.github.io/PokeCore",
        description:
          'Interactive Pokédex built with <strong>React 19 and Vite</strong> on top of the PokéAPI. It covers all 1025 Pokémon with instant search, filtering by type, persistent favorites, a stats modal and a shiny sprite toggle. The interface is fully in Spanish and designed mobile-first.',
        tags: ["React 19", "Vite", "TanStack Query"],
      },
      {
        id: "Project_04",
        title: "Kairos",
        github: "https://github.com/manzzaano/Kairos",
        description:
          'Task management app built with <strong>Flutter</strong> and a FastAPI backend, integrated with Google Gemini. It tracks abandoned tasks as an accumulated debt metric and uses that history to generate written feedback with the model. It also includes geofencing and automatic time-blocking for focus sessions.',
        tags: ["Flutter", "FastAPI", "Google Gemini"],
      },
      {
        id: "Project_05",
        title: "Regicide",
        github: "https://github.com/manzzaano/Regicide",
        description:
          'Strategy card game implemented as a state machine with four phases. All information is visible to the player and randomness plays no part in the outcome, so each game is decided by the choices made. The focus of the project is rule design and state management.',
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
          'Emulador de terminal web construido con Vue 3, el mismo que estás viendo ahora. El despachador de comandos está desacoplado del renderizado, y el composable <strong>useTerminal</strong> concentra todo el estado como una máquina reactiva que se puede inyectar sin tocar el DOM. Incluye autocompletado con ghost text por prefix matching, traducciones cargadas desde un JSON externo y un modo demo orquestado con Typed.js.',
        tags: ["Vue 3", "Vite", "Typed.js", "Tailwind"],
      },
      {
        id: "Proyecto_02",
        title: "leo/",
        github: "https://leosoftware.dev",
        description:
          'Portafolio personal y diario de desarrollo construido con <strong>Next.js 15</strong> y TypeScript. Usa Server Components y tipado estricto en todo el proyecto, y obtiene 100/100 en las cuatro categorías de Lighthouse.',
        tags: ["Next.js 15", "TypeScript", "Tailwind v4"],
      },
      {
        id: "Proyecto_03",
        title: "PokeCore",
        github: "https://manzzaano.github.io/PokeCore",
        description:
          'Pokédex interactiva construida con <strong>React 19 y Vite</strong> sobre la PokéAPI. Cubre los 1025 Pokémon con búsqueda instantánea, filtrado por tipo, favoritos persistentes, modal de estadísticas y selector de sprites shiny. La interfaz está íntegramente en español y con diseño mobile-first.',
        tags: ["React 19", "Vite", "TanStack Query"],
      },
      {
        id: "Proyecto_04",
        title: "Kairos",
        github: "https://github.com/manzzaano/Kairos",
        description:
          'App de gestión de tareas construida con <strong>Flutter</strong> y un backend en FastAPI, integrada con Google Gemini. Registra las tareas abandonadas como una métrica de deuda acumulada y usa ese historial para generar feedback escrito con el modelo. Incorpora además geofencing y time-blocking automático para las sesiones de concentración.',
        tags: ["Flutter", "FastAPI", "Google Gemini"],
      },
      {
        id: "Proyecto_05",
        title: "Regicide",
        github: "https://github.com/manzzaano/Regicide",
        description:
          'Juego de cartas de estrategia implementado como una máquina de estados con cuatro fases. Toda la información es visible para el jugador y el azar no interviene en el resultado, así que cada partida se decide por las jugadas realizadas. El foco del proyecto está en el diseño de reglas y la gestión de estado.',
        tags: ["Game Design", "State Machine", "Strategy"],
      },
    ],
  },
};

const t = computed(() => content[props.lang] || content.en);
</script>
