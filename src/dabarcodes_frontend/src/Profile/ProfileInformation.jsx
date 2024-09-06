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

import React from "react";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import LeftSidebar from "./LeftSidebar";
import { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";

const ProfileInformation = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);


  

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  
  return (
    <>
      <Navbar2 />
      <div className="flex flex-col md:flex-row min-h-screen p-6 ">

        <LeftSidebar/>
        <div className="w-full md:w-2/3 md:mt-0 md:ml-6 mb-10 rounded-md ">
        {/* <div className="bg-white w-full md:w-2/3  md:p-8 flex flex-col p-6"> */}
        {/* profile complete */}
    
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
          <span className="text-gray-500  rounded-full p-1">
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
         <form >
         {/* Personal Information */}
         <h2 className="text-xl font-semibold mb-6">Personal Information</h2>    
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          
            <div className="flex flex-col">
               <label htmlFor="pronouns" className="text-gray-800 py-2 font-semibold">
                Pronouns                 <span className="text-red-500">*</span>
              </label>
             <select
                id="pronouns"
              
                className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
              >
                <option value="">Select Pronouns</option>
               
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700 py-2 font-semibold">
                Name
                <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
               
                placeholder="Name"
                className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
              />
            </div>
          </div>
      {/* Demographic Information */}
      <h2 className="text-xl font-semibold mb-6">Demographic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label htmlFor="ethnicity" className="text-gray-700 font-bold py-2">
                Ethnicity
                <span className="text-red-500">*</span>
              </label>
              <select
                id="ethnicity"
            
                className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
              >
                <option value="">Select Ethnicity</option>
                <option value="asian">Asian</option>
                <option value="black">African American</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="primary-language" className="text-gray-700 font-bold py-2">
                Primary Language
                <span className="text-red-500">*</span>
              </label>
              <select
                id="primary-language"
              
                className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
              >
                <option value="">Select Primary Language</option>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
       
          <div className="mb-6">
            <label className="text-gray-700 font-bold py-4">
              Date of Birth
              <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="number"
                placeholder="MM"
               
                min="1"
                max="12"
                className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a] font-semibold"
              />
              <input
                type="number"
                placeholder="DD"
           
                min="1"
                max="31"
                className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a] font-semibold"
              />
              <input
                type="number"
                placeholder="YYYY"
                
                min="1900"
                max="2099"
                className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a] font-semibold"
              />
            </div>
          </div>
{/* contact */}
<div>
          <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
    
       
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-gray-800 py-2 font-semibold">
                  Phone Number
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="text"
                  placeholder="Phone Number"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                 
                />
                <div className="mt-2">
      <span className="text-gray-700">Preferred Mode of Communication:</span>
      <a href="#" className="text-red-500 ml-1 hover:underline">Change</a>
    </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-800 py-2 font-semibold">
                  Email Address
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  
                />
              </div>
            </div>
            {/* Address Information */}
            <h2 className="text-xl font-semibold my-6">Address Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="flex flex-col">
                <label htmlFor="country" className="text-gray-800 py-2 font-semibold">
                  Country
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="country"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                 
                >
                  <option value="">Select</option>
                  {/* Add country options here */}
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="state" className="text-gray-800 py-2 font-semibold">
                  State
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="state"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
           
                >
                  <option value="">Select</option>
                  {/* Add state options here */}
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="city" className="text-gray-800 py-2 font-semibold">
                  City
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="city"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                 
                >
                  <option value="">Select</option>
                  {/* Add city options here */}
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="postal" className="text-gray-800 py-2 font-semibold">
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
              <div className="flex flex-col">
                <label htmlFor="timeAtAddress" className="text-gray-800 py-2 font-semibold">
                  Time at this address
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="timeAtAddress"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
               
                >
                  <option value="">Select</option>
                  {/* Add time options here */}
                </select>
              </div>
            </div>
            <h2 className="text-xl font-semibold py-6">
              Preferences and Referral Information
              <span className="text-red-500">*</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <label htmlFor="shoppingPreferences" className="text-gray-700 font-bold py-2">
                 Retailer Preferences
                  <span className="text-red-500">*</span>
                </label>
            
                <input
      id="retailer prefrence"
      type="retailer prefrence"
      placeholder="Retailer prefrence"
      className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
    
    />
              </div>
           
              
              </div>

    
       {/* section 2 contact verifed */}

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
</div>
 </div>
 <hr className="my-6 border-t-2 border-gray-300" /> 
 {/* Additional INformation */}
  <div>
                    <h2 className="text-xl font-semibold mb-6 mt-4">Additional Information</h2>
                   
                     
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       
                            <div className="flex flex-col">
                                <label htmlFor="input1" className="text-gray-800 py-2 font-semibold">
                                  Gender Biological
                                   
                                </label>
                                <select
                  id=" Gender Biological"
                  name=" Gender Biological"
                  className="mt-1 block  p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option>Select</option>
                  <option>Option 1</option>
                </select>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="input1" className="text-gray-800 py-2 font-semibold">
                                  Gender Identity
                                   
                                </label>
                                <select
                  id=" Gender Identity"
                  name=" Gender Identity"
                  className="mt-1 block  p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option>Select</option>
                  <option>Option 1</option>
                </select>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="input1" className="text-gray-800 py-2 font-semibold">
                                  Citizenship
                                  
                                </label>
                                <select
                  id=" Citizenship"
                  name="Citizenship"
                  className="mt-1 block  p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option>Select</option>
                  <option>Option 1</option>
                </select>
                            </div>

 <div className="flex flex-col">
                <label htmlFor="income" className="text-gray-800 py-2 font-semibold">Income</label>
                <input
                  type="text"
                 id="income"
                   name="income"
                   placeholder="Enter Income"
                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />               
              </div>
