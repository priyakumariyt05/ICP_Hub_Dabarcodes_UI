import React, { useState, useEffect } from "react";
import Navbar2 from "../../components/Navbar2";
import Footer from "../../components/Footer";

// Reusable Heading Component
const SectionHeading = ({ title }) => {
  
  return (
    <>
     
    <div className="text-center my-8">
      <h2 className="text-3xl font-bold font-roboto">{title}</h2>
    </div>
    </>
  );
};

// Reusable Grid Component
const ItemGrid = ({ items }) => {
  return (
    <>
  
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1 justify-items-center max-w-5xl w-full mx-auto">
      {items.map((item) => (
        <div key={item.id} className="flex flex-col items-center space-y-1 gap-2">
          <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center">
            <img
              src={item.logo}
              alt={item.name}
              className="w-22 h-22 object-contain"
            />
          </div>
          <p className="text-center font-roboto ">{item.name}</p>
        </div>
      ))}
    </div>
 </>
  );
};

// Main Component for Both Brands and Categories
const ExploreItems = ({ title, items }) => {
  return (
    <>
<Navbar2/>
  
    <div className="p-6 mb-10">
      {/* Reusable Heading */}
      <SectionHeading title={title} />

      {/* Reusable Grid */}
      <ItemGrid items={items} />
    </div>
    <Footer/>
    </>
  );
};

export default ExploreItems;