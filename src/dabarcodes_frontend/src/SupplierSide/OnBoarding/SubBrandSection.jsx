
// import React, { useState } from 'react';

// const SubBrandSection = ({ subBrand, index, handleSubBrandChange, handleFileChange, showFileInput }) => {
//   const [errors, setErrors] = useState({});

//   const downloadUrl = '/path-to-download-format.csv';

//   // Validation for category and description fields
//   const validateField = (field, value) => {
//     let error = '';
//     if (field === 'name' && !value) {
//       error = 'Name is required.';
//     }
//   else if (field === 'category' && !value) {
//       error = 'Category is required.';
//     } else if (field === 'description' && !value.trim()) {
//       error = 'Description is required.';
//     }
//     return error;
//   };

//   const handleSubBrandFieldChange = (field, value) => {
//     const error = validateField(field, value);
//     setErrors((prev) => ({ ...prev, [field]: error }));
//     handleSubBrandChange(index, field, value);
//   };

//   const handleFileInputChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const validExtensions = ['csv'];
//       const fileExtension = file.name.split('.').pop().toLowerCase();
//       const fileSizeLimit = 5 * 1024 * 1024; // 5MB

//       if (!validExtensions.includes(fileExtension)) {
//         setErrors((prev) => ({ ...prev, file: 'Invalid file type. Only CSV files are allowed.' }));
//         return;
//       }

//       if (file.size > fileSizeLimit) {
//         setErrors((prev) => ({ ...prev, file: 'File size exceeds the 5MB limit.' }));
//         return;
//       }

//       setErrors((prev) => ({ ...prev, file: '' }));
//       handleFileChange(index, file);
//     }
//   };

//   const downloadFormat = () => {
//     const link = document.createElement('a');
//     link.href = downloadUrl;
//     link.download = 'format-download.csv';
//     link.click();
//   };

//   return (
//     <div className="mb-4">
//       {/* Sub Brand Header */}
//       <div className="text-sm font-medium mb-2"> {index + 1} : Sub Brand</div>

//       {/* Name Input */}
//       <div className="flex space-x-4 mb-4">
//         <div className="flex-1">
//           <label className="block text-sm font-medium">Name</label>
//           <input
//             type="text"
//             value={subBrand.name}
//             onChange={(e) => handleSubBrandChange(index, 'name', e.target.value)}
//             placeholder="Enter Sub Brand Name"
//             className="w-full p-2 border border-gray-300 rounded-md"
//           />
//           {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//         </div>

//         {/* Category Input */}
//         <div className="flex-1">
//           <label className="block text-sm font-medium">Brand Category</label>
//           <select
//             value={subBrand.category}
//             onChange={(e) => handleSubBrandFieldChange('category', e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-md"
//           >
//             <option value="">Select</option>
//             <option value="Category 1">Category 1</option>
//             <option value="Category 2">Category 2</option>
//           </select>
//           {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
//         </div>
//       </div>

//       {/* Description Input */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium">Brand Description</label>
//         <textarea
//           value={subBrand.description}
//           onChange={(e) => handleSubBrandFieldChange('description', e.target.value)}
//           placeholder="Add Brand Details"
//           className="w-full p-2 border border-gray-300 rounded-md"
//           rows="3"
//         ></textarea>
//         {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
//       </div>

//       {/* File Input Section */}
//       {showFileInput && (
//         <div className="mb-4">
//           <div className="flex justify-between items-center mb-4">
//             <label className="block text-sm font-medium">Product Details</label>
//             <button onClick={downloadFormat} className="bg-gray-100 p-2 rounded-md">
//               Format Download
//             </button>
//           </div>

//           <div className="border border-dashed border-gray-400 p-4 text-center">
//             <input
//               id={`fileInput-${index}`}
//               type="file"
//               accept=".csv"
//               className="hidden"
//               onChange={handleFileInputChange}
//             />
//             <label
//               htmlFor={`fileInput-${index}`}
//               className="text-blue-500 cursor-pointer bg-gray-100 p-2 rounded"
//             >
//               Upload CSV
//             </label>
//             <p className="text-xs mt-2">File should be in CSV format and not larger than 5MB</p>
//             {errors.file && <p className="text-red-500 text-sm mt-1">{errors.file}</p>}

