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
    color: "from-slate-800 via-slate-900 to-black",
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
    color: "from-emerald-950 via-slate-900 to-black",
    skills: ["Node.js", "Express.js", "API Integration"],
  },
  {
    title: "Database",
    color: "from-yellow-950 via-slate-900 to-black",
    skills: ["MongoDB", "Mongoose ODM"],
  },
  {
    title: "Auth & Security",
    color: "from-rose-950 via-slate-900 to-black",
    skills: ["JWT", "Role Based Access Control", "Better Auth"],
  },
  {
    title: "Advanced",
    color: "from-violet-950 via-slate-900 to-black",
    skills: [
      "DOM & BOM",
      "AI Integration",
      "AI Assisted Coding",
      "Problem Solving",
    ],
  },
  {
    title: "Payment & Testing",
    color: "from-indigo-950 via-slate-900 to-black",
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

export default function SkillsSection() {
  return (
    <section className="relative overflow-hidden pb-24 px-4">
      {/* Background Glow */}
      <div className="absolute -top-20 left-20 w-96 h-96  rounded-full" />
      <div className="absolute bottom-0 right-20 w-96 h-96 rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-semibold uppercase tracking-[5px]">
            My Expertise
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
            Skills &
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              {" "}
              Technologies
            </span>
          </h2>

          <div className="w-40 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${category.color}
              p-[1px] rounded-3xl
              hover:scale-[1.03]
              transition-all duration-500`}
            >
              <div
                className="
                h-full
                bg-[#0F172A]/90
                backdrop-blur-xl
                border border-slate-700
                rounded-3xl
                p-6
                shadow-[0_0_25px_rgba(0,0,0,0.4)]
                hover:border-cyan-500/40
                hover:shadow-cyan-500/10
                transition-all duration-500
              "
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  {category.title}
                </h3>

                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="
                      flex items-center gap-3
                      bg-slate-800/40
                      border border-slate-700
                      hover:border-cyan-500/40
                      hover:bg-slate-800/70
                      rounded-xl
                      p-3
                      transition-all duration-300
                    "
                    >
                      <span className="text-2xl">
                        {icons[skill] || "🚀"}
                      </span>

                      <span className="text-slate-200 font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-lg">
            Building scalable, modern and user-friendly web applications with
            the latest technologies.
          </p>
        </div>
      </div>
    </section>
  );
}