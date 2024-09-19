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

// import React, { useState } from "react";
// import { FaCheck, FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const PrivacyPreference = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white p-8 relative">
//       <div className="flex w-full max-w-5xl h-[600px] relative">
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
//           ${
//             isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//           } md:translate-x-0 absolute md:relative z-20 h-full`}
//         >
//           <div className="mb-8">
//             <img
//               src="/image/image 40.png"
//               alt="Logo"
//               className="h-8 w-auto mb-8"
//             />
//           </div>
//           <h2 className="text-xl font-semibold mb-8">Create Account</h2>

//           <ul className="relative">
//             <li className="relative flex items-center mb-12">
//               <div className="bg-[#0E95F5] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
//                 <FaCheck />
//               </div>
//               <span className="ml-4 text-[#333] font-medium">
//                 Personal Details
//               </span>
//               <div className="absolute left-4 top-10 h-full w-[2px] bg-[#0E95F5]"></div>
//             </li>
//             <li className="relative flex items-center mb-12">
//               <div className="bg-[#0E95F5] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
//                 <FaCheck />
//               </div>
//               <span className="ml-4 text-[#333] font-medium">
//                 Contact Details
//               </span>
//               <div className="absolute left-4 top-10 h-full w-[2px] bg-[#0E95F5]"></div>
//             </li>
//             <li className="relative flex items-center mb-12">
//               <div className="bg-[#0E95F5] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
//                 <FaCheck />
//               </div>
//               <span className="ml-4 text-[#333] font-medium">
//                 Additional Information
//               </span>
//               <div className="absolute left-4 top-10 h-full w-[2px] bg-[#0E95F5]"></div>
//             </li>
//             <li className="relative flex items-center mb-12">
//               <div className="bg-[#0E95F5] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
//                 4
//               </div>
//               <span className="ml-4 text-[#333] font-medium">
//                 Privacy Preferences
//               </span>
//             </li>
//           </ul>
//         </div>

//         {/* Main Content */}
//         <div className="bg-white w-full md:w-2/3 p-8 flex flex-col justify-between ml-auto">
//           <div>
//             <h2 className="text-xl font-semibold mb-6">Privacy Settings</h2>
//             <form>
//               <div className="mb-6">
//                 <label
//                   htmlFor="privacy-preference"
//                   className="block text-sm font-medium text-gray-700"
//                 >
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
//                   <input
//                     type="checkbox"
//                     className="form-checkbox text-blue-600"
//                   />
//                   <span className="ml-2 text-sm">
//                     Give Permission to name-related logins
//                   </span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="inline-flex items-center">
//                   <input
//                     type="checkbox"
//                     className="form-checkbox text-blue-600"
//                   />
//                   <span className="ml-2 text-sm">
//                     Send confirmation email to verify logon permissions
//                   </span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="inline-flex items-center">
//                   <input
//                     type="checkbox"
//                     className="form-checkbox text-blue-600"
//                   />
//                   <span className="ml-2 text-sm">
//                     Send confirmation email to verify the degree of anonymity
//                   </span>
//                 </label>
//               </div>
//             </form>
//           </div>
//           <div className="flex justify-between mt-8">
//             <Link to="/additional-information">
//               <button
//                 type="button"
//                 className="px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-md shadow-sm hover:bg-blue-50"
//               >
//                 Back
//               </button>
//             </Link>
//             {/* <button
//               type="submit"
//               className="px-4 py-2 bg-blue-400 text-white rounded-md shadow-sm hover:bg-blue-700"
//             >
//               Submit
//             </button> */}
//             <Link
//               to="/homepage2"
//               className="px-4 py-2 bg-blue-400 text-white rounded-md shadow-sm hover:bg-blue-700 inline-block"
//             >
//               Submit
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrivacyPreference;
// import React, { useState } from "react";
// import { FaCheck, FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";

// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// const PrivacyPreference = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const validationSchema = Yup.object({
//     privacyPreference: Yup.string().required('Privacy preference is required'),
//     permissionForLogins: Yup.boolean(),
//     confirmationEmailPermissions: Yup.boolean(),
//     confirmationEmailAnonymity: Yup.boolean(),
//   });
  
  
//     const formik = useFormik({
//       initialValues: {
//         privacyPreference: '',
//         permissionForLogins: false,
//         confirmationEmailPermissions: false,
//         confirmationEmailAnonymity: false,
//       },
//       validationSchema,
//       onSubmit: (values) => {
//         console.log(values);
//         // Handle form submission here
//       },
//     });

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white p-8 relative font-roboto">
//       <div className="flex w-full max-w-5xl h-[600px] relative">
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
//           ${
//             isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//           } md:translate-x-0 absolute md:relative z-20 h-full`}
//         >
//           <div className="mb-8">
//             <img
//               src="/image/image 40.png"
//               alt="Logo"
//               className="h-8 w-auto mb-8"
//             />
//           </div>
//           <h2 className="text-xl font-semibold mb-8">Create Account</h2>

//           <ul className="relative">
//             <li className="relative flex items-center mb-12">
//               <div className="bg-[#0E95F5] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
//                 <FaCheck />
//               </div>
//               <span className="ml-4 text-[#333] font-medium">
//                 Personal Details
//               </span>
//               <div className="absolute left-4 top-10 h-full w-[2px] bg-[#0E95F5]"></div>
//             </li>
//             <li className="relative flex items-center mb-12">
//               <div className="bg-[#0E95F5] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
//                 <FaCheck />
//               </div>
//               <span className="ml-4 text-[#333] font-medium">
//                 Contact Details
//               </span>
//               <div className="absolute left-4 top-10 h-full w-[2px] bg-[#0E95F5]"></div>
//             </li>
//             <li className="relative flex items-center mb-12">
//               <div className="bg-[#0E95F5] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
//                 <FaCheck />
//               </div>
//               <span className="ml-4 text-[#333] font-medium">
//                 Additional Information
//               </span>
//               <div className="absolute left-4 top-10 h-full w-[2px] bg-[#0E95F5]"></div>
//             </li>
//             <li className="relative flex items-center mb-12">
//               <div className="bg-[#0E95F5] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
//                 4
//               </div>
//               <span className="ml-4 text-[#333] font-medium">
//                 Privacy Preferences
//               </span>
//             </li>
//           </ul>
//         </div>

//         {/* Main Content */}
//         <div className="bg-white w-full md:w-2/3 p-8 flex flex-col justify-between ml-auto">
//           <div>
//             <h2 className="text-xl font-semibold mb-6">Privacy Settings</h2>
//             <form onSubmit={formik.handleSubmit}>
//       <div className="mb-6">
//         <label
//           htmlFor="privacy-preference"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Privacy Preference
//         </label>
//         <select
//           id="privacy-preference"
//           name="privacyPreference"
//           value={formik.values.privacyPreference}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           className="mt-1 block w-1/2 p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//         >
//           <option value="">Select</option>
//           <option value="option1">Option 1</option>
//           {/* Add more options as needed */}
//         </select>
//         {formik.touched.privacyPreference && formik.errors.privacyPreference ? (
//           <div className="text-red-500 text-sm">{formik.errors.privacyPreference}</div>
//         ) : null}
//       </div>

//       <div className="mb-4">
//         <label className="inline-flex items-center">
//           <input
//             type="checkbox"
//             name="permissionForLogins"
//             checked={formik.values.permissionForLogins}
//             onChange={formik.handleChange}
//             className="form-checkbox text-blue-600"
//           />
//           <span className="ml-2 text-sm">
//             Give Permission to name-related logins
//           </span>
//         </label>
//       </div>

//       <div className="mb-4">
//         <label className="inline-flex items-center">
//           <input
//             type="checkbox"
//             name="confirmationEmailPermissions"
//             checked={formik.values.confirmationEmailPermissions}
//             onChange={formik.handleChange}
//             className="form-checkbox text-blue-600"
//           />
//           <span className="ml-2 text-sm">
//             Send confirmation email to verify logon permissions
//           </span>
//         </label>
//       </div>

