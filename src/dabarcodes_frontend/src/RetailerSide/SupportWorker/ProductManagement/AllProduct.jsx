
// correct 
// import React, {useState, useEffect} from "react";
// import BackButton from "../Reusable/BackButton";
// import {MdOutlineModeEdit} from "react-icons/md";
// import {MdDeleteOutline} from "react-icons/md";
// import HeaderWithButton from "../Reusable/HeaderWithButton";

// import {HiAdjustmentsHorizontal} from "react-icons/hi2";
// import {IoSearchOutline} from "react-icons/io5";
// import AddProductForm from "./AddProductForm";
// import ProductUploadModal from "../Modals/ProductUploadModal";

// const AllProduct = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortConfig, setSortConfig] = useState({
//     key: "id", // Default key for sorting
//     direction: "asc",
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 6;

//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const data = [
//         {
//           id: 52,
//           name: "FreshCo Organic Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",
//           store: "Flossi Ewoldt",
//           supplier: "Flossi Ewoldt",
//           image: "/image/drink.png",
//         },
//         {
//           id: 23,
//           name: "FreshCo Organic Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",
//           store: "Flossi Ewoldt",
//           supplier: "Flossi Ewoldt",
//           image: "/image/drink.png",
//         },
//         {
//           id: 12,
//           name: "FreshCo Organic Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",
//           store: "Flossi Ewoldt",
//           supplier: "Flossi Ewoldt",
//           image: "/image/drink.png",
//         },
//         {
//           id: 2,
//           name: "FreshCo Organic Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",
//           store: "Flossi Ewoldt",
//           supplier: "Flossi Ewoldt",
//           image: "/image/drink.png",
//         },
//         {
//           id: 56,
//           name: "FreshCo Organic Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",
//           store: "Flossi Ewoldt",
//           supplier: "Flossi Ewoldt",
//           image: "/image/drink.png",
//         },
//         {
//           id: 58,
//           name: "Baverage Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",
//           store: "Flossi Ewoldt",
//           supplier: "Flossi Ewoldt",
//           image: "/image/drink.png",
//         },
//         {
//           id: 56,
//           name: "FreshCo Organic Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",
//           store: "Flossi Ewoldt",
//           supplier: "Flossi Ewoldt",
//           image: "/image/drink.png",
//         },
//         {
//           id: 53,
//           name: "FreshCo Organic Almond",
//           category: "Bakery",
//           brand: "FreshCo Brands",
//           store: "Flossi Ewoldt",
//           supplier: "Flossi Ewoldt",
//           image: "/image/drink.png",
//         },
//         // Add more products as needed
//       ];
//       setProducts(data);
//       setFilteredProducts(data);
//     };

//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     const filtered = products.filter((product) =>
//       product.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   }, [searchTerm, products]);

//   // Sorting functionality
//   const handleSort = (key) => {
//     let direction = "asc";
//     if (sortConfig.key === key && sortConfig.direction === "asc") {
//       direction = "desc";
//     }
//     setSortConfig({key, direction});

//     const sortedProducts = [...filteredProducts].sort((a, b) => {
//       if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
//       if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
//       return 0;
//     });

//     setFilteredProducts(sortedProducts);
//   };

//   const handleEdit = () => {
//     if (selectedProduct) {
//       setShowEditModal(true);
//     }
//   };

//   const handleDelete = (id) => {
//     const updatedProducts = filteredProducts.filter(
//       (product) => product.id !== id
//     );
//     setFilteredProducts(updatedProducts);
//     setProducts(updatedProducts); // Update original products state
//   };

//   const handleCheckboxClick = (product) => {
//     setSelectedProduct(product);
//   };

//   const handleSave = () => {
//     const updatedProducts = products.map((product) =>
//       product.id === selectedProduct.id ? selectedProduct : product
//     );
//     setProducts(updatedProducts);
//     setFilteredProducts(updatedProducts);
//     setShowEditModal(false);
//     setSelectedProduct(null); // Clear selected product
//   };

//   const totalPages = Math.ceil(filteredProducts.length / rowsPerPage);
//   const displayedProducts = filteredProducts.slice(
//     (currentPage - 1) * rowsPerPage,
//     currentPage * rowsPerPage
//   );

