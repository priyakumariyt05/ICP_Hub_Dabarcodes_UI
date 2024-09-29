// import React, { useState } from "react";
// import { FaCheck, FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const AdditionalInformation = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8">
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
//               <FaCheck />
//             </div>
//             <span className="ml-4 text-[#333] font-medium">
//               Contact Details
//             </span>
//             <div className="absolute left-4 top-10 h-[100%] w-[2px] bg-[#0E95F5]"></div>
//           </li>
//           <li className="relative flex items-center mb-12">
//             <div className="bg-[#0E95F5] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
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
//           <h2 className="text-xl font-semibold mb-6">Additional Information</h2>
//           <form>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="input1"
//                   className="text-gray-800 py-2 font-semibold"
//                 >
//                   Gender Biological
//                 </label>
//                 <select
//                   id=" Gender Biological"
//                   name=" Gender Biological"
//                   className="mt-1 block  p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 >
//                   <option>Select</option>
//                   <option>Option 1</option>
//                 </select>
//               </div>
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="input1"
//                   className="text-gray-800 py-2 font-semibold"
//                 >
//                   Gender Biological
//                 </label>
//                 <select
//                   id=" Gender Biological"
//                   name=" Gender Biological"
//                   className="mt-1 block  p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 >
//                   <option>Select</option>
//                   <option>Option 1</option>
//                 </select>
//               </div>
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="input1"
//                   className="text-gray-800 py-2 font-semibold"
//                 >
//                   Citizenship
//                 </label>
//                 <select
//                   id=" Citizenship"
//                   name="Citizenship"
//                   className="mt-1 block  p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 >
//                   <option>Select</option>
//                   <option>Option 1</option>
//                 </select>
//               </div>

//               <div className="flex flex-col">
//                 <label
//                   htmlFor="Income"
//                   className="text-gray-800 py-2 font-semibold"
//                 >
//                   Income
//                 </label>
//                 <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
//                   <span className="px-2 text-sm text-gray-600 bg-gray-100 border-r border-gray-300 h-full flex items-center">
//                     USD
//                   </span>
//                   <select
//                     id="Income"
//                     name="Income"
//                     className="block w-full p-2 bg-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   >
//                     <option>Select</option>
//                     <option>Option 1</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Household */}

//             <div className="mt-6">
//               <h2 className="text-xl font-bold">Household Information</h2>

//               <p className="mb-4">See why do we need this information</p>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2">
//                     Married
//                   </label>
//                   <div className="flex items-center space-x-4">
//                     <label className="inline-flex items-center">
//                       <input
//                         type="radio"
//                         name="married"
//                         value="yes"
//                         className="form-radio text-blue-600"
//                       />
//                       <span className="ml-2">Yes</span>
//                     </label>
//                     <label className="inline-flex items-center">
//                       <input
//                         type="radio"
//                         name="married"
//                         value="no"
//                         className="form-radio text-blue-600"
//                       />
//                       <span className="ml-2">No</span>
//                     </label>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2">
//                     Include Maid Name
//                   </label>
//                   <div className="flex items-center space-x-4">
//                     <label className="inline-flex items-center">
//                       <input
//                         type="radio"
//                         name="includeMaid"
//                         value="yes"
//                         className="form-radio text-blue-600"
//                       />
//                       <span className="ml-2">Yes</span>
//                     </label>
//                     <label className="inline-flex items-center">
//                       <input
//                         type="radio"
//                         name="includeMaid"
//                         value="no"
//                         className="form-radio text-blue-600"
//                       />
//                       <span className="ml-2">No</span>
//                     </label>
//                   </div>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <label
//                     htmlFor="spouseName"
//                     className="block text-gray-700 font-semibold mb-2"
//                   >
//                     Spouse Name
//                   </label>
//                   <input
//                     type="text"
//                     id="spouseName"
//                     name="spouseName"
//                     placeholder="Spouse Name"
//                     className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="maidName"
//                     className="block text-gray-700 font-semibold mb-2"
//                   >
//                     Maid Name
//                   </label>
//                   <input
//                     type="text"
//                     id="maidName"
//                     name="maidName"
//                     placeholder="Maid Name"
//                     className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2">
//                     With Children
//                   </label>
//                   <div className="flex items-center space-x-4">
//                     <label className="inline-flex items-center">
//                       <input
//                         type="radio"
//                         name="withChildren"
//                         value="yes"
//                         className="form-radio text-blue-600"
//                       />
//                       <span className="ml-2">Yes</span>
//                     </label>
//                     <label className="inline-flex items-center">
//                       <input
//                         type="radio"
//                         name="withChildren"
//                         value="no"
//                         className="form-radio text-blue-600"
//                       />
//                       <span className="ml-2">No</span>
//                     </label>
//                   </div>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="totalHousehold"
//                     className="block text-gray-700 font-semibold mb-2"
//                   >
//                     Total Number in Household
//                   </label>
//                   <select
//                     id="totalHousehold"
//                     name="totalHousehold"
//                     className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   >
//                     <option>Select</option>
//                     <option value="">1-2</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="mb-4">
//                 <label
//                   htmlFor="ageGroup"
//                   className="block text-gray-700 font-semibold mb-2"
//                 >
//                   Age Group
//                 </label>
//                 <select
//                   id="ageGroup"
//                   name="ageGroup"
//                   className="block w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 >
//                   <option>Select</option>
//                   <option value="18-25">18-25</option>
//                 </select>
//               </div>
//             </div>
//           </form>
//         </div>

