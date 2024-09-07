// // import React from "react";
// // import Navbar2 from "../components/Navbar2";
// // import Footer from "../components/Footer";

// // const ProfileInformation = () => {
// //   return (
// //     <>
// //       <Navbar2 />
// //       <div className="flex flex-col md:flex-row min-h-screen p-6 ">
// //         <aside className="w-full md:w-1/4 bg-white p-4 shadow-lg rounded-md md:h-1/2">
// //           <ul className="space-y-4 pt-10 pb-24">
// //             <li className="text-black font-semibold cursor-pointer bg-blue-600 p-4">Profile</li>
// //             <li className="cursor-pointer">Subscription Management</li>
// //             <hr className="my-4 border-t-2 border-gray-300" /> 
// //             <li className="cursor-pointer">My Linked SKUs</li>
// //             <hr className="my-4 border-t-2 border-gray-300" /> 
// //             <li className="cursor-pointer">Promotional Coupons</li>
// //             <hr className="my-4 border-t-2 border-gray-300" /> 
// //             <li className="cursor-pointer">Utility Tokens</li>
// //           </ul>
// //         </aside>
// //         <div className="w-full md:w-3/4 p-10 mt-10 md:mt-0 md:ml-6 mb-10 rounded-md flex-grow">
// //           <h2 className="text-2xl font-semibold mb-6">Profile</h2>
// //           <hr className="my-4 border-t-2 border-gray-300" /> 
// //           <form>
// //             <div className="mb-4">
// //               <label className="block text-gray-700">First Name</label>
// //               <input
// //                 type="text"
// //                 className="mt-1 md:w-1/2 p-2 border border-gray-300 rounded-md"
// //                 placeholder="John"
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-gray-700">Last Name</label>
// //               <input
// //                 type="text"
// //                 className="mt-1 md:w-1/2 p-2 border border-gray-300 rounded-md"
// //                 placeholder="Doe"
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-400 text-2xl font-bold ">Account Details</label>
         
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-400 ">Email</label>
// //               <input
// //                 type="email"
// //                 className="mt-1 md:w-1/2 p-2 border border-gray-300 rounded-md"
// //                 placeholder="demo@gmail.com"
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label className="block text-black tex">ICP Principal Id</label>
// //               <input
// //                 type="text"
// //                 className="mt-1 md:w-1/2 p-2 rounded-md"
// //                 value=""
// //                 placeholder="Your Principal Id:"
// //                 readOnly
// //               />
// //             </div>
// //             <hr className="my-4 border-t-2 border-gray-300" /> 
// //             <div className="mb-4">
// //               <label className="block text-gray-700">Subscription Status</label>
// //               <div className="flex items-center mt-1">
// //                 <span className="text-red-600">Not Active</span>
// //                 <a href="#" className="ml-2 text-blue-600 underline">
// //                   Click here to activate your subscription
// //                 </a>
// //               </div>
// //               <hr className="my-4 border-t-2 border-gray-300" /> 
// //             </div>
// //             <div className="mb-4">
// //               <h3 className=" font-semibold mb-2">Delete Account</h3>
// //               <p className="text-gray-600 text-sm mb-4">
// //                 Deleting your account is a permanent action and cannot be undone.
// //                 By proceeding, you will lose access to all your data, including
// //                 your purchase history, device requests, subscriptions, and other
// //                 personal data. This action will also unsubscribe you from any
// //                 ongoing services and promotions. Are you sure you want to
// //                 permanently delete your account?
// //               </p>
// //               <button
// //                 className="px-4 py-2 bg-[#FFEBE6]  rounded-md"
// //                 type="button"
// //               >
// //                 Delete Account
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //       <Footer/>
// //     </>
// //   );
// // };

 // export default ProfileInformation;

// import React from "react";
// import Navbar2 from "../components/Navbar2";
// import Footer from "../components/Footer";
// import LeftSidebar from "./LeftSidebar";
// import { useState } from "react";
// import { MdOutlineModeEdit } from "react-icons/md";

// const ProfileInformation = () => {
//     const [sidebarOpen, setSidebarOpen] = useState(false);


  

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };


  
//   return (
//     <>
//       <Navbar2 />
//       <div className="flex flex-col md:flex-row min-h-screen p-6 ">

