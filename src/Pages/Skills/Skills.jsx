import { BackgroundBeams } from "@/Components/ui/background-beams";
import React from "react";
import SkillSection from "./SkillSection";

const Skills = () => {
  const skillJson = [
    {
      id: 1,
      name: "HTML",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      id: 2,
      name: "CSS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      id: 3,
      name: "JavaScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
   
     {
      id: 15,
      name: "Framer Motion",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      id: 5,
      name: "React",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      id: 6,
      name: "Next.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      id: 7,
      name: "Node.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      id: 8,
      name: "Express.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      id: 9,
      name: "MongoDB",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      id: 10,
      name: "MySQL",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      id: 11,
      name: "Git",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      id: 12,
      name: "GitHub",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      id: 13,
      name: "Tailwind CSS",
      image:
        "https://i.ibb.co.com/FbLjtCtV/png-transparent-tailwind-css-hd-logo-thumbnail.png",
    },
    {
      id: 14,
      name: "Bootstrap",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
     {
      id: 4,
      name: "TypeScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
   
  ];
  return (
    <div>
      <div className="pt-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#34AADB] font-extrabold text-center">
          SKILLS
        </h2>
        <div className="relative w-50 mt-5 mx-auto h-1 bg-gray-800 overflow-hidden rounded">
          {/* Glowing streak */}
          <div className="absolute top-0 left-0 h-1 w-1/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-xl animate-glow"></div>

          {/* Optional sparkle */}
          <div className="absolute top-0 left-0 h-1 w-2 bg-cyan-200 rounded-full animate-sparkle"></div>

          <style>
            {`
          @keyframes glow {
            0% { transform: translateX(-100%); opacity: 0; }
            20% { opacity: 1; }
            50% { transform: translateX(100%); opacity: 1; }
            80% { opacity: 1; }
            100% { transform: translateX(-100%); opacity: 0; }
          }

          @keyframes sparkle {
            0% { transform: translateX(-50%); opacity: 0; }
            50% { transform: translateX(100%); opacity: 1; }
            100% { transform: translateX(200%); opacity: 0; }
          }

          .animate-glow {
            animation: glow 2.5s ease-in-out infinite;
          }

          .animate-sparkle {
            animation: sparkle 2.5s linear infinite;
          }
        `}
          </style>
        </div>
        <div className="py-23">
            <SkillSection skillJson={skillJson}></SkillSection>
        </div>
      </div>
      <BackgroundBeams></BackgroundBeams>
    </div>
  );
};

export default Skills;
