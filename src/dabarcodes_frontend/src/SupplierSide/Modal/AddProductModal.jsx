// import React, { useState } from "react";

// const AddProductModal = ({ isOpen, onClose }) => {
//   // State to hold form values
//   const [formData, setFormData] = useState({
//     sku: "",
//     productName: "",
//     productType: "",
//     size: "",
//     description: "",
//     image: null,
//     category: "",
//     subcategory: "",
//     price: "",
//   });

//   // Handle form input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle image upload
//   const handleImageChange = (e) => {
//     setFormData({
//       ...formData,
//       image: e.target.files[0],
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data Submitted:", formData);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//       <div className="bg-white w-3/4 max-w-xl p-8 rounded-lg">
//         <h2 className="text-xl font-bold mb-6 text-center">Add Product Details</h2>
//         <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium">Product SKU</label>
//             <input
//               type="text"
//               name="sku"
//               value={formData.sku}
//               onChange={handleChange}
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Product Image</label>
//             <input
//               type="file"
//               onChange={handleImageChange}
//               className="mt-1 block w-full"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Product Name</label>
//             <input
//               type="text"
//               name="productName"
//               value={formData.productName}
//               onChange={handleChange}
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Category</label>
//             <input
//               type="text"
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Product Type</label>
//             <input
//               type="text"
//               name="productType"
//               value={formData.productType}
//               onChange={handleChange}
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Subcategory</label>
//             <input
//               type="text"
//               name="subcategory"
//               value={formData.subcategory}
//               onChange={handleChange}
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Size</label>
//             <input
//               type="text"
//               name="size"
//               value={formData.size}
//               onChange={handleChange}
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">
//               Retail Price (Including Taxes)
//             </label>
//             <input
//               type="text"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//             />
//           </div>
//           <div className="col-span-2">
//             <label className="block text-sm font-medium">Product Description</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//               rows="4"
//             ></textarea>
//           </div>
//           <div className="col-span-2 flex justify-between mt-6">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-500 text-white rounded-md"
//             >
//               Add Product
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddProductModal;
//...........................................
// import React, { useState } from "react";

// const AddProductModal = ({ isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     sku: "",
//     productName: "",
//     productType: "",
//     size: "",
//     description: "",
//     image: null,
//     category: "",
//     subcategory: "",
//     price: "",
//   });

//   // Handle form input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle image upload
//   const handleImageChange = (e) => {
//     setFormData({
//       ...formData,
//       image: e.target.files[0],
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data Submitted:", formData);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//       <div className="bg-white w-3/4 max-w-xl p-8 rounded-lg max-h-[90vh] overflow-hidden">
//         <h2 className="text-xl font-bold mb-6 text-center">Add Product Details</h2>
//         <form
//           onSubmit={handleSubmit}
//           className="grid grid-cols-2 gap-6 max-h-[70vh] overflow-y-auto "
//         >
//           <div>
//             <label className="block text-sm font-medium">Product SKU</label>
//             <input
//               type="text"
//               name="sku"
//               value={formData.sku}
//               onChange={handleChange}
//               className="mt-2 block w-full border-gray-300  border-[0.5px] rounded-md shadow-sm p-3"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Product Image</label>
//             <input
//               type="file"
//               onChange={handleImageChange}
//               className="mt-2 block w-full p-3"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Product Name</label>
//             <input
//               type="text"
//               name="productName"
//               value={formData.productName}
//               onChange={handleChange}
//               className="mt-2 block w-full border-gray-300 border-[0.5px]  rounded-md shadow-sm p-3"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Category</label>
//             <input
//               type="text"
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               className="mt-2 block w-full border-gray-300 border-[0.5px]  rounded-md shadow-sm p-3"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Product Type</label>
//             <input
//               type="text"
//               name="productType"
//               value={formData.productType}
//               onChange={handleChange}
//               className="mt-2 block w-full border-gray-300 border-[0.5px]  rounded-md shadow-sm p-3"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Subcategory</label>
//             <input
//               type="text"
//               name="subcategory"
//               value={formData.subcategory}
//               onChange={handleChange}
//               className="mt-2 block w-full border-gray-300 border-[0.5px]  rounded-md shadow-sm p-3"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Size</label>
//             <input
//               type="text"
//               name="size"
//               value={formData.size}
//               onChange={handleChange}
//               className="mt-2 block w-full border-gray-300 border-[0.5px]  rounded-md shadow-sm p-3"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">
//               Retail Price (Including Taxes)
//             </label>
//             <input
//               type="text"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//               className="mt-2 block w-full border-gray-300 border-[0.5px]  rounded-md shadow-sm p-3"
//             />
//           </div>
//           <div className="col-span-2">
//             <label className="block text-sm font-medium">Product Description</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               className="mt-2 block w-full border-gray-300 border-[0.5px] rounded-md shadow-sm p-3"
//               rows="5"
//             ></textarea>
//           </div>
//           <div className="col-span-2 flex justify-between mt-6">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-6 py-3 border border-blue-500 text-blue-500 rounded-md"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-6 py-3 bg-blue-500 text-white rounded-md"
//             >
//               Add Product
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddProductModal;
//.........................................
// import React, { useState } from 'react';

// const AddProductModal = ({ isOpen, onClose, onAddProduct }) => {
//   const [sku, setSku] = useState('');
//   const [productName, setProductName] = useState('');
//   const [productType, setProductType] = useState('');
//   const [size, setSize] = useState('');
//   const [description, setDescription] = useState('');
//   const [image, setImage] = useState(null); // Store image file here
//   const [imageUrl, setImageUrl] = useState(''); // Store image URL for preview
//   const [category, setCategory] = useState('');
//   const [subcategory, setSubcategory] = useState('');
//   const [price, setPrice] = useState('');

