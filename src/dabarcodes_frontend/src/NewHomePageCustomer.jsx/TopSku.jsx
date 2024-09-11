import React from "react";

import TopSkuGrid from "./TopSkuGrid";

import RetailerGrid from "./RetailerGrid";

import Recomendation from "./Recomendation";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import { useData } from "../ContextApi/DataContext";

// const Sku = [
//   {
//     id: 5,
//     image: "/image/drink.png",
//     promotionValidity: "valid untill 2024, Sept 19",
//     name: "Nestle Ice Coffee",

//     brand: "Lingo Pvt Ltd",
//     size: "527 Pouch",
//     discount: "10 off",
//     disc: "Super smooth and creamy vanilla half and half crowned with s...",
//     price: "25",
//     originalPrice: "52",
//   },
//   {
//     id: 5,
//     image: "/image/drink.png",
//     promotionValidity: "valid untill 2024, Sept 19",
//     name: "Nestle Ice Coffee",

//     brand: "Lingo Pvt Ltd",
//     size: "527 Pouch",
//     discount: "10 off",
//     disc: "Super smooth and creamy vanilla half and half crowned with s...",
//     price: "25",
//     originalPrice: "52",
//   },
//   {
//     id: 5,
//     image: "/image/drink.png",
//     promotionValidity: "valid untill 2024, Sept 19",
//     name: "Nestle Ice Coffee",

//     brand: "Lingo Pvt Ltd",
//     size: "527 Pouch",
//     discount: "10 off",
//     disc: "Super smooth and creamy vanilla half and half crowned with s...",
//     price: "25",
//     originalPrice: "52",
//   },

//   {
//     id: 5,
//     image: "/image/drink.png",
//     promotionValidity: "valid untill 2024, Sept 19",
//     name: "Nestle Ice Coffee",

//     brand: "Lingo Pvt Ltd",
//     size: "527 Pouch",
//     discount: "10 off",
//     disc: "Super smooth and creamy vanilla half and half crowned with s...",
//     price: "25",
//     originalPrice: "52",
//   },

//   {
//     id: 5,
//     image: "/image/drink.png",
//     promotionValidity: "valid untill 2024, Sept 19",
//     name: "Nestle Ice Coffee",

//     brand: "Lingo Pvt Ltd",
//     size: "527 Pouch",
//     discount: "10 off",
//     disc: "Super smooth and creamy vanilla half and half crowned with s...",
//     price: "25",
//     originalPrice: "52",
//   },
//   {
//     id: 5,
//     image: "/image/drink.png",
//     promotionValidity: "valid untill 2024, Sept 19",
//     name: "Nestle Ice Coffee",

//     brand: "Lingo Pvt Ltd",
//     size: "527 Pouch",
//     discount: "10 off",
//     disc: "Super smooth and creamy vanilla half and half crowned with s...",
//     price: "25",
//     originalPrice: "52",
//   },

//   {
//     id: 5,
//     image: "/image/drink.png",
//     promotionValidity: "valid untill 2024, Sept 19",
//     name: "Nestle Ice Coffee",

//     brand: "Lingo Pvt Ltd",
//     size: "527 Pouch",
//     discount: "10 off",
//     disc: "Super smooth and creamy vanilla half and half crowned with s...",
//     price: "25",
//     originalPrice: "52",
//   },

//   {
//     id: 5,
//     image: "/image/drink.png",
//     promotionValidity: "valid untill 2024, Sept 19",
//     name: "Nestle Ice Coffee",

//     brand: "Lingo Pvt Ltd",
//     size: "527 Pouch",
//     discount: "10 off",
//     disc: "Super smooth and creamy vanilla half and half crowned with s...",
//     price: "25",
//     originalPrice: "52",
//   },
//   {
//     id: 5,
//     image: "/image/drink.png",
//     promotionValidity: "valid untill 2024, Sept 19",
//     name: "Nestle Ice Coffee",

//     brand: "Lingo Pvt Ltd",
//     size: "527 Pouch",
//     discount: "10 off",
//     disc: "Super smooth and creamy vanilla half and half crowned with s...",
//     price: "25",
//     originalPrice: "52",
//   },

//   {
//     id: 5,
//     image: "/image/drink.png",
//     promotionValidity: "valid untill 2024, Sept 19",
//     name: "Nestle Ice Coffee",

//     brand: "Lingo Pvt Ltd",
//     size: "527 Pouch",
//     discount: "10 off",
//     disc: "Super smooth and creamy vanilla half and half crowned with s...",
//     price: "25",
//     originalPrice: "52",
//   },

//   {
//     id: 5,
//     image: "/image/drink.png",
//     promotionValidity: "valid untill 2024, Sept 19",
//     name: "Nestle Ice Coffee",

//     brand: "Lingo Pvt Ltd",
//     size: "527 Pouch",
//     discount: "10 off",
//     disc: "Super smooth and creamy vanilla half and half crowned with s...",
//     price: "25",
//     originalPrice: "52",
//   },
//   {
//     id: 5,
//     image: "/image/drink.png",
//     promotionValidity: "valid untill 2024, Sept 19",
//     name: "Nestle Ice Coffee",

//     brand: "Lingo Pvt Ltd",
//     size: "527 Pouch",
//     discount: "10 off",
//     disc: "Super smooth and creamy vanilla half and half crowned with s...",
//     price: "25",
//     originalPrice: "52",
//   },
//   {
//     id: 5,
//     image: "/image/drink.png",
//     promotionValidity: "valid untill 2024, Sept 19",
//     name: "Nestle Ice Coffee",

//     brand: "Lingo Pvt Ltd",
//     size: "527 Pouch",
//     discount: "10 off",
//     disc: "Super smooth and creamy vanilla half and half crowned with s...",
//     price: "25",
//     originalPrice: "52",
//   },
//   {
//     id: 1,
//     image: "/image/drink.png",
//     name: "Nestle Ice Coffee",
//     promoted: "Promoted by",
//     brand: "Lingo Pvt Ltd",
//     size: "527 ml",
//     discount: "$15 off",
//     disc: "Super smooth and creamy vanilla half and half crowned with s...",
//     price: "$27",
//   },
//   {
//     id: 1,
//     image: "/image/drink.png",
//     name: "Nestle Ice Coffee",
//     promoted: "Promoted by",
//     brand: "Lingo Pvt Ltd",
//     size: "527 ml",
//     discount: "$15 off",
//     disc: "Super smooth and creamy vanilla half and half crowned with s...",
//     price: "$27",
//   },
//   {
//     id: 1,
//     image: "/image/drink.png",
//     name: "Nestle Ice Coffee",
//     promoted: "Promoted by",
//     brand: "Lingo Pvt Ltd",
//     size: "527 ml",
//     discount: "$15 off",
//     disc: "Super smooth and creamy vanilla half and half crowned with s...",
//     price: "$27",
//   },
// ];

// const handleViewAllClick = () => {
//   // Logic for when the "View All" button is clicked
// };
const TopSku = () => {
  const { topSku } = useData();
  return (
    <>
      <Navbar2 />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 font-roboto lg:m-10 sm:m-0">
          Top SKUs
        </h1>
        <TopSkuGrid products={topSku} />
      </div>
      {/* Secton 2 */}

      <Recomendation />
      <Recomendation />
      <RetailerGrid />

      <Footer />
    </>
  );
};

export default TopSku;
