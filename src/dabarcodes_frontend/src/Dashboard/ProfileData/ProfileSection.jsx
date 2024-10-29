import React from "react";
import {MdOutlineModeEdit} from "react-icons/md";

const ProfileSection = () => {
  return (
    <div>
      {/* Profile Section */}
      <div className="mb-10">
        {/* Flex container for heading and button */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Profile</h2>
          <button className="flex items-center text-blue-500 hover:text-blue-600 border p-2">
            <MdOutlineModeEdit className="h-5 w-5 mr-2" />
            Edit Profile
          </button>
        </div>

        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-800 py-2 font-semibold">
              Name
            </label>
            <input
              id="name"
              type="name"
              placeholder="name"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

   
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <label
                htmlFor="phone"
                className="text-gray-800 py-2 font-semibold"
              >
                Phone Number
             
              </label>
              <p className="flex items-center text-green-500">Verified</p>
            </div>
            <input
              id="phone"
              type="number"
              placeholder="phone"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <label
                htmlFor="emailAddress"
                className="text-gray-800 py-2 font-semibold"
              >
              Email Address
            
              </label>
              <p className="flex items-center text-green-500">Verified</p>
            </div>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
           
          </div>
        </div>

        {/* Store Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="flex flex-col">
            <label className="font-semibold text-gray-800">Role</label>
            <input
              type="text"
              value="Admin"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold text-gray-800">Store Name</label>
            <input
              type="text"
              value="Reliance Markets"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold text-gray-800">
              Store Location
            </label>
            <input
              type="text"
              value="Bangalore, India"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
