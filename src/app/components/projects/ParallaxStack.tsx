"use client";

import Image from "next/image";
import * as motion from "motion/react-client";
import { useTransform, useScroll, MotionValue } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/Button";
import { SquareArrowOutUpRight, Code } from "lucide-react";
import { Badge } from "@/components/Badge";
import Link from "next/link";
import { StaticImageData } from "next/image"; // Correct type for static images

interface Project {
  id: number;
  title: string;
  description: string;
  image: StaticImageData; // Use StaticImageData for imported images
  color: string;
  techUsed: string[];
  demoLink: string;
  codeLink: string;
  isMobile?: boolean;
}

// Define the props for the ParallaxStack component
interface ParallaxStackProps {
  projects: Project[]; // Array of projects
}

export default function ParallaxStack({ projects }: ParallaxStackProps) {
  const containerRef = useRef<HTMLDivElement>(null); // Typed as HTMLDivElement

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={containerRef} className="px-4 md:px-8 lg:px-16"> {/* Added padding for better responsiveness */}
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.03; // Smooth scaling effect
        return (
          <Card
            key={project.id}
            index={i}
            project={project}
            progress={scrollYProgress}
            range={[i * 0.15, 1]} // Adjusted range for smooth transition
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}

// Define the props for the Card component
interface CardProps {
  project: Project; // Project data
  progress: MotionValue<number>; // Corrected type for progress
  range: [number, number]; // Range for the animation
  targetScale: number; // Target scale for the card
  index: number; // Index of the card
}

const Card: React.FC<CardProps> = ({
  project,
  progress,
  range,
  targetScale,
  index,
}) => {
  const cardRef = useRef<HTMLDivElement>(null); // Typed as HTMLDivElement

  // Slight initial up-scale for effect (applied to the card, not the image)
  const scale = useTransform(progress, range, [1, targetScale]);

  // Moves cards up smoothly
  const translateY = useTransform(progress, [0, 1.5], [index * 50, 15]);

  return (
    <motion.div
      ref={cardRef}
      className="sticky w-full top-20 h-screen"
      style={{ translateY }}
    >
      <motion.div
        className="w-full min-h-[60vh] sm:min-h-[50vh] rounded-2xl overflow-hidden relative shadow-lg hover:shadow-[0px_5px_20px] hover:shadow-muted border border-border origin-top z-10"
        style={{ scale, backgroundColor: "var(--background)" }}
      >
        <div className="flex flex-col sm:flex-row justify-around w-full relative z-20 gap-4 p-4">
          {/* Image Section */}
          <div className="sm:basis-4/6 rounded-3xl overflow-hidden flex items-center justify-center">
            {project.isMobile ? (
              <div className="phoneFrame">
                <Image src={project.image} alt={project.title} width={250} height={450} />
              </div>
            ) : (
              <div className="w-full h-full overflow-hidden rounded-xl border border-border">
                <Image
                  src={project.image}
                  width={1400}
                  height={1000}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="sm:basis-2/6 flex flex-col gap-3 justify-between">
            <div>
              <h2 className="text-lg sm:text-2xl" style={{ color: "var(--text)" }}>{project.title}</h2>
              <p className="text-sm sm:text-md max-h-[20vh] overflow-y-auto text-ellipsis" style={{ color: "var(--text)" }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techUsed.map((tech) => (
                  <Badge className="rounded-sm text-sm shadow-lg text-nowrap" style={{ color: "var(--text)" }} key={tech}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Buttons Section */}
            <div className="flex gap-2 items-end justify-between">
              <div className="flex gap-2">
                <Button style={{ color: "var(--text)" }}>
                  Code
                  <Code className="translate-y-[-2.5px]" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
