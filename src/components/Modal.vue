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
        class="p-6 overflow-y-auto font-sans relative custom-scrollbar"
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

// Lógica para el efecto 3D (Tilt) optimizada para todas las secciones
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
      card.style.transition =
        "transform 0.1s ease-out, box-shadow 0.1s ease-out";

      // Sombra dinámica inteligente según el tema de la tarjeta
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
      } else {
        card.style.boxShadow = "0 10px 30px rgba(255, 255, 255, 0.05)";
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

watch([() => props.modalHidden, () => props.content], async ([newHidden]) => {
  if (!newHidden) {
    await nextTick();
    applyTiltEffect();
  }
});
</script>

<style scoped>
/* --- FIX GEOMÉTRICO ABSOLUTO: PERFECCIÓN CIRCULAR --- */
:deep(.profile-container) {
  /* Forzamos dimensiones cuadradas exactas (w-40 Tailwind = 10rem) */
  width: 10rem !important;
  height: 10rem !important;
  /* Mantenemos el cuadrado perfecto */
  aspect-ratio: 1 / 1 !important;
  /* Círculo perfecto forzado */
  border-radius: 9999px !important;

  /* Forzamos que la imagen de fondo cubra y se centre SIN DEFORMAR */
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;

  /* Aplicamos el borde y el glow directamente en CSS scoped */
  border: 4px solid #34d399 !important; /* border-emerald-400 */
  box-shadow: 0 0 20px rgba(52, 211, 153, 0.3) !important;
}

/* --- ESTILOS BASE Y BADGES --- */
:deep(.skill-badge),
:deep(.skill-badge-yellow),
:deep(.skill-badge-cyan),
:deep(.skill-badge-purple),
:deep(.tag-badge),
:deep(.tag-badge-yellow),
:deep(.tag-badge-cyan) {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  border-width: 1px;
  transition: all 0.3s ease;
  cursor: default;
  text-decoration: none;
}

/* Colores Verdes */
:deep(.skill-badge),
:deep(.tag-badge) {
  background: rgba(52, 211, 153, 0.1);
  border-color: rgba(52, 211, 153, 0.3);
  color: #34d399;
}
:deep(.skill-badge:hover),
:deep(.tag-badge:hover) {
  background: rgba(52, 211, 153, 0.2);
  box-shadow: 0 0 12px rgba(52, 211, 153, 0.4);
  transform: translateY(-2px);
}

/* Colores Amarillos */
:deep(.skill-badge-yellow),
:deep(.tag-badge-yellow) {
  background: rgba(234, 179, 8, 0.1);
  border-color: rgba(234, 179, 8, 0.3);
  color: #fbbf24;
}
:deep(.skill-badge-yellow:hover),
:deep(.tag-badge-yellow:hover) {
  background: rgba(234, 179, 8, 0.2);
  box-shadow: 0 0 12px rgba(234, 179, 8, 0.4);
  transform: translateY(-2px);
}

/* Colores Cian */
:deep(.skill-badge-cyan),
:deep(.tag-badge-cyan) {
  background: rgba(34, 211, 238, 0.1);
  border-color: rgba(34, 211, 238, 0.3);
  color: #22d3ee;
}
:deep(.skill-badge-cyan:hover),
:deep(.tag-badge-cyan:hover) {
  background: rgba(34, 211, 238, 0.2);
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.4);
  transform: translateY(-2px);
}

/* Colores Púrpuras */
:deep(.skill-badge-purple) {
  background: rgba(168, 85, 247, 0.1);
  border-color: rgba(168, 85, 247, 0.3);
  color: #a855f7;
}
:deep(.skill-badge-purple:hover) {
  background: rgba(168, 85, 247, 0.2);
  box-shadow: 0 0 12px rgba(168, 85, 247, 0.4);
  transform: translateY(-2px);
}

/* --- ESTILOS DE TARJETAS (PROYECTOS, EXPERIENCIA, CONTACTO) --- */
:deep(.project-card:hover .glow) {
  text-shadow: 0 0 10px #34d399;
}
:deep(.project-card:hover .glow-yellow) {
  text-shadow: 0 0 10px #fbbf24;
}
:deep(.project-card:hover .glow-cyan) {
  text-shadow: 0 0 10px #22d3ee;
}

/* Botones con hover de color */
:deep(a.tag-badge:hover) {
  background: #34d399;
  color: #000;
  border-color: #34d399;
}
:deep(a.tag-badge-cyan:hover) {
  background: #22d3ee;
  color: #000;
  border-color: #22d3ee;
}
:deep(a.tag-badge-yellow:hover) {
  background: #fbbf24;
  color: #000;
  border-color: #fbbf24;
}

/* --- SECCIÓN ABOUT ME --- */
:deep(.tracking-tight) {
  text-shadow: 0 0 5px rgba(52, 211, 153, 0.3);
}

/* Línea separadora interna */
:deep(.border-t) {
  border-color: rgba(255, 255, 255, 0.08);
}

/* --- SCROLLBAR --- */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(52, 211, 153, 0.3);
}
</style>
