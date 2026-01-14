import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router";

const Banner = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const iconVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="flex flex-col lg:flex-row justify-center items-center gap-20 mx-0 md:mx-10 lg:mx-20 px-4"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Left Content */}
      <motion.div className="content flex-1" variants={item}>
        <motion.div variants={item}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 text-white pt-10">
            Hello,
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 text-white">
            This is <span className="text-[#F6339A]">TONMOY</span>, I'm a
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 text-white">
            Professional <span className="text-[#15F2B2]">FrontEnd</span>
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 text-white">
            <span className="text-[#15F2B2]">Developer</span>.
          </h1>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="icon mt-10 flex justify-center lg:justify-start gap-6"
          variants={iconVariant}
        >
          <div
            className="text-4xl text-[#F6339A] hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
            onClick={() =>
              window.open("https://github.com/tonmoybiswas07", "_blank")
            }
          >
            <FaGithub />
          </div>
          <div
            className="text-4xl text-[#F6339A] hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
            onClick={() =>
              window.open(
                "https://web.facebook.com/tonmoy.biswas.7564",
                "_blank"
              )
            }
          >
            <FaFacebook />
          </div>
          <div
            className="text-4xl text-[#F6339A] hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
            onClick={() =>
              window.open("https://x.com/TonmoyBiswas945", "_blank")
            }
          >
            <FaTwitterSquare />
          </div>
          <div
            className="text-4xl text-[#F6339A] hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
            onClick={() =>
              window.open("https://www.instagram.com/___b.tonmoy/", "_blank")
            }
          >
            <FaInstagram />
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex justify-center items-center md:justify-start md:items-start lg:justify-start lg:items-start flex-col sm:flex-row gap-4 mt-12"
          variants={item}
        >
          {/* Contact Button */}
          <Link to={"/contact"}>
            <button className="bg-slate-800 group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="relative flex justify-center items-center space-x-2 z-10 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-xl py-3.5 px-4 ring-1 ring-white/10">
                <span className="text-xl px-1">CONTACT ME</span>
                <RiContactsFill className="text-xl" />
              </div>
            </button>
          </Link>

          {/* Resume Button */}
          <button className="bg-slate-800 group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full pointer-events-none bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative flex justify-center items-center space-x-2 z-10 rounded-full bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl py-3.5 px-4 ring-1 ring-white/10">
              <span className="text-xl px-1">GET RESUME</span>
              <IoMdDownload className="text-xl" />
            </div>
          </button>
        </motion.div>
      </motion.div>

      {/* Right Image / Code Block */}
      <motion.div className="image flex-1" variants={item}>
        <div className="min-h-[60vh] lg:min-h-screen flex items-center justify-center">
          <div className="relative w-full max-w-4xl rounded-2xl border border-indigo-500/30 shadow-[0_0_80px_rgba(124,58,237,0.25)]">
            {/* Header Circles */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-indigo-500/30">
              <span className="w-4 h-4 rounded-full bg-red-600" />
              <span className="w-4 h-4 rounded-full bg-gray-700" />
              <span className="w-4 h-4 rounded-full bg-green-500" />
            </div>

            {/* Code block */}
            <pre className="p-6 text-sm sm:text-base lg:text-[17px] text-wrap">
              <code>
                <span className="text-pink-500">const</span>{" "}
                <span className="text-white">coder</span>{" "}
                <span className="text-pink-500">=</span>{" "}
                <span className="text-gray-400">{"{"}</span>
                {"\n"}
                <span className="ml-6 text-white">name</span>
                <span className="text-gray-400">:</span>{" "}
                <span className="text-yellow-400">'Tonmoy'</span>
                <span className="text-gray-400">,</span>
                {"\n"}
                <span className="ml-6 text-white">skills</span>
                <span className="text-gray-400">:</span>
                <span className="text-gray-400"> [</span>
                <span className="text-yellow-400">'React'</span>
                <span className="text-gray-400">, </span>
                <span className="text-yellow-400">'NodeJS'</span>
                <span className="text-gray-400">, </span>
                <span className="text-yellow-400">'JavaScript'</span>
                <span className="text-gray-400">, </span>
                {"\n"}
                <span className="ml-16 text-yellow-400">'Express'</span>
                <span className="text-gray-400">, </span>
                <span className="text-yellow-400">'NestJS'</span>
                <span className="text-gray-400">, </span>
                <span className="text-yellow-400">'MySql'</span>
                <span className="text-gray-400">, </span>
                <span className="text-yellow-400">'MongoDB'</span>
                <span className="text-gray-400">,</span>
                {"\n"}
                <span className="ml-16 text-yellow-400">'Docker'</span>
                <span className="text-gray-400">, </span>
                <span className="text-yellow-400">'AWS'</span>
                <span className="text-gray-400">],</span>
                {"\n"}
                <span className="ml-6 text-white">hardWorker</span>
                <span className="text-gray-400">:</span>{" "}
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
                {"\n"}
                <span className="ml-6 text-white">quickLearner</span>
                <span className="text-gray-400">:</span>{" "}
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
                {"\n"}
                <span className="ml-6 text-white">problemSolver</span>
                <span className="text-gray-400">:</span>{" "}
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
                {"\n"}
                <span className="ml-6 text-green-400">hireable</span>
                <span className="text-gray-400">:</span>{" "}
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">() {"{"}</span>
                {"\n"}
                <span className="ml-12 text-orange-400">return</span>{" "}
                <span className="text-gray-400">(</span>
                {"\n"}
                <span className="ml-16 text-cyan-400">this</span>
                <span className="text-white">.hardWorker</span> &amp;&amp;
                {"\n"}
                <span className="ml-16 text-cyan-400">this</span>
                <span className="text-white">.problemSolver</span> &amp;&amp;
                {"\n"}
                <span className="ml-16 text-cyan-400">this</span>
                <span className="text-white">.skills.length</span> &gt;= 5{"\n"}
                <span className="ml-12 text-gray-400">);</span>
                {"\n"}
                <span className="ml-6 text-gray-400">{"}"}</span>
                {"\n"}
                <span className="text-gray-400">{"};"}</span>
              </code>
            </pre>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
