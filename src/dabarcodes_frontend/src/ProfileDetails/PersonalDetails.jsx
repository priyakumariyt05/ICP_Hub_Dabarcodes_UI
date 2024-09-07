// import React, { useState } from 'react';

// import {  FaBars, FaTimes } from 'react-icons/fa';

// const PersonalDetails = () => {

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
//         className={`bg-[#D1EDFF] w-full md:w-1/3 p-6 rounded-lg  md:border-r md:border-gray-200
//           ${sidebarOpen ? 'block' : 'hidden'} md:block`}
//       >
//         <div className="mb-8">
//           <img src="/image/image 40.png" alt="Logo" className="h-8 w-auto mb-8" />
//         </div>
//         <h2 className="text-xl font-bold mb-8">Create Account</h2>

//         <ul className="relative">
//           <li className="relative flex items-center mb-12">
//             <div className="bg-[#0E95F5] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">1</div>
//             <span className="ml-4 text-[#333] font-medium">Personal Details</span>
//             <div className="absolute left-4 top-10 h-full w-[2px] bg-[#cdcecf]"></div>
//           </li>
//           <li className="relative flex items-center mb-12">
//             <div className="bg-[#b9bfc4] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">2</div>
//             <span className="ml-4 text-[#333] font-medium">Contact Details</span>
//             <div className="absolute left-4 top-10 h-full w-[2px] bg-[#cdcecf]"></div>
//           </li>
//           <li className="relative flex items-center mb-12">
//             <div className="bg-[#b9bfc4] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">3</div>
//             <span className="ml-4 text-[#333] font-medium">Additional Information</span>
//             <div className="absolute left-4 top-10 h-full w-[2px] bg-[#cdcecf]"></div>
//           </li>
//           <li className="relative flex items-center mb-12">
//             <div className="bg-[#b9bfc4] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">4</div>
//             <span className="ml-4 text-[#333] font-medium">Privacy Preferences</span>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="bg-white w-full md:w-2/3 p-6 md:p-8 flex flex-col">
//         <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
//         <form>
//           {/* Pronouns and name */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//             <div className="flex flex-col">
//               <label htmlFor="pronouns" className="text-gray-800 py-2 font-semibold">
//                 Pronouns
//                 <span className="text-red-500">*</span>
//               </label>
//               <select
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

//           {/* Date of Birth */}
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

//           {/* Demographic Information */}
//           <h2 className="text-gray-700 font-bold py-4">
//             Demographic Information
//             <span className="text-red-500">*</span>
//           </h2>
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
//         </form>
//         <div className="flex justify-end mt-8">
//           <button
//             type="submit"
//             className="px-4 py-2 bg-blue-400 text-white rounded-md shadow-sm hover:bg-blue-700"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PersonalDetails;

// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const PersonalDetails = () => {
//   // State management for sidebar toggle
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   // State management for form fields
//   const [pronouns, setPronouns] = useState("");
//   const [name, setName] = useState("");
//   const [dob, setDob] = useState({ month: "", day: "", year: "" });
//   const [ethnicity, setEthnicity] = useState("");
//   const [primaryLanguage, setPrimaryLanguage] = useState("");

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form data,
//     console.log({
//       pronouns,
//       name,
//       dob,
//       ethnicity,
//       primaryLanguage,
//     });
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
//         className={`bg-[#D1EDFF] w-full md:w-1/3 p-6 rounded-lg md:border-r md:border-gray-200 
//           ${sidebarOpen ? "block" : "hidden"} md:block`}
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
//               1
//             </div>
//             <span className="ml-4 text-[#333] font-medium">
//               Personal Details
//             </span>
//             <div className="absolute left-4 top-10 h-full w-[2px] bg-[#cdcecf]"></div>
//           </li>
//           <li className="relative flex items-center mb-12">
//             <div className="bg-[#b9bfc4] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
//               2
//             </div>
//             <span className="ml-4 text-[#333] font-medium">
//               Contact Details
//             </span>
//             <div className="absolute left-4 top-10 h-full w-[2px] bg-[#cdcecf]"></div>
//           </li>
//           <li className="relative flex items-center mb-12">
//             <div className="bg-[#b9bfc4] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
//               3
//             </div>
//             <span className="ml-4 text-[#333] font-medium">
//               Additional Information
//             </span>
//             <div className="absolute left-4 top-10 h-full w-[2px] bg-[#cdcecf]"></div>
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
//       <div className="bg-white w-full md:w-2/3 p-6 md:p-8 flex flex-col">
//         <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
//         <form onSubmit={handleSubmit}>
//           {/* Pronouns and name */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//             <div className="flex flex-col">
//               <label
//                 htmlFor="pronouns"
//                 className="text-gray-800 py-2 font-semibold"
//               >
//                 Pronouns
//                 <span className="text-red-500">*</span>
//               </label>
//               <select
//                 id="pronouns"
//                 value={pronouns}
//                 onChange={(e) => setPronouns(e.target.value)}
//                 className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
//               >
//                 <option value="">Select Pronouns</option>
//               </select>
//             </div>
//             <div className="flex flex-col">
//               <label
//                 htmlFor="name"
//                 className="text-gray-700 py-2 font-semibold"
//               >
//                 Name
//                 <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="name"
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Name"
//                 className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
//               />
//             </div>
//           </div>

