import React, { useState } from "react";
import { FaCheck, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import ProfileSidebar from "./ProfileSidebar";
import { useFormik } from "formik";
import * as Yup from "yup";

const PrivacyPreference = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Validation schema for formik
  const validationSchema = Yup.object({
    privacyPreference: Yup.string().required("Privacy preference is required"),
    permissionForLogins: Yup.boolean(),
    confirmationEmailPermissions: Yup.boolean(),
    confirmationEmailAnonymity: Yup.boolean(),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      privacyPreference: "",
      permissionForLogins: false,
      confirmationEmailPermissions: false,
      confirmationEmailAnonymity: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Privacy prefrence", values);
      navigate("/create-password");

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

      <div className="bg-white w-full md:w-2/3 p-6 md:p-8 flex flex-col lg:mt-0 sm:mt-12">
        {/* <div className="bg-white w-full md:w-2/3 p-8 flex flex-col justify-between ml-auto"> */}
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
              {formik.touched.privacyPreference &&
              formik.errors.privacyPreference ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.privacyPreference}
                </div>
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
            <div className="flex justify-between mt-8">
              <Link to="/additional-information">
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
                Next
              </button>
            </div>
          </form>
        </div>

        {/* Button Container */}
        {/* <div className="flex justify-between mt-8">
          <Link to="/additional-information">
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
        </div> */}
      </div>
    </div>
  );
};

export default PrivacyPreference;
