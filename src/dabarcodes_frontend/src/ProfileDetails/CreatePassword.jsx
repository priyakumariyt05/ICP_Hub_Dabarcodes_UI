
// import React, {useState} from "react";
// import {useNavigate} from "react-router-dom";
// import {FaBars, FaTimes} from "react-icons/fa";
// import {Link} from "react-router-dom";
// import ProfileSidebar from "./ProfileSidebar";
// import {useFormik} from "formik";
// import * as Yup from "yup";

// const CreatePassword = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//     const navigate = useNavigate();

//   const validationSchema = Yup.object({
//     createPassword: Yup.string()
//       .min(12, "Password must be at least 12 characters")
//       .required("Password is required"),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref("createPassword"), null], "Passwords must match")
//       .required("Confirm password is required"),
//   });

//   const formik = useFormik({
//     initialValues: {
//       createPassword: "",
//       confirmPassword: "",
//     },
//     validationSchema,
//     onSubmit: (values) => {
//       console.log("Password Data:", values); // Show data in console
//     navigate("/homepage")
//     },
//   });

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8 font-roboto relative">
//       <button
//         onClick={toggleSidebar}
//         className="top-4 left-4 md:hidden z-50 p-2 rounded-md"
//       >
//         {sidebarOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       <ProfileSidebar sidebarOpen={sidebarOpen} currentStep={5} />

//       <div className="bg-white w-full md:w-2/3 p-6 md:p-8 flex flex-col lg:mt-0 sm:mt-12">
//         <div>
//           <h2 className="text-xl font-semibold mb-6">Set Your Password</h2>
//           <form onSubmit={formik.handleSubmit}>
//             <div className="mb-4">
//               <label
//                 htmlFor="createPassword"
//                 className="block text-sm font-medium"
//               >
//                 Create Password*
//               </label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 id="createPassword"
//                 name="createPassword"
//                 placeholder="Create Password"
//                 value={formik.values.createPassword}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 className="w-full border border-gray-300 rounded-md p-2 mt-1"
//               />
//               {formik.touched.createPassword &&
//                 formik.errors.createPassword && (
//                   <div className="text-red-500 text-sm">
//                     {formik.errors.createPassword}
//                   </div>
//                 )}
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="confirmPassword"
//                 className="block text-sm font-medium"
//               >
//                 Confirm Password*
//               </label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 placeholder="Confirm Password"
//                 value={formik.values.confirmPassword}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 className="w-full border border-gray-300 rounded-md p-2 mt-1"
//               />
//               {formik.touched.confirmPassword &&
//                 formik.errors.confirmPassword && (
//                   <div className="text-red-500 text-sm">
//                     {formik.errors.confirmPassword}
//                   </div>
//                 )}
//             </div>

//             <div className="mb-6 flex items-center">
//               <input
//                 type="checkbox"
//                 id="showPassword"
//                 className="mr-2"
//                 onChange={() => setShowPassword(!showPassword)}
//               />
//               <label htmlFor="showPassword" className="text-sm">
//                 Show Password
//               </label>
//             </div>
//  <div className="mb-6">
//               <h3 className="text-sm font-medium mb-2">Password Strength</h3>
//               <ul className="text-sm list-none space-y-1">
//                 <li className="flex items-center text-green-600">
//                   <span className="mr-2">✔</span> at least 12 characters.
//                 </li>
//                 <li className="flex items-center text-red-600">
//                   <span className="mr-2">✘</span> Include both uppercase and lowercase letters.
//                 </li>
//                 <li className="flex items-center text-green-600">
//                   <span className="mr-2">✔</span> at least one number (0-9).
//                 </li>
//                 <li className="flex items-center text-green-600">
//                   <span className="mr-2">✔</span> at least one special character (@, #, $, etc.)
//                 </li>
//               </ul>
//             </div>
//             <div className="flex justify-between mt-14">
//               <Link to="/privacy-preference">
//                 <button
//                   type="button"
//                   className="px-8 py-2 bg-white border border-blue-600 text-blue-600 rounded-md shadow-sm hover:bg-blue-50"
//                 >
//                   Back
//                 </button>
//               </Link>
             
