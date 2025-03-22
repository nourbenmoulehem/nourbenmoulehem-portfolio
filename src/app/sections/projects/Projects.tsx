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

import  Card  from "@/app/components/projects/Card";

import  ParallaxStack  from "@/app/components/projects/CardV2";

interface Project {
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
  isMobile?: boolean;
}

function Projects() {
  return (
    <div>
      {projects.map((project, index) => {
        return <Card key = {index} {...project} />; {/* deconstruct the project */}
      })}

      {/* <ParallaxStack projects={projects as Project[]} /> */}
    </div>
  );
}

export default Projects;
