import React from "react";
import { motion } from "framer-motion";
import { Briefcase, CalendarDays, Code2 } from "lucide-react";
import img from "../../assets/Coder (1).gif";

const experienceData = [
  {
    date: "Jun 2025 - Jan 2026",
    title: "MERN Stack Development",
    company: "Programming Hero",
    type: "Learning & Development",
  },
  {
    date: "Sep 2025 - Dec 2025",
    title: "Front End Development",
    company: "BD Calling Academy",
    type: "Professional Training",
  },
  {
    date: "Jan 2022 - Present",
    title: "Self Employed",
    company: "Code and build something every day.",
    type: "Independent Developer",
  },
];

const sectionVariant = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Experience = () => {
  return (
    <section
      id="experience"
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
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =====================================================
            HEADING
        ====================================================== */}

        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-400" />

            <p className="font-mono text-sm font-semibold uppercase tracking-[5px] text-cyan-400">
              My Journey
            </p>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            A journey of continuous learning, development and building
            real-world digital experiences.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 160 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-6 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_20px_rgba(34,211,238,0.5)]"
          />
        </motion.div>

        {/* =====================================================
            EXPERIENCE CONTENT
        ====================================================== */}

        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* =====================================================
              LEFT IMAGE
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Outer Glow */}

            <div className="absolute h-80 w-80 rounded-full bg-cyan-500/10 blur-[90px]" />

            {/* Image Container */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Gradient Border */}

              <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-50 blur-[2px]" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#07101f]/90 p-3 backdrop-blur-xl">
                <motion.img
                  src={img}
                  alt="Developer coding animation"
                  whileHover={{
                    scale: 1.04,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="w-full max-w-md rounded-2xl object-contain transition-all duration-500"
                />

                {/* Image Overlay */}

                <div className="pointer-events-none absolute inset-3 rounded-2xl bg-gradient-to-t from-[#020617]/50 via-transparent to-transparent" />
              </div>

              {/* Floating Status */}

              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute -bottom-5 -right-4 flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-[#07101f]/90 px-5 py-3 shadow-[0_0_30px_rgba(34,211,238,0.1)] backdrop-blur-xl"
              >
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                </span>

                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[2px] text-slate-500">
                    Status
                  </p>

                  <p className="text-sm font-semibold text-white">
                    Always Learning
                  </p>
                </div>
              </motion.div>

              {/* Floating Code Icon */}

              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute -left-5 -top-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/20 bg-[#07101f]/90 text-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.15)] backdrop-blur-xl"
              >
                <Code2 size={24} />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT TIMELINE
          ====================================================== */}

          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="relative"
          >
            {/* Timeline Line */}

            <div className="absolute bottom-5 left-[19px] top-5 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 opacity-40" />

            <div className="space-y-8">
              {experienceData.map((experience, index) => (
                <motion.div
                  key={index}
                  variants={cardVariant}
                  className="group relative pl-12"
                >
                  {/* Timeline Dot */}

                  <div className="absolute left-0 top-8 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-[#020617] shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                    <span className="h-3 w-3 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                  </div>

                  {/* Card Gradient Border */}

                  <div className="absolute -inset-[1px] left-12 rounded-3xl bg-gradient-to-r from-cyan-400/0 via-purple-500/0 to-pink-500/0 opacity-0 blur-[1px] transition-all duration-500 group-hover:from-cyan-400/40 group-hover:via-purple-500/40 group-hover:to-pink-500/40 group-hover:opacity-100" />

                  {/* Card */}

                  <motion.div
                    whileHover={{
                      y: -6,
                      scale: 1.015,
                    }}
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#07101f]/90 p-6 backdrop-blur-xl transition-all duration-500 group-hover:border-cyan-400/20 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
                  >
                    {/* Light Sweep */}

                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                    {/* Top */}

                    <div className="relative z-10 mb-5 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <CalendarDays
                          size={14}
                          className="text-cyan-400"
                        />

                        <p className="font-mono text-xs text-cyan-400">
                          {experience.date}
                        </p>
                      </div>

                      <span className="rounded-full border border-purple-400/10 bg-purple-400/5 px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-purple-400">
                        {experience.type}
                      </span>
                    </div>

                    {/* Main Content */}

                    <div className="relative z-10 flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/5 text-cyan-400 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                        <Briefcase size={21} />
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-xl">
                          {experience.title}
                        </h3>

                        <p className="mt-2 text-sm leading-relaxed text-slate-400">
                          {experience.company}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Line */}

                    <div className="relative z-10 mt-6 h-px bg-gradient-to-r from-cyan-400/20 via-purple-400/10 to-transparent" />

                    {/* Bottom Status */}

                    <div className="relative z-10 mt-4 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />

                      <span className="font-mono text-[9px] uppercase tracking-[2px] text-slate-600 transition-colors duration-300 group-hover:text-emerald-400/70">
                        Experience Logged
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM LABEL
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex justify-center"
        >
          <div className="rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 backdrop-blur-xl">
            <p className="font-mono text-xs uppercase tracking-[3px] text-slate-600">
              Learn → Build → Improve → Repeat
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;