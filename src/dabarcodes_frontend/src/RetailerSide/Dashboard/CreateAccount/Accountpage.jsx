
import React, {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";



import {Link} from "react-router-dom";
import Asidebar from "../Asidebar";

const AccountPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
      const [image, setImage] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


    const handleImageUpload = (event) => {
      setImage(URL.createObjectURL(event.target.files[0]));
    };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8 font-roboto">
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 md:hidden z-50 p-2 bg-blue-600 text-white rounded-md"
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <Asidebar sidebarOpen={sidebarOpen} />

      {/* Main Content */}
      <div
        className={`bg-white w-full md:w-2/3 p-4 md:p-8 flex flex-col justify-between ${
          sidebarOpen ? "ml-0" : "md:ml-1/3"
        } transition-all duration-300 ease-in-out`}
      >
        <h1 className="text-2xl font-bold mb-4">
          Retailer as Organizational Administrator
        </h1>
        <div>
          <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
          <form>
            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label
                  htmlFor="input1"
                  className="text-gray-800 py-2 font-semibold"
                >
                  Pronouns
                  <span className="text-black">*</span>
                </label>
                <select className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                  <option>Select</option>
                  <option>He</option>
                  <option>She</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-gray-800 py-2 font-semibold"
                >
                  Name
                  <span className="text-black">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-gray-800 py-2 font-semibold"
                >
                  Email
                  <span className="text-black">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Email"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Store Address */}
            <h2 className="text-xl font-semibold my-6">
              Retailer Head Office Address
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex flex-col">
                <label
                  htmlFor="country"
                  className="text-gray-800 py-2 font-semibold"
                >
                  Country
                  <span className="text-black">*</span>
                </label>
                <select className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                  <option>Select</option>
                  <option>India</option>
                  <option>UK</option>
                  <option>USA</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="state"
                  className="text-gray-800 py-2 font-semibold"
                >
                  State
                  <span className="text-black">*</span>
                </label>
                <select className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                  <option>Select</option>
                  <option>Delhi</option>
                  <option>Maharashtra</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="city"
                  className="text-gray-800 py-2 font-semibold"
                >
                  City
                  <span className="text-black">*</span>
                </label>
                <select className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                  <option>Select</option>
                  <option>Delhi</option>
                  <option>Mumbai</option>
                </select>
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
                />
              </div>
            </div>
            <label className="block text-sm font-bold my-6">Retail Logo</label>
            <div className="border border-dashed border-gray-400 p-4 text-center">
              <input
                type="file"
                className="hidden"
                id="upload-logo"
                onChange={handleImageUpload}
              />
              <label
                htmlFor="upload-logo"
                className="cursor-pointer bg-gray-100 p-2 rounded"
              >
                {image ? (
                  <img
                    src={image}
                    alt="Logo Preview"
                    className="h-16 mx-auto"
                  />
                ) : (
                  "Upload Image"
                )}
              </label>
              <p className="text-xs mt-2">
                File should be in jpg, png format not larger than 5MB
              </p>
            </div>

            {/* Submit Button */}
            {/* <button className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700">
              Create Account
            </button> */}
            <div className="flex justify-end mt-8">
              <Link to="/dashboard/email-verification">
                {/* Change this path to your desired route */}
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700">
                  Create Account
                </button>
              </Link>
            </div>
          </form>
        </div>
        {/* 
        <div className="flex justify-end mt-8">
          <Link to="/password-form">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700"
            >
              Next
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default AccountPage;
