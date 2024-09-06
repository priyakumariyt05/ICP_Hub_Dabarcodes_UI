// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// const Sidebar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <>
//       {/* Toggle Button */}
//       <button
//         onClick={toggleSidebar}
//         className="fixed top-4 left-4 z-50 p-2 bg-gray-700 text-white rounded-md shadow-md md:hidden"
//       >
//         {isSidebarOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`bg-gray-100 h-full shadow-lg flex flex-col border-r border-gray-300 fixed top-0 left-0 transform ${
//           isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         } transition-transform duration-300 ease-in-out w-64 md:translate-x-0 md:w-64 z-40`}
//       >
//         <div className="flex flex-col flex-grow">
//           {/* Logo */}
//           <div className="p-6 flex items-center space-x-4">
//             <img src="/image/image 40.png" alt="logo" />
//           </div>

//           {/* Dashboard */}
//           <div className="p-6 flex items-center space-x-4">
//             <img src="/image/icon1.png" alt="dashboard" />
//             <h2 className="text-2xl font-semibold text-gray-700">Dashboard</h2>
//           </div>

//           {/* Sidebar Menu Items */}
//           <ul className="space-y-4 pl-6">
//             <li className="flex items-center space-x-4 text-sm">
//               <img src="/image/icon2.png" alt="promotion" />
//               <span className="text-gray-700">Promotion Management</span>
//             </li>
//             <li className="flex items-center space-x-4 text-sm">
//               <img src="/image/icon3.png" alt="sku" />
//               <span className="text-gray-700">SKU Management</span>
//             </li>
//             <li className="flex items-center space-x-4 text-sm">
//               <img src="/image/icon4.png" alt="token" />
//               <span className="text-gray-700">Token Management</span>
//             </li>
//             <li className="flex items-center space-x-4 text-sm">
//               <img src="/image/icon5.png" alt="analytics" />
//               <span className="text-gray-700">Analytics and Report</span>
//             </li>
//             <li className="flex items-center space-x-4 text-sm">
//               <img src="/image/icon6.png" alt="customer" />
//               <span className="text-gray-700">Customer Engagement</span>
//             </li>
//           </ul>
//         </div>

//         <div className="md:flex flex-col hidden">
//           <ul className="space-y-2 p-6">
//             <li className="flex items-center space-x-4 text-blue-600 bg-blue-50 rounded-lg p-3 text-sm">
//               <img src="/image/icon8.png" alt="notifications" />
//               <span className="text-blue-600">Notifications</span>
//             </li>
//             <li className="flex items-center space-x-4 text-gray-600 text-sm">
//               <img src="/image/icon6.png" alt="settings" />
//               <span className="text-gray-700">Settings</span>
//             </li>
//           </ul>
//           {/* <div className="p-6 flex items-center space-x-4">
//             <img src="/image/icon9.png" alt="user" />
//             <span className="text-gray-800 font-semibold text-sm">Frankie Sullivan</span>
            
//           </div> */}
//           <div className=" flex flex-col items-center border border-gray-300 ">
//   <div className="flex items-center space-x-4 ">
//     <img src="/image/icon9.png" alt="user" />
//     <span className="text-gray-800 font-semibold text-sm">Frankie Sullivan</span>
//   </div>
//   <span className="text-gray-800 font-medium text-sm">@gmail.com</span>
// </div>

//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { Link, useLocation } from 'react-router-dom';

// const Sidebar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const location = useLocation(); // Get the current path to determine active page

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   // Helper function to check if the current path matches
//   const isActive = (path) => location.pathname === path;

//   return (
//     <>
//       {/* Toggle Button */}
//       <button
//         onClick={toggleSidebar}
//         className="fixed top-4 left-4 z-50 p-2 bg-gray-700 text-white rounded-md shadow-md md:hidden"
//       >
//         {isSidebarOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`bg-gray-100 h-full shadow-lg flex flex-col border-r border-gray-300 fixed top-0 left-0 transform ${
//           isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         } transition-transform duration-300 ease-in-out w-64 md:translate-x-0 md:w-64 z-40`}
//       >
//         <div className="flex flex-col flex-grow">
//           {/* Logo */}
//           <div className="p-6 flex items-center space-x-4">
//             <img src="/image/image 40.png" alt="logo" />
//           </div>

//           {/* Dashboard */}
//           <div className="p-6 flex items-center space-x-4">
//             <img src="/image/icon1.png" alt="dashboard" />
//             <h2 className="text-2xl font-semibold text-gray-700">Dashboard</h2>
//           </div>

//           {/* Sidebar Menu Items */}
//           <ul className="space-y-4 pl-6">
//             <li
//               className={`flex items-center space-x-4 text-sm p-2 rounded-lg ${
//                 isActive('/promotion-management') ? 'bg-blue-100 text-blue-600' : 'text-gray-700'
//               }`}
//             >
//               <img src="/image/icon2.png" alt="promotion" />
//               <Link to="/promotion-management">Promotion Management</Link>
//             </li>
//             <li
//               className={`flex items-center space-x-4 text-sm p-2 rounded-lg ${
//                 isActive('/sku-management') ? 'bg-blue-100 text-blue-600' : 'text-gray-700'
//               }`}
//             >
//               <img src="/image/icon3.png" alt="sku" />
//               <Link to="/sku-management">SKU Management</Link>
//             </li>
//             <li
//               className={`flex items-center space-x-4 text-sm p-2 rounded-lg ${
//                 isActive('/token-management') ? 'bg-blue-100 text-blue-600' : 'text-gray-700'
//               }`}
//             >
//               <img src="/image/icon4.png" alt="token" />
//               <Link to="/token-management">Token Management</Link>
//             </li>
//             <li
//               className={`flex items-center space-x-4 text-sm p-2 rounded-lg ${
//                 isActive('/analytics-report') ? 'bg-blue-100 text-blue-600' : 'text-gray-700'
//               }`}
//             >
//               <img src="/image/icon5.png" alt="analytics" />
//               <Link to="/analytics-report">Analytics and Report</Link>
//             </li>
//             <li
//               className={`flex items-center space-x-4 text-sm p-2 rounded-lg ${
//                 isActive('/customer-engagement') ? 'bg-blue-100 text-blue-600' : 'text-gray-700'
//               }`}
//             >
//               <img src="/image/icon6.png" alt="customer" />
//               <Link to="/customer-engagement">Customer Engagement</Link>
//             </li>
//           </ul>
//         </div>

