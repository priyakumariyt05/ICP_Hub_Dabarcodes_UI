import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsBookmark, BsThreeDotsVertical, BsQrCode } from "react-icons/bs";

const RandomCard = ({
  image,
  title,
  price,
  originalPrice,
  weight,
  description,
  discount,
  validUntil,
  promoter,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative max-w-3xl my-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 p-6">
      {/* Checkbox on the left, outside the card */}
      <input
        type="checkbox"
        className="absolute left-2 md:left-0 form-checkbox h-4 w-4 text-blue-600"
      />

      {/* Three-Dot Menu on the top right, outside the card */}
      <div className="absolute top-2 right-2 md:right-0">
        <button onClick={toggleMenu} className="text-gray-500 ">
          <BsThreeDotsVertical className="h-4 w-4 " />
        </button>
        {menuOpen && (
          <div className="absolute right-0 bg-white border rounded shadow-lg z-10 mt-2">
            <button className="block px-6 py-1 text-sm hover:bg-gray-100 font-roboto">
              View Details
            </button>
            <button className="block px-6 py-1 text-sm hover:bg-gray-100 font-roboto">
              Unlink SKU
            </button>
            <button className="block px-6 py-1 text-sm hover:bg-gray-100 font-roboto">
              View QR Code
            </button>
          </div>
        )}
      </div>

      {/* QR Code Icon on the right side, outside the card */}
      {/* <div className="absolute right-2 top-1/2 transform -translate-y-1/2 md:right-0 pl-4  ">
        <BsQrCode className="h-8 w-8 text-gray-600 pl-4 " />
      </div> */}
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 md:right-0 pl-4">
  <Link to="/overlay">
    <BsQrCode className="h-8 w-8 text-gray-600 pl-4" />
  </Link>
</div>

      {/* Card Content */}
      <div className="flex-grow flex flex-col md:flex-row border rounded-lg shadow-md p-4 space-y-4 md:space-y-0 md:m-4 mr-4 pr-4">
        {/* Left Section: Image and Discount */}
        <div className="w-full md:w-1/6 flex flex-col items-start">
          <img src={image} alt="Product" className="w-16 h-16 rounded-full" />
          <button className="text-white bg-[#B42700] font-medium text-center p-1 m-2 py-0">
            {discount}
          </button>
        </div>

        {/* Middle Section: Product Info */}
        <div className="w-full md:w-3/6 pl-4">
          <h2 className="text-lg font-bold font-roboto">{title}</h2>
          <div className="flex items-center">
            <span className="text-xl text-[#0A6C91] font-bold font-roboto">
              ${price}
            </span>
            <span className="text-gray-400 line-through ml-2 font-roboto">
              ${originalPrice}
            </span>
          </div>
          <p className="text-sm text-gray-500 font-roboto">{weight}</p>
          <p className="text-sm text-gray-500 font-roboto">{description}</p>
        </div>

        {/* Right Section: Promotion and Buttons */}
        <div className="w-full md:w-2/6 pl-4 md:pl-6  font-roboto ">
          <p className="text-sm text-red-600 font-bold font-roboto">
            Valid Until {validUntil}
          </p>
          <p className="text-sm text-gray-600 font-roboto">Promoted by:</p>
          <p className="text-sm font-bold font-roboto">{promoter}</p>
          <p className="text-sm text-gray-500 font-roboto">+3 others</p>

          <div className="mt-4 flex justify-start text-left">
            <button className="bg-[#0D90C1] text-white px-3 py-1 rounded-lg mr-4">
              Linked
            </button>
            <button className="text-black p-2">
              <BsBookmark className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomCard;
