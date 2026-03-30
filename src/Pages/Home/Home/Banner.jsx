import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaFacebook,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { IoMdDownload } from "react-icons/io";
import { Link } from "react-router-dom"; // Fixed import

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

  // Function to handle external links (bypass React Router)
  const handleExternalLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      className="flex flex-col lg:flex-row justify-center items-center gap-20 mx-0 md:mx-10 lg:mx-20 px-4"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Left Content */}
     <motion.div className="content flex-1 z-10" variants={item}>
  <motion.div variants={item}>
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 text-white pt-10">
      Hello,
    </h1>

    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3">
      This is{" "}
      <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400 text-transparent bg-clip-text animate-gradient-x">
        TONMOY
      </span>
      , I'm a
    </h1>

    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 text-white drop-shadow-[0_0_10px_#15F2B2]">
      Professional <span className="text-[#15F2B2] glow-text">FrontEnd</span>
    </h1>

    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 text-white drop-shadow-[0_0_12px_#15F2B2]">
      <span className="text-[#15F2B2] glow-text">Developer</span>.
    </h1>
  </motion.div>

  {/* Social Icons with Neon Hover */}
  <div className="mt-10 flex justify-center lg:justify-start gap-6">
    {[
      { icon: FaGithub, url: "https://github.com/tonmoybiswas07" },
      { icon: FaFacebook, url: "https://web.facebook.com/tonmoy.biswas.7564" },
      { icon: FaTwitterSquare, url: "https://x.com/TonmoyBiswas945" },
      { icon: FaInstagramSquare, url: "https://www.instagram.com/___b.tonmoy/" },
    ].map((social, idx) => {
      const Icon = social.icon;
      return (
        <button
          key={idx}
          onClick={() => handleExternalLink(social.url)}
          className="text-4xl text-[#F6339A] hover:text-[#FF6EC7] hover:scale-125 transition-all duration-300"
        >
          <Icon />
        </button>
      );
    })}
  </div>

  {/* Buttons with Neon Glass */}
  <motion.div
    className="flex flex-col sm:flex-row gap-4 mt-12"
    variants={item}
  >
    <Link to="/contact">
      <button className="relative px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg shadow-purple-500/50 hover:scale-105 transition-all duration-300">
        CONTACT ME <RiContactsFill className="inline ml-2 text-xl" />
      </button>
    </Link>

    <a href="/cv.pdf" download="Tonmoy_Biswas_CV.pdf">
      <button className="relative px-6 py-3 rounded-full font-semibold text-white border border-cyan-400 bg-cyan-400/10 hover:bg-cyan-400 hover:text-black hover:scale-105 transition-all duration-300">
        GET RESUME <IoMdDownload className="inline ml-2 text-xl" />
      </button>
    </a>
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

            {/* Code block - keep as is */}
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
