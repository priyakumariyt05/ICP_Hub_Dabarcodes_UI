// import React, { useState } from "react";
// import { FaCheck, FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const ContactDetails = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     phone: "",
//     email: "",
//     country: "",
//     state: "",
//     city: "",
//     postal: "",
//     timeAtAddress: "",
//     shoppingPreferences: "",
//     influencerReferralId: "",
//   });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({
//       ...formData,
//       [id]: value,
//     });
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8">
//       {/* Toggle Button for smaller screens */}
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
//         <h2 className="text-xl font-bold mb-8">Create Account</h2>

//         <ul className="relative">
//           <li className="relative flex items-center mb-12">
//             <div className="bg-[#0E95F5] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
//               <FaCheck />
//             </div>
//             <span className="ml-4 text-[#333] font-medium">
//               Personal Details
//             </span>
//             <div className="absolute left-4 top-10 h-[100%] w-[2px] bg-[#89c2fa]"></div>
//           </li>
//           <li className="relative flex items-center mb-12">
//             <div className="bg-[#0E95F5] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
//               2
//             </div>
//             <span className="ml-4 text-[#333] font-medium">
//               Contact Details
//             </span>
//             <div className="absolute left-4 top-10 h-[100%] w-[2px] bg-[#cdcecf]"></div>
//           </li>
//           <li className="relative flex items-center mb-12">
//             <div className="bg-[#b9bfc4] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
//               3
//             </div>
//             <span className="ml-4 text-[#333] font-medium">
//               Additional Information
//             </span>
//             <div className="absolute left-4 top-10 h-[100%] w-[2px] bg-[#cdcecf]"></div>
//           </li>
//           <li className="relative flex items-center mb-12">
//             <div className="bg-[#b9bfc4] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
//               4
//             </div>
//             <span className="ml-4 text-[#333] font-medium">
//               Privacy Preferences
//             </span>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div
//         className={`bg-white w-full md:w-2/3 p-4 md:p-8 flex flex-col justify-between ${
//           sidebarOpen ? "ml-0" : "md:ml-1/3"
//         } transition-all duration-300 ease-in-out`}
//       >
//         <div>
//           <h2 className="text-xl font-semibold mb-6">Contact Information</h2>

//           <form>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="phone"
//                   className="text-gray-800 py-2 font-semibold"
//                 >
//                   Phone Number
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   id="phone"
//                   type="text"
//                   placeholder="Phone Number"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                   value={formData.phone}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="email"
//                   className="text-gray-800 py-2 font-semibold"
//                 >
//                   Email Address
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   placeholder="Email"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="country"
//                   className="text-gray-800 py-2 font-semibold"
//                 >
//                   Country
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   id="country"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                   value={formData.country}
//                   onChange={handleChange}
//                 >
//                   <option value="">Select</option>
//                   {/* Add country options here */}
//                 </select>
//               </div>
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="state"
//                   className="text-gray-800 py-2 font-semibold"
//                 >
//                   State
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   id="state"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                   value={formData.state}
//                   onChange={handleChange}
//                 >
//                   <option value="">Select</option>
//                   {/* Add state options here */}
//                 </select>
//               </div>
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="city"
//                   className="text-gray-800 py-2 font-semibold"
//                 >
//                   City
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   id="city"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                   value={formData.city}
//                   onChange={handleChange}
//                 >
//                   <option value="">Select</option>
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
//                   value={formData.postal}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="timeAtAddress"
//                   className="text-gray-800 py-2 font-semibold"
//                 >
//                   Time at this address
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   id="timeAtAddress"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                   value={formData.timeAtAddress}
//                   onChange={handleChange}
//                 >
//                   <option value="">Select</option>
//                   {/* Add time options here */}
//                 </select>
//               </div>
//             </div>
//             <h2 className="text-gray-700 font-bold py-6">
//               Preferences and Referral Information
//               <span className="text-red-500">*</span>
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="shoppingPreferences"
//                   className="text-gray-700 font-bold py-2"
//                 >
//                   Shopping Preferences
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   id="shoppingPreferences"
//                   className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
//                 >
//                   <option value="">Select</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="influencerReferralId"
//                   className="text-gray-700 py-2 font-semibold"
//                 >
//                   Influencer Referral ID
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   id="influencerReferralId"
//                   type="text"
//                   placeholder="Influencer Referral ID"
//                   className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
//                 />
//               </div>
//             </div>
//           </form>
//         </div>

