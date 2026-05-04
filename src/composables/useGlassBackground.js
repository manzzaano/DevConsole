import { onMounted, onUnmounted } from 'vue';
import p5 from 'p5';

export function useGlassBackground() {
  let sketch = null;
  let objects = [];

  onMounted(() => {
    const s = (p) => {
      const colors = [
        { r: 120, g: 200, b: 255, a: 255 },
        { r: 160, g: 220, b: 255, a: 255 },
        { r: 180, g: 235, b: 255, a: 255 },
        { r: 200, g: 245, b: 255, a: 255 },
        { r: 140, g: 210, b: 255, a: 255 },
        { r: 170, g: 230, b: 255, a: 255 },
        { r: 100, g: 190, b: 255, a: 255 },
        { r: 150, g: 215, b: 255, a: 255 }
      ];

      p.setup = function() {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
        canvas.style('position', 'fixed');
        canvas.style('top', '0');
        canvas.style('left', '0');
        canvas.style('z-index', '-10');
        canvas.style('pointer-events', 'none');

        p.setAttributes('antialias', true);

        objects = [];
        for (let i = 0; i < 50; i++) {
          const isLarge = Math.random() < 0.25;
          const size = isLarge ? Math.random() * 3 + 2 : Math.random() * 1 + 0.3;
          const type = Math.floor(Math.random() * 4);
          const colorObj = colors[Math.floor(Math.random() * colors.length)];

          objects.push({
            x: (Math.random() - 0.5) * 1200,
            y: (Math.random() - 0.5) * 800,
            z: (Math.random() - 0.5) * 500 - 150,
            size: size,
            type: type,
            rotX: Math.random() * 0.05,
            rotY: Math.random() * 0.05,
            rotZ: Math.random() * 0.05,
            r: colorObj.r,
            g: colorObj.g,
            b: colorObj.b,
            a: colorObj.a,
            amp: Math.random() * 2 + 1,
            freq: Math.random() * 0.002 + 0.0005,
            phase: Math.random() * p.TWO_PI,
            baseY: (Math.random() - 0.5) * 400
          });
        }
      };

      p.draw = function() {
        p.background(5, 10, 25);

        p.ambientLight(120, 140, 180);
        p.directionalLight(100, 120, 180, -1, 0.5, -1);
        p.directionalLight(150, 170, 220, 1, -0.3, 0);

        // Camera - wider view
        const mouseX = (p.mouseX / p.width - 0.5) * 150;
        const mouseY = -(p.mouseY / p.height - 0.5) * 150;
        p.camera(mouseX, mouseY, 800, 0, 0, 0, 0, 1, 0);

        const time = p.frameCount * 0.01;

        objects.forEach((obj) => {
          p.push();

          p.translate(obj.x, obj.baseY + Math.sin(time * obj.freq + obj.phase) * obj.amp, obj.z);
          p.rotateX(p.frameCount * obj.rotX * 0.01);
          p.rotateY(p.frameCount * obj.rotY * 0.01);
          p.rotateZ(p.frameCount * obj.rotZ * 0.01);

          p.noStroke();
          p.fill(obj.r, obj.g, obj.b, obj.a);

          switch(obj.type) {
            case 0:
              p.sphere(obj.size * 20);
              break;
            case 1:
              p.box(obj.size * 20);
              break;
            case 2:
              p.cylinder(obj.size * 15, obj.size * 25, 8);
              break;
            case 3:
              p.torus(obj.size * 15, obj.size * 8);
              break;
          }

          p.pop();
        });
      };

      p.windowResized = function() {
        if (p.windowWidth > 0 && p.windowHeight > 0) {
          p.resizeCanvas(p.windowWidth, p.windowHeight);
        }
      };
    };

    sketch = new p5(s);

    onUnmounted(() => {
      sketch.remove();
    });
  });
}