</div>



<div className="mt-6">
  <h2 className="text-xl font-bold">Household Information</h2>
  
 
  <p className="mb-4">See why do we need this information</p>


 
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
    <div>
      <label className="block text-gray-700 font-semibold mb-2">Married</label>
      <div className="flex items-center space-x-4">
        <label className="inline-flex items-center">
          <input type="radio" name="married" value="yes" className="form-radio text-blue-600" />
          <span className="ml-2">Yes</span>
        </label>
        <label className="inline-flex items-center">
          <input type="radio" name="married" value="no" className="form-radio text-blue-600" />
          <span className="ml-2">No</span>
        </label>
      </div>
    </div>

    <div>
      <label className="block text-gray-700 font-semibold mb-2">Include Maid Name</label>
      <div className="flex items-center space-x-4">
        <label className="inline-flex items-center">
          <input type="radio" name="includeMaid" value="yes" className="form-radio text-blue-600" />
          <span className="ml-2">Yes</span>
        </label>
        <label className="inline-flex items-center">
          <input type="radio" name="includeMaid" value="no" className="form-radio text-blue-600" />
          <span className="ml-2">No</span>
        </label>
      </div>
    </div>
  </div>


  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
    <div>
      <label htmlFor="spouseName" className="block text-gray-700 font-semibold mb-2">Spouse Name</label>
      <input
        type="text"
        id="spouseName"
        name="spouseName"
        placeholder="Spouse Name"
        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
    </div>

    <div>
      <label htmlFor="maidName" className="block text-gray-700 font-semibold mb-2">Maid Name</label>
      <input
        type="text"
        id="maidName"
        name="maidName"
        placeholder="Maid Name"
        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
    </div>
  </div>

 
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
    <div>
      <label className="block text-gray-700 font-semibold mb-2">With Children</label>
      <div className="flex items-center space-x-4">
        <label className="inline-flex items-center">
          <input type="radio" name="withChildren" value="yes" className="form-radio text-blue-600" />
          <span className="ml-2">Yes</span>
        </label>
        <label className="inline-flex items-center">
          <input type="radio" name="withChildren" value="no" className="form-radio text-blue-600" />
          <span className="ml-2">No</span>
        </label>
      </div>
    </div>

    <div>
      <label htmlFor="totalHousehold" className="block text-gray-700 font-semibold mb-2">Total Number in Household</label>
  
      <input
        type="household"
        id="household"
        name="household"
        placeholder="household"
        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
    </div>
    
  </div>


  <div className="mb-4">
    <label htmlFor="ageGroup" className="block text-gray-700 font-semibold mb-2">Age Group</label>
    <input
        type="ageGroup"
        id="ageGroup"
        name="ageGroup"
        placeholder="ageGroup"
        className="block w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
  </div>
</div>

                     

 </div>
{/* Privacy Setting */}
 <div>
            <h2 className="text-xl font-semibold mb-6">Privacy Settings</h2>
          
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
       
                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                 Submit
             </button>
          </div>
        </form> 
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default ProfileInformation



