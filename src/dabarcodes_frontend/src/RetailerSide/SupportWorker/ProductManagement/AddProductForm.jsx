// const AddProductForm = () => (
//   <div>
//     <h3 className="text-lg">Add New Product</h3>
//     <form>
//       <input
//         className="border mb-2 p-2 w-full"
//         type="text"
//         placeholder="Product Name"
//       />
//       <button
//         type="submit"
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         Submit
//       </button>
//     </form>
//   </div>
// );
// export   default AddProductForm;
// import React, {useState} from "react";

// const AddProductForm = ({onClose}) => {
//   // State to manage form inputs
//   const [formData, setFormData] = useState({
//     productImage: "",
//     productName: "",
//     productId: "",
//     category: "",
//     brandName: "",
//     umbrellaBrandName: "",
//     price: "",
//     promotionPrice: "",
//     supplierName: "",
//     storeId: "",
//     productDescription: "",
//   });

//   // Function to handle form input changes
//   const handleChange = (e) => {
//     const {name, value} = e.target;
//     setFormData({...formData, [name]: value});
//   };

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };


//   return (
//     <div className=" inset-0 bg-opacity-50 flex justify-center items-center font-roboto  ">
//       <div className="bg-white w-full max-w-5xl p-8 rounded-md shadow-lg ">
//         <h2 className="text-center text-2xl font-semibold mb-6">
//           Add Product Details
//         </h2>

//         <form onSubmit={handleSubmit}>
//           {/* Product Image and Product Name */}
//           <div className="grid grid-cols-2 gap-6 mb-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Product Image
//               </label>
//               <div className="flex items-center space-x-2">
//                 <input
//                   type="file"
//                   name="productImage"
//                   onChange={handleChange}
//                   className="border border-gray-300 p-2 rounded-md"
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Product Name *
//               </label>
//               <input
//                 type="text"
//                 name="productName"
//                 value={formData.productName}
//                 onChange={handleChange}
//                 placeholder="Enter Product Name"
//                 className="w-full border border-gray-300 p-2 rounded-md"
//                 required
//               />
//             </div>
//           </div>

//           {/* Product ID and Category */}
//           <div className="grid grid-cols-2 gap-6 mb-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Product ID
//               </label>
//               <input
//                 type="text"
//                 name="productId"
//                 value={formData.productId}
//                 onChange={handleChange}
//                 placeholder="Product ID"
//                 className="w-full border border-gray-300 p-2 rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Category</label>
//               <input
//                 type="text"
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 placeholder="Category"
//                 className="w-full border border-gray-300 p-2 rounded-md"
//               />
//             </div>
//           </div>

//           {/* Brand Name and Umbrella Brand Name */}
//           <div className="grid grid-cols-2 gap-6 mb-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Brand Name
//               </label>
//               <input
//                 type="text"
//                 name="brandName"
//                 value={formData.brandName}
//                 onChange={handleChange}
//                 placeholder="Brand Name"
//                 className="w-full border border-gray-300 p-2 rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Umbrella Brand Name
//               </label>
//               <input
//                 type="text"
//                 name="umbrellaBrandName"
//                 value={formData.umbrellaBrandName}
//                 onChange={handleChange}
//                 placeholder="Umbrella Brand"
//                 className="w-full border border-gray-300 p-2 rounded-md"
//               />
//             </div>
//           </div>

//           {/* Price and Promotion Price */}
//           <div className="grid grid-cols-2 gap-6 mb-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">Price</label>
//               <input
//                 type="text"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleChange}
//                 placeholder="Price"
//                 className="w-full border border-gray-300 p-2 rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Promotion Price
//               </label>
//               <input
//                 type="text"
//                 name="promotionPrice"
//                 value={formData.promotionPrice}
//                 onChange={handleChange}
//                 placeholder="Promotion Price"
//                 className="w-full border border-gray-300 p-2 rounded-md"
//               />
//             </div>
//           </div>

