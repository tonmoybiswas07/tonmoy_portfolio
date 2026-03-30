import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundBeams } from "@/Components/ui/background-beams";
import {
  FiExternalLink,
  FiGithub,
  FiChevronLeft,
  FiChevronRight,
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

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, AUTOPLAY_DELAY);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  const project = projects[index];

  return (
    <section className="relative min-h-screen overflow-hidden py-20">
      
      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl text-center font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        PROJECTS
      </h2>

      {/* PROGRESS BAR */}
      <div className="w-40 h-[3px] bg-white/10 mx-auto mt-4 rounded-full overflow-hidden">
        <motion.div
          key={index}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: AUTOPLAY_DELAY / 1000, ease: "linear" }}
          className="h-full bg-cyan-400"
        />
      </div>

      <div
        className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 p-6 mt-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >

        {/* LEFT CARD */}
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative p-[2px] rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
          >
            <div className="bg-black/70 backdrop-blur-xl rounded-3xl p-6">

              <p className="text-white/50">Project {project.id}</p>

              <div className="bg-black rounded-2xl p-6 mt-4 shadow-inner">
                <p className="text-green-400">{project.time}</p>
                <h2 className="text-white">{project.greeting}</h2>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  {project.subtitle}
                </h1>
                <p className="text-green-300 mt-1">{project.note}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* RIGHT CARD */}
        <AnimatePresence mode="wait">
          <motion.div
            key={project.title}
            initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative p-[2px] rounded-3xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
          >
            <div className="bg-black/60 backdrop-blur-xl rounded-3xl p-8 flex flex-col justify-between h-full">

              <div>
                <h2 className="text-3xl font-bold text-white">
                  {project.title}
                </h2>
                <p className="text-white/60 mt-4">
                  {project.description}
                </p>
              </div>

              {/* ACTIONS */}
              <div className="flex flex-wrap gap-3 mt-10">

                <a
                  href={project.live}
                  target="_blank"
                  className="px-5 py-2 rounded-xl bg-cyan-400 text-black font-semibold hover:scale-105 transition"
                >
                  <FiExternalLink /> Live
                </a>

                <a
                  href={project.source}
                  target="_blank"
                  className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20"
                >
                  <FiGithub /> Code
                </a>

                <button
                  onClick={prev}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20"
                >
                  <FiChevronLeft />
                </button>

                <button
                  onClick={next}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20"
                >
                  <FiChevronRight />
                </button>

              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <BackgroundBeams />
      </div>
    </section>
  );
};

export default Projects;