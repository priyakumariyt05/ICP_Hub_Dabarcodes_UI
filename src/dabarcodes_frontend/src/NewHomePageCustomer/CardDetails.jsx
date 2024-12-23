import React from "react";
import { BsBookmark } from "react-icons/bs";

import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";

import RetailerCarousel from "./RetailerCarousel";

import ProductSection2 from "./ProductSection2";


import { useData } from "../ContextApi/DataContext";
const CardDetails = () => {
  const { wishlist, retailerList } = useData();

  const handleViewAllClick = () => {
    // Logic for when the "View All" button is clicked
  };
  return (
    <div>
      <Navbar2 />
      <div className="rounded-lg p-6 flex flex-col md:flex-row w-full max-w-5xl mx-auto font-roboto mt-10 mb-20">
        {/* Image and Details Section */}
        <div className="w-full md:w-1/3">
          <img
            src="/image/drink2.png"
            alt="Nestle Ice Coffee"
            className="w-full h-auto rounded-lg"
          />
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="text-black text-semibold">
              <p>
                <strong className="font-roboto">Brand:</strong>
              </p>
              <p>
                <strong className="font-roboto">Flavor:</strong>
              </p>
              <p>
                <strong className="font-roboto">Consistency:</strong>
              </p>
              <p>
                <strong className="font-roboto">Item Weight:</strong>
              </p>
            </div>
            <div className="text-gray-500 text-semibold">
              <p className="font-roboto">Nestle</p>
              <p className="font-roboto ">Vanilla</p>
              <p className="font-roboto ">Creamy</p>
              <p className="font-roboto">500g</p>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="w-full md:w-2/3 md:pl-6 mt-4 md:mt-0">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h2 className="text-2xl font-bold text-gray-800 font-roboto">
              Nestle Ice Coffee
            </h2>
            <div className="flex items-center mt-2 md:mt-0">
              <button className="bg-[#0D90C1] text-white px-6 py-2 rounded-md text-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 font-roboto mr-4">
                Link SKU
              </button>
              <BsBookmark className="text-gray-600 ml-2 mt-[-0.5rem] h-6 w-6 " />{" "}
              {/* Bookmark icon outside the button */}
            </div>
          </div>
          <p className="text-blue-600 text-xl mt-1 font-roboto">
            $37 <span className="text-sm text-gray-500 line-through">52$</span>
          </p>
          <p>
            <span className="text-sm text-gray-500">500g Pouch</span>
          </p>
          <div className="mt-4">
            <div className="bg-[#B42700] font-roboto text-white text-sm font-semibold inline-block px-3 py-1 rounded">
              $15 off
            </div>
            <div className="text-sm text-gray-700 mt-2">
              <p className="text-[#0A6C91] font-medium font-roboto py-2">
                Valid Until 2024, Sept 19
              </p>
              <p className="text-gray-500  font-roboto">Promoted by:</p>
              <p className="font-roboto font-bold">Urban Grocers</p>
              <p className="font-roboto">+3 others</p>
            </div>
            {/* <hr className="border-t-2 border-gray-300 mb-4 mt-4" /> */}
          </div>
          <div className="mt-4">
            <p
              className="text-gray-700 text-sm font-normal leading-6 text-left max-w-md"
              style={{ fontFamily: "Roboto", marginLeft: 0, paddingLeft: 0 }}
            >
              <hr className="my-4 border-t-2 border-gray-300" />
              Super smooth and creamy vanilla half and half crowned with a rich,
              bold coffee essence, perfectly blended to deliver an indulgent and
              refreshing iced coffee experience.
              <hr className="my-4 border-t-2 border-gray-300" />
            </p>
          </div>
          {/* <hr className="border-t-2 border-gray-300 mb-6 mt-6" /> */}
          <div className="mt-4">
            <label className="text-gray-700 text-sm font-semibold">
              Select Participating Retailer
            </label>
            <select className="mt-2 block w-full md:w-[50%] px-3 py-2 border border-gray-300 bg-white rounded-md text-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option>Select</option>
              <option>Retailer 1</option>
              <option>Retailer 2</option>
            </select>
          </div>
          <p className="underline text-sm">See more Details</p>
        </div>
      </div>
      <RetailerCarousel
        title="Participating Retailers"
        retailers={retailerList}
        buttonLabel="View All"
        onViewAllClick={handleViewAllClick}
      />

      {/* SEction  */}

      <h1 className=" mt-10  text-[32px] sm:text-[36px] md:text-[39px] font-[20px]leading-[40px] sm:leading-[44px] md:leading-[46.8px] text-center text-[#171717]">
        You might also like
      </h1>
      <div className="p-4 space-y-8">
        <ProductSection2 products={wishlist} showBorder={false} />
      </div>
      <Footer />
    </div>
  );
};