//             {/* Display Uploaded File Name */}
//             {subBrand.file && (
//               <div className="mt-2">
//                 <p className="text-gray-600">{subBrand.file.name}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SubBrandSection;
// ???????????????????????????????????????????????????
// import React, { useState } from 'react';

// const SubBrandSection = ({ subBrand, index, handleSubBrandChange,
//   handleFileChange, showFileInput, errors }) => {
//   const downloadUrl = '/path-to-download-format.csv';


//   const handleSubBrandFieldChange = (field, value) => {
//     handleSubBrandChange(index, field, value);
//   };

//   const handleFileInputChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const validExtensions = ['csv'];
//       const fileExtension = file.name.split('.').pop().toLowerCase();
//       const fileSizeLimit = 5 * 1024 * 1024; // 5MB


//       if (!validExtensions.includes(fileExtension)) {
//         handleFileChange(index, null, 'Invalid file type. Only CSV files are allowed.');
//         return;
//       }

//       if (file.size > fileSizeLimit) {
//         handleFileChange(index, null, 'File size exceeds the 5MB limit.');
//         return;
//       }

//       handleFileChange(index, file, null);
//     }
//   };


//   const downloadFormat = () => {
//     const link = document.createElement('a');
//     link.href = downloadUrl;
//     link.download = 'format-download.csv';
//     link.click();
//   };

//   const handleFileDelete = () => {
//     handleFileChange(index, null, null);
//   };
//   return (
//     <div className="mb-4">
//       {/* Sub Brand Header */}
//       <div className="text-sm font-medium mb-2"> {index + 1} : Sub Brand</div>

//       {/* Name Input */}
//       <div className="flex space-x-4 mb-4">
//         <div className="flex-1">
//           <label className="block text-sm font-medium">Name</label>
//           <input
//             type="text"
//             value={subBrand.name}
//             onChange={(e) => handleSubBrandChange(index, 'name', e.target.value)} //Because I passed the index so that it can identify the subbrand.
//             placeholder="Enter Sub Brand Name"
//             className="w-full p-2 border border-gray-300 rounded-md"
//           />
//           {errors?.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//         </div>

//         {/* Category Input */}
//         <div className="flex-1">
//           <label className="block text-sm font-medium">Brand Category</label>
//           <select
//             value={subBrand.category}
//             onChange={(e) => handleSubBrandFieldChange('category', e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-md"
//           >
//             <option value="">Select</option>
//             <option value="Category 1">Category 1</option>
//             <option value="Category 2">Category 2</option>
//           </select>
//           {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
//         </div>
//       </div>

//       {/* Description Input */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium">Brand Description</label>
//         <textarea
//           value={subBrand.description}
//           onChange={(e) => handleSubBrandFieldChange('description', e.target.value)}
//           placeholder="Add Brand Details"
//           className="w-full p-2 border border-gray-300 rounded-md"
//           rows="3"
//         ></textarea>
//         {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
//       </div>

//       {/* File Input Section */}
//       {showFileInput && (
//         <div className="mb-4">
//           <div className="flex justify-between items-center mb-4">
//             <label className="block text-sm font-medium">Product Details</label>
//             <button onClick={downloadFormat} className="bg-gray-100 p-2 rounded-md">
//               Format Download
//             </button>
//           </div>
//           <div className="border border-dashed border-gray-400 p-4 text-center">
//             <input
//               id={`fileInput-${index}`}
//               type="file"
//               accept=".csv"
//               className="hidden"
//               onChange={handleFileInputChange}
//             />

//             {/* "Upload CSV"  */}
//             {!subBrand.file && (
//               <label
//                 htmlFor={`fileInput-${index}`}
//                 className="text-blue-500 cursor-pointer bg-gray-100 p-2 rounded"
//               >
//                 Upload CSV
//               </label>
//             )}

