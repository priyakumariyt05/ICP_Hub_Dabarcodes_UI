// import React, {useState, useEffect} from "react";
// import BackButton from "../Reusable/BackButton";
// import {MdOutlineModeEdit} from "react-icons/md";
// import {MdDeleteOutline} from "react-icons/md";
// import EditProductModal from "../Modals/EditProductModal";
// import HeaderWithButton from "../Reusable/HeaderWithButton";

// import {HiAdjustmentsHorizontal} from "react-icons/hi2";
// import {IoSearchOutline} from "react-icons/io5";


// import AddStoreModal from "../Modals/AddStoreModal";
// import StoreUploadModal from "../Modals/StoreUploadModal";

// const Store = () => {
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

//   // const handleImageUpload = (e) => {
//   //   const file = e.target.files[0];
//   //   if (file) {
//   //     const reader = new FileReader();
//   //     reader.onloadend = () => {
//   //       setSelectedProduct({...selectedProduct, image: reader.result});
//   //     };
//   //     reader.readAsDataURL(file);
//   //   }
//   // };

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

//   // const handleEdit = () => {
//   //   if (selectedProduct) {
//   //     setShowEditModal(true);
//   //   }
//   // };

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
//       label: "Add Single Store",
//       // component: (closeModal) => <AddProductForm closeModal={closeModal} />,
//       component: (closeModal) => (
//         <AddStoreModal
//           closeModal={closeModal}
//           handleAddProduct={handleAddProduct}
//         />
//       ),
//     },
//     {
//       label: "Add Multiple Store",
//       component: (closeModal) => (
//         <StoreUploadModal isOpen={true} closeModal={closeModal} />
//       ),
//     },
//   ];
//   const handleAddProduct = (newProduct) => {
//     const updatedProducts = [...products, newProduct];
//     setProducts(updatedProducts);
//     setFilteredProducts(updatedProducts);
//   };
//   return (
//     <div className="container mx-auto p-4">
//       <HeaderWithButton
//         heading="All Stores"
//         buttonText="Add New Store"
//         modalOptions={modalOptions}
//       />

//       {/* Tabs */}
//       <div className="flex flex-wrap justify-between items-center my-4 ">

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
              
//               >
//                 Store ID
//               </th>
//               <th
//                 className="p-2 cursor-pointer"
            
//               >
//                 Store Name
//               </th>
//               <th
//                 className="p-2 cursor-pointer"
             
//               >
//            Store Location
//               </th>
//               <th
//                 className="p-2 cursor-pointer"
              
//               >
//            Store Type
//               </th>
//               <th
//                 className="p-2 cursor-pointer"
            
//               >
//                Associate Supplier
//               </th>
//               <th className="p-2">Total Products</th>
       
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

// export default Store;
// import React, {useState, useEffect} from "react";
// import {IoSearchOutline} from "react-icons/io5";
// import {HiAdjustmentsHorizontal} from "react-icons/hi2";
// import HeaderWithButton from "../Reusable/HeaderWithButton";
// import AddStoreModal from "../Modals/AddStoreModal";
// import StoreUploadModal from "../Modals/StoreUploadModal";

// const Store = () => {
//   // Sample dynamic data
//   const [data, setData] = useState([
//     {
//       id: "S001",
//       name: "Reliance Fresh",
//       location: "Mumbai, India",
//       type: "Supermarket",
//       suppliers: 560,
//       products: 5005,
//     },
//     {
//       id: "S002",
//       name: "Reliance Mart",
//       location: "Delhi, India",
//       type: "Hypermarket",
//       suppliers: 120,
//       products: 12000,
//     },
//     {
//       id: "S003",
//       name: "Reliance Trends",
//       location: "Bangalore, India",
//       type: "Supermarket",
//       suppliers: 480,
//       products: 4005,
//     },
//     // Add more data as needed
//   ]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOrder, setSortOrder] = useState("asc");

//   // Filter and sort data based on search and sort inputs
//   const filteredData = data
//     .filter(
//       (item) =>
//         item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.location.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .sort((a, b) => {
//       if (sortOrder === "asc") return a.id.localeCompare(b.id);
//       return b.id.localeCompare(a.id);
//     });