//                 <button
//                   type="submit"
//                   className="px-8 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700"
//                 >
//                   Submit
//                 </button>
            
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreatePassword;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProfileSidebar from "./ProfileSidebar";
import { useFormik } from "formik";
import * as Yup from "yup";

const CreatePassword = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    minLength: false,
    uppercase: false,
    number: false,
    specialChar: false,
  });
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    createPassword: Yup.string()
      .min(12, "Password must be at least 12 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("createPassword"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const formik = useFormik({
    initialValues: {
      createPassword: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Password Data:", values); // Show data in console
      navigate("/homepage");
    },
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Function to check password strength dynamically
  const checkPasswordStrength = (password) => {
    const minLength = password.length >= 12;
    const uppercase = /[A-Z]/.test(password);
    const number = /\d/.test(password);
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    setPasswordStrength({ minLength, uppercase, number, specialChar });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8 font-roboto relative">
      <button
        onClick={toggleSidebar}
        className="top-4 left-4 md:hidden z-50 p-2 rounded-md"
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      <ProfileSidebar sidebarOpen={sidebarOpen} currentStep={5} />

      <div className="bg-white w-full md:w-2/3 p-6 md:p-8 flex flex-col lg:mt-0 sm:mt-12">
        <div>
          <h2 className="text-xl font-semibold mb-6">Set Your Password</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="createPassword"
                className="block text-sm font-medium"
              >
                Create Password*
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="createPassword"
                name="createPassword"
                placeholder="Create Password"
                value={formik.values.createPassword}
                onChange={(e) => {
                  formik.handleChange(e);
                  checkPasswordStrength(e.target.value);
                }}
                onBlur={formik.handleBlur}
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
              />
              {formik.touched.createPassword &&
                formik.errors.createPassword && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.createPassword}
                  </div>
                )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium"
              >
                Confirm Password*
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.confirmPassword}
                  </div>
                )}
            </div>

            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                id="showPassword"
                className="mr-2"
                onChange={() => setShowPassword(!showPassword)}
              />
              <label htmlFor="showPassword" className="text-sm">
                Show Password
              </label>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Password Strength</h3>
              <ul className="text-sm list-none space-y-1">
                <li
                  className={`flex items-center ${
                    passwordStrength.minLength
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  <span className="mr-2">
                    {passwordStrength.minLength ? "✔" : "✘"}
                  </span>{" "}
                  at least 12 characters.
                </li>
                <li
                  className={`flex items-center ${
                    passwordStrength.uppercase
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  <span className="mr-2">
                    {passwordStrength.uppercase ? "✔" : "✘"}
                  </span>{" "}
                  Include both uppercase and lowercase letters.
                </li>
                <li
                  className={`flex items-center ${
                    passwordStrength.number
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  <span className="mr-2">
                    {passwordStrength.number ? "✔" : "✘"}
                  </span>{" "}
                  at least one number (0-9).
                </li>
                <li
                  className={`flex items-center ${
                    passwordStrength.specialChar
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  <span className="mr-2">
                    {passwordStrength.specialChar ? "✔" : "✘"}
                  </span>{" "}
                  at least one special character (@, #, $, etc.)
                </li>
              </ul>
            </div>

            <div className="flex justify-between mt-14">
              <Link to="/privacy-preference">
                <button
                  type="button"
                  className="px-8 py-2 bg-white border border-blue-600 text-blue-600 rounded-md shadow-sm hover:bg-blue-50"
                >
                  Back
                </button>
              </Link>

              <button
                type="submit"
                className="px-8 py-2 bg-[#0D90C1]  text-white rounded-md shadow-sm hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePassword;
