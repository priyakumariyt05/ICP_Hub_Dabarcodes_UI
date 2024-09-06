
// import React from 'react';

// import { FaFilter, FaSearch } from 'react-icons/fa';

// const Dashboard = () => {
//   return (
//     <div className="flex h-screen overflow-hidden">
      

//       <div className="flex-grow p-8 bg-gray-50 overflow-y-auto md:ml-64">
//         <header className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
//         </header>
        
//         <div className="flex items-center justify-end space-x-4 mb-10">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search"
//               className="border border-gray-300 rounded-lg py-2 px-4 pl-10 focus:outline-none"
//             />
//             <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//           </div>
//           <button className="flex items-center space-x-2 border border-gray-300 bg-white rounded-lg py-2 px-4">
//             <FaFilter className="text-gray-500" />
//             <span className="text-gray-600">Filters</span>
//           </button>
//         </div>

//         <div className="bg-white shadow rounded-lg overflow-x-auto">
//           <table className="min-w-full table-auto">
//             <thead>
//               <tr className="text-left bg-[#F9F9FD]">
//                 <th className="p-4">SKU Name</th>
//                 <th className="p-4">Category</th>
//                 <th className="p-4">Brand Name</th>
//                 <th className="p-4">Supplier Name</th>
//                 <th className="p-4">Stock Status</th>
//               </tr>
//             </thead>
//             <tbody>
            
//               <tr className="border-t border-b">
//                 <td className="p-4">Organic Quinoa Grains 500g</td>
//                 <td className="p-4">Grains & Cereals</td>
//                 <td className="p-4">Nature's Harvest</td>
//                 <td className="p-4">Green Fields Organic Supplies</td>
//                 <td className="p-4">
//                   <span className="inline-block text-gray-800 rounded-lg px-3 py-1" style={{ backgroundColor: '#EAFDEE' }}>
//                     In Stock
//                   </span>
//                 </td>
//               </tr>
//               <tr className="border-t border-b">
//                   <td className="p-4">Gluten-Free Oatmeal 100g</td>
//                   <td className="p-4">Breakfast Foods</td>
//                   <td className="p-4">Pure Oats</td>
//                   <td className="p-4">Healthy Grains Co.</td>
//                   <td className="p-4">
//   <span
//     className="inline-block text-gray-800 rounded-lg px-3 py-1"
//     style={{ backgroundColor: '#EAFDEE' }}
//   >
//     In Stock
//   </span>
// </td>
//                 </tr>
//                 <tr className="border-t border-b">
//                   <td className="p-4">Spicy BBQ Almonds 350g</td>
//                   <td className="p-4">Snacks & Nuts</td>
//                   <td className="p-4">Almond Delight</td>
//                   <td className="p-4">NutriSource Imports</td>
//                   <td className="p-4">
//   <span
//     className="inline-block text-gray-800 rounded-lg px-3 py-1"
//     style={{ backgroundColor: '#EAFDEE' }}
//   >
//     In Stock
//   </span>
// </td>
//                 </tr>
//                 <tr className="border-t border-b">
//                   <td className="p-4">Vegan Chickpea Pasta</td>
//                   <td className="p-4">Pasta & Noodles</td>
//                   <td className="p-4">Vita Pasta</td>
//                   <td className="p-4"> Plant-Based Foods Ltd.</td>
//                   <td className="p-4">
//   <span
//     className="inline-block text-gray-800 rounded-lg px-3 py-1"
//     style={{ backgroundColor: '#EAFDEE' }}
//   >
//     In Stock
//   </span>
// </td>
//                 </tr>
//                 <tr className="border-t border-b">
//                   <td className="p-4">Dark Chocolate Chia Bars</td>
//                   <td className="p-4">Healthy Snacks</td>
//                   <td className="p-4">Choco Bite</td>
//                   <td className="p-4">Cocoa Essence Distributors</td>
//                   <td className="p-4">
//   <span
//     className="inline-block text-[#B42700] rounded-lg px-3 py-1"
//     style={{ backgroundColor: '#FFEBE6' }}
//   >
// Out of Stock
//   </span>
// </td>
   