//           {/* Supplier Name and Store ID */}
//           <div className="grid grid-cols-2 gap-6 mb-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Supplier Name
//               </label>
//               <input
//                 type="text"
//                 name="supplierName"
//                 value={formData.supplierName}
//                 onChange={handleChange}
//                 placeholder="Supplier Name"
//                 className="w-full border border-gray-300 p-2 rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Store ID</label>
//               <input
//                 type="text"
//                 name="storeId"
//                 value={formData.storeId}
//                 onChange={handleChange}
//                 placeholder="Store ID"
//                 className="w-full border border-gray-300 p-2 rounded-md"
//               />
//             </div>
//           </div>

//           {/* Product Description */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-1">
//               Product Description
//             </label>
//             <textarea
//               name="productDescription"
//               value={formData.productDescription}
//               onChange={handleChange}
//               placeholder="Product Description"
//               className="w-full border border-gray-300 p-2 rounded-md"
//             />
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-center gap-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//             >
//               Add Product
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddProductForm;


// import {useState} from "react";

// const AddProductForm = ({closeModal, handleAddProduct}) => {
//   const [formData, setFormData] = useState({
//     id: "",
//     name: "",
//     category: "",
//     brand: "",
//     store: "",
//     supplier: "",
//     image: null, // Updated to store file data
//   });

//   // Function to handle image upload
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       // Update the formData with the image file
//       setFormData({...formData, image: file});
//     }
//   };

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Create a new product object, including the image
//     const newProduct = {
//       id: Date.now(), // Or use some other unique identifier
//       ...formData,
//     };

//     // Add the product using the parent function
//     handleAddProduct(newProduct);

//     // Close the modal after adding the product
//     closeModal();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Product ID</label>
//       <input
//         type="text"
//         value={formData.id}
//         onChange={(e) => setFormData({...formData, id: e.target.value})}
//       />
//       <label>Product Name</label>
//       <input
//         type="text"
//         value={formData.name}
//         onChange={(e) => setFormData({...formData, name: e.target.value})}
//       />
//       <label>Category</label>
//       <input
//         type="text"
//         value={formData.category}
//         onChange={(e) => setFormData({...formData, category: e.target.value})}
//       />
//       <label>Brand</label>
//       <input
//         type="text"
//         value={formData.brand}
//         onChange={(e) => setFormData({...formData, brand: e.target.value})}
//       />
//       <label>Store</label>
//       <input
//         type="text"
//         value={formData.store}
//         onChange={(e) => setFormData({...formData, store: e.target.value})}
//       />
//       <label>Supplier</label>
//       <input
//         type="text"
//         value={formData.supplier}
//         onChange={(e) => setFormData({...formData, supplier: e.target.value})}
//       />
//       <label>Product Image</label>
//       <input type="file" onChange={handleImageUpload} />
//       <button type="submit">Add Product</button>
//     </form>
//   );
// };

// export default AddProductForm;
// import {useState} from "react";

// const AddProductForm = ({closeModal, handleAddProduct}) => {
//   const [formData, setFormData] = useState({
//     id: "",
//     name: "",
//     category: "",
//     brand: "",
//     store: "",
//     supplier: "",
//     image: null, // Updated to store file data
//   });
//     const handleChange = (e) => {
//       const {name, value} = e.target;
//       setFormData({...formData, [name]: value});
//     };

//   // Function to handle image upload
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       // Update the formData with the image file
//       setFormData({...formData, image: file});
//     }
//   };

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Create a new product object, including the image
//     const newProduct = {
//       id: Date.now(), // Or use some other unique identifier
//       ...formData,
//     };

//     // Add the product using the parent function
//     handleAddProduct(newProduct);

//     // Close the modal after adding the product
//     closeModal();
//   };

