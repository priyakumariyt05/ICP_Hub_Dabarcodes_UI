// import React from 'react';
// import { Doughnut } from 'react-chartjs-2';
// import LeftSidebar from './LeftSidebar';
// import Navbar2 from '../components/Navbar2';
// import Footer from '../components/Footer';

// const MySku = () => {
//     const products = [
//         { name: 'Frozen Beverage', discount: '10% OFF', bgColor: 'bg-blue-100', imageUrl: '/image/dairy.png' },
//         { name: 'Packed Corn', discount: '25% off at $18', bgColor: 'bg-yellow-100', imageUrl: '/image/dairy.png' },
//         { name: 'Fresh Fruit', discount: '20% OFF', bgColor: 'bg-green-100', imageUrl: '/image/dairy.png' },
//         { name: 'Frozen Meat', discount: '30% OFF', bgColor: 'bg-red-100', imageUrl: '/image/dairy.png' },
//         { name: 'Fresh Fruit', discount: '20% OFF', bgColor: 'bg-green-100', imageUrl: '/image/dairy.png' },
//         { name: 'Frozen Meat', discount: '30% OFF', bgColor: 'bg-red-100', imageUrl: '/image/dairy.png' },
//         { name: 'Frozen Drink', discount: '30% OFF', bgColor: 'bg-blue-100', imageUrl: '/image/dairy.png' },
//         { name: 'Frozen Drink', discount: '30% OFF', bgColor: 'bg-blue-100', imageUrl: '/image/dairy.png' },
//         { name: 'Fresh Fruit', discount: '20% OFF', bgColor: 'bg-green-100', imageUrl: '/image/dairy.png' },
//         { name: 'Frozen Meat', discount: '30% OFF', bgColor: 'bg-red-100', imageUrl: '/image/dairy.png' },
//         { name: 'Frozen Drink', discount: '30% OFF', bgColor: 'bg-blue-100', imageUrl: '/image/dairy.png' },
//     ];

//     const data = {
//         labels: ['Used', 'Unused', 'Pending'],
//         datasets: [
//             {
//                 data: [4, 3, 1],
//                 backgroundColor: ['#F1E3D6', '#F1E7FE', '#FED3D2'],
//                 hoverBackgroundColor: ['#2563eb', '#9ca3af', '#003D6A'],
//                 borderColor: ['#ffffff', '#ffffff', '#ffffff'],
//                 borderWidth: 2,
//             },
//         ],
//     };

//     const options = {
//         cutout: '85%',
//         maintainAspectRatio: false,
//         responsive: true,
//         plugins: {
//             legend: {
//                 display: false,
//             },
//         },
//     };

//     return (
//         <>
//         <Navbar2/>
//             <div className="flex flex-col md:flex-row min-h-screen p-6">
//                <LeftSidebar/>
//                 <main className="flex-1 p-6 md:p-10">
//                     <h1 className="text-2xl font-bold mb-6">My Linked SKUs</h1>
//                     <div className="space-y-6">
//                         <section className="border-b pb-6">
//                             <div className="flex flex-col md:flex-row justify-between items-center">
//                                 <h2 className="text-xl font-semibold mb-4">SKU Overview</h2>
//                             </div>
//                             <div className="flex flex-col md:flex-row items-center mt-4">
//                                 <div className="relative w-full max-w-xs md:max-w-md h-64">
//                                     <Doughnut data={data} options={options} />
//                                 </div>
//                                 <div className="mt-4 md:mt-0 md:ml-6 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
//                                     <div>
//                                         <p className='font-medium'>Fresh Meat: 4</p>
//                                         <p className='font-medium'>Fresh and Vegetable: 54</p>
//                                         <p className='font-medium'>Shelf Stable Food: 45</p>
//                                     </div>
//                                     <div>
//                                         <p className='font-medium'>Frozen Food: 4</p>
//                                         <p className='font-medium'>Dairy Product: 5</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </section>
//                         <div className="space-y-4 mt-8">
//                             {products.map((product, index) => (
//                                 <div
//                                     key={index}
//                                     className={`flex items-center justify-between p-4 ${product.bgColor} rounded-lg`}
//                                 >
//                                     <div className="flex items-center space-x-4">
//                                         <div className="relative w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
//                                             <img
//                                                 src={product.imageUrl}
//                                                 alt={product.name}
//                                                 className="object-cover w-full h-full"
//                                             />
//                                         </div>
//                                         <div>
//                                             <p>{product.name}</p>
//                                             <p className="font-semibold">{product.discount}</p>
//                                         </div>
//                                     </div>
//                                     <button className="bg-blue-500 text-white py-1 px-4 rounded">Linked</button>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </main>
//             </div>
//             <Footer/>
//         </>
//     );
// }