// const handleImageUpload = (event) => {
//   const file = event.target.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setSelectedImage(reader.result); // This will set the image data URL
//     };
//     reader.readAsDataURL(file);
//   }
// };
//   const modalOptions = [
//     {
//       label: "Add Single Product",
//       component: (closeModal) => <AddProductForm closeModal={closeModal} />,
//     },
//     {
//       label: "Add Multiple Products",
//       component: (closeModal) => (
//         <ProductUploadModal isOpen={true} closeModal={closeModal} />
//       ),
//     },
//   ];
//   return (
//     <div className="container mx-auto p-4">
//       {/* <HeaderWithButton
//         heading="All Products"
//         buttonText="Add new Products"
//         modalTitle="Add New Product"
//         modalContent={<AddProductForm />}
//       /> */}
//       {/* <HeaderWithButton
//         heading="All Products"
//         buttonText="Add new Products"
//         modalTitle="Add New Product"
//       /> */}
//       <HeaderWithButton
//         heading="All Products"
//         buttonText="Add New Product"
//         modalOptions={modalOptions}
//       />

//       {/* <HeaderWithButton
//         heading="All Products"
//         buttonText="Add New Product"
//         modalTitle="Choose Product Type"
//         options={options} // Pass the options array
//       /> */}

//       {/* Tabs */}
//       <div className="flex flex-wrap justify-between items-center my-4">
//         <div className="flex flex-wrap gap-4">
//           <button className="btn">Products</button>
//           <button className="btn">Suppliers</button>
//           <button className="btn">Promotions</button>
//           <button className="btn">Category</button>
//           <button className="btn">Brands</button>
//         </div>
//       </div>
//       <hr className="mb-4" />
//       {/* Search and Sort */}
//       <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
//         <div className="flex flex-wrap gap-2 justify-start">
//           <button
//             onClick={handleEdit} // Open edit modal
//             // className="bg-[#0D90C1] border border-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             disabled={!selectedProduct} // Disable if no product is selected
//           >
//             <MdOutlineModeEdit className="text-2xl" />
//           </button>
//           <button
//             onClick={() => handleDelete(selectedProduct?.id)}
//             // className="bg-red-500 border border-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//             disabled={!selectedProduct} // Disable if no product is selected
//           >
//             <MdDeleteOutline className="text-2xl" />
//           </button>
//         </div>
//         {/* <div className="flex justify-end">
//           <button
//             onClick={() => handleSort("id")} // Sorting by Product ID
//             className="bg-gray-200 p-2  w-full sm:w-auto rounded-md hover:bg-gray-300"
//           >
//             Sort by ID
//           </button>
//           <input
//             type="text"
//             placeholder="Search"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="border rounded p-2 w-full sm:w-auto ml-2"
           
//           />
          
//         </div> */}
//         <div className="flex justify-end">
//           <button
//             onClick={() => handleSort("id")} // Sorting by Product ID
//             className="bg-gray-200 p-2 w-full sm:w-auto rounded-md hover:bg-gray-300 flex items-center"
//           >
//             Sort by ID
//             <HiAdjustmentsHorizontal className="ml-2" />
//           </button>
//           <div className="relative ml-2 w-full sm:w-auto">
//             <input
//               type="text"
//               placeholder="Search"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="border rounded p-2 w-full pr-10" // Adjust padding for icon space
//             />
//             <IoSearchOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//           </div>
//         </div>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="table-auto w-full text-left">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="p-2">
//                 <input type="checkbox" />
//               </th>

//               <th
//                 className="p-2 cursor-pointer"
//                 onClick={() => handleSort("id")} // Sort by Product ID
//               >
//                 Product ID
//               </th>
//               <th
//                 className="p-2 cursor-pointer"
//                 onClick={() => handleSort("image")} // Sort by Product Name
//               >
//                 Product Image
//               </th>
//               <th
//                 className="p-2 cursor-pointer"
//                 onClick={() => handleSort("name")} // Sort by Product Name
//               >
//                 Product Name
//               </th>
//               <th
//                 className="p-2 cursor-pointer"
//                 onClick={() => handleSort("category")} // Sort by Category
//               >
//                 Category
//               </th>
//               <th
//                 className="p-2 cursor-pointer"
//                 onClick={() => handleSort("brand")} // Sort by Brand
//               >
//                 Brand Name
//               </th>
//               <th className="p-2">Store Name</th>
//               <th className="p-2">Supplier Name</th>
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
//                 <td className="p-2">{product.store}</td>
//                 <td className="p-2">{product.supplier}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
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

