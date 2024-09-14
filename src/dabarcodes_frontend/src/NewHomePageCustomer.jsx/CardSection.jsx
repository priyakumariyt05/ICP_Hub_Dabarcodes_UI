// import React from 'react';
// import { FaBookmark } from 'react-icons/fa';

// const CardSection = ({ product }) => {
//   return (
//     <div className="border rounded-lg p-4 flex flex-col justify-between bg-white shadow-sm max-w-xs mx-auto">
//       {/* <div className="flex items-center mb-4">
//         <img src={product.image} alt={product.name} className="w-20 h-20 rounded-full mr-4 object-cover" />
//         <div>

//         <p className="text-white bg-[#B42700] font-medium text-center ">{product.discount}</p>

//           <p className="text-xs text-gray-500">{product.brand}</p>
//           <p className="text-xs text-gray-500 mb-1">+3 others</p>
//         </div>
//       </div> */}
//       <div className="flex items-center justify-between mb-4">
//   <img
//     src={product.image}
//     alt={product.name}
//     className="w-20 h-20 rounded-full mr-4 object-cover"
//   />
//   <div className="flex flex-col justify-between h-full">
//     <p className="text-white bg-[#B42700] font-medium text-center">
//       {product.discount}
//     </p>
//     <p className="text-xs text-gray-500">{product.brand}</p>
//     <p className="text-xs text-gray-500 mb-1">+3 others</p>
//   </div>
// </div>

//       <div className="flex justify-between items-center mb-4">
//         <div className="text-sm text-gray-600">
//         <h3 className="font-bold text-lg">{product.name}</h3>
//           {/* <p className="text-red-500 font-bold">{product.discount}</p> */}

//           <p className="font-roboto text-[16px] font-normal leading-[19.2px] text-left text-[#0A6C91]">
//     {product.price}
// </p>

//           {/* <p className="text-gray-400 font-medium ">{product.disc}</p> */}
//           <p className="text-custom-gray font-roboto text-12px font-regular leading-14.4px">
//   {product.disc}
// </p>

//         </div>
//         {/* <button className="bg-blue-500 text-white text-xs px-4 py-1 rounded">Link SKU</button> */}
//       </div>
//       <div className="flex justify-between items-center mt-4">
//         <button className="bg-gray-200 text-blue-500 text-xs px-4 py-1 rounded">Link SKU</button>
//         <FaBookmark className="text-gray-400 cursor-pointer" />
//       </div>
//     </div>
//   );
// };

// export default CardSection;
import React from "react";
// import { FaBookmark } from 'react-icons/fa';

// const CardSection = ({ product }) => {
//   return (
//     <div className="border rounded-lg p-4 flex flex-col justify-between bg-white shadow-sm w-full">
//       <div className="flex items-center justify-between mb-4">
//         <img src={product.image} alt={product.name} className="w-20 h-20 rounded-full mr-4 object-cover" />
//         <div className="flex flex-col justify-between h-full">
//           <p className="text-white bg-[#B42700] font-medium text-center">{product.discount}</p>
//           <p className="text-xs text-gray-500">{product.brand}</p>
//           <p className="text-xs text-gray-500 mb-1">+3 others</p>
//         </div>
//       </div>

//       <div className="flex justify-between items-center mb-4">
//         <div className="text-sm text-gray-600">
//           <h3 className="font-bold text-lg">{product.name}</h3>
//           <p className="font-roboto text-[16px] font-normal leading-[19.2px] text-left text-[#0A6C91]">
//             {product.price}
//           </p>
//           <p className="text-custom-gray font-roboto text-12px font-regular leading-14.4px">
//             {product.disc}
//           </p>
//         </div>
//       </div>

//       <div className="flex justify-between items-center mt-4">
//         <button className="bg-gray-200 text-blue-500 text-xs px-4 py-1 rounded">Link SKU</button>
//         <FaBookmark className="text-gray-400 cursor-pointer" />
//       </div>
//     </div>
//   );
// };

// export default CardSection;
import { FaBookmark } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { Link } from "react-router-dom";
const CardSection = ({ product }) => {
  return (
    <>
      <div className="border border-red-500 rounded-lg p-4 flex flex-col justify-between bg-white shadow-sm w-full">
        <div className="flex items-center justify-between mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-20 h-20 rounded-full mr-4 object-cover"
          />
          <div className="flex flex-col justify-between h-full flex-start">
            <p className="text-white bg-[#B42700] font-roboto font-medium text-center ">
              ${product.discount}
            </p>
            <p className="text-sm text-gray-500 font-meduium font-roboto my-2">
              Promoted by:
              <br />
              <span className="font-inter text-[13.34px] font-semibold leading-[16.8px] tracking-[-0.1px] text-black">
                {product.brand}
              </span>
            </p>

            <p className="text-xs text-gray-500 mb-1 font-roboto">
              +{product.othersCount} others
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-gray-600 font-roboto">
            <div className="text-sm text-gray-600">
              <span className="font-medium text-sm inline-block">
                Active Promotion:
              </span>
              <span className="inline-block font-bold  text-[#B42700]">
                {product.promotionValidity}
              </span>
            </div>
            <h3 className="text-[1rem] font-extrabold leading-[1.2rem] text-black mt-3">
              {product.name}
            </h3>

            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold text-[#0A6C91]">
                ${product.price}
              </span>
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
              <span className="text-sm text-gray-500 ">{product.size}</span>
            </div>
            <p className="text-custom-gray text-12px font-regular leading-14.4px pt-2">
              {product.disc}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          {/* <button className="bg-[#0D90C1] text-white px-4 py-2 rounded-lg font-roboto">
            Link SKU
          </button> */}
          <Link to="/home-product-card">
            <button className="bg-[#0D90C1] text-white px-4 py-2 rounded-lg font-roboto">
              Link SKU
            </button>
          </Link>
          {/* <FaBookmark className="text-black cursor-pointer" /> */}
          <button className="text-black p-2">
            <BsBookmark className="h-6 w-6" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CardSection;