// export default MySku;
// import React from "react";
// import CustomDoughnutChart from "./CustomDoughnutChart";
// import LeftSidebar from "./LeftSidebar";
// import Navbar2 from "../components/Navbar2";
// import Footer from "../components/Footer";
// import RandomCard from "../NewHomePageCustomer.jsx/RandomCard";
// import { MdSearch } from "react-icons/md";

// const MySku = () => {


//   const data = {
//     labels: ["Used", "Unused", "Pending"],
//     datasets: [
//       {
//         data: [4, 3, 1],
//         backgroundColor: ["#F1E3D6", "#F1E7FE", "#FED3D2"],
//         hoverBackgroundColor: ["#2563eb", "#9ca3af", "#003D6A"],
//         borderColor: ["#ffffff", "#ffffff", "#ffffff"],
//         borderWidth: 2,
//         borderRadius: 30,
//       },
//     ],
//   };

//   const options = {
//     cutout: "85%",
//     maintainAspectRatio: false,
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//   };

//   return (
//     <>
//       <Navbar2 />
//       <div className="flex flex-col md:flex-row min-h-screen p-6">
//         <LeftSidebar />
//         <main className="flex-1 p-6 md:p-10">
//           {/* <h1 className="text-2xl font-bold mb-6">My Linked SKUs</h1> */}
//           <div className="flex items-center justify-between mb-8">
//             <h1 className="text-2xl font-bold">My SKUs</h1>
//             <div className="relative flex items-center justify-start">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="pl-10 pr-4 py-2 border border-gray-300 rounded-md"
//               />
//               <MdSearch
//                 className="absolute right-3 text-gray-500 "
//                 style={{ top: "50%", transform: "translateY(-50%)" }} // Center icon vertically
//               />
//             </div>
//           </div>



//           <div className="flex flex-wrap items-start space-x-4 border border-gray-300 rounded-xl mb-4">
//             <div className="p-4 rounded-md text-center flex-shrink-0 w-full sm:w-auto">
//               <p className="text-lg font-bold font-roboto">All SKUs</p>
//             </div>
//             <div className="p-4 rounded-md text-center flex-shrink-0 w-full sm:w-auto">
//               <p className="text-medium font-medium font-roboto">Linked SKUs</p>
//             </div>
//             <div className="p-4 rounded-md text-center flex-shrink-0 w-full sm:w-auto">
//               <p className="text-medium font-medium font-roboto">
//                 Floating SKUs
//               </p>
//             </div>
//             <div className="p-4 rounded-md text-center flex-shrink-0 w-full sm:w-auto">
//               <p className="text-medium font-medium font-roboto">
//                 SKUs Wishlist
//               </p>
//             </div>
//             <div className="p-4 rounded-md text-center flex-shrink-0 w-full sm:w-auto">
//               <p className="text-medium font-medium font-roboto">
//                 Unlinked SKUs
//               </p>
//             </div>
//           </div>

//           <div className="space-y-6">
//             <section className="border-b pb-6">
//               <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
//                 <div className="flex-shrink-0">
//                   <CustomDoughnutChart
//                     data={data}
//                     options={options}
//                     centerText="Total 99"
//                   />
//                 </div>
//                 <div className="mt-4 md:mt-0 md:ml-6 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
//                   <div>
//                     <p className="font-medium font-roboto">Fresh Meat: 4</p>
//                     <p className="font-medium font-roboto">
//                       Fresh and Vegetable: 54
//                     </p>
//                     <p className="font-medium font-roboto">
//                       Shelf Stable Food: 45
//                     </p>
//                   </div>
//                   <div>
//                     <p className="font-medium font-roboto">Frozen Food: 4</p>
//                     <p className="font-medium font-roboto">Dairy Product: 5</p>
//                   </div>
//                 </div>
//               </div>
//             </section>