//         <LeftSidebar/>
//         <div className="w-full md:w-2/3 md:mt-0 md:ml-6 mb-10 rounded-md ">
//         {/* <div className="bg-white w-full md:w-2/3  md:p-8 flex flex-col p-6"> */}
//         {/* profile complete */}
    
//     <div className="py-4">
//       {/* Profile Completion Heading */}
//       <h2 className="text-xl font-semibold mb-2">Profile Completion</h2>
      
//       {/* Progress Bar Section */}
//       <div className="flex items-center justify-between">
//         <div className="flex items-center space-x-4 w-3/4">
//           <div className="relative w-1/2 h-2 bg-blue-100 rounded-lg">
//             <div className="absolute top-0 left-0 h-2 bg-blue-500 rounded-lg" style={{ width: '90%' }}></div>
//           </div>
//           <span className="text-black font-semibold">90%</span>
//         </div>

//         {/* Edit Profile Section */}
//         <div className="flex items-center ml-4 border border-gray-300 rounded">
//           <span className="text-gray-500  rounded-full p-1">
//             <MdOutlineModeEdit className="h-4 w-4" />
//           </span>
//           <a href="#" className="text-gray-500 font-medium px-2 py-1 rounded-lg font-roboto">
//             Edit Profile
//           </a>
//         </div>
//       </div>
//     </div>



//           <h2 className="text-2xl font-semibold mb-6">Profile</h2>
//           <hr className="my-4 border-t-2 border-gray-300" /> 
//          <form >
//          {/* Personal Information */}
//          <h2 className="text-xl font-semibold mb-6">Personal Information</h2>    
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          
//             <div className="flex flex-col">
//                <label htmlFor="pronouns" className="text-gray-800 py-2 font-semibold">
//                 Pronouns                 <span className="text-red-500">*</span>
//               </label>
//              <select
//                 id="pronouns"
              
//                 className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
//               >
//                 <option value="">Select Pronouns</option>
               
//               </select>
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="name" className="text-gray-700 py-2 font-semibold">
//                 Name
//                 <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="name"
//                 type="text"
               
//                 placeholder="Name"
//                 className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
//               />
//             </div>
//           </div>
//       {/* Demographic Information */}
//       <h2 className="text-xl font-semibold mb-6">Demographic Information</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//             <div className="flex flex-col">
//               <label htmlFor="ethnicity" className="text-gray-700 font-bold py-2">
//                 Ethnicity
//                 <span className="text-red-500">*</span>
//               </label>
//               <select
//                 id="ethnicity"
            
//                 className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
//               >
//                 <option value="">Select Ethnicity</option>
//                 <option value="asian">Asian</option>
//                 <option value="black">African American</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="primary-language" className="text-gray-700 font-bold py-2">
//                 Primary Language
//                 <span className="text-red-500">*</span>
//               </label>
//               <select
//                 id="primary-language"
              
//                 className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
//               >
//                 <option value="">Select Primary Language</option>
//                 <option value="english">English</option>
//                 <option value="hindi">Hindi</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>
//           </div>
       
//           <div className="mb-6">
//             <label className="text-gray-700 font-bold py-4">
//               Date of Birth
//               <span className="text-red-500">*</span>
//             </label>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <input
//                 type="number"
//                 placeholder="MM"
               
//                 min="1"
//                 max="12"
//                 className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a] font-semibold"
//               />
//               <input
//                 type="number"
//                 placeholder="DD"
           
//                 min="1"
//                 max="31"
//                 className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a] font-semibold"
//               />
//               <input
//                 type="number"
//                 placeholder="YYYY"
                
//                 min="1900"
//                 max="2099"
//                 className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a] font-semibold"
//               />
//             </div>
//           </div>
// {/* contact */}
// <div>
//           <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
    
       
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="flex flex-col">
//                 <label htmlFor="phone" className="text-gray-800 py-2 font-semibold">
//                   Phone Number
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   id="phone"
//                   type="text"
//                   placeholder="Phone Number"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                 
//                 />
//                 <div className="mt-2">
//       <span className="text-gray-700">Preferred Mode of Communication:</span>
//       <a href="#" className="text-red-500 ml-1 hover:underline">Change</a>
//     </div>
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="email" className="text-gray-800 py-2 font-semibold">
//                   Email Address
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   placeholder="Email"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  
//                 />
//               </div>
//             </div>
//             {/* Address Information */}
//             <h2 className="text-xl font-semibold my-6">Address Information</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
//               <div className="flex flex-col">
//                 <label htmlFor="country" className="text-gray-800 py-2 font-semibold">
//                   Country
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   id="country"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                 
//                 >
//                   <option value="">Select</option>
//                   {/* Add country options here */}
//                 </select>
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="state" className="text-gray-800 py-2 font-semibold">
//                   State
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   id="state"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
           
