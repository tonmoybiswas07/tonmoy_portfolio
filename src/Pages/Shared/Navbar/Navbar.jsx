import React, { useState } from 'react';
import { FaCode, FaGraduationCap, FaHome, FaLaptopCode } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { PiShoppingBagOpenFill } from 'react-icons/pi';
import { NavLink } from 'react-router';

const Navbar = () => {
  const [activeLabel, setActiveLabel] = useState('Home');

  const navItems = [
    { label: 'Home', icon: <FaHome /> },
    { label: 'Skills', icon: <FaCode /> },
    { label: 'Education', icon: <FaGraduationCap /> },
    { label: 'Experience', icon: <PiShoppingBagOpenFill /> },
    { label: 'Projects', icon: <FaLaptopCode /> },
    { label: 'Contact', icon: <IoMdMail /> },
  ];

  return (
    <header
      className="
        fixed bottom-4 left-1/2 -translate-x-1/2
        z-50 flex justify-center
        w-full
      "
    >
      <div className="p-[2px] rounded-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500">
        <div className="bg-gray-900/90 rounded-full px-6 py-3">

          {/* Mobile active text */}
          <div className="md:hidden text-center text-sm text-white mb-2">
            {activeLabel}
          </div>

          <nav>
            <ul className="flex items-center justify-center gap-6 md:gap-10 text-lg text-white">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  onClick={() => setActiveLabel(item.label)}
                  className="flex flex-col md:flex-row items-center gap-1 md:gap-2"
                >
                  <span className="text-xl">{item.icon}</span>
                  <li className="hidden md:block text-sm md:text-lg">
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
