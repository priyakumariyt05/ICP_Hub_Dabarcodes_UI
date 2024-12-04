// import {useState, useEffect} from "react";
// import BackButton from "../../Dashboard/Reusable/BackButton";
// const ProductDetailPage = ({productData}) => {
//   const initialFormState = {
//     productName: "",
//     productId: "",
//     category: "",
//     brand: "",
//     regularPrice: "",
//     stockLevel: "",
//     supplierName: "",
//     description: "",
//   };

//   const [formData, setFormData] = useState(initialFormState);
//   const [errors, setErrors] = useState({});
//   const [productInfo, setProductInfo] = useState(productData || {stats: {}});

//   // Update productInfo if productData changes
//   useEffect(() => {
//     if (productData) setProductInfo(productData);
//   }, [productData]);

//   // Handle input change for controlled components
//   const handleChange = (e) => {
//     const {id, value} = e.target;
//     setFormData((prev) => ({...prev, [id]: value}));
//   };

//   // Validation logic
//   const validateForm = () => {
//     let validationErrors = {};
//     Object.keys(formData).forEach((key) => {
//       if (!formData[key].trim()) {
//         validationErrors[key] = `${key.replace(/([A-Z])/g, " $1")} is required`;
//       }
//     });
//     setErrors(validationErrors);
//     return Object.keys(validationErrors).length === 0;
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log("Form data:", formData);
//       alert("Form submitted successfully!");
//       setFormData(initialFormState); 
//     }
//   };

//   return (
//     <div className="mx-auto mt-8">
//       <div className="flex flex-start items-center">
//         <BackButton />
//         <h1 className="text-2xl font-semibold mb-4 ml-4">Product Overview</h1>
//       </div>

//       <form onSubmit={handleSubmit}>
//         <div className="flex items-start mb-8">
//           {/* Image on the left */}
//           <div className="border-2 border-gray-300 rounded-full p-2 w-24 h-24 flex items-center justify-center">
//             <img
//               src={productInfo.logo || "/image/drink.png"}
//               alt="Reliance Store Logo"
//             />
//           </div>

//           {/* Right-side content */}
//           <div className="ml-8 w-full px-8">
//             {/* Product Overview */}
//             <h2 className="text-xl font-medium mb-4">Product Overview</h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//               <InputField
//                 label="Product Name"
//                 id="productName"
//                 value={formData.productName}
//                 onChange={handleChange}
//                 error={errors.productName}
//               />
//               <InputField
//                 label="Product ID"
//                 id="productId"
//                 value={formData.productId}
//                 onChange={handleChange}
//                 error={errors.productId}
//               />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//               <InputField
//                 label="Category"
//                 id="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 error={errors.category}
//               />
//               <InputField
//                 label="Brand"
//                 id="brand"
//                 value={formData.brand}
//                 onChange={handleChange}
//                 error={errors.brand}
//               />
//               <InputField
//                 label="Umbrella Brand Name"
//                 id="umbrellaBrandName"
//                 value={formData.regularPrice}
//                 onChange={handleChange}
//                 error={errors.regularPrice}
//               />
//               <InputField
//                 label="Regular Price"
//                 id="regularPrice"
//                 value={formData.regularPrice}
//                 onChange={handleChange}
//                 error={errors.regularPrice}
//               />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//               <InputField
//                 label="Stock Level"
//                 id="stockLevel"
//                 value={formData.stockLevel}
//                 onChange={handleChange}
//                 error={errors.stockLevel}
//               />
//               <InputField
//                 label="Supplier Name"
//                 id="supplierName"
//                 value={formData.supplierName}
//                 onChange={handleChange}
//                 error={errors.supplierName}
//               />
//             </div>

//             <div className="grid grid-cols-1 gap-4 mb-8">
//               <TextAreaField
//                 label="Description"
//                 id="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 error={errors.description}
//               />
//             </div>
//             <h2 className="text-xl font-medium mb-4">Promotion Details</h2>
//             <div>
//               <div className="grid grid-cols-1 gap-4 mb-4"></div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Start Date</label>
//                   <input
//                     type="date"
//                     className="lg:w-full md:w-full sm:w-full p-2 border border-gray-300 rounded"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">End Date</label>
//                   <input
//                     type="date"
//                     className="lg:w-full md:w-full sm:w-full p-2 border border-gray-300 rounded"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//               <InputField
//                 label="Orignal Price"
//                 id="OrignalPrice"
//                 // value={formData.supplierName}
//                 // onChange={handleChange}
//                 // error={errors.supplierName}
//               />
//               <InputField
//                 label="Price After Promotion"
//                 id="PriceAfterPromotion"
//                 // value={formData.supplierName}
//                 // onChange={handleChange}
//                 // error={errors.supplierName}
//               />
//             </div>

