import { motion } from "framer-motion";
import React, { useEffect, useRef, useCallback } from "react";
import { Typewriter } from "react-simple-typewriter";


import { useTheme } from "next-themes";

// Import Vanta effect dynamically
import NET from "vanta/dist/vanta.globe.min.js";

const Hero: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null); // Use a ref for the Vanta container

  const { theme } = useTheme();


  const handleScroll = useCallback(
    (e: React.MouseEvent<HTMLElement>, id: string) => {
      e.preventDefault();
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  useEffect(() => {
    let vantaEffect: any;

    // Make sure the ref is not null
    if (vantaRef.current) {
      try {
        vantaEffect = NET({
          el: vantaRef.current, // Attach Vanta to the ref
          // mouseControls: true,
          // touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x804e96, // Color of the globe
          color2: 0x4e60bc, // Color of the lines
          backgroundColor: theme === "dark" ? 0x050022 : 0xe1dbff,
        });
      } catch (error) {
        console.error("Vanta initialization error:", error);
      }
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [theme]); // Run the effect whenever `theme` changes

  return (
    <div
      className="relative flex flex-col md:flex-row items-center text-center p-4 md:text-left h-screen w-screen"
      ref={vantaRef}
    >
      <div>
        <div id="homepage-background"></div>
      </div>

      {/* Left Panel (Text) */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center md:items-start p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <h1
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold bg-clip-text "
            style={{ color: "var(--text)" }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Nour
            </span>{" "}
            <span className="inline-block waving-hand">👋</span>
          </h1>

          <p
            className="text-[clamp(1rem,2.5vw,1.5rem)] leading-relaxed"
            style={{ color: "var(--text)" }}
          >
            Software engineering student, and{" "}
            <span className=" font-bold">I'm a</span>{" "}
            <span className="font-semibold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              <Typewriter
                words={[
                  "Full-Stack Developer.",
                  "DevOps & Cloud Enthusiast ☁️!",
                  "Problem Solver & Tech Explorer.",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={60}
                delaySpeed={1000}
              />
            </span>
          </p>

          <p
            className="text-base md:text-lg text-gray-300 max-w-lg mt-4"
            style={{ color: "var(--text)" }}
          >
            Let me guide you through my journey—where I started, where I am
            today, and where I'm headed. Feel free to reach out!
          </p>
          <motion.div className="flex flex-wrap sm:flex-nowrap gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 text-white bg-purple-950 rounded-2xl shadow-lg transition-all"
              onClick={(e) => handleScroll(e, "contact")} 
              
            >

              Get in Touch

              
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-transparent border-2 border-purple-950 text-purple-950 dark:text-white rounded-2xl shadow-lg transition-all"

              style={{ color: "var(--text)" }}
            >
              Get My Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Panel (3D Model) */}
      <div className="w-full md:w-2/3 h-1/2 md:h-full flex items-center justify-center p-4 overflow-visible">
        {/* <RenderModel className="w-full h-full overflow-visible">
          <Setup />
        </RenderModel> */}
      </div>
    </div>
  );
};

export default Hero;
