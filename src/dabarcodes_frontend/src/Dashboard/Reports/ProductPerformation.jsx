// import React, {useState} from "react";
// import {useNavigate} from "react-router-dom";
// import BackButton from "../Reusable/BackButton";

// const ProductPerformance = () => {
//   const navigate = useNavigate();
//   const [selectedTab, setSelectedTab] = useState("total");
//   const [showDetail, setShowDetail] = useState(false); // State for detailed view
//   const [selectedSection, setSelectedSection] = useState("time"); // State for selected section (Time, Supplier, etc.)

//   const handleCardClick = (route) => {
//     if (route === "number-of-product-sold") {
//       setShowDetail(true); // Show detailed view when card is clicked
//     } else {
//       navigate(route); // Navigate for other cards
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       {/* Back Button and Heading */}
//       <div className="flex justify-between mb-6">
//         <div className="flex items-center">
//           <BackButton />
//           <h1 className="text-2xl font-semibold mb-4">Reports</h1>
//         </div>
//       </div>

//       {/* Subheading */}
//       <h2 className="text-lg font-medium mb-4">
//         Product Performance by Supplier and Store
//       </h2>

//       {/* Tabs */}
//       <div className="flex space-x-4 mb-4 overflow-x-auto">
//         <button
//           className={`text-sm font-medium py-2 px-4 ${
//             selectedTab === "total"
//               ? "border-b-2 border-black"
//               : "text-gray-500"
//           }`}
//           onClick={() => setSelectedTab("total")}
//         >
//           Total Products sold by supplier
//         </button>
//         <button
//           className={`text-sm font-medium py-2 px-4 ${
//             selectedTab === "top" ? "border-b-2 border-black" : "text-gray-500"
//           }`}
//           onClick={() => setSelectedTab("top")}
//         >
//           Top [num]% Products sold
//         </button>
//         <button
//           className={`text-sm font-medium py-2 px-4 ${
//             selectedTab === "bottom"
//               ? "border-b-2 border-black"
//               : "text-gray-500"
//           }`}
//           onClick={() => setSelectedTab("bottom")}
//         >
//           Bottom [num]% Products sold excl zero movement
//         </button>
//       </div>

//       {/* Card Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
//         {selectedTab === "total" && (
//           <>
//             <div
//               className="bg-blue-100 p-4 rounded shadow cursor-pointer"
//               onClick={() => handleCardClick("number-of-product-sold")}
//             >
//               Number of Product Sold
//             </div>
//             <div className="bg-blue-100 p-4 rounded shadow">Units Sold</div>
//             <div className="bg-blue-100 p-4 rounded shadow">
//               Number of Products on Promotion
//             </div>
//             <div className="bg-blue-100 p-4 rounded shadow">
//               Average Redemption per Promotion
//             </div>
//           </>
//         )}
//         {selectedTab === "top" && (
//           <>
//             <div className="bg-green-100 p-4 rounded shadow">
//               Top Products Sold
//             </div>
//             <div className="bg-green-100 p-4 rounded shadow">
//               Top Units Sold
//             </div>
//           </>
//         )}
//         {selectedTab === "bottom" && (
//           <>
//             <div className="bg-red-100 p-4 rounded shadow">
//               Bottom Products Sold
//             </div>
//             <div className="bg-red-100 p-4 rounded shadow">
//               Bottom Units Sold
//             </div>
//           </>
//         )}
//       </div>

//       {/* Detailed View for Number of Product Sold */}
//       {showDetail && (
//         <div className="mt-8 p-6 bg-white shadow rounded-lg">
//           <h3 className="text-xl font-medium mb-4">Number of Product Sold</h3>

//           {/* Section Tabs */}
//           <div className="flex space-x-4 mb-6">
//             <button
//               className={`py-2 px-4 rounded ${
//                 selectedSection === "time"
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-200 text-gray-600"
//               }`}
//               onClick={() => setSelectedSection("time")}
//             >
//               Time
//             </button>
//             <button
//               className={`py-2 px-4 rounded ${
//                 selectedSection === "supplier"
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-200 text-gray-600"
//               }`}
//               onClick={() => setSelectedSection("supplier")}
//             >
//               Supplier
//             </button>
//             <button
//               className={`py-2 px-4 rounded ${
//                 selectedSection === "performance"
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-200 text-gray-600"
//               }`}
//               onClick={() => setSelectedSection("performance")}
//             >
//               Performance
//             </button>
//             <button
//               className={`py-2 px-4 rounded ${
//                 selectedSection === "store"
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-200 text-gray-600"
//               }`}
//               onClick={() => setSelectedSection("store")}
//             >
//               Store
//             </button>
//           </div>