//   return (
//     <>
//       <div className="inset-0 bg-opacity-50 flex justify-center items-center font-roboto">
//         <div className="bg-white w-full max-w-5xl p-8 rounded-md shadow-lg">
//           <h2 className="text-center text-2xl font-semibold mb-6">
//             Add Product Details
//           </h2>

//           <form onSubmit={handleSubmit}>
//             {/* first product image */}
//             <label>Product Image</label>
//             <input type="file" onChange={handleImageUpload} />
//             <label>Product ID</label>
//             <input
//               type="text"
//               value={formData.id}
//               onChange={(e) => setFormData({...formData, id: e.target.value})}
//             />
//             <label>Product Name</label>
//             <input
//               type="text"
//               value={formData.name}
//               onChange={(e) => setFormData({...formData, name: e.target.value})}
//             />
//             <label>Category</label>
//             <input
//               type="text"
//               value={formData.category}
//               onChange={(e) =>
//                 setFormData({...formData, category: e.target.value})
//               }
//             />
//             <label>Brand</label>
//             <input
//               type="text"
//               value={formData.brand}
//               onChange={(e) =>
//                 setFormData({...formData, brand: e.target.value})
//               }
//             />
//             <label>Store</label>
//             <input
//               type="text"
//               value={formData.store}
//               onChange={(e) =>
//                 setFormData({...formData, store: e.target.value})
//               }
//             />
//             <label>Supplier</label>
//             <input
//               type="text"
//               value={formData.supplier}
//               onChange={(e) =>
//                 setFormData({...formData, supplier: e.target.value})
//               }
//             />

//             <button type="submit">Add Product</button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddProductForm;


import {useState} from "react";

const AddProductForm = ({closeModal, handleAddProduct}) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    category: "",
    brand: "",
    store: "",
    supplier: "",
    image: null, // Updated to store file data
umbrellaBrandName: "",
        price: "",
        promotionPrice: "",
        supplierName: "",
        storeId: "",
        productDescription: "",
  });

  const [errors, setErrors] = useState({}); // For form validation errors

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({...formData, image: file});
    }
  };

  // Simple form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Product Name is required.";
    // if (!formData.id) newErrors.id = "Product ID is required.";
    // if (!formData.category) newErrors.category = "Category is required.";
    // if (!formData.brand) newErrors.brand = "Brand is required.";
    // if (!formData.store) newErrors.store = "Store is required.";
    // if (!formData.supplier) newErrors.supplier = "Supplier is required.";
    // if (!formData.image) newErrors.image = "Product Image is required.";

    return newErrors;
  };


