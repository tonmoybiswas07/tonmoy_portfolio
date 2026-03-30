"use client";

import React, { useState } from "react";
import {
  FaCode,
  FaGraduationCap,
  FaHome,
  FaLaptopCode,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { NavLink } from "react-router-dom"; // make sure react-router-dom

const Navbar = () => {
  const [activeLabel, setActiveLabel] = useState("Home");

  const navItems = [
    { label: "Home", icon: <FaHome />, path: "/" },
    { label: "Skills", icon: <FaCode />, path: "/skills" },
    { label: "Education", icon: <FaGraduationCap />, path: "/education" },
    { label: "Experience", icon: <PiShoppingBagOpenFill />, path: "/experience" },
    { label: "Projects", icon: <FaLaptopCode />, path: "/projects" },
    { label: "Contact", icon: <IoMdMail />, path: "/contact" },
  ];

  return (
    <header className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center">
      <div className="p-[2px] rounded-full bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400">
        <div className="backdrop-blur-xl bg-gray-900/60 rounded-full px-6 py-3 flex flex-col items-center shadow-lg">
          
          {/* Mobile active label */}
          <div className="lg:hidden mb-2 text-white font-medium animate-fade-in">
            {activeLabel}
          </div>

          <nav>
            <ul className="flex items-center justify-center gap-6 md:gap-10 text-white">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  onClick={() => setActiveLabel(item.label)}
                  className={({ isActive }) =>
                    `flex flex-col items-center gap-1 md:gap-2 transition-all duration-300 transform ${
                      isActive ? "scale-110 text-purple-400" : "hover:scale-110 hover:text-purple-300"
                    }`
                  }
                >
                  <span className="text-2xl">{item.icon}</span>
                  <li className="hidden lg:block text-sm md:text-base">
                    {item.label}
                  </li>
                </NavLink>
              ))}
            </ul>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Navbar;