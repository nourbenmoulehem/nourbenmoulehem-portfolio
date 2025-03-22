import React from "react";

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

function AboutV2() {
  return (
    <div className="flex flex-col gap-7 p-12 bg-pink-400">

      {/* About Me Section */}
      <div className="">
        <p>
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
          cloud by mastering AWS, containerization, and automation, with the
          ultimate goal of becoming a cloud-focused software engineer. If you're
          into tech, open source, or DevOps, feel free to reach out!
        </p>
      </div>

      {/* Experience Section */}
      <div className="flex justify-evenly w-full h-full">
        {/* Education */}
        <div className="flex flex-col items-center ">
          <h2 className="text-2xl font-semibold">Education</h2>

          {educationData.map((edu, index) => (
            <div className="bg-gray-900  w-full rounded-lg  shadow-lg ">
              <h3 className="text-xl font-semibold">{edu.school}</h3>
              <p className="text-sm text-gray-400">{edu.degree}</p>
              <p className="text-xs text-gray-500">{edu.years}</p>
            </div>
          ))}
        </div>

        {/* Internships */}
        <div className=" flex flex-col items-center ">

          <h2 className="text-2xl font-semibold">Internships</h2>

          {internshipData.map((internship, index) => (
            <div className="bg-gray-900  w-full rounded-lg shadow-lg ">
              <h3 className="text-xl font-semibold">{internship.company}</h3>
              <p className="text-sm text-gray-400">{internship.position}</p>
              <p className="text-xs text-gray-500">{internship.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutV2;
