import { GoBookmark } from "react-icons/go";
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useData } from "../ContextApi/DataContext";
import { useRef } from "react"; 

const ProductCard = ({
  imageUrl,
  productName,
  price,
  originalPrice,
  size,
  description,
  discount,

  promotionValidity,
  promotedBy,
  othersCount,
  linkSku,
  // borderColor = "#f97316",
}) => {
  return (
    <div
      className="border border-[#FED3D2] rounded-lg shadow-md  p-4 flex items-start space-x-4 w-full max-w-lg font-roboto "
      // style={{ border: `0.5px solid ${borderColor}` }}
    >
      {/* Left Section - Product Image and Discount Label */}
      <div className="w-1/5 flex flex-col items-center ">
        <img
          src={imageUrl}
          alt={productName}
          className="w-16 h-16 rounded-full object-cover"
        />
        {/* Discount Label below image */}
        <div className="bg-[#B42700] text-[#FFFFFF] font-semibold px-2 py-1 rounded-sm w-fit mt-2">
          {discount}
        </div>
      </div>

      {/* Right Section - Product Details */}
      <div className="flex flex-row flex-grow w-4/5 gap-12">
        {/* Product Name and Second Row */}
        <div className="flex flex-col flex-grow">
          <h3 className="text-[1rem] font-extrabold leading-[1.2rem] text-black">
            {productName}
          </h3>

          {/* Second Row: Price, Original Price, Size, and Description */}
          <div className="flex flex-col mt-2 ">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold text-[#0A6C91]">
                ${price}
              </span>
              <span className="text-sm text-gray-500 line-through">
                ${originalPrice}
              </span>
            </div>
            <div className="text-sm text-[#646464]">{size}</div>
            {/* <p className="text-sm text-gray-500">{description}</p> */}
            <p className="text-sm text-[#949494] mt-1">
              {description.length > 100
                ? description.slice(0, 100) + "..."
                : description}
              {description.length > 100 && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-blue-500 ml-2"
                >
                  {isExpanded ? "Show Less" : "Read More"}
                </button>
              )}
            </p>
          </div>
        </div>

        {/* Third Row: Column with Two Rows */}
        <div className=" flex flex-col space-y-4 ">
          <div className="text-sm text-gray-600">
            <span className="font-medium text-sm inline-block">
              Active Promotion:
            </span>
            <span className="inline-block  font-bold  text-[#B42700]">
              {promotionValidity}
            </span>
          </div>

          <div className="text-sm text-gray-400">
            <span className="text-sm text-gray-500 font-meduium font-roboto my-2">
              Promoted By: <br />
            </span>
            <span className="text-[13.34px] text-black font-semibold leading-[16.8px] tracking-[-0.1px]">
              {promotedBy}
            </span>

            <br />
            {othersCount && <span> +{othersCount} others</span>}
            <div className="flex justify-between items-center mt-4">
              {/* <button className="bg-[#0D90C1] text-white px-4 py-2 rounded-lg font-roboto min-w-[100px] flex-shrink-0">
                Link SKU
              </button> */}
              <Link to="/home-product-card">
                <button className="bg-[#0D90C1] text-white px-4 py-2 rounded-lg font-roboto min-w-[100px] flex-shrink-0">
                  Link SKU
                </button>
              </Link>

              <button className="text-gray-400 mt-2 sm:mt-0 flex items-center">
                <GoBookmark className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const ProductSlider = ({ products = [] }) => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2.5, // Show 2.5 slides
//     slidesToScroll: 1,
//     centerMode: true, // Centers the active slide
//     centerPadding: "0", // Remove padding around the center slide
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2.5,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           centerMode: false, // Disable center mode on smaller screens
//         },
//       },
//     ],
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-6 overflow-hidden">
//       <Slider {...settings}>
//         {products.map((product, index) => (
//           <div key={index} className="px-2">
//             <ProductCard
//               imageUrl={product.imageUrl}
//               productName={product.productName}
//               price={product.price}
//               originalPrice={product.originalPrice}
//               size={product.size}
//               description={product.description}
//               discount={product.discount}
//               promotionValidity={product.promotionValidity}
//               promotedBy={product.promotedBy}
//               othersCount={product.othersCount}
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// const products = [
//   {
//     imageUrl: "/image/drink.png",
//     productName: "Nestle Ice Coffee",
//     price: "12",
//     originalPrice: "15",
//     size: "500g Pouch",
//     description: "Refreshing drink, perfect for any occasion...",
//     discount: "$3 off",
//     promotionValidity: "Valid Until 2024, Oct 5",
//     promotedBy: "Lingo Pvt Ltd",
//     othersCount: 2,

//   },
//   {
//     imageUrl: "/image/drink.png",
//     productName: "Nestle Ice Coffee",
//     price: "12",
//     originalPrice: "15",
//     size: "500g Pouch",
//     description: "Refreshing drink, perfect for any occasion...",
//     discount: "$3 off",
//     promotionInfo: "Active Promotion",
//     promotionValidity: "Valid Until 2024, Oct 5",
//     promotedBy: "Lingo Pvt Ltd",
//     othersCount: 2,

//   },
//   {
//     imageUrl: "/image/drink.png",
//     productName: "Nestle Ice Coffee",
//     price: "12",
//     originalPrice: "15",
//     size: "500g Pouch",
//     description: "Refreshing drink, perfect for any occasion...",
//     discount: "$3 off",
//     promotionValidity: "Valid Until 2024, Oct 5",
//     promotedBy: "Lingo Pvt Ltd",
//     othersCount: 2,

//   },
//   {
//     imageUrl: "/image/drink.png",
//     productName: "Nestle Ice Coffee",
//     price: "12",
//     originalPrice: "15",
//     size: "500g Pouch",
//     description: "Refreshing drink, perfect for any occasion...",
//     discount: "$3 off",
//     promotionValidity: "Valid Until 2024, Oct 5",
//     promotedBy: "Lingo Pvt Ltd",
//     othersCount: 2,

//   },
//   {
//     imageUrl: "/image/drink.png",
//     productName: "Nestle Ice Coffee",
//     price: "12",
//     originalPrice: "15",
//     size: "500g Pouch",
//     description: "Refreshing drink, perfect for any occasion...",
//     discount: "$3 off",
//     promotionValidity: "Valid Until 2024, Oct 5",
//     promotedBy: "Lingo Pvt Ltd",
//     othersCount: 2,

//   },
//   {
//     imageUrl: "/image/drink.png",
//     productName: "Nestle Ice Coffee",
//     price: "12",
//     originalPrice: "15",
//     size: "500g Pouch",
//     description: "Refreshing drink, perfect for any occasion...",
//     discount: "$13 off",
//     promotionValidity: "Valid Until 2024, Oct 5",
//     promotedBy: "Lingo Pvt Ltd",
//     othersCount: 2,

//   },
// ];



const ProductSlider = ({ products = [] }) => {
  const sliderRef = useRef(null); // Create a reference to the slider

  const settings = {
    dots: false,
    infinite: true, // Allow infinite scrolling
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Speed of autoplay in milliseconds
    centerMode: false, // Disable center mode
    centerPadding: "0", // Remove padding around the center slide
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  const handleCardClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause(); // Pause the slider when clicked

      // Automatically resume the slider after 5 seconds
      setTimeout(() => {
        sliderRef.current.slickPlay(); // Resume the slider after the timeout
      }, 5000); // 5 seconds pause
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6  overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {products.map((product, index) => (
          <div key={index} className="px-2" onClick={handleCardClick}>
            <ProductCard
              imageUrl={product.imageUrl}
              productName={product.productName}
              price={product.price}
              originalPrice={product.originalPrice}
              size={product.size}
              description={product.description}
              discount={product.discount}
              promotionValidity={product.promotionValidity}
              promotedBy={product.promotedBy}
              othersCount={product.othersCount}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const Recomendation = () => {
  const { product } = useData();
  return (
    <div className=" mx-auto py-10">
      <ProductSlider products={product} />
    </div>
  );
};

export default Recomendation;
