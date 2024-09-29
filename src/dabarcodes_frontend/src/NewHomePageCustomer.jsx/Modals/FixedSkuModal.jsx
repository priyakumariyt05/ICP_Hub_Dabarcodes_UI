import React from "react";
import { IoMdClose } from "react-icons/io";
import { BsLightningChargeFill } from "react-icons/bs";


const FixedSkuModal = ({ onClose, onOpenFloatingModal }) => {
  return (
    <div className="relative  p-6 rounded-lg w-[300px] md:w-[400px] ">
      {/* Close Button */}
      <IoMdClose
        onClick={onClose}
        size={24}
        className="absolute right-3 top-3 cursor-pointer text-gray-500"
      />

      {/* Main Text */}
      <p className="text-center text-sm text-gray-600">
        You're about to link this SKU to your account. Once linked, this action is irreversible.
      </p>
      <p className="mt-2 text-center text-sm text-gray-600 font-sm">
        Are you sure you want to proceed?
      </p>

      {/* Utility Token Info */}

      <div className="flex items-center justify-center mt-4 text-sm text-gray-600">
  <img src="/image/token.png" alt="" className="mr-1" /> {/* Add margin to the right of the image */}
  <span>
    Utility Token Left: <span className="font-bold">3</span>
  </span>
</div>


      {/* Buttons */}
      <div className="mt-4 flex flex-col space-y-3">
        {/* Link as Fixed SKU Button */}
        <button className="bg-[#0C87B5] flex justify-center items-center m-auto text-white py-2 rounded-md font-semibold w-1/2 text-sm hover:bg-[#0A6D93] transition-colors">
          Link as Fixed SKU
        </button>

        {/* Link as Floating Token Button */}
        <button
          onClick={onOpenFloatingModal}
          className="border border-[#0D90C1] text-[#0D90C1] py-2 rounded-md font-semibold w-1/2 text-sm flex items-center justify-center m-auto space-x-2 hover:bg-[#E7F8FE] transition-colors"
        >
          
          <span>Use Floating Token</span>
          <BsLightningChargeFill className="text-yellow-500 w-6 h-6" />
        </button>
      </div>

      {/* Footer - Learn More Link  */}
   
      <div className="mt-6 flex items-center justify-end text-gray-400 text-xs">
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

export default FixedSkuModal;