//         <div className="flex justify-between mt-8">
//           <Link to="/personal-details">
//             <button
//               type="button"
//               className="px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-md shadow-sm hover:bg-blue-50"
//             >
//               Back
//             </button>
//           </Link>
//           <Link to="/additional-information">
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

// export default ContactDetails;

// import React, { useState } from "react";
// import { FaCheck, FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";

// import { useFormik } from "formik";
// import * as Yup from "yup";

// const ContactDetails = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const formik = useFormik({
//     initialValues: {
//       phone: "",
//       email: "",
//       country: "",
//       state: "",
//       city: "",
//       postal: "",
//       timeAtAddress: "",
//       shoppingPreferences: "",
//       influencerReferralId: "",
//     },
//     validationSchema: Yup.object({
//       phone: Yup.string().required("Phone Number is required"),
//       email: Yup.string()
//         .email("Invalid email address")
//         .required("Email Address is required"),
//       country: Yup.string().required("Country is required"),
//       state: Yup.string().required("State is required"),
//       city: Yup.string().required("City is required"),
//       postal: Yup.string().required("Postal Code is required"),
//       timeAtAddress: Yup.string().required("Time at this address is required"),
//       shoppingPreferences: Yup.string().required(
//         "Shopping Preferences are required"
//       ),
//       influencerReferralId: Yup.string().required(
//         "Influencer Referral ID is required"
//       ),
//     }),
//     onSubmit: (values) => {
//       console.log(values);
//       // Handle form submission here
//     },
//   });

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8 font-roboto">
//       {/* Toggle Button for smaller screens */}
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
//         <h2 className="text-xl font-bold mb-8">Create Account</h2>

