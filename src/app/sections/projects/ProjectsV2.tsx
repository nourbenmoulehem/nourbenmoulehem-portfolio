import React from "react";
import Section from "../../components/projects/Section";
import ParallaxStack from "../../components/projects/ParallaxStack";
import { motion } from "motion/react";
import projectImage from "@/assets/images/projects/1.png";
import projectImage2 from "@/assets/images/projects/2.png";
import projectImage3 from "@/assets/images/projects/3.png";

import { StaticImageData } from "next/image"; 

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

// Array of projects
const projects: Project[] = [
  {
    id: 1,
    title: "WeBank Monitoring Application",
    description:
      "An interactive dashboards to track user engagement metrics, providing valuable insights into user behavior. I implemented JWT-based authorization to ensure secure access to user data and enhance application security. Additionally, I designed a role-based access control system, tailoring user experiences based on their roles. To improve communication within the platform, I integrated a real-time chat system. The project was built using the MERN stack (MongoDB, ExpressJS, ReactJS, Node.js), leveraging modern web technologies for scalability and efficiency.",
    image: projectImage,
    color: "bg-card",
    techUsed: ["React js", "Node js", "Mongodb", "Mongoose", "Express js", "Material UI"],
    demoLink: "",
    codeLink: "https://github.com/nourbenmoulehem/monitoring-app.git",
    isMobile: false,
  },
  {
    id: 2,
    title: "Inclusa - E-learning Platform",
    description:
      "Web and desktop e-learning application. The main role of this app is to deliver an inclusive learning experience for people with hearing impairments, so they can learn and communicate with their peers. The app features a chat system, a video conferencing system, and a real-time Sign-Language detection. The app is built using JavaFX for the desktop version and Symfony for the web version.",
    image: projectImage2,
    color: "bg-card",
    techUsed: ["JavaFx", "Symfony", "MySQL", "ML"],
    demoLink: "",
    codeLink: "https://github.com/nourbenmoulehem/JAVA-PIDEV-3A22-CODALLICA",
    isMobile: false,
  },
  {
    id: 3,
    title: "WeBank - Accessible mobile banking",
    description:
      "Engineered an accessible mobile application adhering to WCAG guidelines, leading to a 20% increase in user accessibility scores during testing. The project involved developing the app with React Native, Spring Boot, and PostgreSQL, integrating a BERT-based intent recognition model to create a virtual assistant for users with disabilities. Additionally, I built an administration interface using React and Spring Boot to streamline client request management. Collaborating with the Ibsar Association, I gained valuable insights into accessibility and conducted usability tests with a visually impaired user. To enhance performance and scalability, I implemented Redux for state management. Throughout the project, I followed the Scrum methodology and utilized Notion for task management, ensuring an efficient workflow. This project served as my end-of-studies internship, focusing on inclusive and user-friendly banking solutions.",
    image: projectImage3,
    color: "bg-card",
    techUsed: ["React Native", "Spring Boot", "PostgreSQL", "BERT", "Redux"],
    demoLink: "",
    codeLink: "https://github.com/nourbenmoulehem/AssistiveBanking-RN",
    isMobile: true,
  },
  
];

const ProjectSection: React.FC = () => {
  return (
    <div className="relative">
      {/* Main Section */}
      <Section className={"py-10 relative"}>
        <div className="flex flex-col justify-center text-center py-10 w-2/3 mx-auto max-mobile-lg:w-full z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent"





          >
            Projects
          </motion.h1>
        </div>

        {/* Parallax Stack */}
        <div>
          <ParallaxStack projects={projects} />
        </div>

        
      </Section>
    </div>
  );
};

export default ProjectSection;