//   const handleSearch = (e) => setSearchTerm(e.target.value);
//   const toggleSortOrder = () =>
//     setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//     const modalOptions = [
//       {
//         label: "Add Single Store",
//         // component: (closeModal) => <AddProductForm closeModal={closeModal} />,
//         component: (closeModal) => (
//           <AddStoreModal
//             closeModal={closeModal}
//             handleAddProduct={handleAddProduct}
//           />
//         ),
//       },
//       {
//         label: "Add Multiple Store",
//         component: (closeModal) => (
//           <StoreUploadModal isOpen={true} closeModal={closeModal} />
//         ),
//       },
//     ];
//       const handleAddProduct = (newProduct) => {
//         const updatedProducts = [...products, newProduct];
//         setProducts(updatedProducts);
//         setFilteredProducts(updatedProducts);
//       };

//   return (
//     <div className="p-4">
//       <HeaderWithButton
//         heading="All Store"
//         buttonText="Add New Store"
//         modalOptions={modalOptions}
//       />

//       <div className="flex justify-end mb-4 mt-4">
//         <button
//           onClick={toggleSortOrder} // Sorting by Product ID
//           className="bg-gray-200 p-2 w-full sm:w-auto rounded-md hover:bg-gray-300 flex items-center"
//         >
//           Sort by ID
//           <HiAdjustmentsHorizontal className="ml-2" />
//         </button>
//         <div className="relative ml-2 w-full sm:w-auto">
//           <input
//             type="text"
//             placeholder="Search"
//             value={searchTerm}
//             onChange={handleSearch}
//             className="border rounded p-2 w-full pr-10" // Adjust padding for icon space
//           />
//           <IoSearchOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//         </div>
//       </div>
//       <table className="min-w-full border">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="py-2 px-4">
//               <input type="checkbox" />
//             </th>
//             <th className="py-2 px-4 cursor-pointer">Store ID</th>
//             <th className="py-2 px-4">Store Name</th>
//             <th className="py-2 px-4">Store Location</th>
//             <th className="py-2 px-4">Store Type</th>
//             <th className="py-2 px-4">Associated Suppliers</th>
//             <th className="py-2 px-4">Total Products</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((item) => (
//             <tr key={item.id} className="border-b">
//               <td className="py-2 px-4">
//                 <input type="checkbox" />
//               </td>
//               <td className="py-2 px-4">{item.id}</td>
//               <td className="py-2 px-4">{item.name}</td>
//               <td className="py-2 px-4">{item.location}</td>
//               <td className="py-2 px-4">{item.type}</td>
//               <td className="py-2 px-4">{item.suppliers}</td>
//               <td className="py-2 px-4">{item.products}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="flex justify-between items-center mt-4">
//         <button className="px-4 py-2 border rounded-lg">Previous</button>
//         <p>Page 1 of 10</p>
//         <button className="px-4 py-2 border rounded-lg">Next</button>
//       </div>
//     </div>
//   );
// };

// export default Store;
import React, {useState, useEffect} from "react";
import {IoSearchOutline} from "react-icons/io5";
import {HiAdjustmentsHorizontal} from "react-icons/hi2";
import HeaderWithButton from "../Reusable/HeaderWithButton";
import AddStoreModal from "../Modals/AddStoreModal";
import StoreUploadModal from "../Modals/StoreUploadModal";
import {MdOutlineModeEdit} from "react-icons/md";
import {MdDeleteOutline} from "react-icons/md";