//         <div className="flex justify-between mt-8">
//           <Link to="/contact-details">
//             <button
//               type="button"
//               className="px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-md shadow-sm hover:bg-blue-50"
//             >
//               Back
//             </button>
//           </Link>
//           <Link to="/privacy-preference">
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

// export default AdditionalInformation;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { FaCheck, FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import ProfileSidebar from "./ProfileSidebar"; // Make sure to import your ProfileSidebar component

// const AdditionalInformation = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const navigate = useNavigate();

//   const validationSchema = Yup.object({
//     genderBiological1: Yup.string(),
//     genderBiological2: Yup.string(),
//     citizenship: Yup.string().matches(
//       /^[a-zA-Z\s]+$/,
//       "Invalid citizenship format"
//     ),
//     income: Yup.string().matches(/^\d+$/, "Income must be a number"),
//     married: Yup.string().oneOf(["yes", "no"], "Invalid option"),
//     includeMaid: Yup.string().oneOf(["yes", "no"], "Invalid option"),
//     spouseName: Yup.string()
//       .min(2, "Spouse name should be at least 2 characters")
//       .nullable(),
//     maidName: Yup.string()
//       .min(2, "Maid name should be at least 2 characters")
//       .nullable(),
//     withChildren: Yup.string().oneOf(["yes", "no"], "Invalid option"),
//     totalHousehold: Yup.string().matches(
//       /^\d+$/,
//       "Total household must be a number"
//     ),
//     ageGroup: Yup.string().oneOf(
//       ["18-25", "26-35", "36-45", "46-55", "56+"],
//       "Invalid age group"
//     ),
//   });

//   const formik = useFormik({
//     initialValues: {
//       genderBiological1: "",
//       genderBiological2: "",
//       citizenship: "",
//       income: "",
//       married: "",
//       includeMaid: "",
//       spouseName: "",
//       maidName: "",
//       withChildren: "",
//       totalHousehold: "",
//       ageGroup: "",
//     },
//     validationSchema,
//     onSubmit: (values) => {
//       // Handle form submission
//       console.log("Additional Data",values);
//       navigate("/privacy-preference");
//     },
//   });

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8 font-roboto relative">
//       {/* Toggle Button for Sidebar */}
//       <button
//         onClick={toggleSidebar}
//         className=" top-4 left-4 md:hidden z-50 p-2  rounded-md"
//       >
//         {sidebarOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Sidebar */}
//       <ProfileSidebar sidebarOpen={sidebarOpen} currentStep={3} />

