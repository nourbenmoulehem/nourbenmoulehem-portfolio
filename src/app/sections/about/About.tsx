// import RenderModel from "@/app/components/RenderModel";
import { motion } from "framer-motion";
// import Paimon from "@/app/components/3d-models/Paimon";

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
  { school: "ISTIC", degree: "Bachelor’s degree in CS", years: "2022 - 2024" },
  { school: "ESPRIT", degree: "Software Engineering", years: "2024 - Present" },
];

const internshipData: InternshipEntry[] = [
  {
    company: "Attijari Bank",
    position: "MERN developer, summer internship",
    duration: "June 2023 - August 2023",
  },
  {
    company: "Attijari Bank",
    position: "Mobile developer, end-of-studies internship",
    duration: "February 2024 - May 2024",
  },
];

const About: React.FC = () => (
  <div className="relative p-5 flex flex-col h-full w-full items-center">
    {/* About Me Section - Larger */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="  rounded-xl border-2 border-white  p-8 w-full text-center shadow-lg  bg-glassmorphism backdrop-blur-md "
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-6 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent"
      >
        About me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
        className="text-lg  leading-relaxed"
        style={{ color: "var(--text)" }}
      >
        I’ve always been baffled by the invisible systems that power our
        world—how lines of code can solve real-world problems and bring ideas to
        life. This fascination led me to software engineering, and my journey
        officially began after graduating high school when I enrolled at ISTIC.
        During my first year at university, I dived into the world of data
        structures through CS50. The course helped me grasp core computer
        science principles that became the building blocks of everything I would
        learn after. I then jumped into web development and got my first real
        taste of documentation and project workflows through The Odin Project.
        These experiences were like puzzle pieces, slowly coming together to
        form the bigger picture of software engineering. But it wasn’t just
        about theory—I wanted to see how everything fit into the real world.
        That’s when my internships at Attijari Bank became a game-changer. I was
        able to work alongside like minded engineers and contribute to
        developing web and mobile applications. It wasn’t just about writing
        code; it was about creating solutions with real-world impact, all while
        adhering to SCRUM methodology and best practices. Then came my
        end-of-studies internship, where I had the privilege of developing a
        mobile banking app with accessibility features for visually impaired
        users. Seeing that app in action, helping users navigate their financial
        tasks independently, was an unforgettable moment that reaffirmed why I
        chose this path. Now, as I continue my studies at ESPRIT, I’m diving
        deeper into DevOps, machine learning, and cloud computing. With AWS
        certifications on the way, I’m excited to further shape my skills and
        find opportunities to contribute to impactful projects. I’m looking for
        the next challenge that will allow me to build meaningful solutions that
        truly make a difference.
      </motion.p>
    </motion.div>

    {/* Render Model - Smaller */}
    {/* <div className="w-full md:w-2/5 h-full hidden md:flex justify-center items-center">
        <RenderModel className="w-full h-full">
          <Paimon />
        </RenderModel>
      </div> */}

    <section className="flex flex-col lg:flex-row  justify-evenly items-center w-full px-4">
      {/* Education Section */}
      <section className="py-12 w-full flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent"
        >
          Education
        </motion.h2>
        <div className="flex flex-col items-center w-full relative">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
              className="bg-primary/5 p-4 w-full md:w-4/5 lg:w-3/5 rounded-xl  border border-border shadow-lg mb-6"
            >
              <h3 className="text-xl font-semibold bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] bg-clip-text text-transparent">
                {edu.school}
              </h3>
              <p className="text-sm " style={{ color: "var(--text)" }}>
                {edu.degree}
              </p>
              <p className="text-xs " style={{ color: "var(--text)" }}>
                {edu.years}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Internships Section */}
      <section className="py-12 w-full flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent"
        >
          Internships
        </motion.h2>
        <div className="flex flex-col items-center w-full relative">
          {internshipData.map((int, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
              className="bg-primary/5 border border-border p-4 w-full md:w-4/5 lg:w-3/5 rounded-xl shadow-lg mb-6"
            >
              <h3 className="text-xl font-semibold bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] bg-clip-text text-transparent">
                {int.company}
              </h3>
              <p className="text-sm " style={{ color: "var(--text)" }}>
                {int.position}
              </p>
              <p className="text-xs " style={{ color: "var(--text)" }}>
                {int.duration}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  </div>
);

export default About;
