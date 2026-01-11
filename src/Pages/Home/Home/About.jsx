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
      className="px-4 lg:px-20 py-12"
    >
      {/* Header */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center items-center w-56 rounded-md mx-auto bg-[#1A1444] text-center px-5 py-3"
      >
        <h2 className="text-white text-3xl font-bold">ABOUT ME</h2>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 lg:mx-20 my-10">

        {/* Text */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 text-center lg:text-left"
        >
          <h2 className="text-[#15F2B2] text-2xl mb-4">Who I am?</h2>
          <p className="text-gray-300 text-justify">
            My name is TONMOY BISWAS. I am a professional and enthusiastic programmer in my daily life.
            I am a quick learner with a self-learning attitude. I love to learn and explore new technologies
            and am passionate about problem-solving. I love almost all the stacks of web application development
            and love to make the web more open to the world. My core skill is based on JavaScript and I love
            to do most of the things using JavaScript. I am available for any kind of job opportunity that suits
            my skills and interests.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <motion.img
            src={hero}
            alt="Hero"
            whileHover={{ y: -12, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="
              h-72 w-72
              object-cover
              rounded-xl
              filter grayscale
              transition-all duration-500
              hover:grayscale-0
              hover:shadow-2xl
            "
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