//       {/* Main Content */}
//       <div className="bg-white w-full md:w-2/3 p-6 md:p-8 flex flex-col lg:mt-0 sm:mt-12">
//         <h2 className="text-xl font-semibold mb-6">Additional Information</h2>
//         <form onSubmit={formik.handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {[
//               {
//                 id: "genderBiological1",
//                 label: "Gender Biological",
//                 options: ["Option 1"],
//               },
//               {
//                 id: "genderBiological2",
//                 label: "Gender Biological",
//                 options: ["Option 1"],
//               },
//               {
//                 id: "citizenship",
//                 label: "Citizenship",
//                 options: ["Option 1"],
//               },
//               {
//                 id: "income",
//                 label: "Income",
//                 options: ["200","400"],
//                 prefix: "USD",
//               },
//               { id: "married", label: "Married", options: ["Yes", "No"] },
//               {
//                 id: "includeMaid",
//                 label: "Include Maid",
//                 options: ["Yes", "No"],
//               },
//               {
//                 id: "withChildren",
//                 label: "With Children",
//                 options: ["Yes", "No"],
//               },
//               {
//                 id: "ageGroup",
//                 label: "Age Group",
//                 options: ["18-25", "26-35", "36-45", "46-55", "56+"],
//               },
//             ].map(({ id, label, options, prefix }) => (
//               <div className="flex flex-col" key={id}>
//                 <label
//                   htmlFor={id}
//                   className="text-gray-800 py-2 font-semibold"
//                 >
//                   {label}
//                 </label>
//                 {prefix ? (
//                   <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
//                     <span className="px-2 text-sm text-gray-600 bg-gray-100 border-r border-gray-300 h-full flex items-center">
//                       {prefix}
//                     </span>
//                     <select
//                       id={id}
//                       name={id}
//                       className="block w-full p-2 bg-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                       value={formik.values[id]}
//                       onChange={formik.handleChange}
//                     >
//                       <option value="">Select</option>
//                       {options.map((option) => (
//                         <option key={option} value={option.toLowerCase()}>
//                           {option}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 ) : (
//                   <select
//                     id={id}
//                     name={id}
//                     className="mt-1 block p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                     value={formik.values[id]}
//                     onChange={formik.handleChange}
//                   >
//                     <option value="">Select</option>
//                     {options.map((option) => (
//                       <option key={option} value={option.toLowerCase()}>
//                         {option}
//                       </option>
//                     ))}
//                   </select>
//                 )}
//                 {formik.touched[id] && formik.errors[id] ? (
//                   <div className="text-red-500 text-sm">
//                     {formik.errors[id]}
//                   </div>
//                 ) : null}
//               </div>
//             ))}
//             <div className="flex flex-col">
//               <label
//                 htmlFor="spouseName"
//                 className="text-gray-800 py-2 font-semibold"
//               >
//                 Spouse Name
//               </label>
//               <input
//                 id="spouseName"
//                 name="spouseName"
//                 type="text"
//                 className="block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 value={formik.values.spouseName}
//                 onChange={formik.handleChange}
//               />
//               {formik.touched.spouseName && formik.errors.spouseName ? (
//                 <div className="text-red-500 text-sm">
//                   {formik.errors.spouseName}
//                 </div>
//               ) : null}
//             </div>
//             <div className="flex flex-col">
//               <label
//                 htmlFor="maidName"
//                 className="text-gray-800 py-2 font-semibold"
//               >
//                 Maid Name
//               </label>
//               <input
//                 id="maidName"
//                 name="maidName"
//                 type="text"
//                 className="block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 value={formik.values.maidName}
//                 onChange={formik.handleChange}
//               />
//               {formik.touched.maidName && formik.errors.maidName ? (
//                 <div className="text-red-500 text-sm">
//                   {formik.errors.maidName}
//                 </div>
//               ) : null}
//             </div>
//             <div className="flex flex-col">
//               <label
//                 htmlFor="totalHousehold"
//                 className="text-gray-800 py-2 font-semibold"
//               >
//                 Total Household
//               </label>
//               <input
//                 id="totalHousehold"
//                 name="totalHousehold"
//                 type="text"
//                 className="block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 value={formik.values.totalHousehold}
//                 onChange={formik.handleChange}
//               />
//               {formik.touched.totalHousehold && formik.errors.totalHousehold ? (
//                 <div className="text-red-500 text-sm">
//                   {formik.errors.totalHousehold}
//                 </div>
//               ) : null}
//             </div>
//           </div>

//           <div className="flex justify-between mt-8">
//             <Link to="/contact-details">
//               <button
//                 type="button"
//                 className="px-8 py-2 bg-white border border-blue-600 text-blue-600 rounded-md shadow-sm hover:bg-blue-50"
//               >
//                 Back
//               </button>
//             </Link>

//             <button
//               type="submit"
//               className="px-8 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700"
//             >
//               Next
//             </button>
         
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdditionalInformation;

import ProfileSidebar from "./ProfileSidebar";
import React, {useState} from "react";
import {FaCheck, FaBars, FaTimes} from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";

