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