//                 >
//                   <option value="">Select</option>
//                   {/* Add state options here */}
//                 </select>
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="city" className="text-gray-800 py-2 font-semibold">
//                   City
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   id="city"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                 
//                 >
//                   <option value="">Select</option>
//                   {/* Add city options here */}
//                 </select>
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="postal" className="text-gray-800 py-2 font-semibold">
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
//               <div className="flex flex-col">
//                 <label htmlFor="timeAtAddress" className="text-gray-800 py-2 font-semibold">
//                   Time at this address
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   id="timeAtAddress"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
               
//                 >
//                   <option value="">Select</option>
//                   {/* Add time options here */}
//                 </select>
//               </div>
//             </div>
//             <h2 className="text-xl font-semibold py-6">
//               Preferences and Referral Information
//               <span className="text-red-500">*</span>
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//               <div className="flex flex-col">
//                 <label htmlFor="shoppingPreferences" className="text-gray-700 font-bold py-2">
//                  Retailer Preferences
//                   <span className="text-red-500">*</span>
//                 </label>
            
//                 <input
//       id="retailer prefrence"
//       type="retailer prefrence"
//       placeholder="Retailer prefrence"
//       className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
    
//     />
//               </div>
           
              
//               </div>

    
//        {/* section 2 contact verifed */}

//        <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
// <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//   <div className="flex flex-col">
//     <div className="flex justify-between items-center">
//       <label htmlFor="phone" className="text-gray-800 py-2 font-semibold">
//         Phone Number
//         <span className="text-red-500">*</span>
//       </label>
//       <p className="flex items-center text-green-500">
//         Verified
//       </p>
//     </div>
//     <input
//       id="phone"
//       type="number"
//       placeholder="phone"
//       className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
    
//     />
//     <div className="mt-2">
//       <span className="text-gray-700">Preferred Mode of Communication:</span>
//       <a href="#" className="text-red-500 ml-1 hover:underline">Change</a>
//     </div>
//   </div>
//   <div className="flex flex-col">
//     <div className="flex justify-between items-center">
//       <label htmlFor="email" className="text-gray-800 py-2 font-semibold">
//         Email Address
//         <span className="text-red-500">*</span>
//       </label>
//       <p className="flex items-center text-green-500">
//         Verified
//       </p>
//     </div>
//     <input
//       id="email"
//       type="email"
//       placeholder="Email"
//       className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
    
//     />
//   </div>
// </div>
//  </div>
//  <hr className="my-6 border-t-2 border-gray-300" /> 
//  {/* Additional INformation */}
//   <div>
//                     <h2 className="text-xl font-semibold mb-6 mt-4">Additional Information</h2>
                   
                     
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       
//                             <div className="flex flex-col">
//                                 <label htmlFor="input1" className="text-gray-800 py-2 font-semibold">
//                                   Gender Biological
                                   
//                                 </label>
//                                 <select
//                   id=" Gender Biological"
//                   name=" Gender Biological"
//                   className="mt-1 block  p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 >
//                   <option>Select</option>
//                   <option>Option 1</option>
//                 </select>
//                             </div>
//                             <div className="flex flex-col">
//                                 <label htmlFor="input1" className="text-gray-800 py-2 font-semibold">
//                                   Gender Identity
                                   
//                                 </label>
//                                 <select
//                   id=" Gender Identity"
//                   name=" Gender Identity"
//                   className="mt-1 block  p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 >
//                   <option>Select</option>
//                   <option>Option 1</option>
//                 </select>
//                             </div>
//                             <div className="flex flex-col">
//                                 <label htmlFor="input1" className="text-gray-800 py-2 font-semibold">
//                                   Citizenship
                                  
//                                 </label>
//                                 <select
//                   id=" Citizenship"
//                   name="Citizenship"
//                   className="mt-1 block  p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 >
//                   <option>Select</option>
//                   <option>Option 1</option>
//                 </select>
//                             </div>

