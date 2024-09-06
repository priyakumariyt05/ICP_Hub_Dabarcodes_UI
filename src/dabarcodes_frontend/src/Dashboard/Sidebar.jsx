// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { Link, useLocation } from 'react-router-dom';

// const Sidebar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const location = useLocation(); 

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

 
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
//           {/* <div className="p-6 flex items-center space-x-4">
//             <img src="/image/icon1.png" alt="dashboard" />
//             <h2 className="text-2xl font-semibold text-gray-700">Dashboard</h2>
//           </div> */}
//           <div className="p-6">
//   <h2
//     className={`flex items-center space-x-4 text-2xl font-semibold ${
//       isActive('/dashboard') ? 'bg-blue-100 text-blue-600' : 'text-gray-700'
//     }`}
//   >
//     <img src="/image/icon1.png" alt="dashboard" />
//     <Link to="/dashboard" className="flex items-center space-x-4">
//       Dashboard
//     </Link>
//   </h2>
// </div>
          

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
//               <Link to="/notifications" className="flex items-center space-x-4 w-full">
//                 <img src="/image/icon8.png" alt="notifications" />
//                 <span className="text-blue-600">Notifications</span>
//                 <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full border border-white"></span>
//               </Link>
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

// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { Link, useLocation } from 'react-router-dom';

// const Sidebar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const location = useLocation();

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const isActive = (path) => location.pathname === path;

//   return (
//     <>
//       {/* Toggle Button */}
//       <button
//         onClick={toggleSidebar}
//         aria-expanded={isSidebarOpen}
//         aria-controls="sidebar"
//         className="fixed top-4 left-4 z-50 p-2 bg-gray-700 text-white rounded-md shadow-md md:hidden"
//       >
//         {isSidebarOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Sidebar */}
//       <div
//         id="sidebar"
//         className={`bg-gray-100 h-full shadow-lg flex flex-col border-r border-gray-300 fixed top-0 left-0 transform ${
//           isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         } transition-transform duration-300 ease-in-out w-64 md:translate-x-0 md:w-64 z-40`}
//       >
//         <div className="flex flex-col flex-grow">
//           {/* Logo */}
//           <div className="p-6 flex items-center space-x-4">
//             <img src="/image/image 40.png" alt="logo" />
//           </div>

//           {/* Sidebar Menu Items */}
//           <ul className="space-y-4 pl-6">
//             <li
//               className={`flex items-center space-x-4 text-sm p-2 rounded-lg ${
//                 isActive('/dashboard') ? 'bg-blue-100 text-blue-600' : 'text-gray-700'
//               }`}
//             >
//               <img src="/image/icon1.png" alt="dashboard" />
//               <Link to="/dashboard">Dashboard</Link>
//             </li>
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

//         {/* Notifications and User Info (Desktop View) */}
//         <div className="md:flex flex-col hidden">
//           <ul className="space-y-2 p-6">
//             <li className="flex items-center space-x-4 text-blue-600 bg-blue-50 rounded-lg p-3 text-sm relative">
//               <Link to="/notifications" className="flex items-center space-x-4 w-full">
//                 <img src="/image/icon8.png" alt="notifications" />
//                 <span className="text-blue-600">Notifications</span>
//                 <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full border border-white"></span>
//               </Link>
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
// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { Link, useLocation } from 'react-router-dom';

// const Sidebar = () => {
//   const [notificationsCount, setNotificationsCount] = useState(3); 
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const location = useLocation();

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const isActive = (path) => location.pathname === path;

//   return (
//     <>
//       {/* Toggle Button */}
//       <button
//         onClick={toggleSidebar}
//         aria-expanded={isSidebarOpen}
//         aria-controls="sidebar"
//         className="fixed top-4 left-4 z-50 p-2 bg-gray-700 text-white rounded-md shadow-md md:hidden"
//       >
//         {isSidebarOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Sidebar */}
//       <div
//         id="sidebar"
//         className={` h-full shadow-lg flex flex-col bg-gray- border-r border-gray-300 fixed top-0 left-0 transform ${
//           isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         } transition-transform duration-300 ease-in-out w-64 md:translate-x-0 md:w-64 z-40`}
//         style={{ fontFamily: 'Roboto, sans-serif' }} 
//       >
//         <div className="flex flex-col flex-grow">
//           {/* Logo */}
//           <div className="p-6 flex items-center space-x-4">
//             <img src="/image/image 40.png" alt="logo" />
//           </div>

