"use client";
import logo from "@/app/assets/Logo.png";
import Image from "next/image";
import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="w-full bg-[#043873] py-4 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <Image src={logo} alt="logo" width={191} height={34} />
        </div>

        <div className="block lg:hidden">
          <button className="text-white p-2" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`w-full lg:flex lg:w-auto lg:items-center justify-between gap-16 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 text-[18px] font-semibold text-white mt-4 lg:mt-0 ">
            <li>
              <a href="#" className="block hover:text-[#FFE492]">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-[#FFE492]">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-[#FFE492]">
                Resources
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-[#FFE492]">
                Contact
              </a>
            </li>
          </ul>
          <button className="w-full lg:w-auto mt-4 lg:mt-0 py-4 px-10 rounded-lg bg-[#FFE492] text-[#043873] font-semibold hover:bg-[#FFD460] transition-colors">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
