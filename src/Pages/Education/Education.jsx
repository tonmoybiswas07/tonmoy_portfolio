import { BackgroundBeams } from "@/Components/ui/background-beams";
import React from "react";
import { motion } from "framer-motion";
import { FaBook, FaCalendarAlt, FaTrophy } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const container = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const cardStyle = `
  max-w-4xl mx-auto rounded-2xl border-2 flex-1
  border-slate-700
  bg-gradient-to-br from-[#050b1f] to-[#020617]
  p-8 text-slate-200 shadow-xl
  transition-all duration-300
  hover:border-cyan-400
  hover:shadow-[0_0_30px_rgba(34,211,238,0.9)]
  cursor-pointer
`;

const Education = () => {
  return (
    <div className="mx-5 md:mx-10 lg:mx-20 pb-30">

      {/* Title */}
      <div className="pt-20 mb-10 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#34AADB] font-extrabold">
          Educational Journey
        </h1>
        <p className="text-sm text-white mt-4">
          Discover how academic excellence shapes innovative thinking and professional growth.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6">

        {/* Card 1 */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          whileHover={{ y: -8 }}
          className={cardStyle}
        >
          <motion.div variants={item} className="flex items-center gap-3 mb-6">
            <FaBook className="text-3xl text-cyan-400" />
            <h2 className="text-3xl font-bold">
              Secondary School Certificate
            </h2>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-3 mb-3">
            <MdSchool className="text-xl text-emerald-400" />
            <span className="text-lg">Ulipur M.S. School & College</span>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-3 mb-6 text-slate-400">
            <FaCalendarAlt />
            <span>2019 – 2021</span>
          </motion.div>

          <motion.div variants={item} className="border-l-4 border-cyan-400 pl-4 italic mb-8">
            Focused on core science subjects with emphasis on practical
            laboratory work and scientific research methodologies.
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-3 mb-4">
            <FaTrophy className="text-yellow-400 text-xl" />
            <h3 className="text-xl font-semibold">Key Achievements</h3>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-4 mb-6">
            <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-emerald-400">
              🏅 GPA: 4.11
            </span>
            <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-400">
              🎓 Subject: Science
            </span>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-3">
            {["Mathematics", "Physics", "Chemistry", "Biology"].map((subject) => (
              <motion.span
                key={subject}
                whileHover={{ y: -4, scale: 1.05 }}
                className="rounded-lg bg-blue-500/10 px-4 py-2 text-blue-400 cursor-pointer"
              >
                {subject}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          whileHover={{ y: -8 }}
          className={cardStyle}
        >
          <motion.div variants={item} className="flex items-center gap-3 mb-6">
            <FaBook className="text-3xl text-cyan-400" />
            <h2 className="text-3xl font-bold">
              Diploma In Engineering (CST)
            </h2>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-3 mb-3">
            <MdSchool className="text-xl text-emerald-400" />
            <span className="text-lg">Institute Of Engineering And Technology</span>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-3 mb-6 text-slate-400">
            <FaCalendarAlt />
            <span>2021 – 2025</span>
          </motion.div>

          <motion.div variants={item} className="border-l-4 border-cyan-400 pl-4 italic mb-8">
            Diploma in Engineering in Computer Technology, driven by a passion for problem-solving and software development.
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-3 mb-4">
            <FaTrophy className="text-yellow-400 text-xl" />
            <h3 className="text-xl font-semibold">Key Achievements</h3>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-4 mb-6">
            <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-emerald-400">
              🏅 CGPA: 3.52
            </span>
            <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-400">
              🎓 Subject: CST
            </span>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-3">
            {["Data Structure", "UI/UX", "Python", "JAVA"].map((subject) => (
              <motion.span
                key={subject}
                whileHover={{ y: -4, scale: 1.05 }}
                className="rounded-lg bg-blue-500/10 px-4 py-2 text-blue-400 cursor-pointer"
              >
                {subject}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

      </div>

      <BackgroundBeams />
    </div>
  );
};

export default Education;