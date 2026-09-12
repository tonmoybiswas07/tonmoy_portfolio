"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaArrowUp,
  FaCode,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const socials = [
    {
      icon: <FaGithub />,
      href: "https://github.com/tonmoybiswas07",
      label: "GitHub",
    },
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/",
      label: "LinkedIn",
    },
    {
      icon: <FaFacebookF />,
      href: "https://web.facebook.com/tonmoy.biswas.7564",
      label: "Facebook",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/___b.tonmoy/",
      label: "Instagram",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative mt-20 overflow-hidden bg-[#020617] text-white">
      {/* =====================================================
          BACKGROUND EFFECTS
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,211,238,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,211,238,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />

        {/* Cyan Glow */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[130px]"
        />

        {/* Purple Glow */}
        <motion.div
          animate={{
            x: [0, -80, 0],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-purple-500/20 blur-[130px]"
        />

        {/* Pink Glow */}
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[140px]" />
      </div>

      {/* =====================================================
          TOP LINE
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 pt-16 sm:px-8 lg:px-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}

        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          
          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Status */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />

              <span className="font-mono text-[9px] tracking-[0.2em] text-emerald-300">
                AVAILABLE FOR WORK
              </span>
            </div>

            {/* Logo */}
            <h2 className="text-5xl font-black tracking-tight sm:text-6xl">
              TONMOY
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                .
              </span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
              Front-End Developer passionate about building modern,
              interactive and meaningful digital experiences.
            </p>

            {/* Developer Tag */}
            <div className="mt-7 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/5 text-cyan-400">
                <FaCode />
              </div>

              <div>
                <p className="font-mono text-[9px] tracking-[0.2em] text-slate-600">
                  CURRENT ROLE
                </p>

                <p className="text-sm font-medium text-slate-300">
                  MERN Stack Developer
                </p>
              </div>
            </div>
          </motion.div>

          {/* NAVIGATION */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="font-mono text-[9px] tracking-[0.25em] text-cyan-400">
                01
              </span>

              <h3 className="text-sm font-semibold tracking-wide text-white">
                Navigation
              </h3>
            </div>

            <ul className="space-y-3">
              {navItems.map((item, index) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    className="group flex items-center gap-3 text-sm text-slate-500 transition-all duration-300 hover:translate-x-1 hover:text-cyan-300"
                  >
                    <span className="font-mono text-[8px] text-slate-700 transition-colors group-hover:text-cyan-500">
                      0{index + 1}
                    </span>

                    <span>{item.name}</span>

                    <span className="h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-5" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SOCIALS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="font-mono text-[9px] tracking-[0.25em] text-purple-400">
                02
              </span>

              <h3 className="text-sm font-semibold tracking-wide text-white">
                Connect
              </h3>
            </div>

            <p className="mb-6 text-sm leading-6 text-slate-500">
              Let's build something great together.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5"
                >
                  <span className="text-sm text-slate-500 transition-colors group-hover:text-cyan-400">
                    {social.icon}
                  </span>

                  <span className="text-xs text-slate-500 transition-colors group-hover:text-slate-200">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            BIG BRAND TEXT
        ===================================================== */}

        <div className="relative border-t border-white/5 py-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <p className="font-mono text-[8px] tracking-[0.5em] text-slate-700">
              BUILD • CREATE • INNOVATE
            </p>

            <h3 className="mt-3 select-none text-[13vw] font-black leading-none tracking-[-0.06em] text-white/[0.025] sm:text-[11vw]">
              TONMOY.
            </h3>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}

        <div className="flex flex-col gap-5 border-t border-white/5 py-6 sm:flex-row sm:items-center sm:justify-between">
          
          <div>
            <p className="font-mono text-[9px] tracking-widest text-slate-600">
              © 2026 TONMOY BISWAS
            </p>

            <p className="mt-1 text-[10px] text-slate-700">
              Designed & built with passion.
            </p>
          </div>

          {/* System Status */}
          <div className="flex items-center gap-5">
            <div className="hidden items-center gap-2 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_7px_rgba(52,211,153,0.8)]" />

              <span className="font-mono text-[8px] tracking-widest text-slate-600">
                SYSTEM ONLINE
              </span>
            </div>

            {/* Back To Top */}
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs text-slate-500 transition-all duration-300 hover:border-cyan-400/30 hover:text-cyan-300"
            >
              <span>Back to top</span>

              <FaArrowUp className="text-[10px] transition-transform duration-300 group-hover:-translate-y-1" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
    </footer>
  );
};

export default Footer;