
import React from "react";

const SkuProductDetails = () => {
  return (
<div className="max-w-6xl mx-auto my-8 overflow-hidden px-4 sm:px-6 lg:px-8">
  <div className="flex flex-col md:flex-row p-5">
    <div className="md:w-1/3 flex justify-center items-center mb-4 md:mb-0">
      <img
        src="/image/ice-creme.png"
        alt="Product"
        className="w-full h-auto object-contain"
      />
    </div>
    <div className="md:w-2/3 md:pl-5">
      <div className="flex items-center mb-2">
        <img src="/image/image 61.png" alt="Brand" className="w-8 h-8 mr-2" />
        <h2 className="text-[31px] font-extrabold leading-[37.2px] text-left text-[#171717]">Kwality Wall's Frozen Dessert</h2>
      </div>
      <p className="text-gray-600 mb-2 font-roboto leading-[19.2px]">See other flavors</p>
      <hr className="border-t-2 border-gray-200 mb-4" />
      <div className="flex flex-wrap justify-between items-center mb-4">
        <div className="flex flex-wrap space-x-2 mb-2 md:mb-0">
          <button className="px-4 py-2 bg-gray-200 rounded">Peanut Butter</button>
          <button className="px-4 py-2 bg-gray-200 rounded">Chocolate</button>
          <button className="px-4 py-2 bg-gray-200 rounded">Butterscotch</button>
        </div>
        <div className="text-blue-500 underline cursor-pointer">
          See More Flavors <span className="ml-1">→</span>
        </div>
      </div>

      <ul className="list-disc list-inside mb-4">
        <li className="font-roboto text-[16px] leading-[19.2px] text-left text-[#171717] my-2">
          <span className="font-roboto text-[16px] font-extrabold leading-[19.2px] text-[#171717] mr-4">
            Flavor
          </span> Strawberry
        </li>
        <li className="font-roboto text-[16px] leading-[19.2px] text-left text-[#171717] my-2">
          <span className="font-roboto text-[16px] font-extrabold leading-[19.2px] text-[#171717] mr-4">
            Brand
          </span> Kwality Wall's
        </li>             
        <li className="font-roboto text-[16px] leading-[19.2px] text-left text-[#171717] my-2">
          <span className="font-roboto text-[16px] font-extrabold leading-[19.2px] text-[#171717] mr-4">
            Specialty
          </span> Sweetened
        </li>
        <li className="font-roboto text-[16px] leading-[19.2px] text-left text-[#171717] my-2 flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-roboto text-[16px] font-extrabold leading-[19.2px] text-[#171717] mr-4">
              Item Weight
            </span>
            <span>0.47 kg</span>
          </div>
          <a href="#" className="text-blue-500 underline cursor-pointer flex items-center ml-4 whitespace-nowrap">
            See More Details <span className="ml-1">→</span>
          </a>
        </li>
      </ul>
      <button className="bg-blue-500 text-white py-2 px-4 rounded mt-10">Link SKU</button>
    </div>
  </div>

  <SkuProductDetails />
  
  <div className="p-5 border border-gray-300 rounded-lg mt-10">
    <h3 className="text-xl font-extrabold text-custom-black leading-[24px] text-left font-butler mb-2">
      SKU Details
    </h3>
    <ul className="list-disc list-inside text-custom-dark space-y-4 ml-8 font-roboto">
      <li className="text-base font-normal leading-[19.2px] text-left">
        Save $5 on your next purchase: Enjoy $5 off when you spend $50 or more.
      </li>
      <li className="text-base font-normal leading-[19.2px] text-left">
        20% off select items: Get 20% off on a wide range of selected items.
      </li>
      <li className="text-base font-normal leading-[19.2px] text-left">
        Buy One Get One Free: Purchase one item and get another one of the same kind for free. Applicable to selected products only.
      </li>
      <li className="text-base font-normal leading-[19.2px] text-left">
        Free shipping on orders over $75: Enjoy free standard shipping on all orders over $75.
      </li>
    </ul>
  </div>
</div>

  );
};

export default SkuProductDetails;
