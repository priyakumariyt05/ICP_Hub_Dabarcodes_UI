// import React from 'react'
// import { useEffect } from 'react';
// import SkuTable from './SkuTable';
// const SkuManagement = () => {

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const [products, setProducts] = useState([]);
//       const [currentPage, setCurrentPage] = useState(1);
//       const rowsPerPage = 6;
//       const data = [
//         {
//           id: 52,
//           name: "FreshCo Organic Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",
//           store: "Flossi Ewoldt",
//           supplier: "Flossi Ewoldt",
//           image: "/image/drink.png",
//           price: "25",
//           promotionPrice: "15",
//           umbrellaBrandName: "P&G",
//           storeId: "213",
//         },
//         {
//           id: 23,
//           name: "FreshCo Organic Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",
//           store: "Flossi Ewoldt",
//           supplier: "Flossi Ewoldt",
//           image: "/image/token.png",
//           price: "25",
//           promotionPrice: "15",
//           umbrellaBrandName: "P&G",
//           storeId: "213",
//         },
//         {
//           id: 12,
//           name: "FreshCo Organic Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",
//           store: "Flossi Ewoldt",
//           supplier: "Flossi Ewoldt",
//           image: "/image/drink.png",
//           price: "25",
//           promotionPrice: "15",
//           umbrellaBrandName: "P&G",
//           storeId: "213",
//         },
//         {
//           id: 2,
//           name: "FreshCo Organic Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",
//           store: "Flossi Ewoldt",
//           supplier: "Flossi Ewoldt",
//           image: "/image/drink.png",
//           price: "25",
//           promotionPrice: "15",
//           umbrellaBrandName: "P&G",
//           storeId: "213",
//         },
//         {
//           id: 56,
//           name: "FreshCo Organic Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",
//           store: "Flossi Ewoldt",
//           supplier: "Flossi Ewoldt",
//           image: "/image/drink.png",
//           price: "25",
//           promotionPrice: "15",
//           umbrellaBrandName: "P&G",
//           storeId: "213",
//         },
//         {
//           id: 58,
//           name: "Baverage Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",
//           store: "Flossi Ewoldt",
//           supplier: "Flossi Ewoldt",
//           image: "/image/drink.png",
//           price: "25",
//           promotionPrice: "15",
//           umbrellaBrandName: "P&G",
//           storeId: "213",
//         },
//         {
//           id: 56,
//           name: "FreshCo Organic Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",
//           store: "Flossi Ewoldt",
//           supplier: "Flossi Ewoldt",
//           image: "/image/drink.png",
//           price: "25",
//           promotionPrice: "15",
//           umbrellaBrandName: "P&G",
//           storeId: "213",
//         },
//         {
//           id: 53,
//           name: "FreshCo Organic Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",
//           store: "Flossi Ewoldt",
//           supplier: "Flossi Ewoldt",
//           image: "/image/drink.png",
//           price: "25",
//           promotionPrice: "15",
//           umbrellaBrandName: "P&G",
//           storeId: "213",
//         },
//       ];
//       setProducts(data);
//       setFilteredProducts(data);
//     };

//     fetchProducts();
//   }, []);
//   return (
// <>
// <div className="p-4 min-h-screen">
//       <div className="flex items-center justify-between mb-6">
//   <h2 className="text-3xl font-bold">Product SKU</h2>
//   <button className="px-4 py-2 bg-blue-500 text-white rounded">Add Promotion</button>
// </div>
// <SkuTable/>


//     </div>
// </>
//   )
// }

// export default SkuManagement
// import React, { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { MdOutlineModeEdit } from "react-icons/md";
// import { MdDeleteOutline } from "react-icons/md";
// // import EditProductModal from "../Modals/EditProductModal";
// import EditProductModal from "../../Dashboard/Modals/EditProductModal";

