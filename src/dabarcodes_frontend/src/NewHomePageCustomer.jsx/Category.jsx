// import React from 'react'
// import CategoryCard from '../ReusableComponents/CategoryCard'

// const Category = () => {

//     const categories = [
//         { name: 'Snacks', image: '/image/drink.png' },
//         { name: 'Snacks', image: '/image/drink.png' },
//         { name: 'Snacks', image: '/image/drink.png' },
//         { name: 'Snacks', image: '/image/drink.png' },
//         { name: 'Snacks', image: '/image/drink.png' },
//         { name: 'Snacks', image: '/image/drink.png' },
//         { name: 'Snacks', image: '/image/drink.png' },
//         { name: 'Snacks', image: '/image/drink.png' },

//       ];
//   return (
//     <>
//        <div className="p-8">
//          <div className="flex justify-between items-center mt-10 mb-10">
//           <h1 className="text-2xl font-bold font-butler">Explore Promotions by Category</h1>
//           <button className="text-blue-500 border-b-2 border-blue-500 pb-1 hover:bg-blue-100">
//             View all
//           </button>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
//           {categories.map((category, index) => (
//             <CategoryCard key={index} category={category} />
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }

// export default Category
import React from "react";
import Slider from "react-slick";
import CategoryCard from "../ReusableComponents/CategoryCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Category = () => {
  const categories = [
    { name: "Snacks", image: "/image/drink.png" },
    { name: "Snacks", image: "/image/drink.png" },
    { name: "Snacks", image: "/image/drink.png" },
    { name: "Snacks", image: "/image/drink.png" },
    { name: "Snacks", image: "/image/drink.png" },
    { name: "Snacks", image: "/image/drink.png" },
    { name: "Snacks", image: "/image/drink.png" },
    { name: "Snacks", image: "/image/drink.png" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="p-8">
        <div className="flex justify-between items-center mt-10 mb-10">
          <h1 className="text-2xl font-bold font-butler ml-10">
            Explore Promotions by Category
          </h1>
          <button className="text-blue-500 border-b-2 border-blue-500 pb-1 hover:bg-blue-100">
            View all
          </button>
        </div>

        <Slider {...settings}>
          {categories.map((category, index) => (
            <div key={index}>
              <CategoryCard category={category} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Category;

// import React from 'react';
// import CategoryCard from '../ReusableComponents/CategoryCard';

// const Category = () => {
//   const categories = [
//     { name: 'Snacks', image: '/image/drink.png' },
//     { name: 'Snacks', image: '/image/drink.png' },
//     { name: 'Snacks', image: '/image/drink.png' },
//     { name: 'Snacks', image: '/image/drink.png' },
//     { name: 'Snacks', image: '/image/drink.png' },
//     { name: 'Snacks', image: '/image/drink.png' },
//     { name: 'Snacks', image: '/image/drink.png' },
//     { name: 'Snacks', image: '/image/drink.png' },
//   ];

//   return (
//     <div className="p-8">
//       <div className="flex justify-between items-center mt-10 mb-10">
//       <h1 className="font-roboto text-[25px] font-extrabold leading-[30px] text-center text-[#171717]">
//   Explore Promotions by Category
// </h1>

//         <button className="text-blue-500 border-b-2 border-blue-500 pb-1 hover:bg-blue-100">
//           View all
//         </button>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
//         {categories.map((category, index) => (
//           <CategoryCard key={index} category={category} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Category;
// import React from 'react';
// import Slider from 'react-slick';
// import CategoryCard from '../ReusableComponents/CategoryCard';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const Category = () => {
//   const categories = [
//     { name: 'Snacks', image: '/image/drink.png' },
//     { name: 'Snacks', image: '/image/drink.png' },
//     { name: 'Snacks', image: '/image/drink.png' },
//     { name: 'Snacks', image: '/image/drink.png' },
//     { name: 'Snacks', image: '/image/drink.png' },
//     { name: 'Snacks', image: '/image/drink.png' },
//     { name: 'Snacks', image: '/image/drink.png' },
//     { name: 'Snacks', image: '/image/drink.png' },
//   ];

//   // Slider settings
//   const settings = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3, // Default number of slides to show at once
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 6,
//           slidesToScroll: 1,
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         }
//       }
//     ]
//   };

//   return (
//     <div className="p-8">
//       <div className="flex justify-between items-center mt-10 mb-10">
//         <h1 className="font-roboto text-[25px] font-extrabold leading-[30px] text-[#171717]">
//           Explore Promotions by Category
//         </h1>
//         <button className="text-blue-500 border-b-2 border-blue-500 pb-1 hover:bg-blue-100">
//           View all
//         </button>
//       </div>

//       {/* Carousel */}
//       <div className="w-full overflow-x-hidden">
//         <Slider {...settings}>
//           {categories.map((category, index) => (
//             <CategoryCard key={index} category={category} />
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Category;
