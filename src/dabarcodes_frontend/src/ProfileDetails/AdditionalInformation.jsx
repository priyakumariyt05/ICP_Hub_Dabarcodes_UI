import React, { useState } from 'react';
import { FaCheck, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdditionalInformation = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8">
           
            <button
                onClick={toggleSidebar}
                className="md:hidden mb-4 p-2 bg-blue-600 text-white rounded-md self-start"
            >
                {sidebarOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Sidebar */}
            <div
                className={`bg-[#D1EDFF] w-full md:w-1/3 p-6 rounded-lg md:block transition-transform duration-300 ease-in-out ${
                    sidebarOpen ? 'block' : 'hidden'
                } md:block`}
            >
                <div className="mb-8">
                    <img src="/image/image 40.png" alt="Logo" className="h-8 w-auto mb-8" />
                </div>
                <h2 className="text-xl font-bold mb-8">Create Account</h2>

                <ul className="relative">
                    <li className="relative flex items-center mb-12">
                        <div className="bg-[#0E95F5] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
                            <FaCheck />
                        </div>
                        <span className="ml-4 text-[#333] font-medium">Personal Details</span>
                        <div className="absolute left-4 top-10 h-[100%] w-[2px] bg-[#89c2fa]"></div>
                    </li>
                    <li className="relative flex items-center mb-12">
                        <div className="bg-[#0E95F5] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
                        <FaCheck />
                        </div>
                        <span className="ml-4 text-[#333] font-medium">Contact Details</span>
                        <div className="absolute left-4 top-10 h-[100%] w-[2px] bg-[#0E95F5]"></div>
                    </li>
                    <li className="relative flex items-center mb-12">
                        <div className="bg-[#0E95F5] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
                            3
                        </div>
                        <span className="ml-4 text-[#333] font-medium">Additional Information</span>
                        <div className="absolute left-4 top-10 h-[100%] w-[2px] bg-[#cdcecf]"></div>
                    </li>
                    <li className="relative flex items-center mb-12">
                        <div className="bg-[#b9bfc4] text-white rounded-full w-8 h-8 flex items-center justify-center relative z-10">
                            4
                        </div>
                        <span className="ml-4 text-[#333] font-medium">Privacy Preferences</span>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div
                className={`bg-white w-full md:w-2/3 p-4 md:p-8 flex flex-col justify-between ${
                    sidebarOpen ? 'ml-0' : 'md:ml-1/3'
                } transition-all duration-300 ease-in-out`}
            >
               
                <div>
                    <h2 className="text-xl font-semibold mb-6">Additional Information</h2>
                    <form>
                     
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       
                            <div className="flex flex-col">
                                <label htmlFor="input1" className="text-gray-800 py-2 font-semibold">
                                  Gender Biological
                                   
                                </label>
                                <select
                  id=" Gender Biological"
                  name=" Gender Biological"
                  className="mt-1 block  p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option>Select</option>
                  <option>Option 1</option>
                </select>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="input1" className="text-gray-800 py-2 font-semibold">
                                  Gender Biological
                                   
                                </label>
                                <select
                  id=" Gender Biological"
                  name=" Gender Biological"
                  className="mt-1 block  p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option>Select</option>
                  <option>Option 1</option>
                </select>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="input1" className="text-gray-800 py-2 font-semibold">
                                  Citizenship
                                  
                                </label>
                                <select
                  id=" Citizenship"
                  name="Citizenship"
                  className="mt-1 block  p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option>Select</option>
                  <option>Option 1</option>
                </select>
                            </div>

<div className="flex flex-col">
  <label htmlFor="Income" className="text-gray-800 py-2 font-semibold">
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
      <option>Select</option>
      <option>Option 1</option>
    </select>
  </div>
</div>
</div>

{/* Household */}

<div className="mt-6">
  <h2 className="text-xl font-bold">Household Information</h2>
  
 
  <p className="mb-4">See why do we need this information</p>


 
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
    <div>
      <label className="block text-gray-700 font-semibold mb-2">Married</label>
      <div className="flex items-center space-x-4">
        <label className="inline-flex items-center">
          <input type="radio" name="married" value="yes" className="form-radio text-blue-600" />
          <span className="ml-2">Yes</span>
        </label>
        <label className="inline-flex items-center">
          <input type="radio" name="married" value="no" className="form-radio text-blue-600" />
          <span className="ml-2">No</span>
        </label>
      </div>
    </div>

    <div>
      <label className="block text-gray-700 font-semibold mb-2">Include Maid Name</label>
      <div className="flex items-center space-x-4">
        <label className="inline-flex items-center">
          <input type="radio" name="includeMaid" value="yes" className="form-radio text-blue-600" />
          <span className="ml-2">Yes</span>
        </label>
        <label className="inline-flex items-center">
          <input type="radio" name="includeMaid" value="no" className="form-radio text-blue-600" />
          <span className="ml-2">No</span>
        </label>
      </div>
    </div>
  </div>


  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
    <div>
      <label htmlFor="spouseName" className="block text-gray-700 font-semibold mb-2">Spouse Name</label>
      <input
        type="text"
        id="spouseName"
        name="spouseName"
        placeholder="Spouse Name"
        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
    </div>

    <div>
      <label htmlFor="maidName" className="block text-gray-700 font-semibold mb-2">Maid Name</label>
      <input
        type="text"
        id="maidName"
        name="maidName"
        placeholder="Maid Name"
        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
    </div>
  </div>

 
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
    <div>
      <label className="block text-gray-700 font-semibold mb-2">With Children</label>
      <div className="flex items-center space-x-4">
        <label className="inline-flex items-center">
          <input type="radio" name="withChildren" value="yes" className="form-radio text-blue-600" />
          <span className="ml-2">Yes</span>
        </label>
        <label className="inline-flex items-center">
          <input type="radio" name="withChildren" value="no" className="form-radio text-blue-600" />
          <span className="ml-2">No</span>
        </label>
      </div>
    </div>

    <div>
      <label htmlFor="totalHousehold" className="block text-gray-700 font-semibold mb-2">Total Number in Household</label>
      <select
        id="totalHousehold"
        name="totalHousehold"
        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        <option>Select</option>
        <option value="">1-2</option>
  
      </select>
    </div>
    
  </div>


  <div className="mb-4">
    <label htmlFor="ageGroup" className="block text-gray-700 font-semibold mb-2">Age Group</label>
    <select
      id="ageGroup"
      name="ageGroup"
      className="block w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    >
      <option>Select</option>
      <option value="18-25">18-25</option>
      
    </select>
  </div>
</div>

                     
 </form>
                </div>

                {/* <div className="flex justify-between mt-8">
                    <button
                        type="button"
                        className="px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-md shadow-sm hover:bg-blue-50"
                    >
                        Back
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700"
                    >
                       Next
                    </button>
                </div> */}
                <div className="flex justify-between mt-8">
      <Link to="/contact-details">
        <button
          type="button"
          className="px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-md shadow-sm hover:bg-blue-50"
        >
          Back
        </button>
      </Link>
      <Link to="/privacy-preference">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700"
        >
          Next
        </button>
      </Link>
    </div>
            </div>
        </div>
    );
};

export default AdditionalInformation;