//             {/* Conditionally render  */}
//             {!subBrand.file && (
//               <p className="text-xs mt-2">File should be in CSV format and not larger than 5MB</p>
//             )}

//             {errors.file && <p className="text-red-500 text-sm mt-1">{errors.file}</p>}

//             {/* Display the file icon and name on the left after a file is selected */}
//             {subBrand.file && (
//               <div className="mt-2 flex items-center justify-start">
//                 {/* File icon */}
//                 <i className="fas fa-file-csv text-blue-500 mr-2 text-3xl"></i>
//                 <p className="text-gray-600">{subBrand.file.name}</p>

//                 {/* Delete button */}
//                 <button
//                   type="button"
//                   onClick={handleFileDelete}
//                   className="text-red-500 font-bold text-sm ml-auto"
//                 >
//                   X
//                 </button>
//               </div>
//             )}
//           </div>




//         </div>
//       )}
//     </div>
//   );
// };

// export default SubBrandSection;
// ************************************************************************************

// import React, { useState } from 'react';
// import AddProductModal from '../Modal/AddProductModal';
// import { AiOutlinePlus } from 'react-icons/ai';
// import ProductTable from '../ReusableData/ProductTable';

// const SubBrandSection = ({
//   subBrand,
//   index,
//   handleSubBrandChange,
//   handleFileChange,
//   showFileInput,
//   errors
// }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [hasManualProduct, setHasManualProduct] = useState(false);
//   const downloadUrl = '/path-to-download-format.csv';

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   const handleSubBrandFieldChange = (field, value) => {
//     handleSubBrandChange(index, field, value);
//   };

//   const handleAddProduct = (product) => {
//     console.log('Adding Product:', product);
//     setProducts((prevProducts) => {
//       const updatedProducts = [...prevProducts, product];
//       console.log('Updated Products Array:', updatedProducts);
//       return updatedProducts;
//     });
//     setHasManualProduct(true);
//   };

//   const handleOpenModal = () => {
//     setHasManualProduct(false);
//     openModal();
//   };

//   const handleFileInputChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const validExtensions = ['csv'];
//       const fileExtension = file.name.split('.').pop().toLowerCase();
//       const fileSizeLimit = 5 * 1024 * 1024; // 5MB

//       if (!validExtensions.includes(fileExtension)) {
//         handleFileChange(index, null, 'Invalid file type. Only CSV files are allowed.');
//         return;
//       }

//       if (file.size > fileSizeLimit) {
//         handleFileChange(index, null, 'File size exceeds the 5MB limit.');
//         return;
//       }

//       handleFileChange(index, file, null);
//     }
//   };

//   const downloadFormat = () => {
//     const link = document.createElement('a');
//     link.href = downloadUrl;
//     link.download = 'format-download.csv';
//     link.click();
//   };

//   const handleFileDelete = () => {
//     handleFileChange(index, null, null);
//   };

//   return (
//     <div className="mb-4">
//       {/* Sub Brand Header */}
//       <div className="text-sm font-medium mb-2"> {index + 1} : Sub Brand</div>

//       {/* Name Input */}
//       <div className="flex space-x-4 mb-4">
//         <div className="flex-1">
//           <label className="block text-sm font-medium">Name</label>
//           <input
//             type="text"
//             value={subBrand.name}
//             onChange={(e) => handleSubBrandChange(index, 'name', e.target.value)} // Because I passed the index so that it can identify the subbrand.
//             placeholder="Enter Sub Brand Name"
//             className="w-full p-2 border border-gray-300 rounded-md"
//           />
//           {errors?.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//         </div>

//         {/* Category Input */}
//         <div className="flex-1">
//           <label className="block text-sm font-medium">Brand Category</label>
//           <select
//             value={subBrand.category}
//             onChange={(e) => handleSubBrandFieldChange('category', e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-md"
//           >
//             <option value="">Select</option>
//             <option value="Category 1">Category 1</option>
//             <option value="Category 2">Category 2</option>
//           </select>
//           {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
//         </div>
//       </div>

//       {/* Description Input */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium">Brand Description</label>
//         <textarea
//           value={subBrand.description}
//           onChange={(e) => handleSubBrandFieldChange('description', e.target.value)}
//           placeholder="Add Brand Details"
//           className="w-full p-2 border border-gray-300 rounded-md"
//           rows="3"
//         ></textarea>
//         {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
//       </div>

//       {/* File Input Section (conditionally rendered) */}
//       {!hasManualProduct && showFileInput && (
//         <div className="mb-4">
//           <div className="flex justify-between items-center mb-4">
//             <label className="block text-sm font-medium">Product Details</label>
//             <button onClick={downloadFormat} className="bg-gray-100 p-2 rounded-md">
//               Format Download
//             </button>
//           </div>
//           <div className="border border-dashed border-gray-400 p-4 text-center">
//             <input
//               id={`fileInput-${index}`}
//               type="file"
//               accept=".csv"
//               className="hidden"
//               onChange={handleFileInputChange}
//             />

//             {/* "Upload CSV"  */}
//             {!subBrand.file && (
//               <label
//                 htmlFor={`fileInput-${index}`}
//                 className="text-blue-500 cursor-pointer bg-gray-100 p-2 rounded"
//               >
//                 Upload CSV
//               </label>
//             )}

//             {/* Conditionally render */}
//             {!subBrand.file && (
//               <p className="text-xs mt-2">File should be in CSV format and not larger than 5MB</p>
//             )}

//             {errors.file && <p className="text-red-500 text-sm mt-1">{errors.file}</p>}

//             {/* Display the file icon and name on the left after a file is selected */}
//             {subBrand.file && (
//               <div className="mt-2 flex items-center justify-start">
//                 {/* File icon */}
//                 <i className="fas fa-file-csv text-blue-500 mr-2 text-3xl"></i>
//                 <p className="text-gray-600">{subBrand.file.name}</p>

//                 {/* Delete button */}
//                 <button
//                   type="button"
//                   onClick={handleFileDelete}
//                   className="text-red-500 font-bold text-sm ml-auto"
//                 >
//                   X
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Manual Entry Button */}
//       {!hasManualProduct && (
//         <button
//           type="button"
//           onClick={handleOpenModal}
//           className="text-blue-500 cursor-pointer underline"
//         >
//           Enter Manually
//         </button>
//       )}