//         <ul className="relative">
//           <li className="relative flex items-center mb-12">
//             <div className="bg-[#0E95F5] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
//               <FaCheck />
//             </div>
//             <span className="ml-4 text-[#333] font-medium">
//               Personal Details
//             </span>
//             <div className="absolute left-4 top-10 h-[100%] w-[2px] bg-[#89c2fa]"></div>
//           </li>
//           <li className="relative flex items-center mb-12">
//             <div className="bg-[#0E95F5] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
//               2
//             </div>
//             <span className="ml-4 text-[#333] font-medium">
//               Contact Details
//             </span>
//             <div className="absolute left-4 top-10 h-[100%] w-[2px] bg-[#cdcecf]"></div>
//           </li>
//           <li className="relative flex items-center mb-12">
//             <div className="bg-[#b9bfc4] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
//               3
//             </div>
//             <span className="ml-4 text-[#333] font-medium">
//               Additional Information
//             </span>
//             <div className="absolute left-4 top-10 h-[100%] w-[2px] bg-[#cdcecf]"></div>
//           </li>
//           <li className="relative flex items-center mb-12">
//             <div className="bg-[#b9bfc4] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
//               4
//             </div>
//             <span className="ml-4 text-[#333] font-medium">
//               Privacy Preferences
//             </span>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div
//         className={`bg-white w-full md:w-2/3 p-4 md:p-8 flex flex-col justify-between ${
//           sidebarOpen ? "ml-0" : "md:ml-1/3"
//         } transition-all duration-300 ease-in-out`}
//       >
//         <div>
//           <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
//           <form onSubmit={formik.handleSubmit}>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="phone"
//                   className="text-gray-800 py-2 font-semibold"
//                 >
//                   Phone Number
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   id="phone"
//                   type="text"
//                   placeholder="Phone Number"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                   value={formik.values.phone}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
//                 {formik.touched.phone && formik.errors.phone ? (
//                   <div className="text-red-500 text-sm">
//                     {formik.errors.phone}
//                   </div>
//                 ) : null}
//               </div>
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="email"
//                   className="text-gray-800 py-2 font-semibold"
//                 >
//                   Email Address
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   placeholder="Email"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                   value={formik.values.email}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
//                 {formik.touched.email && formik.errors.email ? (
//                   <div className="text-red-500 text-sm">
//                     {formik.errors.email}
//                   </div>
//                 ) : null}
//               </div>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="country"
//                   className="text-gray-800 py-2 font-semibold"
//                 >
//                   Country
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   id="country"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                   value={formik.values.country}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 >
//                   <option value="">Select</option>
//                   {/* Add country options here */}
//                 </select>
//                 {formik.touched.country && formik.errors.country ? (
//                   <div className="text-red-500 text-sm">
//                     {formik.errors.country}
//                   </div>
//                 ) : null}
//               </div>
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="state"
//                   className="text-gray-800 py-2 font-semibold"
//                 >
//                   State
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   id="state"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                   value={formik.values.state}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 >
//                   <option value="">Select</option>
//                   {/* Add state options here */}
//                 </select>
//                 {formik.touched.state && formik.errors.state ? (
//                   <div className="text-red-500 text-sm">
//                     {formik.errors.state}
//                   </div>
//                 ) : null}
//               </div>
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="city"
//                   className="text-gray-800 py-2 font-semibold"
//                 >
//                   City
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   id="city"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                   value={formik.values.city}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 >
//                   <option value="">Select</option>
//                   {/* Add city options here */}
//                 </select>
//                 {formik.touched.city && formik.errors.city ? (
//                   <div className="text-red-500 text-sm">
//                     {formik.errors.city}
//                   </div>
//                 ) : null}
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
//                   value={formik.values.postal}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
//                 {formik.touched.postal && formik.errors.postal ? (
//                   <div className="text-red-500 text-sm">
//                     {formik.errors.postal}
//                   </div>
//                 ) : null}
//               </div>
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="timeAtAddress"
//                   className="text-gray-800 py-2 font-semibold"
//                 >
//                   Time at this address
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   id="timeAtAddress"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                   value={formik.values.timeAtAddress}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 >
//                   <option value="">Select</option>
//                   {/* Add time options here */}
//                 </select>
//                 {formik.touched.timeAtAddress && formik.errors.timeAtAddress ? (
//                   <div className="text-red-500 text-sm">
//                     {formik.errors.timeAtAddress}
//                   </div>
//                 ) : null}
//               </div>
//             </div>
//             <h2 className="text-gray-700 font-bold py-6">
//               Preferences and Referral Information
//               <span className="text-red-500">*</span>
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="shoppingPreferences"
//                   className="text-gray-700 font-bold py-2"
//                 >
//                   Shopping Preferences
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   id="shoppingPreferences"
//                   className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
//                   value={formik.values.shoppingPreferences}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 >
//                   <option value="">Select</option>
//                   <option value="other">Other</option>
//                 </select>
//                 {formik.touched.shoppingPreferences &&
//                 formik.errors.shoppingPreferences ? (
//                   <div className="text-red-500 text-sm">
//                     {formik.errors.shoppingPreferences}
//                   </div>
//                 ) : null}
//               </div>
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="influencerReferralId"
//                   className="text-gray-700 py-2 font-semibold"
//                 >
//                   Influencer Referral ID
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   id="influencerReferralId"
//                   type="text"
//                   placeholder="Influencer Referral ID"
//                   className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
//                   value={formik.values.influencerReferralId}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
//                 {formik.touched.influencerReferralId &&
//                 formik.errors.influencerReferralId ? (
//                   <div className="text-red-500 text-sm">
//                     {formik.errors.influencerReferralId}
//                   </div>
//                 ) : null}
//               </div>
//             </div>
//             <div className="flex justify-between mt-8">
//           <Link to="/personal-details">
//             <button
//               type="button"
//               className="px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-md shadow-sm hover:bg-blue-50"
//             >
//               Back
//             </button>
//           </Link>
//           <Link to="/additional-information">
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700"
//             >
//               Next
//             </button>
//           </Link>
//         </div>
//           </form>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ContactDetails;

import React, { useState } from "react";
import { FaCheck, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate} from "react-router-dom";
import ProfileSidebar from "./ProfileSidebar";

