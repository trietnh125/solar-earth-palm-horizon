import { useEffect, useRef, useState } from "react";

export function CityScene() {
  const host = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let stop = false;
    let dispose = () => {};

    (async () => {
      const THREE = await import("three");
      const { OrbitControls } = await import("three/examples/jsm/controls/OrbitControls.js");
      if (stop || !host.current) return;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(el.clientWidth, el.clientHeight);
      renderer.setClearColor(0x07131c, 1);
      el.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0x07131c, 18, 48);

      const camera = new THREE.PerspectiveCamera(42, el.clientWidth / el.clientHeight, 0.1, 80);
      camera.position.set(14, 11, 16);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.target.set(0, 1.2, 0);
      controls.maxPolarAngle = Math.PI * 0.48;
      controls.minDistance = 8;
      controls.maxDistance = 28;

      scene.add(new THREE.AmbientLight(0xc6a15b, 0.35));
      const sun = new THREE.DirectionalLight(0xffe2b0, 1.4);
      sun.position.set(8, 16, 6);
      scene.add(sun);
      const fill = new THREE.PointLight(0x6ec8ff, 8, 30);
      fill.position.set(-4, 6, -2);
      scene.add(fill);

      const rock = new THREE.Mesh(
        new THREE.CylinderGeometry(22, 26, 8, 48, 1, true),
        new THREE.MeshStandardMaterial({ color: 0x3a2418, roughness: 0.95, side: THREE.BackSide }),
      );
      rock.position.y = 2;
      scene.add(rock);

      const floor = new THREE.Mesh(
        new THREE.CircleGeometry(18, 48),
        new THREE.MeshStandardMaterial({ color: 0x1a242c, roughness: 0.8, metalness: 0.15 }),
      );
      floor.rotation.x = -Math.PI / 2;
      scene.add(floor);

      const gold = new THREE.MeshStandardMaterial({ color: 0xc6a15b, roughness: 0.35, metalness: 0.4 });
      const glass = new THREE.MeshStandardMaterial({
        color: 0x9fd0e8,
        roughness: 0.15,
        metalness: 0.6,
        emissive: 0x123044,
        emissiveIntensity: 0.6,
      });
      const stone = new THREE.MeshStandardMaterial({ color: 0x8d7358, roughness: 0.7 });

      const blocks: { x: number; z: number; h: number; w: number }[] = [];
      for (let i = 0; i < 42; i++) {
        const angle = (i / 42) * Math.PI * 2;
        const radius = 3.2 + (i % 5) * 1.15;
        blocks.push({
          x: Math.cos(angle) * radius,
          z: Math.sin(angle) * radius,
          h: 1.2 + ((i * 7) % 9) * 0.45,
          w: 0.55 + (i % 3) * 0.18,
        });
      }
      blocks.forEach((b, i) => {
        const mesh = new THREE.Mesh(new THREE.BoxGeometry(b.w, b.h, b.w), i % 4 === 0 ? gold : i % 3 === 0 ? stone : glass);
        mesh.position.set(b.x, b.h / 2, b.z);
        scene.add(mesh);
      });

      const tower = new THREE.Mesh(new THREE.BoxGeometry(1.4, 7.2, 1.4), glass);
      tower.position.set(0.4, 3.6, -0.2);
      scene.add(tower);
      const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.1, 0.35, 16), gold);
      crown.position.set(0.4, 7.3, -0.2);
      scene.add(crown);

      const tanks = new THREE.Group();
      [-1.1, 1.1].forEach((x) => {
        const tank = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 2.2, 20), gold);
        tank.rotation.z = Math.PI / 2;
        tank.position.set(x, 0, 0);
        tanks.add(tank);
      });
      tanks.position.set(-6.5, 5.6, -2);
      scene.add(tanks);

      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(2.2, 0.06, 12, 48),
        new THREE.MeshStandardMaterial({ color: 0xe6d3a4, emissive: 0xc6a15b, emissiveIntensity: 0.8 }),
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.08;
      scene.add(ring);

      const clock = new THREE.Clock();
      let frame = 0;
      const tick = () => {
        frame = requestAnimationFrame(tick);
        const t = clock.getElapsedTime();
        ring.rotation.z = t * 0.15;
        tanks.position.y = 5.6 + Math.sin(t * 0.8) * 0.05;
        controls.update();
        renderer.render(scene, camera);
      };
      tick();
      setReady(true);

      const onResize = () => {
        if (!host.current) return;
        const w = host.current.clientWidth;
        const h = host.current.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", onResize);

      dispose = () => {
        cancelAnimationFrame(frame);
        window.removeEventListener("resize", onResize);
        controls.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    })();

    return () => {
      stop = true;
      dispose();
    };
  }, []);

  async function downloadCity() {
    const THREE = await import("three");
    const { GLTFExporter } = await import("three/examples/jsm/exporters/GLTFExporter.js");
    const scene = new THREE.Scene();
    const mat = new THREE.MeshStandardMaterial({ color: 0xc6a15b });
    const base = new THREE.Mesh(new THREE.CylinderGeometry(8, 8, 0.4, 32), new THREE.MeshStandardMaterial({ color: 0x1a242c }));
    scene.add(base);
    for (let i = 0; i < 24; i++) {
      const h = 1 + (i % 6);
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.7, h, 0.7), mat);
      const a = (i / 24) * Math.PI * 2;
      mesh.position.set(Math.cos(a) * (2 + (i % 4)), h / 2 + 0.2, Math.sin(a) * (2 + (i % 4)));
      scene.add(mesh);
    }
    const exporter = new GLTFExporter();
    const result = await exporter.parseAsync(scene, { binary: true });
    const blob = new Blob([result as ArrayBuffer], { type: "model/gltf-binary" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "vincave-city.glb";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-deep">
      <div ref={host} className="h-[28rem] w-full" />
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 text-sm text-cream/80">
        <p>{ready ? "Drag to orbit the cavern city. Scroll to zoom." : "Building the model…"}</p>
        <button type="button" onClick={downloadCity} className="rounded-full bg-gold px-4 py-2 font-medium text-deep">
          Download vincave-city.glb
        </button>
      </div>
    </div>
  );
}
