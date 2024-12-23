import React from "react";
import BackButton from "../../Dashboard/Reusable/BackButton";

const CommunityCampaignDetails = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex flex-start">
        <BackButton />
        <h1 className="text-2xl font-semibold mb-4">
          Community Campaign Details
        </h1>
      </div>

      <p className="text-sm text-gray-500 mb-6">
        Lorem ipsum dolor sit amet consectetur. Et duis sit ac phasellus
        ultrices mi suspendisse accumsan. Mauris eget est pretium eu ultricies
        porttitor.
      </p>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Event Name */}
        <div>
          <label className="block text-gray-700 mb-1">Event Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="w-full p-2 border rounded-md focus:outline-blue-500"
          />
        </div>

        {/* Event Description */}
        <div>
          <label className="block text-gray-700 mb-1">Event Description</label>
          <input
            type="text"
            placeholder="Value In $"
            className="w-full p-2 border rounded-md focus:outline-blue-500"
          />
        </div>

        {/* Event Date & Time */}
        <div>
          <label className="block text-gray-700 mb-1">Event Date & Time</label>
          <input
            type="date"
            className="w-full p-2 border rounded-md focus:outline-blue-500"
          />
        </div>

        {/* Event Location */}
        <div>
          <label className="block text-gray-700 mb-1">Event Location</label>
          <select className="w-full p-2 border rounded-md focus:outline-blue-500">
            <option>Select Location</option>
          </select>
        </div>

        {/* Community Engagement Goal */}
        <div>
          <label className="block text-gray-700 mb-1">
            Community Engagement Goal
          </label>
          <input
            type="text"
            placeholder="Enter Target want to achieve"
            className="w-full p-2 border rounded-md focus:outline-blue-500"
          />
        </div>

        {/* Eligibility Rule */}
        <div>
          <label className="block text-gray-700 mb-1">Eligibility Rule</label>
          <input
            type="text"
            placeholder="Enter Rules"
            className="w-full p-2 border rounded-md focus:outline-blue-500"
          />
        </div>

        {/* Redemption Method */}
        <div>
          <label className="block text-gray-700 mb-1">Redemption Method</label>
          <select className="w-full p-2 border rounded-md focus:outline-blue-500">
            <option>Select Method</option>
          </select>
        </div>

        {/* Maximum Redemption */}
        <div>
          <label className="block text-gray-700 mb-1">Maximum Redemption</label>
          <input
            type="text"
            placeholder="Maximum Redemption Per Customer"
            className="w-full p-2 border rounded-md focus:outline-blue-500"
          />
        </div>

        {/* Expiry Date */}
        <div>
          <label className="block text-gray-700 mb-1">Expiry Date</label>
          <input
            type="date"
            className="w-full p-2 border rounded-md focus:outline-blue-500"
          />
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-end mt-6">
        <button className="bg-[#0C87B5] text-white px-4 py-2 rounded hover:bg-blue-600">
          Create Campaign
        </button>
      </div>
    </div>
  );
};

export default CommunityCampaignDetails;