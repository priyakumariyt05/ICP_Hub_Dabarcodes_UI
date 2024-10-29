
import React from "react";
import BackButton from "../Reusable/BackButton";

const PromotionList = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* HEADER */}
      <div className="flex justify-between ">
        <div className="flex flex-start">
          <BackButton />
          <h1 className="text-2xl font-semibold mb-4">
            Supplier Promotion Requests
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center my-4">
        <div className="flex flex-wrap gap-4">
          <button className="btn">Products</button>
          <button className="btn">Suppliers</button>
          <button className="btn">Promotions</button>
          <button className="btn">Category</button>
          <button className="btn">Brands</button>
        </div>
      </div>
      <hr className="mb-6" />
      {/* Sorting and Search */}
      <div className="flex justify-end items-center mb-4">
        <div className="flex space-x-2">
          <button className="px-4 py-2 border rounded">Sort</button>
          <input
            type="text"
            placeholder="Search"
            className="border px-3 py-2 rounded w-64"
          />
        </div>
      </div>

      {/* Request Cards */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Yesterday</h2>
        <div className="space-y-4">
          <PromotionCard
            product="Nestle Coffee"
            supplier="Nestle"
            brand="Nestle"
          />
          <PromotionCard
            product="Cake"
            supplier="Britannia"
            brand="Britannia"
          />
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Last Week</h2>
        <div className="space-y-4">
          <PromotionCard
            product="Cake"
            supplier="Britannia"
            brand="Britannia"
          />
          <PromotionCard
            product="Nestle Coffee"
            supplier="Nestle"
            brand="Nestle"
          />
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <button className="px-4 py-2 border">Previous</button>
        <span>Page 1 of 10</span>
        <button className="px-4 py-2 border">Next</button>
      </div>
    </div>
  );
};

const PromotionCard = ({product, supplier, brand}) => (
  <div className="border p-4 rounded flex justify-between items-center">
    <div>
      <h3 className="text-lg font-semibold">{product}</h3>
      <p className="text-sm">Supplier: {supplier}</p>
      <p className="text-sm">Brand: {brand}</p>
      <p className="text-sm">Promotion Period: 2024, Oct 12 - 2024, Nov 13</p>
    </div>
    <div className="space-x-2">
      <button className="px-4 py-2 bg-[#0D90C1]  text-white rounded">
        Accept
      </button>
      <button className="px-4 py-2 border rounded">Reject</button>
    </div>
  </div>
);

export default PromotionList;
// import React, {useState, useEffect} from "react";
// import BackButton from "../Reusable/BackButton";

// const PromotionList = () => {
//   // State management
//   const [promotions, setPromotions] = useState([
//     {
//       product: "Nestle Coffee",
//       supplier: "Nestle",
//       brand: "Nestle",
//       date: "Yesterday",
//     },
//     {
//       product: "Cake",
//       supplier: "Britannia",
//       brand: "Britannia",
//       date: "Yesterday",
//     },
//     {
//       product: "Cake",
//       supplier: "Britannia",
//       brand: "Britannia",
//       date: "Yesterday",
//     },
//     {
//       product: "Cake",
//       supplier: "Britannia",
//       brand: "Britannia",
//       date: "Last Week",
//     },
//     {
//       product: "Cake",
//       supplier: "Britannia",
//       brand: "Britannia",
//       date: "Last Week",
//     },
//     {
//       product: "Nestle Coffee",
//       supplier: "Nestle",
//       brand: "Nestle",
//       date: "Last Week",
//     },
//   ]);

//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOrder, setSortOrder] = useState("asc");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 2;

//   // Group promotions by date
//   const groupedPromotions = promotions.reduce((groups, promotion) => {
//     const date = promotion.date;
//     if (!groups[date]) {
//       groups[date] = [];
//     }
//     groups[date].push(promotion);
//     return groups;
//   }, {});

//   // Search filtering
//   const filteredPromotions = promotions.filter((promo) =>
//     promo.product.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Sort promotions based on product name
//   const sortedPromotions = [...filteredPromotions].sort((a, b) => {
//     if (sortOrder === "asc") {
//       return a.product.localeCompare(b.product);
//     } else {
//       return b.product.localeCompare(a.product);
//     }
//   });

//   // Pagination
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const paginatedPromotions = sortedPromotions.slice(
//     startIndex,
//     startIndex + itemsPerPage
//   );

//   // Handle page change
//   const handleNextPage = () => {
//     if (currentPage * itemsPerPage < sortedPromotions.length) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-4">
//       {/* HEADER */}
//       <div className="flex justify-between ">
//         <div className="flex flex-start">
//           <BackButton />
//           <h1 className="text-2xl font-semibold mb-4">
//             Supplier Promotion Requests
//           </h1>
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex flex-wrap justify-between items-center my-4">
//         <div className="flex flex-wrap gap-4">
//           <button className="btn">Products</button>
//           <button className="btn">Suppliers</button>
//           <button className="btn">Promotions</button>
//           <button className="btn">Category</button>
//           <button className="btn">Brands</button>
//         </div>
//       </div>

//       {/* Sorting and Search */}
//       <div className="flex justify-end items-center mb-4">
//         <div className="flex space-x-2">
//           <button
//             className="px-4 py-2 border rounded"
//             onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
//           >
//             Sort {sortOrder === "asc" ? "▲" : "▼"}
//           </button>
//           <input
//             type="text"
//             placeholder="Search"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="border px-3 py-2 rounded w-64"
//           />
//         </div>
//       </div>

//       {/* Grouped Request Cards */}
//       {Object.keys(groupedPromotions).map((date) => (
//         <div key={date} className="mt-6">
//           <h2 className="text-lg font-semibold mb-2">{date}</h2>
//           <div className="space-y-4">
//             {groupedPromotions[date].map((promo, index) => (
//               <PromotionCard
//                 key={index}
//                 product={promo.product}
//                 supplier={promo.supplier}
//                 brand={promo.brand}
//               />
//             ))}
//           </div>
//         </div>
//       ))}

//       {/* Pagination */}
//       <div className="flex justify-between items-center mt-6">
//         <button
//           className="px-4 py-2 border"
//           onClick={handlePreviousPage}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>
//         <span>Page {currentPage}</span>
//         <button
//           className="px-4 py-2 border"
//           onClick={handleNextPage}
//           disabled={currentPage * itemsPerPage >= sortedPromotions.length}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// // PromotionCard Component
// const PromotionCard = ({product, supplier, brand}) => (
//   <div className="border p-4 rounded flex justify-between items-center">
//     <div>
//       <h3 className="text-lg font-semibold">{product}</h3>
//       <p className="text-sm">Supplier: {supplier}</p>
//       <p className="text-sm">Brand: {brand}</p>
//       <p className="text-sm">Promotion Period: 2024, Oct 12 - 2024, Nov 13</p>
//     </div>
//     <div className="space-x-2">
//       <button className="px-4 py-2 bg-blue-500 text-white rounded">
//         Accept
//       </button>
//       <button className="px-4 py-2 border rounded">Reject</button>
//     </div>
//   </div>
// );

// export default PromotionList;
