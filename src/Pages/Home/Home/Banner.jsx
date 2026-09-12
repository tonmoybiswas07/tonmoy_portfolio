
import React from "react";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaFacebook,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

import { RiContactsFill } from "react-icons/ri";
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router-dom";

const Banner = () => {
  // =========================
  // Animation Variants
  // =========================
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  // =========================
  // External Links
  // =========================
  const handleExternalLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // =========================
  // Social Links
  // =========================
  const socials = [
    {
      icon: FaGithub,
      url: "https://github.com/tonmoybiswas07",
      label: "GitHub",
    },
    {
      icon: FaFacebook,
      url: "https://web.facebook.com/tonmoy.biswas.7564",
      label: "Facebook",
    },
    {
      icon: FaTwitterSquare,
      url: "https://x.com/TonmoyBiswas945",
      label: "Twitter",
    },
    {
      icon: FaInstagramSquare,
      url: "https://www.instagram.com/___b.tonmoy/",
      label: "Instagram",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617] px-4 py-20 text-white sm:px-6 lg:px-10">

      {/* ========================================
          Background Glow
      ======================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Cyan Glow */}
        <motion.div
          className="absolute left-[5%] top-[15%] h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Purple Glow */}
        <motion.div
          className="absolute bottom-[10%] right-[5%] h-80 w-80 rounded-full bg-purple-600/10 blur-[130px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Pink Glow */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/5 blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* ========================================
          Main Container
      ======================================== */}

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center gap-16 lg:flex-row lg:gap-20"
      >

        {/* ========================================
            LEFT CONTENT
        ======================================== */}

        <motion.div
          variants={item}
          className="w-full flex-1 text-center lg:text-left"
        >

          {/* Small Badge */}

          <motion.div
            variants={item}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 backdrop-blur-md"
          >
            <motion.span
              className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)]"
              animate={{
                opacity: [1, 0.3, 1],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />

            <span className="font-mono text-xs tracking-[0.2em] text-cyan-300">
              AVAILABLE FOR WORK
            </span>
          </motion.div>

          {/* Heading */}

          <motion.div variants={item}>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Hello,
            </h1>

            <h2 className="mt-2 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              This is{" "}
              <motion.span
                className="inline-block bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                TONMOY
              </motion.span>
              .
            </h2>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-200 sm:text-4xl lg:text-5xl">
              I'm a{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Professional
              </span>
            </h2>

            <h2 className="mt-2 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,211,238,0.35)]">
                MERN Stack
              </span>{" "}
              <span className="text-white">Developer.</span>
            </h2>

          </motion.div>

          {/* Description */}

          <motion.p
            variants={item}
            className="mx-auto mt-7 max-w-xl text-sm leading-7 text-slate-400 sm:text-base lg:mx-0"
          >
            I build modern, responsive and user-friendly web applications
            with clean code, creative interfaces and powerful technologies.
          </motion.p>

          {/* ========================================
              Social Icons
          ======================================== */}

          <motion.div
            variants={item}
            className="mt-9 flex justify-center gap-4 lg:justify-start"
          >
            {socials.map((social, index) => {
              const Icon = social.icon;

              return (
                <motion.button
                  key={index}
                  onClick={() => handleExternalLink(social.url)}
                  aria-label={social.label}
                  whileHover={{
                    y: -6,
                    scale: 1.12,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] text-xl text-slate-400 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
                >
                  <span className="absolute inset-0 -translate-y-full bg-gradient-to-b from-cyan-400/10 to-purple-500/10 transition-transform duration-300 group-hover:translate-y-0" />

                  <Icon className="relative z-10" />
                </motion.button>
              );
            })}
          </motion.div>

          {/* ========================================
              Buttons
          ======================================== */}

          <motion.div
            variants={item}
            className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
          >

            {/* Contact */}

            <Link to="/contact">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 35px rgba(139,92,246,0.4)",
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="group flex w-full items-center justify-center gap-2 rounded-xl border border-purple-400/30 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 px-7 py-3.5 font-semibold shadow-lg shadow-purple-500/20 transition-all duration-300 sm:w-auto"
              >
                CONTACT ME

                <RiContactsFill className="text-xl transition-transform duration-300 group-hover:rotate-12" />
              </motion.button>
            </Link>

            {/* Resume */}

            <a href="/cv.pdf" download="Tonmoy_Biswas_CV.pdf">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(34,211,238,0.1)",
                  boxShadow: "0 0 30px rgba(34,211,238,0.2)",
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="group flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-400/30 bg-white/[0.03] px-7 py-3.5 font-semibold text-cyan-300 backdrop-blur-md transition-all duration-300 sm:w-auto"
              >
                GET RESUME

                <IoMdDownload className="text-xl transition-transform duration-300 group-hover:translate-y-1" />
              </motion.button>
            </a>

          </motion.div>
        </motion.div>

        {/* ========================================
            RIGHT CODE CARD
        ======================================== */}

        <motion.div
          variants={item}
          className="w-full flex-1"
        >

          <motion.div
            whileHover={{
              y: -8,
              boxShadow: "0 0 80px rgba(34,211,238,0.15)",
            }}
            transition={{
              duration: 0.4,
            }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#020617]/80 shadow-[0_0_60px_rgba(124,58,237,0.12)] backdrop-blur-xl"
          >

            {/* Card Glow */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-purple-500/10 blur-[80px]" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-cyan-500/10 blur-[80px]" />

            {/* ========================================
                Browser Header
            ======================================== */}

            <div className="relative flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-5 py-4">

              <div className="flex items-center gap-2.5">

                <motion.span
                  whileHover={{ scale: 1.2 }}
                  className="h-3 w-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.6)]"
                />

                <motion.span
                  whileHover={{ scale: 1.2 }}
                  className="h-3 w-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.6)]"
                />

                <motion.span
                  whileHover={{ scale: 1.2 }}
                  className="h-3 w-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]"
                />

              </div>

              <span className="font-mono text-[10px] tracking-widest text-slate-600">
                tonmoy.dev
              </span>

            </div>

            {/* ========================================
                Code
            ======================================== */}

            <pre className="relative overflow-x-auto p-5 text-xs leading-7 sm:p-7 sm:text-sm lg:text-[15px]">

              <code>

                <span className="text-pink-400">const</span>{" "}
                <span className="text-white">coder</span>{" "}
                <span className="text-pink-400">=</span>{" "}
                <span className="text-slate-500">{"{"}</span>

                {"\n"}

                <span className="ml-4 text-cyan-300">
                  name
                </span>
                <span className="text-slate-500">:</span>{" "}
                <span className="text-yellow-300">
                  'Tonmoy'
                </span>
                <span className="text-slate-500">,</span>

                {"\n"}

                <span className="ml-4 text-cyan-300">
                  skills
                </span>
                <span className="text-slate-500">:</span>{" "}
                <span className="text-slate-500">[</span>

                <span className="text-yellow-300">'React'</span>
                <span className="text-slate-500">, </span>

                <span className="text-yellow-300">'NodeJS'</span>
                <span className="text-slate-500">, </span>

                <span className="text-yellow-300">'JavaScript'</span>
                <span className="text-slate-500">,</span>

                {"\n"}

                <span className="ml-8 text-yellow-300">
                  'Express'
                </span>
                <span className="text-slate-500">, </span>

                <span className="text-yellow-300">
                  'NestJS'
                </span>
                <span className="text-slate-500">, </span>

                <span className="text-yellow-300">
                  'MySql'
                </span>
                <span className="text-slate-500">, </span>

                <span className="text-yellow-300">
                  'MongoDB'
                </span>
                <span className="text-slate-500">,</span>

                {"\n"}

                <span className="ml-8 text-yellow-300">
                  'Docker'
                </span>
                <span className="text-slate-500">, </span>

                <span className="text-yellow-300">
                  'AWS'
                </span>

                <span className="text-slate-500">],</span>

                {"\n"}

                <span className="ml-4 text-cyan-300">
                  hardWorker
                </span>

                <span className="text-slate-500">:</span>{" "}
                <span className="text-orange-400">
                  true
                </span>
                <span className="text-slate-500">,</span>

                {"\n"}

                <span className="ml-4 text-cyan-300">
                  quickLearner
                </span>

                <span className="text-slate-500">:</span>{" "}
                <span className="text-orange-400">
                  true
                </span>
                <span className="text-slate-500">,</span>

                {"\n"}

                <span className="ml-4 text-cyan-300">
                  problemSolver
                </span>

                <span className="text-slate-500">:</span>{" "}
                <span className="text-orange-400">
                  true
                </span>
                <span className="text-slate-500">,</span>

                {"\n"}

                <span className="ml-4 text-green-400">
                  hireable
                </span>

                <span className="text-slate-500">:</span>{" "}
                <span className="text-orange-400">
                  function
                </span>

                <span className="text-slate-500">() {"{"}</span>

                {"\n"}

                <span className="ml-8 text-orange-400">
                  return
                </span>{" "}

                <span className="text-slate-500">(</span>

                {"\n"}

                <span className="ml-12 text-purple-400">
                  this
                </span>
                <span className="text-white">
                  .hardWorker
                </span>{" "}
                <span className="text-pink-400">&amp;&amp;</span>

                {"\n"}

                <span className="ml-12 text-purple-400">
                  this
                </span>
                <span className="text-white">
                  .problemSolver
                </span>{" "}
                <span className="text-pink-400">&amp;&amp;</span>

                {"\n"}

                <span className="ml-12 text-purple-400">
                  this
                </span>
                <span className="text-white">
                  .skills.length
                </span>{" "}
                <span className="text-pink-400">&gt;=</span>{" "}
                <span className="text-orange-400">5</span>

                {"\n"}

                <span className="ml-8 text-slate-500">
                  );
                </span>

                {"\n"}

                <span className="ml-4 text-slate-500">
                  {"}"}
                </span>

                {"\n"}

                <span className="text-slate-500">
                  {"};"}
                </span>

              </code>
            </pre>

            {/* Bottom Status */}

            <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-5 py-3">

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />

                <span className="font-mono text-[10px] text-slate-500">
                  SYSTEM ONLINE
                </span>
              </div>

              <span className="font-mono text-[10px] text-slate-600">
                v1.0.0
              </span>

            </div>

          </motion.div>

        </motion.div>

      </motion.div>

      {/* ========================================
          Bottom Scroll Indicator
      ======================================== */}

      <motion.div
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        animate={{
          y: [0, 8, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <span className="font-mono text-[9px] tracking-[0.4em] text-slate-600">
          SCROLL
        </span>

        <div className="h-8 w-[1px] bg-gradient-to-b from-cyan-400 to-transparent" />
      </motion.div>

    </section>
  );
};

export default Banner;

