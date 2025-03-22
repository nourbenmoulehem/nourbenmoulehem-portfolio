"use client";

import React, { Suspense, useState, useEffect } from "react";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

interface RenderModelProps {
  children: React.ReactNode;
  className?: string;
}

function RenderModel({ children, className }: RenderModelProps) {
  const [enableRotate, setEnableRotate] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setEnableRotate(false);
      } else {
        setEnableRotate(true); 
         
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Canvas className={`relative ${className}`} style={{ display: "block" }}>
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset="sunset" />

      {enableRotate && <OrbitControls
        target={[0, 0, 0]} // Target orbit controls to the center
        minPolarAngle={Math.PI / 4} // Prevent looking too far down
        maxPolarAngle={Math.PI / 1.8} // Prevent looking too far uprotation
        enableZoom={false}
      /> }
    </Canvas>
  );
}

export default RenderModel;