//       {/* Edit Modal */}


//       {showEditModal && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
//           onClick={() => setShowEditModal(false)}
//         >
//           <div
//             className="bg-white p-6 rounded-lg shadow-lg w-[700px] max-h-[90vh] overflow-y-auto"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h2 className="text-xl font-bold text-center mb-6">
//               Edit Product Name Details
//             </h2>
//             <form>
//               {/* Product Image */}
//               <div className="mb-4">
//                 <label className="block text-sm font-semibold mb-1">
//                   Product Image
//                 </label>
//                 <div className="flex items-center space-x-2">
//                   {selectedImage ? (
//                     <img
//                       src={selectedImage}
//                       alt="Product"
//                       className="h-12 w-12 object-cover rounded"
//                     />
//                   ) : (
//                     <img
//                       src="your-placeholder-image-url"
//                       alt="Product Placeholder"
//                       className="h-12 w-12 object-cover rounded"
//                     />
//                   )}
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageUpload}
//                     className="hidden"
//                     id="file-upload"
//                   />
//                   <label
//                     htmlFor="file-upload"
//                     className="text-gray-600 bg-gray-200 px-3 py-1 rounded cursor-pointer"
//                   >
//                     Upload Image
//                   </label>
//                 </div>
//               </div>

//               {/* First Row (Product Name and Supplier Name) */}
//               <div className="flex space-x-4 mb-4">
//                 {/* Product Name */}
//                 <div className="flex-1">
//                   <label className="block text-sm font-semibold mb-1">
//                     Product Name
//                   </label>
//                   <input
//                     type="text"
//                     value={selectedProduct?.name || ""}
//                     onChange={(e) =>
//                       setSelectedProduct({
//                         ...selectedProduct,
//                         name: e.target.value,
//                       })
//                     }
//                     className="border p-2 w-full rounded"
//                     placeholder="Enter Product Name"
//                   />
//                 </div>

//                 {/* Supplier Name */}
//                 <div className="flex-1">
//                   <label className="block text-sm font-semibold mb-1">
//                     Supplier Name
//                   </label>
//                   <input
//                     type="text"
//                     value={selectedProduct?.supplier || ""}
//                     onChange={(e) =>
//                       setSelectedProduct({
//                         ...selectedProduct,
//                         supplier: e.target.value,
//                       })
//                     }
//                     className="border p-2 w-full rounded"
//                     placeholder="Enter Supplier Name"
//                   />
//                 </div>
//               </div>

//               {/* Second Row (Brand Name and Umbrella Brand) */}
//               <div className="flex space-x-4 mb-4">
//                 {/* Brand Name */}
//                 <div className="flex-1">
//                   <label className="block text-sm font-semibold mb-1">
//                     Brand Name
//                   </label>
//                   <input
//                     type="text"
//                     value={selectedProduct?.brand || ""}
//                     onChange={(e) =>
//                       setSelectedProduct({
//                         ...selectedProduct,
//                         brand: e.target.value,
//                       })
//                     }
//                     className="border p-2 w-full rounded"
//                     placeholder="Enter Brand Name"
//                   />
//                 </div>

//                 {/* Umbrella Brand */}
//                 <div className="flex-1">
//                   <label className="block text-sm font-semibold mb-1">
//                     Umbrella Brand
//                   </label>
//                   <input
//                     type="text"
//                     value={selectedProduct?.umbrella || ""}
//                     onChange={(e) =>
//                       setSelectedProduct({
//                         ...selectedProduct,
//                         umbrella: e.target.value,
//                       })
//                     }
//                     className="border p-2 w-full rounded"
//                     placeholder="Enter Umbrella Brand"
//                   />
//                 </div>
//               </div>

