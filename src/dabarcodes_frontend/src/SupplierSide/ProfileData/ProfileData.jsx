
// import React from "react";
// import {MdOutlineModeEdit} from "react-icons/md";

// const ProfileData = () => {
//   return (
//     <>
//       <div className="flex flex-col md:flex-row min-h-screen p-6 font-roboto w-full">
//         {/* Set the max-width to full for the form container */}
//         <div className="w-full md:w-full md:mt-0 md:ml-6 mb-10 rounded-md">
//           <div className="py-4">
//             {/* Profile Completion Heading */}
//             <h2 className="text-xl font-semibold mb-2">Profile Completion</h2>

//             {/* Progress Bar Section */}
//             <div className="flex items-center justify-end">
//               {/* Edit Profile Section */}
//               <div className="flex items-center ml-4 border border-gray-300 rounded">
//                 <span className="text-gray-500 rounded-full p-1">
//                   <MdOutlineModeEdit className="h-4 w-4" />
//                 </span>
//                 <a
//                   href="#"
//                   className="text-gray-500 font-medium px-2 py-1 rounded-lg font-roboto"
//                 >
//                   Edit Profile
//                 </a>
//               </div>
//             </div>
//           </div>

//           <h2 className="text-2xl font-semibold mb-6">Profile</h2>
//           <hr className="my-4 border-t-2 border-gray-300" />
//           <form>
//             {/* Personal Information */}
//             <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
//             {/* Use grid-cols-3 for three columns */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="pronouns"
//                   className="text-gray-800 py-2 font-semibold"
//                 >
//                   Pronouns <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   id="pronouns"
//                   name="pronouns"
//                   className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a] w-full"
//                 >
//                   <option value="">Select Pronouns</option>
//                   <option value="he/him">He/Him</option>
//                   <option value="she/her">She/Her</option>
//                   <option value="they/them">They/Them</option>
//                 </select>
//               </div>

//               <div className="flex flex-col">
//                 <label
//                   htmlFor="name"
//                   className="text-gray-700 py-2 font-semibold"
//                 >
//                   Name <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a] w-full"
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label
//                   htmlFor="dob"
//                   className="text-gray-800 py-2 font-semibold"
//                 >
//                   Date of Birth
//                 </label>
//                 <input
//                   id="dob"
//                   name="dob"
//                   type="date"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-full"
//                 />
//               </div>
//             </div>

//             {/* Contact Information */}
//             <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="phone"
//                   className="text-gray-800 py-2 font-semibold"
//                 >
//                   Phone Number <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   id="phone"
//                   name="phone"
//                   type="text"
//                   placeholder="Phone Number"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-full"
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label
//                   htmlFor="email"
//                   className="text-gray-800 py-2 font-semibold"
//                 >
//                   Email Address <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder="Email"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-full"
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label
//                   htmlFor="address"
//                   className="text-gray-800 py-2 font-semibold"
//                 >
//                   Address
//                 </label>
//                 <input
//                   id="address"
//                   name="address"
//                   type="text"
//                   placeholder="Address"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-full"
//                 />
//               </div>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-6"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProfileData;


// import React, {useState} from "react";
//  import {MdOutlineModeEdit} from "react-icons/md";
// const ProfileData = () => {
//   // State to manage the active tab
//   const [activeTab, setActiveTab] = useState("Profile");

//   return (
//     <div className="p-6 font-roboto">
//       {/* Navbar with tabs */}
//       <nav className="border-b border-gray-300 mb-6">
//         <ul className="flex space-x-4">
//           <li>
//             <button
//               onClick={() => setActiveTab("Profile")}
//               className={`p-2 text-lg font-semibold ${
//                 activeTab === "Profile"
//                   ? "border-b-2 border-blue-500 text-blue-500"
//                   : "text-gray-600 hover:text-blue-500"
//               }`}
//             >
//               Profile
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => setActiveTab("Settings")}
//               className={`p-2 text-lg font-semibold ${
//                 activeTab === "Settings"
//                   ? "border-b-2 border-blue-500 text-blue-500"
//                   : "text-gray-600 hover:text-blue-500"
//               }`}
//             >
//               Settings
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => setActiveTab("Activity Login")}
//               className={`p-2 text-lg font-semibold ${
//                 activeTab === "Activity Login"
//                   ? "border-b-2 border-blue-500 text-blue-500"
//                   : "text-gray-600 hover:text-blue-500"
//               }`}
//             >
//               Activity Login
//             </button>
//           </li>
//         </ul>
//       </nav>

//       {/* Content Section */}
//       {activeTab === "Profile" && (
//         <div>
//           {/* Profile Section */}
//           <div className="mb-10">
//             <h2 className="text-2xl font-semibold mb-4">Profile</h2>

//             {/* Personal Information */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
           
//               <div className="flex flex-col">
//                 <div className="flex justify-between items-center">
//                   <label
//                     htmlFor="name"
//                     className="text-gray-800 py-2 font-semibold"
//                   >
//                   Name
                   
//                   </label>
                 
//                 </div>
//                 <input
//                   id="name"
//                   type="name"
//                   placeholder="name"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                 />
//               </div>
        