//           {/* Sidebar Menu Items */}
//           <ul className="space-y-4 pl-6 text-sm text-[#2A2A2A]"> 
//             <li
//               className={`flex items-center space-x-4 p-2 rounded-lg ${
//                 isActive('/dashboard') ? 'bg-blue-100 text-blue-600' : 'text-[#2A2A2A]'
//               }`}
//             >
//               <img src="/image/icon1.png" alt="dashboard" />
//               <Link to="/dashboard">Dashboard</Link>
//             </li>
//             <li
//               className={`flex items-center space-x-4 p-2 rounded-lg ${
//                 isActive('/promotion-management') ? 'bg-blue-100 text-blue-600' : 'text-[#2A2A2A]'
//               }`}
//             >
//               <img src="/image/icon2.png" alt="promotion" />
//               <Link to="/promotion-management">Promotion Management</Link>
//             </li>
//             <li
//               className={`flex items-center space-x-4 p-2  rounded-lg ${
//                 isActive('/sku-management') ? 'bg-blue-100 text-blue-600 ' : 'text-[#2A2A2A]'
//               }`}
//             >
//               <img src="/image/icon3.png" alt="sku" />
//               <Link to="/sku-management">SKU Management</Link>
//             </li>
//             <li
//               className={`flex items-center space-x-4 p-2 rounded-lg ${
//                 isActive('/token-management') ? 'bg-blue-100 text-blue-600 ' : 'text-[#2A2A2A]'
//               }`}
//             >
//               <img src="/image/icon4.png" alt="token" />
//               <Link to="/token-management">Token Management</Link>
//             </li>
//             <li
//               className={`flex items-center space-x-4 p-2 rounded-lg ${
//                 isActive('/analytics-report') ? 'bg-blue-100 text-blue-600' : 'text-[#2A2A2A]'
//               }`}
//             >
//               <img src="/image/icon5.png" alt="analytics" />
//               <Link to="/analytics-report">Analytics and Report</Link>
//             </li>
//             <li
//               className={`flex items-center space-x-4 p-2 rounded-lg ${
//                 isActive('/customer-engagement') ? 'bg-blue-100 text-blue-600 ' : 'text-[#2A2A2A]'
//               }`}
//             >
//               <img src="/image/icon6.png" alt="customer" />
//               <Link to="/customer-engagement">Customer Engagement</Link>
//             </li>
//           </ul>
//         </div>

//         {/* Notifications and User Info (Desktop View) */}
//         <div className="md:flex flex-col hidden">
         
//           <ul className="space-y-2 p-6 text-sm text-[#2A2A2A]">
//         <li className="flex items-center space-x-4 rounded-lg p-3 relative">
//           <Link to="/notifications" className="flex items-center space-x-4 w-full">
//             <img src="/image/icon8.png" alt="notifications" />
//             <span className="flex-grow">Notifications</span>
//             {notificationsCount > 0 && (
//               <span className="ml-2 flex items-center justify-center h-6 w-6  bg-blue-50  text-gray-400 text-xs font-bold rounded-full">
//                 {notificationsCount}
//               </span>
//             )}
//           </Link>
//         </li>
//         <li className="flex items-center space-x-4 text-gray-600 text-sm">
//           <img src="/image/icon6.png" alt="settings" />
//           <span>Settings</span>
//         </li>
//       </ul>
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

// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { Link, useLocation } from 'react-router-dom';

// const Sidebar = () => {
//   const [notificationsCount, setNotificationsCount] = useState(3);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const location = useLocation();

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const isActive = (path) => location.pathname === path;