const AdditionalInformation = () => {
  const navigate= useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Validation schema
  const validationSchema = Yup.object().shape({
    genderBiological: Yup.string(),
    citizenship: Yup.string(),
    genderIdentity:Yup.string(),
    income: Yup.string(),
    married: Yup.string(),
    includeMaid: Yup.string(),
    spouseName: Yup.string(),
    maidName: Yup.string(),
    withChildren: Yup.string(),
    totalHousehold: Yup.string(),
    ageGroup: Yup.string(),
  });

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8 font-roboto relative">
      <button
        onClick={toggleSidebar}
        className="top-4 left-4 md:hidden z-50 p-2 rounded-md"
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <ProfileSidebar sidebarOpen={sidebarOpen} currentStep={3} />

      {/* Main Content */}
      <div className="bg-white w-full md:w-2/3 p-6 md:p-8 flex flex-col lg:mt-0 sm:mt-12">
        <h2 className="text-xl font-semibold mb-6">Additional Information</h2>

        <Formik
          initialValues={{
            genderBiological: "",
            citizenship: "",
            genderIdentity: "",
            income: "",
            married: "",
            includeMaid: "",
            spouseName: "",
            maidName: "",
            withChildren: "",
            totalHousehold: "",
            ageGroup: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("Additional data", values);
            navigate("/privacy-preference");
            // Handle form submission
          }}
        >
          {({isSubmitting}) => (
            <Form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="genderBiological"
                    className="text-gray-800 py-2 font-semibold"
                  >
                    Gender Biological
                  </label>
                  <Field
                    as="select"
                    id="genderBiological"
                    name="genderBiological"
                    className="mt-1 block p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Field>
                  <ErrorMessage
                    name="genderBiological"
                    component="div"
                    className="text-red-600"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="genderBiological"
                    className="text-gray-800 py-2 font-semibold"
                  >
                    Gender Identity
                  </label>
                  <Field
                    as="select"
                    id="genderIdentity"
                    name="genderIdentity"
                    className="mt-1 block p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Field>
                  <ErrorMessage
                    name="genderBiological"
                    component="div"
                    className="text-red-600"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="citizenship"
                    className="text-gray-800 py-2 font-semibold"
                  >
                    Citizenship
                  </label>
                  <Field
                    as="select"
                    id="citizenship"
                    name="citizenship"
                    className="mt-1 block p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="">Select</option>
                    <option value="option1">Option 1</option>
                  </Field>
                  <ErrorMessage
                    name="citizenship"
                    component="div"
                    className="text-red-600"
                  />
                </div>

               

                <div className="flex flex-col">
                  <label
                    htmlFor="Income"
                    className="text-gray-800 py-2 font-semibold"
                  >
                    Income
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                    <span className="px-2 text-sm text-gray-600 bg-gray-100 border-r border-gray-300 h-full flex items-center">
                      USD
                    </span>
                    <select
                      id="Income"
                      name="Income"
                      className="block w-full p-2 bg-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      <option value="select">Select</option>
                      <option value="200">200</option>
                      <option value="400">400</option>
                     
                    </select>
                  </div>
                </div>
              </div>

              {/* Household Information */}
              <div className="mt-6">
                <h2 className="text-xl font-bold">Household Information</h2>
                <p className="mb-4">See why do we need this information</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Married
                    </label>
                    <div className="flex items-center space-x-4">
                      <label className="inline-flex items-center">
                        <Field
                          type="radio"
                          name="married"
                          value="yes"
                          className="form-radio text-blue-600"
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <Field
                          type="radio"
                          name="married"
                          value="no"
                          className="form-radio text-blue-600"
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                    <ErrorMessage
                      name="married"
                      component="div"
                      className="text-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Include Maid Name
                    </label>
                    <div className="flex items-center space-x-4">
                      <label className="inline-flex items-center">
                        <Field
                          type="radio"
                          name="includeMaid"
                          value="yes"
                          className="form-radio text-blue-600"
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <Field
                          type="radio"
                          name="includeMaid"
                          value="no"
                          className="form-radio text-blue-600"
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                    <ErrorMessage
                      name="includeMaid"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="spouseName"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Spouse Name
                    </label>
                    <Field
                      type="text"
                      id="spouseName"
                      name="spouseName"
                      placeholder="Spouse Name"
                      className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    <ErrorMessage
                      name="spouseName"
                      component="div"
                      className="text-red-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="maidName"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Maid Name
                    </label>
                    <Field
                      type="text"
                      id="maidName"
                      name="maidName"
                      placeholder="Maid Name"
                      className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    <ErrorMessage
                      name="maidName"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      With Children
                    </label>
                    <div className="flex items-center space-x-4">
                      <label className="inline-flex items-center">
                        <Field
                          type="radio"
                          name="withChildren"
                          value="yes"
                          className="form-radio text-blue-600"
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <Field
                          type="radio"
                          name="withChildren"
                          value="no"
                          className="form-radio text-blue-600"
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                    <ErrorMessage
                      name="withChildren"
                      component="div"
                      className="text-red-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="totalHousehold"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Total Number in Household
                    </label>
                    <Field
                      as="select"
                      id="totalHousehold"
                      name="totalHousehold"
                      className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      <option value="">Select</option>
                      <option value="1-2">1-2</option>
                    </Field>
                    <ErrorMessage
                      name="totalHousehold"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="ageGroup"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Age Group
                  </label>
                  <Field
                    as="select"
                    id="ageGroup"
                    name="ageGroup"
                    className="block w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="">Select</option>
                    <option value="18-25">18-25</option>
                  </Field>
                  <ErrorMessage
                    name="ageGroup"
                    component="div"
                    className="text-red-600"
                  />
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <Link to="/contact-details">
                  <button
                    type="button"
                    className="px-8 py-2 bg-white border border-blue-600 text-blue-600 rounded-md shadow-sm hover:bg-blue-50"
                  >
                    Back
                  </button>
                </Link>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-2 bg-[#0D90C1]  text-white rounded-md shadow-sm hover:bg-blue-700"
                >
                  Next
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AdditionalInformation;