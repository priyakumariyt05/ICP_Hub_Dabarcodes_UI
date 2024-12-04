import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link,useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import ProfileSidebar from "./ProfileSidebar";

const PersonalDetails = () => {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const validationSchema = Yup.object({
    pronouns: Yup.string().required("Pronouns are required"),
    name: Yup.string().required("Name is required"),
    dob: Yup.object({
      month: Yup.number()
        .min(1, "Invalid month")
        .max(12, "Invalid month")
        .required("Month is required"),
      day: Yup.number()
        .min(1, "Invalid day")
        .max(31, "Invalid day")
        .required("Day is required"),
      year: Yup.number()
        .min(1900, "Invalid year")
        .max(2099, "Invalid year")
        .required("Year is required"),
    })
      .required("Date of Birth is required")
      .shape({
        month: Yup.number().required("Month is required"),
        day: Yup.number().required("Day is required"),
        year: Yup.number().required("Year is required"),
      }),
    ethnicity: Yup.string().required("Ethnicity is required"),
    primaryLanguage: Yup.string().required("Primary Language is required"),
  });

  const formik = useFormik({
    initialValues: {
      pronouns: "",
      name: "",
      dob: { month: "", day: "", year: "" },
      ethnicity: "",
      primaryLanguage: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Personal details",values);
      navigate("/contact-details")
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
      className=" top-4 left-4 md:hidden z-50 p-2 rounded-md"
    >
      {sidebarOpen ? <FaTimes /> : <FaBars />}
    </button>

    {/* Sidebar */}
    <ProfileSidebar sidebarOpen={sidebarOpen} currentStep={1} />

      {/* Main Content */}
      <div className="bg-white w-full md:w-2/3 p-6 md:p-8 flex flex-col lg:mt-0 sm:mt-12">
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
                <option value="select">Select Pronouns</option>
                <option value="he">He</option>
                <option value="she">She</option>
                {/* Add your options here */}
              </select>
              {formik.touched.pronouns && formik.errors.pronouns ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.pronouns}
                </div>
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
            <div className="flex flex-col">
              <label
                htmlFor="month"
                className="text-gray-700 font-bold py-2"
              >
                Month
                <span className="text-red-500">*</span>
              </label>
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
                <div className="text-red-500 text-sm">
                  {formik.errors.dob.month}
                </div>
              ) : null}
            </div>
              {/* <input
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
                <div className="text-red-500 text-sm">
                  {formik.errors.dob.month}
                </div>
              ) : null} */}
              <div className="flex flex-col">
              <label
                htmlFor="day"
                className="text-gray-700 font-bold py-2"
              >
            Day
                <span className="text-red-500">*</span>
              </label>
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
                <div className="text-red-500 text-sm">
                  {formik.errors.dob.day}
                </div>
              ) : null}
</div>
  <div className="flex flex-col">
  <label
                htmlFor="year"
                className="text-gray-700 font-bold py-2"
              >
            Year
                <span className="text-red-500">*</span>
              </label>
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
                <div className="text-red-500 text-sm">
                  {formik.errors.dob.year}
                </div>
              ) : null}
              </div>
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
                <div className="text-red-500 text-sm">
                  {formik.errors.ethnicity}
                </div>
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
              {formik.touched.primaryLanguage &&
              formik.errors.primaryLanguage ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.primaryLanguage}
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex justify-end  mt-10">
           
              <button
                type="submit"
                className="px-8 py-2 bg-[#0D90C1]  text-white rounded-md shadow-sm hover:bg-blue-700"
              >
                Next
              </button>
         
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetails;



// import React, { useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { Link, useNavigate } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import ProfileSidebar from "./ProfileSidebar";
// import { useUser } from "../ContextApi/UserContext";

// const PersonalDetails = () => {
//   const { userData, loading, error } = useUser();
//   const navigate = useNavigate();
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
  


//   const validationSchema = Yup.object({
//     name: Yup.string().required("Name is required"),
//     pronouns: Yup.string().required("Pronouns are required"),
//     date_of_birth: Yup.object({
//       month: Yup.number()
//         .min(1, "Invalid month")
//         .max(12, "Invalid month")
//         .required("Month is required"),
//       day: Yup.number()
//         .min(1, "Invalid day")
//         .max(31, "Invalid day")
//         .required("Day is required"),
//       year: Yup.number()
//         .min(1900, "Invalid year")
//         .max(2099, "Invalid year")
//         .required("Year is required"),
//     }).required("Date of Birth is required"),
//     ethnicity: Yup.string().required("Ethnicity is required"),
//     primary_language: Yup.string().required("Primary Language is required"),
//   });

//   const formik = useFormik({
//     initialValues: {
//       pronouns: userData?.pronouns || "",
//       name: userData?.name || "",
//       date_of_birth: {
//         month: userData?.dob?.month || "",
//         day: userData?.dob?.day || "",
//         year: userData?.dob?.year || "",
//       },
//       ethnicity: userData?.ethnicity || "",
//       primary_language: userData?.primaryLanguage || "",
//     },
//     validationSchema,
//     enableReinitialize: true,
//     onSubmit: async (values) => {
//       const formattedValues = {
//         name: values.name,
//         pronouns: values.pronouns,
//         date_of_birth: values.date_of_birth,
//         ethnicity: values.ethnicity,
//         primary_language: values.primary_language,
//       };