//   const handleSubmit = () => {
//     const newProduct = {
//       sku,
//       productName,
//       productType,
//       size,
//       description,
//       image,
//       category,
//       subcategory,
//       price,
//     };
//     onAddProduct(newProduct);
//     setSku('');
//   setProductName('');
//   setProductType('');
//   setSize('');
//   setDescription('');
//   setImage(null); 
//   setImageUrl('');
//   setCategory('');
//   setSubcategory('');
//   setPrice('');
//   onClose(); 

//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//     if (file) {
//       setImageUrl(URL.createObjectURL(file)); // Create a URL for the selected image
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-8 rounded shadow-lg">
//         <h3 className="text-lg font-semibold mb-4">Add Product</h3>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//           {/* SKU and Product Name */}
//           <div>
//             <label className="block">SKU</label>
//             <input
//               type="text"
//               value={sku}
//               onChange={(e) => setSku(e.target.value)}
//               className="w-full border px-4 py-2"
//             />
//           </div>
//           <div>
//             <label className="block">Product Name</label>
//             <input
//               type="text"
//               value={productName}
//               onChange={(e) => setProductName(e.target.value)}
//               className="w-full border px-4 py-2"
//             />
//           </div>

//           {/* Product Type and Size */}
//           <div>
//             <label className="block">Product Type</label>
//             <input
//               type="text"
//               value={productType}
//               onChange={(e) => setProductType(e.target.value)}
//               className="w-full border px-4 py-2"
//             />
//           </div>
//           <div>
//             <label className="block">Size</label>
//             <input
//               type="text"
//               value={size}
//               onChange={(e) => setSize(e.target.value)}
//               className="w-full border px-4 py-2"
//             />
//           </div>

//           {/* Category and Subcategory */}
//           <div>
//             <label className="block">Category</label>
//             <input
//               type="text"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="w-full border px-4 py-2"
//             />
//           </div>
//           <div>
//             <label className="block">Subcategory</label>
//             <input
//               type="text"
//               value={subcategory}
//               onChange={(e) => setSubcategory(e.target.value)}
//               className="w-full border px-4 py-2"
//             />
//           </div>

//           {/* Description and Price */}
//           <div>
//             <label className="block">Description</label>
//             <textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="w-full border px-4 py-2"
//             />
//           </div>
//           <div>
//             <label className="block">Price</label>
//             <input
//               type="number"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               className="w-full border px-4 py-2"
//             />
//           </div>

//           {/* Image */}
//           <div className="col-span-2">
//             <label className="block">Image</label>
//             <input
//               type="file"
//               onChange={handleImageChange}
//               className="w-full border px-4 py-2"
//             />
//             {imageUrl && (
//               <div className="mt-4">
//                 <img src={imageUrl} alt="Selected Preview" className="max-w-full h-auto" />
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="flex justify-between">
//         <button onClick={onClose} className="bg-red-gray text-black border-1 py-2 px-4 rounded">
//             Cancel
//           </button>
//           <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
//             Add Product
//           </button>
        
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddProductModal;


// working

import React, { useState } from 'react';

const AddProductModal = ({ isOpen, onClose, onAddProduct }) => {
  const [sku, setSku] = useState('');
  const [productName, setProductName] = useState('');
  const [productType, setProductType] = useState('');
  const [size, setSize] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = () => {
    const newProduct = {
      sku,
      productName,
      productType,
      size,
      description,
      image,
      category,
      subcategory,
      price,
    };
    onAddProduct(newProduct);
    setSku('');
    setProductName('');
    setProductType('');
    setSize('');
    setDescription('');
    setImage(null);
    setImageUrl('');
    setCategory('');
    setSubcategory('');
    setPrice('');
    onClose();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setImageUrl(URL.createObjectURL(file));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-2xl w-full ">
        <h2 className="text-2xl font-semibold text-center mb-8">Add Product Details</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
          <div>
            <label className="block text-sm font-medium">Product SKU</label>
            <input
              type="text"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
              className="w-full border rounded px-4 py-2 mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Product Image</label>
            <div className="flex items-center gap-2">
              <input
                type="file"
                onChange={handleImageChange}
                className="hidden"
                id="upload-image"
              />
              <label htmlFor="upload-image" className="cursor-pointer bg-gray-100 border rounded px-3 py-2">
                Upload Image
              </label>
              {imageUrl && (
                <img src={imageUrl} alt="Selected Preview" className="w-12 h-12 rounded object-cover" />
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Product Name</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full border rounded px-4 py-2 mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded px-4 py-2 mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Product Type</label>
            <input
              type="text"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
              className="w-full border rounded px-4 py-2 mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Subcategory</label>
            <input
              type="text"
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
              className="w-full border rounded px-4 py-2 mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Size</label>
            <input
              type="text"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full border rounded px-4 py-2 mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Retail Price (Including Taxes)</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border rounded px-4 py-2 mt-1"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium">Product Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded px-4 py-2 mt-1"
              rows="3"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <button onClick={onClose} className="bg-white border border-gray-300 text-gray-600 py-2 px-6 rounded hover:bg-gray-100">
            Cancel
          </button>
          <button onClick={handleSubmit} className="bg-[#0D90C1] text-white py-2 px-6 rounded hover:bg-blue-700">
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
