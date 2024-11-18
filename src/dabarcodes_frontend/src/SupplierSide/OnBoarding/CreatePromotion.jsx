// import React, { useState } from "react";
// import Asidebar from "../../ReusableComponents/Asidebar";
// import { FaBars, FaTimes } from "react-icons/fa";
// const CreatePromotion = () => {
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//     console.log("Sidebar toggled:", sidebarOpen);
//   };


//   const products = [
//     {
//       id: 2,
//       sku: 52,
//       name: "FreshCo Organic Almond Milk",
//       subBrand: "FreshCo Brands",
//       category: "FreshCo Brands",
//       image: "/image/drink.png",
//     },
//     {
//       id: 1,
//       sku: 25,
//       name: "FreshCo Organic Almond Milk",
//       subBrand: "FreshCo Brands",
//       category: "FreshCo Brands",
//       image: "image/drink.png",
//     },
//     // Add more product data as needed
//   ];

//   const handleSelect = (id) => {
//     setSelectedItems((prev) =>
//       prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
//     );
//   };

//   return (
//     <>
//  <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8 font-roboto">
// <button
//         onClick={toggleSidebar}
//         className="fixed top-4 left-4 md:hidden z-50 p-2 bg-blue-600 text-white rounded-md"
//       >
//         {sidebarOpen ? <FaTimes /> : <FaBars />}
//       </button>
//     <Asidebar sidebarOpen={sidebarOpen} title="Become Our Supplier" />
//     <div  className={`bg-white w-full md:w-2/3 p-4  flex flex-col  transition-all duration-300 ease-in-out ${sidebarOpen ? "ml-0" : "md:ml-1/3"
//           }`}>
//       <h1 className="text-2xl font-bold ">Create Promotion</h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-200">
//           <thead>
//             <tr>
//               <th className="">
//                 <input type="checkbox" />
//               </th>
//               <th className="p-4">Product Image</th>
//               <th className="p-4">Product SKU</th>
//               <th className="p-4">Product Name</th>
//               <th className="p-4">Sub Brand Name</th>
//               <th className="p-4">Category</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((product) => (
//               <tr
//                 key={product.id}
//                 className={`border-t ${selectedItems.includes(product.id) ? "bg-blue-50" : ""}`}
//               >
//                 <td className="p-4">
//                   <input
//                     type="checkbox"
//                     checked={selectedItems.includes(product.id)}
//                     onChange={() => handleSelect(product.id)}
//                   />
//                 </td>
//                 <td className="p-4">
//                   <img src={product.image} alt={product.name} className="w-10 h-10 rounded-full" />
//                 </td>
//                 <td className="p-4">{product.sku}</td>
//                 <td className="p-4">{product.name}</td>
//                 <td className="p-4">{product.subBrand}</td>
//                 <td className="p-4">{product.category}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="mt-6 flex justify-center space-x-4">
//         <button className="px-6 py-3 bg-blue-500 text-white rounded-md">Create Promotion</button>
//         <button className="text-blue-500 underline">Skip for now</button>
//       </div>
//     </div>
//     </div>
//     </>
//   );
// };

// export default CreatePromotion;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Asidebar from "../../ReusableComponents/Asidebar";
// import { FaBars, FaTimes } from "react-icons/fa";

// const CreatePromotion = () => {
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const navigate = useNavigate(); // Initialize navigate function

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//     console.log("Sidebar toggled:", sidebarOpen);
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
//       image: "image/drink.png",
//     },
//     // Add more product data as needed
//   ];

//   const handleSelect = (id) => {
//     setSelectedItems((prev) =>
//       prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
//     );

//     // Navigate to ProductDetails page with the selected product ID
//     navigate(`/supplier/product-details/${id}`);
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8 font-roboto">
//       <button
//         onClick={toggleSidebar}
//         className="fixed top-4 left-4 md:hidden z-50 p-2 bg-blue-600 text-white rounded-md"
//       >
//         {sidebarOpen ? <FaTimes /> : <FaBars />}
//       </button>
//       <Asidebar sidebarOpen={sidebarOpen} title="Become Our Supplier" />
//       <div
//         className={`bg-white w-full md:w-2/3 p-4 flex flex-col transition-all duration-300 ease-in-out ${
//           sidebarOpen ? "ml-0" : "md:ml-1/3"
//         }`}
//       >
//         <h1 className="text-2xl font-bold">Create Promotion</h1>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-200">
//             <thead>
//               <tr>
//                 <th className="">
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
//                   className={`border-t ${
//                     selectedItems.includes(product.id) ? "bg-blue-50" : ""
//                   }`}
//                   onClick={() => handleSelect(product.id)} // Navigate on row click
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
//         <div className="mt-6 flex justify-center space-x-4">
//           <button className="px-6 py-3 bg-blue-500 text-white rounded-md">
//             Create Promotion
//           </button>
//           <button className="text-blue-500 underline">Skip for now</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreatePromotion;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Asidebar from "../../ReusableComponents/Asidebar";
// import { FaBars, FaTimes } from "react-icons/fa";

