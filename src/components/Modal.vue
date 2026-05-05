<template>
  <div
    id="modal-window"
    class="fixed inset-0 bg-black/60 flex items-center justify-center z-50 transition-opacity duration-300 p-4"
    :class="modalHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'"
    @click.self="close"
  >
    <div
      id="modal-container"
      class="glass-panel p-0 text-white flex flex-col w-full max-w-3xl max-h-[90vh] sm:max-h-[85vh] mx-2 sm:mx-4 rounded-[24px] transition-all duration-300"
      :class="modalHidden ? 'scale-95' : 'scale-100'"
    >
      <div
        class="bg-white/[3%] rounded-t-[24px] p-4 flex justify-between items-center border-b border-white/[15%] shrink-0 z-20"
      >
        <h2
          id="modal-title"
          class="text-lg font-bold flex items-center heading-gradient"
          v-html="title"
        ></h2>

        <button
          id="modal-close-btn"
          class="text-white/40 hover:text-white transition-colors"
          @click="close"
        >
          <i data-lucide="x" class="w-6 h-6"></i>
        </button>
      </div>

      <div
        id="modal-content"
        class="flex-grow overflow-y-auto relative custom-scrollbar"
        :class="componentName === 'cv' ? 'p-0' : 'p-4 sm:p-6'"
      >
        <component
          :is="activeComponent"
          v-if="activeComponent"
          :lang="currentLang"
        />

        <div
          v-else-if="!modalHidden"
          class="flex items-center justify-center py-10"
        >
          <p class="text-white/60 animate-pulse font-mono">
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

const close = () => emit("close");

const activeComponent = shallowRef(null);

const componentsMap = {
  about: defineAsyncComponent(() => import("../content/AboutContent.vue")),
  education: defineAsyncComponent(() => import("../content/EducationContent.vue")),
  experience: defineAsyncComponent(() => import("../content/ExperienceContent.vue")),
  skills: defineAsyncComponent(() => import("../content/SkillsContent.vue")),
  projects: defineAsyncComponent(() => import("../content/ProjectsContent.vue")),
  contact: defineAsyncComponent(() => import("../content/ContactContent.vue")),
  cv: defineAsyncComponent(() => import("../content/CvContent.vue")),
};

const applyTiltEffect = () => {
  const cards = document.querySelectorAll("#modal-content .grid > div");
  if (!cards.length) return;

  cards.forEach((card) => {
    card.style.transformStyle = "preserve-3d";
    card.style.willChange = "transform";

    card.onmousemove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) scale(1.01) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      card.style.transition = "transform 0.1s ease-out, box-shadow 0.1s ease-out";
      card.style.boxShadow = "0 10px 30px rgba(160, 185, 210, 0.12)";
      card.style.zIndex = "10";
    };

    card.onmouseleave = () => {
      card.style.transform = "perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg)";
      card.style.transition = "transform 0.5s ease-out, box-shadow 0.5s ease-out";
      card.style.boxShadow = "";
      card.style.zIndex = "1";
    };
  });
};

watch(
  () => props.componentName,
  (newName) => {
    activeComponent.value = newName && componentsMap[newName] ? componentsMap[newName] : null;
  },
);

watch(
  [() => props.modalHidden, activeComponent],
  async ([hidden, comp]) => {
    if (!hidden && comp) {
      await nextTick();
      if (window.lucide) window.lucide.createIcons();
      setTimeout(applyTiltEffect, 100);
    }
  },
);
</script>
