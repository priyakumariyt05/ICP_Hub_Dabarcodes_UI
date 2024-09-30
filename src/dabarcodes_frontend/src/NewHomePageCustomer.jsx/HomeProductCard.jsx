import React from "react";

import RetailerCarousel from "./RetailerCarousel";

import ProductSection2 from "./ProductSection2";
import Footer from "../components/Footer";
import CardDetails from "./CardDetails";
import Navbar2 from "../components/Navbar2";
import { useData } from "../ContextApi/DataContext";

const HomeProductCard = () => {
  const { wishlist, retailerList } = useData();

  const handleViewAllClick = () => {
    // Logic for when the "View All" button is clicked
  };
  return (
    <>
      <Navbar2 />
      <CardDetails />
      <RetailerCarousel
        title="Participating Retailers"
        retailers={retailerList}
        buttonLabel="View All"
        onViewAllClick={handleViewAllClick}
      />

      {/* SEction  */}

      <h1 className=" mt-10  text-[32px] sm:text-[36px] md:text-[39px] font-[20px]leading-[40px] sm:leading-[44px] md:leading-[46.8px] text-center text-[#171717]">
        You might also like
      </h1>
      <div className="p-4 space-y-8">
        <ProductSection2 products={wishlist} showBorder={false} />
      </div>
      <Footer />
    </>
  );
};

export default HomeProductCard;
