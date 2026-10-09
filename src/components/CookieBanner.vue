<template>
  <div
    v-if="visible"
    role="region"
    :aria-label="t.aria"
    class="fixed bottom-0 inset-x-0 z-[100] p-4 md:p-6"
  >
    <div class="glass-panel max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 px-5 py-4">
      <p class="font-sans text-sm leading-relaxed flex-1 text-white/80">
        {{ t.text }}
        <a href="https://www.leosoftware.dev/cookies" class="underline hover:no-underline" style="color:#4ade80">{{ t.policy }}</a>
      </p>
      <!-- Both choices look the same: rejecting must be as easy as accepting (AEPD) -->
      <div class="flex items-center gap-3 shrink-0">
        <button type="button" class="glass-btn-sm min-h-[44px]" @click="choose('rejected')">{{ t.reject }}</button>
        <button type="button" class="glass-btn-sm min-h-[44px]" @click="choose('accepted')">{{ t.accept }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Google Analytics only loads after explicit consent (LSSI / RGPD), like leosoftware.dev.
// The measurement ID comes from VITE_GA_ID; without it nothing is shown or loaded.
import { ref, computed, onMounted } from 'vue'

const props = defineProps({ lang: { type: String, default: 'en' } })

const GA_ID = import.meta.env.VITE_GA_ID
const KEY = 'leo_cookies_consent'
const visible = ref(false)

const texts = {
  es: { aria: 'Aviso de cookies', text: 'Uso cookies de analítica (Google Analytics) para saber cuántas personas visitan la consola. Solo se activan si aceptas.', policy: 'Política de cookies', reject: 'Rechazar', accept: 'Aceptar' },
  en: { aria: 'Cookie notice', text: 'I use analytics cookies (Google Analytics) to know how many people visit the console. They are only enabled if you accept.', policy: 'Cookie policy', reject: 'Reject', accept: 'Accept' },
}
const t = computed(() => texts[props.lang] || texts.en)

function loadGA() {
  if (window.gtag) return
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(s)
  window.dataLayer = window.dataLayer || []
  window.gtag = function () { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID)
}

function choose(value) {
  try { localStorage.setItem(KEY, value) } catch {}
  visible.value = false
  if (value === 'accepted') loadGA()
}

onMounted(() => {
  if (!GA_ID) return
  let saved = null
  try { saved = localStorage.getItem(KEY) } catch {}
  if (saved === 'accepted') loadGA()
  else if (!saved) visible.value = true
})
</script>
