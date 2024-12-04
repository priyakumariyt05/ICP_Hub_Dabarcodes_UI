// import { GoBookmark } from "react-icons/go";
// import React from "react";
// import { Link } from "react-router-dom";
// import Slider from "react-slick";
// import { useData } from "../ContextApi/DataContext";
// import { useRef } from "react";
// import { useModal } from "../ContextApi/ModalContext";
// import { useNavigate } from "react-router-dom";

// const ProductCard = ({
//   imageUrl,
//   productName,
//   price,
//   originalPrice,
//   size,
//   description,
//   discount,

//   promotionValidity,
//   promotedBy,
//   othersCount,
//   linkSku,
//   // borderColor = "#f97316",
// }) => {
//   const navigate = useNavigate()
//   const { openLinkedSku } = useModal();
//   const navigateProductCard = () => {
//     navigate("/home-product-card")
//   }
//   return (
//     <div
//       onClick={navigateProductCard}
//       className="border border-[#FED3D2] rounded-lg shadow-md  p-4 flex items-start space-x-4 w-full max-w-lg font-roboto ">
//       {/* Left Section - Product Image and Discount Label */}
//       <div className="w-1/5 flex flex-col items-center ">
//         <img
//           src={imageUrl}
//           alt={productName}
//           className="w-16 h-16 rounded-full object-cover"
//         />
//         {/* Discount Label below image */}
//         <div className="bg-[#B42700] text-[#FFFFFF] font-semibold px-2 py-1 rounded-sm w-fit mt-2">
//           {discount}
//         </div>
//       </div>

//       {/* Right Section - Product Details */}
//       <div className="flex flex-row flex-grow w-4/5 gap-12">
//         {/* Product Name and Second Row */}
//         <div className="flex flex-col flex-grow">
//           <h3 className="text-[1rem] font-extrabold leading-[1.2rem] text-black">
//             {productName}
//           </h3>

//           {/* Second Row: Price, Original Price, Size, and Description */}
//           <div className="flex flex-col mt-2 ">
//             <div className="flex items-center space-x-2">
//               <span className="text-lg font-semibold text-[#0A6C91]">
//                 ${price}
//               </span>
//               <span className="text-sm text-gray-500 line-through">
//                 ${originalPrice}
//               </span>
//             </div>
//             <div className="text-sm text-[#646464]">{size}</div>
//             {/* <p className="text-sm text-gray-500">{description}</p> */}
//             <p className="text-sm text-[#949494] mt-1">
//               {description.length > 100
//                 ? description.slice(0, 100) + "..."
//                 : description}
//               {description.length > 100 && (
//                 <button
//                   onClick={() => setIsExpanded(!isExpanded)}
//                   className="text-blue-500 ml-2"
//                 >
//                   {isExpanded ? "Show Less" : "Read More"}
//                 </button>
//               )}
//             </p>
//           </div>
//         </div>

//         {/* Third Row: Column with Two Rows */}
//         <div className=" flex flex-col space-y-4 ">
//           <div className="text-sm text-gray-600">
//             <span className="font-medium text-sm inline-block">
//               Active Promotion:
//             </span>
//             <span className="inline-block  font-bold  text-[#B42700]">
//               {promotionValidity}
//             </span>
//           </div>

//           <div className="text-sm text-gray-400">
//             <span className="text-sm text-gray-500 font-meduium font-roboto my-2">
//               Promoted By: <br />
//             </span>
//             <span className="text-[13.34px] text-black font-semibold leading-[16.8px] tracking-[-0.1px]">
//               {promotedBy}
//             </span>

//             <br />
//             {othersCount && <span> +{othersCount} others</span>}
//             <div className="flex justify-between items-center mt-4">
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   openLinkedSku();
//                 }}
//                 className="bg-[#0D90C1] text-white px-4 py-2 rounded-lg font-roboto min-w-[100px] flex-shrink-0"
//               >
//                 Link SKU
//               </button>

//               <button className="text-gray-400 mt-2 sm:mt-0 flex items-center">
//                 <GoBookmark className="w-6 h-6" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ProductSlider = ({ products = [] }) => {
//   const sliderRef = useRef(null);
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2.5,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     centerMode: false,
//     centerPadding: "0",
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
//           centerMode: false,
//         },
//       },
//     ],
//   };

//   const handleCardClick = () => {
//     if (sliderRef.current) {
//       sliderRef.current.slickPause();

