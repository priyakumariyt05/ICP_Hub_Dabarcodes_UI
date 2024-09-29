
import React from "react";
import { IoMdClose } from "react-icons/io";
import { BsLightningChargeFill } from "react-icons/bs";


const FloatingSkuModal = ({ onClose, onBackToFixedSku }) => {
  return (
    <div className="relative p-6 rounded-lg w-[300px] md:w-[400px]">
      {/* Close Button */}
      <IoMdClose
        onClick={onClose}
        size={24}
        className="absolute right-3 top-3 cursor-pointer text-gray-500"
      />

      {/* Main Text */}
      <p className="text-center text-sm text-gray-600">
        Use your Floating SKU this month. Link it to any promotion, but only once per month.
      </p>
      <p className="mt-4 mb-2 text-center text-sm text-black font-medium">
        Are you sure you want to proceed?
      </p>

      {/* Floating SKU Button */}
      <div className="mt-4 flex flex-col space-y-3">
        <button className="bg-[#0C87B5] text-white py-2 rounded-md font-semibold w-1/2 m-auto text-sm flex items-center justify-center space-x-2 hover:bg-[#0A6D93] transition-colors">
          <span>Link as Floating SKU</span>
          <BsLightningChargeFill className="text-yellow-500 w-6 h-6" />
        </button>
      </div>

      {/* Back Button */}
      <div className="mt-2 text-center text-sm text-blue-500">
        <button onClick={onBackToFixedSku} className="hover:underline">
          Back to Fixed Linked SKU
        </button>
      </div>

      <div className="mt-8 flex items-center justify-end text-gray-400 text-xs">
        <span className="bg-gray-300 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center mr-2">
          ?
        </span>
        <a href="#" className="hover:underline">
          Learn about Floating SKU
        </a>
      </div>
    </div>
    
  );
};

export default FloatingSkuModal;