//                 </tr>
//                 <tr className="border-t border-b">
//                   <td className="p-4">Honey Roasted Cashews</td>
//                   <td className="p-4">Snacks & Nuts</td>
//                   <td className="p-4">Golden Nuts</td>
//                   <td className="p-4">Nutty Solutions Inc.</td>
//                   <td className="p-4">
//   <span
//     className="inline-block text-[#716423] rounded-lg px-3 py-1"
//     style={{ backgroundColor: '#FFFAE4' }}
//   >
//     20 min left
//   </span>
// </td>
//                 </tr>
//                 <tr className="border-t border-b">
//                   <td className="p-4">Multigrain Tortilla Chips</td>
//                   <td className="p-4">Chips & Crackers</td>
//                   <td className="p-4">Crunchy Harvest</td>
//                   <td className="p-4">Grain Masters</td>
//                   <td className="p-4">
//   <span
//     className="inline-block text-gray-800 rounded-lg px-3 py-1"
//     style={{ backgroundColor: '#EAFDEE' }}
//   >
//     In Stock
//   </span>
// </td>
//                 </tr>  
//                  <tr className="border-t border-b">
//                   <td className="p-4">Cold-Pressed Green Juice</td>
//                   <td className="p-4">Beverages</td>
//                   <td className="p-4">Green Vitality</td>
//                   <td className="p-4">Fresh Pressed Juices Co.</td>
//                   <td className="p-4">
//   <span
//     className="inline-block text-gray-800 rounded-lg px-3 py-1"
//     style={{ backgroundColor: '#EAFDEE' }}
//   >
//     In Stock
//   </span>
// </td>
//                 </tr>
//                 <tr className="border-t border-b">
//                   <td className="p-4">Artisan Sourdough Bread Loaf</td>
//                   <td className="p-4">Bakery</td>
//                   <td className="p-4">Golden Crust</td>
//                   <td className="p-4">Baker's Delight</td>
//                   <td className="p-4">
//   <span
//     className="inline-block text-gray-800 rounded-lg px-3 py-1"
//     style={{ backgroundColor: '#EAFDEE' }}
//   >
//     In Stock
//   </span>
// </td>
//                 </tr>
//                 <tr className="border-t border-b">
//                   <td className="p-4"> Green Juice</td>
//                   <td className="p-4">Beverages</td>
//                   <td className="p-4">Green Vitality</td>
//                   <td className="p-4">Fresh Pres.</td>
               
//                   <td className="p-4">
//   <span
//     className="inline-block text-gray-800 rounded-lg px-3 py-1"
//     style={{ backgroundColor: '#EAFDEE' }}
//   >
//     In Stock
//   </span>
// </td>

//                 </tr>
//                 <tr className="border-t border-b">
//                   <td className="p-4">Cold-Pressed</td>
//                   <td className="p-4">Beverages</td>
//                   <td className="p-4">Green Vitality</td>
//                   <td className="p-4">Fresh Pressed Juices Co.</td>
//                   <td className="p-4">
//   <span
//     className="inline-block text-gray-800 rounded-lg px-3 py-1"
//     style={{ backgroundColor: '#EAFDEE' }}
//   >
//     In Stock
//   </span>
// </td>
//                 </tr>
//             </tbody>
//           </table>

//           <div className="flex justify-between items-center mt-4 p-4">
//             <button className="text-gray-600 border border-gray-300 px-4 py-2 rounded-[10px]">Previous</button>
//             <span className="text-gray-600">Page 1 of 10</span>
//             <button className="text-gray-600 border border-gray-300 px-4 py-2 rounded-[10px]">Next</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




import React from 'react';
import { FaFilter, FaSearch } from 'react-icons/fa';