//           {/* Dynamic Content Based on Selected Section */}
//           {selectedSection === "time" && (
//             <div>
//               <h3 className="text-lg font-medium mb-2">Filter by Time</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <label className="block text-sm font-medium mb-1">From</label>
//                   <input
//                     type="date"
//                     className="w-full p-2 border border-gray-300 rounded"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">To</label>
//                   <input
//                     type="date"
//                     className="w-full p-2 border border-gray-300 rounded"
//                   />
//                 </div>
//               </div>
//             </div>
//           )}

//           {selectedSection === "supplier" && (
//             <div>
//               <h3 className="text-lg font-medium mb-2">Filter by Supplier</h3>
//               {/* Supplier input */}
//               <input
//                 type="text"
//                 className="w-full p-2 border border-gray-300 rounded mb-4"
//                 placeholder="Enter supplier name"
//               />
//             </div>
//           )}

//           {selectedSection === "performance" && (
//             <div>
//               <h3 className="text-lg font-medium mb-2">
//                 Filter by Performance
//               </h3>
//               {/* Performance filters */}
//               <input
//                 type="text"
//                 className="w-full p-2 border border-gray-300 rounded mb-4"
//                 placeholder="Enter performance criteria"
//               />
//             </div>
//           )}

//           {selectedSection === "store" && (
//             <div>
//               <h3 className="text-lg font-medium mb-2">Filter by Store</h3>
//               {/* Store filters */}
//               <input
//                 type="text"
//                 className="w-full p-2 border border-gray-300 rounded mb-4"
//                 placeholder="Enter store name"
//               />
//             </div>
//           )}

//           {/* Download Button */}
//           <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
//             Download Report
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductPerformance;

// import React, {useState} from "react";
// import {useNavigate} from "react-router-dom";
// import BackButton from "../Reusable/BackButton";

// import NumberOfProductSold from "./Product/NumberOfProductSold";

// const ProductPerformance = () => {
//   const navigate = useNavigate();
//   const [selectedTab, setSelectedTab] = useState("total");
//   const [showDetail, setShowDetail] = useState(false);

//   const handleCardClick = (route) => {
//     if (route === "number-of-product-sold") {
//       setShowDetail(true);
//     } else {
//       navigate(route);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       {/* Back Button and Heading */}
//       <div className="flex justify-between mb-6">
//         <div className="flex items-center">
//           <BackButton />
//           <h1 className="text-2xl font-semibold mb-4">Reports</h1>
//         </div>
//       </div>

//       {/* Subheading */}
//       <h2 className="text-lg font-medium mb-4">
//         Product Performance by Supplier and Store
//       </h2>

//       {/* Tabs */}
//       <div className="flex space-x-4 mb-4 overflow-x-auto">
//         <button
//           className={`text-sm font-medium py-2 px-4 ${
//             selectedTab === "total"
//               ? "border-b-2 border-black"
//               : "text-gray-500"
//           }`}
//           onClick={() => setSelectedTab("total")}
//         >
//           Total Products sold by supplier
//         </button>
//         <button
//           className={`text-sm font-medium py-2 px-4 ${
//             selectedTab === "top" ? "border-b-2 border-black" : "text-gray-500"
//           }`}
//           onClick={() => setSelectedTab("top")}
//         >
//           Top [num]% Products sold
//         </button>
//         <button
//           className={`text-sm font-medium py-2 px-4 ${
//             selectedTab === "bottom"
//               ? "border-b-2 border-black"
//               : "text-gray-500"
//           }`}
//           onClick={() => setSelectedTab("bottom")}
//         >
//           Bottom [num]% Products sold excl zero movement
//         </button>
//       </div>

