import React from "react";

const UtilityTokenCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-md w-full h-[500px] flex flex-col justify-center">
        <div className="mb-6">
          <img
            src="/image/Token.png"
            alt="Token Icon"
            className="mx-auto w-24 h-24 rounded-full"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            You have unlocked 95 utility tokens
          </h2>
          <p className="mt-2 text-gray-600">Thank you for subscribing</p>
        </div>
        <div className="mb-6 mt-8">
          <button className="px-10 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default UtilityTokenCard;
