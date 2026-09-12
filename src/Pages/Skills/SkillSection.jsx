"use client";

import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaStripe,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiJsonwebtokens,
  SiOpenai,
  SiTestinglibrary,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-cyan-400 via-blue-500 to-purple-500",
    number: "01",
    skills: [
      "React.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "Next.js",
    ],
  },
  {
    title: "Backend",
    color: "from-emerald-400 via-cyan-500 to-blue-500",
    number: "02",
    skills: ["Node.js", "Express.js", "API Integration"],
  },
  {
    title: "Database",
    color: "from-yellow-400 via-orange-500 to-pink-500",
    number: "03",
    skills: ["MongoDB", "Mongoose ODM"],
  },
  {
    title: "Auth & Security",
    color: "from-pink-400 via-rose-500 to-purple-500",
    number: "04",
    skills: ["JWT", "Role Based Access Control", "Better Auth"],
  },
  {
    title: "Advanced",
    color: "from-violet-400 via-purple-500 to-cyan-500",
    number: "05",
    skills: [
      "DOM & BOM",
      "AI Integration",
      "AI Assisted Coding",
      "Problem Solving",
    ],
  },
  {
    title: "Payment & Testing",
    color: "from-indigo-400 via-blue-500 to-cyan-400",
    number: "06",
    skills: ["Stripe", "SSLCommerz", "Testing"],
  },
];

const icons = {
  "React.js": <FaReact className="text-cyan-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-300" />,
  HTML5: <FaHtml5 className="text-orange-500" />,
  CSS3: <FaCss3Alt className="text-blue-500" />,
  JavaScript: <FaJs className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-400" />,
  "Next.js": <SiNextdotjs className="text-white" />,

  "Node.js": <FaNodeJs className="text-green-500" />,
  "Express.js": <SiExpress className="text-gray-300" />,

  MongoDB: <SiMongodb className="text-green-400" />,
  "Mongoose ODM": <SiMongoose className="text-red-400" />,

  JWT: <SiJsonwebtokens className="text-pink-400" />,

  Stripe: <FaStripe className="text-indigo-400" />,

  Testing: <SiTestinglibrary className="text-red-500" />,

  "AI Integration": <SiOpenai className="text-emerald-400" />,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
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

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#020617] px-4 py-24 sm:px-6 lg:px-12"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Cyan Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]"
      />

      {/* Purple Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]"
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
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          {/* Small Label */}

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-400" />

            <p className="font-mono text-sm font-semibold uppercase tracking-[5px] text-cyan-400">
              My Expertise
            </p>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>

          {/* Heading */}

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Skills &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Technologies and tools I use to build modern, scalable and
            user-friendly digital experiences.
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
            SKILLS GRID
        ====================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 18,
              }}
              className="group relative"
            >
              {/* Animated Gradient Border */}

              <div
                className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-r ${category.color} opacity-20 blur-[1px] transition duration-500 group-hover:opacity-80`}
              />

              {/* Card */}

              <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#07101f]/90 p-6 backdrop-blur-xl transition-all duration-500 group-hover:border-cyan-400/30 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]">
                {/* Top Glow */}

                <div
                  className={`absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br ${category.color} opacity-5 blur-3xl transition duration-500 group-hover:opacity-20`}
                />

                {/* Category Header */}

                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="mb-1 font-mono text-xs uppercase tracking-[3px] text-slate-500">
                      Category
                    </p>

                    <h3 className="text-2xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Number */}

                  <div
                    className={`bg-gradient-to-r ${category.color} bg-clip-text font-mono text-3xl font-black text-transparent opacity-30 transition duration-500 group-hover:opacity-80`}
                  >
                    {category.number}
                  </div>
                </div>

                {/* Divider */}

                <div className="mb-5 h-px bg-gradient-to-r from-white/10 via-cyan-400/20 to-transparent" />

                {/* Skills */}

                <div className="space-y-3">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.05,
                      }}
                      whileHover={{
                        x: 5,
                      }}
                      className="group/skill flex cursor-default items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.05]"
                    >
                      {/* Icon */}

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-black/20 text-xl transition-all duration-300 group-hover/skill:border-cyan-400/20 group-hover/skill:bg-white/5">
                        {icons[skill] || "🚀"}
                      </div>

                      {/* Skill Name */}

                      <span className="text-sm font-medium text-slate-300 transition-colors duration-300 group-hover/skill:text-white">
                        {skill}
                      </span>

                      {/* Arrow */}

                      <span className="ml-auto text-slate-700 opacity-0 transition-all duration-300 group-hover/skill:translate-x-1 group-hover/skill:text-cyan-400 group-hover/skill:opacity-100">
                        →
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Accent */}

                <div
                  className={`mt-6 h-[2px] w-0 rounded-full bg-gradient-to-r ${category.color} transition-all duration-700 group-hover:w-full`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* =====================================================
            BOTTOM TEXT
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="mx-auto flex max-w-3xl items-center justify-center gap-4">
            <span className="hidden h-px flex-1 bg-gradient-to-r from-transparent to-white/10 sm:block" />

            <p className="font-mono text-sm leading-relaxed text-slate-500 sm:text-base">
              <span className="text-cyan-400">&lt;</span>
              Building
              <span className="text-purple-400"> scalable </span>
              & modern web applications
              <span className="text-cyan-400"> /&gt;</span>
            </p>

            <span className="hidden h-px flex-1 bg-gradient-to-l from-transparent to-white/10 sm:block" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}