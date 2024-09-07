import React, { useState } from "react";
import { FiSearch, FiBell, FiUser } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar2() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-lg relative z-10">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Left section */}
        <div className="flex items-center space-x-4">
          <FaBars
            className="text-2xl cursor-pointer md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <div className="text-xl font-bold text-[#171717]">
            <img src="/image/image 40.png" alt="" />
          </div>
          <nav className="hidden md:flex space-x-4">
            <a
              href="/explore-category"
              className=" hover:text-blue-500 text-[#171717] font-roboto"
            >
              Categories
            </a>
            <a
              href="#"
              className="text-[#171717] hover:text-blue-500 font-roboto"
            >
              Promotions
            </a>
            <a
              href="#"
              className="text-[#171717] hover:text-blue-500 font-roboto"
            >
              Linked SKUs
            </a>
          </nav>
        </div>

        {/* Center search bar */}
        <div className="hidden md:flex items-center relative w-full max-w-xs mx-auto">
          <input
            type="text"
            className="w-full pr-10 pl-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Search"
          />
          <FiSearch className="absolute right-3 text-gray-500" />
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-1 text-[#171717]">
            <span className="text-xs font-roboto">36/95</span>
            <div className="w-8 h-8 rounded-full ">
              <img className="rounded-full" src="/image/icon9.png" alt="" />
            </div>
          </div>
          <FiBell className="text-2xl cursor-pointer" />
          <FiUser className="text-2xl cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 px-4 py-3 flex flex-col space-y-2 z-20">
          <a
            href="#"
            className="text-[#171717] hover:text-blue-500 font-roboto"
          >
            Categories
          </a>
          <a
            href="#"
            className="text-[#171717] hover:text-blue-500 font-roboto"
          >
            Promotions
          </a>
          <a
            href="#"
            className="text-[#171717] hover:text-blue-500 font-roboto"
          >
            Linked SKUs
          </a>
          <div className="relative mt-2">
            <input
              type="text"
              className="w-full pr-10 pl-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Search"
            />
            <FiSearch className="absolute right-3 top-3 font-roboto" />
          </div>
        </div>
      )}

      <div className="bg-blue-500 text-white text-right py-2 pr-4 font-roboto">
        How to use daBarcodes
      </div>

      <div className="px-4 py-2 text-sm text-gray-600 font-roboto">
        <Link to="/" className="hover:underline">
          Home
        </Link>{" "}
        /
        <Link to="/homepage2" className=" hover:underline">
          SKU
        </Link>
      </div>
    </div>
  );
}

export default Navbar2;
