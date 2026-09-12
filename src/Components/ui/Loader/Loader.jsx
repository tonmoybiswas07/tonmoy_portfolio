
"use client";

import { motion } from "framer-motion";

const Loader = () => {
  const name = "TONMOY";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#020617]">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[100px]"
          animate={{
            scale: [1.2, 0.9, 1.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Animated Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-cyan-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Rotating Outer Ring */}
        <motion.div
          className="absolute h-44 w-44 rounded-full border border-cyan-400/20 border-t-cyan-400 border-r-purple-500"
          animate={{ rotate: 360 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Second Ring */}
        <motion.div
          className="absolute h-36 w-36 rounded-full border border-purple-400/20 border-b-purple-400 border-l-pink-400"
          animate={{ rotate: -360 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Center Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            type: "spring",
            stiffness: 120,
          }}
          className="flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] shadow-[0_0_60px_rgba(34,211,238,0.25)] backdrop-blur-xl"
        >
          <motion.span
            animate={{
              textShadow: [
                "0 0 10px rgba(34,211,238,0.4)",
                "0 0 30px rgba(168,85,247,0.8)",
                "0 0 10px rgba(34,211,238,0.4)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-4xl font-black tracking-widest text-white"
          >
            T
          </motion.span>
        </motion.div>

        {/* Name */}
        <motion.div
          className="mt-14 flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.8 + i * 0.1,
                type: "spring",
                stiffness: 150,
              }}
              className="text-3xl font-extrabold tracking-[0.25em] text-transparent bg-gradient-to-r from-cyan-300 via-white to-purple-400 bg-clip-text md:text-5xl"
            >
              {char}
            </motion.span>
          ))}

          <motion.span
            className="ml-1 text-4xl font-bold text-cyan-400"
            animate={{
              opacity: [1, 0.2, 1],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
            }}
          >
            .
          </motion.span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-3 font-mono text-xs uppercase tracking-[0.35em] text-slate-500"
        >
          MERN Stack Developer
        </motion.p>

        {/* Progress Bar */}
        <div className="mt-10 h-[2px] w-64 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              delay: 0.5,
              duration: 2.5,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Loading Text */}
        <motion.div
          className="mt-5 flex items-center gap-2 font-mono text-xs text-slate-500"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <span>INITIALIZING</span>

          <span className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{
                  duration: 1,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              >
                .
              </motion.span>
            ))}
          </span>
        </motion.div>
      </motion.div>

      {/* Bottom Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-0 right-0 text-center"
      >
        <p className="text-[10px] uppercase tracking-[0.5em] text-slate-700">
          Crafting Digital Experiences
        </p>
      </motion.div>
    </div>
  );
};

export default Loader;

