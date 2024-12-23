import React from "react";
import BackButton from "../../Dashboard/Reusable/BackButton";
const PrizePremiumDetails = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      {/* Header Section */}
      <div className="flex flex-start">
        <BackButton />
        <h1 className="text-2xl font-semibold mb-4">Prize Premium Details</h1>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-8">
        Lorem ipsum dolor sit amet consectetur. Et duis sit ac phasellus
        ultrices mi suspendisse accumsan. Mauris eget est pretium eu ultricies
        porttitor nulla a. A vel arcu lacus ultricies praesent mi pretium et. Ut
        ullamcorper etiam sit tempor. Neque iaculis cursus ultrices vitae
        pharetra lectus quam est faucibus. Suscipit pharetra at lorem cras id
        porta.
      </p>

      {/* Input Fields Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Prize/Reward Details */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Prize/Reward Details
          </label>
          <input
            type="text"
            placeholder="Description"
            className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:ring focus:ring-blue-200 outline-none"
          />
        </div>

        {/* Value of Reward */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Value Of Reward
          </label>
          <input
            type="text"
            placeholder="Value In $"
            className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:ring focus:ring-blue-200 outline-none"
          />
        </div>

        {/* Reward Allocation */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Reward Allocation
          </label>
          <select className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:ring focus:ring-blue-200 outline-none">
            <option>Select from List</option>
            <option>Allocation 1</option>
            <option>Allocation 2</option>
          </select>
        </div>

        {/* Eligibility Criteria */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Eligibility Criteria
          </label>
          <input
            type="text"
            placeholder="Enter Rules"
            className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:ring focus:ring-blue-200 outline-none"
          />
        </div>

        {/* Redemption Method */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Redemption Method
          </label>
          <select className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:ring focus:ring-blue-200 outline-none">
            <option>Select Method</option>
            <option>Method 1</option>
            <option>Method 2</option>
          </select>
        </div>

        {/* Maximum Redemption */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Maximum Redemption
          </label>
          <input
            type="text"
            placeholder="Maximum Redemption Per Customer"
            className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:ring focus:ring-blue-200 outline-none"
          />
        </div>

        {/* Expiry Date */}

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Expiry Date
          </label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:ring focus:ring-blue-200 outline-none"
          />
        </div>
      </div>

      {/* Create Campaign Button */}
      <div className="flex justify-end">

        <button
          className="bg-[#0C87B5] hover:bg-blue-600 text-white font-medium px-6 py-2 rounded"

        >
          Create Campaign
        </button>
      </div>
    </div>
  );
};

export default PrizePremiumDetails;