import { useFormik } from "formik";
import * as Yup from "yup";

const ContactDetails = () => {
  const navigate= useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const formik = useFormik({
    initialValues: {
      phone: "",
      email: "",
      country: "",
      state: "",
      city: "",
      postal: "",
      timeAtAddress: "",
      shoppingPreferences: "",
      influencerReferralId: "",
    },
    validationSchema: Yup.object({
      phone: Yup.string().required("Phone Number is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email Address is required"),
      country: Yup.string().required("Country is required"),
      state: Yup.string().required("State is required"),
      city: Yup.string().required("City is required"),
      postal: Yup.string().required("Postal Code is required"),
      timeAtAddress: Yup.string().required("Time at this address is required"),
      shoppingPreferences: Yup.string().required(
        "Shopping Preferences are required"
      ),
      influencerReferralId: Yup.string().required(
        "Influencer Referral ID is required"
      ),
    }),
    onSubmit: (values) => {
     console.log("contact details",values)
      // Handle form submission here
      navigate("/additional-information")
    },
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8 font-roboto relative">
      {/* Toggle Button for Sidebar */}
      <button
        onClick={toggleSidebar}
        className=" top-4 left-4 md:hidden z-50 p-2  rounded-md"
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <ProfileSidebar sidebarOpen={sidebarOpen} currentStep={2} />

      {/* Main Content */}

      <div className="bg-white w-full md:w-2/3 p-6 md:p-8 flex flex-col lg:mt-0 sm:mt-12">
        <div>
          <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label
                  htmlFor="phone"
                  className="text-gray-800 py-2 font-semibold"
                >
                  Phone Number
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="text"
                  placeholder="Phone Number"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.phone}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-gray-800 py-2 font-semibold"
                >
                  Email Address
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="flex flex-col">
                <label
                  htmlFor="country"
                  className="text-gray-800 py-2 font-semibold"
                >
                  Country
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="country"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="select">Select</option>
                  <option value="india">India</option>
                  {/* Add country options here */}
                </select>
                {formik.touched.country && formik.errors.country ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.country}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="state"
                  className="text-gray-800 py-2 font-semibold"
                >
                  State
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="state"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="select">Select</option>
                  <option value="delhi">delhi</option>
                  {/* Add state options here */}
                </select>
                {formik.touched.state && formik.errors.state ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.state}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="city"
                  className="text-gray-800 py-2 font-semibold"
                >
                  City
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="city"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="select">Select</option>
                  <option value="delhi">Delhi</option>
                  {/* Add city options here */}
                </select>
                {formik.touched.city && formik.errors.city ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.city}
                  </div>
                ) : null}
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
                  value={formik.values.postal}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.postal && formik.errors.postal ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.postal}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="timeAtAddress"
                  className="text-gray-800 py-2 font-semibold"
                >
                  Time at this address
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="timeAtAddress"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  value={formik.values.timeAtAddress}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="select">Select</option>
                  <option value="current">current</option>
                  <option value="permanent">permanent</option>
                  {/* Add time options here */}
                </select>
                {formik.touched.timeAtAddress && formik.errors.timeAtAddress ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.timeAtAddress}
                  </div>
                ) : null}
              </div>
            </div>
            <h2 className="text-gray-700 font-bold py-6">
              Preferences and Referral Information
              <span className="text-red-500">*</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <label
                  htmlFor="shoppingPreferences"
                  className="text-gray-700 font-bold py-2"
                >
                  Shopping Preferences
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="shoppingPreferences"
                  className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
                  value={formik.values.shoppingPreferences}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="">Select</option>
                  <option value="other">Other</option>
                </select>
                {formik.touched.shoppingPreferences &&
                formik.errors.shoppingPreferences ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.shoppingPreferences}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="influencerReferralId"
                  className="text-gray-700 py-2 font-semibold"
                >
                  Influencer Referral ID
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="influencerReferralId"
                  type="text"
                  placeholder="Influencer Referral ID"
                  className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
                  value={formik.values.influencerReferralId}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.influencerReferralId &&
                formik.errors.influencerReferralId ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.influencerReferralId}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex justify-between  mt-8 ">
              <Link to="/personal-details">
                <button
                  type="button"
                  className="px-8 py-2 bg-white border border-blue-600 text-blue-600 rounded-md shadow-sm hover:bg-blue-50"
                >
                  Back
                </button>
              </Link>

                <button
                  type="submit"
                  className="px-8 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700"
                >
                  Next
                </button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;