//               {/* Original Price */}
//               <div className="mb-4">
//                 <label className="block text-sm font-semibold mb-1">
//                   Original Price
//                 </label>
//                 <input
//                   type="text"
//                   value={selectedProduct?.price || ""}
//                   onChange={(e) =>
//                     setSelectedProduct({
//                       ...selectedProduct,
//                       price: e.target.value,
//                     })
//                   }
//                   className="border p-2 w-full rounded"
//                   placeholder="Enter Original Price"
//                 />
//               </div>

//               {/* Product Description */}
//               <div className="mb-6">
//                 <label className="block text-sm font-semibold mb-1">
//                   Product Description
//                 </label>
//                 <textarea
//                   value={selectedProduct?.description || ""}
//                   onChange={(e) =>
//                     setSelectedProduct({
//                       ...selectedProduct,
//                       description: e.target.value,
//                     })
//                   }
//                   className="border p-2 w-full h-20 rounded"
//                   placeholder="Enter Product Description"
//                 />
//               </div>

//               {/* Buttons */}
//               <div className="flex justify-between">
//                 <button
//                   type="button"
//                   className="bg-red-200 text-red-700 px-4 py-2 rounded hover:bg-red-300"
//                 >
//                   Deactivate Product
//                 </button>
//                 <button
//                   type="button"
//                   className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                   onClick={handleSave}
//                 >
//                   Update Details
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllProduct;
// correct end





//     import React, {useState, useEffect} from "react";
// import BackButton from "../Reusable/BackButton";
// import {MdOutlineModeEdit} from "react-icons/md";
// import {MdDeleteOutline} from "react-icons/md";
// import EditProductModal from "../Modals/EditProductModal";
// import HeaderWithButton from "../Reusable/HeaderWithButton";

// import {HiAdjustmentsHorizontal} from "react-icons/hi2";
// import {IoSearchOutline} from "react-icons/io5";
// import AddProductForm from "./AddProductForm";
// import ProductUploadModal from "../Modals/ProductUploadModal";

// const AllProduct = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortConfig, setSortConfig] = useState({
//     key: "id", // Default key for sorting
//     direction: "asc",
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 6;


//   // const [selectedImage, setSelectedImage] = useState(null);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showEditModal, setShowEditModal] = useState(false);




//     // const handleImageUpload = (e) => {
//     //   const file = e.target.files[0];
//     //   if (file) {
//     //     const reader = new FileReader();
//     //     reader.onloadend = () => {
//     //       setSelectedProduct({...selectedProduct, image: reader.result});
//     //     };
//     //     reader.readAsDataURL(file);
//     //   }
//     // };

//   useEffect(() => {
//     const fetchProducts = async () => {
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

//   useEffect(() => {
//     const filtered = products.filter((product) =>
//       product.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   }, [searchTerm, products]);

//   // Sorting functionality
//   const handleSort = (key) => {
//     let direction = "asc";
//     if (sortConfig.key === key && sortConfig.direction === "asc") {
//       direction = "desc";
//     }
//     setSortConfig({key, direction});

//     const sortedProducts = [...filteredProducts].sort((a, b) => {
//       if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
//       if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
//       return 0;
//     });

//     setFilteredProducts(sortedProducts);
//   };


//   const handleDelete = (id) => {
//     const updatedProducts = filteredProducts.filter(
//       (product) => product.id !== id
//     );
//     setFilteredProducts(updatedProducts);
//     setProducts(updatedProducts); // Update original products state
//   };

//   const handleCheckboxClick = (product) => {
//     setSelectedProduct(product);
//   };

//   const handleSave = () => {
//     const updatedProducts = products.map((product) =>
//       product.id === selectedProduct.id ? selectedProduct : product
//     );
//     setProducts(updatedProducts);
//     setFilteredProducts(updatedProducts);
//     setShowEditModal(false);
//     setSelectedProduct(null); // Clear selected product
//   };

