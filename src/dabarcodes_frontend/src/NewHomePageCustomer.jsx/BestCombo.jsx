// import { FaBookmark } from "react-icons/fa";
// import ProductSection2 from "./ProductSection2";

// const ComboCard = ({ product }) => {
//   return (
//     <>
//       <div className="border border-red-500 rounded-lg p-4 flex flex-col justify-between bg-white shadow-sm w-full">
//         <div className="flex items-center justify-between mb-4">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-20 h-20 rounded-full mr-4 object-cover"
//           />
//           <div className="flex flex-col justify-between h-full">
//             <p className="text-white bg-[#B42700] font-roboto font-medium text-center">
//               {product.discount}
//             </p>
//             <p className="text-xs text-black font-semibold font-roboto">
//               {product.brand}
//             </p>
//             <p className="text-xs text-gray-500 mb-1 font-roboto">+3 others</p>
//           </div>
//         </div>

//         <div className="flex justify-between items-center mb-4">
//           <div className="text-sm text-gray-600 font-roboto">
//             <h3 className="font-bold text-lg">{product.name}</h3>
//             <p className="text-[16px] font-normal leading-[19.2px] text-left text-[#0A6C91]">
//               {product.price}
//             </p>
//             <p className="text-custom-gray text-12px font-regular leading-14.4px pt-2">
//               {product.disc}
//             </p>
//           </div>
//         </div>

//         <div className="flex justify-between items-center mt-4">
//           <button className="bg-blue-400 text-white text-medium px-4 py-1 rounded font-roboto">
//             Link SKU
//           </button>
//           <FaBookmark className="text-gray-400 cursor-pointer" />
//         </div>
//       </div>
//     </>
//   );
// };

// const BestCombo = () => {
// <ProductSection2/>
// };

// export default BestCombo;
// BestCombo.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import CardSection from './CardSection';

// const Combo = [
//   {
//     id: 1,
//     image: "https://via.placeholder.com/150",
//     name: "Nestle Ice Coffee",
//     brand: "Lingo Pvt Ltd",
//     size: "527 ml",
//     discount: "$15 off",
//     disc: "Super smooth and creamy vanilla half and half crowned with s...",
//     price: "$27",
//   },
//   {
//     id: 2,
//     image: "https://via.placeholder.com/150",
//     name: "Nestle Ice Coffee",
//     brand: "Lingo Pvt Ltd",
//     size: "527 ml",
//     discount: "$15 off",
//     disc: "Super smooth and creamy vanilla half and half crowned with s...",
//     price: "$27",
//   },

//   // Add more products as needed
// ];

// const BestCombo = () => {
//   return (
//     <div className="border mb-12 rounded-md mx-4">
//       <div className="flex mx-4 text-balance justify-between my-4 md:mx-8 font-semibold">
//         <p className="lg:text-[20px]">Best Combo offers</p>
//         <Link
//           to=""
//           className="cursor-pointer hover:underline decoration-[#0D90C1] underline-offset-8"
//         >
//           View All
//         </Link>
//       </div>
//       <div className="flex gap-4 mt-2 overflow-x-auto px-2 hide-scrollbar mb-8 md:mx-4">
//         {Combo.map(product => (
//           <CardSection key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BestCombo;
import React from "react";

import CardSection from "./CardSection";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const BestCombo = ({ data }) => {
  const [sliderRef] = useKeenSlider({
    slides: { perView: 1, spacing: 15 },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 1, spacing: 15 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 2, spacing: 20 },
      },
    },
  });

  return (
    <div className="my-4 md:my-6 lg:my-8 border p-4 md:p-5 lg:p-6 rounded-md md:rounded-lg shadow-md md:shadow-lg m-8">
      <div className="flex  justify-between items-center my-4">
        <p className="font-semibold lg:text-[20px] text-[16px]">Best Combo Offers</p>
        <a
          href="#"
          className="text-[#0D90C1] text-sm md:text-base cursor-pointer hover:underline underline-offset-4"
        >
          View All
        </a>
      </div>
      <div className="relative keen-slider" ref={sliderRef}>
        {data.map((product) => (
          <div className="keen-slider__slide" key={product.id}>
            <CardSection product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestCombo;