// // import HeaderWithButton from "../Reusable/HeaderWithButton";
// import HeaderWithButton from "../../Dashboard/Reusable/HeaderWithButton";
// import { HiAdjustmentsHorizontal } from "react-icons/hi2";
// // import AddProductForm from "./AddProductForm";
// import AddProductForm from "../../Dashboard/ProductManagement/AddProductForm";
// import ProductUploadModal from "../../Dashboard/Modals/ProductUploadModal";
// // import ProductUploadModal from "../Modals/ProductUploadModal";

// const SkuManagement = () => {
//   const [products, setProducts] = useState([]);
//   const [sortConfig, setSortConfig] = useState({
//     key: "id", // Default key for sorting
//     direction: "asc",
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 6;

//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showEditModal, setShowEditModal] = useState(false);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const data = [
//         {

//           name: "FreshCo Organic Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",
//           store: "Flossi Ewoldt",
//           supplier: "Flossi Ewoldt",
//           image: "/image/drink.png",
//           price: "25",
//           promotionPrice: "15",
//           umbrellaBrandName: "P&G",
//           storeId: "213",
//         },
//         {

//           name: "FreshCo Organic Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",
//           store: "Flossi Ewoldt",
//           supplier: "Flossi Ewoldt",
//           image: "/image/token.png",
//           price: "25",
//           promotionPrice: "15",
//           umbrellaBrandName: "P&G",
//           storeId: "213",
//         },
//         {

//           name: "FreshCo Organic Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",
//           store: "Flossi Ewoldt",
//           supplier: "Flossi Ewoldt",
//           image: "/image/drink.png",
//           price: "25",
//           promotionPrice: "15",
//           umbrellaBrandName: "P&G",
//           storeId: "213",
//         },
//         {

//           name: "FreshCo Organic Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",
//           store: "Flossi Ewoldt",
//           supplier: "Flossi Ewoldt",
//           image: "/image/drink.png",
//           price: "25",
//           promotionPrice: "15",
//           umbrellaBrandName: "P&G",
//           storeId: "213",
//         },
//         {

//           name: "FreshCo Organic Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",
//           store: "Flossi Ewoldt",
//           supplier: "Flossi Ewoldt",
//           image: "/image/drink.png",
//           price: "25",
//           promotionPrice: "15",
//           umbrellaBrandName: "P&G",
//           storeId: "213",
//         },
//         {

//           name: "Baverage Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",
//           store: "Flossi Ewoldt",
//           supplier: "Flossi Ewoldt",
//           image: "/image/drink.png",
//           price: "25",
//           promotionPrice: "15",
//           umbrellaBrandName: "P&G",
//           storeId: "213",
//         },
//         {

//           name: "FreshCo Organic Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",
//           store: "Flossi Ewoldt",
//           supplier: "Flossi Ewoldt",
//           image: "/image/drink.png",
//           price: "25",
//           promotionPrice: "15",
//           umbrellaBrandName: "P&G",
//           storeId: "213",
//         },
//         {

//           name: "FreshCo Organic Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",
//           image: "/image/drink.png",
//           price: "25",

//   status: "213",
//         },
//       ];
//       setProducts(data);
//     };

//     fetchProducts();
//   }, []);

//   // Sorting functionality
//   const handleSort = (key) => {
//     let direction = "asc";
//     if (sortConfig.key === key && sortConfig.direction === "asc") {
//       direction = "desc";
//     }
//     setSortConfig({ key, direction });

//     const sortedProducts = [...products].sort((a, b) => {
//       if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
//       if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
//       return 0;
//     });

//     setProducts(sortedProducts);
//   };

//   const handleCheckboxClick = (product) => {
//     setSelectedProduct(product);
//   };

//   const handleAddProduct = (newProduct) => {
//     const updatedProducts = [...products, newProduct];
//     setProducts(updatedProducts);
//     toast.success("Product added successfully!"); // Success toast
//   };

//   const handleDelete = (id) => {
//     const updatedProducts = products.filter((product) => product.id !== id);
//     setProducts(updatedProducts);
//     toast.success("Product deleted successfully!"); // Success toast
//   };

