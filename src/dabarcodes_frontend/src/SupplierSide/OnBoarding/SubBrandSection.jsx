import React, { useState } from 'react';
import AddProductModal from '../Modal/AddProductModal';
import { AiOutlinePlus } from 'react-icons/ai';
import ProductTable from '../ReusableData/ProductTable';
import { useRef } from 'react';

const SubBrandSection = ({
  subBrand,
  index,
  handleSubBrandChange,
  handleFileChange,
  showFileInput,
  onSubBrandUpdate,
  errors,
}) => {
  const fileInputRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]); // Stores manually added products
  const [hasManualProduct, setHasManualProduct] = useState(false); // manual product entry
  const downloadUrl = '/path-to-download-format.csv';


  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  //  adding a product manually
  const handleAddProduct = (product) => {
    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
    setHasManualProduct(true);

    // Update parent about manual products
    onSubBrandUpdate(index, { products: updatedProducts, file: null });
  };

  // Handle file selection
  // const handleFileInputChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const validExtensions = ['csv'];
  //     const fileExtension = file.name.split('.').pop().toLowerCase();
  //     const fileSizeLimit = 5 * 1024 * 1024; // 5MB limit

  //     if (!validExtensions.includes(fileExtension)) {
  //       handleFileChange(index, null, 'Invalid file type. Only CSV files are allowed.');
  //       return;
  //     }

  //     if (file.size > fileSizeLimit) {
  //       handleFileChange(index, null, 'File size exceeds the 5MB limit.');
  //       return;
  //     }

  //     handleFileChange(index, file, null);
  //     setHasManualProduct(false); // Disable manual product entry if a file is uploaded

  //     // Update parent about the uploaded file
  //     onSubBrandUpdate(index, { file, products: [] });
  //   }
  // };

  // // Handle file remove
  // const handleFileDelete = () => {
  //   handleFileChange(index, null, null);
  //   onSubBrandUpdate(index, { file: null, products });
  // };
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validExtensions = ['csv'];
      const fileExtension = file.name.split('.').pop().toLowerCase();
      const fileSizeLimit = 5 * 1024 * 1024; // 5MB limit

      if (!validExtensions.includes(fileExtension)) {
        handleFileChange(index, null, 'Invalid file type. Only CSV files are allowed.');
        resetFileInput();
        return;
      }

      if (file.size > fileSizeLimit) {
        handleFileChange(index, null, 'File size exceeds the 5MB limit.');
        resetFileInput();
        return;
      }

      handleFileChange(index, file, null);
      setHasManualProduct(false); // Disable manual product entry if a file is uploaded

      // Update parent about the uploaded file
      onSubBrandUpdate(index, { file, products: [] });

      // Reset file input to allow re-uploading the same file
      resetFileInput();
    }
  };

  const handleFileDelete = () => {
    handleFileChange(index, null, null);
    onSubBrandUpdate(index, { file: null, products });

    // Reset file input to allow re-uploading the same file
    resetFileInput();
  };

  const resetFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Clear the file input value
    }
  };
  const downloadFormat = () => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'format-download.csv';
    link.click();
  };


  return (
    <div className="mb-4">
      <div className="text-sm font-medium mb-2">{index + 1}: Sub Brand</div>

      <div className="flex space-x-4 mb-4">
        <div className="flex-1">
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            value={subBrand.name}
            onChange={(e) => handleSubBrandChange(index, 'name', e.target.value)}
            placeholder="Enter Sub Brand Name"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors?.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium">Brand Category</label>
          <select
            value={subBrand.category}
            onChange={(e) => handleSubBrandChange(index, 'category', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select</option>
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
          </select>
          {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Brand Description</label>
        <textarea
          value={subBrand.description}
          onChange={(e) => handleSubBrandChange(index, 'description', e.target.value)}
          placeholder="Add Brand Details"
          className="w-full p-2 border border-gray-300 rounded-md"
          rows="3"
        ></textarea>
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
      </div>

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
              ref={fileInputRef}
              onChange={handleFileInputChange}
            />
            {!subBrand.file && (
              <label
                htmlFor={`fileInput-${index}`}
                className="text-blue-500 cursor-pointer bg-gray-100 p-2 rounded"
              >
                Upload CSV
              </label>
            )}
            {!subBrand.file && (
              <p className="text-xs mt-2">File should be in CSV format and not larger than 5MB</p>
            )}
            {subBrand.file && (
              <div className="mt-2 flex items-center">
                <i className="fas fa-file-csv text-blue-500 mr-2 text-3xl"></i>
                <p className="text-gray-600">{subBrand.file.name}</p>
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

 
      {!subBrand.file && !hasManualProduct && (
        <button
          type="button"
          onClick={openModal}
          className="text-blue-500 underline"
        >
          Enter Manually
        </button>
      )}
      {errors.fileOrProduct && <div className="text-red-500 text-sm">{errors.fileOrProduct}</div>}
      {hasManualProduct && (
        <button
          type="button"
          onClick={openModal}
          className="text-white flex items-center ml-auto cursor-pointer underline"
        >
          <AiOutlinePlus className="mr-1 bg-[#0D90C1] rounded-full" />
        </button>
      )}


      {hasManualProduct && <ProductTable products={products} />}

      <AddProductModal isOpen={isModalOpen} onClose={closeModal} onAddProduct={handleAddProduct} />
    </div>
  );
};

export default SubBrandSection;
// ................................................................


// import React, { useState } from 'react';

// const SubBrandSection = ({ subBrand, index, handleSubBrandChange,errors  }) => {
//  const handleSubBrandFieldChange = (field, value) => {

//     ((prev) => ({ ...prev, [field]: errors }));
//     handleSubBrandChange(index, field, value);
//   };
//  return (
//     <div className="mb-4">

//       <div className="text-sm font-medium mb-2"> {index + 1} : Sub Brand</div>
//         <div className="flex space-x-4 mb-4">
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
//         type="text"
//           value={subBrand.description}
//           onChange={(e) => handleSubBrandFieldChange('description', e.target.value)}
//           placeholder="Add Brand Details"
//           className="w-full p-2 border border-gray-300 rounded-md"
//           rows="3"
//         ></textarea>
//         {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
//       </div>
//  </div>
//   );
// };

// export default SubBrandSection;