//       {/* Card Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
//         {selectedTab === "total" && (
//           <>
//             <div
//               className="bg-blue-100 p-4 rounded shadow cursor-pointer"
//               onClick={() => handleCardClick("number-of-product-sold")}
//             >
//               Number of Product Sold
//             </div>
//             <div className="bg-blue-100 p-4 rounded shadow">Units Sold</div>
//             <div className="bg-blue-100 p-4 rounded shadow">
//               Number of Products on Promotion
//             </div>
//             <div className="bg-blue-100 p-4 rounded shadow">
//               Average Redemption per Promotion
//             </div>
//           </>
//         )}
//         {selectedTab === "top" && (
//           <>
//             <div className="bg-green-100 p-4 rounded shadow">
//               Top Products Sold
//             </div>
//             <div className="bg-green-100 p-4 rounded shadow">
//               Top Units Sold
//             </div>
//           </>
//         )}
//         {selectedTab === "bottom" && (
//           <>
//             <div className="bg-red-100 p-4 rounded shadow">
//               Bottom Products Sold
//             </div>
//             <div className="bg-red-100 p-4 rounded shadow">
//               Bottom Units Sold
//             </div>
//           </>
//         )}
//       </div>

//       {/* Detailed View for Number of Product Sold */}
//       {showDetail && <NumberOfProductSold onClose={() => setShowDetail(false)} />}
//     </div>
//   );
// };

// export default ProductPerformance;
// import React, {useState} from "react";
// import {useNavigate} from "react-router-dom";
// import BackButton from "../Reusable/BackButton";

// import NumberOfProductSoldDetails from "./Product/NumberOfProductSoldDetails";

// const ProductPerformance = () => {
//   const navigate = useNavigate();
//   const [selectedTab, setSelectedTab] = useState("total");
//   const [showDetail, setShowDetail] = useState(false);

//   const handleCardClick = (route) => {
//     if (route === "number-of-product-sold") {
//       setShowDetail(true);
//     } else {
//       navigate(route);
//     }
//   };

//   // Function to handle tab change and hide the detailed view
//   const handleTabChange = (tab) => {
//     setSelectedTab(tab);
//     setShowDetail(false); // Hide the detail view when a tab is changed
//   };

//   return (
//     <div className="min-h-screen p-6">
//       {/* Back Button and Heading */}
//       <div className="flex justify-between mb-6">
//         <div className="flex items-center">
//           <BackButton />
//           <h1 className="text-2xl font-semibold mb-4">Reports</h1>
//         </div>
//       </div>

//       {/* Subheading */}
//       <h2 className="text-lg font-medium mb-4">
//         Product Performance by Supplier and Store
//       </h2>

//       {/* Tabs */}
//       <div className="flex space-x-4 mb-4 overflow-x-auto">
//         <button
//           className={`text-sm font-medium py-2 px-4 ${
//             selectedTab === "total"
//               ? "border-b-2 border-black"
//               : "text-gray-500"
//           }`}
//           onClick={() => handleTabChange("total")}
//         >
//           Total Products sold by supplier
//         </button>
//         <button
//           className={`text-sm font-medium py-2 px-4 ${
//             selectedTab === "top" ? "border-b-2 border-black" : "text-gray-500"
//           }`}
//           onClick={() => handleTabChange("top")}
//         >
//           Top [num]% Products sold
//         </button>
//         <button
//           className={`text-sm font-medium py-2 px-4 ${
//             selectedTab === "bottom"
//               ? "border-b-2 border-black"
//               : "text-gray-500"
//           }`}
//           onClick={() => handleTabChange("bottom")}
//         >
//           Bottom [num]% Products sold excl zero movement
//         </button>
//       </div>

//       {/* Card Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
//         {selectedTab === "total" && (
//           <>
//             <div
//               className="bg-[#B5E8FB]  p-4 rounded shadow cursor-pointer"
//               onClick={() => handleCardClick("number-of-product-sold")}
//             >
//               Number of Product Sold
//             </div>
//             <div className="bg-[#B5E8FB] p-4 rounded shadow">Units Sold</div>
//             <div className="bg-[#B5E8FB] p-4 rounded shadow">
//               Number of Products on Promotion
//             </div>
//             <div className="bg-[#B5E8FB]  p-4 rounded shadow">
//               Average Redemption per Promotion
//             </div>
//           </>
//         )}
//         {selectedTab === "top" && (
//           <>
//             <div className="bg-[#B5E8FB]  p-4 rounded shadow">
//               Top Products Sold
//             </div>
//             <div className="bg-[#B5E8FB]  p-4 rounded shadow">
//               Top Units Sold
//             </div>
//           </>
//         )}
//         {selectedTab === "bottom" && (
//           <>
//             <div className="bg-[#B5E8FB]  p-4 rounded shadow">
//               Bottom Products Sold
//             </div>
//             <div className="bg-[#B5E8FB]  p-4 rounded shadow">
//               Bottom Units Sold
//             </div>
//           </>
//         )}
//       </div>

