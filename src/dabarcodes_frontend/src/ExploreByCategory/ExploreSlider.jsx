// import React from "react";
// import CategoryCard from "../ReusableComponents/CategoryCard";

// const ExploreSlider = ({ categories }) => {
//   return (
//     <div className="p-8 m-8">
//       <div className="flex justify-between items-center mt-10 mb-10">
//         <h1 className="font-butler lg:text-2xl md:text-xl sm:text-sm font-extrabold leading-30px text-center text-[#171717]">
//           Explore Promotion By Categories
//         </h1>
//         <button className="text-blue-500 border-b-2 border-blue-500 pb-1 hover:bg-blue-100">
//           View All
//         </button>
//       </div>

//       <div className="relative">
//         <div
//           className="flex overflow-x-auto gap-4 mb-20 hide-scrollbar"
//           style={{ scrollSnapType: "x mandatory" }}
//         >
//           {categories.map((category, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
//               style={{ scrollSnapAlign: "start" }}
//             >
//               <CategoryCard category={category} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExploreSlider;
import React from "react";
import Slider from "react-slick";
import CategoryCard from "../ReusableComponents/CategoryCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ExploreSlider = ({ categories }) => {
  const settings = {
    dots: false, 
    infinite: true,
    speed: 500, 
    slidesToShow: 5, 
    slidesToScroll: 1, 
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="p-8 m-8">
      <div className="flex justify-between items-center mt-10 mb-10">
        <h1 className="font-butler lg:text-2xl md:text-xl sm:text-sm font-extrabold leading-30px text-center text-[#171717]">
          Explore Promotion By Categories
        </h1>
        <button className="text-blue-500 border-b-2 border-blue-500 pb-1 hover:bg-blue-100">
          View All
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
  );
};

export default ExploreSlider;
