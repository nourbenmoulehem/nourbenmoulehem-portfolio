import { motion } from "framer-motion";

import { FaCloud, FaSearch } from 'react-icons/fa';
import { Typewriter } from "react-simple-typewriter";
import RenderModel from "../components/RenderModel";
import Setup from "../components/3d-models/Setup";

const Hero: React.FC = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center text-center p-4 md:text-left h-screen w-screen">
      {/* Left Panel (Text) */}
      
      <div className=" w-full md:w-1/2 flex flex-col items-center justify-center md:items-start p-4">

      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.5,
    ease: "easeOut",
  }}
>
        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold bg-clip-text">
          Hi, I'm <span className="name">Nour</span>{" "}
          <span className="inline-block waving-hand">👋</span>
        </h1>

        <p className="text-[clamp(1rem,2.5vw,1.5rem)] leading-relaxed">
          Software engineering student, and{" "}
          <span className="text-primary font-bold">I'm a</span>{" "}
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

        <p className="text-base md:text-lg text-gray-300 max-w-lg mt-4">
          Let me guide you through my journey—where I started, where I am
         today, and where I'm headed. Feel free to reach out!
        </p>
        </motion.div>
      </div>
      

      {/* Right Panel (3D Model) */}
      <div className=" w-full md:w-2/3 h-1/2 md:h-full flex items-center justify-center p-4 overflow-visible">
        <RenderModel className="w-full h-full overflow-visible">
          <Setup />
        </RenderModel>
      </div>
    </div>
  );
};

export default Hero;