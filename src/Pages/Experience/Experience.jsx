import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { BackgroundBeams } from "@/Components/ui/background-beams";
import img from "../../assets/Coder (1).gif";

/* ---------------- ANIMATION VARIANTS ---------------- */

const sectionVariant = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, x: 100 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

/* ---------------- COMPONENT ---------------- */

const Experience = () => {
  const experienceData = [
    {
      date: "Jun 2025 - Jan 2026",
      title: "Web Development (Learning)",
      company: "Programming Hero",
    },
     {
      date: "Sep 2025 - Dec 2025",
      title: "Front End Development (Learning)",
      company: "BD Calling Academy",
    },
    {
      date: "Jan 2022 - Present",
      title: "Self Employed",
      company: "Code and build something every day.",
    },
   
   
  ];

  return (
    <div>
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        className="relative min-h-screen text-white px-6 md:px-20 py-20 pb-30 overflow-hidden"
      >
        {/* TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#34AADB] to-cyan-300 bg-clip-text text-transparent">
            Experiences
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            className="flex justify-center"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <motion.img
              src={img}
              whileHover={{ scale: 1.08, rotate: 2 }}
              className="w-full max-w-md rounded-3xl object-contain
              shadow-[0_0_80px_rgba(52,170,219,0.5)]"
            />
          </motion.div>

          {/* RIGHT TIMELINE */}
          <div className="relative">

            {/* Vertical Gradient Line */}
            <div className="absolute left-6 top-0 h-full w-[3px] bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent" />

            <div className="space-y-14">
              {experienceData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="show"
                  custom={index}
                  className="relative pl-16"
                >
                  {/* Animated Dot */}
                  <span className="absolute left-[14px] top-6 w-5 h-5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_20px_rgba(34,211,238,1)]" />

                  {/* CARD */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -8 }}
                    className="
                      relative p-[2px] rounded-2xl
                      bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
                    "
                  >
                    <div
                      className="
                        bg-[#050816]/80 backdrop-blur-xl
                        rounded-2xl p-6
                        border border-white/10
                        group relative overflow-hidden
                      "
                    >
                      {/* Light sweep */}
                      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                      <p className="text-sm text-emerald-400 mb-2">
                        ({item.date})
                      </p>

                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400 group-hover:scale-110 transition">
                          <Briefcase size={22} />
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm mt-1">
                            {item.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <BackgroundBeams />
    </div>
  );
};

export default Experience;