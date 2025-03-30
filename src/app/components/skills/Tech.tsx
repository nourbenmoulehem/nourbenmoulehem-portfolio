"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { technologies } from "@/assets/index";

// Dynamically import BallCanvas with SSR disabled
const BallCanvas = dynamic(() => import("./Balls").then((mod) => mod.BallCanvas), {
  ssr: false,
});

export const Tech = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure this component only renders on the client
  }, []);

  if (!isClient) return null; // Prevent rendering on the server

  return (
    <div className="flex flex-row bg-amber-50 flex-wrap justify-center gap-10 h-screen w-screen">
      {technologies.map((technology) => (
        <div className="w-full h-full" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};