export default CardDetails;
// adddd api
// import React from "react";
// import { BsBookmark } from "react-icons/bs";

// // Static Data
// const staticProductData = {
//   id: "123",
//   name: "Nestle Ice Coffee",
//   brand: "Nestle",
//   flavor: "Vanilla",
//   consistency: "Creamy",
//   weight: "500g",
//   price: 37,
//   originalPrice: 52,
//   discount: 15,
//   promotionValidUntil: "2024, Sept 19",
//   promotedBy: "Urban Grocers",
//   image: "/image/drink2.png",
//   description:
//     "Super smooth and creamy vanilla half and half crowned with a rich, bold coffee essence, perfectly blended to deliver an indulgent and refreshing iced coffee experience.",
//   retailers: ["Retailer 1", "Retailer 2"],
// };

// const CardDetails = ({ id }) => {
//   // Static data remains the same; only `id` is displayed dynamically
//   return (
//     <div>
//       <div className="rounded-lg p-6 flex flex-col md:flex-row w-full max-w-5xl mx-auto font-roboto mt-10 mb-20">
//         {/* Image and Details Section */}
//         <div className="w-full md:w-1/3">
//           <img
//             src={staticProductData.image}
//             alt={staticProductData.name}
//             className="w-full h-auto rounded-lg"
//           />
//           <div className="mt-4 grid grid-cols-2 gap-4">
//             <div className="text-black text-semibold">
//               <p>
//                 <strong className="font-roboto">Brand:</strong>
//               </p>
//               <p>
//                 <strong className="font-roboto">Flavor:</strong>
//               </p>
//               <p>
//                 <strong className="font-roboto">Consistency:</strong>
//               </p>
//               <p>
//                 <strong className="font-roboto">Item Weight:</strong>
//               </p>
//             </div>
//             <div className="text-gray-500 text-semibold">
//               <p className="font-roboto">{staticProductData.brand}</p>
//               <p className="font-roboto">{staticProductData.flavor}</p>
//               <p className="font-roboto">{staticProductData.consistency}</p>
//               <p className="font-roboto">{staticProductData.weight}</p>
//             </div>
//           </div>
//         </div>

//         {/* Main Content Section */}
//         <div className="w-full md:w-2/3 md:pl-6 mt-4 md:mt-0">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
//             <h2 className="text-2xl font-bold text-gray-800 font-roboto">
//               {staticProductData.name} (ID: {id})
//             </h2>
//             <div className="flex items-center mt-2 md:mt-0">
//               <button className="bg-[#0D90C1] text-white px-6 py-2 rounded-md text-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 font-roboto mr-4">
//                 Link SKU
//               </button>
//               <BsBookmark className="text-gray-600 ml-2 mt-[-0.5rem] h-6 w-6 " />
//             </div>
//           </div>
//           <p className="text-blue-600 text-xl mt-1 font-roboto">
//             ${staticProductData.price}{" "}
//             <span className="text-sm text-gray-500 line-through">
//               ${staticProductData.originalPrice}
//             </span>
//           </p>
//           <p>
//             <span className="text-sm text-gray-500">{staticProductData.weight}</span>
//           </p>
//           <div className="mt-4">
//             <div className="bg-[#B42700] font-roboto text-white text-sm font-semibold inline-block px-3 py-1 rounded">
//               ${staticProductData.discount} off
//             </div>
//             <div className="text-sm text-gray-700 mt-2">
//               <p className="text-[#0A6C91] font-medium font-roboto py-2">
//                 Valid Until {staticProductData.promotionValidUntil}
//               </p>
//               <p className="text-gray-500  font-roboto">Promoted by:</p>
//               <p className="font-roboto font-bold">{staticProductData.promotedBy}</p>
//               <p className="font-roboto">+3 others</p>
//             </div>
//           </div>
//           <div className="mt-4">
//             <p
//               className="text-gray-700 text-sm font-normal leading-6 text-left max-w-md"
//               style={{ fontFamily: "Roboto", marginLeft: 0, paddingLeft: 0 }}
//             >
//               <hr className="my-4 border-t-2 border-gray-300" />
//               {staticProductData.description}
//               <hr className="my-4 border-t-2 border-gray-300" />
//             </p>
//           </div>
//           <div className="mt-4">
//             <label className="text-gray-700 text-sm font-semibold">
//               Select Participating Retailer
//             </label>
//             <select className="mt-2 block w-full md:w-[50%] px-3 py-2 border border-gray-300 bg-white rounded-md text-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
//               <option>Select</option>
//               {staticProductData.retailers.map((retailer, index) => (
//                 <option key={index}>{retailer}</option>
//               ))}
//             </select>
//           </div>
//           <p className="underline text-sm">See more Details</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardDetails;
// end api

