// import React, { useState, useEffect } from "react";
// import { FaFilter, FaSearch } from "react-icons/fa";
// import Sidebar from "./Sidebar";

// const fetchSkuData = async () => {
//   // Simulate API call
//   return new Promise((resolve) => {
//     setTimeout(
//       () =>
//         resolve([
//           // Replace with your dynamic data
//           {
//             sku: "Organic Quinoa Grains 500g",
//             category: "Grains & Cereals",
//             brand: "Nature's Harvest",
//             supplier: "Green Fields Organic Supplies",
//             stockStatus: "In Stock",
//             stockStatusColor: "#EAFDEE",
//             stockStatusTextColor: "text-gray-800",
//           },
//           {
//             sku: "Gluten-Free Oatmeal 100g",
//             category: "Breakfast Foods",
//             brand: "Pure Oats",
//             supplier: "Healthy Grains Co.",
//             stockStatus: "In Stock",
//             stockStatusColor: "#EAFDEE",
//             stockStatusTextColor: "text-gray-800",
//           },
//           {
//             sku: "Spicy BBQ Almonds 350g",
//             category: "Snacks & Nuts",
//             brand: "Almond Delight",
//             supplier: "NutriSource Imports",
//             stockStatus: "In Stock",
//             stockStatusColor: "#EAFDEE",
//             stockStatusTextColor: "text-gray-800",
//           },
//           {
//             sku: "Vegan Chickpea Pasta",
//             category: "Pasta & Noodles",
//             brand: "Vita Pasta",
//             supplier: "Plant-Based Foods Ltd.",
//             stockStatus: "In Stock",
//             stockStatusColor: "#EAFDEE",
//             stockStatusTextColor: "text-gray-800",
//           },
//           {
//             sku: "Dark Chocolate Chia Bars",
//             category: "Healthy Snacks",
//             brand: "Choco Bite",
//             supplier: "Cocoa Essence Distributors",
//             stockStatus: "Out of Stock",
//             stockStatusColor: "#FFEBE6",
//             stockStatusTextColor: "text-[#B42700]",
//           },
//           {
//             sku: "Honey Roasted Cashews",
//             category: "Snacks & Nuts",
//             brand: "Golden Nuts",
//             supplier: "Nutty Solutions Inc.",
//             stockStatus: "20 min left",
//             stockStatusColor: "#FFFAE4",
//             stockStatusTextColor: "text-[#716423]",
//           },
//           {
//             sku: "Multigrain Tortilla Chips",
//             category: "Chips & Crackers",
//             brand: "Crunchy Harvest",
//             supplier: "Grain Masters",
//             stockStatus: "In Stock",
//             stockStatusColor: "#EAFDEE",
//             stockStatusTextColor: "text-gray-800",
//           },
//           {
//             sku: "Cold-Pressed Green Juice",
//             category: "Beverages",
//             brand: "Green Vitality",
//             supplier: "Fresh Pressed Juices Co.",
//             stockStatus: "In Stock",
//             stockStatusColor: "#EAFDEE",
//             stockStatusTextColor: "text-gray-800",
//           },
//           {
//             sku: "Artisan Sourdough Bread Loaf",
//             category: "Bakery",
//             brand: "Golden Crust",
//             supplier: "Baker's Delight",
//             stockStatus: "In Stock",
//             stockStatusColor: "#EAFDEE",
//             stockStatusTextColor: "text-gray-800",
//           },
//           {
//             sku: "Green Juice",
//             category: "Beverages",
//             brand: "Green Vitality",
//             supplier: "Fresh Pres.",
//             stockStatus: "In Stock",
//             stockStatusColor: "#EAFDEE",
//             stockStatusTextColor: "text-gray-800",
//           },
//           {
//             sku: "Cold-Pressed",
//             category: "Beverages",
//             brand: "Green Vitality",
//             supplier: "Fresh Pressed Juices Co.",
//             stockStatus: "In Stock",
//             stockStatusColor: "#EAFDEE",
//             stockStatusTextColor: "text-gray-800",
//           },
//         ]),
//       1000
//     );
//   });
// };

// const SkuManagement = () => {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [page, setPage] = useState(1);
//   const [itemsPerPage] = useState(5);

//   useEffect(() => {
//     const loadData = async () => {
//       const result = await fetchSkuData();
//       setData(result);
//       setFilteredData(result);
//     };

//     loadData();
//   }, []);

//   useEffect(() => {
//     const filtered = data.filter(
//       (item) =>
//         item.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.supplier.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredData(filtered);
//   }, [searchTerm, data]);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handlePageChange = (newPage) => {
//     setPage(newPage);
//   };

//   const paginatedData = filteredData.slice(
//     (page - 1) * itemsPerPage,
//     page * itemsPerPage
//   );

//   return (
//     <>
//       <Sidebar />
//       <div className="flex h-screen overflow-hidden font-roboto">
//         <div className="flex-grow p-8 bg-gray-50 overflow-y-auto md:ml-64">
//           <header className="flex justify-between items-center mb-8">
//             <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
//           </header>

//           <div className="flex items-center justify-end space-x-4 mb-10">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 value={searchTerm}
//                 onChange={handleSearch}
//                 className="border border-gray-300 rounded-lg py-2 px-4 pl-10 focus:outline-none"
//               />
//               <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//             </div>
//             <button className="flex items-center space-x-2 border border-gray-300 bg-white rounded-lg py-2 px-4">
//               <FaFilter className="text-gray-500" />
//               <span className="text-gray-600">Filters</span>
//             </button>
//           </div>

//           <div className="bg-white shadow rounded-lg overflow-x-auto">
//             <table className="min-w-full table-auto">
//               <thead>
//                 <tr className="text-left bg-[#F9F9FD]">
//                   <th className="p-4">SKU Name</th>
//                   <th className="p-4">Category</th>
//                   <th className="p-4">Brand Name</th>
//                   <th className="p-4">Supplier Name</th>
//                   <th className="p-4">Stock Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {paginatedData.map((item, index) => (
//                   <tr key={index} className="border-t border-b">
//                     <td className="p-4">{item.sku}</td>
//                     <td className="p-4">{item.category}</td>
//                     <td className="p-4">{item.brand}</td>
//                     <td className="p-4">{item.supplier}</td>
//                     <td className="p-4">
//                       <span
//                         className={`inline-block rounded-lg px-3 py-1 ${item.stockStatusTextColor}`}
//                         style={{ backgroundColor: item.stockStatusColor }}
//                       >
//                         {item.stockStatus}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             <div className="flex justify-between items-center mt-4 p-4">
//               <button
//                 className="text-gray-600 border border-gray-300 px-4 py-2 rounded-[10px]"
//                 disabled={page === 1}
//                 onClick={() => handlePageChange(page - 1)}
//               >
//                 Previous
//               </button>
//               <span className="text-gray-600">
//                 Page {page} of {Math.ceil(filteredData.length / itemsPerPage)}
//               </span>
//               <button
//                 className="text-gray-600 border border-gray-300 px-4 py-2 rounded-[10px]"
//                 disabled={
//                   page === Math.ceil(filteredData.length / itemsPerPage)
//                 }
//                 onClick={() => handlePageChange(page + 1)}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SkuManagement;
