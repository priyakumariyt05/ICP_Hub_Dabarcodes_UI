// const HomePage2 = () => {
//     const [wishlist, setWishlist] = useState(wishlistData);
//     const [linkedSku, setLinkedSku] = useState(linkedSkuData);

//     return (
//         <>
//         <Navbar2/>
// {/* Section 1 */}

// <div className="flex items-center justify-center mb-10 mt-4 md:mt-4">
// <h1 className=" mt-10 font-roboto text-[32px] sm:text-[36px] md:text-[39px] font-[20px]leading-[40px] sm:leading-[44px] md:leading-[46.8px] text-center text-[#171717]">
//   Top SKUs Of The Week
// </h1>

//         </div>
// <Recomendation/>

//       <div className=" mx-auto p-4">
//         <div className="p-4 space-y-8">
//           <ProductSection2
//             title="My Wishlist"
//             products={wishlist}
//           />
//           <ProductSection2
//             title="Top SKU"
//             products={linkedSku}
//           />
//           <ProductSection2
//             title="Upcoming Offer"
//             products={UpcomingOffer}
//           />

//            <div className="grid grid-cols-2 md:grid-cols-2 gap-4  ">
//             <div className="col-span-1">
//               <ProductSection2
//                 title="Best Combo Offer"
//                 products={BestCombo}
//               />
//             </div>
//             <div className="col-span-1">
//               <ProductSection2
//                 title="Best Combo Offer"
//                 products={BestCombo}
//               />
//             </div>
//           </div>  *

//         </div>

//       </div>
//      <Category/>
//      <div className="mx-auto p-4">
//         <div className="p-4 space-y-8">

//           <ProductSection2
//             title="Top SKU"
//             products={linkedSku}
//           />
//           <ProductSection2
//             title="Upcoming Offer"
//             products={UpcomingOffer}
//           />

//           {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="col-span-1">
//               <ProductSection2
//                 title="Best Combo Offer"
//                 products={BestCombo}
//               />
//             </div>
//             <div className="col-span-1">
//               <ProductSection2
//                 title="Best Combo Offer"
//                 products={BestCombo}
//               />
//             </div>
//           </div> */}
//         </div>

//       </div>
// {/* <RetailerCarousel/> */}
// <RetailerCarousel
//       title="Recommended near me"
//       retailers={retailers}
//       buttonLabel="View All"
//       onViewAllClick={handleViewAllClick}
//     />
// <Footer/>
//       </>
//     );
//   };

//   export default HomePage2;
import React, { useState } from "react";
import ProductSection2 from "./ProductSection2";

import Category from "./Category";
import Recomendation from "./Recomendation";

import RetailerCarousel from "./RetailerCarousel";
import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";
import BestCombo from "./BestCombo";

const wishlistData = [
  {
    id: 1,
    image: "/image/drink.png",
    name: "Nestle Ice Coffee",
    brand: "Lingo Pvt Ltd",
    size: "527 ml",
    discount: "$15 off",
    disc: "Super smooth and creamy vanilla half and half crowned with s...",
    price: "$27",
  },

  {
    id: 2,
    image: "/image/drink.png",
    name: "Nestle Ice Coffee",
    brand: "Lingo Pvt Ltd",
    size: "527 ml",
    discount: "$15 off",
    disc: "Super smooth and creamy vanilla half and half crowned with s...",
    price: "$27",
  },
  {
    id: 3,
    image: "/image/drink.png",
    name: "Nestle Ice Coffee",
    brand: "Lingo Pvt Ltd",
    size: "527 ml",
    discount: "$15 off",
    disc: "Super smooth and creamy vanilla half and half crowned with s...",
    price: "$27",
  },
  {
    id: 4,
    image: "/image/drink.png",
    name: "Nestle Ice Coffee",
    brand: "Lingo Pvt Ltd",
    size: "527 ml",
    discount: "$15 off",
    disc: "Super smooth and creamy vanilla half and half crowned with s...",
    price: "$27",
  },
];

