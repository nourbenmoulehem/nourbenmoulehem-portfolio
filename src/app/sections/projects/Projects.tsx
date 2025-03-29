"use client";

import {
  motion,
  type MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";

import { projects } from "./data";

import React from "react";
import { div } from "motion/react-client";

import  Card  from "@/components/projects/CardV2";

import  ParallaxStack  from "@/components/projects/ParallaxStack";

interface Project {
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
  isMobile?: boolean;
}

function Projects() {

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });


  return (
    <div ref={container}>
      <div className = "flex justify-center items-center">
        {/* <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white"
        >
          Projects
        </motion.h1> */}
      </div>
      {/* {projects.map((project, index) => {
        const targetScale = 1 - ((projects.length - index) * 0.1);
        return <Card key = {index} index={index} {...project} progress={scrollYProgress} range={[index * 0.25, 1]} targetScale={targetScale}/>; deconstruct the project
      })} */}

      {/* <ParallaxStack projects={projects as Project[]} /> */}
    </div>
  );
}

export default Projects;
