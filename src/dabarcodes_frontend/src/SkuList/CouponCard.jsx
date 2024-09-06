import React from 'react';
const CouponCard = ({ title, description, expiry, bgColor, imageUrl, buttonColor }) => (
  <div className="relative bg-white rounded-lg shadow-md overflow-hidden ">
    <div
      className={`absolute inset-0 ${bgColor}`}
      style={{ height: 'calc(60% + 1rem)', width: '100%' }}
    ></div>
    <div className="relative p-5 flex flex-col">
      <div className="flex flex-row items-start gap-5">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4 text-white font-butler opacity-80">{title}</h2>
          <p className=" mb-4 text-[#E8E8E8] font-roboto font-normal text-sm leading-16.8">{description}</p>
          <p className="text-sm mb-4 text-white">{expiry}</p>
        </div>
        <div className="flex-shrink-0">
          <img
            src={imageUrl}
            alt="Coupon Image"
            className="w-full h-auto object-contain max-w-[150px]"
          />
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-red-500 font-medium">30 sec left</span>
        <button className={`${buttonColor} hover:opacity-90 text-white py-2 px-4 rounded`}>
          Click here to Claim
        </button>
      </div>
      

    </div>
  </div>
);

export default CouponCard;