//  <div className="flex flex-col">
//                 <label htmlFor="income" className="text-gray-800 py-2 font-semibold">Income</label>
//                 <input
//                   type="text"
//                  id="income"
//                    name="income"
//                    placeholder="Enter Income"
//                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                 />               
//               </div>
// </div>



// <div className="mt-6">
//   <h2 className="text-xl font-bold">Household Information</h2>
  
 
//   <p className="mb-4">See why do we need this information</p>


 
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//     <div>
//       <label className="block text-gray-700 font-semibold mb-2">Married</label>
//       <div className="flex items-center space-x-4">
//         <label className="inline-flex items-center">
//           <input type="radio" name="married" value="yes" className="form-radio text-blue-600" />
//           <span className="ml-2">Yes</span>
//         </label>
//         <label className="inline-flex items-center">
//           <input type="radio" name="married" value="no" className="form-radio text-blue-600" />
//           <span className="ml-2">No</span>
//         </label>
//       </div>
//     </div>

//     <div>
//       <label className="block text-gray-700 font-semibold mb-2">Include Maid Name</label>
//       <div className="flex items-center space-x-4">
//         <label className="inline-flex items-center">
//           <input type="radio" name="includeMaid" value="yes" className="form-radio text-blue-600" />
//           <span className="ml-2">Yes</span>
//         </label>
//         <label className="inline-flex items-center">
//           <input type="radio" name="includeMaid" value="no" className="form-radio text-blue-600" />
//           <span className="ml-2">No</span>
//         </label>
//       </div>
//     </div>
//   </div>


//   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//     <div>
//       <label htmlFor="spouseName" className="block text-gray-700 font-semibold mb-2">Spouse Name</label>
//       <input
//         type="text"
//         id="spouseName"
//         name="spouseName"
//         placeholder="Spouse Name"
//         className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//       />
//     </div>

//     <div>
//       <label htmlFor="maidName" className="block text-gray-700 font-semibold mb-2">Maid Name</label>
//       <input
//         type="text"
//         id="maidName"
//         name="maidName"
//         placeholder="Maid Name"
//         className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//       />
//     </div>
//   </div>

 
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//     <div>
//       <label className="block text-gray-700 font-semibold mb-2">With Children</label>
//       <div className="flex items-center space-x-4">
//         <label className="inline-flex items-center">
//           <input type="radio" name="withChildren" value="yes" className="form-radio text-blue-600" />
//           <span className="ml-2">Yes</span>
//         </label>
//         <label className="inline-flex items-center">
//           <input type="radio" name="withChildren" value="no" className="form-radio text-blue-600" />
//           <span className="ml-2">No</span>
//         </label>
//       </div>
//     </div>

//     <div>
//       <label htmlFor="totalHousehold" className="block text-gray-700 font-semibold mb-2">Total Number in Household</label>
  
//       <input
//         type="household"
//         id="household"
//         name="household"
//         placeholder="household"
//         className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//       />
//     </div>
    
//   </div>


//   <div className="mb-4">
//     <label htmlFor="ageGroup" className="block text-gray-700 font-semibold mb-2">Age Group</label>
//     <input
//         type="ageGroup"
//         id="ageGroup"
//         name="ageGroup"
//         placeholder="ageGroup"
//         className="block w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//       />
//   </div>
// </div>

                     

//  </div>
// {/* Privacy Setting */}
//  <div>
//             <h2 className="text-xl font-semibold mb-6">Privacy Settings</h2>
          
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
       
//                             <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
//                  Submit
//              </button>
//           </div>
//         </form> 
//         </div>
//       </div>
//       <Footer/>
//     </>
//   );
// };
// export default ProfileInformation



import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import LeftSidebar from "./LeftSidebar";
import { MdOutlineModeEdit } from "react-icons/md";

