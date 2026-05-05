<template>
  <div
    class="w-full h-full bg-[#000000] flex justify-center overflow-y-auto custom-scrollbar p-2 md:p-8 relative"
  >
    <div
      v-if="isLoading"
      class="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none"
    >
      <i
        data-lucide="loader-2"
        class="w-8 h-8 text-white/40 animate-spin mb-4"
      ></i>
      <p class="text-white/40 animate-pulse font-mono text-sm">
        [ SYSTEM: RENDERING_PDF_MODULE ]
      </p>
    </div>

    <div
      class="w-full max-w-4xl shadow-[0_0_50px_rgba(0,0,0,0.3)] h-fit bg-white border border-black/10 transition-opacity duration-500"
      :class="isLoading ? 'opacity-0' : 'opacity-100'"
    >
      <VuePdfEmbed
        source="./documents/Ismael_Manzano_CV.pdf"
        @rendered="handleRendered"
        class="w-full"
      />
    </div>

    <div
      class="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-3 glass-btn text-xs pointer-events-none z-50 transition-all duration-500"
      :class="
        isDownloaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      "
    >
      <i data-lucide="check-circle-2" class="w-4 h-4"></i>
      {{ t.downloaded }}
    </div>

    <div
      class="fixed bottom-6 right-6 md:bottom-10 md:right-10 flex flex-col gap-4 z-50"
    >
      <a
        href="./documents/Ismael_Manzano_CV.pdf"
        target="_blank"
        class="glass-fab group !bg-black/85 !text-white/90 border-white/30 hover:!bg-black hover:!text-white hover:border-white/50 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
        :title="t.openRaw"
      >
        <i data-lucide="external-link" class="w-5 h-5"></i>
        <span
          class="absolute right-14 bg-black/80 border border-white/[15%] text-white/60 text-[10px] font-mono px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block pointer-events-none"
        >
          {{ t.openRaw }}
        </span>
      </a>

      <button
        @click="forceDownload"
        class="glass-fab group !bg-black/85 !text-white/90 border-white/30 hover:!bg-black hover:!text-white hover:border-white/50 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
        :title="t.download"
      >
        <i data-lucide="download" class="w-5 h-5"></i>
        <span
          class="absolute right-14 bg-black/80 border border-white/[15%] text-white/60 text-[10px] font-mono px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block pointer-events-none"
        >
          {{ t.download }}
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, computed } from "vue";
import VuePdfEmbed from "vue-pdf-embed";

const props = defineProps({
  lang: { type: String, default: "en" },
});

const isLoading = ref(true);
const isDownloaded = ref(false);

const content = {
  en: {
    openRaw: "[ OPEN_RAW_PDF ]",
    download: "[ DOWNLOAD_OFFLINE ]",
    downloaded: "[ SYSTEM: DOWNLOAD_COMPLETE ]",
  },
  es: {
    openRaw: "[ ABRIR_NATIVO ]",
    download: "[ DESCARGAR_OFFLINE ]",
    downloaded: "[ SISTEMA: DESCARGA_COMPLETADA ]",
  },
};

const t = computed(() => content[props.lang] || content.en);

const handleRendered = () => {
  isLoading.value = false;
};

const forceDownload = async () => {
  try {
    const response = await fetch("./documents/Ismael_Manzano_CV.pdf");
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "Ismael_Manzano_CV.pdf";

    document.body.appendChild(a);
    a.click();

    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);

    isDownloaded.value = true;
    setTimeout(() => {
      isDownloaded.value = false;
    }, 3000);
  } catch (error) {
    console.error("Error al forzar la descarga del PDF:", error);
  }
};

onMounted(() => {
  nextTick(() => {
    if (window.lucide) window.lucide.createIcons();
  });
});
</script>

<style>
.vue-pdf-embed > div {
  margin-bottom: 0 !important;
  box-shadow: none !important;
}

.vue-pdf-embed {
  overflow: hidden !important;
}
</style>