// import * as Yup from 'yup';
// import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
// import React from "react";
// import Navbar2 from "../components/Navbar2";
// import Footer from "../components/Footer";
// import LeftSidebar from "./LeftSidebar";
// import { useState } from "react";
// import { MdOutlineModeEdit } from "react-icons/md";



// const initialValues = {
//   pronouns: '',
//   name: '',
//   ethnicity: '',
//   primaryLanguage: '',
//   phone: '',
//   email: '',
//   country: '',
//   state: '',
//   city: '',
//   postalCode: '',
//   retailerPreference: '',
//   additionalInformation: '',
//   genderBiological: '',
//   genderIdentity: '',
//   citizenship: '',
//   income: '',
//   married: '',
//   includeMaid: '',
//   spouseName: '',
//   maidName: '',
//   withChildren: '',
//   totalHousehold: '',
//   ageGroup: '',
//   privacyPreference: '',
// };

// const validationSchema = Yup.object().shape({
//   pronouns: Yup.string().required('Pronouns are required'),
//   name: Yup.string().required('Name is required'),
//   ethnicity: Yup.string().required('Ethnicity is required'),
//   primaryLanguage: Yup.string().required('Primary Language is required'),
//   phone: Yup.string().required('Phone number is required').matches(/^[0-9]+$/, "Must be a number"),
//   email: Yup.string().required('Email is required').email('Invalid email address'),
//   country: Yup.string().required('Country is required'),
//   state: Yup.string().required('State is required'),
//   city: Yup.string().required('City is required'),
//   postalCode: Yup.string().required('Postal Code is required'),
//   retailerPreference: Yup.string().required('Retailer Preference is required'),
//   additionalInformation: Yup.string(), 
//   genderBiological: Yup.string(),
//   genderIdentity: Yup.string(),
//   citizenship: Yup.string(),
//   income: Yup.string(),
//   married: Yup.string(),
//   includeMaid: Yup.string(),
//   spouseName: Yup.string(),
//   maidName: Yup.string().notRequired(),
//   withChildren: Yup.string(),
//   totalHousehold: Yup.string(),
//   ageGroup: Yup.string(),
//   privacyPreference: Yup.string(),
// });

// const ProfileInformation = () => {

//     const [sidebarOpen, setSidebarOpen] = useState(false);
//     const handleSubmit = (values) => {
//       console.log('Form data:', values);
//     };
 
//   return (
//     <>
//       <Navbar2 />
//       <div className="flex flex-col md:flex-row min-h-screen p-6 font-roboto">

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
//         <div className="flex items-center ml-4 border border-gray-300 rounded font-roboto">
//           <span className="text-gray-500  rounded-full p-1">
//             <MdOutlineModeEdit className="h-4 w-4" />
//           </span>
//           <a href="#" className="text-gray-500 font-medium px-2 py-1 rounded-lg font-roboto">
//             Edit Profile
//           </a>
//         </div>
//       </div>
//     </div>



//           <h2 className="text-2xl font-semibold font-roboto my-6 text-[#000000]"> My Profile</h2>
      
//           <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={handleSubmit}
//           >
//             {({ errors, touched }) => (
//               <Form>
               
          

//                 {/* Personal Information */}
//                 <h2 className="text-2xl font-medium mb-6">Personal Information</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                   <div className="flex flex-col">
//                     <label htmlFor="pronouns" className="text-gray-800 py-2 font-semibold">
//                       Pronouns <span className="text-red-500">*</span>
//                     </label>
//                     <Field name="pronouns" as="select" className="p-3 border border-[#ccc] rounded-lg">
//                       <option value="">Select Pronouns</option>
//                       <option value="he/him">He/Him</option>
//                       <option value="she/her">She/Her</option>
//                       <option value="they/them">They/Them</option>
//                     </Field>
//                     <ErrorMessage name="pronouns" component="div" className="text-red-500 text-sm" />
//                   </div>

//                   <div className="flex flex-col">
//                     <label htmlFor="name" className="text-gray-800 py-2 font-semibold">
//                       Name <span className="text-red-500">*</span>
//                     </label>
//                     <Field
//                       id="name"
//                       name="name"
//                       type="text"
//                       placeholder="Name"
//                       className="p-3 border border-[#ccc] rounded-lg"
//                     />
//                     <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
//                   </div>
//                 </div>