const ProfileInformation = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Formik setup with Yup validation schema
  const formik = useFormik({
    initialValues: {
      pronouns: "",
      name: "",
      ethnicity: "",
      primaryLanguage: "",
      dobMM: "",
      dobDD: "",
      dobYYYY: "",
      phone: "",
      email: "",
      country: "",
      state: "",
      city: "",
      postal: "",
      timeAtAddress: "",
      retailerPreference: "",
      genderBiological: "",
      genderIdentity: "",
      citizenship: "",
      income: "",
      married: "",
      includeMaid: "",
      spouseName: "",
      maidName: "",
      ageGroup: "",
      household: "",
      privacySetting: "",
    },
    validationSchema: Yup.object({
      pronouns: Yup.string().required("Pronouns are required"),
      name: Yup.string().required("Name is required"),
      ethnicity: Yup.string().required("Ethnicity is required"),
      primaryLanguage: Yup.string().required("Primary Language is required"),
      dobMM: Yup.number()
        .min(1, "Invalid month")
        .max(12, "Invalid month")
        .required("Month is required"),
      dobDD: Yup.number()
        .min(1, "Invalid day")
        .max(31, "Invalid day")
        .required("Day is required"),
      dobYYYY: Yup.number()
        .min(1900, "Invalid year")
        .max(new Date().getFullYear(), "Invalid year")
        .required("Year is required"),
      phone: Yup.string().required("Phone number is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      country: Yup.string().required("Country is required"),
      state: Yup.string().required("State is required"),
      city: Yup.string().required("City is required"),
      postal: Yup.string().required("Postal code is required"),
      timeAtAddress: Yup.string().required("Time at this address is required"),
      retailerPreference: Yup.string().required("Retailer preference is required"),
    }),
    onSubmit: (values, { resetForm }) => {
        console.log("Form values", values);
        resetForm(); // Reset the form fields after successful submission
      },
    });

  return (
    <>
      <Navbar2 />
      <div className="flex flex-col md:flex-row min-h-screen p-6 font-roboto">
        <LeftSidebar />
        <div className="w-full md:w-2/3 md:mt-0 md:ml-6 mb-10 rounded-md">
          <div className="py-4">
            {/* Profile Completion Heading */}
            <h2 className="text-xl font-semibold mb-2">Profile Completion</h2>

            {/* Progress Bar Section */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 w-3/4">
                <div className="relative w-1/2 h-2 bg-blue-100 rounded-lg">
                  <div className="absolute top-0 left-0 h-2 bg-blue-500 rounded-lg" style={{ width: '90%' }}></div>
                </div>
                <span className="text-black font-semibold">90%</span>
              </div>

              {/* Edit Profile Section */}
              <div className="flex items-center ml-4 border border-gray-300 rounded">
                <span className="text-gray-500 rounded-full p-1">
                  <MdOutlineModeEdit className="h-4 w-4" />
                </span>
                <a href="#" className="text-gray-500 font-medium px-2 py-1 rounded-lg font-roboto">
                  Edit Profile
                </a>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-6">Profile</h2>
          <hr className="my-4 border-t-2 border-gray-300" />
          <form onSubmit={formik.handleSubmit}>
            {/* Personal Information */}
            <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex flex-col">
                <label htmlFor="pronouns" className="text-gray-800 py-2 font-semibold">
                  Pronouns <span className="text-red-500">*</span>
                </label>
                <select
                  id="pronouns"
                  name="pronouns"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.pronouns}
                  className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
                >
                  <option value="">Select Pronouns</option>
                  <option value="he/him">He/Him</option>
                  <option value="she/her">She/Her</option>
                  <option value="they/them">They/Them</option>
                </select>
                {formik.touched.pronouns && formik.errors.pronouns ? (
                  <div className="text-red-500 text-sm">{formik.errors.pronouns}</div>
                ) : null}
              </div>

              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-700 py-2 font-semibold">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 text-sm">{formik.errors.name}</div>
                ) : null}
              </div>
            </div>

            {/* Demographic Information */}
            <h2 className="text-xl font-semibold mb-6">Demographic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <label htmlFor="ethnicity" className="text-gray-700 font-bold py-2">
                  Ethnicity <span className="text-red-500">*</span>
                </label>
                <select
                  id="ethnicity"
                  name="ethnicity"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.ethnicity}
                  className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
                >
                  <option value="">Select Ethnicity</option>
                  <option value="asian">Asian</option>
                  <option value="black">African American</option>
                  <option value="other">Other</option>
                </select>
                {formik.touched.ethnicity && formik.errors.ethnicity ? (
                  <div className="text-red-500 text-sm">{formik.errors.ethnicity}</div>
                ) : null}
              </div>

              <div className="flex flex-col">
                <label htmlFor="primaryLanguage" className="text-gray-700 font-bold py-2">
                  Primary Language <span className="text-red-500">*</span>
                </label>
                <select
                  id="primaryLanguage"
                  name="primaryLanguage"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.primaryLanguage}
                  className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
                >
                  <option value="">Select Primary Language</option>
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                  <option value="other">Other</option>
                </select>
                {formik.touched.primaryLanguage && formik.errors.primaryLanguage ? (
                  <div className="text-red-500 text-sm">{formik.errors.primaryLanguage}</div>
                ) : null}
              </div>
            </div>

            {/* Date of Birth */}
            <div className="mb-6">
              <label className="text-gray-700 font-bold py-4">
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="number"
                  id="dobMM"
                  name="dobMM"
                  placeholder="MM"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dobMM}
                  min="1"
                  max="12"
                  className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a] font-semibold"
                />
                {formik.touched.dobMM && formik.errors.dobMM ? (
                  <div className="text-red-500 text-sm">{formik.errors.dobMM}</div>
                ) : null}

                <input
                  type="number"
                  id="dobDD"
                  name="dobDD"
                  placeholder="DD"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dobDD}
                  min="1"
                  max="31"
                  className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a] font-semibold"
                />
                {formik.touched.dobDD && formik.errors.dobDD ? (
                  <div className="text-red-500 text-sm">{formik.errors.dobDD}</div>
                ) : null}

                <input
                  type="number"
                  id="dobYYYY"
                  name="dobYYYY"
                  placeholder="YYYY"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dobYYYY}
                  min="1900"
                  max={new Date().getFullYear()}
                  className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a] font-semibold"
                />
                {formik.touched.dobYYYY && formik.errors.dobYYYY ? (
                  <div className="text-red-500 text-sm">{formik.errors.dobYYYY}</div>
                ) : null}
              </div>
            </div>

            {/* Contact Information */}
            <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-gray-800 py-2 font-semibold">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  placeholder="Phone Number"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <div className="mt-2">
      <span className="text-gray-700">Preferred Mode of Communication:</span>
      <a href="#" className="text-red-500 ml-1 hover:underline">Change</a>
    </div>
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="text-red-500 text-sm">{formik.errors.phone}</div>
                ) : null}
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-800 py-2 font-semibold">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder="Email"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm">{formik.errors.email}</div>
                ) : null}
              </div>
            </div>

            {/* Address Information */}
            <h2 className="text-xl font-semibold my-6">Address Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="flex flex-col">
                <label htmlFor="country" className="text-gray-800 py-2 font-semibold">
                  Country <span className="text-red-500">*</span>
                </label>
                <select
                  id="country"
                  name="country"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.country}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select</option>

                  <option value="india">India</option>
        <option value="usa">USA</option>
                  {/* Add country options here */}
                </select>
                {formik.touched.country && formik.errors.country ? (
                  <div className="text-red-500 text-sm">{formik.errors.country}</div>
                ) : null}
              </div>

              <div className="flex flex-col">
                <label htmlFor="state" className="text-gray-800 py-2 font-semibold">
                  State <span className="text-red-500">*</span>
                </label>
                <select
                  id="state"
                  name="state"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.state}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select</option>

                  <option value="delhi">Delhi</option>
        <option value="maharastra">Maharastra</option>
                  {/* Add state options here */}
                </select>
                {formik.touched.state && formik.errors.state ? (
                  <div className="text-red-500 text-sm">{formik.errors.state}</div>
                ) : null}
              </div>

              <div className="flex flex-col">
                <label htmlFor="city" className="text-gray-800 py-2 font-semibold">
                  City <span className="text-red-500">*</span>
                </label>
                <select
                  id="city"
                  name="city"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select</option>

                  <option value="delhi">Delhi</option>
        <option value="mumbai">Mumbai</option>
        
                  {/* Add city options here */}
                </select>
                {formik.touched.city && formik.errors.city ? (
                  <div className="text-red-500 text-sm">{formik.errors.city}</div>
                ) : null}
              </div>

              <div className="flex flex-col">
                <label htmlFor="postal" className="text-gray-800 py-2 font-semibold">
                  Postal Code <span className="text-red-500">*</span>
                </label>
                <input
                  id="postal"
                  name="postal"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.postal}
                  placeholder="Postal Code"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                {formik.touched.postal && formik.errors.postal ? (
                  <div className="text-red-500 text-sm">{formik.errors.postal}</div>
                ) : null}
              </div>

              <div className="flex flex-col">
                <label htmlFor="timeAtAddress" className="text-gray-800 py-2 font-semibold">
                  Time at this address <span className="text-red-500">*</span>
                </label>
                <select
                  id="timeAtAddress"
                  name="timeAtAddress"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.timeAtAddress}
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select</option>

                  <option value="resisdence">resisdence</option>
        <option value="permanent">Permanent</option>
                  {/* Add time options here */}
                </select>
                {formik.touched.timeAtAddress && formik.errors.timeAtAddress ? (
                  <div className="text-red-500 text-sm">{formik.errors.timeAtAddress}</div>
                ) : null}
              </div>
            </div>

            {/* Preferences and Referral Information */}
            <h2 className="text-xl font-semibold py-6">Preferences and Referral Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <label htmlFor="retailerPreference" className="text-gray-700 font-bold py-2">
                  Retailer Preferences <span className="text-red-500">*</span>
                </label>
                <input
                  id="retailerPreference"
                  name="retailerPreference"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.retailerPreference}
                  placeholder="Retailer Preference"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                {formik.touched.retailerPreference && formik.errors.retailerPreference ? (
                  <div className="text-red-500 text-sm">{formik.errors.retailerPreference}</div>
                ) : null}
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="flex flex-col">
    <div className="flex justify-between items-center">
      <label htmlFor="phone" className="text-gray-800 py-2 font-semibold">
        Phone Number
        <span className="text-red-500">*</span>
      </label>
      <p className="flex items-center text-green-500">
        Verified
      </p>
    </div>
    <input
      id="phone"
      type="number"
      placeholder="phone"
      className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
    
    />
    <div className="mt-2">
      <span className="text-gray-700">Preferred Mode of Communication:</span>
      <a href="#" className="text-red-500 ml-1 hover:underline">Change</a>
    </div>
  </div>
  <div className="flex flex-col">
    <div className="flex justify-between items-center">
      <label htmlFor="email" className="text-gray-800 py-2 font-semibold">
        Email Address
        <span className="text-red-500">*</span>
      </label>
      <p className="flex items-center text-green-500">
        Verified
      </p>
    </div>
    <input
      id="email"
      type="email"
      placeholder="Email"
      className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
    
    />
  </div>
