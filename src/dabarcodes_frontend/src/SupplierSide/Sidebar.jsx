// import React, {useState} from "react";
// import {FaHome, FaChartBar, FaStore, FaProductHunt} from "react-icons/fa";
// import StorefrontIcon from '@mui/icons-material/Storefront';
// import HomeIcon from '@mui/icons-material/Home';
// import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
// import {Link, useLocation} from "react-router-dom";
// import InventoryIcon from '@mui/icons-material/Inventory';
// import { FaRegUser } from "react-icons/fa";
// import { MdEqualizer } from "react-icons/md";

// import { TfiMedall } from "react-icons/tfi";

// const Sidebar = () => {
//   const [openSection, setOpenSection] = useState(""); 
//   const location = useLocation(); 

//   // Toggle function to open/close a section
//   const handleToggle = (section) => {
//     setOpenSection((prev) => (prev === section ? "" : section));
//   };

//   return (
//     <div className="w-full md:w-1/4 p-4 shadow-lg rounded-lg md:h-[calc(100vh-2rem)]">
//       <ul className="mt-10">
//         {/* Home */}
  
//         <li
//           className="px-6 py-3 hover:bg-gray-200 cursor-pointer"
//           onClick={() => handleToggle("home")}
//         >
//           <div className="flex justify-between items-center">
//             <Link to="/supplier/supplier-home" className="flex items-center">
//               <StorefrontIcon className="inline-block mr-2" /> Home
//             </Link>
//             {openSection === "home" ? <AiOutlineMinus /> : <AiOutlinePlus />}
//           </div>
//         </li>
//         {/* Promotion Management */}
//         <li
//           className="px-6 py-3 hover:bg-gray-200 cursor-pointer"
//           onClick={() => handleToggle("promotion-management")}
//         >
//           <div className="flex justify-between items-center">
//             <Link to="/supplier/promotion-management" className="flex items-center">
//               <StorefrontIcon className="inline-block mr-2" /> Promotion Management
//             </Link>
//             {openSection === "promotion-management" ? <AiOutlineMinus /> : <AiOutlinePlus />}
//           </div>
//         </li>

//         {/*Sku managaement */}
//         <li
//           className="px-6 py-3 hover:bg-gray-200 cursor-pointer"
//           onClick={() => handleToggle("sku-management")}
//         >
//           <div className="flex justify-between items-center">
//             <Link to="/supplier/sku-management" className="flex items-center">
//               <StorefrontIcon className="inline-block mr-2" /> SKU Management
//             </Link>
//             {openSection === "sku-management" ? <AiOutlineMinus /> : <AiOutlinePlus />}
//           </div>
//         </li>

//         {/* Botoks Token Management */}
//         <li
//           className="px-6 py-3 hover:bg-gray-200 cursor-pointer"
//           onClick={() => handleToggle("botoks-token-management")}
//         >
//           <div className="flex justify-between items-center">
//             <Link to="/supplier/botoks-token" className="flex items-center">
//               <TfiMedall className="inline-block mr-2" />BOTOKS Token Management
//             </Link>
//             {openSection === "botoks-token-management" ? (
//               <AiOutlineMinus />
//             ) : (
//               <AiOutlinePlus />
//             )}
//           </div>
//         </li>

//         {/* Reports */}
//         <li
//           className="px-6 py-3 hover:bg-gray-200 cursor-pointer"
//           onClick={() => handleToggle("reports")}
//         >
//           <div className="flex justify-between items-center">
//             <Link to="/supplier/reports" className="flex items-center">
//             <MdEqualizer className="inline-block mr-2" /> Reports
//             </Link>
//             {openSection === "reports" ? (
//               <AiOutlineMinus />
//             ) : (
//               <AiOutlinePlus />
//             )}
//           </div>
//         </li>
    
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;


// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
// import { MdEqualizer } from "react-icons/md";
// import { TfiMedall } from "react-icons/tfi";
// import StorefrontIcon from '@mui/icons-material/Storefront';
// import { FaSignOutAlt } from "react-icons/fa";

// const Sidebar = () => {
//   const [openSection, setOpenSection] = useState("");
//   const location = useLocation();

//   const handleToggle = (section) => {
//     setOpenSection((prev) => (prev === section ? "" : section));
//   };

