import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        scale: 1.04,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="group relative w-[220px] h-[220px] cursor-pointer"
    >
      {/* Animated Gradient Glow */}
      <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-20 blur-[2px] transition-all duration-500 group-hover:opacity-80 group-hover:blur-md" />

      {/* Card */}
      <div
        className="
          relative
          flex h-full w-full flex-col items-center justify-center
          overflow-hidden
          rounded-3xl
          border border-white/10
          bg-[#07101f]/95
          backdrop-blur-xl
          shadow-[0_0_35px_rgba(34,211,238,0.06)]
          transition-all duration-500
          group-hover:border-cyan-400/30
          group-hover:shadow-[0_0_50px_rgba(34,211,238,0.15)]
        "
      >
        {/* Background Glow */}
        <div
          className="
            absolute
            -top-16
            left-1/2
            h-32
            w-32
            -translate-x-1/2
            rounded-full
            bg-cyan-400/10
            blur-3xl
            transition-all
            duration-500
            group-hover:bg-purple-500/20
            group-hover:scale-150
          "
        />

        {/* Futuristic Corner */}
        <div className="absolute left-4 top-4 h-3 w-3 border-l border-t border-cyan-400/40 transition-all duration-500 group-hover:h-5 group-hover:w-5 group-hover:border-cyan-400" />

        <div className="absolute right-4 top-4 h-3 w-3 border-r border-t border-purple-400/40 transition-all duration-500 group-hover:h-5 group-hover:w-5 group-hover:border-purple-400" />

        <div className="absolute bottom-4 left-4 h-3 w-3 border-b border-l border-pink-400/40 transition-all duration-500 group-hover:h-5 group-hover:w-5 group-hover:border-pink-400" />

        <div className="absolute bottom-4 right-4 h-3 w-3 border-b border-r border-cyan-400/40 transition-all duration-500 group-hover:h-5 group-hover:w-5 group-hover:border-cyan-400" />

        {/* Skill Icon */}
        <motion.div
          whileHover={{
            rotate: 5,
            scale: 1.12,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
          }}
          className="
            relative
            z-10
            mb-6
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-2xl
            border border-white/10
            bg-white/[0.03]
            shadow-[0_0_25px_rgba(34,211,238,0.05)]
            transition-all duration-500
            group-hover:border-cyan-400/20
            group-hover:bg-white/[0.06]
            group-hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
          "
        >
          <img
            src={item.image}
            alt={item.name}
            className="
              h-14
              w-14
              object-contain
              drop-shadow-[0_0_12px_rgba(34,211,238,0.2)]
              transition-all
              duration-500
              group-hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]
            "
          />
        </motion.div>

        {/* Skill Name */}
        <h3
          className="
            relative
            z-10
            text-center
            text-xl
            font-semibold
            text-slate-200
            transition-all
            duration-300
            group-hover:text-white
          "
        >
          {item.name}
        </h3>

        {/* Bottom Gradient Line */}
        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-[2px]
            w-0
            -translate-x-1/2
            rounded-full
            bg-gradient-to-r
            from-cyan-400
            via-purple-500
            to-pink-500
            transition-all
            duration-500
            group-hover:w-24
          "
        />

        {/* Status Dot */}
        <div className="absolute right-6 bottom-6 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />

          <span className="font-mono text-[8px] uppercase tracking-widest text-slate-600 transition-colors duration-300 group-hover:text-cyan-400/70">
            Active
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