//       setTimeout(() => {
//         sliderRef.current.slickPlay();
//       }, 5000); // 5 seconds pause
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-6  overflow-hidden">
//       <Slider ref={sliderRef} {...settings}>
//         {products.map((product, index) => (
//           <div key={index} className="px-2" onClick={handleCardClick}>
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

// const Recomendation = () => {
//   const { product } = useData();
//   return (
//     <div className=" mx-auto py-10">
//       <ProductSlider products={product} />
//     </div>
//   );
// };

// export default Recomendation;
// import React, { useEffect, useState, useRef } from "react";
//  import { useModal } from "../ContextApi/ModalContext";
// import { GoBookmark } from "react-icons/go";
// import { useNavigate } from "react-router-dom";
// import Slider from "react-slick";

// const ProductCard = ({
//   imageUrl,
//   productName,
//   price,
//   originalPrice,
//   size,
//   description,
//   discount,
//   promotionValidity,
//   promotedBy,
//   othersCount,
//   linkSku,
// }) => {
//   const navigate = useNavigate();
//   const navigateProductCard = () => {
//     navigate("/home-product-card");
//   };
// const {openLinkedSku} =useModal()
//   return (
//     <div
//       onClick={navigateProductCard}
//       className="border border-[#FED3D2] rounded-lg shadow-md p-4 flex items-start space-x-4 w-full max-w-lg font-roboto"
//     >
//       <div className="w-1/5 flex flex-col items-center">
//         <img
//           src={imageUrl}
//           alt={productName}
//           className="w-16 h-16 rounded-full object-cover"
//         />
//         {discount && (
//           <div className="bg-[#B42700] text-[#FFFFFF] font-semibold px-2 py-1 rounded-sm w-fit mt-2">
//             {discount}
//           </div>
//         )}
//       </div>

//       <div className="flex flex-row flex-grow w-4/5 gap-12">
//         <div className="flex flex-col flex-grow">
//           <h3 className="text-[1rem] font-extrabold leading-[1.2rem] text-black">
//             {productName}
//           </h3>
//           <div className="flex flex-col mt-2">
//             <div className="flex items-center space-x-2">
//               <span className="text-lg font-semibold text-[#0A6C91]">
//                 ${price}
//               </span>
//               {originalPrice && (
//                 <span className="text-sm text-gray-500 line-through">
//                   ${originalPrice}
//                 </span>
//               )}
//             </div>
//             <div className="text-sm text-[#646464]">{size}</div>
//             <p className="text-sm text-[#949494] mt-1">
//               {description.length > 100
//                 ? description.slice(0, 100) + "..."
//                 : description}
//             </p>
//           </div>
//         </div>

//         <div className="flex flex-col space-y-4">
//           <div className="text-sm text-gray-600">
//             <span className="font-medium text-sm inline-block">
//               Active Promotion:
//             </span>
//             <span className="inline-block font-bold text-[#B42700]">
//               {promotionValidity || "N/A"}
//             </span>
//           </div>

//           <div className="text-sm text-gray-400">
//             <span className="text-sm text-gray-500 font-medium font-roboto my-2">
//               Promoted By: <br />
//             </span>
//             <span className="text-[13.34px] text-black font-semibold leading-[16.8px] tracking-[-0.1px]">
//               {promotedBy || "N/A"}
//             </span>
//             {othersCount && <span> +{othersCount} others</span>}
//             <div className="flex justify-between items-center mt-4">
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   openLinkedSku();
              
//                 }}
//                 className="bg-[#0D90C1] text-white px-4 py-2 rounded-lg font-roboto min-w-[100px] flex-shrink-0"
//               >
//                 Link SKU
//               </button>
//               <button className="text-gray-400 mt-2 sm:mt-0 flex items-center">
//                 <GoBookmark className="w-6 h-6" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ProductSlider = ({ products = [] }) => {
//   const sliderRef = useRef(null);
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2.5,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     centerMode: false,
//     centerPadding: "0",
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
//           centerMode: false,
//         },
//       },
//     ],
//   };

//   const handleCardClick = () => {
//     if (sliderRef.current) {
//       sliderRef.current.slickPause();

