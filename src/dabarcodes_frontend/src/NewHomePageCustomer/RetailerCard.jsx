import React from "react";
import { MdOutlineDirections } from "react-icons/md";
import { Link } from "react-router-dom";

const RetailerCard = ({
  storeName,
  offer,
  direction,
  storeTiming,
  storeAddress,
  imageSrc = "/image/promo.png",
  imageAlt = "Store Logo",
  className = "", 
}) => {
  return (
    <>
    <Link
  to="/store"
  className="block text-gray-400 cursor-pointer"
>
  <div
    className={`border rounded-lg p-4 shadow-md text-left mx-4 my-2 max-w-xs md:max-w-sm lg:max-w-md ${className} font-roboto`}
  >
    <div className="flex items-center mb-4">
      <img src={imageSrc} alt={imageAlt} className="w-12 h-12 mr-4" />
      <div>
        <h2 className="font-bold">{storeName}</h2>
        <p className="text-gray-500">{storeAddress}</p>
      </div>
    </div>
    <p className="font-sm mt-2 text-[#646464]">
      Store Timing: <span className="text-[#171717]">{storeTiming}</span>
    </p>

    <div className="flex justify-between items-center mt-2">
      <p className="font-bold text-[#646464]">
        {/* Promotional Offer: */}
        <span className="text-[#0D90C1] text-sm">{offer}</span>
      </p>
      <p className="font-bold text-[#646464] inline-flex items-center text-sm">
        {direction}
        <span className="pl-2">
          <MdOutlineDirections />
        </span>
      </p>
    </div>
    {children}
  </div>
</Link>

    </>
  );
};

export default RetailerCard;
