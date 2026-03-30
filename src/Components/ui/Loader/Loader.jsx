"use client";

import { motion } from "framer-motion";

const Loader = () => {
  const name = "TONMOY";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">
      
      {/* Background Beams */}
      <div className="absolute inset-0 flex justify-center items-center">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-72 bg-gradient-to-t from-blue-500/20 to-transparent rounded-full blur-xl"
            animate={{ y: [0, -50, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{
              repeat: Infinity,
              duration: 2 + i * 0.5,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
            style={{ left: `${20 + i * 15}%` }}
          />
        ))}
      </div>

      {/* Main Loader */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center relative z-10"
      >
        {/* Name */}
        <motion.h1 className="flex text-5xl md:text-6xl font-extrabold tracking-[0.35em]">
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.2 + i * 0.12,
                type: "spring",
                stiffness: 150,
              }}
              className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.7)]"
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            className="text-pink-400 drop-shadow-[0_0_15px_rgba(248,113,113,0.8)]"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          >
            .
          </motion.span>
        </motion.h1>

        {/* Glowing Underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 220 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="h-1 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 rounded-full mt-5 shadow-[0_0_20px_rgba(56,189,248,0.6)]"
        />

        {/* Animated Bars Loader */}
        <motion.div className="flex gap-3 mt-12">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-6 bg-gradient-to-t from-cyan-400 to-purple-500 rounded-full shadow-lg"
              animate={{ y: [0, -20 - i * 5, 0], opacity: [0.3, 1, 0.3] }}
              transition={{
                repeat: Infinity,
                duration: 0.7,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Text */}
        <motion.p
          className="mt-6 text-sm md:text-base font-mono tracking-widest text-gray-400 drop-shadow-lg"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          Initializing portfolio()
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loader; 