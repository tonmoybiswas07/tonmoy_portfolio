import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiExternalLink,
  FiGithub,
  FiChevronLeft,
  FiChevronRight,
  FiCode,
} from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "PAWMART 🔥",
    description: "Love, care, and quality for your pets.",
    time: "8:53:39 PM",
    greeting: "Good evening!",
    subtitle: "Welcome to PawMart!",
    note: "Pet care with love ❤️",
    live: "https://paw-mart07.netlify.app/",
    source: "https://github.com/tonmoybiswas07/paw_mart_client",
  },
  {
    id: 2,
    title: "English Janala",
    description: "An interactive web app to learn English vocabulary.",
    time: "10:12:10 AM",
    greeting: "Hello!",
    subtitle: "Welcome to English Janala!",
    note: "Learn daily 📘",
    live: "https://english-janala515.netlify.app/",
    source: "https://github.com/tonmoybiswas07/english_janala",
  },
  {
    id: 3,
    title: "Appify App Store",
    description: "Explore apps in modern UI.",
    time: "10:12:10 AM",
    greeting: "Hello!",
    subtitle: "Welcome to Appify!",
    note: "Discover apps 🚀",
    live: "https://appify-app1.netlify.app/",
    source: "https://github.com/tonmoybiswas07/hero_app_a",
  },
];