//   return (
//     <div className="w-full md:w-1/4 p-4 shadow-lg rounded-lg md:h-[calc(100vh-2rem)] flex flex-col justify-between">
//       <ul className="mt-10">
//         {/* Home */}
//         <li
//           className={`px-6 py-3 cursor-pointer ${
//             location.pathname === "/supplier/supplier-home" ? "bg-[#E7F8FE]" : "hover:bg-gray-200"
//           }`}
//           onClick={() => handleToggle("home")}
//         >
//           <div className="flex justify-between items-center">
//             <Link to="/supplier/supplier-home" className="flex items-center">
//               <StorefrontIcon className="inline-block mr-2" /> Home
//             </Link>
//             {openSection === "home" ? <AiOutlineMinus /> : <AiOutlinePlus />}
//           </div>
//         </li>

//         {/* Promotion Management */}
//         <li
//           className={`px-6 py-3 cursor-pointer ${
//             location.pathname === "/supplier/promotion-management" ? "bg-[#E7F8FE]" : "hover:bg-gray-200"
//           }`}
//           onClick={() => handleToggle("promotion-management")}
//         >
//           <div className="flex justify-between items-center">
//             <Link to="/supplier/promotion-management" className="flex items-center">
//               <StorefrontIcon className="inline-block mr-2" /> Promotion Management
//             </Link>
//             {openSection === "promotion-management" ? <AiOutlineMinus /> : <AiOutlinePlus />}
//           </div>
//         </li>

//         {/* SKU Management */}
//         <li
//           className={`px-6 py-3 cursor-pointer ${
//             location.pathname === "/supplier/sku-management" ? "bg-[#E7F8FE]" : "hover:bg-gray-200"
//           }`}
//           onClick={() => handleToggle("sku-management")}
//         >
//           <div className="flex justify-between items-center">
//             <Link to="/supplier/sku-management" className="flex items-center">
//               <StorefrontIcon className="inline-block mr-2" /> SKU Management
//             </Link>
//             {openSection === "sku-management" ? <AiOutlineMinus /> : <AiOutlinePlus />}
//           </div>
//         </li>

//         {/*  Token Management */}
//         <li
//           className={`px-6 py-3 cursor-pointer ${
//             location.pathname === "/supplier/subscription-plan" ? "bg-[#E7F8FE]" : "hover:bg-gray-200"
//           }`}
//           onClick={() => handleToggle("subscription-plan")}
//         >
//           <div className="flex justify-between items-center">
//             <Link to="/supplier/subscription-plan" className="flex items-center">
//               <TfiMedall className="inline-block mr-2" /> Token Management
//             </Link>
//             {openSection === "subscription-plan" ? <AiOutlineMinus /> : <AiOutlinePlus />}
//           </div>
//         </li>
//        {/* BOTOKS */}
//        <li
//           className={`px-6 py-3 cursor-pointer ${
//             location.pathname === "/supplier/botok" ? "bg-[#E7F8FE]" : "hover:bg-gray-200"
//           }`}
//           onClick={() => handleToggle("botok")}
//         >
//           <div className="flex justify-between items-center">
//             <Link to="/supplier/botok" className="flex items-center">
//               <TfiMedall className="inline-block mr-2" /> BOTOKS Campaign Activation
//             </Link>
//             {openSection === "botok" ? <AiOutlineMinus /> : <AiOutlinePlus />}
//           </div>
//         </li>
//  {/* Reports */}
//         <li
//           className={`px-6 py-3 cursor-pointer ${
//             location.pathname === "/supplier/report" ? "bg-[#E7F8FE]" : "hover:bg-gray-200"
//           }`}
//           onClick={() => handleToggle("reports")}
//         >
//           <div className="flex justify-between items-center">
//             <Link to="/supplier/report" className="flex items-center">
//               <MdEqualizer className="inline-block mr-2" /> Reports
//             </Link>
//             {openSection === "report" ? <AiOutlineMinus /> : <AiOutlinePlus />}
//           </div>
//         </li>
//       </ul>

