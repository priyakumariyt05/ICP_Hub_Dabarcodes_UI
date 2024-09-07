// import React from 'react';
// import { FaBookmark } from 'react-icons/fa';

// const TopSkuCard = ({ product }) => {
//   return (
//     <div className="border rounded-lg p-4 flex flex-col justify-between bg-white shadow-sm w-full">
//       <div className="flex items-center justify-between mb-4">
//         <img src={product.image} alt={product.name} className="w-20 h-20 rounded-full mr-4 object-cover" />
//         <div className="flex flex-col justify-between h-full">
//           <p className="text-white bg-[#B42700] font-medium text-center">{product.discount}</p>
//           <p className="text-l text-black font-semibold font-roboto">{product.brand}</p>
//           <p className="text-xs text-gray-500 mb-1">+3 others</p>
//         </div>
//       </div>

//       <div className="flex justify-between items-center mb-4">
//         <div className="text-sm text-gray-600">
//           <h3 className="font-bold text-lg">{product.name}</h3>
//           <p className="font-roboto text-[16px] font-normal leading-[19.2px] text-left text-[#0A6C91]">
//             {product.price}
//           </p>
//           <p className="text-custom-gray font-roboto text-12px font-regular leading-14.4px py-4">
//             {product.disc}
//           </p>
//         </div>
//       </div>

//       <div className="flex justify-between items-center mt-4">
//     <button className="bg-blue-400 text-white text-medium px-4 py-1 rounded font-roboto">Link SKU</button>
//     <FaBookmark className="text-gray-200 cursor-pointer" />
//   </div>
//     </div>
//   );
// };

// const TopSkuGrid = ({ products }) => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:m-10 sm:m-0">
//       {products.map((product, index) => (
//         <TopSkuCard key={index} product={product} />
//       ))}
//     </div>
//   );
// };

// export default TopSkuGrid;
import React from "react";
import { FaBookmark } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";

const TopSkuCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 flex flex-col justify-between bg-white shadow-sm w-full">
      <div className="flex items-center justify-between mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-20 h-20 rounded-full mr-4 object-cover"
        />
        <div className="flex flex-col justify-between h-full">
          <p className="text-white bg-[#B42700] font-roboto font-medium text-center">
            {product.discount}
          </p>
          <p className="text-l text-black font-roboto font-semibold">
            {product.promoted}
          </p>
          <p className="text-l text-black font-roboto font-semibold">
            {product.brand}
          </p>
          <p className="text- text-gray-500 mb-1 font-roboto">+3 others</p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-gray-600 font-roboto">
          <h3 className="font-bold text-lg">{product.name}</h3>
          <p className="text-[16px] font-normal leading-[19.2px] text-left text-[#0A6C91]">
            {product.price}
          </p>
          <p className="text-custom-gray text-12px font-regular leading-14.4px py-4">
            {product.disc}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button className="bg-blue-400 text-white text-medium px-4 py-1 rounded font-roboto">
          Link SKU
        </button>
        {/* <FaBookmark className="text-gray-200 cursor-pointer" /> */}
        <button className="text-black p-2">
          <BsBookmark className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const TopSkuGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:m-10 sm:m-0">
      {products.map((product, index) => (
        <TopSkuCard key={index} product={product} />
      ))}
    </div>
  );
};

export default TopSkuGrid;
