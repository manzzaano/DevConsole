<template>
  <canvas ref="canvasRef" class="fixed inset-0 w-full h-full pointer-events-none z-[2]" />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'

const canvasRef = ref(null)

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform sampler2D map;
  uniform float opacity;
  uniform float uTime;
  varying vec2 vUv;
  void main() {
    vec4 tex = texture2D(map, vUv);
    float lum = dot(tex.rgb, vec3(0.299, 0.587, 0.114));

    // Duotone: #000 → #4ade80, curvas agresivas para sombras oscuras
    float r = pow(lum, 3.50) * 0.290;
    float g = pow(lum, 2.20) * 0.871;
    float b = pow(lum, 3.00) * 0.502;

    // Rayo de luz diagonal
    vec2 rayDir = normalize(vec2(0.82, 0.57));
    float proj  = dot(vUv - 0.5, rayDir);
    float sweep = sin(uTime * 0.12) * 0.70;
    float d     = abs(proj - sweep);
    float mask  = smoothstep(0.3, 0.8, tex.a);
    float core  = exp(-d * d * 220.0) * mask;
    float halo  = exp(-d * d *  12.0) * mask;
    r += core * 0.05 + halo * 0.02;
    g += core * 0.40 + halo * 0.22;
    b += core * 0.12 + halo * 0.06;

    float fw = fwidth(tex.a);
    float a  = smoothstep(0.5 - fw * 1.2, 0.5 + fw * 1.2, tex.a) * opacity;
    gl_FragColor = vec4(r, g, b, a);
  }
`

function hash(n) { const x = Math.sin(n) * 43758.5453123; return x - Math.floor(x) }
function vnoise(t) {
  const i = Math.floor(t), f = t - i, u = f * f * (3 - 2 * f)
  return hash(i) * (1 - u) + hash(i + 1) * u
}

function getVp(camera) {
  const fov = THREE.MathUtils.degToRad(camera.fov)
  const vh = 2 * Math.tan(fov / 2) * camera.position.z
  const vw = vh * (window.innerWidth / window.innerHeight)
  return { vw, vh }
}

const SHAPES = [
  // Superior-izquierda
  { posRatioX: -0.46, posRatioY:  0.46, z:  0, sizeRatio: 0.88, sizeMin: 9,
    baseRx: -0.14, baseRy:  0.07, speedMult: 0.95, phaseOffset: 0.0, mirrorX: false, mirrorY: false, timeOffset: 0.0 },
  // Inferior-derecha (vuelta 180° = otra esquina)
  { posRatioX:  0.50, posRatioY: -0.46, z: -2, sizeRatio: 0.88, sizeMin: 9,
    baseRx: -0.14, baseRy:  0.07, speedMult: 0.82, phaseOffset: 4.8, mirrorX: true,  mirrorY: true,  timeOffset: 5.5 },
]

let cleanup = null

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(0x000000, 0)

  const scene  = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 100)
  camera.position.z = 10

  const meshes = []

  new THREE.TextureLoader().load('/ribbon-opt.png', (texture) => {
    texture.generateMipmaps = true
    texture.minFilter = THREE.LinearMipmapLinearFilter
    texture.magFilter = THREE.LinearFilter
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy()

    const { vw, vh } = getVp(camera)

    for (const p of SHAPES) {
      const material = new THREE.ShaderMaterial({
        uniforms: { map: { value: texture }, opacity: { value: 0 }, uTime: { value: 0 } },
        vertexShader, fragmentShader,
        transparent: true, depthWrite: false, side: THREE.DoubleSide,
      })
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material)
      const size = Math.max(vw * p.sizeRatio, p.sizeMin)
      mesh.position.set(vw * p.posRatioX, vh * p.posRatioY, p.z)
      mesh.scale.set((p.mirrorX ? -1 : 1) * size, (p.mirrorY ? -1 : 1) * size, 1)
      scene.add(mesh)
      meshes.push({ mesh, material, p })
    }
  })

  const clock = new THREE.Clock()
  let lastTime = 0
  let animId

  function animate() {
    animId = requestAnimationFrame(animate)
    const raw   = clock.getElapsedTime()
    const delta = raw - lastTime
    lastTime    = raw

    const { vw, vh } = getVp(camera)

    for (const { mesh, material, p } of meshes) {
      const t = (raw + p.phaseOffset) * p.speedMult

      mesh.rotation.x = p.baseRx + (vnoise(t * 0.28)      - 0.5) * 0.14 + (vnoise(t * 0.67 + 5)  - 0.5) * 0.04
      mesh.rotation.y = p.baseRy + (vnoise(t * 0.20 + 10) - 0.5) * 0.11 + (vnoise(t * 0.44 + 15) - 0.5) * 0.03
      mesh.rotation.z =            (vnoise(t * 0.15 + 20) - 0.5) * 0.07

      const size     = Math.max(vw * p.sizeRatio, p.sizeMin)
      const breathe  = 1 + (vnoise(t * 0.41 + 40) - 0.5) * 0.028
      mesh.scale.set(
        (p.mirrorX ? -1 : 1) * size * breathe,
        (p.mirrorY ? -1 : 1) * size * breathe,
        1
      )
      mesh.position.x = vw * p.posRatioX
      mesh.position.y = vh * p.posRatioY + (vnoise(t * 0.35 + 30) - 0.5) * 2 * (vh * 0.038)

      if (material.uniforms.opacity.value < 1) {
        material.uniforms.opacity.value = Math.min(1, material.uniforms.opacity.value + delta * 0.22)
      }
      material.uniforms.uTime.value = raw + p.timeOffset
    }

    renderer.render(scene, camera)
  }

  animate()

  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
  window.addEventListener('resize', onResize)

  cleanup = () => {
    cancelAnimationFrame(animId)
    window.removeEventListener('resize', onResize)
    renderer.dispose()
  }
})

onBeforeUnmount(() => { cleanup?.() })
</script>