// When i use in Api FEtch Data then this processs its working
// import React, { useState } from 'react';
// import { BsBookmark } from "react-icons/bs";

// const CardDetails = ({
//   imageSrc,
//   brand,
//   flavor,
//   consistency,
//   itemWeight,
//   productName,
//   price,
//   originalPrice,
//   discount,
//   validUntil,
//   promotedBy,
//   retailerOptions
// }) => {
//   return (
//     <div className="rounded-lg p-6 flex flex-col md:flex-row w-full max-w-5xl mx-auto font-roboto mt-10 mb-20">
//       {/* Image and Details Section */}
//       <div className="w-full md:w-1/3">
//         <img
//           src={imageSrc}
//           alt={productName}
//           className="w-full h-auto rounded-lg"
//         />
//         <div className="mt-4 grid grid-cols-2 gap-4">
//           <div className="text-black text-semibold">
//             <p><strong className='font-roboto'>Brand:</strong></p>
//             <p><strong className='font-roboto'>Flavor:</strong></p>
//             <p><strong className='font-roboto'>Consistency:</strong></p>
//             <p><strong className='font-roboto'>Item Weight:</strong></p>
//           </div>
//           <div className="text-gray-500 text-sm">
//             <p className='font-roboto'>{brand}</p>
//             <p className='font-roboto'>{flavor}</p>
//             <p className='font-roboto'>{consistency}</p>
//             <p className='font-roboto'>{itemWeight}</p>
//           </div>
//         </div>
//       </div>

//       {/* Main Content Section */}
//       <div className="w-full md:w-2/3 md:pl-6 mt-4 md:mt-0">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
//           <h2 className="text-2xl font-bold text-gray-800 font-roboto">{productName}</h2>
//           <div className="flex items-center mt-2 md:mt-0">
//             <button className="bg-[#B5E8FB] text-blue-500 px-6 py-2 rounded-md text-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 font-roboto mr-4">
//               Link SKU
//             </button>
//             <BsBookmark className="text-gray-600 ml-2 mt-[-1rem]" /> {/* Bookmark icon outside the button */}
//           </div>
//         </div>
//         <p className="text-blue-600 text-xl mt-1 font-roboto">{price} <span className="text-sm text-gray-500 line-through">{originalPrice}</span></p>
//         <p><span className="text-sm text-gray-500">{itemWeight} Pouch</span></p>
//         <div className="mt-4">
//           <div className="bg-red-600 font-roboto text-white text-sm font-semibold inline-block px-3 py-1 rounded">
//             {discount}
//           </div>
//           <div className="text-sm text-gray-700 mt-2">
//             <p className="text-blue-500 text-medium font-roboto py-2">Valid Until {validUntil}</p>
//             <p className="text-gray-500 font-roboto">Promoted by:</p>
//             <p className='font-roboto'>{promotedBy}</p>
//           </div>
//         </div>
//         <div className="mt-4">
//           <label className="text-gray-700 text-sm font-semibold">Select Participating Retailer</label>
//           <select className="mt-2 block w-full md:w-[50%] px-3 py-2 border border-gray-300 bg-white rounded-md text-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
//             {retailerOptions.map((option, index) => (
//               <option key={index}>{option}</option>
//             ))}
//           </select>
//         </div>
//         <p className='underline text-sm'>See more Details</p>
//       </div>
//     </div>
//   );
// }

// const App = () => {
//   const [productData, setProductData] = useState({
//     imageSrc: "/image/drink2.png",
//     brand: "Nestle",
//     flavor: "Vanilla",
//     consistency: "Creamy",
//     itemWeight: "500g",
//     productName: "Nestle Ice Coffee",
//     price: "$37",
//     originalPrice: "$52",
//     discount: "$15 off",
//     validUntil: "2024, Sept 19",
//     promotedBy: "Urban Grocers",
//     retailerOptions: ["Select", "Retailer 1", "Retailer 2"]
//   });

//   return (
//     <CardDetails {...productData} />
//   );
// }

// export default App;
