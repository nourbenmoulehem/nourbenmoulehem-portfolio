"use client";

import Image from "next/image";
import Navbar from "./components/navbar";

import Hero from "./sections/hero";
import About from "./sections/about/About";
import Projects from "./sections/projects/Projects";
import AboutV2 from "./sections/about/AboutV2";
import ContactForm from "./sections/contact/Contact";
import ProjectSection from "./sections/projects/ProjectsV2";
import { Section } from "lucide-react";
import {Tech} from "@/components/skills/Tech";

import SocialIcons from "@/components/SocialIcons"; 

export default function Home() {
  return (
    <div >
      

      <main className="text-white relative">
        {/* Hero Section */}
        <section id = "hero" className="scroll-mt-20">
          <Hero />
        </section>

        {/* Section 2 - About Me */}
        <section id = "about">
          <About />
          {/* <AboutV2 /> */}
        </section>

        {/* Section 3 - Projects */}
        <section id="projects" >
          {/* <Projects /> */}
          <ProjectSection />
        </section>

        {/* <Section  id="skills">
          <Tech />
          </Section> */}

        {/* Section 4 - Contact */}
        <section id="contacts" className="contacts">
          <ContactForm />
        </section>
      </main>


      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center p-4 text-white">
        
        <SocialIcons />
      </footer>
    </div>
  );
}
