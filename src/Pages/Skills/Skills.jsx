import { BackgroundBeams } from "@/Components/ui/background-beams";
import React from "react";
import SkillSection from "./SkillSection";
import SkillsSection from "./SkillSection";

const Skills = () => {
  return (
    <div>
      <div>
        <div className="py-23">
          <SkillsSection></SkillsSection>
        </div>
      </div>
      <BackgroundBeams></BackgroundBeams>
    </div>
  );
};

export default Skills;
