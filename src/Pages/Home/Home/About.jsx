"use client";

import React from "react";
import { motion } from "framer-motion";
import hero from "../../../assets/WhatsApp Image 2026-01-11 at 21.57.49.jpeg";


const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="px-4 lg:px-20 py-12 relative z-10"
    >
      <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24 relative">
        
        {/* Text */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1 text-center lg:text-left"
        >
          <h2 className="text-[#15F2B2] text-2xl mb-5 font-semibold tracking-wide">
            Who I am?
          </h2>
          <p className="text-gray-300 text-justify leading-relaxed text-base sm:text-lg">
            My name is TONMOY BISWAS, a passionate front-end developer who loves exploring new
            technologies and building modern web experiences. I thrive on problem-solving, enjoy
            working with JavaScript frameworks, and am always eager to learn and improve.
            I am available for challenging opportunities that match my skills and passion.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center lg:justify-end relative group"
        >
          <motion.img
            src={hero}
            alt="Hero"
            whileHover={{ y: -15, scale: 1.07, rotate: 2 }}
            transition={{ type: "spring", stiffness: 220 }}
            className="
              h-80 w-80
              object-cover
              rounded-3xl
              filter grayscale
              transition-all duration-500
              hover:grayscale-0
              hover:shadow-2xl
              hover:shadow-indigo-500/50
            "
          />

          {/* Vertical ABOUT ME */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="absolute right-[-50px] top-1/2 -translate-y-1/2 flex flex-col items-center gap-3"
          >
            {/* Animated Gradient Line */}
            <div className="h-48 w-[3px] bg-gradient-to-b from-purple-400 via-blue-400 to-pink-400 animate-pulse"></div>
            
            <span className="text-white text-xl font-bold tracking-wider rotate-90 origin-left bg-clip-text text-transparent bg-gradient-to-b from-purple-400 via-blue-400 to-pink-400">
              ABOUT ME
            </span>
          </motion.div>
        </motion.div>
      </div>

      
    </motion.div>
  );
};

export default About;