import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}        // শুরুতে invisible + নিচ থেকে
      animate={{ opacity: 1, y: 0 }}        // animate হয়ে normal position এ আসবে
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(34,197,94,0.35)" }} // hover effect
      className="
        w-[220px] h-[220px]
        rounded-2xl
        bg-gradient-to-b from-[#0B1026] to-[#050816]
        border border-white/10
        shadow-[0_0_40px_rgba(34,197,94,0.15)]
        flex flex-col items-center justify-center
        transition-all duration-300
      "
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 mb-6"
      />

      <h3 className="text-white text-2xl font-semibold">
        {item.name}
      </h3>
    </motion.div>
  );
};

export default SkillCard;
