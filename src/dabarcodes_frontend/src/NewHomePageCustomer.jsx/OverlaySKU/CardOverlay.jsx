// ProductDetails.js
import React, { useState } from "react";
import RedemptionTable from "./RedemptionTable";

const CardOverlay = ({ product, qrCodeImage, retailer }) => {
  // State for handling the redemption data
  //   const [tableData, setTableData] = useState(redemptions);

  return (
    <div className="p-8 max-w-4xl  font-roboto lg:m-4">
      {/* Product Info and QR Code */}
      <div className="flex flex-col lg:flex-row items-start lg:items-start justify-between">
        <div className="lg:w-2/3">
          {/* Product Info */}
          <div className="flex">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-cover rounded-full mr-4"
            />
            <div>
              <h2 className="text-2xl font-semibold mt-6 ml-4">
                {product.name}
              </h2>
            </div>
          </div>

          {/* 15% Off and Promotion Details */}
          <div className="mt-4">
            <p className="text-blue-600 text-xl mt-1 font-roboto">
              ${product.originalPrice}{" "}
              <span className="text-sm text-gray-500 line-through">
                ${product.discountedPrice}
              </span>
            </p>
            <p>
              <span className="text-sm text-gray-500">500g Pouch</span>
            </p>
            <div className="bg-red-600 font-roboto text-white text-sm font-semibold inline-block px-3 py-1 rounded mb-4">
              ${product.discountLabel} Off
            </div>
            <p className="text-gray-500">Active Promotion</p>
            <p className="text-red-600 text-medium font-roboto py-2">
              Valid until {product.validUntil}
            </p>
            <p className="text-sm">
              Promoted By: <br /> {product.promoter}
            </p>
            <p className="text-sm">+3 others</p>
          </div>

          {/* Product Description */}
          <p className="text-gray-700 mb-4 mt-4  lg:w-96 md:w-74">
            {product.description}
          </p>

          {/* Participating Retailer */}
          <div className="p-2 mb-6 w-1/2">
            <p className="text-sm font-semibold">Participating Retailer</p>
            <input
              type="text"
              value={retailer}
              className="w-full border border-gray-300 p-2 mt-2 rounded focus:outline-none focus:border-blue-500"
              readOnly
            />
          </div>
        </div>

        {/* QR Code */}
        <div className="lg:w-1/3 flex flex-col items-start lg:items-end">
          <img src={qrCodeImage} alt="QR Code" className="mb-6 w-full" />

          {/* Brand Details */}

          <div className="w-full mt-4 flex justify-between">
            <div className="flex">
              <div className="">
                <p>
                  <strong>Brand:</strong>
                </p>
                <p>
                  <strong>Flavor:</strong>
                </p>
                <p>
                  <strong>Consistency:</strong>
                </p>
                <p>
                  <strong>Item Weight:</strong>
                </p>
              </div>
              <div className="ml-6 w-1/2">
                <p>{product.brand}</p>
                <p>{product.flavor}</p>
                <p>{product.consistency}</p>
                <p>{product.itemWeight}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Previous Redemptions */}
      {/* <RedemptionTable redemptions={tableData} />  */}
    </div>
  );
};

export default CardOverlay;
