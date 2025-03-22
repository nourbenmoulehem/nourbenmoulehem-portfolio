'use client';

import Image from "next/image";
import Navbar from "./components/navbar";
import ParallaxSection from "./ParallaxSection";


import Hero from "./sections/hero";
import About from "./sections/about/About";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">

        <Navbar />


      <main className="text-white" >
            {/* Hero Section */}
              <section className="section-layout  ">
                
                <Hero />
                  
              </section>


            {/* Parallax Section 1 - Background Image */}
            {/* <ParallaxSection speed={-150}>
                
            </ParallaxSection> */}

            {/* Section 2 - About Me */}
            <section className="h-screen flex items-start justify-center text-4xl">
            <About />
            </section>

            {/* Parallax Section 2 - Floating Text */}
            <ParallaxSection speed={-100} className="text-6xl font-bold">
                <span>Scroll Magic ✨</span>
            </ParallaxSection>

            {/* Section 3 - Projects */}
            <section className="h-screen flex items-center justify-center text-4xl">
                My Projects
            </section>

            {/* Parallax Section 3 - Background */}
            <ParallaxSection speed={-120}>
                <img src="/parallax2.jpg" alt="Parallax 2" className="w-full h-full object-cover opacity-60" />
            </ParallaxSection>

            {/* Section 4 - Contact */}
            <section className="h-screen flex items-center justify-center text-4xl">
                Contact Me
            </section>
        </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-white">
        <a
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
        </a>
      </footer>
    </div>
  );
}
