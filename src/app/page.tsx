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
        <section id = "hero">
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


      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-white">
        {/* <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          what else →
        </a> */}
        <SocialIcons />
      </footer>
    </div>
  );
}