//       setIsSubmitting(true);
//       try {
//         // Call your backend method to update user data here
//         // await backendActor.api_update_my_account(formattedValues);
//         console.log("Submitting personal details", formattedValues);
//         navigate("/contact-details");
//       } catch (error) {
//         console.error("Error updating account:", error);
//       } finally {
//         setIsSubmitting(false);
//       }
//     },
//   });

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };
//   console.log("Loading:", loading);
//   console.log("Error:", error);
//   console.log("User Data:", userData);
//   console.log("Formik Values:", formik.values);

//   if (loading) return <div>Loading user data...</div>;
//   if (error) return <div>{error}</div>;


//   return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8 font-roboto relative">
//       <button
//         onClick={toggleSidebar}
//         className="top-4 left-4 md:hidden z-50 p-2 rounded-md"
//       >
//         {sidebarOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       <ProfileSidebar sidebarOpen={sidebarOpen} currentStep={1} />

//       <div className="bg-white w-full md:w-2/3 p-6 md:p-8 flex flex-col lg:mt-0 sm:mt-12">
//         <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
//         <form onSubmit={formik.handleSubmit}>
//           {/* Pronouns and Name */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//             <div className="flex flex-col">
//               <label htmlFor="pronouns" className="text-gray-800 py-2 font-semibold">
//                 Pronouns <span className="text-red-500">*</span>
//               </label>
//               <select
//                 id="pronouns"
//                 name="pronouns"
//                 value={formik.values.pronouns}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
//                 aria-required="true"
//               >
//                 <option value="">Select Pronouns</option>
//                 <option value="he">He</option>
//                 <option value="she">She</option>
//                 <option value="they">They</option>
//                 {/* Add more options as needed */}
//               </select>
//               {formik.touched.pronouns && formik.errors.pronouns ? (
//                 <div className="text-red-500 text-sm">{formik.errors.pronouns}</div>
//               ) : null}
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="name" className="text-gray-700 py-2 font-semibold">
//                 Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 value={formik.values.name}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 placeholder="Name"
//                 className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
//               />
//               {formik.touched.name && formik.errors.name ? (
//                 <div className="text-red-500 text-sm">{formik.errors.name}</div>
//               ) : null}
//             </div>
//           </div>

//           {/* Date of Birth */}
//           <div className="mb-6">
//             <label className="text-gray-700 font-bold py-4">
//               Date of Birth <span className="text-red-500">*</span>
//             </label>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <input
//                 type="number"
//                 name="date_of_birth.month"
//                 placeholder="MM"
//                 value={formik.values.date_of_birth.month}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 min="1"
//                 max="12"
//                 className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a] font-semibold"
//                 aria-required="true"
//               />
//               {formik.touched.date_of_birth?.month && formik.errors.date_of_birth?.month ? (
//                 <div className="text-red-500 text-sm">{formik.errors.date_of_birth.month}</div>
//               ) : null}

//               <input
//                 type="number"
//                 name="date_of_birth.day"
//                 placeholder="DD"
//                 value={formik.values.date_of_birth.day}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 min="1"
//                 max="31"
//                 className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a] font-semibold"
//                 aria-required="true"
//               />
//               {formik.touched.date_of_birth?.day && formik.errors.date_of_birth?.day ? (
//                 <div className="text-red-500 text-sm">{formik.errors.date_of_birth.day}</div>
//               ) : null}

//               <input
//                 type="number"
//                 name="date_of_birth.year"
//                 placeholder="YYYY"
//                 value={formik.values.date_of_birth.year}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 min="1900"
//                 max="2099"
//                 className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a] font-semibold"
//                 aria-required="true"
//               />
//               {formik.touched.date_of_birth?.year && formik.errors.date_of_birth?.year ? (
//                 <div className="text-red-500 text-sm">{formik.errors.date_of_birth.year}</div>
//               ) : null}
//             </div>
//           </div>

//           {/* Demographic Information */}
//           <h2 className="text-gray-700 font-bold py-4">
//             Demographic Information <span className="text-red-500">*</span>
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//             <div className="flex flex-col">
//               <label htmlFor="ethnicity" className="text-gray-700 font-bold py-2">
//                 Ethnicity <span className="text-red-500">*</span>
//               </label>
//               <select
//                 id="ethnicity"
//                 name="ethnicity"
//                 value={formik.values.ethnicity}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
//                 aria-required="true"
//               >
//                 <option value="">Select Ethnicity</option>
//                 <option value="hispanic">Hispanic or Latino</option>
//                 <option value="not_hispanic">Not Hispanic or Latino</option>
//                 <option value="other">Other</option>
//                 {/* Add more options as needed */}
//               </select>
//               {formik.touched.ethnicity && formik.errors.ethnicity ? (
//                 <div className="text-red-500 text-sm">{formik.errors.ethnicity}</div>
//               ) : null}
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="primary_language" className="text-gray-700 font-bold py-2">
//                 Primary Language <span className="text-red-500">*</span>
//               </label>
//               <select
//                 id="primary_language"
//                 name="primary_language"
//                 value={formik.values.primary_language}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
//                 aria-required="true"
//               >
//                 <option value="">Select Language</option>
//                 <option value="english">English</option>
//                 <option value="spanish">Spanish</option>
//                 <option value="other">Other</option>
//                 {/* Add more options as needed */}
//               </select>
//               {formik.touched.primary_language && formik.errors.primary_language ? (
//                 <div className="text-red-500 text-sm">{formik.errors.primary_language}</div>
//               ) : null}
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className={`w-full p-3 text-white rounded-lg ${
//               isSubmitting ? "bg-gray-400" : "bg-[#1aaf9a] hover:bg-[#158b72]"
//             }`}
//           >
//             {isSubmitting ? "Submitting..." : "Next"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PersonalDetails;