//   return (
//     <>
//       {/* Toggle Button */}
//       <button
//         onClick={toggleSidebar}
//         aria-expanded={isSidebarOpen}
//         aria-controls="sidebar"
//         className="fixed top-4 left-4 z-50 p-2 bg-gray-700 text-white rounded-md shadow-md md:hidden"
//       >
//         {isSidebarOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Sidebar */}
//       <div
//         id="sidebar"
//         className={`h-full shadow-lg flex flex-col bg-gray-100 border-r border-gray-300 fixed top-0 left-0 transform ${
//           isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         } transition-transform duration-300 ease-in-out w-64 md:translate-x-0 md:w-64 z-40`}
//         style={{ fontFamily: 'Roboto, sans-serif' }}
//       >
//         <div className="flex flex-col flex-grow">
//           {/* Logo */}
//           <div className="p-6 flex items-center space-x-4">
//             <img src="/image/image 40.png" alt="logo" />
//           </div>

//           {/* Sidebar Menu Items */}
//           <ul className="space-y-4 pl-6 text-sm text-[#2A2A2A]">
//             <li
//               className={`flex items-center space-x-4 p-2 rounded-lg ${
//                 isActive('/dashboard') ? 'bg-blue-100 text-blue-600' : 'text-[#2A2A2A]'
//               }`}
//             >
//               <img src="/image/icon1.png" alt="dashboard" />
//               <Link to="/dashboard">Dashboard</Link>
//             </li>
//             <li
//               className={`flex items-center space-x-4 p-2 rounded-lg ${
//                 isActive('/promotion-management') ? 'bg-blue-100 text-blue-600' : 'text-[#2A2A2A]'
//               }`}
//             >
//               <img src="/image/icon2.png" alt="promotion" />
//               <Link to="/promotion-management">Promotion Management</Link>
//             </li>
//             <li
//               className={`flex items-center space-x-4 p-2 rounded-lg ${
//                 isActive('/sku-management') ? 'bg-blue-100 text-blue-600' : 'text-[#2A2A2A]'
//               }`}
//             >
//               <img src="/image/icon3.png" alt="sku" />
//               <Link to="/sku-management">SKU Management</Link>
//             </li>
//             <li
//               className={`flex items-center space-x-4 p-2 rounded-lg ${
//                 isActive('/token-management') ? 'bg-blue-100 text-blue-600' : 'text-[#2A2A2A]'
//               }`}
//             >
//               <img src="/image/icon4.png" alt="token" />
//               <Link to="/token-management">Token Management</Link>
//             </li>
//             <li
//               className={`flex items-center space-x-4 p-2 rounded-lg ${
//                 isActive('/analytics-report') ? 'bg-blue-100 text-blue-600' : 'text-[#2A2A2A]'
//               }`}
//             >
//               <img src="/image/icon5.png" alt="analytics" />
//               <Link to="/analytics-report">Analytics and Report</Link>
//             </li>
//             <li
//               className={`flex items-center space-x-4 p-2 rounded-lg ${
//                 isActive('/customer-engagement') ? 'bg-blue-100 text-blue-600' : 'text-[#2A2A2A]'
//               }`}
//             >
//               <img src="/image/icon6.png" alt="customer" />
//               <Link to="/customer-engagement">Customer Engagement</Link>
//             </li>
//           </ul>
//         </div>