//                 {/* Demographic Information */}
//                 <h2 className="text-xl font-semibold mb-6">Demographic Information</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                   <div className="flex flex-col">
//                     <label htmlFor="ethnicity" className="text-gray-800 py-2 font-semibold">
//                       Ethnicity <span className="text-red-500">*</span>
//                     </label>
//                     <Field name="ethnicity" as="select" className="p-3 border border-[#ccc] rounded-lg">
//                       <option value="">Select Ethnicity</option>
//                       <option value="asian">Asian</option>
//                       <option value="black">African American</option>
//                       <option value="other">Other</option>
//                     </Field>
//                     <ErrorMessage name="ethnicity" component="div" className="text-red-500 text-sm" />
//                   </div>

//                   <div className="flex flex-col">
//                     <label htmlFor="primaryLanguage" className="text-gray-800 py-2 font-semibold">
//                       Primary Language <span className="text-red-500">*</span>
//                     </label>
//                     <Field name="primaryLanguage" as="select" className="p-3 border border-[#ccc] rounded-lg">
//                       <option value="">Select Primary Language</option>
//                       <option value="english">English</option>
//                       <option value="hindi">Hindi</option>
//                       <option value="other">Other</option>
//                     </Field>
//                     <ErrorMessage name="primaryLanguage" component="div" className="text-red-500 text-sm" />
//                   </div>
//                 </div>

//                 {/* Contact Information */}
//                 <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                   <div className="flex flex-col">
//                     <label htmlFor="phone" className="text-gray-800 py-2 font-semibold">
//                       Phone Number <span className="text-red-500">*</span>
//                     </label>
//                     <Field name="phone" type="text" placeholder="Phone Number" className="p-3 border border-[#ccc] rounded-lg" />
//                     <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
//                   </div>

//                   <div className="flex flex-col">
//                     <label htmlFor="email" className="text-gray-800 py-2 font-semibold">
//                       Email Address <span className="text-red-500">*</span>
//                     </label>
//                     <Field name="email" type="email" placeholder="Email" className="p-3 border border-[#ccc] rounded-lg" />
//                     <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
//                   </div>
//                 </div>
//                 {/*Additional INformation  */}
//                    {/* Additional Information */}
        
//             <h2 className="text-xl font-semibold mb-6 mt-4">Additional Information</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="flex flex-col">
//                 <label htmlFor="genderBiological" className="text-gray-800 py-2 font-semibold">Gender Biological</label>
//                 <Field
//                   as="select"
//                   id="genderBiological"
//                   name="genderBiological"
//                   className="mt-1 block p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 >
//                   <option value="">Select</option>
//                   <option value="option1">Option 1</option>
//                 </Field>
//                 <ErrorMessage name="genderBiological" component="div" className="text-red-500 text-sm" />
//               </div>

//               <div className="flex flex-col">
//                 <label htmlFor="genderIdentity" className="text-gray-800 py-2 font-semibold">Gender Identity</label>
//                 <Field
//                   as="select"
//                   id="genderIdentity"
//                   name="genderIdentity"
//                   className="mt-1 block p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 >
//                   <option value="">Select</option>
//                   <option value="option1">Option 1</option>
//                 </Field>
//                 <ErrorMessage name="genderIdentity" component="div" className="text-red-500 text-sm" />
//               </div>

//               <div className="flex flex-col">
//                 <label htmlFor="citizenship" className="text-gray-800 py-2 font-semibold">Citizenship</label>
//                 <Field
//                   as="select"
//                   id="citizenship"
//                   name="citizenship"
//                   className="mt-1 block p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 >
//                   <option value="">Select</option>
//                   <option value="option1">Option 1</option>
//                 </Field>
//                 <ErrorMessage name="citizenship" component="div" className="text-red-500 text-sm" />
//               </div>

//               <div className="flex flex-col">
//                 <label htmlFor="income" className="text-gray-800 py-2 font-semibold">Income</label>
//                 <Field
//                   type="text"
//                   id="income"
//                   name="income"
//                   placeholder="Enter Income"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                 />
//                 <ErrorMessage name="income" component="div" className="text-red-500 text-sm" />
//               </div>
//             </div>