const data = [
  {
    sku: "Organic Quinoa Grains 500g",
    category: "Grains & Cereals",
    brand: "Nature's Harvest",
    supplier: "Green Fields Organic Supplies",
    stockStatus: "In Stock",
    stockStatusColor: "#EAFDEE",
    stockStatusTextColor: "text-gray-800",
  },
  {
    sku: "Gluten-Free Oatmeal 100g",
    category: "Breakfast Foods",
    brand: "Pure Oats",
    supplier: "Healthy Grains Co.",
    stockStatus: "In Stock",
    stockStatusColor: "#EAFDEE",
    stockStatusTextColor: "text-gray-800",
  },
  {
    sku: "Spicy BBQ Almonds 350g",
    category: "Snacks & Nuts",
    brand: "Almond Delight",
    supplier: "NutriSource Imports",
    stockStatus: "In Stock",
    stockStatusColor: "#EAFDEE",
    stockStatusTextColor: "text-gray-800",
  },
  {
    sku: "Vegan Chickpea Pasta",
    category: "Pasta & Noodles",
    brand: "Vita Pasta",
    supplier: "Plant-Based Foods Ltd.",
    stockStatus: "In Stock",
    stockStatusColor: "#EAFDEE",
    stockStatusTextColor: "text-gray-800",
  },
  {
    sku: "Dark Chocolate Chia Bars",
    category: "Healthy Snacks",
    brand: "Choco Bite",
    supplier: "Cocoa Essence Distributors",
    stockStatus: "Out of Stock",
    stockStatusColor: "#FFEBE6",
    stockStatusTextColor: "text-[#B42700]",
  },
  {
    sku: "Honey Roasted Cashews",
    category: "Snacks & Nuts",
    brand: "Golden Nuts",
    supplier: "Nutty Solutions Inc.",
    stockStatus: "20 min left",
    stockStatusColor: "#FFFAE4",
    stockStatusTextColor: "text-[#716423]",
  },
  {
    sku: "Multigrain Tortilla Chips",
    category: "Chips & Crackers",
    brand: "Crunchy Harvest",
    supplier: "Grain Masters",
    stockStatus: "In Stock",
    stockStatusColor: "#EAFDEE",
    stockStatusTextColor: "text-gray-800",
  },
  {
    sku: "Cold-Pressed Green Juice",
    category: "Beverages",
    brand: "Green Vitality",
    supplier: "Fresh Pressed Juices Co.",
    stockStatus: "In Stock",
    stockStatusColor: "#EAFDEE",
    stockStatusTextColor: "text-gray-800",
  },
  {
    sku: "Artisan Sourdough Bread Loaf",
    category: "Bakery",
    brand: "Golden Crust",
    supplier: "Baker's Delight",
    stockStatus: "In Stock",
    stockStatusColor: "#EAFDEE",
    stockStatusTextColor: "text-gray-800",
  },
  {
    sku: "Green Juice",
    category: "Beverages",
    brand: "Green Vitality",
    supplier: "Fresh Pres.",
    stockStatus: "In Stock",
    stockStatusColor: "#EAFDEE",
    stockStatusTextColor: "text-gray-800",
  },
  {
    sku: "Cold-Pressed",
    category: "Beverages",
    brand: "Green Vitality",
    supplier: "Fresh Pressed Juices Co.",
    stockStatus: "In Stock",
    stockStatusColor: "#EAFDEE",
    stockStatusTextColor: "text-gray-800",
  },
];

const Dashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-grow p-8 bg-gray-50 overflow-y-auto md:ml-64">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
        </header>
        
        <div className="flex items-center justify-end space-x-4 mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-lg py-2 px-4 pl-10 focus:outline-none"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <button className="flex items-center space-x-2 border border-gray-300 bg-white rounded-lg py-2 px-4">
            <FaFilter className="text-gray-500" />
            <span className="text-gray-600">Filters</span>
          </button>
        </div>

        <div className="bg-white shadow rounded-lg overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-left bg-[#F9F9FD]">
                <th className="p-4">SKU Name</th>
                <th className="p-4">Category</th>
                <th className="p-4">Brand Name</th>
                <th className="p-4">Supplier Name</th>
                <th className="p-4">Stock Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-t border-b">
                  <td className="p-4">{item.sku}</td>
                  <td className="p-4">{item.category}</td>
                  <td className="p-4">{item.brand}</td>
                  <td className="p-4">{item.supplier}</td>
                  <td className="p-4">
                    <span
                      className={`inline-block rounded-lg px-3 py-1 ${item.stockStatusTextColor}`}
                      style={{ backgroundColor: item.stockStatusColor }}
                    >
                      {item.stockStatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between items-center mt-4 p-4">
            <button className="text-gray-600 border border-gray-300 px-4 py-2 rounded-[10px]">Previous</button>
            <span className="text-gray-600">Page 1 of 10</span>
            <button className="text-gray-600 border border-gray-300 px-4 py-2 rounded-[10px]">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
