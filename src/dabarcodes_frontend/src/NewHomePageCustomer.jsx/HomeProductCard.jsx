
// import React from 'react';

// import { BsBookmark } from "react-icons/bs";
// const HomeProductCard = () => {
//   return (
//     <div className="rounded-lg p-6 flex flex-col md:flex-row w-full max-w-5xl mx-auto font-roboto mt-10">
//       <div className="w-full md:w-1/3">
//         <img
//           src="/image/drink2.png" 
//           alt="Nestle Ice Coffee"
//           className="rounded-lg"
//         />
//         <div className="mt-4 grid grid-cols-2 gap-4"> 
//           <div className="text-black text-semibold">
//             <p><strong className='font-roboto'>Brand:</strong></p>
//             <p><strong className='font-roboto'>Flavor:</strong></p>
//             <p><strong className='font-roboto'>Consistency:</strong></p>
//             <p><strong className='font-roboto'>Item Weight:</strong></p>
//           </div>
//           <div className="text-gray-500 text-sm">
//             <p className='font-roboto'>Nestle</p>
//             <p className='font-roboto'>Vanilla</p>
//             <p className='font-roboto'>Creamy</p>
//             <p className='font-roboto'>500g</p>
//           </div>
//         </div>
//       </div>
//       <div className="w-full md:w-2/3 md:pl-6 mt-4 md:mt-0">
//         <div className="flex justify-between items-center">
//           <h2 className="text-2xl font-bold text-gray-800 font-roboto">Nestle Ice Coffee</h2>
//           <div className="flex items-center ml-auto">  
//             <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 font-roboto mr-4">
//               Link SKU
//             </button>
//             <BsBookmark className="ml-2 text-gray-600 mt-[-1rem]" /> {/* Bookmark icon outside the button */}
//           </div>
//         </div>
//         <p className="text-blue-600 text-xl mt-1 font-roboto">$37 <span className="text-sm text-gray-500 line-through">52$</span></p>
//         <p><span className="text-sm text-gray-500">500g Pouch</span></p>
//         <div className="mt-4">
//           <div className="bg-red-600 font-roboto text-white text-sm font-semibold inline-block px-3 py-1 rounded">
//             $15 off
//           </div>
//           <div className="text-sm text-gray-700 mt-2">
//             {/* <p><strong font-roboto>Active Promotion:</strong></p> */}
//             <p className="text-blue-500 text-medium font-roboto py-2">Valid Until 2024, Sept 19</p>
//             <p className="text-gray-500 font-roboto ">Promoted by:</p>
//             <p className='font-roboto'>Urban Grocers</p>
//             <p className='font-roboto'>+3 others</p>
 
//           </div>
//           <hr className="border-t-2 border-gray-300 mb-4 mt-4 " />
//         </div>
//         <div className="mt-4">
//         <p
//   className="text-gray-700"
//   style={{
//     fontFamily: 'Roboto',
//     fontSize: '14px',
//     fontWeight: 400,
//     lineHeight: '16.8px',
//     textAlign: 'left',
//     color: '#171717',
//   }}
// >
//   Super smooth and creamy vanilla half and half crowned with a rich,\n\n bold coffee essence, perfectly blended to deliver an indulgent and refreshing iced coffee experience.

// </p>

//         </div>
//         <hr className="border-t-2 border-gray-300 mb-6 mt-6" />
//         <div className="mt-4">
//           <label className="text-gray-700 text-sm font-semibold">Select Participating Retailer</label>
//           <select className="mt-2 block w-[50%] px-3 py-2 border border-gray-300 bg-white rounded-md text-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
//             <option>Select</option>
//             <option>Retailer 1</option>
//             <option>Retailer 2</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeProductCard;





import React from 'react';
import { useState } from 'react';
import { BsBookmark } from "react-icons/bs";
import RetailerCarousel from './RetailerCarousel';