//             <div className="min-h-screen  justify-left">
//               <RandomCard
//                 image="/image/drink.png"
//                 title="Nestle Ice Coffee"
//                 price="37"
//                 originalPrice="52"
//                 weight="500g Pouch"
//                 description="Super smooth and creamy vanilla half and half crowned with s..."
//                 discount="$15 off"
//                 validUntil="2024, Sept 19"
//                 promoter="Lingo Pvt. Ltd."
//               />
//               <RandomCard
//                 image="/image/drink.png"
//                 title="Nestle Ice Coffee"
//                 price="37"
//                 originalPrice="52"
//                 weight="500g Pouch"
//                 description="Super smooth and creamy vanilla half and half crowned with s..."
//                 discount="$15 off"
//                 validUntil="2024, Sept 19"
//                 promoter="Lingo Pvt. Ltd."
//               />
//               <RandomCard
//                 image="/image/drink.png"
//                 title="Nestle Ice Coffee"
//                 price="37"
//                 originalPrice="52"
//                 weight="500g Pouch"
//                 description="Super smooth and creamy vanilla half and half crowned with s..."
//                 discount="$15 off"
//                 validUntil="2024, Sept 19"
//                 promoter="Lingo Pvt. Ltd."
//               />
//               <RandomCard
//                 image="/image/drink.png"
//                 title="Nestle Ice Coffee"
//                 price="37"
//                 originalPrice="52"
//                 weight="500g Pouch"
//                 description="Super smooth and creamy vanilla half and half crowned with s..."
//                 discount="$15 off"
//                 validUntil="2024, Sept 19"
//                 promoter="Lingo Pvt. Ltd."
//               />{" "}
//               <RandomCard
//                 image="/image/drink.png"
//                 title="Nestle Ice Coffee"
//                 price="37"
//                 originalPrice="52"
//                 weight="500g Pouch"
//                 description="Super smooth and creamy vanilla half and half crowned with s..."
//                 discount="$15 off"
//                 validUntil="2024, Sept 19"
//                 promoter="Lingo Pvt. Ltd."
//               />
//               <RandomCard
//                 image="/image/drink.png"
//                 title="Nestle Ice Coffee"
//                 price="37"
//                 originalPrice="52"
//                 weight="500g Pouch"
//                 description="Super smooth and creamy vanilla half and half crowned with s..."
//                 discount="$15 off"
//                 validUntil="2024, Sept 19"
//                 promoter="Lingo Pvt. Ltd."
//               />
//               <RandomCard
//                 image="/image/drink.png"
//                 title="Nestle Ice Coffee"
//                 price="37"
//                 originalPrice="52"
//                 weight="500g Pouch"
//                 description="Super smooth and creamy vanilla half and half crowned with s..."
//                 discount="$15 off"
//                 validUntil="2024, Sept 19"
//                 promoter="Lingo Pvt. Ltd."
//               />
//             </div>
//           </div>
//         </main>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default MySku;
import React from "react";
import {NavLink, Route, Routes, Navigate} from "react-router-dom";

import LeftSidebar from "./LeftSidebar";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";


import AllSku from "./SKU/AllSku";
import LinkedSku from "./SKU/LinkedSku";
import FloatingSku from "./SKU/FloatingSku";
import WishlistSku from "./SKU/WislhlistSku";
import  { useState } from "react";

import { FaSearch } from "react-icons/fa";
import UnlinkedSku from "./SKU/UnlinkedSku";

const MySku = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Navbar2 />
      <div className="flex flex-col md:flex-row min-h-screen p-6">
        <LeftSidebar />
        <main className="flex-1 p-6 md:p-10">
     
          <div className="flex flex-col md:flex-row items-center justify-between mb-4 md:mb-8">
            <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-0">My SKUs</h1>

            {/* Responsive Search Input */}
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full sm:w-auto p-2  rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
          {/*  Second Navbar */}
          <div>
            <div className="flex flex-wrap items-start space-x-4 border border-gray-300 rounded-xl mb-4">
              <NavLink
                to="all-sku"
                className={({isActive}) =>
                  `p-4 rounded-md text-center flex-shrink-0 w-full sm:w-auto ${
                    isActive ? "font-bold" : "font-medium"
                  }`
                }
              >
                <p className="text-medium font-roboto">All SKU</p>
              </NavLink>
              <NavLink
                to="linked-sku"
                className={({isActive}) =>
                  `p-4 rounded-md text-center flex-shrink-0 w-full sm:w-auto ${
                    isActive ? "font-bold" : "font-medium"
                  }`
                }
              >
                <p className="text-medium font-roboto">Linked SKU</p>
              </NavLink>
              <NavLink
                to="floating-sku"
                className={({isActive}) =>
                  `p-4 rounded-md text-center flex-shrink-0 w-full sm:w-auto ${
                    isActive ? "font-bold" : "font-medium"
                  }`
                }
              >
                <p className="text-medium font-roboto">Floating SKU</p>
              </NavLink>
              <NavLink
                to="sku-wishlist"
                className={({isActive}) =>
                  `p-4 rounded-md text-center flex-shrink-0 w-full sm:w-auto ${
                    isActive ? "font-bold" : "font-medium"
                  }`
                }
              >
                <p className="text-medium font-roboto">SKUs Wishlist</p>
              </NavLink>
              <NavLink
                to="unlinked-sku"
                className={({isActive}) =>
                  `p-4 rounded-md text-center flex-shrink-0 w-full sm:w-auto ${
                    isActive ? "font-bold" : "font-medium"
                  }`
                }
              >
                <p className="text-medium font-roboto">Unlinked SKUs</p>
              </NavLink>
            </div>
            

            <Routes>
              <Route path="/" element={<Navigate to="all-sku" />} />
              <Route path="all-sku" element={<AllSku />} />
              <Route path="linked-sku" element={<LinkedSku />} />
              <Route path="floating-sku" element={<FloatingSku />} />
              <Route path="sku-wishlist" element={<WishlistSku />} />
              <Route path="unlinked-sku" element={<UnlinkedSku />} />
            </Routes>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default MySku;