//       {/* Logout */}
//       <div className="px-6 py-3 cursor-pointer hover:bg-gray-200 flex items-center">
//         <FaSignOutAlt className="inline-block mr-2" />
//         <span>Logout</span>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdEqualizer } from "react-icons/md";
import { TfiMedall } from "react-icons/tfi";
import { FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import StorefrontIcon from "@mui/icons-material/Storefront";

const Sidebar = () => {
  const [openSection, setOpenSection] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const handleToggle = (section) => {
    setOpenSection((prev) => (prev === section ? "" : section));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="text-xl p-2 bg-gray-200 rounded-full shadow-md"
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-40 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:h-[calc(100vh-2rem)] w-64 p-4`}
      >
        <ul className="mt-10">
          {/* Home */}
          <li
            className={`px-6 py-3 cursor-pointer ${
              location.pathname === "/supplier/supplier-home"
                ? "bg-[#E7F8FE]"
                : "hover:bg-gray-200"
            }`}
            onClick={() => handleToggle("home")}
          >
            <div className="flex justify-between items-center">
              <Link to="/supplier/supplier-home" className="flex items-center">
                <StorefrontIcon className="inline-block mr-2" /> Home
              </Link>
              {openSection === "home" ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
          </li>

          {/* Promotion Management */}
          <li
            className={`px-6 py-3 cursor-pointer ${
              location.pathname === "/supplier/promotion-management"
                ? "bg-[#E7F8FE]"
                : "hover:bg-gray-200"
            }`}
            onClick={() => handleToggle("promotion-management")}
          >
            <div className="flex justify-between items-center">
              <Link
                to="/supplier/promotion-management"
                className="flex items-center"
              >
                <StorefrontIcon className="inline-block mr-2" /> Promotion
                Management
              </Link>
              {openSection === "promotion-management" ? (
                <AiOutlineMinus />
              ) : (
                <AiOutlinePlus />
              )}
            </div>
          </li>

          {/* SKU Management */}
          <li
            className={`px-6 py-3 cursor-pointer ${
              location.pathname === "/supplier/sku-management"
                ? "bg-[#E7F8FE]"
                : "hover:bg-gray-200"
            }`}
            onClick={() => handleToggle("sku-management")}
          >
            <div className="flex justify-between items-center">
              <Link to="/supplier/sku-management" className="flex items-center">
                <StorefrontIcon className="inline-block mr-2" /> SKU Management
              </Link>
              {openSection === "sku-management" ? (
                <AiOutlineMinus />
              ) : (
                <AiOutlinePlus />
              )}
            </div>
          </li>

          {/* Token Management */}
          <li
            className={`px-6 py-3 cursor-pointer ${
              location.pathname === "/supplier/subscription-plan"
                ? "bg-[#E7F8FE]"
                : "hover:bg-gray-200"
            }`}
            onClick={() => handleToggle("subscription-plan")}
          >
            <div className="flex justify-between items-center">
              <Link
                to="/supplier/subscription-plan"
                className="flex items-center"
              >
                <TfiMedall className="inline-block mr-2" /> Token Management
              </Link>
              {openSection === "subscription-plan" ? (
                <AiOutlineMinus />
              ) : (
                <AiOutlinePlus />
              )}
            </div>
          </li>

          {/* BOTOKS Campaign Activation */}
          <li
            className={`px-6 py-3 cursor-pointer ${
              location.pathname === "/supplier/botok"
                ? "bg-[#E7F8FE]"
                : "hover:bg-gray-200"
            }`}
            onClick={() => handleToggle("botok")}
          >
            <div className="flex justify-between items-center">
              <Link to="/supplier/botok" className="flex items-center">
                <TfiMedall className="inline-block mr-2" /> BOTOKS Campaign
                Activation
              </Link>
              {openSection === "botok" ? (
                <AiOutlineMinus />
              ) : (
                <AiOutlinePlus />
              )}
            </div>
          </li>

          {/* Reports */}
          <li
            className={`px-6 py-3 cursor-pointer ${
              location.pathname === "/supplier/report"
                ? "bg-[#E7F8FE]"
                : "hover:bg-gray-200"
            }`}
            onClick={() => handleToggle("reports")}
          >
            <div className="flex justify-between items-center">
              <Link to="/supplier/report" className="flex items-center">
                <MdEqualizer className="inline-block mr-2" /> Reports
              </Link>
              {openSection === "report" ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
          </li>
        </ul>

        {/* Logout */}
        <div className="px-6 py-3 cursor-pointer hover:bg-gray-200 flex items-center mt-4">
          <FaSignOutAlt className="inline-block mr-2" />
          <span>Logout</span>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
