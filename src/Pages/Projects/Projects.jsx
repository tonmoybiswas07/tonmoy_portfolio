import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundBeams } from "@/Components/ui/background-beams";
import {
  FiExternalLink,
  FiGithub,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

// =====================
// DATA
// =====================
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
    description:
      "An interactive web app to learn English vocabulary effectively.",
    time: "10:12:10 AM",
    greeting: "Hello!",
    subtitle: "Welcome to English Janala!",
    note: "Learn daily, grow fast 📘",
    live: "https://english-janala515.netlify.app/",
    source: "https://github.com/tonmoybiswas07/english_janala",
  },
  {
    id: 3,
    title: "Appify App Store",
    description:
      "Explore apps and view detailed information in a modern UI.",
    time: "10:12:10 AM",
    greeting: "Hello!",
    subtitle: "Welcome to Appify!",
    note: "Discover smarter apps 🚀",
    live: "https://appify-app1.netlify.app/",
    source: "https://github.com/tonmoybiswas07/hero_app_a",
  },
];

const swipeConfidenceThreshold = 80;
const AUTOPLAY_DELAY = 5000;

// =====================
// COMPONENT
// =====================
const Projects = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % projects.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + projects.length) % projects.length);
  };

  // =====================
  // AUTOPLAY (pause on hover)
  // =====================
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, AUTOPLAY_DELAY);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  // =====================
  // KEYBOARD
  // =====================
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const project = projects[index];

  return (
    <section className="relative min-h-screen pb-23 overflow-hidden">
      {/* CONTENT */}
      <div className="relative z-20">
        <h2 className="text-4xl text-[#34AADB] font-extrabold text-center pt-10">
          PROJECTS
        </h2>

        {/* Indicator */}
        <p className="text-center text-white/50 mt-2">
          {index + 1} / {projects.length}
        </p>

        <div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 p-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* LEFT PREVIEW */}
          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              custom={direction}
              initial={{ x: direction > 0 ? -80 : 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? 80 : -80, opacity: 0 }}
              transition={{ duration: 0.45 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={(e, { offset }) => {
                if (offset.x < -swipeConfidenceThreshold) next();
                if (offset.x > swipeConfidenceThreshold) prev();
              }}
              className="bg-black/60 backdrop-blur rounded-3xl p-6 border border-white/10 cursor-grab"
            >
              <p className="text-white/60">Project {project.id}</p>
              <div className="bg-black rounded-2xl p-6 mt-4">
                <p className="text-green-400">{project.time}</p>
                <h2 className="text-white text-xl">{project.greeting}</h2>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  {project.subtitle}
                </h1>
                <p className="text-green-300 mt-1">{project.note}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT CONTENT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={project.title}
              custom={direction}
              initial={{ x: direction > 0 ? 80 : -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -80 : 80, opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="bg-black/40 backdrop-blur rounded-3xl p-8 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-3xl font-bold text-white">
                  {project.title}
                </h2>
                <p className="text-white/60 mt-4">
                  {project.description}
                </p>
              </div>

              {/* ACTIONS */}
              <div className="flex flex-wrap items-center gap-3 mt-10 relative z-30">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-xl bg-pink-500 text-black hover:bg-pink-400"
                >
                  <FiExternalLink /> Live
                </a>
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20"
                >
                  <FiGithub /> Source
                </a>
                <button
                  onClick={prev}
                  className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20"
                  aria-label="Previous"
                >
                  <FiChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20"
                  aria-label="Next"
                >
                  <FiChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* BACKGROUND (NO CLICK BLOCK) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <BackgroundBeams />
      </div>
    </section>
  );
};

export default Projects;