import ProductSection2 from './ProductSection2';
import Footer from '../components/Footer';
import CardDetails from './CardDetails';
const wishlistData = [
    {
      id: 1,
      image: '/image/drink.png',
      name: 'Nestle Ice Coffee',
      brand: 'Lingo Pvt Ltd',
      size: '527 ml',
      discount: '$15 off',
      disc: 'Super smooth and creamy vanilla half and half crowned with s...',
      price: '$27',
    },
   
    {
      id: 2,
      image: '/image/drink.png',
      name: 'Nestle Ice Coffee',
      brand: 'Lingo Pvt Ltd',
      size: '527 ml',
      discount: '$15 off',
      disc: 'Super smooth and creamy vanilla half and half crowned with s...',
      price: '$27',
    },
    {
      id: 3,
      image: '/image/drink.png',
      name: 'Nestle Ice Coffee',
      brand: 'Lingo Pvt Ltd',
      size: '527 ml',
      discount: '$15 off',
      disc: 'Super smooth and creamy vanilla half and half crowned with s...',
      price: '$27',
    },
    {
      id: 4,
      image: '/image/drink.png',
      name: 'Nestle Ice Coffee',
      brand: 'Lingo Pvt Ltd',
      size: '527 ml',
      discount: '$15 off',
      disc: 'Super smooth and creamy vanilla half and half crowned with s...',
      price: '$27',
    },
  ];
const HomeProductCard = () => {
  const [wishlist, setWishlist] = useState(wishlistData);


  const Sku =[
 

          {
            id: 1,
            image: '/image/drink.png',
            name: 'Nestle Ice Coffee',
            brand: 'Lingo Pvt Ltd',
            size: '527 ml',
            discount: '$15 off',
            disc: 'Super smooth and creamy vanilla half and half crowned with s...',
            price: '$27',
          },
          
          {
            id: 1,
            image: '/image/drink.png',
            name: 'Nestle Ice Coffee',
            brand: 'Lingo Pvt Ltd',
            size: '527 ml',
            discount: '$15 off',
            disc: 'Super smooth and creamy vanilla half and half crowned with s...',
            price: '$27',
          },
          
          {
            id: 1,
            image: '/image/drink.png',
            name: 'Nestle Ice Coffee',
            brand: 'Lingo Pvt Ltd',
            size: '527 ml',
            discount: '$15 off',
            disc: 'Super smooth and creamy vanilla half and half crowned with s...',
            price: '$27',
          },
          
          {
            id: 1,
            image: '/image/drink.png',
            name: 'Nestle Ice Coffee',
            brand: 'Lingo Pvt Ltd',
            size: '527 ml',
            discount: '$15 off',
            disc: 'Super smooth and creamy vanilla half and half crowned with s...',
            price: '$27',
          },
          
   
          
      
   ]
  const retailers = [
  { storeName: 'Retailer A', offer: '10% off on all products', validTill: '31st December 2024', imageSrc: '/image/promo.png' },
  { storeName: 'Retailer B', offer: '20% off on electronics', validTill: '15th January 2025', imageSrc: '/image/promo.png'},
  { storeName: 'Retailer C', offer: 'Buy 1 Get 1 Free', validTill: '10th November 2024', imageSrc: '/image/promo.png' },
  // Add more retailers as needed
];
const handleViewAllClick = () => {
  // Logic for when the "View All" button is clicked
};
  return (
    <>
    
<CardDetails/>
    <RetailerCarousel
      title="Participating Retailers"
      retailers={retailers}
      buttonLabel="View All"
      onViewAllClick={handleViewAllClick}
    />
   
   {/* SEction  */}
  
  <h1 className=" mt-10 font-butler text-[32px] sm:text-[36px] md:text-[39px] font-[20px]leading-[40px] sm:leading-[44px] md:leading-[46.8px] text-center text-[#171717]">
You might also like
</h1>
<div className="p-4 space-y-8">
<ProductSection2
            products={wishlist}
          />
</div>
   <Footer/>
</>
  );
};

export default HomeProductCard;