//             <div className="grid grid-cols-1 gap-4 mb-8">
//               <TextAreaField
//                 label="Promotional Description"
//                 id="Promotionaldescription"
//                 // value={formData.description}
//                 // onChange={handleChange}
//                 // error={errors.description}
//               />
//             </div>
//             {/* <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
//             >
//               Submit
//             </button> */}
//           </div>
//         </div>
//       </form>

//     </div>
//   );
// };

// // Reusable Input Field Component
// const InputField = ({label, id, value, onChange, error}) => (
//   <div className="flex flex-col">
//     <label htmlFor={id} className="text-sm font-medium mb-1">
//       {label}
//     </label>
//     <input
//       type="text"
//       id={id}
//       value={value}
//       onChange={onChange}
//       className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//     />
//     {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
//   </div>
// );

// // Reusable TextArea Field Component
// const TextAreaField = ({label, id, value, onChange, error}) => (
//   <div className="flex flex-col">
//     <label htmlFor={id} className="text-sm font-medium mb-1">
//       {label}
//     </label>
//     <textarea
//       id={id}
//       value={value}
//       onChange={onChange}
//       rows="4"
//       className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
//       placeholder={`Enter ${label.toLowerCase()} here...`}
//     ></textarea>
//     {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
//   </div>
// );


// export default ProductDetailPage;

import { useState, useEffect } from "react";
import BackButton from "../../Dashboard/Reusable/BackButton";
import PreviousRedemptionData from "../ReusableData/PreviousRedemptionData"
import Modal from "../Modal/Modal"

