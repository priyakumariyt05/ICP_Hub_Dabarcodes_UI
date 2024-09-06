
import React from "react";
import Slider from "react-slick";
import { BsBookmark } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ProductCard Component
const ProductCard = ({ image, title, price, originalPrice, weight, description, discount, validUntil, promoter, borderColor = 'border-gray-300' }) => {
  return (
    <div className={`border ${borderColor} rounded-lg p-4 flex flex-col md:flex-row md:items-start max-w-2xl mx-auto`} style={{ maxHeight: '500px', overflowX: 'auto' }}>
      {/* Container for horizontal scrolling */}
      <div className="flex flex-nowrap w-full">
        {/* Left Section: Image and Discount */}
        <div className="flex-shrink-0 mb-4 md:mb-0 md:w-1/6 flex flex-col items-center md:items-start justify-center whitespace-nowrap">
          <img src={image} alt="Product" className="w-16 h-16 rounded-full mb-2" />
          <button className="text-white bg-[#B42700] font-medium text-center p-1 py-0 font-roboto">
            {discount}
          </button>
        </div>

        {/* Middle Section: Product Info */}
        <div className="flex-grow md:w-3/6 pl-4 flex flex-col justify-center items-center md:items-start text-center md:text-left whitespace-nowrap">
          <h2 className="text-lg font-semibold text-[#000000] mb-2 font-roboto">{title}</h2>
          <div className="flex items-center justify-center md:justify-start mb-2">
            <span className="text-xl font-bold font-roboto">${price}</span>
            <span className="text-gray-400 line-through ml-2">${originalPrice}</span>
          </div>
          <p className="text-sm text-gray-500 mb-2 font-roboto">{weight}</p>
          <p className="text-sm text-gray-500 font-roboto">{description}</p>
        </div>

        {/* Right Section: Promotion and Buttons */}
        <div className="md:w-2/6 pl-6 text-left flex flex-col justify-center items-center md:items-start whitespace-nowrap">
          <p className="text-sm text-red-600 font-bold mb-2 font-roboto">Valid Until {validUntil}</p>
          <p className="text-sm text-gray-600 mb-2 font-roboto">Promoted by:</p>
          <p className="text-sm font-bold mb-2 font-roboto">{promoter}</p>
          <p className="text-sm text-gray-500 mb-4 font-roboto">+3 others</p>

          <div className="flex flex-col md:flex-row justify-center md:justify-start">
            <button className="bg-[#0D90C1] text-white px-3 py-1 rounded-lg mb-2 md:mb-0 md:mr-4">
              Link SKU
            </button>
            <button className="text-black p-2">
              <BsBookmark className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ProductSlider Component
const ProductSlider = ({ products }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 full cards and part of the third card
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="relative">
      {products.map((product, index) => (
        <div key={index} className="px-2">
          <ProductCard 
            {...product}
            borderColor={product.borderColor} // Pass border color from product data
          />
        </div>
      ))}
    </Slider>
  );
};

// ProductPage Component
const Recomendation = () => {
  const products = [
    {
        image: "/image/drink.png",
      title: "Product 1",
      price: "25",
      originalPrice: "35",
      weight: "500g",
      description: "Description for Product 1",
      discount: "$5 off",
      validUntil: "2024-09-30",
      promoter: "Promoter 1",
      borderColor: "border-red-500" 
    },
    {
      image: "/image/drink.png",
      title: "Product 2",
      price: "30",
      originalPrice: "40",
      weight: "600g",
      description: "Description for Product 2",
      discount: "$10 off",
      validUntil: "2024-10-15",
      promoter: "Promoter 2",
      borderColor: "border-yellow-500" 
    },
    {
        image: "/image/drink.png",
        title: "Product 2",
        price: "30",
        originalPrice: "40",
        weight: "600g",
        description: "Description for Product 2",
        discount: "$10 off",
        validUntil: "2024-10-15",
        promoter: "Promoter 2",
        borderColor: "border-yellow-500" 
      },
    
  ];

  return (
    <div className="container px-4 py-8 overflow-hidden my-8">
      <ProductSlider products={products} />
    </div>
  );
};

export default Recomendation;

// ProductCard Component

// import React from "react";
// import Slider from "react-slick";
// import { BsBookmark } from "react-icons/bs";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const ProductCard = ({ image, title, price, originalPrice, weight, description, discount, validUntil, promoter, borderColor = 'border-gray-300' }) => {
//     return (
//       <div className={`border ${borderColor} rounded-lg p-4 flex flex-col md:flex-row md:items-start max-w-2xl mx-auto`} style={{ maxHeight: '500px', overflowX: 'auto', fontFamily: 'Roboto, sans-serif' }}>
//         {/* Container for horizontal scrolling */}
//         <div className="flex flex-nowrap w-full">
//           {/* Left Section: Image and Discount */}
//           <div className="flex-shrink-0 mb-4 md:mb-0 md:w-1/6 flex flex-col items-center md:items-start justify-center whitespace-nowrap">
//             <img src={image} alt="Product" className="w-16 h-16 rounded-full mb-2" />
//             <button className="text-white bg-[#B42700] font-medium text-center p-1 py-0">
//               {discount}
//             </button>
//           </div>
  
//           {/* Middle Section: Product Info */}
//           <div className="flex-grow md:w-3/6 pl-4 flex flex-col justify-center items-center md:items-start text-center md:text-left whitespace-nowrap">
//             <h2 className="text-lg font-bold mb-2">{title}</h2>
//             <div className="flex items-center justify-center md:justify-start mb-2">
//               <span className="text-xl font-bold">${price}</span>
//               <span className="text-gray-400 line-through ml-2">${originalPrice}</span>
//             </div>
//             <p className="text-sm text-gray-500 mb-2">{weight}</p>
//             <p className="text-sm text-gray-500">{description}</p>
//           </div>
  
//           {/* Right Section: Promotion and Buttons */}
//           <div className="md:w-2/6 pl-6 text-left flex flex-col justify-center items-center md:items-start whitespace-nowrap">
//             <p className="text-sm text-red-600 font-bold mb-2">Valid Until {validUntil}</p>
//             <p className="text-sm text-gray-600 mb-2">Promoted by:</p>
//             <p className="text-sm font-bold mb-2">{promoter}</p>
//             <p className="text-sm text-gray-500 mb-4">+3 others</p>
  
//             <div className="flex flex-col md:flex-row justify-center md:justify-start">
//               <button className="bg-[#0D90C1] text-white px-3 py-1 rounded-lg mb-2 md:mb-0 md:mr-4">
//                 Link SKU
//               </button>
//               <button className="text-blue-500 p-2">
//                 <BsBookmark className="h-4 w-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   // ProductSlider Component
//   const ProductSlider = ({ products }) => {
//     const settings = {
//       dots: false,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 2, // Show 2 full cards and part of the third card
//       slidesToScroll: 1,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//           },
//         },
//         {
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 1.3,
//             slidesToScroll: 1,
//           },
//         },
//       ],
//     };
  
//     return (
//       <Slider {...settings} className="relative">
//         {products.map((product, index) => (
//           <div key={index} className="px-8">
//             <ProductCard 
//               {...product}
//               borderColor={product.borderColor} 
//             />
//           </div>
//         ))}
//       </Slider>
//     );
//   };
  
//   // ProductPage Component
//   const Recomendation = () => {
//     const products = [
//       {
//           image: "/image/drink.png",
//         title: "Product 1",
//         price: "25",
//         originalPrice: "35",
//         weight: "500g",
//         description: "Description for Product 1",
//         discount: "$5 off",
//         validUntil: "2024-09-30",
//         promoter: "Promoter 1",
//         borderColor: "border-red-500" 
//       },
//       {
//         image: "/image/drink.png",
//         title: "Product 2",
//         price: "30",
//         originalPrice: "40",
//         weight: "600g",
//         description: "Description for Product 2",
//         discount: "$10 off",
//         validUntil: "2024-10-15",
//         promoter: "Promoter 2",
//         borderColor: "border-yellow-500" 
//       },
//       {
//           image: "/image/drink.png",
//           title: "Product 2",
//           price: "30",
//           originalPrice: "40",
//           weight: "600g",
//           description: "Description for Product 2",
//           discount: "$10 off",
//           validUntil: "2024-10-15",
//           promoter: "Promoter 2",
//           borderColor: "border-yellow-500" 
//         },
      
//     ];
  
//     return (
//       <div className="container px-4 py-8 overflow-hidden my-8">
//         <ProductSlider products={products} />
//       </div>
//     );
//   };
  
//   export default Recomendation;
  