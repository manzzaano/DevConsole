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

// Same descriptions as the project cards of leosoftware.dev
const content = {
  en: {
    projectList: [
      {
        id: "Project_01",
        title: "leo-mcp",
        github: "https://github.com/manzzaano/leo-code",
        description:
          'An MCP server that gives Claude Code, Cursor or opencode the real call graph of a repo: where each thing is, who calls it and what breaks if you change it, with file and line. No LLM, no API key. Checked on every change against the Python AST and the TypeScript compiler. In development (beta).',
        tags: ["Python", "MCP", "tree-sitter", "AST"],
      },
      {
        id: "Project_02",
        title: "DevConsole",
        github: "https://github.com/manzzaano/DevConsole",
        description:
          'My portfolio as a terminal, the one you are looking at right now, built with <strong>Vue 3</strong>: command logic kept apart from the screen, autocomplete as you type, history and a demo mode, in English and Spanish.',
        tags: ["Vue 3", "Vite", "Typed.js", "Tailwind v4"],
      },
      {
        id: "Project_03",
        title: "Kairos",
        github: "https://github.com/manzzaano/Kairos",
        description:
          'A productivity app in <strong>Flutter</strong>. The first version ran on FastAPI; I rebuilt it with Bloc, tasks stored on the phone that sync to Supabase, and Gemini to prioritise them. In development.',
        tags: ["Flutter", "Bloc", "Supabase", "Gemini"],
      },
      {
        id: "Project_04",
        title: "PokeCore",
        github: "https://manzzaano.github.io/PokeCore",
        description:
          'All 1,025 Pokémon with instant search, type filters, favourites saved in the browser, stats, weaknesses and evolutions. Built with <strong>React 19, Vite and TanStack Query</strong>.',
        tags: ["React 19", "Vite", "TanStack Query", "Zustand"],
      },
      {
        id: "Project_05",
        title: "Regicide",
        github: "https://github.com/manzzaano/Regicide",
        description:
          'It started as a JavaFX game and I brought it to the web: <strong>Spring Boot</strong> runs the game on the server, Angular shows it and moves travel over WebSocket. With accounts, JWT and a PostgreSQL leaderboard. In development.',
        tags: ["Spring Boot", "Angular", "PostgreSQL", "WebSockets"],
      },
      {
        id: "Project_06",
        title: "leo/",
        github: "https://leosoftware.dev",
        description:
          'My personal site, with the projects told in depth and what I keep learning. Built with <strong>Next.js 15</strong>, TypeScript and Tailwind v4, in Spanish and English.',
        tags: ["Next.js 15", "TypeScript", "Tailwind v4"],
      },
    ],
  },
  es: {
    projectList: [
      {
        id: "Proyecto_01",
        title: "leo-mcp",
        github: "https://github.com/manzzaano/leo-code",
        description:
          'Un servidor MCP que da a Claude Code, Cursor u opencode el grafo de llamadas real de un repo: dónde está cada cosa, quién la llama y qué se rompe si la cambias, con archivo y línea. Sin LLM ni clave de API. Comprobado en cada cambio contra el AST de Python y el compilador de TypeScript. En desarrollo (beta).',
        tags: ["Python", "MCP", "tree-sitter", "AST"],
      },
      {
        id: "Proyecto_02",
        title: "DevConsole",
        github: "https://github.com/manzzaano/DevConsole",
        description:
          'Mi portfolio hecho terminal, el que estás viendo ahora, en <strong>Vue 3</strong>: la lógica de los comandos va separada de la pantalla, con autocompletado mientras escribes, historial y un modo demo, en inglés y en español.',
        tags: ["Vue 3", "Vite", "Typed.js", "Tailwind v4"],
      },
      {
        id: "Proyecto_03",
        title: "Kairos",
        github: "https://github.com/manzzaano/Kairos",
        description:
          'App de productividad en <strong>Flutter</strong>. La primera versión iba con FastAPI; la rehíce con Bloc, tareas guardadas en el móvil que se sincronizan con Supabase y Gemini para ordenarlas. En desarrollo.',
        tags: ["Flutter", "Bloc", "Supabase", "Gemini"],
      },
      {
        id: "Proyecto_04",
        title: "PokeCore",
        github: "https://manzzaano.github.io/PokeCore",
        description:
          'Los 1025 Pokémon con búsqueda al momento, filtro por tipos, favoritos guardados en el navegador, estadísticas, debilidades y evoluciones. Hecha con <strong>React 19, Vite y TanStack Query</strong>.',
        tags: ["React 19", "Vite", "TanStack Query", "Zustand"],
      },
      {
        id: "Proyecto_05",
        title: "Regicide",
        github: "https://github.com/manzzaano/Regicide",
        description:
          'Empezó como un juego en JavaFX y lo pasé a la web: <strong>Spring Boot</strong> resuelve la partida en el servidor, Angular la enseña y las jugadas van por WebSocket. Con cuentas, JWT y clasificación en PostgreSQL. En desarrollo.',
        tags: ["Spring Boot", "Angular", "PostgreSQL", "WebSockets"],
      },
      {
        id: "Proyecto_06",
        title: "leo/",
        github: "https://leosoftware.dev",
        description:
          'Mi web personal, con los proyectos contados a fondo y lo que voy aprendiendo. Hecha con <strong>Next.js 15</strong>, TypeScript y Tailwind v4, en español y en inglés.',
        tags: ["Next.js 15", "TypeScript", "Tailwind v4"],
      },
    ],
  },
};

const t = computed(() => content[props.lang] || content.en);
</script>