//           {/* Date of Birth */}
//           <div className="mb-6">
//             <label className="text-gray-700 font-bold py-4">
//               Date of Birth
//               <span className="text-red-500">*</span>
//             </label>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <input
//                 type="number"
//                 placeholder="MM"
//                 value={dob.month}
//                 onChange={(e) => setDob({ ...dob, month: e.target.value })}
//                 min="1"
//                 max="12"
//                 className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a] font-semibold"
//               />
//               <input
//                 type="number"
//                 placeholder="DD"
//                 value={dob.day}
//                 onChange={(e) => setDob({ ...dob, day: e.target.value })}
//                 min="1"
//                 max="31"
//                 className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a] font-semibold"
//               />
//               <input
//                 type="number"
//                 placeholder="YYYY"
//                 value={dob.year}
//                 onChange={(e) => setDob({ ...dob, year: e.target.value })}
//                 min="1900"
//                 max="2099"
//                 className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a] font-semibold"
//               />
//             </div>
//           </div>

//           {/* Demographic Information */}
//           <h2 className="text-gray-700 font-bold py-4">
//             Demographic Information
//             <span className="text-red-500">*</span>
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//             <div className="flex flex-col">
//               <label
//                 htmlFor="ethnicity"
//                 className="text-gray-700 font-bold py-2"
//               >
//                 Ethnicity
//                 <span className="text-red-500">*</span>
//               </label>
//               <select
//                 id="ethnicity"
//                 value={ethnicity}
//                 onChange={(e) => setEthnicity(e.target.value)}
//                 className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
//               >
//                 <option value="">Select Ethnicity</option>
//                 <option value="asian">Asian</option>
//                 <option value="black">African American</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>