</div> {/* Additional Information */}
  <h2 className="text-xl font-semibold mb-6 mt-4">Additional Information</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Gender Biological */}
    <div className="flex flex-col">
      <label htmlFor="genderBiological" className="text-gray-800 py-2 font-semibold">
        Gender Biological
      </label>
      <select
        id="genderBiological"
        name="genderBiological"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.genderBiological}
        className="mt-1 block p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      {formik.touched.genderBiological && formik.errors.genderBiological && (
        <div className="text-red-500 text-sm">{formik.errors.genderBiological}</div>
      )}
    </div>

    {/* Gender Identity */}
    <div className="flex flex-col">
      <label htmlFor="genderIdentity" className="text-gray-800 py-2 font-semibold">
        Gender Identity
      </label>
      <select
        id="genderIdentity"
        name="genderIdentity"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.genderIdentity}
        className="mt-1 block p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        <option value="">Select</option>
        <option value="cisgender">Cisgender</option>
        <option value="transgender">Transgender</option>
      </select>
      {formik.touched.genderIdentity && formik.errors.genderIdentity && (
        <div className="text-red-500 text-sm">{formik.errors.genderIdentity}</div>
      )}
    </div>

    {/* Citizenship */}
    <div className="flex flex-col">
      <label htmlFor="citizenship" className="text-gray-800 py-2 font-semibold">
        Citizenship
      </label>
      <select
        id="citizenship"
        name="citizenship"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.citizenship}
        className="mt-1 block p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        <option value="">Select</option>
        <option value="us">US Citizen</option>
        <option value="non-us">Non-US Citizen</option>
      </select>
      {formik.touched.citizenship && formik.errors.citizenship && (
        <div className="text-red-500 text-sm">{formik.errors.citizenship}</div>
      )}
    </div>

    {/* Income */}
    <div className="flex flex-col">
      <label htmlFor="income" className="text-gray-800 py-2 font-semibold">
        Income
      </label>
      <input
        id="income"
        name="income"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.income}
        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
      {formik.touched.income && formik.errors.income && (
        <div className="text-red-500 text-sm">{formik.errors.income}</div>
      )}
    </div>
  </div>

  {/* Household Information */}
  <h2 className="text-xl font-bold mt-6">Household Information</h2>
  <p className="mb-4">Why do we need this information?</p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
    {/* Married */}
    <div>
      <label className="block text-gray-700 font-semibold mb-2">Married</label>
      <div className="flex items-center space-x-4">
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="married"
            value="yes"
            onChange={formik.handleChange}
            className="form-radio text-blue-600"
          />
          <span className="ml-2">Yes</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="married"
            value="no"
            onChange={formik.handleChange}
            className="form-radio text-blue-600"
          />
          <span className="ml-2">No</span>
        </label>
      </div>
      {formik.touched.married && formik.errors.married && (
        <div className="text-red-500 text-sm">{formik.errors.married}</div>
      )}
    </div>

    {/* Include Maid */}
    <div>
      <label className="block text-gray-700 font-semibold mb-2">Include Maid Name</label>
      <div className="flex items-center space-x-4">
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="includeMaid"
            value="yes"
            onChange={formik.handleChange}
            className="form-radio text-blue-600"
          />
          <span className="ml-2">Yes</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="includeMaid"
            value="no"
            onChange={formik.handleChange}
            className="form-radio text-blue-600"
          />
          <span className="ml-2">No</span>
        </label>
      </div>
      {formik.touched.includeMaid && formik.errors.includeMaid && (
        <div className="text-red-500 text-sm">{formik.errors.includeMaid}</div>
      )}
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
    {/* Spouse Name */}
    <div>
      <label htmlFor="spouseName" className="block text-gray-700 font-semibold mb-2">
        Spouse Name
      </label>
      <input
        id="spouseName"
        name="spouseName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.spouseName}
        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
      {formik.touched.spouseName && formik.errors.spouseName && (
        <div className="text-red-500 text-sm">{formik.errors.spouseName}</div>
      )}
    </div>

    {/* Maid Name */}
    <div>
      <label htmlFor="maidName" className="block text-gray-700 font-semibold mb-2">
        Maid Name
      </label>
      <input
        id="maidName"
        name="maidName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.maidName}
        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
      {formik.touched.maidName && formik.errors.maidName && (
        <div className="text-red-500 text-sm">{formik.errors.maidName}</div>
      )}
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
    {/* With Children */}
    <div>
      <label className="block text-gray-700 font-semibold mb-2">With Children</label>
      <div className="flex items-center space-x-4">
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="withChildren"
            value="yes"
            onChange={formik.handleChange}
            className="form-radio text-blue-600"
          />
          <span className="ml-2">Yes</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="withChildren"
            value="no"
            onChange={formik.handleChange}
            className="form-radio text-blue-600"
          />
          <span className="ml-2">No</span>
        </label>
      </div>
      {formik.touched.withChildren && formik.errors.withChildren && (
        <div className="text-red-500 text-sm">{formik.errors.withChildren}</div>
      )}
    </div>

    {/* Total Household */}
    <div>
      <label htmlFor="household" className="block text-gray-700 font-semibold mb-2">
        Total Number in Household
      </label>
      <input
        id="household"
        name="household"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.household}
        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
      {formik.touched.household && formik.errors.household && (
        <div className="text-red-500 text-sm">{formik.errors.household}</div>
      )}
    </div>
  </div>

  {/* Privacy Settings */}
  <h2 className="text-xl font-semibold mb-6">Privacy Settings</h2>
  <div className="mb-6">
    <label htmlFor="privacySetting" className="block text-sm font-medium text-gray-700">
      Privacy Preference
    </label>
    <select
      id="privacySetting"
      name="privacySetting"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.privacySetting}
      className="mt-1 block w-1/2 p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    >
      <option value="">Select</option>
      <option value="public">Public</option>
      <option value="private">Private</option>
    </select>
    {formik.touched.privacySetting && formik.errors.privacySetting && (
      <div className="text-red-500 text-sm">{formik.errors.privacySetting}</div>
    )}
  </div>
 
           

            {/* Submit Button */}
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfileInformation;
