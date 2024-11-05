
import React from "react";
import RetailerCard from "./RetailerCard";
import { useData } from "../ContextApi/DataContext";

const RetailerGrid = () => {
  const { retailerList } = useData();
return (
    <div className="p-10">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8 font-roboto">
        <h1 className="text-2xl font-semibold font-butler">Retailer near me</h1>
        <button className="text-black px-4 py-2 rounded-full font-roboto">
          View All
        </button>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {retailerList.map((retailer, index) => (
          <RetailerCard
            key={index}
            storeName={retailer.storeName}
            offer={retailer.offer}
            direction={retailer.direction}
            // validTill={retailer.validTill}
            storeTiming={retailer.storeTiming}
            storeAddress={retailer.storeAddress}
            imageSrc={retailer.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default RetailerGrid;
