"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three-stdlib";

export const ThreeDModel: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [model, setModel] = useState<THREE.Object3D | null>(null);
  let rotationActive = false;

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    mountRef.current.appendChild(renderer.domElement);

    // Handle resizing
    const updateSize = () => {
      if (mountRef.current) {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    // Lighting
    const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
    scene.add(light);

    // OrbitControls (Limited Rotation)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.enableZoom = false; // Disable zoom
    controls.minPolarAngle = Math.PI / 2.5; // Limit up/down rotation
    controls.maxPolarAngle = Math.PI / 1.5;

    // Fix Camera Position (Lower it)
    camera.position.set(0, 0.8, 2); // Move camera lower to center model

    // Load GLTF Model
    const loader = new GLTFLoader();
    loader.load(
      "/paimon_idle_animation.glb",
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(0.3, 0.3, 0.3);
        model.position.set(0, -90, 0); // Move model lower to be visible
        scene.add(model);
        const axesHelper = new THREE.AxesHelper(5);
        scene.add(axesHelper);
        setModel(model);

        console.log('Paimon Position:', model.position);
      },
      undefined,
      (error) => console.error("Error loading model:", error)
    );

    // Animation loop
    let clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      if (model) {
        // Floating effect
        model.position.y = -0.5 + Math.sin(clock.getElapsedTime() * 2) * 0.05;

        // Rotate slightly when activated
        if (rotationActive) {
          model.rotation.y += 0.02;
        }
      }
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle click rotation
    const handleClick = () => {
      rotationActive = true;
      setTimeout(() => (rotationActive = false), 1000); // Stop after 1 second
    };
    mountRef.current.addEventListener("click", handleClick);

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateSize);
      mountRef.current?.removeEventListener("click", handleClick);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      controls.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "500px" }} />;
};
