// // import React from 'react'
// // import CategoryCard from '../ReusableComponents/CategoryCard'
// // const Explore = () => {
// //     const categories = [
// //         { name: 'Snacks', image: '/image/drink.png' },
// //         { name: 'Snacks', image: '/image/drink.png' },
// //         { name: 'Snacks', image: '/image/drink.png' },
// //         { name: 'Snacks', image: '/image/drink.png' },
// //         { name: 'Snacks', image: '/image/drink.png' },
// //         { name: 'Snacks', image: '/image/drink.png' },
// //         { name: 'Snacks', image: '/image/drink.png' },
// //         { name: 'Snacks', image: '/image/drink.png' },
// //         { name: 'Snacks', image: '/image/drink.png' },
// //         { name: 'Snacks', image: '/image/drink.png' },
// //         { name: 'Snacks', image: '/image/drink.png' },
// //         { name: 'Snacks', image: '/image/drink.png' },
// //         { name: 'Snacks', image: '/image/drink.png' },
// //         { name: 'Snacks', image: '/image/drink.png' },
// //       ];

// //   return (
// //     <>
// // <div className="p-8">

// //     <div className="flex items-center justify-center mt-4 mb-10">
// //     <h1 className="font-[roboto] text-[32px] sm:text-[36px] md:text-[39px] font-extrabold leading-[40px] sm:leading-[44px] md:leading-[46.8px] text-center text-[#171717]">
// // Explore by Category
// // </h1>

// // {/* <h1 className="font-[Butler] text-[39px] font-extrabold leading-[46.8px] text-center text-[#171717]">Explore Promotions by Category</h1> */}
// // </div>

// //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-24 p-8">
// //       {categories.map((category, index) => (
// //         <CategoryCard key={index} category={category} />
// //       ))}
// //     </div>
// //   </div>
// //     </>
// //   )
// // }

// // export default Explore
// // import React from 'react';
// // import CategoryCard from '../ReusableComponents/CategoryCard';

// // const Explore = () => {
// //   const categories = [
// //     { name: 'Snacks', image: '/image/drink.png' },
// //     { name: 'Snacks', image: '/image/drink.png' },
// //     { name: 'Snacks', image: '/image/drink.png' },
// //     { name: 'Snacks', image: '/image/drink.png' },
// //     { name: 'Snacks', image: '/image/drink.png' },
// //     { name: 'Snacks', image: '/image/drink.png' },
// //     { name: 'Snacks', image: '/image/drink.png' },
// //     { name: 'Snacks', image: '/image/drink.png' },
// //     { name: 'Snacks', image: '/image/drink.png' },
// //     { name: 'Snacks', image: '/image/drink.png' },
// //     { name: 'Snacks', image: '/image/drink.png' },
// //     { name: 'Snacks', image: '/image/drink.png' },
// //     { name: 'Snacks', image: '/image/drink.png' },
// //     { name: 'Snacks', image: '/image/drink.png' },
// //   ];

// //   return (
// //     <div className="p-8">
// //       <div className="flex items-center justify-center mt-4 mb-10">
// //         <h1 className="font-[roboto] text-[32px] sm:text-[36px] md:text-[39px] font-extrabold leading-[40px] sm:leading-[44px] md:leading-[46.8px] text-center text-[#171717]">
// //           Explore by Category
// //         </h1>
// //       </div>

// //       {/* Responsive Grid: 1 column on small screens, 2 on medium, 3 on large, and 6 on extra-large */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-0 py-8">
// //         {categories.map((category, index) => (
// //           <div key={index} className="flex justify-center">
// //             <CategoryCard category={category} className="w-full h-full" />
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Explore;

// import React from "react";
// import CategoryCard from "../ReusableComponents/CategoryCard";

// const Explore = () => {
//   const categories = [
//     { name: "Snacks", image: "/image/drink.png" },
//     { name: "Snacks", image: "/image/drink.png" },
//     { name: "Snacks", image: "/image/drink.png" },
//     { name: "Snacks", image: "/image/drink.png" },
//     { name: "Snacks", image: "/image/drink.png" },
//     { name: "Snacks", image: "/image/drink.png" },
//     { name: "Snacks", image: "/image/drink.png" },
//     { name: "Snacks", image: "/image/drink.png" },
//     { name: "Snacks", image: "/image/drink.png" },
//     { name: "Snacks", image: "/image/drink.png" },
//     { name: "Snacks", image: "/image/drink.png" },
//     { name: "Snacks", image: "/image/drink.png" },
//     { name: "Snacks", image: "/image/drink.png" },
//     { name: "Snacks", image: "/image/drink.png" },
//   ];

//   return (
//     <div className="p-8 flex justify-center">
//       <div className="w-[80%]">
//         <div className="flex items-center justify-center mt-4 mb-10">
//           <h1 className="font-[roboto] text-[32px] sm:text-[36px] md:text-[39px] font-extrabold leading-[40px] sm:leading-[44px] md:leading-[46.8px] text-center text-[#171717]">
//             Explore by Category
//           </h1>
//         </div>

//         {/* Responsive Grid: 1 column on small screens, 2 on medium, 3 on large, and 7 on extra-large */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-0">
//           {categories.map((category, index) => (
//             <div key={index} className="flex justify-center">
//               <CategoryCard category={category} className="w-full h-full" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Explore;
