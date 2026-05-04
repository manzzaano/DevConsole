<template>
  <div class="space-y-8">
    <p class="text-white/40 italic mb-4 text-sm text-center font-mono">
      // {{ t.uplinkMessage }}
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="method in t.methods"
        :key="method.name"
        class="glass-card p-6 flex flex-col items-center text-center group"
      >
        <div
          class="w-14 h-14 mb-4 flex items-center justify-center rounded-full bg-white/[3%] border border-white/[15%] group-hover:scale-110 group-hover:border-white/40 group-hover:bg-white/[8%] transition-all duration-300"
        >
          <span v-html="method.svg" class="text-white/70 group-hover:text-white"></span>
        </div>

        <h4 class="font-bold text-white mb-2 text-lg tracking-wide">
          {{ method.name }}
        </h4>

        <div
          class="font-mono text-[10px] mb-6 flex flex-col gap-1.5 w-full border-t border-b border-white/[8%] py-3"
        >
          <span class="text-white/30 uppercase"
            >{{ t.protocolLabel }}:
            <span class="text-white/60">{{ method.protocol }}</span></span
          >
          <span class="text-white/60"
            >STATUS: {{ method.statusText }}</span
          >
        </div>

        <a
          :href="method.link"
          target="_blank"
          class="glass-btn mt-auto w-full text-xs font-mono"
        >
          [ {{ method.actionText }} ]
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  lang: { type: String, default: "en" },
});

// SVGs Nativos (Carga instantánea)
const mailSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`;
const linkedinSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`;
const githubSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`;


const content = {
  en: {
    uplinkMessage: "Establishing secure communication uplink...",
    protocolLabel: "PROTOCOL",
    methods: [
      {
        name: "Email",
        svg: mailSvg,
        protocol: "SMTP // TCP_25",
        statusText: "AWAITING_PAYLOAD",
        actionText: "TRANSMIT",
        link: "https://mail.google.com/mail/?view=cm&fs=1&to=ismaelmanzanoleon@gmail.com",
      },
      {
        name: "LinkedIn",
        svg: linkedinSvg,
        protocol: "WSS // B2B_SYNC",
        statusText: "NETWORK_READY",
        actionText: "CONNECT",
        link: "https://www.linkedin.com/in/ismael-manzano-león-84b266238/",
      },
      {
        name: "GitHub",
        svg: githubSvg,
        protocol: "SSH // GIT_PULL",
        statusText: "REPOS_INDEXED",
        actionText: "EXPLORE",
        link: "https://github.com/manzzaano",
      },
    ],
  },
  es: {
    uplinkMessage: "Estableciendo enlace de comunicación segura...",
    protocolLabel: "PROTOCOLO",
    methods: [
      {
        name: "Email",
        svg: mailSvg,
        protocol: "SMTP // TCP_25",
        statusText: "ESPERANDO_PAYLOAD",
        actionText: "TRANSMITIR",
        link: "https://mail.google.com/mail/?view=cm&fs=1&to=ismaelmanzanoleon@gmail.com",
      },
      {
        name: "LinkedIn",
        svg: linkedinSvg,
        protocol: "WSS // B2B_SYNC",
        statusText: "RED_DISPONIBLE",
        actionText: "CONECTAR",
        link: "https://www.linkedin.com/in/ismael-manzano-león-84b266238/",
      },
      {
        name: "GitHub",
        svg: githubSvg,
        protocol: "SSH // GIT_PULL",
        statusText: "REPOS_INDEXADOS",
        actionText: "EXPLORAR",
        link: "https://github.com/manzzaano",
      },
    ],
  },
};

const t = computed(() => content[props.lang] || content.en);
</script>