//         {/* Notifications and User Info (Desktop View) */}
//         <div className="md:flex flex-col hidden">
//           <ul className="space-y-2 p-6 text-sm text-[#2A2A2A]">
//             <li
//               className={`flex items-center space-x-4 rounded-lg p-3 relative ${
//                 isActive('/notifications') ? 'bg-blue-100 text-blue-600' : ''
//               }`}
//             >
//               <Link to="/notifications" className="flex items-center space-x-4 w-full">
//                 <img src="/image/icon8.png" alt="notifications" />
//                 <span className="flex-grow">Notifications</span>
//                 {notificationsCount > 0 && (
//                   <span className="ml-2 flex items-center justify-center h-6 w-6 bg-red-500 text-white text-xs font-bold rounded-full">
//                     {notificationsCount}
//                   </span>
//                 )}
//               </Link>
//             </li>
//             <li
//               className={`flex items-center space-x-4 text-gray-600 text-sm ${
//                 isActive('/settings') ? 'bg-blue-100 text-blue-600' : ''
//               }`}
//             >
//               <img src="/image/icon6.png" alt="settings" />
//               <span>Settings</span>
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
  const [notificationsCount, setNotificationsCount] = useState(3);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        aria-expanded={isSidebarOpen}
        aria-controls="sidebar"
        className="fixed top-4 left-4 z-50 p-2 bg-gray-700 text-white rounded-md shadow-md md:hidden"
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div
        id="sidebar"
        className={`h-full shadow-lg flex flex-col bg-gray-100 border-r border-gray-300 fixed top-0 left-0 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out w-64 md:translate-x-0 md:w-64 z-40`}
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        <div className="flex flex-col flex-grow">
          {/* Logo */}
          <div className="p-6 flex items-center space-x-4">
            <img src="/image/image 40.png" alt="logo" />
          </div>

          {/* Sidebar Menu Items */}
          <ul className="px-4 text-sm text-[#2A2A2A]">
            <li
              className={`flex items-center space-x-4 p-2 rounded-lg ${
                isActive('/dashboard') ? 'bg-blue-100 text-blue-600' : 'text-[#2A2A2A]'
              }`}
            >
              <img src="/image/icon1.png" alt="dashboard" />
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li
              className={`flex items-center space-x-4 p-2 rounded-lg ${
                isActive('/promotion-management') ? 'bg-blue-100 text-blue-600' : 'text-[#2A2A2A]'
              }`}
            >
              <img src="/image/icon2.png" alt="promotion" />
              <Link to="/promotion-management">Promotion Management</Link>
            </li>
            <li
              className={`flex items-center space-x-4 p-2 rounded-lg ${
                isActive('/sku-management') ? 'bg-blue-100 text-blue-600' : 'text-[#2A2A2A]'
              }`}
            >
              <img src="/image/icon3.png" alt="sku" />
              <Link to="/sku-management">SKU Management</Link>
            </li>
            <li
              className={`flex items-center space-x-4 p-2 rounded-lg ${
                isActive('/token-management') ? 'bg-blue-100 text-blue-600' : 'text-[#2A2A2A]'
              }`}
            >
              <img src="/image/icon4.png" alt="token" />
              <Link to="/token-management">Token Management</Link>
            </li>
            <li
              className={`flex items-center space-x-4 p-2 rounded-lg ${
                isActive('/analytics-report') ? 'bg-blue-100 text-blue-600' : 'text-[#2A2A2A]'
              }`}
            >
              <img src="/image/icon5.png" alt="analytics" />
              <Link to="/analytics-report">Analytics and Report</Link>
            </li>
            <li
              className={`flex items-center space-x-4 p-2 rounded-lg ${
                isActive('/customer-engagement') ? 'bg-blue-100 text-blue-600' : 'text-[#2A2A2A]'
              }`}
            >
              <img src="/image/icon6.png" alt="customer" />
              <Link to="/customer-engagement">Customer Engagement</Link>
            </li>
          </ul>
        </div>

        {/* Notifications and User Info (Desktop View) */}
    
        <div className="flex flex-col md:block">
  <ul className="px-4 text-sm text-[#2A2A2A]">
    <li
      className={`flex items-center space-x-4 p-3 rounded-lg relative ${
        isActive('/notifications') ? 'bg-blue-100 text-blue-600' : ''
      }`}
    >
      <Link to="/notifications" className="flex items-center space-x-4 w-full">
        <img src="/image/icon8.png" alt="notifications" />
        <span className="flex-grow">Notifications</span>
        {notificationsCount > 0 && (
          <span className="ml-2 flex items-center justify-center h-6 w-6 bg-blue-100 text-gray-400 text-xs font-bold rounded-full">
            {notificationsCount}
          </span>
        )}
      </Link>
    </li>
    <li
      className={`flex items-center space-x-4 p-3 rounded-lg ${
        isActive('/settings') ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
      }`}
    >
      <Link to="/settings" className="flex items-center space-x-4 w-full">
        <img src="/image/icon6.png" alt="settings" />
        <span>Settings</span>
      </Link>
    </li>
  </ul>

  {/* User Info */}
  <div className="p-6 flex flex-col items-center border border-gray-300 rounded-lg">
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