// import React, { useState, useEffect } from "react";
// import { FaCheck, FaBars, FaTimes } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import ProfileSidebar from "./ProfileSidebar";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useUser } from "../ContextApi/UserContext";

// const ContactDetails = () => {
//   const navigate = useNavigate();
//   const { userData, loading, error } = useUser();
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   // Formik setup
//   const formik = useFormik({
//     initialValues: {
//       phone_number: userData?.phone_number || "",
//       email_address: userData?.email_address || "",
//       country: userData?.country || "",
//       state: userData?.state || "",
//       city: userData?.city || "",
//       postal_code: userData?.postal_code || "",
//       time_at_this_address: userData?.time_at_this_address || "",
//       retailer_preferences: userData?.retailer_preferences || "",
//       influencer_referral_id: userData?.influencer_referral_id || "",
//     },
//     validationSchema: Yup.object({
//       phone_number: Yup.string().required("Phone Number is required"),
//       email_address: Yup.string()
//         .email("Invalid email address")
//         .required("Email Address is required"),
//       country: Yup.string().required("Country is required"),
//       state: Yup.string().required("State is required"),
//       city: Yup.string().required("City is required"),
//       postal_code: Yup.string().required("Postal Code is required"),
//       time_at_this_address: Yup.string().required(
//         "Time at this address is required"
//       ),
//       retailer_preferences: Yup.string().required(
//         "Shopping Preferences are required"
//       ),
//       influencer_referral_id: Yup.string().required(
//         "Influencer Referral ID is required"
//       ),
//     }),
//     onSubmit: (values) => {
//       console.log("Contact details", values);
//       // Handle form submission here
//       navigate("/additional-information");
//     },
//   });

