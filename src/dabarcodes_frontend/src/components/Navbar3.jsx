// import React, { useState } from "react";
// import { FiSearch } from "react-icons/fi";
// import { Link } from "react-router-dom";

// const Navbar3 = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//         <div className="relative flex items-center justify-between h-16">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             {/* Mobile menu button */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//               aria-controls="mobile-menu"
//               aria-expanded={isOpen ? "true" : "false"}
//             >
//               <span className="sr-only">Open main menu</span>
//               {!isOpen ? (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>

//           <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex-shrink-0">
//               <a href="#" className="text-xl font-bold text-blue-600">
//                 <img src="/image/image 40.png" alt="Logo" />
//               </a>
//             </div>

//             <div className="hidden sm:flex sm:ml-6 space-x-4 items-center">
//               <a
//                 href="#"
//                 className="text[#171717] hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium font-roboto"
//               >
//                 Shop
//               </a>
//               <a
//                 href="#"
//                 className="text[#171717] hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium font-roboto"
//               >
//                 Pickup and Delivery
//               </a>
//               <a
//                 href="#"
//                 className="text[#171717] hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium font-roboto"
//               >
//                 Coupons
//               </a>
//               <a
//                 href="#"
//                 className="text[#171717] hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium font-roboto"
//               >
//                 Featured
//               </a>

//               <div className="hidden md:flex items-center relative w-full max-w-xs mx-auto">
//                 <input
//                   type="text"
//                   className="w-full pr-10 pl-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//                   placeholder="Search"
//                 />
//                 <FiSearch className="absolute right-3 text-gray-500" />
//               </div>
//             </div>
//           </div>

//           <div className="auth-buttons">
//             <button className="login-signup ml-4 text-white font-medium bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
//               Login/Signup
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div
//         className={`sm:hidden ${
//           isOpen ? "absolute top-16 left-0 right-0 z-10" : "hidden"
//         }`}
//         id="mobile-menu"
//       >
//         <div className="bg-white border-b border-gray-200 px-2 pt-2 pb-3 space-y-1">
//           <a
//             href="#"
//             className="text-gray-700 hover:bg-gray-100 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Shop
//           </a>
//           <a
//             href="#"
//             className="text-gray-700 hover:bg-gray-100 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Pickup and Delivery
//           </a>
//           <a
//             href="#"
//             className="text-gray-700 hover:bg-gray-100 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Coupons
//           </a>
//           <a
//             href="#"
//             className="text-gray-700 hover:bg-gray-100 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Featured
//           </a>

//           {/* Search Input for Mobile */}
//           <div className="relative mt-2">
//             <input
//               type="text"
//               className="w-full pr-10 pl-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//               placeholder="Search"
//             />
//             <svg
//               className="absolute right-3 top-3 w-4 h-4 text-gray-500"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M12.9 14.32a8 8 0 111.414-1.414l4.6 4.6a1 1 0 01-1.414 1.414l-4.6-4.6zM8 14a6 6 0 100-12 6 6 0 000 12z"
//                 clipRule="evenodd"
//               ></path>
//             </svg>
//           </div>
//         </div>
//       </div>

//       <div className="bg-blue-500 text-white text-right py-2 pr-4">
//         How to use daBarcodes
//       </div>

//       <div className="px-4 py-2 text-sm text-gray-600">
//         <Link to="/" className=" hover:underline">
//           Home
//         </Link>{" "}
//         /
//         <Link to="/section1" className=" hover:underline">
//           section1
//         </Link>{" "}
//         /
//         <Link to="/homepage" className=" hover:underline">
//           section2
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar3;
