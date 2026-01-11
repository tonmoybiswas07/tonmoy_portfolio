import React from "react";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // প্রতিটা SkillCard এর মধ্যে delay
    },
  },
};

const SkillSection = ({ skillJson }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap gap-8 justify-center"
    >
      {skillJson.map((item) => (
        <SkillCard key={item.id} item={item} />
      ))}
    </motion.div>
  );
};

export default SkillSection;