//   useEffect(() => {
//     if (userData) {
//       formik.setValues({
//         phone_number: userData.phone_number || "",
//         email_address: userData.email_address || "",
//         country: userData.country || "",
//         state: userData.state || "",
//         city: userData.city || "",
//         postal_code: userData.postal_code || "",
//         time_at_this_address: userData.time_at_this_address || "",
//         retailer_preferences: userData.retailer_preferences || "",
//         influencer_referral_id: userData.influencer_referral_id || "",
//       });
//     }
//   }, [userData]);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error loading user data.</div>;

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8 font-roboto relative">
//       <button
//         onClick={toggleSidebar}
//         className="top-4 left-4 md:hidden z-50 p-2 rounded-md"
//       >
//         {sidebarOpen ? <FaTimes /> : <FaBars />}
//       </button>
//       <ProfileSidebar sidebarOpen={sidebarOpen} currentStep={2} />
//       <div className="bg-white w-full md:w-2/3 p-6 md:p-8 flex flex-col lg:mt-0 sm:mt-12">
//         <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
//         <form onSubmit={formik.handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="flex flex-col">
//               <label
//                 htmlFor="phone_number"
//                 className="text-gray-800 py-2 font-semibold"
//               >
//                 Phone Number <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="phone_number"
//                 type="text"
//                 placeholder="Phone Number"
//                 className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                 value={formik.values.phone_number}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//               />
//               {formik.touched.phone_number && formik.errors.phone_number ? (
//                 <div className="text-red-500 text-sm">
//                   {formik.errors.phone_number}
//                 </div>
//               ) : null}
//             </div>
//             <div className="flex flex-col">
//               <label
//                 htmlFor="email_address"
//                 className="text-gray-800 py-2 font-semibold"
//               >
//                 Email Address <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="email_address"
//                 type="email"
//                 placeholder="Email Address"
//                 className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                 value={formik.values.email_address}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//               />
//               {formik.touched.email_address && formik.errors.email_address ? (
//                 <div className="text-red-500 text-sm">
//                   {formik.errors.email_address}
//                 </div>
//               ) : null}
//             </div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
//             <div className="flex flex-col">
//               <label
//                 htmlFor="country"
//                 className="text-gray-800 py-2 font-semibold"
//               >
//                 Country <span className="text-red-500">*</span>
//               </label>
//               <select
//                 id="country"
//                 className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                 value={formik.values.country}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//               >
//                 <option value="">Select</option>
//                 <option value="india">India</option>
//                 {/* Add other countries here */}
//               </select>
//               {formik.touched.country && formik.errors.country ? (
//                 <div className="text-red-500 text-sm">
//                   {formik.errors.country}
//                 </div>
//               ) : null}
//             </div>
//             <div className="flex flex-col">
//               <label
//                 htmlFor="state"
//                 className="text-gray-800 py-2 font-semibold"
//               >
//                 State <span className="text-red-500">*</span>
//               </label>
//               <select
//                 id="state"
//                 className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                 value={formik.values.state}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//               >
//                 <option value="">Select</option>
//                 <option value="delhi">Delhi</option>
//                 {/* Add other states here */}
//               </select>
//               {formik.touched.state && formik.errors.state ? (
//                 <div className="text-red-500 text-sm">
//                   {formik.errors.state}
//                 </div>
//               ) : null}
//             </div>
//             <div className="flex flex-col">
//               <label
//                 htmlFor="city"
//                 className="text-gray-800 py-2 font-semibold"
//               >
//                 City <span className="text-red-500">*</span>
//               </label>
//               <select
//                 id="city"
//                 className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                 value={formik.values.city}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//               >
//                 <option value="">Select</option>
//                 <option value="delhi">Delhi</option>
//                 {/* Add other cities here */}
//               </select>
//               {formik.touched.city && formik.errors.city ? (
//                 <div className="text-red-500 text-sm">{formik.errors.city}</div>
//               ) : null}
//             </div>
//             <div className="flex flex-col">
//               <label
//                 htmlFor="postal_code"
//                 className="text-gray-800 py-2 font-semibold"
//               >
//                 Postal Code <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="postal_code"
//                 type="text"
//                 placeholder="Postal Code"
//                 className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                 value={formik.values.postal_code}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//               />
//               {formik.touched.postal_code && formik.errors.postal_code ? (
//                 <div className="text-red-500 text-sm">
//                   {formik.errors.postal_code}
//                 </div>
//               ) : null}
//             </div>
//             <div className="flex flex-col">
//               <label
//                 htmlFor="time_at_this_address"
//                 className="text-gray-800 py-2 font-semibold"
//               >
//                 Time at this address <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="time_at_this_address"
//                 type="text"
//                 placeholder="Time at this address"
//                 className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                 value={formik.values.time_at_this_address}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//               />
//               {formik.touched.time_at_this_address && formik.errors.time_at_this_address ? (
//                 <div className="text-red-500 text-sm">
//                   {formik.errors.time_at_this_address}
//                 </div>
//               ) : null}
//             </div>
//             <div className="flex flex-col">
//               <label
//                 htmlFor="retailer_preferences"
//                 className="text-gray-800 py-2 font-semibold"
//               >
//               Retailer Preferences <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="retailer_preferences"
//                 type="text"
//                 placeholder="Retailer Preferences"
//                 className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                 value={formik.values.retailer_preferences}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//               />
//               {formik.touched.retailer_preferences && formik.errors.retailer_preferences ? (
//                 <div className="text-red-500 text-sm">
//                   {formik.errors.retailer_preferences}
//                 </div>
//               ) : null}
//             </div>
//             <div className="flex flex-col">
//               <label
//                 htmlFor="influencer_referral_id"
//                 className="text-gray-800 py-2 font-semibold"
//               >
//                 Influencer Referral ID <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="influencer_referral_id"
//                 type="text"
//                 placeholder="Influencer Referral ID"
//                 className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                 value={formik.values.influencer_referral_id}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//               />
//               {formik.touched.influencer_referral_id && formik.errors.influencer_referral_id ? (
//                 <div className="text-red-500 text-sm">
//                   {formik.errors.influencer_referral_id}
//                 </div>
//               ) : null}
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg"
//           >
//             Continue
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactDetails;