//   const handleSave = () => {
//     const updatedProducts = products.map((product) =>
//       product.id === selectedProduct.id ? selectedProduct : product
//     );
//     setProducts(updatedProducts);
//     setShowEditModal(false);
//     setSelectedProduct(null);
//     toast.success("Product updated successfully!"); // Success toast
//   };

//   const totalPages = Math.ceil(products.length / rowsPerPage);
//   const displayedProducts = products.slice(
//     (currentPage - 1) * rowsPerPage,
//     currentPage * rowsPerPage
//   );

//   const modalOptions = [
//     {
//       label: "Add Single Product",
//       component: (closeModal) => (
//         <AddProductForm
//           closeModal={closeModal}
//           handleAddProduct={handleAddProduct}
//         />
//       ),
//     },
//     {
//       label: "Add Multiple Products",
//       component: (closeModal) => (
//         <ProductUploadModal isOpen={true} closeModal={closeModal} />
//       ),
//     },
//   ];

//   return (
//     <div className="mx-auto p-4 ">
//       <HeaderWithButton
//         heading="Product SKU"
//         buttonText="Add New Product"
//         modalOptions={modalOptions}
//       />
//       <ToastContainer />
//       {/* Tabs */}

//       <hr className="my-4" />
//       {/* Search and Sort */}
//       <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
//         <div className="flex flex-wrap gap-2 justify-start">
//           <button onClick={() => setShowEditModal(true)}>
//             <MdOutlineModeEdit className="text-2xl" />
//           </button>

//           {/* Modal Component */}
//           {showEditModal && (
//             <EditProductModal
//               selectedProduct={selectedProduct}
//               setSelectedProduct={setSelectedProduct}
//               showEditModal={showEditModal}
//               setShowEditModal={setShowEditModal}
//               onSave={handleSave} // Pass the handleSave function here
//             />
//           )}
//           <button
//             onClick={() => handleDelete(selectedProduct?.id)}
//             disabled={!selectedProduct}
//           >
//             <MdDeleteOutline className="text-2xl" />
//           </button>
//         </div>


//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto w-full">
//         <table className="min-w-full table-auto text-left ">
//           <thead>
//             <tr className="bg-gray-100 ">
//               <th className="p-2">
//                 <input type="checkbox" />
//               </th>


//               <th
//                 className="p-2 cursor-pointer"
//                 onClick={() => handleSort("image")}
//               >
//                 Product Image
//               </th>
//               <th
//                 className="p-2 cursor-pointer"
//                 onClick={() => handleSort("name")}
//               >
//                 Product Name
//               </th>
//               <th
//                 className="p-2 cursor-pointer"
//                 onClick={() => handleSort("category")}
//               >
//                 Category
//               </th>
//               <th
//                 className="p-2 cursor-pointer"
//                 onClick={() => handleSort("brand")}
//               >
//                 Brand Name
//               </th>

//               <th className="p-2">Price</th>
//               <th className="p-2">Promotion </th>
//               <th className="p-2">Status</th>

//             </tr>
//           </thead>

