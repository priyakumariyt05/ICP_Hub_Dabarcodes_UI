import React from "react";
import { NavLink, Route, Routes, Navigate } from "react-router-dom";

import LeftSidebar from "./LeftSidebar";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";

import AllSku from "./SKU/AllSku";
import LinkedSku from "./SKU/LinkedSku";
import FloatingSku from "./SKU/FloatingSku";
import WishlistSku from "./SKU/WislhlistSku";
import { useState } from "react";

import { FaSearch } from "react-icons/fa";
import UnlinkedSku from "./SKU/UnlinkedSku";

const MySku = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Navbar2 />
      <div className="flex flex-col md:flex-row min-h-screen p-6">
        <LeftSidebar />
        <main className="flex-1 p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-4 md:mb-8">
            <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-0">
              My SKUs
            </h1>

            {/* Responsive Search Input */}
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full sm:w-auto p-2  rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
          {/*  Second Navbar */}
          <div>
            <div className="flex flex-wrap items-start space-x-4 border border-gray-300 rounded-xl mb-4">
              <NavLink
                to="all-sku"
                className={({ isActive }) =>
                  `p-4 rounded-md text-center flex-shrink-0 w-full sm:w-auto ${
                    isActive ? "font-bold" : "font-medium"
                  }`
                }
              >
                <p className="text-medium font-roboto">All SKU</p>
              </NavLink>
              <NavLink
                to="linked-sku"
                className={({ isActive }) =>
                  `p-4 rounded-md text-center flex-shrink-0 w-full sm:w-auto ${
                    isActive ? "font-bold" : "font-medium"
                  }`
                }
              >
                <p className="text-medium font-roboto">Linked SKU</p>
              </NavLink>
              <NavLink
                to="floating-sku"
                className={({ isActive }) =>
                  `p-4 rounded-md text-center flex-shrink-0 w-full sm:w-auto ${
                    isActive ? "font-bold" : "font-medium"
                  }`
                }
              >
                <p className="text-medium font-roboto">Floating SKU</p>
              </NavLink>
              <NavLink
                to="sku-wishlist"
                className={({ isActive }) =>
                  `p-4 rounded-md text-center flex-shrink-0 w-full sm:w-auto ${
                    isActive ? "font-bold" : "font-medium"
                  }`
                }
              >
                <p className="text-medium font-roboto">SKUs Wishlist</p>
              </NavLink>
              <NavLink
                to="unlinked-sku"
                className={({ isActive }) =>
                  `p-4 rounded-md text-center flex-shrink-0 w-full sm:w-auto ${
                    isActive ? "font-bold" : "font-medium"
                  }`
                }
              >
                <p className="text-medium font-roboto">Unlinked SKUs</p>
              </NavLink>
            </div>

            <Routes>
              <Route path="/" element={<Navigate to="all-sku" />} />
              <Route path="all-sku" element={<AllSku />} />
              <Route path="linked-sku" element={<LinkedSku />} />
              <Route path="floating-sku" element={<FloatingSku />} />
              <Route path="sku-wishlist" element={<WishlistSku />} />
              <Route path="unlinked-sku" element={<UnlinkedSku />} />
            </Routes>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default MySku;
