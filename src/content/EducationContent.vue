<template>
  <div class="space-y-10">
    <p class="text-white/40 italic mb-6 text-sm font-mono">
      // {{ t.accessMessage }}
    </p>

    <div class="relative border-l-2 border-white/[8%] ml-3 pl-8 space-y-12">
      <div
        v-for="(edu, index) in t.academicHistory"
        :key="index"
        class="relative"
      >
        <div
            class="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full"
            :class="
              edu.active
                ? 'bg-[#2AFFB0] shadow-[0_0_12px_rgba(42,255,176,0.6)]'
                : 'bg-white/20'
            "
        ></div>

        <div
          class="flex flex-col md:flex-row md:items-start justify-between gap-x-6 gap-y-3 mb-2"
        >
          <h4
            class="text-lg font-bold text-white leading-tight flex-grow max-w-full md:max-w-[75%]"
          >
            {{ edu.title }}
          </h4>
          <div class="flex-shrink-0">
            <span
            class="glass-tag accent-teal text-[10px] md:text-xs whitespace-nowrap tracking-tight"
            >
              [ {{ edu.status }} ]
            </span>
          </div>
        </div>

        <p class="text-white/40 text-xs mb-3">
          {{ edu.institution }} | {{ edu.period }}
        </p>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in edu.tags"
            :key="tag"
            class="glass-tag accent-teal text-[10px]"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>

    <div class="pt-6 border-t border-white/[8%]">
        <h3
          class="text-sm font-bold accent-teal mb-6 flex items-center tracking-widest uppercase font-mono"
        >
        <i data-lucide="shield-check" class="w-4 h-4 mr-2"></i>
        {{ t.licenseHeader }}
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="(cert, index) in t.certificates"
          :key="index"
          class="glass-card p-4 flex flex-col group"
        >
          <div class="flex items-center justify-between mb-2">
            <span class="text-[10px] text-white/40 font-mono"
              >[ {{ cert.issuerId }} ]</span
            >
            <i data-lucide="award" class="w-4 h-4 text-white/40"></i>
          </div>
          <h5 class="text-md font-bold text-white mb-1">{{ cert.name }}</h5>
          <p class="text-[10px] text-white/40 mb-4">
            {{ cert.platform }} | {{ cert.date }}
          </p>

          <a
            :href="cert.link"
            target="_blank"
            class="glass-btn w-full text-xs font-bold accent-teal"
          >
            [ {{ t.downloadLabel }} ]
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, nextTick } from "vue";

const props = defineProps({
  lang: { type: String, default: "en" },
});

const content = {
  en: {
    accessMessage: "Accessing academic records...",
    licenseHeader: "Verified Licenses",
    downloadLabel: "DOWNLOAD_CREDENTIAL",
    academicHistory: [
      {
        title: "HND in Multiplatform App Development (2nd Year)",
        institution: "IES Maestre de Calatrava",
        period: "2025 - 2026",
        status: "ACTIVE_NODE",
        active: true,
        tags: ["Mobile_Dev", "BI", "Process_Mgmt"],
      },
      {
        title: "HND in Multiplatform App Development (1st Year)",
        institution: "IES Gregorio Prieto",
        period: "2024 - 2025",
        status: "STATUS_OK",
        active: false,
        tags: ["Java", "SQL", "UI_Design", "Systems"],
      },
    ],
    certificates: [
      {
        name: "Azure AI Essentials",
        issuerId: "Microsoft_Certified",
        platform: "Microsoft & LinkedIn",
        date: "Sept 2025",
        link: "./documents/CertificadoDeFinalizacion_Certificado profesional Microsoft Azure AI Essentials de Microsoft y LinkedIn.pdf",
      },
    ],
  },
  es: {
    accessMessage: "Accediendo a registros académicos...",
    licenseHeader: "Licencias Verificadas",
    downloadLabel: "DESCARGAR_CREDENCIAL",
    academicHistory: [
      {
        title:
          "Grado Superior en Desarrollo de Aplicaciones Multiplataforma (2º DAM)",
        institution: "IES Maestre de Calatrava",
        period: "2025 - 2026",
        status: "NODO_ACTIVO",
        active: true,
        tags: ["Móviles", "BI", "Gestión_Procesos"],
      },
      {
        title:
          "Grado Superior en Desarrollo de Aplicaciones Multiplataforma (1º DAM)",
        institution: "IES Gregorio Prieto",
        period: "2024 - 2025",
        status: "STATUS_OK",
        active: false,
        tags: ["Java", "SQL", "Interfaces", "Sistemas"],
      },
    ],
    certificates: [
      {
        name: "Azure AI Essentials",
        issuerId: "Certificación_Microsoft",
        platform: "Microsoft y LinkedIn",
        date: "Sep 2025",
        link: "./documents/CertificadoDeFinalizacion_Certificado profesional Microsoft Azure AI Essentials de Microsoft y LinkedIn.pdf",
      },
    ],
  },
};

const t = computed(() => content[props.lang] || content.en);

onMounted(() => {
  nextTick(() => {
    if (window.lucide) window.lucide.createIcons();
  });
});
</script>