//   const totalPages = Math.ceil(filteredProducts.length / rowsPerPage);
//   const displayedProducts = filteredProducts.slice(
//     (currentPage - 1) * rowsPerPage,
//     currentPage * rowsPerPage
//   );


//   const modalOptions = [
//     {
//       label: "Add Single Product",
//       // component: (closeModal) => <AddProductForm closeModal={closeModal} />,
//        component: (closeModal) => <AddProductForm closeModal={closeModal} handleAddProduct={handleAddProduct} />,
//     },
//     {
//       label: "Add Multiple Products",
//       component: (closeModal) => (
//         <ProductUploadModal isOpen={true} closeModal={closeModal} />
//       ),
//     },
//   ];
//   const handleAddProduct = (newProduct) => {
//     const updatedProducts = [...products, newProduct];
//     setProducts(updatedProducts);
//     setFilteredProducts(updatedProducts);
//   };
//   return (
//     <div className="mx-auto p-4 ">
//       <HeaderWithButton
//         heading="All Products"
//         buttonText="Add New Product"
//         modalOptions={modalOptions}
//       />

//       {/* Tabs */}
//       <div className="flex flex-wrap justify-between items-center my-4 ">
//         <div className="flex flex-wrap gap-4">
//           <button className="btn">Products</button>
//           <button className="btn">Suppliers</button>
//           <button className="btn">Promotions</button>
//           <button className="btn">Category</button>
//           <button className="btn">Brands</button>
//         </div>
//       </div>
//       <hr className="mb-4" />
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

//         <div className="flex justify-end">
//           <button
//             onClick={() => handleSort("id")} // Sorting by Product ID
//             className="bg-gray-200 p-2 w-full sm:w-auto rounded-md hover:bg-gray-300 flex items-center"
//           >
//             Sort by ID
//             <HiAdjustmentsHorizontal className="ml-2" />
//           </button>
//           <div className="relative ml-2 w-full sm:w-auto">
//             <input
//               type="text"
//               placeholder="Search"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="border rounded p-2 w-full pr-10" // Adjust padding for icon space
//             />
//             <IoSearchOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//           </div>
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
//                 onClick={() => handleSort("id")}
//               >
//                 Product ID
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
//               <th className="p-2">Umbrella Brand Name</th>
//               <th className="p-2">Price</th>
//               <th className="p-2">Promotion Price</th>
//               <th className="p-2">Store Name</th>
//               <th className="p-2">Store Id</th>
//               <th className="p-2">Supplier Name</th>
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

//       {/* Edit Modal */}
//     </div>
//   );
// };

// export default AllProduct;





 import React, {useState, useEffect} from "react";

import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {MdOutlineModeEdit} from "react-icons/md";
import {MdDeleteOutline} from "react-icons/md";
import EditProductModal from "../Modals/EditProductModal";
import HeaderWithButton from "../Reusable/HeaderWithButton";

