"use client";

import Image from "next/image";
import * as motion from "motion/react-client";
import { useTransform, useScroll, MotionValue } from "motion/react";
import { useRef } from "react";
import { Code } from "lucide-react";
import { Badge } from "@/components/Badge";
import { StaticImageData } from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  color: string;
  techUsed: string[];
  demoLink: string;
  codeLink: string;
  isMobile?: boolean;
}

interface ParallaxStackProps {
  projects: Project[];
}

export default function ParallaxStack({ projects }: ParallaxStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={containerRef} className="px-4 md:px-8 lg:px-16">
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.035;
        return (
          <Card
            key={project.id}
            index={i}
            project={project}
            progress={scrollYProgress}
            range={[i * (1 / projects.length), 1]}
            targetScale={targetScale}
            total={projects.length}
          />
        );
      })}
    </main>
  );
}

interface CardProps {
  project: Project;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  index: number;
  total: number;
}

const Card: React.FC<CardProps> = ({
  project,
  progress,
  range,
  targetScale,
  index,
  total,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const translateY = useTransform(progress, [0, 1], [index * 40, 10]);
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      ref={cardRef}
      className="sticky w-full top-20 h-screen flex items-start pt-4"
      style={{ translateY }}
    >
      <motion.div
        className="w-full rounded-2xl overflow-hidden relative origin-top flex flex-col sm:flex-row"
        style={{
          scale,
          minHeight: "64vh",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(24px) saturate(160%)",
          WebkitBackdropFilter: "blur(24px) saturate(160%)",
          border: "1px solid rgba(255,255,255,0.11)",
          boxShadow:
            "0 24px 64px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.09)",
        }}
      >
        {/* Top gradient accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] z-10 rounded-t-2xl"
          style={{
            background: "linear-gradient(90deg, var(--primary), var(--secondary))",
            opacity: 1 - index * 0.15,
          }}
        />

        {/* ── Left: Image — fills full height ── */}
        <div
          className="sm:basis-[55%] relative overflow-hidden flex items-center justify-center flex-shrink-0"
          style={{
            minHeight: project.isMobile ? "26rem" : "14rem",
            background: "rgba(0,0,0,0.22)",
          }}
        >
          {project.isMobile ? (
            /* Phone mockup — sized to be comfortably visible */
            <div
              className="relative z-10 rounded-[26px] overflow-hidden"
              style={{
                width: 220,
                height: 420,
                border: "2px solid rgba(255,255,255,0.18)",
                boxShadow:
                  "0 16px 48px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.05)",
              }}
            >
              <Image
                src={project.image}
                fill
                alt={project.title}
                className="object-cover object-top"
              />
            </div>
          ) : (
            /* Desktop screenshot — full image, no cropping */
            <Image
              src={project.image}
              fill
              alt={project.title}
              className="object-contain"
            />
          )}

          {/* Watermark number */}
          <span
            className="absolute top-3 left-4 text-7xl font-black select-none pointer-events-none z-10"
            style={{ color: "var(--primary)", opacity: 0.09, lineHeight: 1 }}
          >
            {num}
          </span>

          {/* Right edge fade — softens the transition to content */}
          <div
            className="absolute top-0 right-0 bottom-0 w-12 hidden sm:block"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(0,0,0,0.18))",
            }}
          />
        </div>

        {/* ── Right: Content ── */}
        <div
          className="sm:basis-[45%] flex flex-col p-6 gap-4 justify-between"
          style={{ borderLeft: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="flex flex-col gap-3">
            {/* Counter + Title */}
            <div>
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{
                  background:
                    "linear-gradient(90deg, var(--primary), var(--secondary))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {num} / {String(total).padStart(2, "0")}
              </span>
              <h2
                className="text-xl sm:text-2xl font-semibold mt-1 leading-tight"
                style={{ color: "var(--text)" }}
              >
                {project.title}
              </h2>
            </div>

            {/* Description */}
            <p
              className="text-sm leading-relaxed line-clamp-6"
              style={{ color: "var(--text)", opacity: 0.72 }}
            >
              {project.description}
            </p>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.12), transparent)",
              }}
            />

            {/* Tech badges */}
            <div className="flex flex-wrap gap-1.5">
              {project.techUsed.map((tech) => (
                <Badge
                  key={tech}
                  className="rounded-md text-xs px-2 py-0.5 text-nowrap"
                  style={{
                    color: "var(--text)",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Code button */}
          {project.codeLink && (
            <div className="mt-auto pt-2">
              <Link href={project.codeLink} target="_blank">
                <button
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "var(--text)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,255,255,0.14)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,255,255,0.07)";
                  }}
                >
                  <Code size={14} />
                  View Code
                </button>
              </Link>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};
