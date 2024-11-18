import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Asidebar from "../../ReusableComponents/Asidebar";
import RetailerList from "../ReusableData/RetailerList";

const SelectRetailer = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    console.log("Sidebar toggled:", sidebarOpen);
  };



  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8 font-roboto">
  
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 md:hidden z-50 p-2 bg-blue-600 text-white rounded-md"
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <Asidebar sidebarOpen={sidebarOpen} title="Become Our Supplier" />

      {/* Main Content */}
      <div
        className={`bg-white w-full md:w-2/3 p-4 md:p-8 flex flex-col justify-between transition-all duration-300 ease-in-out ${sidebarOpen ? "ml-0" : "md:ml-1/3"
          }`}
      >
   <RetailerList/>
      </div>
    </div>
  );
};

export default SelectRetailer;
