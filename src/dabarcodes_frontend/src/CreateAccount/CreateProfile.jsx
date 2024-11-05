import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LeftSidebar from "../Profile/LeftSidebar";
const CreateProfile = () => {
  // State management for form fields
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pronouns, setPronouns] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState({ month: "", day: "", year: "" });
  const [ethnicity, setEthnicity] = useState("");
  const [primaryLanguage, setPrimaryLanguage] = useState("");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form data,
    console.log({
      pronouns,
      name,
      dob,
      ethnicity,
      primaryLanguage,
    });
  };

  return (
    <>
      <Navbar2 />

      {/* section 1 */}

      {/* Sidebar */}

      <div className="flex flex-col md:flex-row min-h-screen p-6">
        <LeftSidebar />
        {/* Main Content */}
        <div className="bg-white w-full md:w-2/3 p-6 md:p-8 flex flex-col">
          <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
          <form onSubmit={handleSubmit}>
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
                  value={pronouns}
                  onChange={(e) => setPronouns(e.target.value)}
                  className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
                >
                  <option value="">Select Pronouns</option>
                </select>
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
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
                />
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
                  value={ethnicity}
                  onChange={(e) => setEthnicity(e.target.value)}
                  className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
                >
                  <option value="">Select Ethnicity</option>
                  <option value="asian">Asian</option>
                  <option value="black">African American</option>
                  <option value="other">Other</option>
                </select>
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
                  value={primaryLanguage}
                  onChange={(e) => setPrimaryLanguage(e.target.value)}
                  className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a]"
                >
                  <option value="">Select Primary Language</option>
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                  <option value="other">Other</option>
                </select>
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
                  placeholder="MM"
                  value={dob.month}
                  onChange={(e) => setDob({ ...dob, month: e.target.value })}
                  min="1"
                  max="12"
                  className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a] font-semibold"
                />
                <input
                  type="number"
                  placeholder="DD"
                  value={dob.day}
                  onChange={(e) => setDob({ ...dob, day: e.target.value })}
                  min="1"
                  max="31"
                  className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a] font-semibold"
                />
                <input
                  type="number"
                  placeholder="YYYY"
                  value={dob.year}
                  onChange={(e) => setDob({ ...dob, year: e.target.value })}
                  min="1900"
                  max="2099"
                  className="p-3 border border-[#ccc] rounded-lg focus:outline-none focus:border-[#1aaf9a] font-semibold"
                />
              </div>
            </div>
          </form>
        </div>
        <div />
      </div>

      <Footer />
    </>
  );
};

export default CreateProfile;
