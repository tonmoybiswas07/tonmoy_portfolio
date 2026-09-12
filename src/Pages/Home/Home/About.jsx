
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

import hero from "../../../assets/WhatsApp Image 2026-01-11 at 21.57.49.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#020617] px-4 py-24 sm:px-6 lg:px-10"
    >
      {/* =========================================
          Background Effects
      ========================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Cyan Glow */}
        <motion.div
          className="absolute left-[-100px] top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Purple Glow */}
        <motion.div
          className="absolute bottom-0 right-[-100px] h-80 w-80 rounded-full bg-purple-600/10 blur-[130px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* =========================================
          Section Container
      ========================================= */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =========================================
            Section Heading
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,1)]" />

            <span className="font-mono text-xs tracking-[0.25em] text-cyan-300">
              GET TO KNOW ME
            </span>
          </div>

          <h2 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mt-5 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
          />
        </motion.div>

        {/* =========================================
            Main Content
        ========================================= */}

        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">

          {/* =====================================
              LEFT - TEXT
          ===================================== */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full flex-1"
          >
            {/* Glass Card */}

            <motion.div
              whileHover={{
                y: -5,
                boxShadow: "0 0 50px rgba(34,211,238,0.08)",
              }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl sm:p-9"
            >
              {/* Card Glow */}

              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-500/10 blur-[80px]" />

              <div className="relative z-10">

                {/* Small Label */}

                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <FaCode />
                  </div>

                  <div>
                    <p className="font-mono text-xs tracking-widest text-slate-500">
                      WHO I AM
                    </p>

                    <h3 className="text-xl font-bold text-white">
                      TONMOY BISWAS
                    </h3>
                  </div>
                </div>

                {/* Description */}

                <p className="text-justify text-sm leading-8 text-slate-400 sm:text-base">
                  My name is{" "}
                  <span className="font-semibold text-cyan-300">
                    TONMOY BISWAS
                  </span>
                  , a passionate front-end developer who loves exploring new
                  technologies and building modern web experiences. I thrive
                  on problem-solving, enjoy working with JavaScript frameworks,
                  and am always eager to learn and improve.
                </p>

                <p className="mt-5 text-justify text-sm leading-8 text-slate-400 sm:text-base">
                  I enjoy turning ideas into clean, responsive and engaging
                  digital experiences. I am always looking for opportunities
                  where I can learn, contribute and grow as a developer.
                </p>

                {/* Mini Features */}

                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
                  >
                    <FaLaptopCode className="mb-2 text-xl text-cyan-400" />

                    <p className="text-xs font-semibold text-slate-300">
                      Clean Code
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
                  >
                    <FaRocket className="mb-2 text-xl text-purple-400" />

                    <p className="text-xs font-semibold text-slate-300">
                      Modern UI
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
                  >
                    <FaCode className="mb-2 text-xl text-pink-400" />

                    <p className="text-xs font-semibold text-slate-300">
                      Problem Solver
                    </p>
                  </motion.div>

                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* =====================================
              RIGHT - IMAGE
          ===================================== */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex w-full flex-1 justify-center"
          >

            {/* Outer Glow */}

            <motion.div
              className="absolute h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Image Frame */}

            <motion.div
              whileHover={{
                rotate: 1,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
              }}
              className="relative"
            >

              {/* Rotating Border */}

              <motion.div
                className="absolute -inset-2 rounded-[2rem] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-60 blur-sm"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Image Container */}

              <div className="relative rounded-[2rem] border border-white/10 bg-[#020617] p-2 shadow-[0_0_60px_rgba(34,211,238,0.15)]">

                <img
                  src={hero}
                  alt="Tonmoy Biswas"
                  className="h-80 w-80 rounded-[1.5rem] object-cover grayscale transition-all duration-700 hover:grayscale-0 sm:h-96 sm:w-96"
                />

                {/* Image Overlay */}

                <div className="pointer-events-none absolute inset-2 rounded-[1.5rem] bg-gradient-to-t from-[#020617]/50 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 -left-5 rounded-2xl border border-cyan-400/20 bg-[#020617]/80 px-5 py-3 shadow-[0_0_30px_rgba(34,211,238,0.15)] backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">

                  <span className="h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />

                  <div>
                    <p className="font-mono text-[9px] tracking-widest text-slate-500">
                      STATUS
                    </p>

                    <p className="text-xs font-semibold text-slate-200">
                      Always Learning
                    </p>
                  </div>

                </div>
              </motion.div>

              {/* Vertical Label */}

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -right-12 top-1/2 hidden -translate-y-1/2 flex-col items-center md:flex"
              >

                <div className="h-32 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />

                <span className="mt-3 rotate-90 whitespace-nowrap font-mono text-xs font-bold tracking-[0.3em] text-slate-500">
                  ABOUT ME
                </span>

              </motion.div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;

