import React, { useState, useEffect } from "react";
import { FiSearch, FiBell, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import CountryDropdown from "../NewHomePageCustomer/Modals/CountryDropdown";

function TopNavbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState({
    flag: "https://flagcdn.com/in.svg",
  });

  useEffect(() => {
    const closeDropdown = (e) => {
      if (openDropdown && !e.target.closest(".dropdown")) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, [openDropdown]);

  const toggleDropdown = (type) => {
    setOpenDropdown(openDropdown === type ? null : type);
  };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  return (
    <>
      <div className="bg-white shadow-md relative z-10">
        <div className="flex items-center justify-between px-4 py-3 md:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/image/image 40.png" alt="Logo" className="block" />
          </div>

          {/* Right-aligned content */}
          <div className="flex items-center space-x-6">
            {/* Search bar (remains right-aligned) */}
            <div className="relative hidden md:block">
              <input
                type="text"
                className="w-full pr-10 pl-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Search"
              />
              <FiSearch className="absolute right-3 top-3 text-gray-500" />
            </div>

            {/* Notification, Profile, Country Dropdown for desktop */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="w-8 h-8 rounded-full">
                <img
                  className="rounded-full"
                  src="/image/token.png"
                  alt="Token"
                />
              </div>
              <span className="text-xs font-roboto">3/5</span>
              <div className="relative">
                <div className="cursor-pointer flex items-center">
                  <FiChevronDown className="text-xl" />
                </div>
              </div>

              <Link to="/supplier/notifications" title="Notifications">
                <FiBell className="text-3xl cursor-pointer" />
              </Link>

              <div className="relative dropdown">
                {/* <button
                  onClick={() => toggleDropdown("profile")}
                  className="flex items-center space-x-1 text-gray-700"
                >
                  <FiUser className="text-2xl cursor-pointer" />
                </button> */}
                <Link to="/supplier/profile-data">
                  <button
                    onClick={() => toggleDropdown("profile")}
                    className="flex items-center space-x-1 text-gray-700"
                  >
                    <FiUser className="text-2xl cursor-pointer" />
                  </button>
                </Link>
              </div>

              {/* Country Select Dropdown */}
              <div className="p-4">
                <CountryDropdown
                  selectedCountry={selectedCountry}
                  onCountryChange={handleCountryChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Footer for Notification, Profile, Country Dropdown */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 flex justify-around items-center">
        <Link to="/supplier/notifications" title="Notifications">
          <FiBell className="text-2xl cursor-pointer" />
        </Link>

        <Link to="/supplier/profile-data">
          <button
            onClick={() => toggleDropdown("profile")}
            className="flex items-center space-x-1 text-gray-700"
          >
            <FiUser className="text-2xl cursor-pointer" />
          </button>
        </Link>

        <CountryDropdown
          selectedCountry={selectedCountry}
          onCountryChange={handleCountryChange}
        />
      </div>
    </>
  );
}

export default TopNavbar;