//       setTimeout(() => {
//         sliderRef.current.slickPlay();
//       }, 5000);
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-6 overflow-hidden">
//       <Slider ref={sliderRef} {...settings}>
//         {products.map((product, index) => (
//           <div key={product.id} className="px-2" onClick={handleCardClick}>
//             <ProductCard
//               imageUrl={product.image}
//               productName={product.name}
//               price={product.price}
//               originalPrice={product.promotionPrice}
//               size={product.weight}
//               description={product.description}
//               discount={
//                 product.promotionPrice
//                   ? `${(
//                       ((product.price - product.promotionPrice) / product.price) *
//                       100
//                     ).toFixed(0)}% OFF`
//                   : null
//               }
//               promotionValidity={product.promotionValidity || "N/A"}
//               promotedBy={product.supplierName}
//               othersCount={product.othersCount}
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// const Recomendation = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("/api/product/get");
//     console.log("respone",  response)
//         if (!response.ok) {
//           throw new Error("Failed to fetch products. Status: " + response.status);
//         }
    
//         const data = await response.json();
//         setProducts(data);  // Update state with the fetched products
//       } catch (error) {
//         console.error("Error fetching products:", error);
       
//       }
//     };
    
//     fetchProducts();
//   }, []);

//   return (
//     <div className="mx-auto py-10">
//       <ProductSlider products={products} />
//     </div>
//   );
// };

// export default Recomendation;
import React, { useEffect, useState, useRef } from "react";
import { useModal } from "../ContextApi/ModalContext";
import { GoBookmark } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

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
}) => {
  const navigate = useNavigate();
  const navigateProductCard = () => {
    navigate("/home-product-card");
  };
  const { openLinkedSku } = useModal();

  return (
    <div
      onClick={navigateProductCard}
      className="border border-[#FED3D2] rounded-lg shadow-md p-4 flex items-start space-x-4 w-full max-w-lg font-roboto"
    >
      <div className="w-1/5 flex flex-col items-center">
        <img
          src={imageUrl}
          alt={productName}
          className="w-16 h-16 rounded-full object-cover"
        />
        {discount && (
          <div className="bg-[#B42700] text-[#FFFFFF] font-semibold px-2 py-1 rounded-sm w-fit mt-2">
            {discount}
          </div>
        )}
      </div>

      <div className="flex flex-row flex-grow w-4/5 gap-12">
        <div className="flex flex-col flex-grow">
          <h3 className="text-[1rem] font-extrabold leading-[1.2rem] text-black">
            {productName}
          </h3>
          <div className="flex flex-col mt-2">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold text-[#0A6C91]">
                ${price}
              </span>
              {originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${originalPrice}
                </span>
              )}
            </div>
            <div className="text-sm text-[#646464]">{size}</div>
            <p className="text-sm text-[#949494] mt-1">
              {description.length > 100
                ? description.slice(0, 100) + "..."
                : description}
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="text-sm text-gray-600">
            <span className="font-medium text-sm inline-block">
              Active Promotion:
            </span>
            <span className="inline-block font-bold text-[#B42700]">
              {promotionValidity || "N/A"}
            </span>
          </div>

          <div className="text-sm text-gray-400">
            <span className="text-sm text-gray-500 font-medium font-roboto my-2">
              Promoted By: <br />
            </span>
            <span className="text-[13.34px] text-black font-semibold leading-[16.8px] tracking-[-0.1px]">
              {promotedBy || "N/A"}
            </span>
            {othersCount && <span> +{othersCount} others</span>}
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openLinkedSku();
                }}
                className="bg-[#0D90C1] text-white px-4 py-2 rounded-lg font-roboto min-w-[100px] flex-shrink-0"
              >
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
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: false,
    centerPadding: "0",
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
      sliderRef.current.slickPause();

      setTimeout(() => {
        sliderRef.current.slickPlay();
      }, 5000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {products.map((product, index) => (
          <div key={product.id} className="px-2" onClick={handleCardClick}>
            <ProductCard
              imageUrl={product.image}
              productName={product.name}
              price={product.price}
              originalPrice={product.promotionPrice}
              size={product.weight}
              description={product.description}
              discount={
                product.promotionPrice
                  ? `${(
                      ((product.price - product.promotionPrice) / product.price) *
                      100
                    ).toFixed(0)}% OFF`
                  : null
              }
              promotionValidity={product.promotionValidity || "N/A"}
              promotedBy={product.supplierName}
              othersCount={product.othersCount}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const Recomendation = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); 
        const response = await fetch("/api/product/get");
        if (!response.ok) {
          throw new Error("Failed to fetch products. Status: " + response.status);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="mx-auto py-10">
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <ProductSlider products={products} />
      )}
    </div>
  );
};

export default Recomendation;
