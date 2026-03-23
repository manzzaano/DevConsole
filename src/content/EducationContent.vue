<template>
  <div class="space-y-10">
    <p class="text-gray-400 italic mb-6 text-sm font-mono">
      // {{ t.accessMessage }}
    </p>

    <div class="relative border-l-2 border-emerald-500/20 ml-3 pl-8 space-y-12">
      <div
        v-for="(edu, index) in t.academicHistory"
        :key="index"
        class="relative"
      >
        <div
          class="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full"
          :class="
            edu.active
              ? 'bg-emerald-400 shadow-[0_0_10px_#34d399]'
              : 'bg-gray-600'
          "
        ></div>

        <div
          class="flex flex-col md:flex-row md:items-start justify-between gap-x-6 gap-y-3 mb-2"
        >
          <h4
            class="text-lg font-bold text-emerald-400 leading-tight flex-grow max-w-full md:max-w-[75%]"
          >
            {{ edu.title }}
          </h4>
          <div class="flex-shrink-0">
            <span
              :class="[
                edu.active
                  ? 'bg-yellow-400/10 border-yellow-400/30 text-yellow-400'
                  : 'bg-emerald-400/10 border-emerald-400/30 text-emerald-400',
                'inline-block px-2.5 py-1 rounded-full text-[10px] md:text-xs font-mono border whitespace-nowrap tracking-tight',
              ]"
            >
              [ {{ edu.status }} ]
            </span>
          </div>
        </div>

        <p class="text-gray-400 text-xs mb-3">
          {{ edu.institution }} | {{ edu.period }}
        </p>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in edu.tags"
            :key="tag"
            class="inline-block px-2.5 py-1 rounded-full text-[10px] font-mono border transition-all duration-300 cursor-default bg-emerald-400/10 border-emerald-400/30 text-emerald-400 hover:bg-emerald-400/20 hover:shadow-[0_0_12px_rgba(52,211,153,0.4)] hover:-translate-y-0.5"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>

    <div class="pt-6 border-t border-white/5">
      <h3
        class="text-sm font-bold text-yellow-400 mb-6 flex items-center tracking-widest uppercase font-mono"
      >
        <i data-lucide="shield-check" class="w-4 h-4 mr-2"></i>
        {{ t.licenseHeader }}
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="(cert, index) in t.certificates"
          :key="index"
          class="project-card border border-emerald-500/20 bg-emerald-500/5 p-4 rounded-lg flex flex-col group hover:border-emerald-400 transition-all"
        >
          <div class="flex items-center justify-between mb-2">
            <span class="text-[10px] text-emerald-400 font-mono"
              >[ {{ cert.issuerId }} ]</span
            >
            <i data-lucide="award" class="w-4 h-4 text-emerald-400"></i>
          </div>
          <h5 class="text-md font-bold text-white mb-1">{{ cert.name }}</h5>
          <p class="text-[10px] text-gray-400 mb-4">
            {{ cert.platform }} | {{ cert.date }}
          </p>

          <a
            :href="cert.link"
            target="_blank"
            class="block text-center transition-all font-bold text-xs py-2 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 hover:bg-emerald-400 hover:text-black hover:shadow-[0_0_15px_rgba(52,211,153,0.5)]"
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