//             <div className="flex flex-col">
//               <label
//                 htmlFor="primary-language"
//                 className="text-gray-700 font-bold py-2"
//               >
//                 Primary Language
//                 <span className="text-red-500">*</span>
//               </label>
//               <select
//                 id="primary-language"
//                 value={primaryLanguage}
//                 onChange={(e) => setPrimaryLanguage(e.target.value)}
//                 className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
//               >
//                 <option value="">Select Primary Language</option>
//                 <option value="english">English</option>
//                 <option value="hindi">Hindi</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>
//           </div>
//           <div className="flex justify-end mt-8">
//             <Link to="/contact-details">
//               <button
//                 type="button"
//                 className="px-4 py-2 bg-blue-400 text-white rounded-md shadow-sm hover:bg-blue-700"
//               >
//                 Next
//               </button>
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PersonalDetails;
import React,{useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

const PersonalDetails = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const validationSchema = Yup.object({
    pronouns: Yup.string().required('Pronouns are required'),
    name: Yup.string().required('Name is required'),
    dob: Yup.object({
      month: Yup.number().min(1, 'Invalid month').max(12, 'Invalid month').required('Month is required'),
      day: Yup.number().min(1, 'Invalid day').max(31, 'Invalid day').required('Day is required'),
      year: Yup.number().min(1900, 'Invalid year').max(2099, 'Invalid year').required('Year is required')
    }).required('Date of Birth is required').shape({
      month: Yup.number().required('Month is required'),
      day: Yup.number().required('Day is required'),
      year: Yup.number().required('Year is required'),
    }),
    ethnicity: Yup.string().required('Ethnicity is required'),
    primaryLanguage: Yup.string().required('Primary Language is required')
  });
  
  
    const formik = useFormik({
      initialValues: {
        pronouns: '',
        name: '',
        dob: { month: '', day: '', year: '' },
        ethnicity: '',
        primaryLanguage: ''
      },
      validationSchema,
      onSubmit: (values) => {
        console.log(values);
        // Handle form submission here
      }
    });


  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

 
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8 font-roboto">
      <button
        onClick={toggleSidebar}
        className="md:hidden mb-4 p-2 bg-blue-600 text-white rounded-md self-start"
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div
        className={`bg-[#D1EDFF] w-full md:w-1/3 p-6 rounded-lg md:border-r md:border-gray-200 
          ${sidebarOpen ? "block" : "hidden"} md:block`}
      >
        <div className="mb-8">
          <img
            src="/image/image 40.png"
            alt="Logo"
            className="h-8 w-auto mb-8"
          />
        </div>
        <h2 className="text-xl font-bold mb-8">Create Account</h2>

        <ul className="relative">
          <li className="relative flex items-center mb-12">
            <div className="bg-[#0E95F5] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
              1
            </div>
            <span className="ml-4 text-[#333] font-medium">
              Personal Details
            </span>
            <div className="absolute left-4 top-10 h-full w-[2px] bg-[#cdcecf]"></div>
          </li>
          <li className="relative flex items-center mb-12">
            <div className="bg-[#b9bfc4] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
              2
            </div>
            <span className="ml-4 text-[#333] font-medium">
              Contact Details
            </span>
            <div className="absolute left-4 top-10 h-full w-[2px] bg-[#cdcecf]"></div>
          </li>
          <li className="relative flex items-center mb-12">
            <div className="bg-[#b9bfc4] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
              3
            </div>
            <span className="ml-4 text-[#333] font-medium">
              Additional Information
            </span>
            <div className="absolute left-4 top-10 h-full w-[2px] bg-[#cdcecf]"></div>
          </li>
          <li className="relative flex items-center mb-12">
            <div className="bg-[#b9bfc4] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
              4
            </div>
            <span className="ml-4 text-[#333] font-medium">
              Privacy Preferences
            </span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="bg-white w-full md:w-2/3 p-6 md:p-8 flex flex-col">
        <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
        <form onSubmit={formik.handleSubmit}>
      {/* Pronouns and name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex flex-col">
          <label
            htmlFor="pronouns"
            className="text-gray-800 py-2 font-semibold"
          >
            Pronouns
            <span className="text-red-500">*</span>
          </label>
          <select
            id="pronouns"
            name="pronouns"
            value={formik.values.pronouns}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
          >
            <option value="">Select Pronouns</option>
            {/* Add your options here */}
          </select>
          {formik.touched.pronouns && formik.errors.pronouns ? (
            <div className="text-red-500 text-sm">{formik.errors.pronouns}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-gray-700 py-2 font-semibold"
          >
            Name
            <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Name"
            className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          ) : null}
        </div>
      </div>

      {/* Date of Birth */}
      <div className="mb-6">
        <label className="text-gray-700 font-bold py-4">
          Date of Birth
          <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="number"
            name="dob.month"
            placeholder="MM"
            value={formik.values.dob.month}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            min="1"
            max="12"
            className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a] font-semibold"
          />
          {formik.touched.dob?.month && formik.errors.dob?.month ? (
            <div className="text-red-500 text-sm">{formik.errors.dob.month}</div>
          ) : null}

          <input
            type="number"
            name="dob.day"
            placeholder="DD"
            value={formik.values.dob.day}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            min="1"
            max="31"
            className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a] font-semibold"
          />
          {formik.touched.dob?.day && formik.errors.dob?.day ? (
            <div className="text-red-500 text-sm">{formik.errors.dob.day}</div>
          ) : null}

          <input
            type="number"
            name="dob.year"
            placeholder="YYYY"
            value={formik.values.dob.year}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            min="1900"
            max="2099"
            className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a] font-semibold"
          />
          {formik.touched.dob?.year && formik.errors.dob?.year ? (
            <div className="text-red-500 text-sm">{formik.errors.dob.year}</div>
          ) : null}
        </div>
      </div>

      {/* Demographic Information */}
      <h2 className="text-gray-700 font-bold py-4">
        Demographic Information
        <span className="text-red-500">*</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col">
          <label
            htmlFor="ethnicity"
            className="text-gray-700 font-bold py-2"
          >
            Ethnicity
            <span className="text-red-500">*</span>
          </label>
          <select
            id="ethnicity"
            name="ethnicity"
            value={formik.values.ethnicity}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
          <label
            htmlFor="primary-language"
            className="text-gray-700 font-bold py-2"
          >
            Primary Language
            <span className="text-red-500">*</span>
          </label>
          <select
            id="primary-language"
            name="primaryLanguage"
            value={formik.values.primaryLanguage}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
      <div className="flex justify-end mt-8">
        <Link to="/contact-details">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-400 text-white rounded-md shadow-sm hover:bg-blue-700"
          >
            Next
          </button>
        </Link>
      </div>
    </form>
      </div>
    </div>
  );
};

export default PersonalDetails;