const handleSubmit = (e) => {
  e.preventDefault();

  const formErrors = validateForm();
  if (Object.keys(formErrors).length > 0) {
    setErrors(formErrors);
    return;
  }

  // Create a new product object, including the image
  const newProduct = {
    id: Date.now(), // Or use some other unique identifier
    ...formData,
  };

  // Save product data to localStorage
  const existingProducts = JSON.parse(localStorage.getItem("products")) || [];
  existingProducts.push(newProduct);
  localStorage.setItem("products", JSON.stringify(existingProducts));

  // Add the product using the parent function
  handleAddProduct(newProduct);

  // Close the modal after adding the product
  closeModal();
};
  return (
    <div className="inset-0 bg-opacity-50 flex justify-center items-center font-roboto">
      <div className="bg-white w-full max-w-5xl p-8 rounded-md shadow-lg">
        <h2 className="text-center text-2xl font-semibold mb-6">
          Add Product Details
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Product Image and Product Name */}
          <div className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Product Image *
              </label>
              <input
                type="file"
                onChange={handleImageUpload}
                className={`w-full border border-gray-300 p-2 rounded-md ${
                  errors.image ? "border-red-500" : ""
                }`}
              />
              {errors.image && (
                <p className="text-red-500 text-sm">{errors.image}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Product Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Product Name"
                className={`w-full border border-gray-300 p-2 rounded-md ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
          </div>

          {/* Product ID and Category */}
          <div className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Product ID *
              </label>
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleChange}
                placeholder="Enter Product ID"
                className={`w-full border border-gray-300 p-2 rounded-md ${
                  errors.id ? "border-red-500" : ""
                }`}
              />
              {errors.id && <p className="text-red-500 text-sm">{errors.id}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Category *
              </label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Enter Category"
                className={`w-full border border-gray-300 p-2 rounded-md ${
                  errors.category ? "border-red-500" : ""
                }`}
              />
              {errors.category && (
                <p className="text-red-500 text-sm">{errors.category}</p>
              )}
            </div>
          </div>

          {/* Brand, Store, and Supplier */}
          <div className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Brand *</label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                placeholder="Enter Brand"
                className={`w-full border border-gray-300 p-2 rounded-md ${
                  errors.brand ? "border-red-500" : ""
                }`}
              />
              {errors.brand && (
                <p className="text-red-500 text-sm">{errors.brand}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Store *</label>
              <input
                type="text"
                name="store"
                value={formData.store}
                onChange={handleChange}
                placeholder="Enter Store"
                className={`w-full border border-gray-300 p-2 rounded-md ${
                  errors.store ? "border-red-500" : ""
                }`}
              />
              {errors.store && (
                <p className="text-red-500 text-sm">{errors.store}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                {" "}
                Umbrella Brand Name *
              </label>
              <input
                type="text"
                name="umbrellaBrandName"
                value={formData.umbrellaBrandName}
                onChange={handleChange}
                placeholder="Umbrella Brand"
                className={`w-full border border-gray-300 p-2 rounded-md ${
                  errors.umbrellaBrandName ? "border-red-500" : ""
                }`}
              />
              {errors.umbrellaBrandName && (
                <p className="text-red-500 text-sm">
                  {errors.umbrellaBrandName}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter Price"
                className={`w-full border border-gray-300 p-2 rounded-md ${
                  errors.price ? "border-red-500" : ""
                }`}
              />
              {errors.price && (
                <p className="text-red-500 text-sm">{errors.price}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Promotion Price *
              </label>
              <input
                type="number"
                name="promotionPrice"
                value={formData.promotionPrice}
                onChange={handleChange}
                placeholder="Enter Promotion Price"
                className={`w-full border border-gray-300 p-2 rounded-md ${
                  errors.promotionPrice ? "border-red-500" : ""
                }`}
              />
              {errors.promotionPrice && (
                <p className="text-red-500 text-sm">{errors.promotionPrice}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Store Id</label>
              <input
                type="text"
                name="storeId"
                value={formData.storeId}
                onChange={handleChange}
                placeholder="Enter StoreiD"
                className={`w-full border border-gray-300 p-2 rounded-md ${
                  errors.storeId ? "border-red-500" : ""
                }`}
              />
              {errors.storeId && (
                <p className="text-red-500 text-sm">{errors.storeId}</p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Supplier *</label>
            <input
              type="text"
              name="supplier"
              value={formData.supplier}
              onChange={handleChange}
              placeholder="Enter Supplier"
              className={`w-full border border-gray-300 p-2 rounded-md ${
                errors.supplier ? "border-red-500" : ""
              }`}
            />
            {errors.supplier && (
              <p className="text-red-500 text-sm">{errors.supplier}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <button
              type="button"
              onClick={closeModal}
              className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;





























// import React, {useState} from "react";

// const AddProductForm = ({onClose}) => {
//   const [formData, setFormData] = useState({
//     productImage: "",
//     productName: "",
//     productId: "",
//     category: "",
//     brandName: "",
//     umbrellaBrandName: "",
//     price: "",
//     promotionPrice: "",
//     supplierName: "",
//     storeId: "",
//     productDescription: "",
//   });

//   const handleChange = (e) => {
//     const {name, value} = e.target;
//     setFormData({...formData, [name]: value});
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData({...formData, productImage: file});
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     // You can replace this with a function to handle the product submission
//   };

//   return (
//     <div className="inset-0 bg-opacity-50 flex justify-center items-center font-roboto">
//       <div className="bg-white w-full max-w-5xl p-8 rounded-md shadow-lg">
//         <h2 className="text-center text-2xl font-semibold mb-6">
//           Add Product Details
//         </h2>

//         <form onSubmit={handleSubmit}>
//           {/* Product Image and Product Name */}
//           <div className="grid grid-cols-2 gap-6 mb-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Product Image
//               </label>
//               <div className="flex items-center space-x-2">
//                 <input
//                   type="file"
//                   name="productImage"
//                   onChange={handleImageUpload}
//                   className="border border-gray-300 p-2 rounded-md"
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Product Name *
//               </label>
//               <input
//                 type="text"
//                 name="productName"
//                 value={formData.productName}
//                 onChange={handleChange}
//                 placeholder="Enter Product Name"
//                 className="w-full border border-gray-300 p-2 rounded-md"
//                 required
//               />
//             </div>
//           </div>

//           {/* Product ID and Category */}
//           <div className="grid grid-cols-2 gap-6 mb-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Product ID
//               </label>
//               <input
//                 type="text"
//                 name="productId"
//                 value={formData.productId}
//                 onChange={handleChange}
//                 placeholder="Product ID"
//                 className="w-full border border-gray-300 p-2 rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Category</label>
//               <input
//                 type="text"
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 placeholder="Category"
//                 className="w-full border border-gray-300 p-2 rounded-md"
//               />
//             </div>
//           </div>

//           {/* Brand Name and Umbrella Brand Name */}
//           <div className="grid grid-cols-2 gap-6 mb-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Brand Name
//               </label>
//               <input
//                 type="text"
//                 name="brandName"
//                 value={formData.brandName}
//                 onChange={handleChange}
//                 placeholder="Brand Name"
//                 className="w-full border border-gray-300 p-2 rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Umbrella Brand Name
//               </label>
//               <input
//                 type="text"
//                 name="umbrellaBrandName"
//                 value={formData.umbrellaBrandName}
//                 onChange={handleChange}
//                 placeholder="Umbrella Brand"
//                 className="w-full border border-gray-300 p-2 rounded-md"
//               />
//             </div>
//           </div>

//           {/* Price and Promotion Price */}
//           <div className="grid grid-cols-2 gap-6 mb-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">Price</label>
//               <input
//                 type="text"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleChange}
//                 placeholder="Price"
//                 className="w-full border border-gray-300 p-2 rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Promotion Price
//               </label>
//               <input
//                 type="text"
//                 name="promotionPrice"
//                 value={formData.promotionPrice}
//                 onChange={handleChange}
//                 placeholder="Promotion Price"
//                 className="w-full border border-gray-300 p-2 rounded-md"
//               />
//             </div>
//           </div>

//           {/* Supplier Name and Store ID */}
//           <div className="grid grid-cols-2 gap-6 mb-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Supplier Name
//               </label>
//               <input
//                 type="text"
//                 name="supplierName"
//                 value={formData.supplierName}
//                 onChange={handleChange}
//                 placeholder="Supplier Name"
//                 className="w-full border border-gray-300 p-2 rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Store ID</label>
//               <input
//                 type="text"
//                 name="storeId"
//                 value={formData.storeId}
//                 onChange={handleChange}
//                 placeholder="Store ID"
//                 className="w-full border border-gray-300 p-2 rounded-md"
//               />
//             </div>
//           </div>

//           {/* Product Description */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-1">
//               Product Description
//             </label>
//             <textarea
//               name="productDescription"
//               value={formData.productDescription}
//               onChange={handleChange}
//               placeholder="Product Description"
//               className="w-full border border-gray-300 p-2 rounded-md"
//             />
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-center gap-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//             >
//               Add Product
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddProductForm;
