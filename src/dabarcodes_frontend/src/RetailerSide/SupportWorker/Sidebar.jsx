
import React, {useState} from "react";
import {FaHome, FaChartBar, FaStore, FaProductHunt} from "react-icons/fa";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {Link, useLocation} from "react-router-dom";

const Sidebar = () => {
  const [openSection, setOpenSection] = useState(""); // Store the active section
  const location = useLocation(); // Get the current route

  // Toggle function to open/close a section
  const handleToggle = (section) => {
    setOpenSection((prev) => (prev === section ? "" : section)); // Close if same section is clicked
  };

  return (
    <div className="w-full md:w-1/4 p-4 shadow-lg rounded-lg md:h-[calc(100vh-2rem)]">
      <ul className="mt-10">
        {/* Home */}
        <li
          className="px-6 py-3 hover:bg-gray-200 cursor-pointer"
          onClick={() => handleToggle("home")}
        >
          <div className="flex justify-between items-center">
            <div>
              <FaHome className="inline-block mr-2" /> Home
            </div>
            {openSection === "home" ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </div>
        </li>
        {openSection === "home" && (
          <ul className="ml-8">
            <li
              className={`px-6 py-2 hover:bg-gray-200 cursor-pointer ${
                location.pathname === "/support-worker/getting-started"
                  ? "bg-sky-300"
                  : ""
              }`}
            >
              <Link to="/support-worker/getting-started">
                <AiOutlineMinus className="inline-block mr-2" /> Getting Started
              </Link>
            </li>
            <li
              className={`px-6 py-2 hover:bg-gray-200 cursor-pointer ${
                location.pathname === "/support-worker/home-dashboard"
                  ? "bg-sky-300"
                  : ""
              }`}
            >
              <Link to="/support-worker/home-dashboard">
                <AiOutlineMinus className="inline-block mr-2" /> Dashboard
              </Link>
            </li>
          </ul>
        )}

        {/* Store */}
        <li
          className="px-6 py-3 hover:bg-gray-200 cursor-pointer"
          onClick={() => handleToggle("store")}
        >
          <div className="flex justify-between items-center">
            <Link to="/support-worker/store" className="flex items-center">
              <FaStore className="inline-block mr-2" /> Store Management
            </Link>
            {openSection === "store" ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </div>
        </li>

        {/* Product */}
        <li
          className="px-6 py-3 hover:bg-gray-200 cursor-pointer"
          onClick={() => handleToggle("product")}
        >
          <div className="flex justify-between items-center">
            <div>
              <FaProductHunt className="inline-block mr-2" /> Product Management
            </div>
            {openSection === "product" ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </div>
        </li>
        {openSection === "product" && (
          <ul className="ml-8">
            <li
              className={`px-6 py-2 hover:bg-gray-200 cursor-pointer ${
                location.pathname === "/support-worker/all-product"
                  ? "bg-sky-300"
                  : ""
              }`}
            >
              <Link to="/support-worker/all-product">
                <AiOutlineMinus className="inline-block mr-2" /> All Product
              </Link>
            </li>
            <li
              className={`px-6 py-2 hover:bg-gray-200 cursor-pointer ${
                location.pathname === "/support-worker/product-promotion"
                  ? "bg-sky-300"
                  : ""
              }`}
            >
              <Link to="/support-worker/product-promotion">
                <AiOutlineMinus className="inline-block mr-2" /> Product on
                Promotion
              </Link>
            </li>
          </ul>
        )}

        {/* Subscription */}
        <li
          className="px-6 py-3 hover:bg-gray-200 cursor-pointer"
          onClick={() => handleToggle("subscription")}
        >
          <div className="flex justify-between items-center">
            <Link to="/support-worker/plan-pricing" className="flex items-center">
              <FaStore className="inline-block mr-2" /> Subscription Management
            </Link>
            {openSection === "subscription" ? (
              <AiOutlineMinus />
            ) : (
              <AiOutlinePlus />
            )}
          </div>
        </li>

        {/* Reports */}
        <li
          className="px-6 py-3 hover:bg-gray-200 cursor-pointer"
          onClick={() => handleToggle("reports")}
        >
          <div className="flex justify-between items-center">
            <div>
              <FaChartBar className="inline-block mr-2" /> Reports
            </div>
            {openSection === "reports" ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </div>
        </li>
        {openSection === "reports" && (
          <ul className="ml-8">
            <li
              className={`px-6 py-2 hover:bg-gray-200 cursor-pointer ${
                location.pathname === "/support-worker/product-performance"
                  ? "bg-sky-300"
                  : ""
              }`}
            >
              <Link to="/support-worker/product-performance">
                <AiOutlineMinus className="inline-block mr-2" /> Product
                Performance
              </Link>
            </li>
            <li
              className={`px-6 py-2 hover:bg-gray-200 cursor-pointer ${
                location.pathname === "/support-worker/story-broads"
                  ? "bg-sky-300"
                  : ""
              }`}
            >
              <Link to="/support-worker/story-broads">
                <AiOutlineMinus className="inline-block mr-2" /> Story Broads
              </Link>
            </li>
          </ul>
        )}

        {/* Role */}
        <li
          className="px-6 py-3 hover:bg-gray-200 cursor-pointer"
          onClick={() => handleToggle("role")}
        >
          <div className="flex justify-between items-center">
            <Link to="/support-worker/Role" className="flex items-center">
              <FaStore className="inline-block mr-2" /> Role Management
            </Link>
            {openSection === "role" ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </div>
        </li>

        {/* Supplier */}
        <li
          className="px-6 py-3 hover:bg-gray-200 cursor-pointer"
          onClick={() => handleToggle("supplier")}
        >
          <div className="flex justify-between items-center">
            <div>
              <FaStore className="inline-block mr-2" /> Supplier Management
            </div>
            {openSection === "supplier" ? (
              <AiOutlineMinus />
            ) : (
              <AiOutlinePlus />
            )}
          </div>
        </li>
        {openSection === "supplier" && (
          <ul className="ml-8">
            <li
              className={`px-6 py-2 hover:bg-gray-200 cursor-pointer ${
                location.pathname === "/support-worker/supplier-list"
                  ? "bg-sky-300"
                  : ""
              }`}
            >
              <Link to="/support-worker/supplier-list">
                <AiOutlineMinus className="inline-block mr-2" /> Supplier List
              </Link>
            </li>
            <li
              className={`px-6 py-2 hover:bg-gray-200 cursor-pointer ${
                location.pathname === "/support-worker/promotion-request"
                  ? "bg-sky-300"
                  : ""
              }`}
            >
              <Link to="/support-worker/promotion-request">
                <AiOutlineMinus className="inline-block mr-2" /> Promotion
                Request
              </Link>
            </li>
          </ul>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;



// Responive but looks not very well
// import React, {useState} from "react";
// import {FaHome, FaStore, FaBars, FaTimes} from "react-icons/fa";
// import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
// import {Link, useLocation} from "react-router-dom";

// const Sidebar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isHomeOpen, setIsHomeOpen] = useState(false);
//   const [isProductOpen, setIsProductOpen] = useState(false);
//   const [isStoreOpen, setIsStoreOpen] = useState(false);

//   const location = useLocation(); // To get the current route

//   // Toggle sidebar visibility for mobile
//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   // Toggle nested menu items
//   const toggleHome = () => setIsHomeOpen(!isHomeOpen);
//   const toggleProduct = () => setIsProductOpen(!isProductOpen);
//   const toggleStore = () => setIsStoreOpen(!isStoreOpen);

//   return (
//     <div className="relative">
//       {/* Mobile navbar toggle */}
//       <button
//         className="md:hidden text-2xl p-4"
//         onClick={toggleSidebar}
//       >
//         {isSidebarOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Sidebar container */}
//       <div
//         className={`fixed top-20 left-0 w-64 h-full bg-white shadow-lg transform ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0 md:w-1/4 transition-transform duration-300 ease-in-out`}
//       >
//         {/* Sidebar content */}
//         <ul className="mt-10">
//           {/* Home */}
//           <li className={`px-6 py-3 hover:bg-gray-200 cursor-pointer`} onClick={toggleHome}>
//             <div className="flex justify-between items-center">
//               <div>
//                 <FaHome className="inline-block mr-2" /> Home
//               </div>
//               {isHomeOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
//             </div>
//           </li>
//           {isHomeOpen && (
//             <ul className="ml-8">
//               <li
//                 className={`px-6 py-2 hover:bg-gray-200 cursor-pointer ${
//                   location.pathname === "/dashboard/getting-started" ? "bg-sky-300" : ""
//                 }`}
//               >
//                 <Link to="/dashboard/getting-started">
//                   <AiOutlineMinus className="inline-block mr-2" /> Getting Started
//                 </Link>
//               </li>
//               <li
//                 className={`px-6 py-2 hover:bg-gray-200 cursor-pointer ${
//                   location.pathname === "/dashboard/home-dashboard" ? "bg-sky-300" : ""
//                 }`}
//               >
//                 <Link to="/dashboard/home-dashboard">
//                   <AiOutlineMinus className="inline-block mr-2" /> Dashboard
//                 </Link>
//               </li>
//             </ul>
//           )}

//           {/* Store Management */}
//           <li className={`px-6 py-3 hover:bg-gray-200 cursor-pointer`} onClick={toggleStore}>
//             <div className="flex justify-between items-center">
//               <Link to="/dashboard/store" className="flex items-center">
//                 <FaStore className="inline-block mr-2" /> Store Management
//               </Link>
//               {isStoreOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
//             </div>
//           </li>

//           {/* Product Management */}
//           <li className={`px-6 py-3 hover:bg-gray-200 cursor-pointer`} onClick={toggleProduct}>
//             <div className="flex justify-between items-center">
//               <div>
//                 <FaHome className="inline-block mr-2" /> Product Management
//               </div>
//               {isProductOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
//             </div>
//           </li>
//           {isProductOpen && (
//             <ul className="ml-8">
//               <li
//                 className={`px-6 py-2 hover:bg-gray-200 cursor-pointer ${
//                   location.pathname === "/dashboard/all-product" ? "bg-sky-300" : ""
//                 }`}
//               >
//                 <Link to="/dashboard/all-product">
//                   <AiOutlineMinus className="inline-block mr-2" /> All Product
//                 </Link>
//               </li>
//               <li
//                 className={`px-6 py-2 hover:bg-gray-200 cursor-pointer ${
//                   location.pathname === "/dashboard/product-promotion" ? "bg-sky-300" : ""
//                 }`}
//               >
//                 <Link to="/dashboard/product-promotion">
//                   <AiOutlineMinus className="inline-block mr-2" /> Product on Promotion
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;