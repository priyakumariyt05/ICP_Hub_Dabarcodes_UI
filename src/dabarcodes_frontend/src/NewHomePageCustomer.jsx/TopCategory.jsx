import React from "react";
import { useLocation } from "react-router-dom";
import TopSkuGrid from "./TopSkuGrid";
import RetailerGrid from "./RetailerGrid";
import Recomendation from "./Recomendation";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import { useData } from "../ContextApi/DataContext";
import SortFilterSection from "./SortFilterSection";

const TopCategory = () => {
  const { topSku } = useData();
  const location = useLocation();
  const selectedCategory = location.state?.selectedCategory || "Products Name";

  const sortOptions1 = [
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "rating", label: "Rating" },
  ];

  const filterOptions1 = [
    { value: "category1", label: "Category 1" },
    { value: "category2", label: "Category 2" },
    { value: "category3", label: "Category 3" },
  ];

  return (
    <>
      <Navbar2 />
      <div className="p-6">
        <SortFilterSection
          title={` ${selectedCategory}`}
          sortOptions={sortOptions1}
          filterOptions={filterOptions1}
        />
        <TopSkuGrid products={topSku} />
      </div>
      <h1 className="text-2xl font-bold font-roboto lg:ml-10 sm:m-0">
        Recommended For You
      </h1>
      <Recomendation />
      <Recomendation />
      <RetailerGrid />
      <Footer />
    </>
  );
};

export default TopCategory;