//       {/* Detailed View for Number of Product Sold */}
//       {showDetail && (
//         <NumberOfProductSoldDetails onClose={() => setShowDetail(false)} />
//       )}
//     </div>
//   );
// };

// export default ProductPerformance;
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import BackButton from "../Reusable/BackButton";
import NumberOfProductSoldDetails from "./Product/NumberOfProductSoldDetails";

const ProductPerformance = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("total");
  const [showDetail, setShowDetail] = useState(false);
  const [activeCard, setActiveCard] = useState(null); // Track the active card

  const handleCardClick = (route) => {
    if (route === "number-of-product-sold") {
      setShowDetail(true);
    } else {
      navigate(route);
    }
  };

  // Function to handle tab change and hide the detailed view
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setShowDetail(false); 
    setActiveCard(null); 
  };

  // Function to handle card click and set the active card
  const handleActiveCard = (cardName) => {
    setActiveCard(cardName);
    if (cardName === "number-of-product-sold") {
      handleCardClick("number-of-product-sold");
    }
  };

  return (
    <div className="min-h-screen p-6">
      {/* Back Button and Heading */}
      <div className="flex justify-between mb-6">
        <div className="flex items-center">
          <BackButton />
          <h1 className="text-2xl font-semibold mb-4">Reports</h1>
        </div>
      </div>

      {/* Subheading */}
      <h2 className="text-lg font-medium mb-4">
        Product Performance by Supplier and Store
      </h2>

      {/* Tabs */}
      <div className="flex space-x-4 mb-4 overflow-x-auto">
        <button
          className={`text-sm font-medium py-2 px-4 ${
            selectedTab === "total"
              ? "border-b-2 border-black"
              : "text-gray-500"
          }`}
          onClick={() => handleTabChange("total")}
        >
          Total Products sold by supplier
        </button>
        <button
          className={`text-sm font-medium py-2 px-4 ${
            selectedTab === "top" ? "border-b-2 border-black" : "text-gray-500"
          }`}
          onClick={() => handleTabChange("top")}
        >
          Top [num]% Products sold
        </button>
        <button
          className={`text-sm font-medium py-2 px-4 ${
            selectedTab === "bottom"
              ? "border-b-2 border-black"
              : "text-gray-500"
          }`}
          onClick={() => handleTabChange("bottom")}
        >
          Bottom [num]% Products sold excl zero movement
        </button>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {selectedTab === "total" && (
          <>
            <div
              className={`p-4 rounded shadow cursor-pointer ${
                activeCard === "number-of-product-sold"
                  ? "bg-[#10B4F1]"
                  : "bg-[#B5E8FB]"
              }`}
              onClick={() => handleActiveCard("number-of-product-sold")}
            >
              Number of Product Sold
            </div>
            <div
              className={`p-4 rounded shadow ${
                activeCard === "units-sold" ? "bg-[#10B4F1]" : "bg-[#B5E8FB]"
              }`}
              onClick={() => handleActiveCard("units-sold")}
            >
              Units Sold
            </div>
            <div
              className={`p-4 rounded shadow ${
                activeCard === "products-on-promotion"
                  ? "bg-[#10B4F1]"
                  : "bg-[#B5E8FB]"
              }`}
            >
              Number of Products on Promotion
            </div>
            <div
              className={`p-4 rounded shadow ${
                activeCard === "average-redemption"
                  ? "bg-[#10B4F1]"
                  : "bg-[#B5E8FB]"
              }`}
            >
              Average Redemption per Promotion
            </div>
          </>
        )}
        {selectedTab === "top" && (
          <>
            <div className="bg-[#B5E8FB] p-4 rounded shadow">
              Top Products Sold
            </div>
            <div className="bg-[#B5E8FB] p-4 rounded shadow">
              Top Units Sold
            </div>
          </>
        )}
        {selectedTab === "bottom" && (
          <>
            <div className="bg-[#B5E8FB] p-4 rounded shadow">
              Bottom Products Sold
            </div>
            <div className="bg-[#B5E8FB] p-4 rounded shadow">
              Bottom Units Sold
            </div>
          </>
        )}
      </div>

      {/* Detailed View for Number of Product Sold */}
      {showDetail && (
        <NumberOfProductSoldDetails onClose={() => setShowDetail(false)} />
      )}
    </div>
  );
};

export default ProductPerformance;
