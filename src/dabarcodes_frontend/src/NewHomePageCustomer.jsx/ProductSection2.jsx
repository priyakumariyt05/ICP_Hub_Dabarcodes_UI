// import React, { useState } from 'react';
// import { useKeenSlider } from 'keen-slider/react';
// import 'keen-slider/keen-slider.min.css';
// import CardSection from './CardSection';

// const ProductSection2 = ({ title, products,viewAllHandler }) => {
//   const [showAll, setShowAll] = useState(false);

//   // Configure Keen Slider
//   const [sliderRef] = useKeenSlider({
//     slides: {
//       perView: 4,
//       spacing: 15,
//       breakpoints: {
//         '(max-width: 768px)': {
//           perView: 2,
//         },
//         '(max-width: 480px)': {
//           perView: 1,
//         },
//       },
//     },
//     loop: true,
//   });

//   // Determine which products to display
//   const visibleProducts = showAll ? products : products.slice(0, 4);

//   console.log('Products length:', products.length);

//   return (
//     <div className="my-8 border p-6 rounded-lg shadow-lg">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="font-bold text-xl">{title}</h2>
//         <button onClick={viewAllHandler} className="text-blue-500">View all</button>
//         {products.length > 4 && (
//           <button
//             className="text-blue-500 hover:underline"
//             onClick={() => setShowAll(!showAll)}
//           >
//             {showAll ? 'View Less' : 'View All'}
//           </button>
//         )}
//       </div>
//       <div ref={sliderRef} className="keen-slider">
//         {visibleProducts.map((product) => (
//           <div key={product.id} className="keen-slider__slide">
//             <CardSection product={product} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductSection2;
// import React, { useState } from 'react';
// import { useKeenSlider } from 'keen-slider/react';
// import 'keen-slider/keen-slider.min.css';
// import CardSection from './CardSection';

// const ProductSection2 = ({ title, products, viewAllHandler }) => {
//   const [showAll, setShowAll] = useState(false);

//   // Configure Keen Slider
//   const [sliderRef] = useKeenSlider({
//     slides: {
//       perView: 4,
//       spacing: 15,
//       breakpoints: {
//         '(max-width: 1024px)': {  // Medium screens
//           perView: 2,
//         },
//         '(max-width: 768px)': {   // Small screens
//           perView: 1,
//         },
//       },
//     },
//     loop: true,
//   });

//   // Determine which products to display
//   const visibleProducts = showAll ? products : products.slice(0, 4);

//   return (
//     <div className="my-8 border p-6 rounded-lg shadow-lg">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="font-bold text-xl">{title}</h2>
//         <button onClick={viewAllHandler} className="text-black">View all</button>
//         {products.length > 4 && (
//           <button
//             className="text-blue-500 hover:underline"
//             onClick={() => setShowAll(!showAll)}
//           >
//             {showAll ? 'View Less' : 'View All'}
//           </button>
//         )}
//       </div>
//       <div ref={sliderRef} className="keen-slider">
//         {visibleProducts.map((product) => (
//           <div key={product.id} className="keen-slider__slide">
//             <CardSection product={product} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductSection2;
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import CardSection from "./CardSection";

const ProductSection2 = ({ title, products, viewAllHandler, showBorder = true }) => {
  const [showAll, setShowAll] = useState(false);


  const [sliderRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(max-width: 350px)": {
        slides: { perView: 1, spacing: 15 }, // Show 1 product per row on very small screens
      },
      "(min-width: 351px) and (max-width: 768px)": {
        slides: { perView: 1, spacing: 15 }, // Show 1 product per row on small screens
      },
      "(min-width: 769px) and (max-width: 1023px)": {
        slides: { perView: 2, spacing: 15 }, // Show 2 products per row on medium screens
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 15 }, // Show 4 products per row on desktop
      },
    },
  });
  // Determine which products to display
  const visibleProducts = showAll ? products : products.slice(0, 4);

  return (
    // <div className="my-8 border p-6 rounded-lg shadow-lg">
    // <div className="my-4 md:my-6 lg:my-8 border p-4 md:p-5 lg:p-6 rounded-md md:rounded-lg shadow-md md:shadow-lg">
    <div className={`my-4 md:my-6 lg:my-8 p-4 md:p-5 lg:p-6 rounded-md md:rounded-lg shadow-md md:shadow-lg ${showBorder ? 'border' : ''}`}>
      {/* <div className="flex justify-between items-center mb-4"> */}
      <div className="flex  md:flex-row justify-between  mb-4 md:mb-6">
        <h2 className="font-bold text-xl">{title}</h2>
        <div className="flex space-x-4">
          <button onClick={viewAllHandler} className="text-black">
            View all
          </button>
          {products.length > 4 && (
            <button
              className="text-blue-500 hover:underline"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "View Less" : "View All"}
            </button>
          )}
        </div>
      </div>
      <div ref={sliderRef} className="keen-slider">
        {visibleProducts.map((product) => (
          <div key={product.id} className="keen-slider__slide">
            <CardSection product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection2;
