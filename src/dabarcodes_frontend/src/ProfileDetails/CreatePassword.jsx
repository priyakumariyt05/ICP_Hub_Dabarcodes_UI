// import React, { useState } from "react";
// import { FaCheck, FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import ProfileSidebar from "./ProfileSidebar";
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// const CreatePassword= () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);



//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8 font-roboto relative">
//       {/* Toggle Button for Sidebar */}
//       <button
//         onClick={toggleSidebar}
//         className="fixed top-4 left-4 md:hidden z-50 p-2 bg-blue-600 text-white rounded-md"
//       >
//         {sidebarOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Sidebar */}
//       <ProfileSidebar sidebarOpen={sidebarOpen} currentStep={5} />

//       {/* Main Content */}
//       <div
//         className={`bg-white w-full md:w-2/3 p-4 md:p-8 flex flex-col justify-between ${
//           sidebarOpen ? "ml-0" : "md:ml-1/3"
//         } transition-all duration-300 ease-in-out`}
//       >
//         <div>
//           <h2 className="text-xl font-semibold mb-6">Set Your Password</h2>
//           <form>
//          <div className="mb-4">
//        <label htmlFor="createPassword" className="block text-sm font-medium">
//            Create Password*
//           </label>
//           <input
//             type={showPassword ? "text" : "password"}
//             id="createPassword"
//             placeholder="Create Password"
//             className="w-full border border-gray-300 rounded-md p-2 mt-1"
//            />
//          </div>

//          {/* Confirm Password */}
//          <div className="mb-4">
//           <label
//            htmlFor="confirmPassword"
//            className="block text-sm font-medium"
//           >
//             Confirm Password*
//           </label>
//           <input
//             type={showPassword ? "text" : "password"}
//             id="confirmPassword"
//             placeholder="Confirm Password"
//             className="w-full border border-gray-300 rounded-md p-2 mt-1"
//           />
//         </div>

//         {/* Show Password Checkbox */}
//         <div className="mb-6 flex items-center">
//            <input
//             type="checkbox"
//             id="showPassword"
//             className="mr-2"
//             onChange={() => setShowPassword(!showPassword)}
//           />
//           <label htmlFor="showPassword" className="text-sm">
//             Show Password
//           </label>
//         </div>

//         {/* Password Strength */}
//         <div className="mb-6">
//            <h3 className="text-sm font-medium mb-2">Password Strength</h3>
//            <ul className="text-sm list-none space-y-1">
//              <li className="flex items-center text-green-600">
//                <span className="mr-2">✔</span> at least 12 characters.
//              </li>
//             <li className="flex items-center text-red-600">
//               <span className="mr-2">✘</span> Include both uppercase and
//                lowercase letters.
//              </li>
//              <li className="flex items-center text-green-600">
//                <span className="mr-2">✔</span> at least one number (0-9).
//            </li>
//             <li className="flex items-center text-green-600">
//               <span className="mr-2">✔</span> at least one special character (@,
//               #, $, etc.)
//              </li>
//            </ul>
//          </div>
//  </form>
//         </div>

//         <div className="flex justify-between mt-8">
//           <Link to="/privacy-preference">
//             <button
//               type="button"
//               className="px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-md shadow-sm hover:bg-blue-50"
//             >
//               Back
//             </button>
//           </Link>
//           <Link
//             to="/homepage2"
//             className="px-4 py-2 bg-blue-400 text-white rounded-md shadow-sm hover:bg-blue-700 inline-block"
//           >
//           Next
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreatePassword;
import React, { useState } from "react";
import { FaCheck, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProfileSidebar from "./ProfileSidebar";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CreatePassword= () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Define showPassword state

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8 font-roboto relative">
      {/* Toggle Button for Sidebar */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 md:hidden z-50 p-2 bg-blue-600 text-white rounded-md"
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <ProfileSidebar sidebarOpen={sidebarOpen} currentStep={5} />

      {/* Main Content */}
      <div
        className={`bg-white w-full md:w-2/3 p-4 md:p-8 flex flex-col justify-between ${
          sidebarOpen ? "ml-0" : "md:ml-1/3"
        } transition-all duration-300 ease-in-out`}
      >
        <div>
          <h2 className="text-xl font-semibold mb-6">Set Your Password</h2>
          <form>
            {/* Create Password */}
            <div className="mb-4">
              <label htmlFor="createPassword" className="block text-sm font-medium">
                Create Password*
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="createPassword"
                placeholder="Create Password"
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium"
              >
                Confirm Password*
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Confirm Password"
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
              />
            </div>

            {/* Show Password Checkbox */}
            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                id="showPassword"
                className="mr-2"
                onChange={() => setShowPassword(!showPassword)}
              />
              <label htmlFor="showPassword" className="text-sm">
                Show Password
              </label>
            </div>

            {/* Password Strength */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Password Strength</h3>
              <ul className="text-sm list-none space-y-1">
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✔</span> at least 12 characters.
                </li>
                <li className="flex items-center text-red-600">
                  <span className="mr-2">✘</span> Include both uppercase and lowercase letters.
                </li>
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✔</span> at least one number (0-9).
                </li>
                <li className="flex items-center text-green-600">
                  <span className="mr-2">✔</span> at least one special character (@, #, $, etc.)
                </li>
              </ul>
            </div>
          </form>
        </div>

        <div className="flex justify-between mt-8">
          <Link to="/privacy-preference">
            <button
              type="button"
              className="px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-md shadow-sm hover:bg-blue-50"
            >
              Back
            </button>
          </Link>

          <Link to="/homepage2">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreatePassword;
