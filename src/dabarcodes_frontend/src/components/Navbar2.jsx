// import React, { useState } from "react";
// import { FiSearch, FiBell, FiUser } from "react-icons/fi";
// import { FaBars } from "react-icons/fa";
// import { Link } from "react-router-dom";

// function Navbar2() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="bg-white shadow-lg relative z-10">
//       {/* Top Navbar */}
//       <div className="flex items-center justify-between px-4 py-3 md:px-8">
//         {/* Left section */}
//         <div className="flex items-center space-x-4">
//           <FaBars
//             className="text-2xl cursor-pointer md:hidden"
//             onClick={() => setMenuOpen(!menuOpen)}
//           />
//           <div className="text-xl font-bold text-[#171717]">
//             <img src="/image/image 40.png" alt="" />
//           </div>
//           <nav className="hidden md:flex space-x-4">
//             <a
//               href="/explore-category"
//               className=" hover:text-blue-500 text-[#171717] font-roboto"
//             >
//               Categories
//             </a>
//             <a
//               href="#"
//               className="text-[#171717] hover:text-blue-500 font-roboto"
//             >
//               Promotions
//             </a>
//             <a
//               href="#"
//               className="text-[#171717] hover:text-blue-500 font-roboto"
//             >
//               Linked SKUs
//             </a>
//           </nav>
//         </div>

//         {/* Center search bar */}
//         <div className="hidden md:flex items-center relative w-full max-w-xs mx-auto">
//           <input
//             type="text"
//             className="w-full pr-10 pl-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//             placeholder="Search"
//           />
//           <FiSearch className="absolute right-3 text-gray-500" />
//         </div>

//         {/* Right section */}
//         <div className="flex items-center space-x-4">
//           <div className="hidden md:flex items-center space-x-1 text-[#171717]">
//             <span className="text-xs font-roboto">36/95</span>
//             <div className="w-8 h-8 rounded-full ">
//               <img className="rounded-full" src="/image/icon9.png" alt="" />
//             </div>
//           </div>
//           <FiBell className="text-2xl cursor-pointer" />
//           <FiUser className="text-2xl cursor-pointer" />
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 px-4 py-3 flex flex-col space-y-2 z-20">
//           <a
//             href="#"
//             className="text-[#171717] hover:text-blue-500 font-roboto"
//           >
//             Categories
//           </a>
//           <a
//             href="#"
//             className="text-[#171717] hover:text-blue-500 font-roboto"
//           >
//             Promotions
//           </a>
//           <a
//             href="#"
//             className="text-[#171717] hover:text-blue-500 font-roboto"
//           >
//             Linked SKUs
//           </a>
//           <div className="relative mt-2">
//             <input
//               type="text"
//               className="w-full pr-10 pl-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//               placeholder="Search"
//             />
//             <FiSearch className="absolute right-3 top-3 font-roboto" />
//           </div>
//         </div>
//       )}

//       <div className="bg-blue-500 text-white text-right py-2 pr-4 font-roboto">
//         How to use daBarcodes
//       </div>

//       <div className="px-4 py-2 text-sm text-gray-600 font-roboto">
//         <Link to="/" className="hover:underline">
//           Home
//         </Link>{" "}
//         /
//         <Link to="/homepage2" className=" hover:underline">
//           SKU
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Navbar2;
import React, { useState, useEffect } from "react";
import { FiSearch, FiBell, FiUser } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md"; 
import BreadCrumb from "./BreadCrumbs";

function Navbar2() {
  const [menuOpen, setMenuOpen] = useState(false);

  const countries = [
    { name: "United States", flag: "https://flagcdn.com/w40/us.png" },
    { name: "United Kingdom", flag: "https://flagcdn.com/w40/gb.png" },
    { name: "France", flag: "https://flagcdn.com/w40/fr.png" },
    { name: "India", flag: "https://flagcdn.com/w40/in.png" },
  ];

  // State to track the selected country
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  // State to control the dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Handle dropdown selection
  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setDropdownOpen(false); // Close dropdown after selection
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const closeDropdown = (e) => {
      if (dropdownOpen && !e.target.closest(".dropdown")) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, [dropdownOpen]);
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
            <Link
              to="/catergories"
              className="hover:text-blue-500 text-[#171717] font-roboto"
            >
              Categories
            </Link>
            <Link
              to="/explore-brands"
              className="text-[#171717] hover:text-blue-500 font-roboto"
            >
              Brands
            </Link>
            <Link
              to="/my-sku"
              className="text-[#171717] hover:text-blue-500 font-roboto"
            >
              Linked SKUs
            </Link>
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
          <div className="w-8 h-8 rounded-full ">
              <img className="rounded-full" src="/image/token.png" alt="" />
            </div>
            <span className="text-xs font-roboto">3/5</span>
            
          </div>
          <FiBell className="text-2xl cursor-pointer" />
          <FiUser className="text-2xl cursor-pointer" />
          {/* Country Select Dropdown */}
          <div className="relative dropdown">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-1 text-gray-700"
            >
              {/* Selected Flag */}
              <img
                src={selectedCountry.flag}
                alt={selectedCountry.name}
                className="w-6 h-6 rounded-full"
              />
              <MdKeyboardArrowDown size={20} className="text-gray-500" />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <ul className="absolute mt-2 bg-white border rounded-md shadow-lg right-0 w-40 z-10">
                {countries.map((country) => (
                  <li
                    key={country.name}
                    className="flex items-center space-x-2 px-2 py-1 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleCountryChange(country)}
                  >
                    <img
                      src={country.flag}
                      alt={country.name}
                      className="w-5 h-5 rounded-full"
                    />
                    <span>{country.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 px-4 py-3 flex flex-col space-y-2 z-20">
          <Link
            to="/catergories"
            className="text-[#171717] hover:text-blue-500 font-roboto"
          >
            Categories
          </Link>
          <Link
            to="/explore-brands"
            className="text-[#171717] hover:text-blue-500 font-roboto"
          >
            Brands
          </Link>
          <Link
            to="/my-sku"
            className="text-[#171717] hover:text-blue-500 font-roboto"
          >
            Linked SKUs
          </Link>
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

      <div className="bg-blue-500 text-white text-right py-2 pr-4 font-roboto flex justify-end">
      {/* <p className="mr-8">Store near me</p> */}
      <Link to="/retailer-near" className="mr-8">
  Store near me
</Link>
      <p> How to use daBarcodes</p>
      </div>
{/* 
      <div className="px-4 py-2 text-sm text-gray-600 font-roboto">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        /
        <Link to="/homepage" className=" hover:underline">
          SKU
            
        </Link>
        <BreadCrumb/>
      </div> */}
      <BreadCrumb/>
    </div>
  );
}

export default Navbar2;
