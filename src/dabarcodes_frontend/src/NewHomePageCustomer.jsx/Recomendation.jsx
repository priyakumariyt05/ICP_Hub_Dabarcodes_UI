// import React from "react";
// import Slider from "react-slick";
// import { BsBookmark } from "react-icons/bs";

// const ProductCard = ({
//   image,
//   title,
//   price,
//   originalPrice,
//   weight,
//   description,
//   discount,
//   validUntil,
//   promoter,
//   borderColor = "border-gray-300",
// }) => {
//   return (
//     <div
//       className={`border ${borderColor} rounded-lg p-4 flex flex-col md:flex-row md:items-start max-w-2xl mx-auto font-roboto`}
//       style={{ maxHeight: "500px" }}
//     >
//       <div className="flex flex-col md:flex-row w-full">
//         <div className="flex-shrink-0 mb-4 md:mb-0 md:w-1/6 flex flex-col items-center md:items-start justify-center whitespace-nowrap">
//           <img
//             src={image}
//             alt="Product"
//             className="w-16 h-16 rounded-full mb-2"
//           />
//           <button className="text-white bg-[#B42700] font-medium text-center p-1 py-0 font-roboto">
//             {discount}
//           </button>
//         </div>

//         <div className="flex-grow md:w-3/6 pl-4 flex flex-col justify-center items-center md:items-start text-center md:text-left whitespace-nowrap">
//           <h2 className="text-lg font-semibold text-[#000000] mb-2 font-roboto">
//             {title}
//           </h2>
//           <div className="flex items-center justify-center md:justify-start mb-2">
//             <span className="text-xl font-bold font-roboto">${price}</span>
//             <span className="text-gray-400 line-through ml-2">
//               ${originalPrice}
//             </span>
//           </div>
//           <p className="text-sm text-gray-500 mb-2 font-roboto">{weight}</p>
//           <p className="text-sm text-gray-500 font-roboto">{description}</p>
//         </div>

//         <div className="md:w-2/6 pl-6 text-left flex flex-col justify-center items-center md:items-start whitespace-nowrap">
//           <p className="text-sm text-red-600 font-bold mb-2 font-roboto">
//             Valid Until {validUntil}
//           </p>
//           <p className="text-sm text-gray-600 mb-2 font-roboto">Promoted by:</p>
//           <p className="text-sm font-bold mb-2 font-roboto">{promoter}</p>
//           <p className="text-sm text-gray-500 mb-4 font-roboto">+3 others</p>

//           <div className="flex flex-col md:flex-row justify-center md:justify-start">
//             <button className="bg-[#0D90C1] text-white px-3 py-1 rounded-lg mb-2 md:mb-0 md:mr-4">
//               Link SKU
//             </button>
//             <button className="text-black p-2">
//               <BsBookmark className="h-4 w-4" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ProductSlider = ({ products }) => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2, // Show 2 full cards and part of the third card
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1, // Show 1 card on medium screens
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1, // Show 1 card on small screens
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <Slider {...settings} className="relative">
//       {products.map((product, index) => (
//         <div key={index} className="px-2">
//           <ProductCard
//             {...product}
//             borderColor={product.borderColor} // Pass border color from product data
//           />
//         </div>
//       ))}
//     </Slider>
//   );
// };

// const Recomendation = () => {
//   const products = [
//     {
//       image: "/image/drink.png",
//       title: "Product 1",
//       price: "25",
//       originalPrice: "35",
//       weight: "500g",
//       description: "Description for Product 1",
//       discount: "$5 off",
//       validUntil: "2024-09-30",
//       promoter: "Promoter 1",
//       borderColor: "border-red-500",
//     },
//     {
//       image: "/image/drink.png",
//       title: "Product 2",
//       price: "30",
//       originalPrice: "40",
//       weight: "600g",
//       description: "Description for Product 2",
//       discount: "$10 off",
//       validUntil: "2024-10-15",
//       promoter: "Promoter 2",
//       borderColor: "border-yellow-500",
//     },
//     {
//       image: "/image/drink.png",
//       title: "Product 3",
//       price: "30",
//       originalPrice: "40",
//       weight: "600g",
//       description: "Description for Product 3",
//       discount: "$10 off",
//       validUntil: "2024-10-15",
//       promoter: "Promoter 3",
//       borderColor: "border-yellow-500",
//     },
//   ];

//   return (
//     <div className="container px-4 py-8 overflow-hidden my-8">
//       <ProductSlider products={products} />
//     </div>
//   );
// };

// export default Recomendation;
import { GoBookmark } from "react-icons/go";
import React from "react";
import Slider from "react-slick";
import { useData } from "../ContextApi/DataContext";

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
  borderColor = "#f97316",
}) => {
  return (
    <div
      className="border border-orange-200 rounded-lg shadow-lg p-4 flex items-start space-x-4 w-full max-w-lg font-roboto "
      style={{ border: `0.5px solid ${borderColor}` }}
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
          <div className="text-sm text-gray-400">
            <span className="font-medium inline-block">Active Promotion:</span>
            <span className="inline-block  font-bold  text-[#B42700]">
              {promotionValidity}
            </span>
          </div>

          <div className="text-sm text-gray-400">
            <span className="font-medium">
              Promoted By: <br />
            </span>
            <span className="text-[13.34px] text-black font-semibold leading-[16.8px] tracking-[-0.1px]">
              {promotedBy}
            </span>

            <br />
            {othersCount && <span> +{othersCount} others</span>}
            <div className="flex justify-between items-center mt-4">
              {/* <button className="bg-[#0D90C1] text-white px-3 py-1 rounded-lg mr-4">
              Link Sku
            </button> */}
              {/* <button className="bg-[#0D90C1] text-white px-4 py-2 rounded-lg font-roboto">
          Link SKU
        </button> */}
              <button className="bg-[#0D90C1] text-white px-4 py-2 rounded-lg font-roboto min-w-[100px] flex-shrink-0">
                Link SKU
              </button>

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

const ProductSlider = ({ products = [] }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5, // Show 2.5 slides
    slidesToScroll: 1,
    centerMode: true, // Centers the active slide
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
          centerMode: false, // Disable center mode on smaller screens
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 overflow-hidden">
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="px-2">
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

const Recomendation = () => {
  const { product } = useData();
  return (
    <div className=" mx-auto py-10">
      <ProductSlider products={product} />
    </div>
  );
};

export default Recomendation;