const Store = () => {
  const [data, setData] = useState([
    {
      id: "S001",
      name: "Reliance Fresh",
      location: "Mumbai, India",
      type: "Supermarket",
      suppliers: 560,
      products: 5005,
      activePromotions:2,
    },
    {
      id: "S002",
      name: "Reliance Mart",
      location: "Delhi, India",
      type: "Hypermarket",
      suppliers: 120,
      products: 12000,
    },
    {
      id: "S003",
      name: "Reliance Trends",
      location: "Bangalore, India",
      type: "Supermarket",
      suppliers: 480,
      products: 4005,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Function to add a new store to the list
  const handleAddStore = (newStore) => {
    setData((prevData) => [...prevData, newStore]);
  };

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const toggleSortOrder = () =>
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");

  const filteredData = data
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.id.localeCompare(b.id) : b.id.localeCompare(a.id)
    );

  const modalOptions = [
    {
      label: "Add Single Store",
      component: (closeModal) => (
        <AddStoreModal onClose={closeModal} handleAddStore={handleAddStore} />
      ),
    },
    {
      label: "Add Multiple Store",
      component: (closeModal) => (
        <StoreUploadModal isOpen={true} closeModal={closeModal} />
      ),
    },
  ];

  return (
    <div className="p-4 ">
      <HeaderWithButton
        heading="All Store"
        buttonText="Add New Store"
        modalOptions={modalOptions}
      />

      <div className="flex flex-wrap justify-between items-center mb-4 mt-4 gap-2">
        <div className="flex flex-wrap gap-2 justify-start">
          <button>
            <MdOutlineModeEdit className="text-2xl" />
          </button>

          {/* Modal Component */}

          <button>
            <MdDeleteOutline className="text-2xl" />
          </button>
        </div>

        <div className="flex justify-end">
          <button
            onClick={toggleSortOrder}
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
              onChange={handleSearch}
              className="border rounded p-2 w-full pr-10" // Adjust padding for icon space
            />
            <IoSearchOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4">
              <input type="checkbox" />
            </th>
            <th className="py-2 px-4 cursor-pointer">Store ID</th>
            <th className="py-2 px-4">Store Name</th>
            <th className="py-2 px-4">Store Location</th>
            <th className="py-2 px-4">Store Type</th>
            <th className="py-2 px-4">Associated Suppliers</th>
            <th className="py-2 px-4">Total Products</th>
            <th className="py-2 px-4">Active Promotions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="py-2 px-4">
                <input type="checkbox" />
              </td>
              <td className="py-2 px-4">{item.id}</td>
              <td className="py-2 px-4">{item.name}</td>
              <td className="py-2 px-4">{item.location}</td>
              <td className="py-2 px-4">{item.type}</td>
              <td className="py-2 px-4">{item.suppliers}</td>
              <td className="py-2 px-4">{item.products}</td>
              <td className="py-2 px-4">{item.activePromotions}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-4 px-6 whitespace-nowrap">
                  <input type="checkbox" />
                </th>
                <th className="py-4 px-6 whitespace-nowrap cursor-pointer">
                  Store ID
                </th>
                <th className="py-4 px-6 whitespace-nowrap">Store Name</th>
                <th className="py-4 px-6 whitespace-nowrap">Store Location</th>
                <th className="py-4 px-6 whitespace-nowrap">Store Type</th>
                <th className="py-4 px-6 whitespace-nowrap">
                  Associated Suppliers
                </th>
                <th className="py-4 px-6 whitespace-nowrap">Total Products</th>
                <th className="py-4 px-6 whitespace-nowrap">
                  Active Promotions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-4 px-6 whitespace-nowrap">
                    <input type="checkbox" />
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">{item.id}</td>
                  <td className="py-4 px-6 whitespace-nowrap">{item.name}</td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    {item.location}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">{item.type}</td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    {item.suppliers}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    {item.products}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    {item.activePromotions}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}

      <div className="flex justify-between items-center mt-4">
        <button className="px-4 py-2 border rounded-lg">Previous</button>
        <p>Page 1 of 10</p>
        <button className="px-4 py-2 border rounded-lg">Next</button>
      </div>
    </div>
  );
};

export default Store;








































//    <table className="min-w-full border">
//      <thead>
//        <tr className="bg-gray-200">
//          <th className="py-2 px-4">
//            <input type="checkbox" />
//          </th>
//          <th className="py-2 px-4 cursor-pointer" onClick={toggleSortOrder}>
//            Store ID <HiAdjustmentsHorizontal className="inline-block ml-2" />
//          </th>
//          <th className="py-2 px-4">Store Name</th>
//          <th className="py-2 px-4">Store Location</th>
//          <th className="py-2 px-4">Store Type</th>
//          <th className="py-2 px-4">Associated Suppliers</th>
//          <th className="py-2 px-4">Total Products</th>
//        </tr>
//      </thead>
//      <tbody>
//        {filteredData.map((item) => (
//          <tr key={item.id} className="border-b">
//            <td className="py-2 px-4">
//              <input type="checkbox" />
//            </td>
//            <td className="py-2 px-4">{item.id}</td>
//            <td className="py-2 px-4">{item.name}</td>
//            <td className="py-2 px-4">{item.location}</td>
//            <td className="py-2 px-4">{item.type}</td>
//            <td className="py-2 px-4">{item.suppliers}</td>
//            <td className="py-2 px-4">{item.products}</td>
//          </tr>
//        ))}
//      </tbody>
//    </table>;
//   const [data, setData] = useState([
//     {
//       id: "S001",
//       name: "Reliance Fresh",
//       location: "Mumbai, India",
//       type: "Supermarket",
//       suppliers: 560,
//       products: 5005,
//     },
//     {
//       id: "S002",
//       name: "Reliance Mart",
//       location: "Delhi, India",
//       type: "Hypermarket",
//       suppliers: 120,
//       products: 12000,
//     },
//     {
//       id: "S003",
//       name: "Reliance Trends",
//       location: "Bangalore, India",
//       type: "Supermarket",
//       suppliers: 480,
//       products: 4005,
//     },
//     // Add more data as needed
//   ]);