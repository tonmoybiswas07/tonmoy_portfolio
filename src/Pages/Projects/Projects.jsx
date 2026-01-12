import { BackgroundBeams } from "@/Components/ui/background-beams";
import React from "react";

const Projects = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl pt-10 text-[#34AADB] font-extrabold text-center">
          PROJECTS
        </h2>
        <div>
             <div className="relative w-65 mt-5 mx-auto h-1 bg-gray-800 overflow-hidden rounded">
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
        </div>
      </div>
      <BackgroundBeams></BackgroundBeams>
    </div>
  );
};

export default Projects;
