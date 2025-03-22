import RenderModel from "@/app/components/RenderModel";
import { motion } from "framer-motion";
import Paimon from "@/app/components/3d-models/Paimon";

type EducationEntry = {
  school: string;
  degree: string;
  years: string;
};

type InternshipEntry = {
  company: string;
  position: string;
  duration: string;
};

const educationData: EducationEntry[] = [
  { school: "ISTIC", degree: "Bachelor’s in CS", years: "2020 - 2023" },
  { school: "ESPRIT", degree: "Software Engineering", years: "2023 - Present" },
];

const internshipData: InternshipEntry[] = [
  {
    company: "Attijari Bank",
    position: "MERN developer",
    duration: "2 months",
  },
  {
    company: "Attijari Bank",
    position: "Mobile developer",
    duration: "4 months",
  },
];

const About: React.FC = () => (
  <div className="flex flex-col h-full w-full m-9">
    <section className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
  {/* About Me Section - Larger */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="bg-primary/5 border border-border rounded-xl p-8 md:p-10 lg:p-12 w-full md:w-3/5 text-center shadow-lg"
  >
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true }}
      className="text-4xl font-bold text-white mb-6"
    >
      About Me
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      viewport={{ once: true }}
      className="text-lg text-gray-300 leading-relaxed"
    >
      A software engineering student at ESPRIT with a bachelor's degree from
      ISTIC. My journey into technology started with curiosity and has
      evolved into a deep love for software development, cloud computing,
      and DevOps. I specialize in full-stack development, working with
      TypeScript, Next.js, Spring Boot, and cloud technologies to craft
      scalable applications.
      <br />
      <br />
      My passion lies in Cloud & DevOps, Open Source contributions, and
      Building Scalable Apps. I'm on a mission to bridge development and
      cloud by mastering AWS, containerization, and automation, with
      the ultimate goal of becoming a cloud-focused software engineer.
      If you're into tech, open source, or DevOps, feel free to reach out!
    </motion.p>
  </motion.div>

  {/* Render Model - Smaller */}
  <div className="w-full md:w-2/5 h-full hidden md:flex justify-center items-center">
    <RenderModel className="w-full h-full">
      <Paimon />
    </RenderModel>
  </div>
</section>

    <section className="flex flex-row gap-6 justify-evenly items-center w-full">
      <section className="py-12 w-full flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-6">Education</h2>
        <div className="flex flex-col items-center  w-full relative">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
              className="bg-gray-900 p-4 w-full rounded-lg  shadow-lg mb-6"
            >
              <h3 className="text-xl font-semibold">{edu.school}</h3>
              <p className="text-sm text-gray-400">{edu.degree}</p>
              <p className="text-xs text-gray-500">{edu.years}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-12 w-full flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-6">Internships</h2>

        <div className="flex flex-col items-center w-full relative">
          {internshipData.map((int, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
              className="bg-gray-900 p-4 w-full rounded-lg shadow-lg mb-6"
            >
              <h3 className="text-xl font-semibold">{int.company}</h3>
              <p className="text-sm text-gray-400">{int.position}</p>
              <p className="text-xs text-gray-500">{int.duration}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  </div>
);

export default About;