//       {/* Button and Modal for Adding Product */}
//       {hasManualProduct && (
//         <button
//           type="button"
//           onClick={openModal}
//           className="text-white flex items-center ml-auto cursor-pointer underline"
//         >
//           <AiOutlinePlus className="mr-1 bg-[#0D90C1] rounded-full" />
//         </button>
//       )}

//       <AddProductModal isOpen={isModalOpen} onClose={closeModal} onAddProduct={handleAddProduct} />
//       <ProductTable products={products} />
//     </div>
//   );
// };

// export default SubBrandSection;
import React, { useState } from 'react';
import AddProductModal from '../Modal/AddProductModal';
import { AiOutlinePlus } from 'react-icons/ai';
import ProductTable from '../ReusableData/ProductTable';

const SubBrandSection = ({
  subBrand,
  index,
  handleSubBrandChange,
  handleFileChange,
  showFileInput,
  errors
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [hasManualProduct, setHasManualProduct] = useState(false);
  const downloadUrl = '/path-to-download-format.csv';

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubBrandFieldChange = (field, value) => {
    handleSubBrandChange(index, field, value);
  };

  const handleAddProduct = (product) => {
    console.log('Adding Product:', product);
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts, product];
      console.log('Updated Products Array:', updatedProducts);
      return updatedProducts;
    });
    setHasManualProduct(true); // Set this to true when a product is added manually
  };

  const handleOpenModal = () => {
    setHasManualProduct(false);
    openModal();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validExtensions = ['csv'];
      const fileExtension = file.name.split('.').pop().toLowerCase();
      const fileSizeLimit = 5 * 1024 * 1024; // 5MB

      if (!validExtensions.includes(fileExtension)) {
        handleFileChange(index, null, 'Invalid file type. Only CSV files are allowed.');
        return;
      }

      if (file.size > fileSizeLimit) {
        handleFileChange(index, null, 'File size exceeds the 5MB limit.');
        return;
      }

      handleFileChange(index, file, null);
    }
  };

  const downloadFormat = () => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'format-download.csv';
    link.click();
  };

  const handleFileDelete = () => {
    handleFileChange(index, null, null);
  };

  return (
    <div className="mb-4">
      {/* Sub Brand Header */}
      <div className="text-sm font-medium mb-2"> {index + 1} : Sub Brand</div>

      {/* Name Input */}
      <div className="flex space-x-4 mb-4">
        <div className="flex-1">
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            value={subBrand.name}
            onChange={(e) => handleSubBrandChange(index, 'name', e.target.value)} // Because I passed the index so that it can identify the subbrand.
            placeholder="Enter Sub Brand Name"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors?.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Category Input */}
        <div className="flex-1">
          <label className="block text-sm font-medium">Brand Category</label>
          <select
            value={subBrand.category}
            onChange={(e) => handleSubBrandFieldChange('category', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select</option>
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
          </select>
          {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
        </div>
      </div>

      {/* Description Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium">Brand Description</label>
        <textarea
          value={subBrand.description}
          onChange={(e) => handleSubBrandFieldChange('description', e.target.value)}
          placeholder="Add Brand Details"
          className="w-full p-2 border border-gray-300 rounded-md"
          rows="3"
        ></textarea>
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
      </div>

      {/* File Input Section (conditionally rendered) */}
      {!hasManualProduct && showFileInput && (
        <div className="mb-4">
          <div className="flex justify-between items-center mb-4">
            <label className="block text-sm font-medium">Product Details</label>
            <button onClick={downloadFormat} className="bg-gray-100 p-2 rounded-md">
              Format Download
            </button>
          </div>
          <div className="border border-dashed border-gray-400 p-4 text-center">
            <input
              id={`fileInput-${index}`}
              type="file"
              accept=".csv"
              className="hidden"
              onChange={handleFileInputChange}
            />

            {/* "Upload CSV"  */}
            {!subBrand.file && (
              <label
                htmlFor={`fileInput-${index}`}
                className="text-blue-500 cursor-pointer bg-gray-100 p-2 rounded"
              >
                Upload CSV
              </label>
            )}

            {/* Conditionally render */}
            {!subBrand.file && (
              <p className="text-xs mt-2">File should be in CSV format and not larger than 5MB</p>
            )}

            {errors.file && <p className="text-red-500 text-sm mt-1">{errors.file}</p>}

            {/* Display the file icon and name on the left after a file is selected */}
            {subBrand.file && (
              <div className="mt-2 flex items-center justify-start">
                {/* File icon */}
                <i className="fas fa-file-csv text-blue-500 mr-2 text-3xl"></i>
                <p className="text-gray-600">{subBrand.file.name}</p>

                {/* Delete button */}
                <button
                  type="button"
                  onClick={handleFileDelete}
                  className="text-red-500 font-bold text-sm ml-auto"
                >
                  X
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Manual Entry Button */}
      {!hasManualProduct && (
        <button
          type="button"
          onClick={handleOpenModal}
          className="text-blue-500 cursor-pointer underline"
        >
          Enter Manually
        </button>
      )}

      {/* Button and Modal for Adding Product */}
      {hasManualProduct && (
        <button
          type="button"
          onClick={openModal}
          className="text-white flex items-center ml-auto cursor-pointer underline"
        >
          <AiOutlinePlus className="mr-1 bg-[#0D90C1] rounded-full" />
        </button>
      )}

      <AddProductModal isOpen={isModalOpen} onClose={closeModal} onAddProduct={handleAddProduct} />

      {/* Display Product Table when manual product entry is enabled */}
      {hasManualProduct && <ProductTable products={products} />}
    </div>
  );
};

export default SubBrandSection;
