
// import React from "react";
// import { useParams } from "react-router-dom";
// import Asidebar from "../../ReusableComponents/Asidebar";
// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// const ProductDetails = () => {
//   const { id } = useParams();
//   const [sidebarOpen, setSidebarOpen] = useState(false);
 

//   // Toggle sidebar visibility
//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//     console.log("Sidebar toggled:", sidebarOpen);
//   };


//   return (
    
//     <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8 font-roboto">
//       {/* Toggle Button */}
//       <button
//         onClick={toggleSidebar}
//         className="fixed top-4 left-4 md:hidden z-50 p-2 bg-blue-600 text-white rounded-md"
//       >
//         {sidebarOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Sidebar */}
//       <Asidebar sidebarOpen={sidebarOpen} title="Become Our Supplier" />

//       {/* Main Content */}
//       <div
//         className={`bg-white w-full md:w-2/3 p-4 md:p-8 flex flex-col  transition-all duration-300 ease-in-out ${sidebarOpen ? "ml-0" : "md:ml-1/3"
//           }`}
//       >

//     {/* <div className="min-h-screen flex flex-col items-center bg-white p-6"> */}
//       <h1 className="text-2xl font-bold mb-6">Create Promotion</h1>
//       <form className="w-full max-w-lg">
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <input type="text" placeholder="Promotion SKU" className="input" />
//           <input type="text" placeholder="Product SKU" className="input" />
//           <input type="text" placeholder="Product Name" className="input" />
//           <input type="text" placeholder="Sub Brand" className="input" />
//         </div>
//         <label className="flex items-center mb-4">
//           <input type="checkbox" className="mr-2" />
//           Flat Discount
//         </label>
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <input type="number" placeholder="Price Before Promotion" className="input" />
//           <input type="number" placeholder="Price After Promotion" className="input" />
//           <input type="date" placeholder="Start Date" className="input" />
//           <input type="date" placeholder="Stop Date" className="input" />
//         </div>
//         <textarea placeholder="Promotional Description" className="textarea mb-4"></textarea>
//         <input type="text" placeholder="Targeted Retailers" className="input mb-4" />
//         <div className="flex justify-between">
//           <button className="btn-primary">Create Promotion</button>
//           <button className="text-blue-500 underline">Draft Promotion</button>
//         </div>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default ProductDetails;
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Asidebar from "../../ReusableComponents/Asidebar";
import { useState,useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const ProductDetails = () => {
    const navigate = useNavigate()
  const { id } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
 
  const [product, setProduct] = useState(null); 
  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    console.log("Sidebar toggled:", sidebarOpen);
  };

const navigateRetailerList =()=>{
    navigate("/supplier/select-retailer")
}


  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8 font-roboto">
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 md:hidden z-50 p-2 bg-blue-600 text-white rounded-md"
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <Asidebar sidebarOpen={sidebarOpen} title="Become Our Supplier" />

      {/* Main Content */}
      <div
        className={`bg-white w-full md:w-2/3 p-4 md:p-8 flex flex-col  transition-all duration-300 ease-in-out ${sidebarOpen ? "ml-0" : "md:ml-1/3"
          }`}
      >
        <h1 className="text-2xl font-bold mb-6">Create Promotion</h1>
        <form className="w-full ">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="promotionSku" className="block text-sm font-semibold mb-2">
                Promotion SKU
              </label>
              <input
                id="promotionSku"
                type="text"
                placeholder="Promotion SKU"
                className="input border border-gray-300 p-4 w-full rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="productSku" className="block text-sm font-semibold mb-2">
                Product SKU
              </label>
              <input
                id="productSku"
                type="text"
                placeholder="Product SKU"
                className="input border border-gray-300 p-4 w-full rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="productName" className="block text-sm font-semibold mb-2">
                Product Name
              </label>
              <input
                id="productName"
                type="text"
                placeholder="Product Name"
                className="input border border-gray-300 p-4 w-full rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="subBrand" className="block text-sm font-semibold mb-2">
                Sub Brand
              </label>
              <input
                id="subBrand"
                type="text"
                placeholder="Sub Brand"
                className="input border border-gray-300 p-4 w-full rounded-lg"
              />
            </div>
          </div>
          <label className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            Flat Discount
          </label>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="priceBefore" className="block text-sm font-semibold mb-2">
                Price Before Promotion
              </label>
              <input
                id="priceBefore"
                type="number"
                placeholder="Price Before Promotion"
                className="input border border-gray-300 p-4 w-full rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="priceAfter" className="block text-sm font-semibold mb-2">
                Price After Promotion
              </label>
              <input
                id="priceAfter"
                type="number"
                placeholder="Price After Promotion"
                className="input border border-gray-300 p-4 w-full rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="startDate" className="block text-sm font-semibold mb-2">
                Start Date
              </label>
              <input
                id="startDate"
                type="date"
                className="input border border-gray-300 p-4 w-full rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="stopDate" className="block text-sm font-semibold mb-2">
                Stop Date
              </label>
              <input
                id="stopDate"
                type="date"
                className="input border border-gray-300 p-4 w-full rounded-lg"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-semibold mb-2">
              Promotional Description
            </label>
            <textarea
              id="description"
              placeholder="Promotional Description"
              className="textarea w-full border border-gray-300 p-4 rounded-lg"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="retailers" className="block text-sm font-semibold mb-2">
              Targeted Retailers
            </label>
            <input
              id="retailers"
              type="text"
              placeholder="Targeted Retailers"
              className="input w-full border border-gray-300 p-4 rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-md" onClick={navigateRetailerList}>Create Promotion</button>
            <button className="text-blue-500 underline">Draft Promotion</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDetails;