const AUTOPLAY_DELAY = 5000;

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const next = () => {
    setDirection(1);
    setIndex((current) => (current + 1) % projects.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex(
      (current) => (current - 1 + projects.length) % projects.length
    );
  };

  useEffect(() => {
    if (paused) return;

    timerRef.current = setInterval(next, AUTOPLAY_DELAY);

    return () => {
      clearInterval(timerRef.current);
    };
  }, [paused]);

  const project = projects[index];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#020617] px-4 py-24 sm:px-6 lg:px-12"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Cyan Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[130px]"
      />

      {/* Purple Glow */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-purple-600/20 blur-[130px]"
      />

      {/* Pink Glow */}

      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/5 blur-[120px]" />

      {/* Futuristic Grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56,189,248,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =====================================================
            HEADING
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: -35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-400" />

            <p className="font-mono text-sm font-semibold uppercase tracking-[5px] text-cyan-400">
              My Work
            </p>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            A collection of projects where I turn ideas into modern,
            interactive and functional web experiences.
          </p>

          {/* Heading Line */}

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 160 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-6 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_20px_rgba(34,211,238,0.5)]"
          />
        </motion.div>

        {/* =====================================================
            PROJECT AREA
        ====================================================== */}

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="grid items-stretch gap-8 lg:grid-cols-2"
        >
          {/* =====================================================
              LEFT PROJECT PREVIEW
          ====================================================== */}

          <AnimatePresence mode="wait">
            <motion.div
              key={`preview-${project.id}`}
              initial={{
                x: direction > 0 ? -80 : 80,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              exit={{
                x: direction > 0 ? 80 : -80,
                opacity: 0,
              }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
              }}
              className="relative"
            >
              {/* Gradient Border */}

              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-30 blur-[1px] transition duration-500 hover:opacity-70" />

              {/* Main Preview Card */}

              <div className="relative h-full min-h-[390px] overflow-hidden rounded-3xl border border-white/10 bg-[#07101f]/90 p-6 backdrop-blur-xl sm:p-8">
                {/* Top Bar */}

                <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                    <span className="h-3 w-3 rounded-full bg-green-400/80" />
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[2px] text-slate-600">
                    <FiCode size={12} />
                    Project Preview
                  </div>
                </div>

                {/* Project Number */}

                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[3px] text-cyan-400">
                    Project 0{project.id}
                  </span>

                  <span className="font-mono text-xs text-slate-600">
                    LIVE SYSTEM
                  </span>
                </div>

                {/* Terminal */}

                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#020617] p-6 shadow-inner">
                  {/* Terminal Glow */}

                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

                  <div className="relative z-10 font-mono">
                    <p className="text-xs text-slate-600">
                      tonmoy@portfolio:~$
                    </p>

                    <p className="mt-4 text-sm text-emerald-400">
                      {project.time}
                    </p>

                    <p className="mt-2 text-sm text-slate-400">
                      {project.greeting}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold leading-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent sm:text-3xl">
                      {project.subtitle}
                    </h3>

                    <p className="mt-3 text-sm text-emerald-300/80">
                      {project.note}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-xs text-slate-600">
                      <span className="text-cyan-400">&gt;</span>
                      <span>System ready...</span>
                      <span className="animate-pulse text-cyan-400">_</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Status */}

                <div className="mt-7 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />

                    <span className="font-mono text-[9px] uppercase tracking-[2px] text-slate-600">
                      Project Online
                    </span>
                  </div>

                  <span className="font-mono text-[9px] text-slate-700">
                    0{project.id} / 0{projects.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* =====================================================
              RIGHT PROJECT INFO
          ====================================================== */}

          <AnimatePresence mode="wait">
            <motion.div
              key={`info-${project.id}`}
              initial={{
                x: direction > 0 ? 80 : -80,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              exit={{
                x: direction > 0 ? -80 : 80,
                opacity: 0,
              }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
              }}
              className="relative"
            >
              {/* Gradient Border */}

              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 opacity-20 blur-[1px] transition duration-500 hover:opacity-60" />

              {/* Info Card */}

              <div className="relative flex h-full min-h-[390px] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#07101f]/90 p-7 backdrop-blur-xl sm:p-8">
                {/* Background Number */}

                <div className="pointer-events-none absolute right-5 top-0 font-mono text-[110px] font-black leading-none text-white/[0.025]">
                  0{project.id}
                </div>

                {/* Top */}

                <div className="relative z-10">
                  <p className="mb-3 font-mono text-xs uppercase tracking-[3px] text-purple-400">
                    Featured Project
                  </p>

                  <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
                    {project.title}
                  </h3>

                  <div className="mt-5 h-px w-full bg-gradient-to-r from-purple-400/30 via-cyan-400/10 to-transparent" />

                  <p className="mt-6 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
                    {project.description}
                  </p>
                </div>

                {/* Tech-style Info */}

                <div className="relative z-10 mt-10 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/5 bg-white/[0.025] p-4">
                    <p className="font-mono text-[9px] uppercase tracking-[2px] text-slate-600">
                      Status
                    </p>

                    <p className="mt-2 text-sm font-semibold text-emerald-400">
                      Completed
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-white/[0.025] p-4">
                    <p className="font-mono text-[9px] uppercase tracking-[2px] text-slate-600">
                      Type
                    </p>

                    <p className="mt-2 text-sm font-semibold text-cyan-400">
                      Web Application
                    </p>
                  </div>
                </div>

                {/* Actions */}

                <div className="relative z-10 mt-8 flex flex-wrap items-center gap-3">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-bold text-[#020617] shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                  >
                    <FiExternalLink size={16} />
                    Live Demo
                  </motion.a>

                  <motion.a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-300 transition-all hover:border-purple-400/30 hover:bg-purple-400/5 hover:text-white"
                  >
                    <FiGithub size={17} />
                    Source Code
                  </motion.a>

                  {/* Navigation */}

                  <div className="ml-auto flex gap-2">
                    <motion.button
                      onClick={prev}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Previous project"
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-all hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-400"
                    >
                      <FiChevronLeft size={20} />
                    </motion.button>

                    <motion.button
                      onClick={next}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Next project"
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-all hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-400"
                    >
                      <FiChevronRight size={20} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* =====================================================
            AUTOPLAY INDICATORS
        ====================================================== */}

        <div className="mt-8 flex items-center justify-center gap-3">
          {projects.map((projectItem, projectIndex) => (
            <button
              key={projectItem.id}
              onClick={() => {
                setDirection(projectIndex > index ? 1 : -1);
                setIndex(projectIndex);
              }}
              aria-label={`Go to project ${projectIndex + 1}`}
              className="group"
            >
              <span
                className={`block h-1 rounded-full transition-all duration-500 ${
                  index === projectIndex
                    ? "w-10 bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                    : "w-3 bg-white/10 group-hover:bg-white/30"
                }`}
              />
            </button>
          ))}
        </div>

        {/* =====================================================
            AUTO PLAY PROGRESS
        ====================================================== */}

        {!paused && (
          <div className="mx-auto mt-5 h-[2px] w-32 overflow-hidden rounded-full bg-white/5">
            <motion.div
              key={index}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: AUTOPLAY_DELAY / 1000,
                ease: "linear",
              }}
              className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
            />
          </div>
        )}

        {/* Bottom Label */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 flex justify-center"
        >
          <div className="rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 backdrop-blur-xl">
            <p className="font-mono text-[10px] uppercase tracking-[3px] text-slate-600">
              Design • Develop • Deploy
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;