// import React, { useState } from "react";
// import { FaCheck, FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const AccountPage= () => {
//     const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8 font-roboto">
//       <button
//         onClick={toggleSidebar}
//         className="md:hidden mb-4 p-2 bg-blue-600 text-white rounded-md self-start"
//       >
//         {sidebarOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`bg-[#D1EDFF] w-full md:w-1/3 p-6 rounded-lg md:block transition-transform duration-300 ease-in-out ${
//           sidebarOpen ? "block" : "hidden"
//         } md:block`}
//       >
//         <div className="mb-8">
//           <img
//             src="/image/image 40.png"
//             alt="Logo"
//             className="h-8 w-auto mb-8"
//           />
//         </div>
//         <h2 className="text-xl font-bold mb-8">Become Our Retailer</h2>

     
//         <img src="/image/dash.png" alt="" />
//       </div>

//       {/* Main Content */}
//       <div
//         className={`bg-white w-full md:w-2/3 p-4 md:p-8 flex flex-col justify-between ${
//           sidebarOpen ? "ml-0" : "md:ml-1/3"
//         } transition-all duration-300 ease-in-out`}
//       >
//         <div>
//           <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
//           <form>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="input1"
//                   className="text-gray-800 py-2 font-semibold"
//                 >
//                 Prounous
//                 <span className="text-black">*</span>
//                 </label>
//                 <select
//                   id=" Gender Biological"
//                   name=" Gender Biological"
//                       className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                 >
//                   <option>Select</option>
//                   <option>Option 1</option>
//                   <option>He</option>
//                   <option>She</option>
//                 </select>
//               </div>
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="input1"
//                   className="text-gray-800 py-2 font-semibold"
//                 >
//                Name
//                <span className="text-black">*</span>
//                 </label>
//                 <input
//                   id="name"
//                   name="name"
//                   type="name"
               
//                   placeholder="Name"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                 />
//               </div>
     
//             </div>
// {/* Store Address */}
//             <h2 className="text-xl font-semibold my-6">Store Head Office Address</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
 
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="country"
//                   className="text-gray-800 py-2 font-semibold"
//                 >
//                   Country
//                   <span className="text-black">*</span>
//                 </label>
//                 <select
//                   id="country"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
             
//                 >
//                   <option value="">Select</option>
//                   <option value="">India</option>
//                   <option value="">UK</option>
//                   <option value="">USA</option>
//                   {/* Add country options here */}
//                 </select>
         
//               </div>
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="state"
//                   className="text-gray-800 py-2 font-semibold"
//                 >
//                   State
//                   <span className="text-black">*</span>
//                 </label>
//                 <select
//                   id="state"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  
//                 >
//                   <option value="">Select</option>
//                   <option value="">Delhi</option>
//                   <option value="">Maharastra</option>
//                   {/* Add state options here */}
//                 </select>
                
//               </div>
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="city"
//                   className="text-gray-800 py-2 font-semibold"
//                 >
//                   City
//                   <span className="text-black">*</span>
//                 </label>
//                 <select
//                   id="city"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  
//                 >
//                   <option value="">Select</option>
//                   <option value="">Delhi</option>
//                   <option value="">Mumbai</option>
//                   {/* Add city options here */}
//                 </select>
             
//               </div>
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="postal"
//                   className="text-gray-800 py-2 font-semibold"
//                 >
//                   Postal Code
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   id="postal"
//                   type="text"
//                   placeholder="Postal Code"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                
//                 />
              
//               </div>
             
//             </div>
//           </form>
//         </div>

//         <div className="flex justify-end mt-8">
         
//           <Link to="/">
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700"
//             >
//               Next
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccountPage;
// AccountPage.js
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ASidebar from './Asidebar'; // Import the Sidebar component

const AccountPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8 font-roboto">
      <button
        onClick={toggleSidebar}
        className="md:hidden mb-4 p-2 bg-blue-600 text-white rounded-md self-start"
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <ASidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div
        className={`bg-white w-full md:w-2/3 p-4 md:p-8 flex flex-col justify-between ${
          sidebarOpen ? 'ml-0' : 'md:ml-1/3'
        } transition-all duration-300 ease-in-out`}
      >
        <div>
          <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label
                  htmlFor="input1"
                  className="text-gray-800 py-2 font-semibold"
                >
                  Prounous
                  <span className="text-black">*</span>
                </label>
                <select
                  id=" Gender Biological"
                  name=" Gender Biological"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option>Select</option>
                  <option>Option 1</option>
                  <option>He</option>
                  <option>She</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="input1"
                  className="text-gray-800 py-2 font-semibold"
                >
                  Name
                  <span className="text-black">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="name"
                  placeholder="Name"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Store Address */}
            <h2 className="text-xl font-semibold my-6">Store Head Office Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex flex-col">
                <label
                  htmlFor="country"
                  className="text-gray-800 py-2 font-semibold"
                >
                  Country
                  <span className="text-black">*</span>
                </label>
                <select
                  id="country"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select</option>
                  <option value="">India</option>
                  <option value="">UK</option>
                  <option value="">USA</option>
                  {/* Add country options here */}
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="state"
                  className="text-gray-800 py-2 font-semibold"
                >
                  State
                  <span className="text-black">*</span>
                </label>
                <select
                  id="state"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select</option>
                  <option value="">Delhi</option>
                  <option value="">Maharastra</option>
                  {/* Add state options here */}
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="city"
                  className="text-gray-800 py-2 font-semibold"
                >
                  City
                  <span className="text-black">*</span>
                </label>
                <select
                  id="city"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select</option>
                  <option value="">Delhi</option>
                  <option value="">Mumbai</option>
                  {/* Add city options here */}
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="postal"
                  className="text-gray-800 py-2 font-semibold"
                >
                  Postal Code
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="postal"
                  type="text"
                  placeholder="Postal Code"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="flex justify-end mt-8">
          <Link to="/">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700"
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