// const CreatePromotion = () => {
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

// //   const handleSelect = (id) => {
// //     setSelectedItems((prev) =>
// //       prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
// //     );
// //     navigate(`/supplier/product-details/${id}`);
// //   };
// const handleSelect = (id) => {
//   // Toggle selection state
//   setSelectedItems((prev) =>
//     prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
//   );

//   // Only navigate if the checkbox is selected (to view details)
//   if (!selectedItems.includes(id)) {
//     navigate(`/supplier/product-details/${id}`);
//   }
// };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8 font-roboto">
//       <button
//         onClick={toggleSidebar}
//         className="fixed top-4 left-4 md:hidden z-50 p-2 bg-blue-600 text-white rounded-md"
//       >
//         {sidebarOpen ? <FaTimes /> : <FaBars />}
//       </button>
//       <Asidebar sidebarOpen={sidebarOpen} title="Become Our Supplier" />
//       <div
//         className={`bg-white w-full md:w-2/3 p-4 flex flex-col transition-all duration-300 ease-in-out ${
//           sidebarOpen ? "ml-0" : "md:ml-1/3"
//         }`}
//       >
//         <h1 className="text-2xl font-bold">Create Promotion</h1>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-200">
//             <thead>
//               <tr>
//                 <th><input type="checkbox" /></th>
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
//                   className={`border-t ${
//                     selectedItems.includes(product.id) ? "bg-blue-50" : ""
//                   }`}
//                   onClick={() => handleSelect(product.id)}
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
//           <button className="px-6 py-3 bg-blue-500 text-white rounded-md">
//             Create Promotion
//           </button>
//           <button className="text-blue-500 underline mt-4">Skip for now</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreatePromotion;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Asidebar from "../../ReusableComponents/Asidebar";
import { FaBars, FaTimes } from "react-icons/fa";

const CreatePromotion = () => {
  const naviagte = useNavigate()
  const [selectedItems, setSelectedItems] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const products = [
    {
      id: 1,
      sku: 52,
      name: "FreshCo Organic Almond Milk",
      subBrand: "FreshCo Brands",
      category: "FreshCo Brands",
      image: "/image/drink.png",
    },
    {
      id: 2,
      sku: 25,
      name: "FreshCo Organic Almond Milk",
      subBrand: "FreshCo Brands",
      category: "FreshCo Brands",
      image: "/image/drink.png",
    },
    // Add more product data as needed
  ];

  const handleSelect = (id) => {
    // Toggle selection state
    setSelectedItems((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const handleCreatePromotion = () => {
    // Ensure that at least one product is selected
    if (selectedItems.length > 0) {
      // Navigate to product details of the first selected product (or handle multiple selected if needed)
      navigate(`/supplier/product-details/${selectedItems[0]}`);
    } else {
      alert("Please select a product before creating a promotion");
    }
  };
const navigateWithoutDataPage =()=>{
  navigate("/supplier/supplier-home-without-data")
}
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8 font-roboto">
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 md:hidden z-50 p-2 bg-blue-600 text-white rounded-md"
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>
      <Asidebar sidebarOpen={sidebarOpen} title="Become Our Supplier" />
      <div
        className={`bg-white w-full md:w-2/3 p-4 flex flex-col transition-all duration-300 ease-in-out ${sidebarOpen ? "ml-0" : "md:ml-1/3"
          }`}
      >
        <h1 className="text-2xl font-bold">Create Promotion</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
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
                <tr
                  key={product.id}
                  className={`border-t ${selectedItems.includes(product.id) ? "bg-blue-50" : ""
                    }`}
                >
                  <td className="p-4">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(product.id)}
                      onChange={() => handleSelect(product.id)}
                    />
                  </td>
                  <td className="p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td className="p-4">{product.sku}</td>
                  <td className="p-4">{product.name}</td>
                  <td className="p-4">{product.subBrand}</td>
                  <td className="p-4">{product.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex justify-center flex-col space-x-4">
          <button
            onClick={handleCreatePromotion}
            className="px-6 py-3 bg-blue-500 text-white rounded-md"
          >
            Create Promotion
          </button>
          <button onClick={navigateWithoutDataPage} className="text-blue-500 underline mt-4">Skip for now</button>
          {/* <Link to="/supplier/supplier-home-without-data" className="text-blue-500 underline mt-4 ml-auto">
            Skip for now
          </Link> */}

        </div>
      </div>
    </div>
  );
};

export default CreatePromotion;
