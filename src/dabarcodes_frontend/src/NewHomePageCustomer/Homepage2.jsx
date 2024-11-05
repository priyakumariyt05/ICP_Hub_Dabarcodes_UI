import React from "react";

import ProductSection2 from "./ProductSection2";
import Category from "./Category";
import Recomendation from "./Recomendation";
import RetailerCarousel from "./RetailerCarousel";
import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";
import { useData } from "../ContextApi/DataContext";
import BestCombo from "./BestCombo";
import LinkedSku from "./Modals/LinkedSku";
const HomePage2 = () => {
  const { wishlist, linkedSku, topSku, upComingOffer, retailerList, combo } =
    useData();

  const handleViewAllClick = () => {
    // Logic for when the "View All" button is clicked
  };

  const firstHalf = combo.slice(0, 2);
  const secondHalf = combo.slice(2, 4);
  return (
    <>
      <Navbar2 />
      <div className="flex items-center justify-center mb-10 mt-4 md:mt-4">
        <h1 className="mt-10 font-semibold text-[2rem] sm:text-[2.25rem] md:text-[2.44rem] leading-[2.5rem] sm:leading-[2.75rem] md:leading-[2.925rem] text-center text-[#171717]">
          Top SKU's Of The Week
        </h1>
      </div>
      <Recomendation />

      <div className="mx-auto p-4 ">
        <div className="p-4 space-y-8">
          <ProductSection2 title="My Wishlist" products={wishlist} />
          <ProductSection2 title="My Linked SKU" products={linkedSku} />
          <ProductSection2 title="Upcoming Offer" products={upComingOffer} />
        </div>
        <LinkedSku/>
      </div>

      <Category />
      {/* <Explore_Category/> */}
      <div className="mx-auto p-4 ">
        <div className="p-4 space-y-8">
          <ProductSection2 title="Top SKU" products={topSku} />
          <ProductSection2 title="Upcoming Offer" products={upComingOffer} />
        </div>
      </div>

      {/* combo */}
      <div className="flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2">
          <BestCombo data={firstHalf} />
        </div>
        <div className="w-full md:w-1/2">
          <BestCombo data={secondHalf} />
        </div>
      </div>

      <RetailerCarousel
        title="Recommended near me"
        retailers={retailerList}
        buttonLabel="View All"
        onViewAllClick={handleViewAllClick}
      />
      <Footer />
    </>
  );
};

export default HomePage2;
