"use client";

import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/three";
import { Html } from "@react-three/drei";
import Paimon from "@/app/components/3d-models/Paimon";
import RenderModel from "@/app/components/RenderModel";

// Define timeline events (positions in 3D space)
const TIMELINE_POINTS = [
  { position: [-3, 0, 0], label: "Got my high school degree 🎓" },
  { position: [-1.5, 0, 0], label: "Started learning CS 💻" },
  { position: [0, 0, 0], label: "First internship 🚀" },
  { position: [1.5, 0, 0], label: "Graduation internship 🎯" },
  { position: [3, 0, 0], label: "Engineering at ESPRIT 🏫" },
];

export default function Timeline() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Animate Paimon's position correctly
  const { posX, posY, posZ } = useSpring({
    posX: TIMELINE_POINTS[currentIndex].position[0],
    posY: TIMELINE_POINTS[currentIndex].position[1],
    posZ: TIMELINE_POINTS[currentIndex].position[2],
    config: { tension: 100, friction: 20 },
  });

  return (
    <RenderModel>
      {/* Animated Paimon */}
      <animated.group position={[posX.to((x) => x), posY.to((y) => y), posZ.to((z) => z)]}>
        <Paimon />
      </animated.group>

      {/* Render Timeline Points */}
      {TIMELINE_POINTS.map((point, index) => (
        <Html key={index} position={[point.position[0], point.position[1] + 0.5, point.position[2]]}>
          <div className="info-box">{point.label}</div>
        </Html>
      ))}

      {/* Navigation Buttons */}
      <Html position={[0, -1, 0]}>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
            disabled={currentIndex === 0}
          >
            ⬅ Previous
          </button>
          <button
            onClick={() => setCurrentIndex((i) => Math.min(i + 1, TIMELINE_POINTS.length - 1))}
            disabled={currentIndex === TIMELINE_POINTS.length - 1}
          >
            Next ➡
          </button>
        </div>
      </Html>
    </RenderModel>
  );
}
