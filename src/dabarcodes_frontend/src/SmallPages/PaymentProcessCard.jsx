import React from "react";

const PaymentProcessCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-md w-full h-[300px] flex flex-col items-center justify-center">
        <div className="flex justify-center mb-6 ">
          <div className="flex space-x-3">
            <div className="w-4 h-4 bg-gray-600 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-gray-600 rounded-full animate-pulse delay-100"></div>
            <div className="w-4 h-4 bg-gray-600 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
        <h2 className="text-lg font-medium text-gray-800">
          Payment is being processed
        </h2>
      </div>
    </div>
  );
};

export default PaymentProcessCard;