import EditProductModal from "../Modal/EditProductModal";
const ProductDetailPage = ({ productData }) => {
  const initialFormState = {
    productName: "",
    productId: "",
    category: "",
    brand: "",
     description: "",
    umbrellaBrandName: "",
    originalPrice: "",
    promotion: "",
    promotionalDescription: "",
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Populate formData with productData
  useEffect(() => {
    if (productData) {
      setFormData((prev) => ({
        ...prev,
        productName: productData.name || "",
        productId: productData.id || "",
        category: productData.category || "",
        brand: productData.brand || "",
        promotion: productData.promotion || "",


        description: productData.description || "",
        umbrellaBrandName: productData.umbrellaBrandName || "",

        originalPrice: productData.stats?.originalPrice || "",

      }));
    }
  }, [productData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validateForm = () => {
    const validationErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        validationErrors[key] = `${key.replace(/([A-Z])/g, " $1")} is required`;
      }
    });
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data submitted:", formData);
      alert("Form submitted successfully!");
    }
  };
  const previousData = [
    {
      startDate: "2024-01-01",
      endDate: "2024-01-10",
      duration: "10 days",
      discount: "20%",
      originalPrice: "$100",
      totalSales: "$2000",
      totalUnitsSold: 20,
    },
    {
      startDate: "2024-02-01",
      endDate: "2024-02-10",
      duration: "9 days",
      discount: "15%",
      originalPrice: "$80",
      totalSales: "$1200",
      totalUnitsSold: 15,
    },
    {
      startDate: "2024-03-01",
      endDate: "2024-03-05",
      duration: "5 days",
      discount: "10%",
      originalPrice: "$50",
      totalSales: "$500",
      totalUnitsSold: 10,
    },
  ];


  const handleAddPromotionClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product); // Set the selected product
    setShowEditModal(true); // Open the modal
  };

  const handleSave = (updatedProduct) => {
    console.log("Updated Product:", updatedProduct);
    setShowEditModal(false); // Close the modal after saving
  };

  const sampleProduct = {
    name: "Sample Product",
    supplier: "Supplier Name",
    brand: "Brand Name",
    umbrellaBrandName: "Umbrella Brand",
    price: "100",
    description: "Sample Description",
    image: "", // Add image URL if available
  };
  return (
    <>
  <div className="mx-auto mt-8">
      <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
      <BackButton />
      <h1 className="text-2xl font-semibold ml-4">Product Overview</h1>
      </div>
        
        {/* <button  className="bg-blue-500 text-white px-4 py-2 rounded-md">Edit</button> */}
        <div>
      {/* Button to trigger the modal */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={() => handleEditClick(sampleProduct)}
      >
        Edit
      </button>

      {/* Edit Product Modal */}
      {showEditModal && (
        <EditProductModal
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
          onSave={handleSave}
        />
      )}
    </div>

      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex items-start mb-8">
          {/* Product Image */}
          <div className="border-2 border-gray-300 rounded-full p-2 w-24 h-24 flex items-center justify-center">
            <img
              src={productData?.logo || "/image/drink.png"}
              alt={formData.productName || "Product Image"}
            />
          </div>

          {/* Product Details */}
          <div className="ml-8 w-full px-8">
            <h2 className="text-xl font-medium mb-4">Product Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <InputField
                label="Product Name"
                id="productName"
                value={formData.productName}
                onChange={handleChange}
                error={errors.productName}
              />
              <InputField
                label="Product SKU"
                id="productId"
                value={formData.productId}
                onChange={handleChange}
                error={errors.productId}
              />
            </div>

            {/* Other Product Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <InputField
                label="Category"
                id="category"
                value={formData.category}
                onChange={handleChange}
                error={errors.category}
              />
              <InputField
                label="Brand"
                id="brand"
                value={formData.brand}
                onChange={handleChange}
                error={errors.brand}
              />
              <InputField
                label="Umbrella Brand Name"
                id="umbrellaBrandName"
                value={formData.umbrellaBrandName}
                onChange={handleChange}
                error={errors.umbrellaBrandName}
              />
              <InputField
                label="Original Price"
                id="originalPrice"
                value={formData.originalPrice}
                onChange={handleChange}
                error={errors.originalPrice}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex flex-col">
                <label htmlFor="promotion" className="mb-2 text-sm font-semibold text-gray-700">
                  Promotion
                </label>
                <select
                  id="promotion"
                  value={formData.promotion}
                  onChange={handleChange}
                  className={`border rounded px-3 py-2 ${errors.promotion ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                {errors.promotion && (
                  <span className="text-sm text-red-500">{errors.promotion}</span>
                )}
              </div>
            </div>


            <div className="grid grid-cols-1 gap-4 mb-8">
              <TextAreaField
                label="Promotional Description"
                id="promotionalDescription"
                value={formData.promotionalDescription}
                onChange={handleChange}
                error={errors.promotionalDescription}
              />
            </div>

            {/* <button
              type="submit"
              className="w-1/2 ml-auto flex items-center justify-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Add Promotion
            </button> */}
            <button
          type="button"
          onClick={handleAddPromotionClick}
          className="w-1/2 ml-auto flex items-center justify-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Add Promotion
        </button>
          </div>
        </div>
      </form>
    </div>
          {/* Modal */}
          
          <Modal isOpen={isModalOpen} onClose={handleCloseModal}
           mainclass="flex justify-center items-center"
           className="w-[700px]">
        <h2 className="text-2xl font-bold mb-4">Promotion Details</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Start Date</label>
              <input
                type="date"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">End Date</label>
              <input
                type="date"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="flatDiscount" />
            <label htmlFor="flatDiscount" className="text-sm">
              Flat Discount
            </label>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Original Price</label>
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Price after Promotion
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Promotional Description
            </label>
            <textarea
              className="border border-gray-300 rounded-md p-2 w-full"
              rows="3"
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleCloseModal}
              className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Add Promotion
            </button>
          </div>
        </form>
      </Modal>
    <h1 className="text-2xl font-bold mb-4">Previous Redemptions</h1>
        <PreviousRedemptionData previousRedemption={previousData} />
    </>
  );
};

// Reusable Input Field Component
const InputField = ({ label, id, value, onChange, error }) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="text-sm font-medium mb-1">
      {label}
    </label>
    <input
      type="text"
      id={id}
      value={value}
      onChange={onChange}
      className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

// Reusable TextArea Field Component
const TextAreaField = ({ label, id, value, onChange, error }) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="text-sm font-medium mb-1">
      {label}
    </label>
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      rows="4"
      className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      placeholder={`Enter ${label.toLowerCase()} here...`}
    ></textarea>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default ProductDetailPage;
