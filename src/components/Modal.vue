<template>
  <div
    id="modal-window"
    class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
    :class="{ hidden: modalHidden }"
    @click.self="close"
  >
    <div
      id="modal-container"
      class="bg-black/40 backdrop-blur-md border border-white/10 text-gray-200 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] w-full max-w-3xl max-h-[85vh] flex flex-col"
    >
      <div
        class="bg-white/5 p-4 rounded-t-xl flex justify-between items-center border-b border-white/10"
      >
        <h2
          id="modal-title"
          class="text-lg font-bold font-sans flex items-center"
          v-html="title"
        ></h2>
        <button
          id="modal-close-btn"
          class="text-gray-400 hover:text-white transition-colors"
          @click="close"
        >
          <i data-lucide="x" class="w-6 h-6"></i>
        </button>
      </div>
      <div
        id="modal-content"
        class="p-6 overflow-y-auto font-sans relative"
        v-html="content"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, watch, nextTick } from "vue";

const props = defineProps({
  modalHidden: { type: Boolean, default: true },
  title: { type: String, default: "" },
  content: { type: String, default: "" },
});

const emit = defineEmits(["close"]);
const close = () => emit("close");

// Lógica para el efecto 3D (Tilt)
const applyTiltEffect = () => {
  // Seleccionamos las tarjetas que están dentro del grid de proyectos
  const cards = document.querySelectorAll("#modal-content .grid > div");
  if (!cards.length) return;

  cards.forEach((card) => {
    // Para que el efecto 3D funcione bien
    card.style.transformStyle = "preserve-3d";

    card.onmousemove = (e) => {
      const rect = card.getBoundingClientRect();
      // Coordenadas del ratón relativas a la tarjeta
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Centro de la tarjeta
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Intensidad de la rotación (ajustar divisor para más o menos efecto)
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      // Aplicar rotación y ligero aumento de tamaño
      card.style.transform = `perspective(1000px) scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      card.style.transition =
        "transform 0.1s ease-out, box-shadow 0.1s ease-out";
      card.style.boxShadow = "0 20px 40px rgba(52, 211, 153, 0.2)";
      card.style.zIndex = "10";
    };

    card.onmouseleave = () => {
      // Restaurar estado original al sacar el ratón
      card.style.transform =
        "perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg)";
      card.style.transition =
        "transform 0.5s ease-out, box-shadow 0.5s ease-out";
      card.style.boxShadow = "";
      card.style.zIndex = "1";
    };
  });
};

// Vigilar cuando se abre el modal o cambia el contenido para reaplicar los eventos
watch([() => props.modalHidden, () => props.content], async ([newHidden]) => {
  if (!newHidden) {
    await nextTick();
    applyTiltEffect();
  }
});
</script>
