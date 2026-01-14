import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { BackgroundBeams } from "@/Components/ui/background-beams";
import img from "../../assets/971.jpg";

/* ---------------- ANIMATION VARIANTS ---------------- */

const sectionVariant = {
  hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: "easeOut" },
  },
};

const cardVariant = {
  hidden: { opacity: 0, x: 120 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: "easeOut",
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
      viewport={{ once: true }}
      className="relative min-h-screen  text-white px-6 md:px-20  py-20
      pb-30 overflow-hidden"
    >
      {/* ----------- TITLE ----------- */}
      <div className="text-center mb-20 relative z-10">
        <h2 className="inline-block px-8 py-3 rounded-xl text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#34AADB]">
          Experiences
        </h2>
      </div>

      {/* ----------- CONTENT ----------- */}
      <div className="relative z-10 grid md:grid-cols-2 gap-20 items-center">
        {/* ----------- LEFT IMAGE ----------- */}
        <motion.div
          className="flex justify-center"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.img
            src={img}
            alt="Experience Illustration"
            whileHover={{ scale: 1.06, rotate: 3 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-full max-w-md rounded-3xl object-contain drop-shadow-[0_0_60px_rgba(52,170,219,0.4)]"
          />
        </motion.div>

        {/* ----------- RIGHT TIMELINE ----------- */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 h-full w-[2px] bg-gradient-to-b from-[#34AADB]/60 via-[#34AADB]/20 to-transparent" />

          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="show"
                custom={index}
                viewport={{ once: true }}
                className="relative pl-16"
              >
                {/* Dot */}
                <span className="absolute left-[18px] top-8 w-4 h-4 rounded-full bg-[#34AADB] shadow-[0_0_18px_rgba(52,170,219,0.9)]" />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -10, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 180 }}
                  className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-[#34AADB]/70 hover:shadow-[0_0_45px_rgba(52,170,219,0.25)]"
                >
                  {/* Light sweep */}
                  <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  <p className="text-sm text-emerald-400 mb-2">
                    ({item.date})
                  </p>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#34AADB]/20 text-[#34AADB] group-hover:scale-110 transition">
                      <Briefcase size={22} />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">
                        {item.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ----------- BACKGROUND EFFECT ----------- */}
      
    </motion.section>
   
<BackgroundBeams></BackgroundBeams>
    </div>
  );
};

export default Experience;
