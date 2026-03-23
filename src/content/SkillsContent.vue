<template>
  <div class="space-y-6">
    <p class="text-gray-400 italic mb-4 text-sm font-mono">
      // {{ t.diagMessage }}
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        class="border border-white/10 bg-white/5 p-4 rounded-lg backdrop-blur-sm hover:border-emerald-400 transition-colors group"
      >
        <div class="flex items-center mb-4 text-emerald-400">
          <i data-lucide="code-2" class="w-5 h-5 mr-2"></i>
          <h4 class="font-bold uppercase tracking-widest text-sm">
            {{ t.catLanguages }}
          </h4>
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in t.skills.languages"
            :key="skill"
            class="inline-block px-3 py-1 rounded-full text-xs font-mono border transition-all duration-300 cursor-default bg-emerald-400/10 border-emerald-400/30 text-emerald-400 hover:bg-emerald-400/20 hover:shadow-[0_0_12px_rgba(52,211,153,0.4)] hover:-translate-y-0.5"
          >
            {{ skill }}
          </span>
        </div>
      </div>

      <div
        class="border border-white/10 bg-white/5 p-4 rounded-lg backdrop-blur-sm hover:border-yellow-400 transition-colors group"
      >
        <div class="flex items-center mb-4 text-yellow-400">
          <i data-lucide="layers" class="w-5 h-5 mr-2"></i>
          <h4 class="font-bold uppercase tracking-widest text-sm">
            {{ t.catFrontend }}
          </h4>
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in t.skills.frontend"
            :key="skill"
            class="inline-block px-3 py-1 rounded-full text-xs font-mono border transition-all duration-300 cursor-default bg-yellow-400/10 border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/20 hover:shadow-[0_0_12px_rgba(234,179,8,0.4)] hover:-translate-y-0.5"
          >
            {{ skill }}
          </span>
        </div>
      </div>

      <div
        class="border border-white/10 bg-white/5 p-4 rounded-lg backdrop-blur-sm hover:border-cyan-400 transition-colors group"
      >
        <div class="flex items-center mb-4 text-cyan-400">
          <i data-lucide="box" class="w-5 h-5 mr-2"></i>
          <h4 class="font-bold uppercase tracking-widest text-sm">
            {{ t.catTools }}
          </h4>
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in t.skills.tools"
            :key="skill"
            class="inline-block px-3 py-1 rounded-full text-xs font-mono border transition-all duration-300 cursor-default bg-cyan-400/10 border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/20 hover:shadow-[0_0_12px_rgba(34,211,238,0.4)] hover:-translate-y-0.5"
          >
            {{ skill }}
          </span>
        </div>
      </div>

      <div
        class="border border-white/10 bg-white/5 p-4 rounded-lg backdrop-blur-sm hover:border-purple-400 transition-colors group"
      >
        <div class="flex items-center mb-4 text-purple-400">
          <i data-lucide="cpu" class="w-5 h-5 mr-2"></i>
          <h4 class="font-bold uppercase tracking-widest text-sm">
            {{ t.catArchitecture }}
          </h4>
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in t.skills.architecture"
            :key="skill"
            class="inline-block px-3 py-1 rounded-full text-xs font-mono border transition-all duration-300 cursor-default bg-purple-500/10 border-purple-500/30 text-purple-400 hover:bg-purple-500/20 hover:shadow-[0_0_12px_rgba(168,85,247,0.4)] hover:-translate-y-0.5"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";

const props = defineProps({
  lang: { type: String, default: "en" },
});

const content = {
  en: {
    diagMessage: "Running system capabilities diagnostic...",
    catLanguages: "Programming Languages",
    catFrontend: "Frameworks & Ecosystem",
    catTools: "Infrastructure & Tools",
    catArchitecture: "Architecture & Others",
    skills: {
      languages: [
        "Java",
        "Kotlin",
        "C#",
        "JavaScript",
        "PHP",
        "Python",
        "SQL",
        "HTML/CSS",
      ],
      frontend: [
        "Spring Boot",
        ".NET",
        "Compose Multiplatform",
        "Laravel",
        "Vue.js",
        "React",
        "Tailwind CSS",
        "Bootstrap",
        "Vite",
      ],
      tools: [
        "Docker",
        "Git/GitHub",
        "Azure",
        "VirtualBox",
        "MySQL / SQL Server",
      ],
      architecture: ["OOP", "MVC / MVVM", "Scrum / Kanban", "Jira / Trello"],
    },
  },
  es: {
    diagMessage: "Ejecutando diagnóstico de capacidades del sistema...",
    catLanguages: "Lenguajes de Programación",
    catFrontend: "Frameworks y Ecosistema",
    catTools: "Infraestructura & Herramientas",
    catArchitecture: "Arquitectura & Otros",
    skills: {
      languages: [
        "Java",
        "Kotlin",
        "C#",
        "JavaScript",
        "PHP",
        "Python",
        "SQL",
        "HTML/CSS",
      ],
      frontend: [
        "Spring Boot",
        ".NET",
        "Compose Multiplatform",
        "Laravel",
        "Vue.js",
        "React",
        "Tailwind CSS",
        "Bootstrap",
        "Vite",
      ],
      tools: [
        "Docker",
        "Git/GitHub",
        "Azure",
        "VirtualBox",
        "MySQL / SQL Server",
      ],
      architecture: ["POO", "MVC / MVVM", "Scrum / Kanban", "Jira / Trello"],
    },
  },
};

const t = computed(() => content[props.lang] || content.en);

onMounted(() => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
</script>
