"use client";

import React from "react";
import {
  FaCode,
  FaGraduationCap,
  FaHome,
  FaLaptopCode,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const navItems = [
    { label: "Home", icon: <FaHome />, path: "/" },
    { label: "Skills", icon: <FaCode />, path: "/skills" },
    {
      label: "Education",
      icon: <FaGraduationCap />,
      path: "/education",
    },
    {
      label: "Experience",
      icon: <PiShoppingBagOpenFill />,
      path: "/experience",
    },
    {
      label: "Projects",
      icon: <FaLaptopCode />,
      path: "/projects",
    },
    {
      label: "Contact",
      icon: <IoMdMail />,
      path: "/contact",
    },
  ];

  return (
    <>
      {/* =====================================================
          DESKTOP SIDEBAR
      ===================================================== */}

      <header className="fixed left-5 top-1/2 z-50 hidden -translate-y-1/2 md:block">
        <div className="group relative">
          {/* Outer Glow */}
          <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-b from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-70 blur-2xl" />

          {/* Gradient Border */}
          <div className="relative rounded-[24px] bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 p-[1px] shadow-[0_0_35px_rgba(34,211,238,0.12)]">
            <nav className="relative overflow-hidden rounded-[23px] border border-white/10 bg-[#020617]/95 px-2 py-3 backdrop-blur-2xl">
              
              {/* Top Glow */}
              <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

              {/* Logo */}
              <div className="mb-3 flex justify-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-purple-500/10 to-pink-500/10 shadow-[0_0_20px_rgba(34,211,238,0.08)]">
                  <span className="bg-gradient-to-br from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-lg font-black text-transparent">
                    T
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="mx-2 mb-3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* Navigation */}
              <ul className="flex flex-col gap-1.5">
                {navItems.map((item, index) => (
                  <li key={item.label}>
                    <NavLink
                      to={item.path}
                      end={item.path === "/"}
                      className="group/item relative flex items-center"
                    >
                      {({ isActive }) => (
                        <>
                          {/* Active Background */}
                          {isActive && (
                            <motion.div
                              layoutId="side-nav-active"
                              className="absolute inset-0 rounded-xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.08)]"
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30,
                              }}
                            />
                          )}

                          {/* Navigation Button */}
                          <div
                            className={`
                              relative z-10 flex h-11 w-11 items-center
                              justify-center rounded-xl
                              transition-all duration-300
                              ${
                                isActive
                                  ? "text-cyan-400"
                                  : "text-slate-500 group-hover/item:text-white"
                              }
                            `}
                          >
                            <motion.span
                              animate={
                                isActive
                                  ? {
                                      y: [0, -2, 0],
                                    }
                                  : { y: 0 }
                              }
                              transition={{
                                duration: 2,
                                repeat: isActive ? Infinity : 0,
                                ease: "easeInOut",
                              }}
                              className={`
                                text-[19px] transition-all duration-300
                                ${
                                  isActive
                                    ? "drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]"
                                    : "group-hover/item:-translate-y-0.5 group-hover/item:text-cyan-300"
                                }
                              `}
                            >
                              {item.icon}
                            </motion.span>
                          </div>

                          {/* Hover Label */}
                          <div
                            className="
                              pointer-events-none absolute left-[58px]
                              flex translate-x-[-8px] items-center
                              opacity-0 transition-all duration-300
                              group-hover/item:translate-x-0
                              group-hover/item:opacity-100
                            "
                          >
                            <div className="relative whitespace-nowrap rounded-lg border border-white/10 bg-[#020617]/95 px-3 py-2 shadow-xl backdrop-blur-xl">
                              {/* Arrow */}
                              <span className="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-b border-l border-white/10 bg-[#020617]" />

                              <div className="relative flex items-center gap-2">
                                <span className="font-mono text-[9px] text-cyan-400">
                                  0{index + 1}
                                </span>

                                <span className="text-xs font-semibold tracking-wide text-white">
                                  {item.label}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Active Dot */}
                          {isActive && (
                            <motion.span
                              layoutId="side-nav-dot"
                              className="absolute right-0.5 top-1/2 z-20 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)]"
                            />
                          )}

                          {/* Hover Glow */}
                          <div className="absolute inset-0 -z-10 rounded-xl bg-cyan-400/0 blur-xl transition-all duration-300 group-hover/item:bg-cyan-400/10" />
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="mx-2 my-3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* Online Status */}
              <div className="flex items-center justify-center">
                <div className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-400/10 bg-emerald-400/5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  </span>
                </div>
              </div>

              {/* Vertical Text */}
              <div className="mt-3 flex justify-center">
                <span className="font-mono text-[7px] tracking-[0.25em] text-slate-700 [writing-mode:vertical-rl]">
                  NAVIGATION
                </span>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE NAVBAR
      ===================================================== */}

      <header className="fixed bottom-4 left-1/2 z-50 w-full -translate-x-1/2 px-3 md:hidden">
        <div className="mx-auto w-fit">
          {/* Gradient Border */}
          <div className="relative rounded-[22px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-[1px] shadow-[0_0_30px_rgba(34,211,238,0.15)]">
            <nav className="relative rounded-[21px] border border-white/10 bg-[#020617]/95 px-2 py-2 backdrop-blur-2xl">
              
              {/* Top Glow */}
              <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

              <ul className="flex items-center gap-0.5">
                {navItems.map((item, index) => (
                  <li key={item.label}>
                    <NavLink
                      to={item.path}
                      end={item.path === "/"}
                      className="group relative block"
                    >
                      {({ isActive }) => (
                        <div className="relative flex flex-col items-center">
                          {/* Active Background */}
                          {isActive && (
                            <motion.div
                              layoutId="mobile-nav-active"
                              className="absolute inset-0 rounded-xl border border-cyan-400/20 bg-cyan-400/5"
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30,
                              }}
                            />
                          )}

                          {/* Icon */}
                          <div
                            className={`
                              relative z-10 flex h-10 w-10
                              items-center justify-center
                              rounded-xl transition-all duration-300
                              ${
                                isActive
                                  ? "text-cyan-400"
                                  : "text-slate-600 group-hover:text-white"
                              }
                            `}
                          >
                            <motion.span
                              animate={
                                isActive
                                  ? { y: [0, -2, 0] }
                                  : { y: 0 }
                              }
                              transition={{
                                duration: 2,
                                repeat: isActive ? Infinity : 0,
                                ease: "easeInOut",
                              }}
                              className={`
                                text-[17px]
                                ${
                                  isActive
                                    ? "drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]"
                                    : ""
                                }
                              `}
                            >
                              {item.icon}
                            </motion.span>
                          </div>

                          {/* Active Dot */}
                          {isActive && (
                            <motion.span
                              layoutId="mobile-nav-dot"
                              className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,1)]"
                            />
                          )}
                        </div>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;