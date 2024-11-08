
// import React, {useState} from "react";

// const EmailVerificationPage = () => {
//   const [email, setEmail] = useState(""); // State to handle email input
//   const [error, setError] = useState(""); // State to handle validation error message

//   // Email Validation Regex
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   // Handle email change
//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     setError(""); // Clear error when user types
//   };

//   // Handle Form Submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email) {
//       setError("Email is required");
//     } else if (!emailRegex.test(email)) {
//       setError("Please enter a valid email address");
//     } else {
//       setError("");
//       // Call API or perform the email submission logic here
//       console.log("Email submitted:", email);
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-[#EAFDEE]">
//       {/* Main container */}
//       <div className="bg-white shadow-lg rounded-lg w-[90%] max-w-6xl flex flex-col md:flex-row">
//         {/* Left Section with Image */}
//         <div className="md:w-1/2 bg-[#EAFDEE] p-6 flex justify-center items-center">
//           <img
//             src="path-to-your-image" // Replace with your image source
//             alt="Verification Illustration"
//             className="w-[80%] md:w-[100%] h-auto"
//           />
//         </div>

//         {/* Right Section with Verification Info */}
//         <div className="md:w-1/2 p-8 flex flex-col justify-center">
//           <h2 className="text-3xl font-bold mb-4">Verify your email address</h2>
//           <p className="text-gray-700 mb-6">
//             We've sent a verification link to your registered email address{" "}
//             <span className="font-semibold">johndoe@gmail.com</span>.
//           </p>

//           <p className="text-gray-700 mb-6">
//             <strong>Instructions:</strong>
//             <ul className="list-disc list-inside">
//               <li>Click on the link in the email to confirm your account.</li>
//               <li>Once verified, you can proceed to log in.</li>
//             </ul>
//           </p>

//           {/* Email Update Form */}
//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* <div>
//               <input
//                 type="email"
//                 placeholder="Enter new email address"
//                 value={email}
//                 onChange={handleEmailChange}
//                 className={`w-full p-2 border ${
//                   error ? "border-red-500" : "border-gray-300"
//                 } rounded-md focus:outline-none`}
//               />
//               {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
//             </div> */}
//             {/* Buttons in a single line inside the form */}
//             <div className="flex justify-between space-x-4 mt-4">
//               <button
//                 type="submit"
//                 className="w-full bg-[#0D90C1] text-white py-2 rounded-md"
//               >
//                 Resend Verification Email
//               </button>
//               <button
//                 type="button"
//                 className="w-full border border-gray-300 text-[#0D90C1] py-2 rounded-md"
//               >
//                 Change email address
//               </button>
//             </div>
//           </form>

//           <p className="text-gray-500 mt-4 text-sm">
//             If you haven't received the email in a few minutes, click "Resend
//             Verification Email."
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmailVerificationPage;

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import Asidebar from "../../ReusableComponents/Asidebar";

const EmailVerificationPage = () => {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [email, setEmail] = useState(""); // State to handle email input
  const [error, setError] = useState(""); // State to handle validation error message

  // Email Validation Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Handle email change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Clear error when user types
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
    } else {
      setError("");
      // Call API or perform the email submission logic here
      console.log("Email submitted:", email);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handleButtonClick = () => {

    navigate("/dashboard/verification-page");
  };

  return (
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
        {/* main  */}

        <div className="text-gray-700 mt-6">
          <h2 className="text-2xl font-bold mb-2">Verify your email address</h2>
          We've sent a verification link to your registered email address{" "}
          <span className="font-semibold">johndoe@gmail.com</span>.
        </div>

        <p className="text-gray-700 mb-6">
          <strong>Instructions:</strong>
          <ul className="list-disc list-inside">
            <li>Click on the link in the email to confirm your account.</li>
            <li>Once verified, you can proceed to log in.</li>
          </ul>
        </p>

        {/* Email Update Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-between space-x-4 ">
            <button
              type="button"
              className="w-full border border-gray-300 text-[#0D90C1] py-2 rounded-md"
            >
              Change email address
            </button>
            <button
              type="submit"
              onClick={handleButtonClick}
              className="w-full bg-[#0D90C1] text-white py-2 rounded-md"
            >
              Resend Verification Email
            </button>
          </div>
        </form>

        <p className="text-gray-500  text-sm">
          If you haven't received the email in a few minutes, click "Resend
          Verification Email."
        </p>
      </div>
    </div>
  );
};

export default EmailVerificationPage;
