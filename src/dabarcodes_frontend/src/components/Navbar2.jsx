import React, { useState, useEffect } from "react";
import { FiSearch, FiBell, FiUser, FiHome } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import BreadCrumb from "./BreadCrumbs";
import { useModal } from "../ContextApi/ModalContext";
import CountryDropdown from "../NewHomePageCustomer/Modals/CountryDropdown";
import NotificationsModals from "../NewHomePageCustomer/Modals/NotifcationModals";
import TokensModal from "../NewHomePageCustomer/Modals/TokensModal";
// import CountryDropdown from "../NewHomePageCustomer/Modals/CountryDropdown";

function Navbar2() {
  const { openNotifications, openToken, closeToken, isTokenOpen } = useModal();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Handle dropdown click
  const handleIconClick = () => {
    openToken(); // Open the TokensModal when arrow icon is clicked
  };

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
      <div className="bg-white shadow-lg relative z-10">
        <div className="flex items-center justify-between px-4 py-3 md:px-8">
          {/* Logo on the left */}
          <div className="flex items-center">
            <img src="/image/image 40.png" alt="Logo" className="block" />
          </div>

          {/* FaBars on the right for small devices */}
          <div className="md:hidden">
            <FaBars
              className="text-2xl cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>

          {/* Navigation for medium and larger screens */}
          <nav className="hidden md:flex space-x-4 ml-8">
            <Link
              to="/categories"
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

          {/* Search Input for medium and larger screens */}
          <div className="hidden md:flex items-center relative w-full max-w-xs mx-auto">
            <input
              type="text"
              className="w-full pr-10 pl-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Search"
            />
            <FiSearch className="absolute right-3 text-gray-500" />
          </div>

          {/* Notification and Profile Dropdown */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-[#171717]">
              <div className="w-8 h-8 rounded-full">
                <img
                  className="rounded-full"
                  src="/image/token.png"
                  alt="Token"
                />
              </div>
              <span className="text-xs font-roboto">3/5</span>
              {/* <MdKeyboardArrowDown size={20} className="text-gray-500" /> */}
              <div className="relative">
                <div
                  className="cursor-pointer flex items-center"
                  onClick={handleIconClick}
                >
                  <FiChevronDown className="text-xl" /> {/* Arrow icon */}
                </div>

                {/* Render the Tokens Modal if it's open */}
                {isTokenOpen && <TokensModal />}
              </div>
            </div>

            <FiBell
              className="text-2xl cursor-pointer"
              onClick={openNotifications} // Open the modal on click
              title="Notifications"
            />
            <NotificationsModals />
            <div className="relative dropdown">
              <button
                onClick={() => toggleDropdown("profile")}
                className="flex items-center space-x-1 text-gray-700"
              >
                <FiUser className="text-2xl cursor-pointer" />
              </button>
              {openDropdown === "profile" && (
                <ul className="absolute mt-2 bg-white border rounded-md shadow-lg right-0 w-64 z-10 p-4 text-black font-medium">
                  {/* View Profile */}
                  <li className="flex items-center px-2 py-1  cursor-pointer">
                    <Link to="/profile"> Profile Overview</Link>
                  </li>
                  <li className="flex items-center px-2 py-1  cursor-pointer">
                    <Link to="/subscription-profile">
                      Manage your Subscriptions
                    </Link>
                  </li>
                  <li className="flex items-center px-2 py-1 cursor-pointer">
                    <Link to="/my-sku">View Linked Sku</Link>
                  </li>
                  <li className="flex items-center px-2 py-1 cursor-pointer">
                    <Link to="/utility-tokens">My Utility Token</Link>
                  </li>
                  {/* Settings */}
                  <li className="flex items-center px-2 py-1 cursor-pointer">
                    <Link to="/settings">Saved Sku</Link>
                  </li>
                  {/* Logout */}
                  <li className="flex items-center px-2 py-1  cursor-pointer mt-6 pb-4">
                    <Link
                      to="/logout"
                      className="flex items-center justify-center px-4 py-2 mt-6 mb-4 bg-[#E7F8FE] text-black rounded hover:bg-sky-100 hover:border   border-[#0D90C1] cursor-pointer"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              )}
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

        {/* Bottom Navigation for Small Screens */}
     <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md py-2 md:hidden flex justify-around text-[#0D90C1] border-t border-gray-200 font-roboto">
          <Link to="/home" className="flex flex-col items-center text-xs">
            <FiHome className="text-2xl" />
            <span>Home</span>
          </Link>

          {/* Tokens link with modal trigger */}
          <div
            className="flex flex-col items-center text-xs cursor-pointer"
            onClick={openToken}
          >
            <FiUser className="text-2xl" />
            <span>Tokens</span>
          </div>

          {/* Notifications link with modal trigger */}
          <div
            className="flex flex-col items-center text-xs cursor-pointer"
            onClick={openNotifications}
          >
            <FiBell className="text-2xl" />
            <span>Notifications</span>
          </div>

          {/* Profile link with dropdown trigger */}
          <div
            className="flex flex-col items-center text-xs cursor-pointer"
            onClick={() => toggleDropdown("profile")}
          >
            <FiUser className="text-2xl" />
            <span>Profile</span>
          </div>

          {/* Profile dropdown (conditionally rendered) */}
          {openDropdown === "profile" && (
            <ul className="absolute bottom-16 bg-white border rounded-md shadow-lg w-40 z-10">
              <li className="flex items-center px-2 py-1 hover:bg-gray-100 cursor-pointer">
                <Link to="/profile">Profile Overview</Link>
              </li>
              <li className="flex items-center px-2 py-1 hover:bg-gray-100 cursor-pointer">
                <Link to="/subscription-profile">
                  Manage your Subscriptions
                </Link>
              </li>
              <li className="flex items-center px-2 py-1 hover:bg-gray-100 cursor-pointer">
                <Link to="/my-sku">View Linked Sku</Link>
              </li>
              <li className="flex items-center px-2 py-1 hover:bg-gray-100 cursor-pointer">
                <Link to="/utility-tokens">My Utility Token</Link>
              </li>
              <li className="flex items-center px-2 py-1 hover:bg-gray-100 cursor-pointer">
                <Link to="/settings">Saved Sku</Link>
              </li>
              <li className="flex items-center px-2 py-1 hover:bg-gray-100 cursor-pointer">
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          )}
        </div>

        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 px-4 py-3 flex flex-col space-y-2 z-20">
            <Link
              to="/categories"
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
          </div>
        )}

        <div className="bg-[#0D90C1]  text-white py-2 px-4 font-roboto flex justify-between md:justify-end">
          <Link to="/retailer-near" className="mr-8">
            Store near me
          </Link>
          <p>How to use daBarcodes</p>
        </div>

        <BreadCrumb />
      </div>
    </>
  );
}

export default Navbar2;