const linkedSkuData = [
  {
    id: 5,
    image: "/image/drink.png",
    name: "Nestle Ice Coffee",
    brand: "Lingo Pvt Ltd",
    size: "527 ml",
    discount: "$10 off",
    disc: "Super smooth and creamy vanilla half and half crowned with s...",
    price: "$25",
  },
  {
    id: 6,
    image: "/image/drink.png",
    name: "Nestle Ice Coffee",
    brand: "Lingo Pvt Ltd",
    size: "527 ml",
    discount: "$10 off",
    disc: "Super smooth and creamy vanilla half and half crowned with s...",
    price: "$25",
  },
  {
    id: 7,
    image: "/image/drink.png",
    name: "Nestle Ice Coffee",
    brand: "Lingo Pvt Ltd",
    size: "527 ml",
    discount: "$10 off",
    disc: "Super smooth and creamy vanilla half and half crowned with s...",
    price: "$25",
  },
  {
    id: 8,
    image: "/image/drink.png",
    name: "Nestle Ice Coffee",
    brand: "Lingo Pvt Ltd",
    size: "527 ml",
    discount: "$10 off",
    disc: "Super smooth and creamy vanilla half and half crowned with s...",
    price: "$25",
  },
];
const TopSku = [
  {
    id: 5,
    image: "/image/drink.png",
    name: "Nestle Ice Coffee",
    brand: "Lingo Pvt Ltd",
    size: "527 ml",
    discount: "$10 off",
    disc: "Super smooth and creamy vanilla half and half crowned with s...",
    price: "$25",
  },
  {
    id: 6,
    image: "/image/drink.png",
    name: "Nestle Ice Coffee",
    brand: "Lingo Pvt Ltd",
    size: "527 ml",
    discount: "$10 off",
    disc: "Super smooth and creamy vanilla half and half crowned with s...",
    price: "$25",
  },
  {
    id: 7,
    image: "/image/drink.png",
    name: "Nestle Ice Coffee",
    brand: "Lingo Pvt Ltd",
    size: "527 ml",
    discount: "$10 off",
    disc: "Super smooth and creamy vanilla half and half crowned with s...",
    price: "$25",
  },
  {
    id: 8,
    image: "/image/drink.png",
    name: "Nestle Ice Coffee",
    brand: "Lingo Pvt Ltd",
    size: "527 ml",
    discount: "$10 off",
    disc: "Super smooth and creamy vanilla half and half crowned with s...",
    price: "$25",
  },
];
const UpcomingOffer = [
  {
    id: 5,
    image: "/image/drink.png",
    name: "Nestle Ice Coffee",
    brand: "Lingo Pvt Ltd",
    size: "527 ml",
    discount: "$10 off",
    disc: "Super smooth and creamy vanilla half and half crowned with s...",
    price: "$25",
  },
  {
    id: 6,
    image: "/image/drink.png",
    name: "Nestle Ice Coffee",
    brand: "Lingo Pvt Ltd",
    size: "527 ml",
    discount: "$10 off",
    disc: "Super smooth and creamy vanilla half and half crowned with s...",
    price: "$25",
  },
  {
    id: 7,
    image: "https://via.placeholder.com/150",
    name: "Nestle Ice Coffee",
    brand: "Lingo Pvt Ltd",
    size: "527 ml",
    discount: "$10 off",
    disc: "Super smooth and creamy vanilla half and half crowned with s...",
    price: "$25",
  },
  {
    id: 8,
    image: "https://via.placeholder.com/150",
    name: "Nestle Ice Coffee",
    brand: "Lingo Pvt Ltd",
    size: "527 ml",
    discount: "$10 off",
    disc: "Super smooth and creamy vanilla half and half crowned with s...",
    price: "$25",
  },
];

