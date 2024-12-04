import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaBars, FaTimes } from 'react-icons/fa';
import SubBrandSection from './SubBrandSection';
import Asidebar from '../../ReusableComponents/Asidebar';

import { useNavigate } from 'react-router-dom';

const BrandDetails = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [subBrands, setSubBrands] = useState([{ name: '', category: '', description: '', file: null }]);
  const [hasSubBrandAdded, setHasSubBrandAdded] = useState(false);

  // Form state
  const [brandName, setBrandName] = useState('');
  const [brandDescription, setBrandDescription] = useState('');
  const [errors, setErrors] = useState({});

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // New subBrand entry 
  const handleAddSubBrand = () => {
    setSubBrands([...subBrands, { name: '', category: '', description: '', file: null }]);
    setHasSubBrandAdded(true); // subbrand has been added
  };
  // remove subbrand entry
  const handleRemoveSubBrand = (index) => {
    setSubBrands(subBrands.filter((_, i) => i !== index));
    if (subBrands.length <= 1) setHasSubBrandAdded(false); // Reset condition if no subbrands remain
  };
  // update subrand change  data
  const handleSubBrandChange = (index, field, value) => {
    const updatedSubBrands = [...subBrands];
    updatedSubBrands[index][field] = value;
    setSubBrands(updatedSubBrands);
  };

  // csv file upload change subbrand

  const handleFileChange = (index, file) => {
    const updatedSubBrands = [...subBrands];
    updatedSubBrands[index].file = file; // Update file in state
    setSubBrands(updatedSubBrands);

    // Reset error for this file input if any
    const updatedErrors = { ...errors };
    delete updatedErrors[`subBrandFile_${index}`];
    setErrors(updatedErrors);
  };

  const handleSubBrandUpdate = (index, updatedData) => {
    setSubBrands((prevSubBrands) => {
      const updatedSubBrands = [...prevSubBrands];
      updatedSubBrands[index] = { ...updatedSubBrands[index], ...updatedData };
      return updatedSubBrands;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};



    // Validate Brand Details
    if (!brandName) validationErrors.brandName = 'Brand Name is required';
    if (!brandDescription) validationErrors.brandDescription = 'Brand Description is required';

    // Validate SubBrand Details
    subBrands.forEach((subBrand, index) => {
      if (!subBrand.name) validationErrors[`subBrandName_${index}`] = 'Sub Brand Name is required';
      if (!subBrand.category) validationErrors[`subBrandCategory_${index}`] = 'Sub Brand Category is required';
      if (!subBrand.description) validationErrors[`subBrandDescription_${index}`] = 'Sub Brand Description is required';

    });

    if (Object.keys(validationErrors).length > 0) {
      console.log('Validation Errors:', validationErrors);
      setErrors(validationErrors);
      return;
    }

    const data = {
      brandName,
      brandDescription,
      subBrands: subBrands.map((subBrand) => ({
        ...subBrand,
        file: subBrand.file ? subBrand.file.name : null, // Store file name or null
      })),
    };

    console.log('Final Form Data:', data);

    // Reset state
    setErrors({});
    setSubBrands([{ name: '', category: '', description: '', file: null }]);
    setBrandName('');
    setBrandDescription('');
    // navigate('/supplier/create-promotion');
  };


  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8 font-roboto">
      <button onClick={toggleSidebar} className="fixed top-4 left-4 md:hidden z-50 p-2 bg-blue-600 text-white rounded-md">
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      <Asidebar sidebarOpen={sidebarOpen} title="Become Our Supplier" />

      <div
        className={`bg-white w-full md:w-2/3 p-4 md:p-8 flex flex-col justify-between transition-all duration-300 ${sidebarOpen ? 'ml-0' : 'md:ml-1/3'
          }`}
      >
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-6">Add Brand Details</h2>

          <div className="mb-4">
            <label className="block text-sm font-semibold">Brand Name*</label>
            <input
              type="text"
              className="w-full border rounded px-4 py-2"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              placeholder="Name"
            />
            {errors.brandName && <div className="text-red-500 text-sm">{errors.brandName}</div>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold">Brand Details*</label>
            <textarea
              className="w-full border rounded px-4 py-2"
              value={brandDescription}
              onChange={(e) => setBrandDescription(e.target.value)}
              placeholder="Add Brand Description"
            />
            {errors.brandDescription && <div className="text-red-500 text-sm">{errors.brandDescription}</div>}
          </div>

          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold mr-4">Add Sub Brand Details</h3>
            <button
              type="button"
              onClick={handleAddSubBrand}
              className="text-white flex items-center p-4"
            >
              <AiOutlinePlus className="mr-1 bg-blue-400 rounded-full" />
            </button>
          </div>

          {subBrands.map((subBrand, index) => (
            <div key={index} className=" relative border-b border-gray-300 pb-4 mb-4">
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => handleRemoveSubBrand(index)}
                  className=" absolute top-2 right-2 text-red-500"
                >
                  <FaTimes />
                </button>
              )}

              <SubBrandSection
                key={index}
                index={index}
                subBrand={subBrand}
                handleSubBrandChange={handleSubBrandChange}
                handleFileChange={handleFileChange}
                showFileInput={!subBrand.products || subBrand.products.length === 0}
                onSubBrandUpdate={handleSubBrandUpdate}
                errors={{
                  name: errors[`subBrandName_${index}`],
                  category: errors[`subBrandCategory_${index}`],
                  description: errors[`subBrandDescription_${index}`],
                  // file: errors[`subBrandFile_${index}`],
                }}
              />
            </div>

          ))}


          <button
            type="submit"
            className="w-1/3 flex ml-auto items-center justify-center bg-[#0D90C1] text-white py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BrandDetails;







