import React from "react";

const CouponPopup = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg p-8 w-[500px]">
        <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl p-1">
          &times;
        </button>

        <div className="flex items-start mb-4">
          <div className="bg-yellow-100 p-4 rounded-full mr-4">
            <img
              src="/image/Coupon.png"
              alt="Coupon Icon"
              className="w-12 h-12"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold">
              {" "}
              $1.25 off with myWalgreens{" "}
            </h2>
            <p className="text-sm text-gray-600">$1.25 off with myWalgreens</p>
            <p className="text-sm text-gray-500 mt-2">
              Redeem online or in store
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          <span className="font-bold text-blue-600">Valid till:</span>
          <span className="font-bold text-blue-600 ml-1">7th Aug</span>
        </p>
        <div className="h-4"></div>
        <p className="text-sm ">
          when you spend $75 on total order. Must clip offer by Monday July 22,
          2024, at 11:59 pm PT and redeem by Monday, July 29, 2024, at 11:59 pm
          PT. Valid only on Pickup and Delivery orders where available. Not
        </p>
        <p className="text-sm text-blue-600 underline">More details</p>
        <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
          View Details
        </button>

        <p className="text-xs text-gray-400 mt-4">
          Terms and conditions apply. Offers are subject to change and may vary
          by location. Please check the specific details for each coupon before
          use.
        </p>
      </div>
    </div>
  );
};

export default CouponPopup;
