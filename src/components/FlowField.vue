<template>
  <canvas ref="canvasRef" class="fixed inset-0 w-full h-full pointer-events-none z-0" />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { createNoise3D } from 'simplex-noise'

const canvasRef = ref(null)

const ACCENT      = '#4ade80'
const FADE_MIN     = 0.007
const FADE_BASE    = 0.025
const FADE_PEAK    = 0.12
const FADE_RAMP    = 7200  // 2 min warmup to FADE_BASE
const CLEAN_EVERY  = 10800 // cleanup every 3 min (post-warmup)
const CLEAN_WINDOW = 1800  // cleanup window: 30s
const NOISE_SCALE = 0.002
const TIME_SCALE  = 0.0001

function scaleFactor() {
  const w = window.innerWidth
  if (w < 480)  return 0.3
  if (w < 768)  return 0.5
  if (w < 1024) return 0.6
  if (w < 1440) return 0.9
  return 1.1
}

function particleCount(w, h) {
  const area = w * h
  const sc   = scaleFactor()
  const base = Math.round(area * 0.0006 * sc)
  return Math.min(250, Math.max(25, base))
}

function initParticles(w, h) {
  const count = particleCount(w, h)
  const sc    = scaleFactor()
  return Array.from({ length: count }, () => ({
    x:     Math.random() * w,
    y:     Math.random() * h,
    speed: 0.6 + Math.random() * 0.8 * sc,
    size:  0.5 + Math.random() * sc * 1.5,
    alpha: 0.06 + Math.random() * 0.15 * sc,
    angle: Math.random() * Math.PI * 2,
  }))
}

let animId    = 0
let cleanup   = null

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const noise3D = createNoise3D()
  const pointer = { x: -1000, y: -1000 }
  let particles = []
  let ready     = false
  let paused    = false
  let time      = 0

  function resize() {
    const dpr  = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    const w    = Math.round(rect.width)
    const h    = Math.round(rect.height)
    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width  = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    const expected = particleCount(w, h)
    if (!ready || particles.length !== expected) particles = initParticles(w, h)
    ready = true
  }

  function loop() {
    if (paused) { animId = requestAnimationFrame(loop); return }
    const dpr = window.devicePixelRatio || 1
    const w   = canvas.width / dpr
    const h   = canvas.height / dpr
    if (!ready || w === 0 || h === 0) { animId = requestAnimationFrame(loop); return }

    const base = FADE_MIN + (FADE_BASE - FADE_MIN) * Math.min(1, time / FADE_RAMP)
    let boost = 0
    if (time >= FADE_RAMP) {
      const cleanPhase = (time - FADE_RAMP) % CLEAN_EVERY
      if (cleanPhase < CLEAN_WINDOW) {
        boost = (FADE_PEAK - FADE_BASE) * Math.sin((cleanPhase / CLEAN_WINDOW) * Math.PI)
      }
    }
    const fade = base + boost
    ctx.fillStyle = `rgba(0,0,0,${fade})`
    ctx.fillRect(0, 0, w, h)

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]
      let angle = noise3D(p.x * NOISE_SCALE, p.y * NOISE_SCALE, time * TIME_SCALE) * Math.PI * 2

      const dx   = p.x - pointer.x
      const dy   = p.y - pointer.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      const radius = Math.min(w, h) * 0.15
      if (dist < radius) {
        const deflect  = Math.atan2(dy, dx)
        const strength = (1 - dist / radius) * 0.6
        angle = angle + (deflect - angle) * strength
      }

      p.x += Math.cos(angle) * p.speed
      p.y += Math.sin(angle) * p.speed

      if (p.x < -20 || p.x > w + 20 || p.y < -20 || p.y > h + 20) {
        p.x = Math.random() * w
        p.y = Math.random() * h
      }

      ctx.fillStyle = ACCENT + Math.round(p.alpha * 255).toString(16).padStart(2, '0')
      ctx.fillRect(p.x, p.y, p.size, p.size)
    }

    time++
    animId = requestAnimationFrame(loop)
  }

  function onPointer(e) {
    const t = e.touches ? (e.touches[0] || e.changedTouches[0]) : e
    if (t) { pointer.x = t.clientX; pointer.y = t.clientY }
  }
  function onPointerEnd() { pointer.x = -1000; pointer.y = -1000 }

  resize()
  const tid = setTimeout(() => { animId = requestAnimationFrame(loop) }, 300)

  const obs = new IntersectionObserver(([entry]) => { paused = !entry.isIntersecting }, { threshold: 0 })
  obs.observe(canvas)

  let resizeTimeout = null
  const throttledResize = () => {
    if (resizeTimeout) return
    resize()
    resizeTimeout = setTimeout(() => { resizeTimeout = null }, 200)
  }
  window.addEventListener('resize',    throttledResize)
  window.addEventListener('mousemove', onPointer)
  window.addEventListener('touchmove', onPointer, { passive: true })
  window.addEventListener('touchend',  onPointerEnd)

  cleanup = () => {
    cancelAnimationFrame(animId)
    clearTimeout(tid)
    obs.disconnect()
    window.removeEventListener('resize',    throttledResize)
    window.removeEventListener('mousemove', onPointer)
    window.removeEventListener('touchmove', onPointer)
    window.removeEventListener('touchend',  onPointerEnd)
  }
})

onBeforeUnmount(() => { cleanup?.() })
</script>
