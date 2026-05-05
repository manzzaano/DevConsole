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
          <h4 class="text-lg sm:text-xl font-bold text-white transition-all">
            {{ project.title }}
          </h4>
        </div>

        <div class="flex-shrink-0 pt-1">
          <a
            :href="project.github"
            target="_blank"
            class="text-white/40 hover:text-[#2AFFB0] transition-colors block accent-cyan"
            :aria-label="'View ' + project.title + ' on GitHub'"
          >
            <svg
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
          </a>
        </div>
      </div>

      <p
        class="text-sm text-white/70 mb-4 flex-grow leading-relaxed"
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
        title: "Regicide",
        github: "https://github.com/manzzaano/REGICIDE",
        description:
          'Card game developed in <strong>Java with JavaFX</strong>. Includes JSON data persistence and CSV statistics. Deep focus on game logic and design patterns.',
        tags: ["Java", "JavaFX", "JSON"],
      },
      {
        id: "Project_02",
        title: "Pokédex",
        github: "https://github.com/manzzaano/POKEDEX",
        description:
          'Dynamic Pokémon explorer built with <strong>React and Vite</strong>. Consumes PokéAPI with asynchronous rendering and smooth navigation.',
        tags: ["React", "Vite", "API"],
      },
      {
        id: "Project_03",
        title: "Terminal Portfolio",
        github: "https://github.com/manzzaano/PortafolioTerminal",
        description:
          'This very portfolio. Interactive terminal emulator with <strong>Vue 3 and TailwindCSS</strong>. Glassmorphism fluid design with bilingual support and a real command system.',
        tags: ["Vue 3", "Tailwind", "CLI"],
      },
    ],
  },
  es: {
    projectList: [
      {
        id: "Proyecto_01",
        title: "Regicide",
        github: "https://github.com/manzzaano/REGICIDE",
        description:
          'Juego de cartas desarrollado en <strong>Java con JavaFX</strong>. Incluye guardado de partidas en JSON y estadísticas en CSV. Fuerte enfoque en patrones de diseño.',
        tags: ["Java", "JavaFX", "JSON"],
      },
      {
        id: "Proyecto_02",
        title: "Pokédex",
        github: "https://github.com/manzzaano/POKEDEX",
        description:
          'Explorador dinámico de Pokémon con <strong>React y Vite</strong>. Consume la PokéAPI con renderizado asíncrono y navegación fluida.',
        tags: ["React", "Vite", "API"],
      },
      {
        id: "Proyecto_03",
        title: "PortfolioTerminal",
        github: "https://github.com/manzzaano/PortafolioTerminal",
        description:
          'Este mismo portafolio. Emulador de terminal interactivo con <strong>Vue 3 y TailwindCSS</strong>. Diseño glassmorphism fluido con soporte bilingüe y sistema de comandos real.',
        tags: ["Vue 3", "Tailwind", "CLI"],
      },
    ],
  },
};

const t = computed(() => content[props.lang] || content.en);
</script>
