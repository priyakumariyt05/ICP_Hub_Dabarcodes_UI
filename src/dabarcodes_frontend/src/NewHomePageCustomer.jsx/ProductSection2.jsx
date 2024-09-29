
// import React from "react";
// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";
// import CardSection from "./CardSection";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom

// const ProductSection2 = ({ title, products, showBorder = true }) => {
//   const [sliderRef] = useKeenSlider({
//     loop: true,
//     breakpoints: {
//       "(max-width: 350px)": {
//         slides: { perView: 1, spacing: 15 },
//       },
//       "(min-width: 351px) and (max-width: 768px)": {
//         slides: { perView: 1, spacing: 15 },
//       },
//       "(min-width: 769px) and (max-width: 1023px)": {
//         slides: { perView: 2, spacing: 15 },
//       },
//       "(min-width: 1024px)": {
//         slides: { perView: 4, spacing: 15 },
//       },
//     },
//   });

//   // Limit the number of products displayed
//   const visibleProducts = products.slice(0, 4);

//   return (
//     <div className={`my-4 md:my-6 lg:my-8 p-4 md:p-5 lg:p-6 rounded-md md:rounded-lg shadow-md md:shadow-lg ${showBorder ? 'border' : ''}`}>
//       <div className="flex md:flex-row justify-between mb-4 md:mb-6">
//         <h2 className="font-bold text-xl">{title}</h2>
//         {products.length > 4 && (
//           <Link
//             to="/top-sku"  // Update this with the actual route where you want to navigate
//             className="text-black hover:underline font-roboto"
//           >
//             View All
//           </Link>
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
import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import CardSection from "./CardSection";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const ProductSection2 = ({ title, products, showBorder = true }) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(max-width: 350px)": {
        slides: { perView: 1, spacing: 15 },
      },
      "(min-width: 351px) and (max-width: 768px)": {
        slides: { perView: 1, spacing: 15 },
      },
      "(min-width: 769px) and (max-width: 1023px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 15 },
      },
    },
  });

  // State to manage loading status
  const [loading, setLoading] = useState(true);

  // Simulating data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Simulate loading completion
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  // Limit the number of products displayed
  const visibleProducts = products.slice(0, 4);

  return (
    <div className={`my-4 md:my-6 lg:my-8 p-4 md:p-5 lg:p-6 rounded-md md:rounded-lg shadow-md md:shadow-lg ${showBorder ? 'border' : ''}`}>
      <div className="flex md:flex-row justify-between mb-4 md:mb-6">
        <h2 className="font-bold text-xl">{title}</h2>
        {products.length > 4 && (
          <Link
            to="/top-sku"  // Update this with the actual route where you want to navigate
            className="text-black hover:underline font-roboto"
          >
            View All
          </Link>
        )}
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-48">
          <p className="text-lg">Loading...</p>
        </div>
      ) : (
        <div ref={sliderRef} className="keen-slider">
          {visibleProducts.map((product) => (
            <div key={product.id} className="keen-slider__slide">
              <CardSection product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductSection2;
