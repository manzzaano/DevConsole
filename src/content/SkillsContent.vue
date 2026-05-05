<template>
  <div class="space-y-6">
    <p class="text-white/40 italic mb-4 text-sm font-mono">
      // {{ t.diagMessage }}
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        class="glass-card p-4 group"
      >
        <div class="flex items-center mb-4">
          <i data-lucide="code-2" class="w-5 h-5 mr-2 accent-teal"></i>
          <h4 class="font-bold uppercase tracking-widest text-sm accent-teal">
            {{ t.catLanguages }}
          </h4>
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in t.skills.languages"
            :key="skill"
            class="glass-tag"
          >
            {{ skill }}
          </span>
        </div>
      </div>

      <div
        class="glass-card p-4 group"
      >
        <div class="flex items-center mb-4">
          <i data-lucide="layers" class="w-5 h-5 mr-2 accent-teal"></i>
          <h4 class="font-bold uppercase tracking-widest text-sm accent-teal">
            {{ t.catFrontend }}
          </h4>
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in t.skills.frontend"
            :key="skill"
            class="glass-tag"
          >
            {{ skill }}
          </span>
        </div>
      </div>

      <div
        class="glass-card p-4 group"
      >
        <div class="flex items-center mb-4">
          <i data-lucide="box" class="w-5 h-5 mr-2 accent-teal"></i>
          <h4 class="font-bold uppercase tracking-widest text-sm accent-teal">
            {{ t.catTools }}
          </h4>
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in t.skills.tools"
            :key="skill"
            class="glass-tag"
          >
            {{ skill }}
          </span>
        </div>
      </div>

      <div
        class="glass-card p-4 group"
      >
        <div class="flex items-center mb-4">
          <i data-lucide="cpu" class="w-5 h-5 mr-2 accent-teal"></i>
          <h4 class="font-bold uppercase tracking-widest text-sm accent-teal">
            {{ t.catArchitecture }}
          </h4>
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in t.skills.architecture"
            :key="skill"
            class="glass-tag"
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