//             <div className="mt-6">
//               <h2 className="text-xl font-bold">Household Information</h2>
//               <p className="mb-4">See why do we need this information</p>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2">Married</label>
//                   <div className="flex items-center space-x-4">
//                     <label className="inline-flex items-center">
//                       <Field type="radio" name="married" value="yes" className="form-radio text-blue-600" />
//                       <span className="ml-2">Yes</span>
//                     </label>
//                     <label className="inline-flex items-center">
//                       <Field type="radio" name="married" value="no" className="form-radio text-blue-600" />
//                       <span className="ml-2">No</span>
//                     </label>
//                   </div>
//                   <ErrorMessage name="married" component="div" className="text-red-500 text-sm" />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2">Include Maid Name</label>
//                   <div className="flex items-center space-x-4">
//                     <label className="inline-flex items-center">
//                       <Field type="radio" name="includeMaid" value="yes" className="form-radio text-blue-600" />
//                       <span className="ml-2">Yes</span>
//                     </label>
//                     <label className="inline-flex items-center">
//                       <Field type="radio" name="includeMaid" value="no" className="form-radio text-blue-600" />
//                       <span className="ml-2">No</span>
//                     </label>
//                   </div>
//                   <ErrorMessage name="includeMaid" component="div" className="text-red-500 text-sm" />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <label htmlFor="spouseName" className="block text-gray-700 font-semibold mb-2">Spouse Name</label>
//                   <Field
//                     type="text"
//                     id="spouseName"
//                     name="spouseName"
//                     placeholder="Spouse Name"
//                     className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   />
//                   <ErrorMessage name="spouseName" component="div" className="text-red-500 text-sm" />
//                 </div>

//                 <div>
//                   <label htmlFor="maidName" className="block text-gray-700 font-semibold mb-2">Maid Name</label>
//                   <Field
//                     type="text"
//                     id="maidName"
//                     name="maidName"
//                     placeholder="Maid Name"
//                     className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   />
//                   <ErrorMessage name="maidName" component="div" className="text-red-500 text-sm" />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2">With Children</label>
//                   <div className="flex items-center space-x-4">
//                     <label className="inline-flex items-center">
//                       <Field type="radio" name="withChildren" value="yes" className="form-radio text-blue-600" />
//                       <span className="ml-2">Yes</span>
//                     </label>
//                     <label className="inline-flex items-center">
//                       <Field type="radio" name="withChildren" value="no" className="form-radio text-blue-600" />
//                       <span className="ml-2">No</span>
//                     </label>
//                   </div>
//                   <ErrorMessage name="withChildren" component="div" className="text-red-500 text-sm" />
//                 </div>

//                 <div>
//                   <label htmlFor="totalHousehold" className="block text-gray-700 font-semibold mb-2">Total Number in Household</label>
//                   <Field
//                     as="select"
//                     id="totalHousehold"
//                     name="totalHousehold"
//                     className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   >
//                     <option value="">Select</option>
//                     <option value="1-2">1-2</option>
//                   </Field>
//                   <ErrorMessage name="totalHousehold" component="div" className="text-red-500 text-sm" />
//                 </div>
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="ageGroup" className="block text-gray-700 font-semibold mb-2">Age Group</label>
//                 <Field
//                   as="select"
//                   id="ageGroup"
//                   name="ageGroup"
//                   className="block w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 >
//                   <option value="">Select</option>
//                   <option value="18-25">18-25</option>
//                 </Field>
//                 <ErrorMessage name="ageGroup" component="div" className="text-red-500 text-sm" />
//               </div>
//             </div>

//             {/* Privacy Settings */}
//             <div>
//               <h2 className="text-xl font-semibold mb-6">Privacy Settings</h2>
//               <div className="mb-6">
//                 <label htmlFor="privacyPreference" className="block text-sm font-medium text-gray-700">
//                   Privacy Preference
//                 </label>
//                 <Field
//                   as="select"
//                   id="privacyPreference"
//                   name="privacyPreference"
//                   className="mt-1 block w-1/2 p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 >
//                   <option value="">Select</option>
//                   <option value="option1">Option 1</option>
//                 </Field>
//                 <ErrorMessage name="privacyPreference" component="div" className="text-red-500 text-sm" />
//               </div>
//             </div>

//                 {/* Submit Button */}
//                 <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
//                   Submit
//                 </button>
//               </Form>
         
//             )}
//           </Formik>
//         </div>
//       </div>
//       <Footer/>
//     </>
//   );
// };
// export default ProfileInformation;