//               <div className="flex flex-col">
//                 <div className="flex justify-between items-center">
//                   <label
//                     htmlFor="phone"
//                     className="text-gray-800 py-2 font-semibold"
//                   >
//                     Phone Number
                   
//                   </label>
//                   <p className="flex items-center text-green-500">Verified</p>
//                 </div>
//                 <input
//                   id="phone"
//                   type="number"
//                   placeholder="phone"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <div className="flex justify-between items-center">
//                   <label
//                     htmlFor="email"
//                     className="text-gray-800 py-2 font-semibold"
//                   >
//                     Email Address
                  
//                   </label>
//                   <p className="flex items-center text-green-500">Verified</p>
//                 </div>
//                 <input
//                   id="email"
//                   type="email"
//                   placeholder="Email"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                 />
//               </div>
//             </div>

//             {/* Store Information */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//               <div className="flex flex-col">
//                 <label className="font-semibold text-gray-800">Role</label>
//                 <input
//                   type="text"
//                   value="Admin"
//                   className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label className="font-semibold text-gray-800">
//                   Store Name
//                 </label>
//                 <input
//                   type="text"
//                   value="Reliance Markets"
//                   className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label className="font-semibold text-gray-800">
//                   Store Location
//                 </label>
//                 <input
//                   type="text"
//                   value="Bangalore, India"
//                   className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
//                 />
//               </div>
//             </div>

//             <button className="flex items-center text-blue-500 hover:text-blue-600">
//               <MdOutlineModeEdit className="h-5 w-5 mr-2" />
//               Edit Profile
//             </button>
//           </div>
//         </div>
//       )}

//       {activeTab === "Settings" && (
//         <div>
//           {/* Settings Section */}
//           <h2 className="text-2xl font-semibold mb-4">Settings</h2>

//           {/* Change Password */}
//           <h3 className="font-semibold text-lg mb-4">Change Password</h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//             <input
//               type="password"
//               placeholder="Current Password"
//               className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
//             />
//             <input
//               type="password"
//               placeholder="New Password"
//               className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
//             />
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <a href="#" className="text-blue-500 hover:text-blue-600">
//             Forgot Password?
//           </a>

//           {/* Two-Factor Authentication */}
//           <div className="mt-8">
//             <h3 className="font-semibold text-lg mb-4">
//               Two-Factor Authentication
//             </h3>
//             <div className="flex items-center mb-4">
//               <input type="checkbox" className="h-4 w-4 text-blue-600" />
//               <label className="ml-2 text-gray-800">
//                 You will receive OTP on your phone number.
//               </label>
//             </div>
//             <div className="flex items-center">
//               <input type="checkbox" className="h-4 w-4 text-blue-600" />
//               <label className="ml-2 text-gray-800">
//                 You will receive OTP on your email.
//               </label>
//             </div>
//           </div>

//           {/* Email Notifications */}
//           <div className="mt-8">
//             <h3 className="font-semibold text-lg mb-4">Email Notifications</h3>
//             <div className="flex items-center mb-4">
//               <input type="checkbox" className="h-4 w-4 text-blue-600" />
//               <label className="ml-2 text-gray-800">All Notifications</label>
//             </div>
//             <div className="flex items-center mb-4">
//               <input type="checkbox" className="h-4 w-4 text-blue-600" />
//               <label className="ml-2 text-gray-800">
//                 Promotions only (promotion updates, special offers)
//               </label>
//             </div>
//             <div className="flex items-center mb-4">
//               <input type="checkbox" className="h-4 w-4 text-blue-600" />
//               <label className="ml-2 text-gray-800">
//                 Product changes (changes related to products, suppliers,
//                 promotions)
//               </label>
//             </div>
//             <div className="flex items-center mb-4">
//               <input type="checkbox" className="h-4 w-4 text-blue-600" />
//               <label className="ml-2 text-gray-800">Supplier activity</label>
//             </div>
//           </div>
//         </div>
//       )}

//       {activeTab === "Activity Login" && (
//         <div>
//           {/* Activity Login Section */}
//           <h2 className="text-2xl font-semibold mb-4">Activity Login</h2>
//           {/* Add your activity login content here */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfileData;


import React, { useState } from "react";
import ProfileSection from "./ProfileSection";
import SettingSection from "./SettingSection";
import ActivityLoginSection from "./ActivityLoginSection";

const ProfileData = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <>

   
    <div className="p-6 font-roboto">
      {/* Navbar with tabs */}
      <nav className="border-b border-gray-300 mb-6">
        <ul className="flex space-x-4">
          <li>
            <button
              onClick={() => setActiveTab("Profile")}
              className={`p-2 text-lg font-semibold ${
                activeTab === "Profile"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              Profile
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("Settings")}
              className={`p-2 text-lg font-semibold ${
                activeTab === "Settings"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              Settings
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("Activity Login")}
              className={`p-2 text-lg font-semibold ${
                activeTab === "Activity Login"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              Activity Login
            </button>
          </li>
        </ul>
      </nav>

      {/* Content Section */}
      {activeTab === "Profile" && <ProfileSection />}
      {activeTab === "Settings" && <SettingSection />}
      {activeTab === "Activity Login" && <ActivityLoginSection />}
    </div>

    </>
  );
};

export default ProfileData;
