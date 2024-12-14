
import React, { useState } from 'react';
import AddProductModal from '../Modal/AddProductModal';
import { AiOutlinePlus } from 'react-icons/ai';
import ProductTable from '../ReusableData/ProductTable';

const FileOrProduct = ({ onSubBrandUpdate, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]); 
  const [hasManualProduct, setHasManualProduct] = useState(false); 
  const [fileUploaded, setFileUploaded] = useState(false); 
  const [uploadedFileName, setUploadedFileName] = useState(''); 

  const downloadUrl = '/path-to-download-format.csv';

  // Open modal for manual product entry
  const openModal = () => {
    setIsModalOpen(true); // Open modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFileName(file.name); // Store the uploaded file name
      setFileUploaded(true);
      setHasManualProduct(false); // Reset manual product flag when CSV is uploaded
      setProducts([]); // Clear the products when file is uploaded
      // Only pass file data, not products
      onSubBrandUpdate(index, { file: file, products: null });
    }
  };

  // Remove uploaded file
  const handleRemoveFile = () => {
    setUploadedFileName('');
    setFileUploaded(false);
    setHasManualProduct(false); // Reset manual product flag
    setProducts([]); // Clear products when file is removed
    // Only pass null for both file and products
    onSubBrandUpdate(index, { file: null, products: null });
  };

  // Add a product manually
  const handleAddProduct = (product) => {
    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
    setHasManualProduct(true);
    setFileUploaded(false); // Reset file flag when products are added manually
    // Only pass products data, not file
    onSubBrandUpdate(index, { products: updatedProducts, file: null });
    closeModal(); // Close modal after adding product
  };
  const downloadFormat = () => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'format-download.csv';
    link.click();
  };

  return (
    <>

      <div className="flex justify-between items-center mb-4">
  <label className="block text-sm font-medium">Product Details</label>
  <button onClick={downloadFormat} className="bg-gray-100 p-2 rounded-md">
    Format Download
  </button>
</div>

{/* Show file upload option if no file is uploaded and no manual products */}
{!fileUploaded && !hasManualProduct && (
  <div className="border border-dashed border-gray-400 p-4 text-center mb-4">
    <input
      type="file"
      onChange={handleFileUpload}
      className="hidden"
      accept=".csv"
      id="fileInput"
    />
    <label
      htmlFor="fileInput"
      className="text-blue-500 cursor-pointer bg-gray-100 p-2 rounded"
    >
      Upload CSV
    </label>
    <p className="text-xs mt-2">File should be in CSV format and not larger than 5MB</p>
    {/* <p>
      Or{' '}
      <button
        type="button"
        onClick={openModal}
        className="text-blue-500 underline"
      >
        Enter Manually
      </button>
    </p> */}
  </div>
)}

{/* Display file name and removal button once the file is uploaded */}
{fileUploaded && (
  <div className="mb-4 flex justify-between items-center border border-gray-400 p-4">
    <div className="flex items-center">
      <i className="fas fa-file-csv text-blue-500 mr-2 text-3xl"></i>
      <p className="text-gray-600">{uploadedFileName}</p>
    </div>
    <button
      type="button"
      onClick={handleRemoveFile}
      className="text-red-500 font-bold text-sm"
    >
     X
    </button>
  </div>
)}      
 {!fileUploaded && !hasManualProduct && (
        <button
           type="button"
           onClick={openModal}
           className="text-blue-500 underline"
        >
           Enter Manually
       </button> 
)}

{/* "Enter Manually" button remains outside of the file input */}
{hasManualProduct && (
  <button
    type="button"
    onClick={openModal}
    className="text-white flex items-center ml-auto cursor-pointer underline"
  >
    <AiOutlinePlus className="mr-1 bg-[#0D90C1] rounded-full" />
  </button>
)}

{/* Display product table if there are manual products or the file is uploaded */}
{(fileUploaded || hasManualProduct) && (
  <ProductTable products={products} />
)}



      <AddProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onAddProduct={handleAddProduct}
      />
    </>
  );
};

export default FileOrProduct;



