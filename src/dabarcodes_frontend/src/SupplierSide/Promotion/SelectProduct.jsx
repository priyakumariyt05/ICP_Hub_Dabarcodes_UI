// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Asidebar from "../../ReusableComponents/Asidebar";
// import { FaBars, FaTimes } from "react-icons/fa";
// import TitleHeader from "../ReusableData/TitleHeader";

// const SelectProduct = () => {

//   const [selectedItems, setSelectedItems] = useState([]);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const products = [
//     {
//       id: 1,
//       sku: 52,
//       name: "FreshCo Organic Almond Milk",
//       subBrand: "FreshCo Brands",
//       category: "FreshCo Brands",
//       image: "/image/drink.png",
//     },
//     {
//       id: 2,
//       sku: 25,
//       name: "FreshCo Organic Almond Milk",
//       subBrand: "FreshCo Brands",
//       category: "FreshCo Brands",
//       image: "/image/drink.png",
//     },
//     // Add more product data as needed
//   ];

//   const handleSelect = (id) => {
//     // Toggle selection state
//     setSelectedItems((prev) =>
//       prev.includes(id)
//         ? prev.filter((item) => item !== id)
//         : [...prev, id]
//     );
//   };

//   const handleCreatePromotion = () => {
//     // Ensure that at least one product is selected
//     if (selectedItems.length > 0) {
//       // Navigate to product details of the first selected product (or handle multiple selected if needed)
//       navigate(`/supplier/promotion-management/select-product/create-promotion-details/${selectedItems[0]}`);
//     } else {
//       alert("Please select a product before creating a promotion");
//     }
//   };

//   return (
//     <>

//       <div className="p-6 min-h-screen">
  
//       <TitleHeader title="Select Product" />
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-200">
//             <thead>
//               <tr>
//                 <th>
//                   <input type="checkbox" />
//                 </th>
//                 <th className="p-4">Product Image</th>
//                 <th className="p-4">Product SKU</th>
//                 <th className="p-4">Product Name</th>
//                 <th className="p-4">Sub Brand Name</th>
//                 <th className="p-4">Category</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((product) => (
//                 <tr
//                   key={product.id}
//                   className={`border-t ${selectedItems.includes(product.id) ? "bg-blue-50" : ""
//                     }`}
//                 >
//                   <td className="p-4">
//                     <input
//                       type="checkbox"
//                       checked={selectedItems.includes(product.id)}
//                       onChange={() => handleSelect(product.id)}
//                     />
//                   </td>
//                   <td className="p-4">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-10 h-10 rounded-full"
//                     />
//                   </td>
//                   <td className="p-4">{product.sku}</td>
//                   <td className="p-4">{product.name}</td>
//                   <td className="p-4">{product.subBrand}</td>
//                   <td className="p-4">{product.category}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div className="mt-6 flex justify-center flex-col space-x-4">
//           <button
//             onClick={handleCreatePromotion}
//             className="px-6 py-3 bg-blue-500 text-white rounded-md"
//           >
//             Create Promotion
//           </button>
         

//         </div>
//       </div>
//  </>
//   );
// };

// export default SelectProduct;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TitleHeader from "../ReusableData/TitleHeader";

const SelectProduct = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  const products = [
    { id: 1, sku: 52, name: "FreshCo Organic Almond Milk", subBrand: "FreshCo Brands", category: "FreshCo Brands", image: "/image/drink.png" },
    { id: 2, sku: 25, name: "FreshCo Organic Almond Milk", subBrand: "FreshCo Brands", category: "FreshCo Brands", image: "/image/drink.png" },
    // Add more product data as needed
  ];

  const toggleSelectAll = () => {
    if (selectedItems.length === products.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(products.map((product) => product.id));
    }
  };

  const handleSelect = (id) => {
    setSelectedItems((prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]);
  };

  const handleCreatePromotion = () => {
    if (selectedItems.length > 0) {
      navigate(`/supplier/promotion-management/select-product/create-promotion-details/${selectedItems[0]}`);
    } else {
      alert("Please select a product before creating a promotion");
    }
  };

  return (
    <div className="p-6 min-h-screen">
      <TitleHeader title="Select Product" />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th>
                <input type="checkbox" onChange={toggleSelectAll} checked={selectedItems.length === products.length} />
              </th>
              <th className="p-4">Product Image</th>
              <th className="p-4">Product SKU</th>
              <th className="p-4">Product Name</th>
              <th className="p-4">Sub Brand Name</th>
              <th className="p-4">Category</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className={`border-t ${selectedItems.includes(product.id) ? "bg-blue-50" : ""}`}>
                <td className="p-4">
                  <input type="checkbox" checked={selectedItems.includes(product.id)} onChange={() => handleSelect(product.id)} />
                </td>
                <td className="p-4"><img src={product.image} alt={product.name} className="w-10 h-10 rounded-full" /></td>
                <td className="p-4">{product.sku}</td>
                <td className="p-4">{product.name}</td>
                <td className="p-4">{product.subBrand}</td>
                <td className="p-4">{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 flex justify-center">
        <button onClick={handleCreatePromotion} className="px-6 py-3 bg-blue-500 text-white rounded-md">Create Promotion</button>
      </div>
    </div>
  );
};

export default SelectProduct;
