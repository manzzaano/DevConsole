<template>
  <canvas ref="canvasRef" aria-hidden="true" class="fixed inset-0 w-full h-full pointer-events-none" />
</template>

<script setup>
// The leo/ slash from leosoftware.dev's hero, built from particles that assemble on load,
// dodge the cursor and burst on click. Plain 2D canvas: each particle eases back home plus
// a decaying velocity. Green here, and drawn in the free space right of the terminal window.
import { ref, onMounted, onBeforeUnmount } from 'vue'

const SPACING = 5       // px between particles inside the slash
const MOUSE_R = 110     // cursor repel radius
const EASE = 0.016      // avg share of the distance home covered per frame
const FRICTION = 0.92   // how fast pushes from the cursor / click die out
const COLORS = ['#22c55e', '#4ade80', '#16a34a', '#86efac']
const WINDOW_W = 896    // terminal window max width (TerminalWindow initWindow)

const canvasRef = ref(null)
let cleanup = null

onMounted(() => {
  const canvas = canvasRef.value
  const ctx = canvas?.getContext('2d')
  if (!ctx) return

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const hasMouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  let w = 0, h = 0, raf = 0, alpha = 1
  let mx = -9999, my = -9999
  let ps = []

  // Fill a parallelogram shaped like "/" with evenly spaced home points.
  // Particles start scattered only on first load; later rebuilds place them home.
  const build = (scatter) => {
    const dpr = window.devicePixelRatio || 1
    w = canvas.clientWidth
    h = canvas.clientHeight
    canvas.width = w * dpr
    canvas.height = h * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const desktop = w >= 768
    alpha = desktop ? 1 : 0.3
    // desktop: centred in the margin right of the window, sized to fit it
    const margin = (w - Math.min(WINDOW_W, w * 0.92)) / 2
    let H = Math.min(h * (desktop ? 0.72 : 0.6), 640)
    if (desktop) H = Math.min(H, (margin * 0.8) / 0.42)
    const W = H * 0.42
    const t = W * 0.3                       // stroke thickness
    const cx = desktop ? w - margin / 2 : w * 0.5
    const x0 = cx - W / 2, y0 = h / 2 - H / 2

    ps = []
    if (H < 80) return                      // no room next to the window
    for (let y = 0; y <= H; y += SPACING) {
      const left = (W - t) * (1 - y / H)    // left edge moves left as we go down
      for (let x = left; x <= left + t; x += SPACING) {
        const hx = x0 + x, hy = y0 + y
        ps.push({
          hx, hy,
          x: scatter ? Math.random() * w : hx,
          y: scatter ? Math.random() * h : hy,
          vx: 0, vy: 0,
          k: EASE * (0.5 + Math.random()),   // per-particle ease -> staggered, gradual return
          s: 1.2 + Math.random() * 1.2,
          c: COLORS[(Math.random() * COLORS.length) | 0],
        })
      }
    }
  }

  const draw = (time) => {
    ctx.clearRect(0, 0, w, h)
    ctx.globalAlpha = alpha
    for (let i = 0; i < ps.length; i++) {
      const p = ps[i]
      if (!reduceMotion) {
        // breathing: tiny drift around home so the shape never looks frozen
        const tx = p.hx + Math.sin(time * 0.0012 + i) * 0.8
        const ty = p.hy + Math.cos(time * 0.001 + i * 0.7) * 0.8
        const dx = p.x - mx, dy = p.y - my
        const d2 = dx * dx + dy * dy
        if (d2 < MOUSE_R * MOUSE_R) {
          const d = Math.sqrt(d2) || 1
          const f = (1 - d / MOUSE_R) * 2
          p.vx += (dx / d) * f
          p.vy += (dy / d) * f
        }
        p.vx *= FRICTION
        p.vy *= FRICTION
        p.x += p.vx + (tx - p.x) * p.k
        p.y += p.vy + (ty - p.y) * p.k
      }
      ctx.fillStyle = p.c
      ctx.fillRect(p.x, p.y, p.s, p.s)
    }
  }

  const loop = (time) => {
    draw(time)
    raf = document.hidden ? 0 : requestAnimationFrame(loop)
  }
  const wake = () => { if (!raf && !document.hidden) raf = requestAnimationFrame(loop) }

  const onMove = (e) => { mx = e.clientX; my = e.clientY }
  // mouseout with no relatedTarget = pointer left the browser window
  const onLeave = (e) => { if (!e.relatedTarget) mx = my = -9999 }
  // burst only on clicks on the background, not inside the terminal or a modal
  const onDown = (e) => {
    if (e.target instanceof Element && e.target.closest('#window, #modal-window, a, button')) return
    for (const p of ps) {
      const dx = p.x - e.clientX, dy = p.y - e.clientY
      const d = Math.hypot(dx, dy) || 1
      const f = 32 * Math.max(0, 1 - d / 700)
      p.vx += (dx / d) * f + (Math.random() - 0.5) * 3
      p.vy += (dy / d) * f + (Math.random() - 0.5) * 3
    }
  }
  const onResize = () => {
    if (canvas.clientWidth === w && canvas.clientHeight === h) return
    build(false)
    if (reduceMotion) draw(0)
  }

  build(!reduceMotion)
  if (reduceMotion) {
    draw(0)
  } else {
    wake()
    if (hasMouse) {
      window.addEventListener('pointermove', onMove)
      window.addEventListener('pointerdown', onDown)
      window.addEventListener('mouseout', onLeave)
    }
    document.addEventListener('visibilitychange', wake)
  }
  window.addEventListener('resize', onResize)

  cleanup = () => {
    cancelAnimationFrame(raf)
    window.removeEventListener('pointermove', onMove)
    window.removeEventListener('pointerdown', onDown)
    window.removeEventListener('mouseout', onLeave)
    document.removeEventListener('visibilitychange', wake)
    window.removeEventListener('resize', onResize)
  }
})

onBeforeUnmount(() => cleanup?.())
</script>