//       <div className="mb-4">
//         <label className="inline-flex items-center">
//           <input
//             type="checkbox"
//             name="confirmationEmailAnonymity"
//             checked={formik.values.confirmationEmailAnonymity}
//             onChange={formik.handleChange}
//             className="form-checkbox text-blue-600"
//           />
//           <span className="ml-2 text-sm">
//             Send confirmation email to verify the degree of anonymity
//           </span>
//         </label>
//       </div>
     
     
//     </form>
//           </div>
//           <div className="flex justify-between mt-8">
//             <Link to="/additional-information">
//               <button
//                 type="button"
//                 className="px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-md shadow-sm hover:bg-blue-50"
//               >
//                 Back
//               </button>
//             </Link>
//             {/* <button
//               type="submit"
//               className="px-4 py-2 bg-blue-400 text-white rounded-md shadow-sm hover:bg-blue-700"
//             >
//               Submit
//             </button> */}
//             <Link
//               to="/homepage2"
//               className="px-4 py-2 bg-blue-400 text-white rounded-md shadow-sm hover:bg-blue-700 inline-block"
//             >
//               Submit
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrivacyPreference;
import React, { useState } from "react";
import { FaCheck, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProfileSidebar from "./ProfileSidebar";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const PrivacyPreference = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Validation schema for formik
  const validationSchema = Yup.object({
    privacyPreference: Yup.string().required('Privacy preference is required'),
    permissionForLogins: Yup.boolean(),
    confirmationEmailPermissions: Yup.boolean(),
    confirmationEmailAnonymity: Yup.boolean(),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      privacyPreference: '',
      permissionForLogins: false,
      confirmationEmailPermissions: false,
      confirmationEmailAnonymity: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission here
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
        className=" top-4 left-4 md:hidden z-50 p-2 text-black rounded-md"
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <ProfileSidebar sidebarOpen={sidebarOpen} currentStep={4} />

      {/* Main Content */}
      <div className="bg-white w-full md:w-2/3 p-8 flex flex-col justify-between ml-auto">
        <div className="flex-grow">
          <h2 className="text-xl font-semibold mb-6">Privacy Settings</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="privacy-preference"
                className="block text-sm font-medium text-gray-700"
              >
                Privacy Preference
              </label>
              <select
                id="privacy-preference"
                name="privacyPreference"
                value={formik.values.privacyPreference}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-1 block w-full md:w-1/2 p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Select</option>
                <option value="option1">Option 1</option>
                {/* Add more options as needed */}
              </select>
              {formik.touched.privacyPreference && formik.errors.privacyPreference ? (
                <div className="text-red-500 text-sm">{formik.errors.privacyPreference}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="permissionForLogins"
                  checked={formik.values.permissionForLogins}
                  onChange={formik.handleChange}
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2 text-sm">
                  Give Permission to name-related logins
                </span>
              </label>
            </div>

            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="confirmationEmailPermissions"
                  checked={formik.values.confirmationEmailPermissions}
                  onChange={formik.handleChange}
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2 text-sm">
                  Send confirmation email to verify logon permissions
                </span>
              </label>
            </div>

            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="confirmationEmailAnonymity"
                  checked={formik.values.confirmationEmailAnonymity}
                  onChange={formik.handleChange}
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2 text-sm">
                  Send confirmation email to verify the degree of anonymity
                </span>
              </label>
            </div>
          </form>
        </div>

        {/* Button Container */}
        <div className="flex justify-between mt-8">
          <Link to="/additional-information">
            <button
              type="button"
              className="px-8 py-2 bg-white border border-blue-600 text-blue-600 rounded-md shadow-sm hover:bg-blue-50"
            >
              Back
            </button>
          </Link>
          <Link
            to="/create-password"
            className="px-8 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700"
          >
          Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPreference;
