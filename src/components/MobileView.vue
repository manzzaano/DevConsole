<template>
  <div class="relative z-10 min-h-screen flex flex-col items-center justify-between gap-5 px-4 py-10">

    <!-- Profile -->
    <div class="glass-panel w-full max-w-xs p-6 flex flex-col items-center text-center">
      <img
        src="../assets/foto-perfil.jpg"
        alt="Ismael Manzano"
        class="w-20 h-20 rounded-full object-cover border-2 mb-3"
        style="border-color: rgba(74,222,128,0.35); box-shadow: 0 0 20px rgba(74,222,128,0.15)"
      />
      <h1 class="text-2xl font-bold text-white leading-tight">Ismael Manzano</h1>
      <p class="font-mono text-sm mt-1" style="color: rgba(74,222,128,0.9)">▸ Full Stack Developer</p>
      <p class="font-mono text-xs text-white/35 mt-0.5">Remote / Spain</p>
    </div>

    <!-- Command grid -->
    <div class="grid grid-cols-2 gap-3 w-full max-w-xs">
      <button
        v-for="cmd in commands"
        :key="cmd.id"
        @click="props.openWindow(cmd.id)"
        class="glass-panel p-4 text-left flex flex-col gap-1.5 active:scale-95 transition-transform duration-100"
      >
        <span class="font-mono text-[10px]" style="color:rgba(74,222,128,0.4)">~/{{ cmd.id }}</span>
        <span class="font-mono text-sm font-bold" style="color:#4ade80">{{ cmd.label[currentLang] }}</span>
      </button>
    </div>

    <!-- CTA leosoftware.dev -->
    <a
      href="https://leosoftware.dev"
      class="glass-panel w-full max-w-xs px-5 py-4 flex items-center justify-between"
      style="border-color: rgba(74,222,128,0.28)"
    >
      <div>
        <p class="text-white font-semibold text-sm">{{ currentLang === 'es' ? 'Ver portfolio completo' : 'Full portfolio' }}</p>
        <p class="font-mono text-xs text-white/35 mt-0.5">leosoftware.dev</p>
      </div>
      <span class="font-mono text-lg" style="color: rgba(74,222,128,0.7)">→</span>
    </a>

    <!-- Lang toggle -->
    <div class="flex items-center gap-3 font-mono text-xs">
      <button
        @click="$emit('setLang', 'es')"
        :class="currentLang === 'es' ? 'font-bold' : 'text-white/30'"
        :style="currentLang === 'es' ? 'color:#4ade80' : ''"
      >ES</button>
      <span class="text-white/15">|</span>
      <button
        @click="$emit('setLang', 'en')"
        :class="currentLang === 'en' ? 'font-bold' : 'text-white/30'"
        :style="currentLang === 'en' ? 'color:#4ade80' : ''"
      >EN</button>
    </div>

  </div>
</template>

<script setup>
const props = defineProps({
  currentLang: { type: String, default: 'en' },
  openWindow:  { type: Function, required: true },
})

defineEmits(['setLang'])

const commands = [
  { id: 'about',      label: { en: 'About',      es: 'Sobre mí'    } },
  { id: 'projects',   label: { en: 'Projects',    es: 'Proyectos'   } },
  { id: 'skills',     label: { en: 'Skills',      es: 'Habilidades' } },
  { id: 'experience', label: { en: 'Experience',  es: 'Experiencia' } },
  { id: 'education',  label: { en: 'Education',   es: 'Educación'   } },
  { id: 'contact',    label: { en: 'Contact',     es: 'Contacto'    } },
]
</script>
