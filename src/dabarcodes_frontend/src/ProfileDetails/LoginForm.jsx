import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from "react-router-dom";
import Asidebar from "../Dashboard/Asidebar";

const LoginForm = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};
    if (!name) formErrors.name = "Name is required";
    if (!password) formErrors.password = "Password is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log({ name, password });
    } else {
      setErrors(validationErrors);
    }
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
        {/*MainContent*/}

        <div className="max-w-full w-full space-y-8 p-6 rounded-md">
          <h2 className="text-left text-xl font-bold">Login to your account</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full border rounded-md p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full border rounded-md p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-[#0D90C1] text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                Login
              </button>
            </div>
          </form>
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-600">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="text-center ">
            <p className="text-sm">
              Don’t have an account?
              <Link to="/personal-details" className="text-blue-500">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
