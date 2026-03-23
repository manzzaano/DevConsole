<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div
      v-for="(project, index) in t.projectList"
      :key="index"
      :class="[
        'project-card border border-white/10 bg-white/5 p-5 rounded-xl backdrop-blur-md transition-all flex flex-col group',
        project.hoverClass,
      ]"
    >
      <div class="flex justify-between items-start mb-3 gap-4">
        <div>
          <span
            :class="[
              'text-[10px] font-mono tracking-widest uppercase',
              project.idColor,
            ]"
          >
            [ {{ project.id }} ]
          </span>
          <h4
            :class="[
              'text-xl font-bold transition-all group-hover:glow',
              project.titleColor,
            ]"
          >
            {{ project.title }}
          </h4>
        </div>

        <div class="flex-shrink-0 pt-1">
          <a
            :href="project.github"
            target="_blank"
            class="text-gray-400 hover:text-white transition-colors block"
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
        class="text-sm text-gray-300 mb-4 flex-grow leading-relaxed"
        v-html="project.description"
      ></p>

      <div class="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
        <span
          v-for="tag in project.tags"
          :key="tag"
          :class="tagClasses[project.tagTheme]"
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

// Clases calcadas de SkillsContent.vue para mantener 100% de coherencia (sin depender de style.css)
const tagClasses = {
  emerald:
    "inline-block px-3 py-1 rounded-full text-xs font-mono border transition-all duration-300 cursor-default bg-emerald-400/10 border-emerald-400/30 text-emerald-400 hover:bg-emerald-400/20 hover:shadow-[0_0_12px_rgba(52,211,153,0.4)] hover:-translate-y-0.5",
  yellow:
    "inline-block px-3 py-1 rounded-full text-xs font-mono border transition-all duration-300 cursor-default bg-yellow-400/10 border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/20 hover:shadow-[0_0_12px_rgba(234,179,8,0.4)] hover:-translate-y-0.5",
  cyan: "inline-block px-3 py-1 rounded-full text-xs font-mono border transition-all duration-300 cursor-default bg-cyan-400/10 border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/20 hover:shadow-[0_0_12px_rgba(34,211,238,0.4)] hover:-translate-y-0.5",
};

const content = {
  en: {
    projectList: [
      {
        id: "Project_01",
        title: "Regicide",
        github: "https://github.com/manzzaano/REGICIDE",
        description:
          'Card game developed in <span class="text-emerald-400">Java with JavaFX</span>. Includes JSON data persistence and CSV statistics. Deep focus on game logic and design patterns.',
        tags: ["Java", "JavaFX", "JSON"],
        hoverClass: "hover:border-emerald-400",
        idColor: "text-emerald-500",
        titleColor: "text-emerald-400",
        tagTheme: "emerald",
      },
      {
        id: "Project_02",
        title: "Pokédex",
        github: "https://github.com/manzzaano/POKEDEX",
        description:
          'Dynamic Pokémon explorer built with <span class="text-yellow-400">React and Vite</span>. Consumes PokéAPI with asynchronous rendering and smooth navigation.',
        tags: ["React", "Vite", "API"],
        hoverClass: "hover:border-yellow-400",
        idColor: "text-yellow-500",
        titleColor: "text-yellow-400",
        tagTheme: "yellow",
      },
      {
        id: "Project_03",
        title: "Terminal Portfolio",
        github: "https://github.com/manzzaano/PortafolioTerminal",
        description:
          'This very portfolio. Interactive retro-futuristic interface with <span class="text-cyan-400">Vue 3 and WebGL</span>. Real command system and bilingual support.',
        tags: ["Vue 3", "Tailwind", "WebGL"],
        hoverClass: "hover:border-cyan-400",
        idColor: "text-cyan-500",
        titleColor: "text-cyan-400",
        tagTheme: "cyan",
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
          'Juego de cartas desarrollado en <span class="text-emerald-400">Java con JavaFX</span>. Incluye guardado de partidas en JSON y estadísticas en CSV. Fuerte enfoque en patrones de diseño.',
        tags: ["Java", "JavaFX", "JSON"],
        hoverClass: "hover:border-emerald-400",
        idColor: "text-emerald-500",
        titleColor: "text-emerald-400",
        tagTheme: "emerald",
      },
      {
        id: "Proyecto_02",
        title: "Pokédex",
        github: "https://github.com/manzzaano/POKEDEX",
        description:
          'Explorador dinámico de Pokémon con <span class="text-yellow-400">React y Vite</span>. Consume la PokéAPI con renderizado asíncrono y navegación fluida.',
        tags: ["React", "Vite", "API"],
        hoverClass: "hover:border-yellow-400",
        idColor: "text-yellow-500",
        titleColor: "text-yellow-400",
        tagTheme: "yellow",
      },
      {
        id: "Proyecto_03",
        title: "PortfolioTerminal",
        github: "https://github.com/manzzaano/PortafolioTerminal",
        description:
          'Este mismo portafolio. Interfaz interactiva retro-futurista con <span class="text-cyan-400">Vue 3 y WebGL</span>. Sistema de comandos real y soporte bilingüe.',
        tags: ["Vue 3", "Tailwind", "WebGL"],
        hoverClass: "hover:border-cyan-400",
        idColor: "text-cyan-500",
        titleColor: "text-cyan-400",
        tagTheme: "cyan",
      },
    ],
  },
};

const t = computed(() => content[props.lang] || content.en);
</script>