import {HiAdjustmentsHorizontal} from "react-icons/hi2";
import {IoSearchOutline} from "react-icons/io5";
import AddProductForm from "./AddProductForm";
import ProductUploadModal from "../Modals/ProductUploadModal";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "id", // Default key for sorting
    direction: "asc",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6;

  // const [selectedImage, setSelectedImage] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  // const handleImageUpload = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setSelectedProduct({...selectedProduct, image: reader.result});
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  useEffect(() => {
    const fetchProducts = async () => {
      const data = [
        {
          id: 52,
          name: "FreshCo Organic Almond",
          category: "Bakery",
          brand: "FreshCo Brands",
          store: "Flossi Ewoldt",
          supplier: "Flossi Ewoldt",
          image: "/image/drink.png",
          price: "25",
          promotionPrice: "15",
          umbrellaBrandName: "P&G",
          storeId: "213",
        },
        {
          id: 23,
          name: "FreshCo Organic Almond",
          category: "Bakery",
          brand: "FreshCo Brands",
          store: "Flossi Ewoldt",
          supplier: "Flossi Ewoldt",
          image: "/image/token.png",
          price: "25",
          promotionPrice: "15",
          umbrellaBrandName: "P&G",
          storeId: "213",
        },
        {
          id: 12,
          name: "FreshCo Organic Almond",
          category: "Bakery",
          brand: "FreshCo Brands",
          store: "Flossi Ewoldt",
          supplier: "Flossi Ewoldt",
          image: "/image/drink.png",
          price: "25",
          promotionPrice: "15",
          umbrellaBrandName: "P&G",
          storeId: "213",
        },
        {
          id: 2,
          name: "FreshCo Organic Almond",
          category: "Bakery",
          brand: "FreshCo Brands",
          store: "Flossi Ewoldt",
          supplier: "Flossi Ewoldt",
          image: "/image/drink.png",
          price: "25",
          promotionPrice: "15",
          umbrellaBrandName: "P&G",
          storeId: "213",
        },
        {
          id: 56,
          name: "FreshCo Organic Almond",
          category: "Bakery",
          brand: "FreshCo Brands",
          store: "Flossi Ewoldt",
          supplier: "Flossi Ewoldt",
          image: "/image/drink.png",
          price: "25",
          promotionPrice: "15",
          umbrellaBrandName: "P&G",
          storeId: "213",
        },
        {
          id: 58,
          name: "Baverage Almond",
          category: "Bakery",
          brand: "FreshCo Brands",
          store: "Flossi Ewoldt",
          supplier: "Flossi Ewoldt",
          image: "/image/drink.png",
          price: "25",
          promotionPrice: "15",
          umbrellaBrandName: "P&G",
          storeId: "213",
        },
        {
          id: 56,
          name: "FreshCo Organic Almond",
          category: "Bakery",
          brand: "FreshCo Brands",
          store: "Flossi Ewoldt",
          supplier: "Flossi Ewoldt",
          image: "/image/drink.png",
          price: "25",
          promotionPrice: "15",
          umbrellaBrandName: "P&G",
          storeId: "213",
        },
        {
          id: 53,
          name: "FreshCo Organic Almond",
          category: "Bakery",
          brand: "FreshCo Brands",
          store: "Flossi Ewoldt",
          supplier: "Flossi Ewoldt",
          image: "/image/drink.png",
          price: "25",
          promotionPrice: "15",
          umbrellaBrandName: "P&G",
          storeId: "213",
        },
      ];
      setProducts(data);
      setFilteredProducts(data);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  // Sorting functionality
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({key, direction});

    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setFilteredProducts(sortedProducts);
  };
    const handleCheckboxClick = (product) => {
      setSelectedProduct(product);
    };

  const handleAddProduct = (newProduct) => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
    toast.success("Product added successfully!"); // Success toast
  };

  const handleDelete = (id) => {
    const updatedProducts = filteredProducts.filter(
      (product) => product.id !== id
    );
    setFilteredProducts(updatedProducts);
    setProducts(updatedProducts);
    toast.success("Product deleted successfully!"); // Success toast
  };

  const handleSave = () => {
    const updatedProducts = products.map((product) =>
      product.id === selectedProduct.id ? selectedProduct : product
    );
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
    setShowEditModal(false);
    setSelectedProduct(null);
    toast.success("Product updated successfully!"); // Success toast
  };
  const totalPages = Math.ceil(filteredProducts.length / rowsPerPage);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const modalOptions = [
    {
      label: "Add Single Product",
      // component: (closeModal) => <AddProductForm closeModal={closeModal} />,
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
    <div className="mx-auto p-4 ">
      <HeaderWithButton
        heading="All Products"
        buttonText="Add New Product"
        modalOptions={modalOptions}
      />
      <ToastContainer />
      {/* Tabs */}
      <div className="flex flex-wrap justify-between items-center my-4 ">
        <div className="flex flex-wrap gap-4">
          <button className="btn">Products</button>
          <button className="btn">Suppliers</button>
          <button className="btn">Promotions</button>
          <button className="btn">Category</button>
          <button className="btn">Brands</button>
        </div>
      </div>
      <hr className="mb-4" />
      {/* Search and Sort */}
      <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
        <div className="flex flex-wrap gap-2 justify-start">
          <button onClick={() => setShowEditModal(true)}>
            <MdOutlineModeEdit className="text-2xl" />
          </button>

          {/* Modal Component */}
          {showEditModal && (
            <EditProductModal
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
              showEditModal={showEditModal}
              setShowEditModal={setShowEditModal}
              onSave={handleSave} // Pass the handleSave function here
            />
          )}
          <button
            onClick={() => handleDelete(selectedProduct?.id)}
            disabled={!selectedProduct}
          >
            <MdDeleteOutline className="text-2xl" />
          </button>
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => handleSort("id")} // Sorting by Product ID
            className="bg-gray-200 p-2 w-full sm:w-auto rounded-md hover:bg-gray-300 flex items-center"
          >
            Sort by ID
            <HiAdjustmentsHorizontal className="ml-2" />
          </button>
          <div className="relative ml-2 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded p-2 w-full pr-10" 
            />
            <IoSearchOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Table */}

      <div className="overflow-x-auto w-full">
        <table className="min-w-full table-auto text-left ">
          <thead>
            <tr className="bg-gray-100 ">
              <th className="p-2">
                <input type="checkbox" />
              </th>
              <th
                className="p-2 cursor-pointer"
                onClick={() => handleSort("id")}
              >
                Product ID
              </th>
              <th
                className="p-2 cursor-pointer"
                onClick={() => handleSort("image")}
              >
                Product Image
              </th>
              <th
                className="p-2 cursor-pointer"
                onClick={() => handleSort("name")}
              >
                Product Name
              </th>
              <th
                className="p-2 cursor-pointer"
                onClick={() => handleSort("category")}
              >
                Category
              </th>
              <th
                className="p-2 cursor-pointer"
                onClick={() => handleSort("brand")}
              >
                Brand Name
              </th>
              <th className="p-2">Umbrella Brand Name</th>
              <th className="p-2">Price</th>
              <th className="p-2">Promotion Price</th>
              <th className="p-2">Store Name</th>
              <th className="p-2">Store Id</th>
              <th className="p-2">Supplier Name</th>
            </tr>
          </thead>

          <tbody className="border-l-4 border-blue-400">
            {displayedProducts.map((product) => (
              <tr key={product.id} className="border-t">
                <td className="p-2">
                  <input
                    type="checkbox"
                    checked={selectedProduct?.id === product.id}
                    onChange={() => handleCheckboxClick(product)}
                  />
                </td>
                <td className="p-2">{product.id}</td>
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
                <td className="p-2">{product.umbrellaBrandName}</td>
                <td className="p-2">{product.price}</td>
                <td className="p-2">{product.promotionPrice}</td>
                <td className="p-2">{product.store}</td>
                <td className="p-2">{product.storeId}</td>
                <td className="p-2">{product.supplier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
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
  );
};

export default AllProduct;














  // {
  //   showEditModal && (
  //     <div
  //       className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
  //       onClick={() => setShowEditModal(false)}
  //     >
  //       <div
  //         className="bg-white p-6 rounded-lg shadow-lg w-[700px] max-h-[90vh] overflow-y-auto"
  //         onClick={(e) => e.stopPropagation()}
  //       >
  //         <h2 className="text-xl font-bold text-center mb-6">
  //           Edit Product Name Details
  //         </h2>
  //         <form>
  //           {/* Product Image */}
  //           <div className="mb-4">
  //             <label className="block text-sm font-semibold mb-1">
  //               Product Image
  //             </label>
  //             <div className="flex items-center space-x-2">
  //               {selectedImage ? (
  //                 <img
  //                   src={selectedImage}
  //                   alt="Product"
  //                   className="h-12 w-12 object-cover rounded"
  //                 />
  //               ) : (
  //                 <img
  //                   src="your-placeholder-image-url"
  //                   alt="Product Placeholder"
  //                   className="h-12 w-12 object-cover rounded"
  //                 />
  //               )}
  //               <input
  //                 type="file"
  //                 accept="image/*"
  //                 onChange={handleImageUpload}
  //                 className="hidden"
  //                 id="file-upload"
  //               />
  //               <label
  //                 htmlFor="file-upload"
  //                 className="text-gray-600 bg-gray-200 px-3 py-1 rounded cursor-pointer"
  //               >
  //                 Upload Image
  //               </label>
  //             </div>
  //           </div>

  //           {/* First Row (Product Name and Supplier Name) */}
  //           <div className="flex space-x-4 mb-4">
  //             {/* Product Name */}
  //             <div className="flex-1">
  //               <label className="block text-sm font-semibold mb-1">
  //                 Product Name
  //               </label>
  //               <input
  //                 type="text"
  //                 value={selectedProduct?.name || ""}
  //                 onChange={(e) =>
  //                   setSelectedProduct({
  //                     ...selectedProduct,
  //                     name: e.target.value,
  //                   })
  //                 }
  //                 className="border p-2 w-full rounded"
  //                 placeholder="Enter Product Name"
  //               />
  //             </div>

  //             {/* Supplier Name */}
  //             <div className="flex-1">
  //               <label className="block text-sm font-semibold mb-1">
  //                 Supplier Name
  //               </label>
  //               <input
  //                 type="text"
  //                 value={selectedProduct?.supplier || ""}
  //                 onChange={(e) =>
  //                   setSelectedProduct({
  //                     ...selectedProduct,
  //                     supplier: e.target.value,
  //                   })
  //                 }
  //                 className="border p-2 w-full rounded"
  //                 placeholder="Enter Supplier Name"
  //               />
  //             </div>
  //           </div>

  //           {/* Second Row (Brand Name and Umbrella Brand) */}
  //           <div className="flex space-x-4 mb-4">
  //             {/* Brand Name */}
  //             <div className="flex-1">
  //               <label className="block text-sm font-semibold mb-1">
  //                 Brand Name
  //               </label>
  //               <input
  //                 type="text"
  //                 value={selectedProduct?.brand || ""}
  //                 onChange={(e) =>
  //                   setSelectedProduct({
  //                     ...selectedProduct,
  //                     brand: e.target.value,
  //                   })
  //                 }
  //                 className="border p-2 w-full rounded"
  //                 placeholder="Enter Brand Name"
  //               />
  //             </div>

  //             {/* Umbrella Brand */}
  //             <div className="flex-1">
  //               <label className="block text-sm font-semibold mb-1">
  //                 Umbrella Brand
  //               </label>
  //               <input
  //                 type="text"
  //                 value={selectedProduct?.umbrella || ""}
  //                 onChange={(e) =>
  //                   setSelectedProduct({
  //                     ...selectedProduct,
  //                     umbrella: e.target.value,
  //                   })
  //                 }
  //                 className="border p-2 w-full rounded"
  //                 placeholder="Enter Umbrella Brand"
  //               />
  //             </div>
  //           </div>

  //           {/* Original Price */}
  //           <div className="mb-4">
  //             <label className="block text-sm font-semibold mb-1">
  //               Original Price
  //             </label>
  //             <input
  //               type="text"
  //               value={selectedProduct?.price || ""}
  //               onChange={(e) =>
  //                 setSelectedProduct({
  //                   ...selectedProduct,
  //                   price: e.target.value,
  //                 })
  //               }
  //               className="border p-2 w-full rounded"
  //               placeholder="Enter Original Price"
  //             />
  //           </div>

  //           {/* Product Description */}
  //           <div className="mb-6">
  //             <label className="block text-sm font-semibold mb-1">
  //               Product Description
  //             </label>
  //             <textarea
  //               value={selectedProduct?.description || ""}
  //               onChange={(e) =>
  //                 setSelectedProduct({
  //                   ...selectedProduct,
  //                   description: e.target.value,
  //                 })
  //               }
  //               className="border p-2 w-full h-20 rounded"
  //               placeholder="Enter Product Description"
  //             />
  //           </div>

  //           {/* Buttons */}
  //           <div className="flex justify-between">
  //             <button
  //               type="button"
  //               className="bg-red-200 text-red-700 px-4 py-2 rounded hover:bg-red-300"
  //             >
  //               Deactivate Product
  //             </button>
  //             <button
  //               type="button"
  //               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
  //               onClick={handleSave}
  //             >
  //               Update Details
  //             </button>
  //           </div>
  //         </form>
  //       </div>
  //     </div>
  //   );
  // }