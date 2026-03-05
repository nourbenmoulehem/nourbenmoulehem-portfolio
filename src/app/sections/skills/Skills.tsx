"use client";

import React from "react";
import Section from "../../components/projects/Section";
import { motion } from "motion/react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiAngular, SiTailwindcss, SiHtml5,
  SiSpringboot, SiNodedotjs, SiExpress, SiSymfony, SiPhp,
  SiRedux,
  SiPostgresql, SiMongodb, SiMysql,
  SiApachecloudstack, SiKubernetes, SiDocker, SiAnsible, SiGitlab, SiLinux,
  SiPrometheus, SiGrafana,
  SiGit, SiNotion, SiThreedotjs, SiWebgl,
} from "react-icons/si";
import { FaServer, FaNetworkWired, FaBrain, FaFire } from "react-icons/fa";
import { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType;
  color?: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML / CSS", icon: SiHtml5, color: "#E34F26" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "Symfony", icon: SiSymfony, color: "#ffffff" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "REST APIs", icon: FaServer, color: "#a78bfa" },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "OpenStack", icon: SiApachecloudstack, color: "#ED1944" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Ansible", icon: SiAnsible, color: "#EE0000" },
      { name: "Heat / IaC", icon: FaFire, color: "#FF6B35" },
      { name: "GitLab CI/CD", icon: SiGitlab, color: "#FC6D26" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
    ],
  },
  {
    title: "Monitoring",
    skills: [
      { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
      { name: "Grafana", icon: SiGrafana, color: "#F46800" },
      { name: "Calico / CNI", icon: FaNetworkWired, color: "#a78bfa" },
    ],
  },
  {
    title: "ML Integration",
    skills: [
      { name: "BERT / NLP", icon: FaBrain, color: "#f472b6" },
      { name: "Sign Language AI", icon: FaBrain, color: "#818cf8" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Notion", icon: SiNotion, color: "#ffffff" },
      { name: "Three.js", icon: SiThreedotjs, color: "#ffffff" },
      { name: "WebGL", icon: SiWebgl, color: "#990000" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

const skillContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

const Skills: React.FC = () => {
  return (
    <Section className="py-10 relative">
      <div className="flex flex-col items-center text-center py-10 w-2/3 mx-auto max-mobile-lg:w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent"
        >
          Skills
        </motion.h1>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 md:px-8 lg:px-16"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="rounded-2xl p-5 flex flex-col gap-4"
            style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(255,255,255,0.09)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
            }}
          >
            {/* Category title */}
            <h3 className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
              {category.title}
            </h3>

            {/* Skills grid */}
            <motion.div
              variants={skillContainerVariants}
              className="flex flex-wrap gap-2"
            >
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <skill.icon
                    size={15}
                    style={{ color: skill.color ?? "var(--text)", flexShrink: 0 }}
                  />
                  <span
                    className="text-xs font-medium whitespace-nowrap"
                    style={{ color: "var(--text)" }}
                  >
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Skills;
