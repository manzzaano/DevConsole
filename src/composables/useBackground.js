import * as THREE from "three";
import { onMounted, onBeforeUnmount } from "vue";

/**
 * Dark Glassmorphism 3D Background — Three.js composable.
 *
 * Theme tokens (theme.json):
 *   colors.background  → #050505
 *   colors.glowCool    → (160,185,210)
 *   colors.glowWarm    → (240,230,215)
 *   effects.blurBase   → roughness 0.35 (softer translucency)
 */
export function useBackground(canvasRef) {
  let afId = null;
  let renderer = null;
  let scene = null;
  let camera = null;
  let material = null;
  const meshes = [];
  const anim = [];
  let onResize = null;
  let onMouse = null;
  const mouse = { x: 0, y: 0 };

  const T = {
    bg:      0x050505,
    cool:    [160 / 255, 185 / 255, 210 / 255],
    warm:    [240 / 255, 230 / 255, 215 / 255],
    rough:   0.35,
    trans:   0.88,
    ior:     1.5,
  };

  const rand  = (a, b) => Math.random() * (b - a) + a;
  const pick  = (arr)  => arr[Math.floor(Math.random() * arr.length)];

  /** Visible half‑extents at depth |z| */
  function frustumAtZ(z, fovRad, aspect) {
    const h = Math.abs(z) * Math.tan(fovRad / 2);
    return { h, w: h * aspect };
  }

  /* geometry factories */
  function noisyIco(r, d) {
    const g = new THREE.IcosahedronGeometry(r, d);
    const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
      const n = Math.sin(x * 3.2 + y * 2.1) * Math.cos(z * 2.8) * 0.28
              + Math.sin(y * 3.8 + z * 1.9) * Math.cos(x * 3.5) * 0.2
              + Math.sin(x * 1.7 - z * 2.5) * 0.15;
      p.setXYZ(i, x * (1 + n), y * (1 + n), z * (1 + n));
    }
    g.computeVertexNormals();
    return g;
  }

  function init() {
    const canvas = canvasRef.value;
    if (!canvas) return;

    renderer = new THREE.WebGLRenderer({
      canvas, alpha: false, antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.sortObjects = true;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(T.bg);

    const aspect = window.innerWidth / window.innerHeight;
    camera = new THREE.PerspectiveCamera(60, aspect, 0.1, 60);
    camera.position.set(0, 0, 10);
    camera.lookAt(0, 0, 0);
    const baseCam = camera.position.clone();

    /* ── Lighting ── */
    const key = new THREE.DirectionalLight(new THREE.Color(...T.cool), 6);
    key.position.set(-4, 2.5, -3);
    scene.add(key);

    const fill = new THREE.DirectionalLight(new THREE.Color(...T.warm), 4);
    fill.position.set(5, -2, 3);
    scene.add(fill);

    const rim = new THREE.SpotLight(new THREE.Color(...T.cool), 12, 22, Math.PI / 5, 0.3, 1.5);
    rim.position.set(0, 2, -7);
    scene.add(rim);

    scene.add(new THREE.AmbientLight(0x111122, 0.35));

    /* ── Shared material — translucent frosted glass ── */
    material = new THREE.MeshPhysicalMaterial({
      color:                new THREE.Color(0xf2f5f9), // very light cool tint
      metalness:            0,
      roughness:            T.rough,
      transmission:         T.trans,
      ior:                  T.ior,
      clearcoat:            1,
      clearcoatRoughness:   0.08,
      specularIntensity:    0.9,
      specularColor:        new THREE.Color(0xffffff),
      sheen:                0.6,
      sheenRoughness:       0.3,
      sheenColor:           new THREE.Color(0xffffff),
      transparent:          true,
      opacity:              1,
      depthWrite:           false,
    });

    /* ── Frustum reference ── */
    const fovRad = THREE.MathUtils.degToRad(60);

    /* ================================================================
       50 OBJECTS — wide frustum, edge-to-edge, size contrast
       ================================================================ */
    const COUNT = 50;
    const Z_MIN = 1.2, Z_MAX = 8.5;
    const XL_RATIO = 0.2;
    const MARGIN = 0.05; // objects reach very close to screen edges

    for (let i = 0; i < COUNT; i++) {
      const type = pick(["torus", "ico", "sphere", "triprism"]);
      let geo;

      switch (type) {
        case "torus":
          geo = new THREE.TorusGeometry(rand(0.15, 0.5), rand(0.04, 0.12), 16, 48);
          break;
        case "ico":
          geo = noisyIco(rand(0.2, 0.4), 2);
          break;
        case "sphere":
          geo = new THREE.SphereGeometry(rand(0.15, 0.45), 32, 32);
          break;
        case "triprism":
          geo = new THREE.CylinderGeometry(rand(0.12, 0.35), rand(0.12, 0.35), rand(0.2, 0.8), 3);
          break;
      }

      const isXL = Math.random() < XL_RATIO;
      const scale = isXL ? rand(3, 4.5) : rand(0.4, 1.5);
      const z = rand(Z_MIN, Z_MAX);
      const fz = frustumAtZ(z, fovRad, aspect);

      const mesh = new THREE.Mesh(geo, material);
      mesh.position.set(
        rand(-fz.w + MARGIN, fz.w - MARGIN),
        rand(-fz.h + MARGIN, fz.h - MARGIN),
        -z,
      );
      mesh.scale.setScalar(scale);
      mesh.renderOrder = Math.round(z * 100);
      mesh.rotation.set(rand(0, Math.PI * 2), rand(0, Math.PI * 2), rand(0, Math.PI * 2));

      scene.add(mesh);
      meshes.push(mesh);
      anim.push({
        mesh,
        rotX: rand(0.001, 0.005) * pick([-1, 1]),
        rotY: rand(0.001, 0.005) * pick([-1, 1]),
        oscAmp:  rand(0.3, 1.4),
        oscFreq: rand(1 / 10, 1 / 4),
        oscPhase: rand(0, Math.PI * 2),
        baseY: mesh.position.y,
      });
    }

    /* ── Place a few guaranteed edge objects for screen coverage ── */
    const edgePositions = [
      { x: 0.92, y: 0.88, z: 2.5, s: 2.8 },  // top-right large
      { x: -0.92, y: -0.85, z: 3.0, s: 3.2 }, // bottom-left large
      { x: -0.88, y: 0.85, z: 1.8, s: 1.5 },  // top-left medium
      { x: 0.85, y: -0.88, z: 4.0, s: 3.5 },  // bottom-right large
      { x: 0.0, y: -0.92, z: 5.5, s: 4.0 },   // bottom-center very large
      { x: -0.90, y: 0.0, z: 3.5, s: 2.5 },   // left-center large
      { x: 0.90, y: 0.0, z: 2.0, s: 1.8 },    // right-center medium
      { x: 0.0, y: 0.92, z: 4.5, s: 3.0 },    // top-center large
    ];

    for (const ep of edgePositions) {
      const fz = frustumAtZ(ep.z, fovRad, aspect);
      const geo = new THREE.SphereGeometry(rand(0.25, 0.5), 32, 32);
      const mesh = new THREE.Mesh(geo, material);
      mesh.position.set(ep.x * fz.w, ep.y * fz.h, -ep.z);
      mesh.scale.setScalar(ep.s);
      mesh.renderOrder = Math.round(ep.z * 100);
      mesh.rotation.set(rand(0, Math.PI * 2), rand(0, Math.PI * 2), rand(0, Math.PI * 2));
      scene.add(mesh);
      meshes.push(mesh);
      anim.push({
        mesh,
        rotX: rand(0.001, 0.005) * pick([-1, 1]),
        rotY: rand(0.001, 0.005) * pick([-1, 1]),
        oscAmp:  rand(0.3, 1.2),
        oscFreq: rand(1 / 10, 1 / 4),
        oscPhase: rand(0, Math.PI * 2),
        baseY: mesh.position.y,
      });
    }

    /* ── Resize ── */
    onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    /* ── Mouse parallax ── */
    onMouse = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouse, { passive: true });

    /* ── Animation ── */
    const target  = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };

    const animate = () => {
      afId = requestAnimationFrame(animate);
      const t = performance.now() * 0.001;

      for (const a of anim) {
        a.mesh.rotation.x += a.rotX;
        a.mesh.rotation.y += a.rotY;
        const y = a.baseY + Math.sin(t * a.oscFreq + a.oscPhase) * a.oscAmp;
        a.mesh.position.y += (y - a.mesh.position.y) * 0.03;
      }

      target.x = mouse.x * 1.8;
      target.y = mouse.y * 1.8;
      current.x += (target.x - current.x) * 0.05;
      current.y += (target.y - current.y) * 0.05;

      camera.position.x = baseCam.x + current.x;
      camera.position.y = baseCam.y + current.y;
      camera.lookAt(current.x * 0.15, current.y * 0.15, 0);

      renderer.render(scene, camera);
    };
    afId = requestAnimationFrame(animate);
  }

  function dispose() {
    if (afId) cancelAnimationFrame(afId);
    if (onResize) window.removeEventListener("resize", onResize);
    if (onMouse) window.removeEventListener("mousemove", onMouse);
    for (const m of meshes) { m.geometry.dispose(); scene?.remove(m); }
    meshes.length = 0;
    anim.length = 0;
    material?.dispose();
    renderer?.dispose();
  }

  onMounted(init);
  onBeforeUnmount(dispose);
}