//           <tbody className="border-l-4 border-blue-400">
//             {displayedProducts.map((product) => (
//               <tr key={product.id} className="border-t">
//                 <td className="p-2">
//                   <input
//                     type="checkbox"
//                     checked={selectedProduct?.id === product.id}
//                     onChange={() => handleCheckboxClick(product)}
//                   />
//                 </td>
//                 <td className="p-2">{product.id}</td>
//                 <td className="p-2">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-16 h-16 object-cover"
//                   />
//                 </td>
//                 <td className="p-2">{product.name}</td>
//                 <td className="p-2">{product.category}</td>
//                 <td className="p-2">{product.brand}</td>
//                 <td className="p-2">{product.umbrellaBrandName}</td>
//                 <td className="p-2">{product.price}</td>
//                 <td className="p-2">{product.promotionPrice}</td>
//                 <td className="p-2">{product.store}</td>
//                 <td className="p-2">{product.storeId}</td>
//                 <td className="p-2">{product.supplier}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       {/* <div className="flex justify-between items-center mt-4">
//         <div>
//           <button
//             disabled={currentPage === 1}
//             onClick={() => setCurrentPage(currentPage - 1)}
//             className="bg-blue-500 text-white px-4 py-2 rounded-md"
//           >
//             Previous
//           </button>
//           <span className="px-4">{currentPage}</span>
//           <button
//             disabled={currentPage === totalPages}
//             onClick={() => setCurrentPage(currentPage + 1)}
//             className="bg-blue-500 text-white px-4 py-2 rounded-md"
//           >
//             Next
//           </button>
//         </div>
//       </div> */}
//       <div className="flex justify-between items-center mt-4">
//         <button
//           onClick={() => setCurrentPage(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="bg-gray-300 text-gray-700 px-3 py-1 rounded disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <span>
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           onClick={() => setCurrentPage(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="bg-gray-300 text-gray-700 px-3 py-1 rounded disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SkuManagement;

//////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { MdOutlineModeEdit } from "react-icons/md";
// import { MdDeleteOutline } from "react-icons/md";

// import EditProductModal from "../../Dashboard/Modals/EditProductModal";


// import HeaderWithButton from "../../Dashboard/Reusable/HeaderWithButton";
// import { HiAdjustmentsHorizontal } from "react-icons/hi2";

// import AddProductForm from "../Modal/AddProductForm";
// import ProductUploadModal from "../Modal/ProductUploadModal";


// const SkuManagement = () => {
//   const [products, setProducts] = useState([]);
//   const [sortConfig, setSortConfig] = useState({
//     key: "id", // Default key for sorting
//     direction: "asc",
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 4;

//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showEditModal, setShowEditModal] = useState(false);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const data = [
//         {
//           id: 1,
//           name: "FreshCo Organic Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",
//           image: "/image/drink.png",
//           price: "25",
//           promotion: "yes",
//           status: "deactivate",


//         },
//         {
//           id: 2,
//           name: "FreshCo Organic Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",
//           store: "Flossi Ewoldt",
//           supplier: "Flossi Ewoldt",
//           image: "/image/token.png",
//           price: "25",
//           promotion: "no",
//           status: "Active"
//         },
//         {
//           id: 3,
//           name: "FreshCo Organic Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",

//           image: "/image/drink.png",
//           price: "25",
//           promotion: "no",
//           status: "Active"
//         },
//         {
//           id: 4,
//           name: "FreshCo Organic Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",

//           image: "/image/token.png",
//           price: "25",
//           promotion: "no",
//           status: "Active"
//         },
//         {
//           id: 5,
//           name: "FreshCo Organic Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",
//           image: "/image/drink.png", // Image path
//           price: "25",
//           promotion: "yes",
//           status: "deactivate",
//         },
//         {
//           id: 6,
//           name: "Baverage Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",

//           image: "/image/token.png", 
//           price: "25",
//           promotion: "yes",
//           status: "deactivate",
//         },
//         {
//           id: 7,
//           name: "FreshCo Organic Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",
//           image: "/image/drink.png", 
//           price: "25",
//           promotion: "yes",
//           status: "deactivate",

//         },
//         {
//           id: 8,
//           name: "FreshCo Organic Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",

//           image: "/image/drink.png", 
//           price: "25",
//           promotion: "yes",
//           status: "deactivate",
//         },
//       ];
//       setProducts(data);
//     };

//     fetchProducts();
//   }, []);

//   // Sorting functionality
//   const handleSort = (key) => {
//     let direction = "asc";
//     if (sortConfig.key === key && sortConfig.direction === "asc") {
//       direction = "desc";
//     }
//     setSortConfig({ key, direction });

//     const sortedProducts = [...products].sort((a, b) => {
//       if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
//       if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
//       return 0;
//     });

//     setProducts(sortedProducts);
//   };

//   const handleCheckboxClick = (product) => {
//     setSelectedProduct(product);
//   };

//   const handleAddProduct = (newProduct) => {
//     const updatedProducts = [...products, newProduct];
//     setProducts(updatedProducts);
//     toast.success("Product added successfully!"); // Success toast
//   };

//   const handleDelete = (id) => {
//     const updatedProducts = products.filter((product) => product.id !== id);
//     setProducts(updatedProducts);
//     toast.success("Product deleted successfully!"); // Success toast
//   };

//   const handleSave = () => {
//     const updatedProducts = products.map((product) =>
//       product.id === selectedProduct.id ? selectedProduct : product
//     );
//     setProducts(updatedProducts);
//     setShowEditModal(false);
//     setSelectedProduct(null);
//     toast.success("Product updated successfully!"); // Success toast
//   };

//   const totalPages = Math.ceil(products.length / rowsPerPage);
//   const displayedProducts = products.slice(
//     (currentPage - 1) * rowsPerPage,
//     currentPage * rowsPerPage
//   );

//   const modalOptions = [
//     {
//       label: "Add Single Product",
//       component: (closeModal) => (
//         <AddProductForm
//           closeModal={closeModal}
//           handleAddProduct={handleAddProduct}
//         />
//       ),
//     },
//     {
//       label: "Add Multiple Products",
//       component: (closeModal) => (
//         <ProductUploadModal isOpen={true} closeModal={closeModal} />
//       ),
//     },
//   ];
//   const handleRowClick = (product) => {
//     navigate(`/product-details/${product.id}`, { state: { product } });
//   };

//   return (
//     <div className="mx-auto p-4 ">
//       <HeaderWithButton
//         heading="Product SKU"
//         buttonText="Add New Product"
//         modalOptions={modalOptions}
//       />
//       <ToastContainer />
//       {/* Tabs */}

//       <hr className="my-4" />
//       {/* Search and Sort */}
//       <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
//         <div className="flex flex-wrap gap-2 justify-start">
//           <button onClick={() => setShowEditModal(true)}>
//             <MdOutlineModeEdit className="text-2xl" />
//           </button>

//           {/* Modal Component */}
//           {showEditModal && (
//             <EditProductModal
//               selectedProduct={selectedProduct}
//               setSelectedProduct={setSelectedProduct}
//               showEditModal={showEditModal}
//               setShowEditModal={setShowEditModal}
//               onSave={handleSave}
//             />
//           )}
//           <button
//             onClick={() => handleDelete(selectedProduct?.id)}
//             disabled={!selectedProduct}
//           >
//             <MdDeleteOutline className="text-2xl" />
//           </button>
//         </div>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto w-full">
//         <table className="min-w-full table-auto text-left">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="p-2">
//                 <input type="checkbox" />
//               </th>

//               <th
//                 className="p-4 cursor-pointer"
//                 onClick={() => handleSort("image")}
//               >
//                 Product Image
//               </th>
//               <th
//                 className="p-4 cursor-pointer"
//                 onClick={() => handleSort("name")}
//               >
//                 Product Name
//               </th>
//               <th
//                 className="p-4 cursor-pointer"
//                 onClick={() => handleSort("category")}
//               >
//                 Category
//               </th>
//               <th
//                 className="p-4 cursor-pointer"
//                 onClick={() => handleSort("brand")}
//               >
//                 Brand Name
//               </th>

//               <th className="p-4">Price</th>
//               <th className="p-4">Promotion </th>
//               <th className="p-4">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {displayedProducts.map((product) => (
//               <tr
//                 key={product.id}
//                 className="border-b hover:bg-gray-50"
//                 onClick={() => handleCheckboxClick(product)}
//               >
//                 <td className="p-2">
//                   <input type="checkbox" />
//                 </td>
//                 <td className="p-2">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-16 h-16 object-cover"
//                   />
//                 </td>
//                 <td className="p-2">{product.name}</td>
//                 <td className="p-2">{product.category}</td>
//                 <td className="p-2">{product.brand}</td>
//                 <td className="p-2">{product.price}</td>
//                 <td className="p-2">{product.promotion}</td>
//                 <td className="p-2">{product.status}</td>

//                 {/* <td className="p-2">
//                   <button
//                     onClick={() => setSelectedProduct(product)}
//                     className="text-blue-500"
//                   >
//                     Edit
//                   </button>
//                 </td> */}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className="flex justify-between items-center mt-4">
//         <button
//           onClick={() => setCurrentPage(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="bg-gray-300 text-gray-700 px-3 py-1 rounded disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <span>
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           onClick={() => setCurrentPage(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="bg-gray-300 text-gray-700 px-3 py-1 rounded disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default SkuManagement;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"; // For navigation
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { MdOutlineModeEdit, MdDeleteOutline } from "react-icons/md";
// import HeaderWithButton from "../../Dashboard/Reusable/HeaderWithButton";
// import { HiAdjustmentsHorizontal } from "react-icons/hi2";
// import AddProductForm from "../Modal/AddProductForm";
// import ProductUploadModal from "../Modal/ProductUploadModal";

// const SkuManagement = () => {
//   const [products, setProducts] = useState([]);
//   const [sortConfig, setSortConfig] = useState({
//     key: "id",
//     direction: "asc",
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 4;

//   const navigate = useNavigate(); // For navigation

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const data = [
//         {
//           id: 1,
//           name: "FreshCo Organic Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",
//           image: "/image/drink.png",
//           price: "25",
//           promotion: "yes",
//           status: "deactivate",
//         },
//         {
//           id: 2,
//           name: "FreshCo Organic Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",
//           image: "/image/token.png",
//           price: "25",
//           promotion: "no",
//           status: "Active",
//         },
//         // Additional products...
//       ];
//       setProducts(data);
//     };

//     fetchProducts();
//   }, []);

//   const handleRowClick = (product) => {
//     navigate(`/supplier/sku-management/product-details/${product.id}`, { state: { product } });
//   };
//   const handleAddProduct = (newProduct) => {
//     const updatedProducts = [...products, newProduct];
//     setProducts(updatedProducts);
//     toast.success("Product added successfully!"); // Success toast
//   };

//   const totalPages = Math.ceil(products.length / rowsPerPage);
//   const displayedProducts = products.slice(
//     (currentPage - 1) * rowsPerPage,
//     currentPage * rowsPerPage
//   );
//   // Sorting functionality
//   const handleSort = (key) => {
//     let direction = "asc";
//     if (sortConfig.key === key && sortConfig.direction === "asc") {
//       direction = "desc";
//     }
//     setSortConfig({ key, direction });

//     const sortedProducts = [...products].sort((a, b) => {
//       if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
//       if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
//       return 0;
//     });

//     setProducts(sortedProducts);
//   };
//     const modalOptions = [
//     {
//       label: "Add Single Product",
//       component: (closeModal) => (
//         <AddProductForm
//           closeModal={closeModal}
//           handleAddProduct={handleAddProduct}
//         />
//       ),
//     },
//     {
//       label: "Add Multiple Products",
//       component: (closeModal) => (
//         <ProductUploadModal isOpen={true} closeModal={closeModal} />
//       ),
//     },
//   ];
//   return (
//     <div className="mx-auto p-4">
//       {/* <HeaderWithButton heading="Product SKU" buttonText="Add New Product" /> */}
//       <HeaderWithButton
//         heading="Product SKU"
//         buttonText="Add New Product"
//         modalOptions={modalOptions}
//       />
//       <ToastContainer />

//       <div className="overflow-x-auto w-full">
//         <table className="min-w-full table-auto text-left">
//           {/* <thead>
//             <tr className="bg-gray-100">
//               <th className="p-2">#</th>
//               <th className="p-4">Product Image</th>
//               <th className="p-4">Product Name</th>
//               <th className="p-4">Category</th>
//               <th className="p-4">Brand Name</th>
//               <th className="p-4">Price</th>
//               <th className="p-4">Promotion</th>
//               <th className="p-4">Status</th>
//             </tr>
//           </thead> */}
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="p-2">
//                 <input type="checkbox" />
//               </th>

//               <th
//                 className="p-4 cursor-pointer"
//                 onClick={() => handleSort("image")}
//               >
//                 Product Image
//               </th>
//               <th
//                 className="p-4 cursor-pointer"
//                 onClick={() => handleSort("name")}
//               >
//                 Product Name
//               </th>
//               <th
//                 className="p-4 cursor-pointer"
//                 onClick={() => handleSort("category")}
//               >
//                 Category
//               </th>
//               <th
//                 className="p-4 cursor-pointer"
//                 onClick={() => handleSort("brand")}
//               >
//                 Brand Name
//               </th>

//               <th className="p-4">Price</th>
//               <th className="p-4">Promotion </th>
//               <th className="p-4">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {displayedProducts.map((product) => (
//               <tr
//                 key={product.id}
//                 className="border-b hover:bg-gray-50 cursor-pointer"
//                 onClick={() => handleRowClick(product)}
//               >
//               <td className="p-2">
//                   <input type="checkbox" />
//                </td>
//                 {/* <td className="p-2">{product.id}</td> */}
//                 <td className="p-2">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-16 h-16 object-cover"
//                   />
//                 </td>
//                 <td className="p-2">{product.name}</td>
//                 <td className="p-2">{product.category}</td>
//                 <td className="p-2">{product.brand}</td>
//                 <td className="p-2">{product.price}</td>
//                 <td className="p-2">{product.promotion}</td>
//                 <td className="p-2">{product.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className="flex justify-between items-center mt-4">
//           <button
//             onClick={() => setCurrentPage(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="bg-gray-300 text-gray-700 px-3 py-1 rounded disabled:opacity-50"
//           >
//             Previous
//           </button>
//           <span>
//             Page {currentPage} of {totalPages}
//           </span>
//           <button
//             onClick={() => setCurrentPage(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className="bg-gray-300 text-gray-700 px-3 py-1 rounded disabled:opacity-50"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkuManagement;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineModeEdit, MdDeleteOutline } from "react-icons/md";
import HeaderWithButton from "../../Dashboard/Reusable/HeaderWithButton";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import AddProductForm from "../Modal/AddProductForm";
import ProductUploadModal from "../Modal/ProductUploadModal";

const SkuManagement = () => {
  const [products, setProducts] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: "id",
    direction: "asc",
  });
  const [filter, setFilter] = useState(""); 
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 4;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = [
        {
          id: 1,
          name: "FreshCo Organic Almond",
          category: "Bakery",
          brand: "FreshCo Brands",
          image: "/image/drink.png",
          price: "25",
          promotion: "yes",
          status: "deactivate",
        },
        {
          id: 2,
          name: "FreshCo Organic Almond",
          category: "Bakery",
          brand: "FreshCo Brands",
          image: "/image/token.png",
          price: "25",
          promotion: "no",
          status: "Active",
        },
               {
          id: 3,
          name: "FreshCo Organic Almond",
          category: "Bakery",
          brand: "FreshCo Brands",

          image: "/image/drink.png",
          price: "25",
          promotion: "no",
          status: "Active"
        },
        {
          id: 4,
          name: "FreshCo Organic Almond",
          category: "Bakery",
          brand: "FreshCo Brands",

          image: "/image/token.png",
          price: "25",
          promotion: "no",
          status: "Active"
        },
        {
          id: 5,
          name: "FreshCo Organic Almond",
          category: "Bakery",
          brand: "FreshCo Brands",
          image: "/image/drink.png", // Image path
          price: "25",
          promotion: "yes",
          status: "deactivate",
        },
        {
          id: 6,
          name: "Baverage Almond",
          category: "Bakery",
          brand: "FreshCo Brands",

          image: "/image/token.png", 
          price: "25",
          promotion: "yes",
          status: "deactivate",
        },
        {
          id: 7,
          name: "FreshCo Organic Almond",
          category: "Bakery",
          brand: "FreshCo Brands",
          image: "/image/drink.png", 
          price: "25",
          promotion: "yes",
          status: "deactivate",

        },
        {
          id: 8,
          name: "FreshCo Organic Almond",
          category: "Bakery",
          brand: "FreshCo Brands",

          image: "/image/drink.png", 
          price: "25",
          promotion: "yes",
          status: "deactivate",
        },
      ];
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleRowClick = (product) => {
    navigate(`/supplier/sku-management/product-details/${product.id}`, {
      state: { product },
    });
  };

  const handleAddProduct = (newProduct) => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    toast.success("Product added successfully!"); // Success toast
  };

  const totalPages = Math.ceil(products.length / rowsPerPage);

  // Filter and search logic
  const filteredAndSearchedProducts = products.filter((product) => {
    const matchesFilter = filter ? product.category === filter : true;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const displayedProducts = filteredAndSearchedProducts.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Sorting functionality
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sortedProducts = [...products].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setProducts(sortedProducts);
  };

  const modalOptions = [
    {
      label: "Add Single Product",
      component: (closeModal) => (
        <AddProductForm
          closeModal={closeModal}
          handleAddProduct={handleAddProduct}
        />
      ),
    },
    {
      label: "Add Multiple Products",
      component: (closeModal) => (
        <ProductUploadModal isOpen={true} closeModal={closeModal} />
      ),
    },
  ];

  return (
    <div className="mx-auto p-4">
      <HeaderWithButton
        heading="Product SKU"
        buttonText="Add New Product"
        modalOptions={modalOptions}
      />
      <ToastContainer />

      {/* Filter and Search */}
      <div className="flex items-center justify-end my-4">
        {/* Filter */}
     
        <div className="relative flex items-center mr-2">
  <select
    className="w-full rounded px-3 py-1 pr-10 appearance-none" // appearance-none removes the default arrow
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
  >
    <option value="">Filter</option>
    <option value="Bakery">Bakery</option>
    <option value="Beverages">Beverages</option>
    {/* Add more categories as needed */}
  </select>

  <HiAdjustmentsHorizontal
    size={24}
    className="absolute right-3 text-gray-600" 
  />
</div>



        {/* Search */}
        <div className="flex items-center border border-gray-300 rounded">
          <input
            type="text"
            placeholder="Search "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-2 py-1 focus:outline-none"
          />
          <IoSearchOutline size={24} className="text-gray-600 mx-2" />
        </div>
      </div>

      {/* Product Table */}
      <div className="overflow-x-auto w-full">
        <table className="min-w-full table-auto text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">
                <input type="checkbox" />
              </th>
              <th className="p-4 cursor-pointer" onClick={() => handleSort("image")}>
                Product Image
              </th>
              <th className="p-4 cursor-pointer" onClick={() => handleSort("name")}>
                Product Name
              </th>
              <th className="p-4 cursor-pointer" onClick={() => handleSort("category")}>
                Category
              </th>
              <th className="p-4 cursor-pointer" onClick={() => handleSort("brand")}>
                Brand Name
              </th>
              <th className="p-4">Price</th>
              <th className="p-4">Promotion</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {displayedProducts.map((product) => (
              <tr
                key={product.id}
                className="border-b hover:bg-gray-50 cursor-pointer"
                onClick={() => handleRowClick(product)}
              >
                <td className="p-2">
                  <input type="checkbox" />
                </td>
                <td className="p-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td className="p-2">{product.name}</td>
                <td className="p-2">{product.category}</td>
                <td className="p-2">{product.brand}</td>
                <td className="p-2">{product.price}</td>
                <td className="p-2">{product.promotion}</td>
                <td className="p-2">{product.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-gray-300 text-gray-700 px-3 py-1 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-gray-300 text-gray-700 px-3 py-1 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkuManagement;


