import { useNavigate } from "react-router-dom";
import React, {useState} from "react";
import BackButton from "../../Dashboard/Reusable/BackButton";
import BrandActivationPopup from "../Modal/BrandActivationPopup";

const BrandActivationCampaign = () => {

      const navigate = useNavigate();
        const [isPopupOpen, setIsPopupOpen] = useState(false); // State to toggle popup

        const openPopup = () => {
          setIsPopupOpen(true); // Open popup
        };

        const closePopup = () => {
          setIsPopupOpen(false); // Close popup
        };

  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      {/* Header Section */}
  
      <div className="flex flex-start">
        <BackButton />

        <h1 className="text-2xl font-semibold mb-4">
          Brand Activation Campaign
        </h1>
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
        {/* Choose SKUs */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Choose SKUs
          </label>
          <input
            type="text"
            placeholder="Select SKUs to Promote"
            className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:ring focus:ring-blue-200 outline-none"
          />
        </div>

        {/* BATOK Token Allocation */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            BATOK Token Allocation
          </label>
          <input
            type="text"
            placeholder="Allocate Tokens to Campaign"
            className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:ring focus:ring-blue-200 outline-none"
          />
        </div>

        {/* Brand Promotion Name */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Brand Promotion Name
          </label>
          <input
            type="text"
            placeholder="Campaign Name"
            className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:ring focus:ring-blue-200 outline-none"
          />
        </div>

        {/* Type of Release */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Type of Release
          </label>
          <select className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:ring focus:ring-blue-200 outline-none">
            <option>Select Option</option>
            <option>Release Type 1</option>
            <option>Release Type 2</option>
          </select>
        </div>
      </div>

      {/* Next Button */}
      <div className="flex justify-end">
        {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded">
          Next
        </button> */}
        <button
          className="bg-[#0C87B5] hover:bg-blue-600 text-white font-medium px-6 py-2 rounded"
          onClick={() => navigate("/supplier/botok/prize-premium-details")}
        >
          Next
        </button>
      </div>
      <button
        onClick={openPopup}
        className="px-4 py-2 bg-[#0C87B5] text-white rounded-md"
      >
        Open Brand Activation Popup
      </button>

      {/* Popup Component */}
      <BrandActivationPopup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};

export default BrandActivationCampaign;