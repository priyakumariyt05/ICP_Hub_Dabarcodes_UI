// import React, { useState } from 'react';
// import { FaCheck, FaBars, FaTimes } from "react-icons/fa";

// const AccountCreationPage = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white p-8 relative">
//       <div className="flex w-full max-w-5xl h-[600px]">
        
//         {/* Toggle Button */}
//         <button
//           className="md:hidden mb-4 p-2 bg-blue-600 text-white rounded-md fixed top-4 left-4 z-30"
//           onClick={toggleSidebar}
//         >
//           {isSidebarOpen ? <FaTimes /> : <FaBars />}
//         </button>

//         {/* Sidebar */}
//         <div
//           className={`bg-[#D1EDFF] w-full md:w-1/3 p-6 rounded-lg transition-transform duration-300 transform 
//           ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:relative z-20 h-full`}
//         >
//           <div className="mb-8">
//             <img src="/image/image 40.png" alt="Logo" className="h-8 w-auto mb-8" />
//           </div>
//           <h2 className="text-xl font-semibold mb-8">Create Account</h2>
          
//           <ul className="relative">
//             <li className="relative flex items-center mb-12">
//               <div className="bg-[#0E95F5] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
//                 <FaCheck />
//               </div>
//               <span className="ml-4 text-[#333] font-medium">Personal Details</span>
//               <div className="absolute left-4 top-10 h-full w-[2px] bg-[#0E95F5]"></div>
//             </li>
//             <li className="relative flex items-center mb-12">
//               <div className="bg-[#0E95F5] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
//                 <FaCheck />
//               </div>
//               <span className="ml-4 text-[#333] font-medium">Contact Details</span>
//               <div className="absolute left-4 top-10 h-full w-[2px] bg-[#0E95F5]"></div>
//             </li>
//             <li className="relative flex items-center mb-12">
//               <div className="bg-[#0E95F5] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
//                 <FaCheck />
//               </div>
//               <span className="ml-4 text-[#333] font-medium">Additional Information</span>
//               <div className="absolute left-4 top-10 h-full w-[2px] bg-[#0E95F5]"></div>
//             </li>
//             <li className="relative flex items-center mb-12">
//               <div className="bg-[#0E95F5] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
//                 4
//               </div>
//               <span className="ml-4 text-[#333] font-medium">Privacy Preferences</span>
//             </li>
//           </ul>
//         </div>

//         {/* Main Content */}
//         <div className="bg-white w-full md:w-2/3 p-8 flex flex-col justify-between ml-auto">
//           <div>
//             <h2 className="text-xl font-semibold mb-6">Privacy Settings</h2>
//             <form>
//               <div className="mb-6">
//                 <label htmlFor="privacy-preference" className="block text-sm font-medium text-gray-700">
//                   Privacy Preference
//                 </label>
//                 <select
//                   id="privacy-preference"
//                   name="privacy-preference"
//                   className="mt-1 block w-1/2 p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 >
//                   <option>Select</option>
//                   <option>Option 1</option>
//                 </select>
//               </div>
//               <div className="mb-4">
//                 <label className="inline-flex items-center">
//                   <input type="checkbox" className="form-checkbox text-blue-600" />
//                   <span className="ml-2 text-sm">Give Permission to name-related logins</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="inline-flex items-center">
//                   <input type="checkbox" className="form-checkbox text-blue-600" />
//                   <span className="ml-2 text-sm">Send confirmation email to verify logon permissions</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="inline-flex items-center">
//                   <input type="checkbox" className="form-checkbox text-blue-600" />
//                   <span className="ml-2 text-sm">Send confirmation email to verify the degree of anonymity</span>
//                 </label>
//               </div>
//             </form>
//           </div>
//           <div className="flex justify-between mt-8">
//             <button
//               type="button"
//               className="px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-md shadow-sm hover:bg-blue-50"
//             >
//               Back
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-400 text-white rounded-md shadow-sm hover:bg-blue-700"
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccountCreationPage;

import React, { useState } from 'react';
import { FaCheck, FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const PrivacyPreference = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-8 relative">
      <div className="flex w-full max-w-5xl h-[600px] relative">
        
        {/* Toggle Button */}
        <button
          className="md:hidden mb-4 p-2 bg-blue-600 text-white rounded-md fixed top-4 left-4 z-30"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Sidebar */}
        <div
          className={`bg-[#D1EDFF] w-full md:w-1/3 p-6 rounded-lg transition-transform duration-300 transform 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 absolute md:relative z-20 h-full`}
        >
          <div className="mb-8">
            <img src="/image/image 40.png" alt="Logo" className="h-8 w-auto mb-8" />
          </div>
          <h2 className="text-xl font-semibold mb-8">Create Account</h2>
          
          <ul className="relative">
            <li className="relative flex items-center mb-12">
              <div className="bg-[#0E95F5] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
                <FaCheck />
              </div>
              <span className="ml-4 text-[#333] font-medium">Personal Details</span>
              <div className="absolute left-4 top-10 h-full w-[2px] bg-[#0E95F5]"></div>
            </li>
            <li className="relative flex items-center mb-12">
              <div className="bg-[#0E95F5] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
                <FaCheck />
              </div>
              <span className="ml-4 text-[#333] font-medium">Contact Details</span>
              <div className="absolute left-4 top-10 h-full w-[2px] bg-[#0E95F5]"></div>
            </li>
            <li className="relative flex items-center mb-12">
              <div className="bg-[#0E95F5] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
                <FaCheck />
              </div>
              <span className="ml-4 text-[#333] font-medium">Additional Information</span>
              <div className="absolute left-4 top-10 h-full w-[2px] bg-[#0E95F5]"></div>
            </li>
            <li className="relative flex items-center mb-12">
              <div className="bg-[#0E95F5] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
                4
              </div>
              <span className="ml-4 text-[#333] font-medium">Privacy Preferences</span>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="bg-white w-full md:w-2/3 p-8 flex flex-col justify-between ml-auto">
          <div>
            <h2 className="text-xl font-semibold mb-6">Privacy Settings</h2>
            <form>
              <div className="mb-6">
                <label htmlFor="privacy-preference" className="block text-sm font-medium text-gray-700">
                  Privacy Preference
                </label>
                <select
                  id="privacy-preference"
                  name="privacy-preference"
                  className="mt-1 block w-1/2 p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option>Select</option>
                  <option>Option 1</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox text-blue-600" />
                  <span className="ml-2 text-sm">Give Permission to name-related logins</span>
                </label>
              </div>
              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox text-blue-600" />
                  <span className="ml-2 text-sm">Send confirmation email to verify logon permissions</span>
                </label>
              </div>
              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox text-blue-600" />
                  <span className="ml-2 text-sm">Send confirmation email to verify the degree of anonymity</span>
                </label>
              </div>
            </form>
          </div>
          <div className="flex justify-between mt-8">
          <Link to="/additional-information">
      <button
        type="button"
        className="px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-md shadow-sm hover:bg-blue-50"
      >
        Back
      </button>
    </Link>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-400 text-white rounded-md shadow-sm hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPreference;

