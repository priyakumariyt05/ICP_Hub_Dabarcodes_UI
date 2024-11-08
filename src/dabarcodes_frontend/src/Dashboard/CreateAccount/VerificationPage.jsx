

// import React,{useState} from 'react'
// import {FaBars, FaTimes} from "react-icons/fa";
// import Asidebar from "../Asidebar";
// const VerificationPage = () => {
//       const [sidebarOpen, setSidebarOpen] = useState(false);
//         const toggleSidebar = () => {
//           setSidebarOpen(!sidebarOpen);
//         };
//   return (
//     <>
//       <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8 font-roboto">
//         {/* Toggle Button */}
//         <button
//           onClick={toggleSidebar}
//           className="fixed top-4 left-4 md:hidden z-50 p-2 bg-blue-600 text-white rounded-md"
//         >
//           {sidebarOpen ? <FaTimes /> : <FaBars />}
//         </button>

//         {/* Sidebar */}
//         <Asidebar sidebarOpen={sidebarOpen} />

//         {/* Main Content */}
//         <div
//           className={`bg-white w-full md:w-2/3 p-4 md:p-8 flex flex-col justify-between ${
//             sidebarOpen ? "ml-0" : "md:ml-1/3"
//           } transition-all duration-300 ease-in-out`}
//         >
//           <div className="w-2/3 p-8 border border-spacing-2 flex flex-col items-center justify-center text-center">
//             <h3 className="text-xl font-bold">Email address verified</h3>
//             <p className="text-gray-600 mb-4">
//               Your email address <strong>john.doe@gmail.com</strong> has been
//               verified.
//             </p>
//             <p className="text-gray-600">
//               <strong>User ID:</strong> 2025451
//             </p>
//             <p className="text-gray-600 mb-4">
//               <strong>Password:</strong> w@5asigo1
//             </p>
//             <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
//               Login to your account
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default VerificationPage
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Asidebar from "../../ReusableComponents/Asidebar";
import { useNavigate } from "react-router-dom";

const VerificationPage = ({ userData }) => {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Default values (in case the data is missing)
  const defaultData = {
    email: "johndoe@example.com",
    userId: "Not Available",
    password: "********",
  };
  const handleButtonClick = () => {
    navigate("/dashboard/admin-login");
  };

  // Validate if userData is provided
  const { email, userId, password } = userData || defaultData;

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8 font-roboto">
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 md:hidden z-50 p-2 bg-blue-600 text-white rounded-md"
        >
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Sidebar */}
        <Asidebar sidebarOpen={sidebarOpen} />

        {/* Main Content */}
        <div
          className={`bg-white w-full md:w-2/3 p-4 md:p-8 flex flex-col justify-between ${sidebarOpen ? "ml-0" : "md:ml-1/3"
            } transition-all duration-300 ease-in-out`}
        >
          <div className="w-2/3 p-8  shadow-md rounded-lg flex flex-col items-center justify-center text-center m-auto">
            <h3 className="text-xl font-bold">Email address verified</h3>

            {/* Validation Check */}
            <p className="text-gray-600 mb-4">
              Your email address{" "}
              <strong>{email ? email : "Email is missing"}</strong> has been
              verified.
            </p>
            <p className="text-gray-600">
              <strong>User ID:</strong> {userId ? userId : "User ID is missing"}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Password:</strong>{" "}
              {password ? password : "Password is missing"}
            </p>

            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={handleButtonClick}
            >
              Login to your account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerificationPage;