const retailers = [
  {
    storeName: "Retailer A",
    offer: "10% off on all products",
    validTill: "31st December 2024",
    imageSrc: "/image/promo.png",
  },
  {
    storeName: "Retailer B",
    offer: "20% off on electronics",
    validTill: "15th January 2025",
    imageSrc: "/image/promo.png",
  },
  {
    storeName: "Retailer C",
    offer: "Buy 1 Get 1 Free",
    validTill: "10th November 2024",
    imageSrc: "/image/promo.png",
  },
  // Add more retailers as needed
];

const Combo = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    name: "Nestle Ice Coffee",
    brand: "Lingo Pvt Ltd",
    size: "527 ml",
    discount: "$15 off",
    disc: "Super smooth and creamy vanilla half and half crowned with s...",
    price: "$27",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    name: "Nestle Ice Coffee",
    brand: "Lingo Pvt Ltd",
    size: "527 ml",
    discount: "$15 off",
    disc: "Super smooth and creamy vanilla half and half crowned with s...",
    price: "$27",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    name: "Nestle Ice Coffee",
    brand: "Lingo Pvt Ltd",
    size: "527 ml",
    discount: "$15 off",
    disc: "Super smooth and creamy vanilla half and half crowned with s...",
    price: "$27",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/150",
    name: "Nestle Ice Coffee",
    brand: "Lingo Pvt Ltd",
    size: "527 ml",
    discount: "$15 off",
    disc: "Super smooth and creamy vanilla half and half crowned with s...",
    price: "$27",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    name: "Nestle Ice Coffee",
    brand: "Lingo Pvt Ltd",
    size: "527 ml",
    discount: "$15 off",
    disc: "Super smooth and creamy vanilla half and half crowned with s...",
    price: "$27",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/150",
    name: "Nestle Ice Coffee",
    brand: "Lingo Pvt Ltd",
    size: "527 ml",
    discount: "$15 off",
    disc: "Super smooth and creamy vanilla half and half crowned with s...",
    price: "$27",
  },
];
const handleViewAllClick = () => {
  // Logic for when the "View All" button is clicked
};
const firstHalf = Combo.slice(0, 2);
const secondHalf = Combo.slice(2, 4);

const HomePage2 = () => {
  const [wishlist, setWishlist] = useState(wishlistData);
  const [linkedSku, setLinkedSku] = useState(linkedSkuData);
  const [upComingOffer, setUpcomingOffer] = useState(UpcomingOffer);
  const [topSku, setTopSku] = useState(TopSku);
  // const [bestCombo, setBestCombo] = useState(BestCombo);

  return (
    <>
      <Navbar2 />
      {/* Section 1 */}
      <div className="flex items-center justify-center mb-10 mt-4 md:mt-4">
        <h1 className="mt-10 font-roboto text-[2rem] sm:text-[2.25rem] md:text-[2.44rem] leading-[2.5rem] sm:leading-[2.75rem] md:leading-[2.925rem] text-center text-[#171717]">
          Top SKUs Of The Week
        </h1>
      </div>
      <Recomendation />

      <div className="mx-auto p-4 ">
        <div className="p-4 space-y-8">
          <ProductSection2 title="My Wishlist" products={wishlist} />
          <ProductSection2 title="Top SKU" products={linkedSku} />
          <ProductSection2 title="Upcoming Offer" products={upComingOffer} />
        </div>
      </div>

      <Category />
      <div className="mx-auto p-4 ">
        <div className="p-4 space-y-8">
          <ProductSection2 title="Top SKU" products={topSku} />
          <ProductSection2 title="Upcoming Offer" products={UpcomingOffer} />
        </div>
      </div>

      {/* <div className="flex gap-4">
        <div className="w-full md:w-1/2">
          <BestCombo data={firstHalf} />
        </div>
        <div className="w-full md:w-1/2">
          <BestCombo data={secondHalf} />
        </div>
      </div> */}

      <RetailerCarousel
        title="Recommended near me"
        retailers={retailers}
        buttonLabel="View All"
        onViewAllClick={handleViewAllClick}
      />
      <Footer />
    </>
  );
};

export default HomePage2;
