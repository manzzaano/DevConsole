<template>
  <div
    id="modal-window"
    class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300"
    :class="[
      modalHidden ? 'opacity-0 pointer-events-none' : 'opacity-100',
      isExpanded ? 'p-0' : 'p-4',
    ]"
    @click.self="close"
  >
    <div
      id="modal-container"
      class="bg-black/40 backdrop-blur-md border border-white/10 text-gray-200 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col transition-all duration-500 ease-in-out relative"
      :class="[
        isExpanded
          ? 'w-full h-full max-w-none max-h-none rounded-none border-none'
          : 'w-full max-w-3xl max-h-[85vh] rounded-xl',
      ]"
    >
      <div
        class="bg-white/5 p-4 flex justify-between items-center border-b border-white/10 shrink-0 z-20"
        :class="[isExpanded ? 'bg-slate-900/90' : 'rounded-t-xl']"
      >
        <h2
          id="modal-title"
          class="text-lg font-bold font-sans flex items-center"
          v-html="title"
        ></h2>

        <div class="flex items-center gap-4">
          <button
            id="modal-close-btn"
            class="text-gray-400 hover:text-white transition-colors"
            @click="close"
          >
            <i data-lucide="x" class="w-6 h-6"></i>
          </button>
        </div>
      </div>

      <div
        id="modal-content"
        class="flex-grow overflow-y-auto font-sans relative custom-scrollbar"
        :class="[isExpanded ? 'p-0 bg-white' : 'p-6']"
      >
        <component
          :is="activeComponent"
          v-if="activeComponent"
          :lang="currentLang"
          :isExpanded="isExpanded"
          @toggle-expand="isExpanded = !isExpanded"
        />

        <div
          v-else-if="!modalHidden"
          class="flex items-center justify-center py-10"
        >
          <p class="text-emerald-400 animate-pulse font-mono">
            Initializing module...
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick, shallowRef, defineAsyncComponent } from "vue";

const props = defineProps({
  modalHidden: { type: Boolean, default: true },
  title: { type: String, default: "" },
  componentName: { type: String, default: "" },
  currentLang: { type: String, default: "en" },
});

const emit = defineEmits(["close"]);
const isExpanded = ref(false);

const close = () => {
  isExpanded.value = false;
  emit("close");
};

const activeComponent = shallowRef(null);

const componentsMap = {
  about: defineAsyncComponent(() => import("../content/AboutContent.vue")),
  education: defineAsyncComponent(
    () => import("../content/EducationContent.vue"),
  ),
  experience: defineAsyncComponent(
    () => import("../content/ExperienceContent.vue"),
  ),
  skills: defineAsyncComponent(() => import("../content/SkillsContent.vue")),
  projects: defineAsyncComponent(
    () => import("../content/ProjectsContent.vue"),
  ),
  contact: defineAsyncComponent(() => import("../content/ContactContent.vue")),
  cv: defineAsyncComponent(() => import("../content/CvContent.vue")),
};

const applyTiltEffect = () => {
  // Si la modal está expandida, no aplicamos el efecto 3D para no romper el layout nativo
  if (isExpanded.value) return;

  const cards = document.querySelectorAll("#modal-content .grid > div");
  if (!cards.length) return;

  cards.forEach((card) => {
    card.style.transformStyle = "preserve-3d";
    card.style.willChange = "transform";

    card.onmousemove = (e) => {
      if (isExpanded.value) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) scale(1.01) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      card.style.transition =
        "transform 0.1s ease-out, box-shadow 0.1s ease-out";

      // Lógica de sombras dinámica
      if (
        card.classList.contains("hover:border-emerald-400") ||
        card.classList.contains("border-emerald-500/20")
      ) {
        card.style.boxShadow = "0 10px 30px rgba(52, 211, 153, 0.15)";
      } else if (card.classList.contains("hover:border-yellow-400")) {
        card.style.boxShadow = "0 10px 30px rgba(234, 179, 8, 0.15)";
      } else if (
        card.classList.contains("hover:border-cyan-400") ||
        card.classList.contains("border-cyan-500/20")
      ) {
        card.style.boxShadow = "0 10px 30px rgba(34, 211, 238, 0.15)";
      } else if (card.classList.contains("hover:border-purple-400")) {
        card.style.boxShadow = "0 10px 30px rgba(168, 85, 247, 0.15)";
      } else {
        card.style.boxShadow = "0 10px 30px rgba(34, 211, 238, 0.1)";
      }
      card.style.zIndex = "10";
    };

    card.onmouseleave = () => {
      card.style.transform =
        "perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg)";
      card.style.transition =
        "transform 0.5s ease-out, box-shadow 0.5s ease-out";
      card.style.boxShadow = "";
      card.style.zIndex = "1";
    };
  });
};

watch(
  () => props.componentName,
  (newName) => {
    isExpanded.value = false;
    if (newName && componentsMap[newName]) {
      activeComponent.value = componentsMap[newName];
    } else {
      activeComponent.value = null;
    }
  },
);

watch(
  [() => props.modalHidden, activeComponent, isExpanded],
  async ([hidden, comp]) => {
    if (!hidden && comp) {
      await nextTick();
      if (window.lucide) window.lucide.createIcons();
      setTimeout(applyTiltEffect, 100);
    }
  },
);
</script>
