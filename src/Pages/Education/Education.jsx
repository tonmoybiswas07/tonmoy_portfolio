import React from "react";
import { motion } from "framer-motion";
import {
  FaBook,
  FaCalendarAlt,
  FaTrophy,
  FaGraduationCap,
} from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const educationData = [
  {
    number: "01",
    title: "Secondary School Certificate",
    institution: "Ulipur M.S. School & College",
    duration: "2019 – 2021",
    description:
      "Focused on core science subjects with emphasis on practical laboratory work and scientific research methodologies.",
    gpa: "GPA: 4.11",
    stream: "Subject: Science",
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology"],
    gradient: "from-cyan-400 via-blue-500 to-purple-500",
    iconColor: "text-cyan-400",
  },
  {
    number: "02",
    title: "Diploma In Engineering (CST)",
    institution: "Institute Of Engineering And Technology",
    duration: "2021 – 2025",
    description:
      "Diploma in Engineering in Computer Technology, driven by a passion for problem-solving and software development.",
    gpa: "CGPA: 3.55",
    stream: "Subject: CST",
    subjects: ["Data Structure", "UI/UX", "Python", "JAVA"],
    gradient: "from-purple-400 via-pink-500 to-cyan-400",
    iconColor: "text-purple-400",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Education = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#020617] px-4 py-24 sm:px-6 lg:px-12"
    >
      {/* =====================================================
          BACKGROUND GLOWS
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

      {/* Center Glow */}
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
            SECTION HEADING
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: -35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          {/* Small Label */}

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-400" />

            <p className="font-mono text-sm font-semibold uppercase tracking-[5px] text-cyan-400">
              My Journey
            </p>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          {/* Main Heading */}

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Educational{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Discover how academic excellence, technical knowledge and
            continuous learning have shaped my professional journey.
          </p>

          {/* Gradient Line */}

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 160 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-6 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_20px_rgba(34,211,238,0.5)]"
          />
        </motion.div>

        {/* =====================================================
            EDUCATION CARDS
        ====================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-8 lg:grid-cols-2"
        >
          {educationData.map((education) => (
            <motion.div
              key={education.number}
              variants={cardVariants}
              whileHover={{
                y: -10,
              }}
              className="group relative"
            >
              {/* Gradient Border */}

              <div
                className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-r ${education.gradient} opacity-20 blur-[1px] transition-all duration-500 group-hover:opacity-80 group-hover:blur-sm`}
              />

              {/* Card */}

              <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#07101f]/90 p-7 backdrop-blur-xl transition-all duration-500 group-hover:border-cyan-400/20 group-hover:shadow-[0_0_45px_rgba(34,211,238,0.08)] sm:p-8">
                {/* Background Glow */}

                <div
                  className={`absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${education.gradient} opacity-5 blur-3xl transition-all duration-700 group-hover:opacity-15`}
                />

                {/* Number */}

                <div
                  className={`absolute right-7 top-5 bg-gradient-to-r ${education.gradient} bg-clip-text font-mono text-5xl font-black text-transparent opacity-10 transition-all duration-500 group-hover:opacity-30`}
                >
                  {education.number}
                </div>

                {/* Header */}

                <div className="relative z-10 mb-7 flex items-start gap-4">
                  {/* Icon */}

                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-2xl ${education.iconColor} shadow-[0_0_20px_rgba(34,211,238,0.05)] transition-all duration-500 group-hover:border-cyan-400/20 group-hover:bg-white/[0.07]`}
                  >
                    <FaBook />
                  </div>

                  <div>
                    <p className="mb-1 font-mono text-[10px] uppercase tracking-[3px] text-slate-500">
                      Education
                    </p>

                    <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">
                      {education.title}
                    </h3>
                  </div>
                </div>

                {/* Institution */}

                <div className="relative z-10 mb-4 flex items-center gap-3">
                  <MdSchool className="text-xl text-emerald-400" />

                  <span className="text-sm font-medium text-slate-300 sm:text-base">
                    {education.institution}
                  </span>
                </div>

                {/* Duration */}

                <div className="relative z-10 mb-7 flex items-center gap-3 text-slate-500">
                  <FaCalendarAlt className="text-sm text-cyan-400" />

                  <span className="font-mono text-sm">
                    {education.duration}
                  </span>
                </div>

                {/* Divider */}

                <div className="mb-7 h-px bg-gradient-to-r from-white/10 via-cyan-400/20 to-transparent" />

                {/* Description */}

                <div className="relative z-10 mb-8 border-l-2 border-cyan-400/60 pl-4">
                  <p className="text-sm italic leading-relaxed text-slate-400 sm:text-base">
                    {education.description}
                  </p>
                </div>

                {/* Achievement Heading */}

                <div className="relative z-10 mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-400/10">
                    <FaTrophy className="text-sm text-yellow-400" />
                  </div>

                  <h4 className="text-lg font-semibold text-white">
                    Key Achievements
                  </h4>
                </div>

                {/* Achievement Badges */}

                <div className="relative z-10 mb-7 flex flex-wrap gap-3">
                  <span className="rounded-full border border-emerald-400/10 bg-emerald-400/5 px-4 py-2 font-mono text-xs text-emerald-400">
                    🏅 {education.gpa}
                  </span>

                  <span className="rounded-full border border-cyan-400/10 bg-cyan-400/5 px-4 py-2 font-mono text-xs text-cyan-400">
                    🎓 {education.stream}
                  </span>
                </div>

                {/* Subjects */}

                <div className="relative z-10">
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[3px] text-slate-600">
                    Core Subjects
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {education.subjects.map((subject) => (
                      <motion.span
                        key={subject}
                        whileHover={{
                          y: -4,
                          scale: 1.05,
                        }}
                        className="cursor-pointer rounded-lg border border-blue-400/10 bg-blue-400/5 px-3 py-2 text-xs font-medium text-blue-400 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
                      >
                        {subject}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Bottom Accent */}

                <div
                  className={`mt-8 h-[2px] w-0 rounded-full bg-gradient-to-r ${education.gradient} transition-all duration-700 group-hover:w-full`}
                />

                {/* Status */}

                <div className="absolute bottom-7 right-7 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />

                  <span className="font-mono text-[8px] uppercase tracking-widest text-slate-600 transition-colors duration-300 group-hover:text-cyan-400/70">
                    Completed
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* =====================================================
            BOTTOM JOURNEY INDICATOR
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex items-center justify-center"
        >
          <div className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 backdrop-blur-xl">
            <FaGraduationCap className="text-cyan-400" />

            <span className="font-mono text-xs uppercase tracking-[2px] text-slate-500">
              Learning • Growing • Building
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;