//         <div className="md:flex flex-col hidden">
//           <ul className="space-y-2 p-6">
//             <li className="flex items-center space-x-4 text-blue-600 bg-blue-50 rounded-lg p-3 text-sm relative">
//               <img src="/image/icon8.png" alt="notifications" />
//               <span className="text-blue-600">Notifications</span>
//               <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full border border-white"></span>
//             </li>
//             <li className="flex items-center space-x-4 text-gray-600 text-sm">
//               <img src="/image/icon6.png" alt="settings" />
//               <span className="text-gray-700">Settings</span>
//             </li>
//           </ul>
//           {/* User Info */}
//           <div className="p-6 flex flex-col items-center border border-gray-300">
//             <div className="flex items-center space-x-4">
//               <img src="/image/icon9.png" alt="user" />
//               <span className="text-gray-800 font-semibold text-sm">Frankie Sullivan</span>
//             </div>
//             <span className="text-gray-800 font-medium text-sm">@gmail.com</span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation(); // Get the current path to determine active page

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Helper function to check if the current path matches
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-gray-700 text-white rounded-md shadow-md md:hidden"
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div
        className={`bg-gray-100 h-full shadow-lg flex flex-col border-r border-gray-300 fixed top-0 left-0 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out w-64 md:translate-x-0 md:w-64 z-40`}
      >
        <div className="flex flex-col flex-grow">
          {/* Logo */}
          <div className="p-6 flex items-center space-x-4">
            <img src="/image/image 40.png" alt="logo" />
          </div>

          {/* Dashboard */}
          <div className="p-6 flex items-center space-x-4">
            <img src="/image/icon1.png" alt="dashboard" />
            <h2 className="text-2xl font-semibold text-gray-700">Dashboard</h2>
          </div>

          {/* Sidebar Menu Items */}
          <ul className="space-y-4 pl-6">
            <li
              className={`flex items-center space-x-4 text-sm p-2 rounded-lg ${
                isActive('/promotion-management') ? 'bg-blue-100 text-blue-600' : 'text-gray-700'
              }`}
            >
              <img src="/image/icon2.png" alt="promotion" />
              <Link to="/promotion-management">Promotion Management</Link>
            </li>
            <li
              className={`flex items-center space-x-4 text-sm p-2 rounded-lg ${
                isActive('/sku-management') ? 'bg-blue-100 text-blue-600' : 'text-gray-700'
              }`}
            >
              <img src="/image/icon3.png" alt="sku" />
              <Link to="/sku-management">SKU Management</Link>
            </li>
            <li
              className={`flex items-center space-x-4 text-sm p-2 rounded-lg ${
                isActive('/token-management') ? 'bg-blue-100 text-blue-600' : 'text-gray-700'
              }`}
            >
              <img src="/image/icon4.png" alt="token" />
              <Link to="/token-management">Token Management</Link>
            </li>
            <li
              className={`flex items-center space-x-4 text-sm p-2 rounded-lg ${
                isActive('/analytics-report') ? 'bg-blue-100 text-blue-600' : 'text-gray-700'
              }`}
            >
              <img src="/image/icon5.png" alt="analytics" />
              <Link to="/analytics-report">Analytics and Report</Link>
            </li>
            <li
              className={`flex items-center space-x-4 text-sm p-2 rounded-lg ${
                isActive('/customer-engagement') ? 'bg-blue-100 text-blue-600' : 'text-gray-700'
              }`}
            >
              <img src="/image/icon6.png" alt="customer" />
              <Link to="/customer-engagement">Customer Engagement</Link>
            </li>
          </ul>
        </div>

        <div className="md:flex flex-col hidden">
          <ul className="space-y-2 p-6">
            <li className="flex items-center space-x-4 text-blue-600 bg-blue-50 rounded-lg p-3 text-sm relative">
              <Link to="/notifications" className="flex items-center space-x-4 w-full">
                <img src="/image/icon8.png" alt="notifications" />
                <span className="text-blue-600">Notifications</span>
                <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full border border-white"></span>
              </Link>
            </li>
            <li className="flex items-center space-x-4 text-gray-600 text-sm">
              <img src="/image/icon6.png" alt="settings" />
              <span className="text-gray-700">Settings</span>
            </li>
          </ul>
          {/* User Info */}
          <div className="p-6 flex flex-col items-center border border-gray-300">
            <div className="flex items-center space-x-4">
              <img src="/image/icon9.png" alt="user" />
              <span className="text-gray-800 font-semibold text-sm">Frankie Sullivan</span>
            </div>
            <span className="text-gray-800 font-medium text-sm">@gmail.com</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
