
// import React, { useState } from 'react';
// import { AiOutlinePlus } from 'react-icons/ai';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import SubBrandSection from './SubBrandSection';
// import Asidebar from '../../ReusableComponents/Asidebar';
// import AddProductModal from '../Modal/AddProductModal';

// import { useNavigate } from 'react-router-dom';
// import ProductTable from '../ReusableData/ProductTable';

// const BrandDetails = () => {
//   const navigate = useNavigate();
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [brandName, setBrandName] = useState('');
//   const [brandDescription, setBrandDescription] = useState('');
//   const [subBrands, setSubBrands] = useState([{ name: '', category: '', description: '', file: null }]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [hasManualProduct, setHasManualProduct] = useState(false); // Track if a product has been manually added

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   const handleAddSubBrand = () => {
//     setSubBrands([...subBrands, { name: '', category: '', description: '', file: null }]);
//   };

//   const handleRemoveSubBrand = (index) => {
//     setSubBrands(subBrands.filter((_, i) => i !== index));
//   };

//   const handleSubBrandChange = (index, field, value) => {
//     const updatedSubBrands = [...subBrands];
//     updatedSubBrands[index][field] = value;
//     setSubBrands(updatedSubBrands);
//   };

//   const handleFileChange = (index, file) => {
//     const updatedSubBrands = [...subBrands];
//     updatedSubBrands[index].file = file;
//     setSubBrands(updatedSubBrands);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = {
//       brandName,
//       brandDescription,
//       subBrands: subBrands.map(subBrand => ({
//         ...subBrand,
//         file: subBrand.file ? subBrand.file.name : '',
//       })),
//     };
//     console.log('Form Data:', data);
//     setBrandName('');
//     setBrandDescription('');
//     setSubBrands([{ name: '', category: '', description: '', file: null }]);

//     // Navigate to the desired route
//     navigate('/supplier/create-promotion');
//   };

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   const handleAddProduct = (product) => {
//     console.log("Adding product:", product);
//     setProducts([...products, product]);
//     setHasManualProduct(true);
//   };

//   const handleOpenModal = () => {
//     setHasManualProduct(false); // Reset the manual product 
//     openModal();
//   };

//   return (
//     <>
//       <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8 font-roboto">
//         <button onClick={toggleSidebar} className="fixed top-4 left-4 md:hidden z-50 p-2 bg-blue-600 text-white rounded-md">
//           {sidebarOpen ? <FaTimes /> : <FaBars />}
//         </button>

//         <Asidebar sidebarOpen={sidebarOpen} title="Become Our Supplier" />

//         <div className={`bg-white w-full md:w-2/3 p-4 md:p-8 flex flex-col justify-between transition-all duration-300 ${sidebarOpen ? 'ml-0' : 'md:ml-1/3'}`}>
//           <form onSubmit={handleSubmit}>
//             <h2 className="text-2xl font-bold mb-6">Add Brand Details</h2>

//             <div className="mb-4">
//               <label className="block text-sm font-semibold">Brand Name*</label>
//               <input
//                 type="text"
//                 className="w-full border rounded px-4 py-2"
//                 value={brandName}
//                 onChange={(e) => setBrandName(e.target.value)}
//                 placeholder="Name"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-semibold">Brand Details*</label>
//               <textarea
//                 className="w-full border rounded px-4 py-2"
//                 value={brandDescription}
//                 onChange={(e) => setBrandDescription(e.target.value)}
//                 placeholder="Add Brand Description"
//               />
//             </div>

//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-lg font-semibold mr-4">Add Sub Brand Details</h3>
//               <button
//                 type="button"
//                 onClick={handleAddSubBrand}
//                 className="text-white flex items-center p-4"
//               >
//                 <AiOutlinePlus className="mr-1 bg-blue-400 rounded-full" />
//               </button>
//             </div>

//             {subBrands.map((subBrand, index) => (
//               <div key={index} className="relative mb-4 p-4 rounded">
//                 <SubBrandSection
//                   subBrand={subBrand}
//                   index={index}
//                   handleSubBrandChange={handleSubBrandChange}
//                   handleFileChange={handleFileChange}
//                 />
//                 {index > 0 && (
//                   <button
//                     type="button"
//                     onClick={() => handleRemoveSubBrand(index)}
//                     className="absolute top-2 right-2 text-red-500"
//                   >
//                     <FaTimes />
//                   </button>
//                 )}
//               </div>
//             ))}

//             {!hasManualProduct && (
//               <button
//                 type="button"
//                 onClick={handleOpenModal}
//                 className="text-blue-500 cursor-pointer underline"
//               >
//                 Enter Manually
//               </button>
//             )}

//             {hasManualProduct && (
//               <button
//                 type="button"
//                 onClick={openModal}
//                 className="text-white flex items-center ml-auto cursor-pointer underline"
//               >
//                 <AiOutlinePlus className="mr-1 bg-blue-400 rounded-full" />
//               </button>
//             )}


//             <AddProductModal isOpen={isModalOpen} onClose={closeModal} onAddProduct={handleAddProduct} />
//             <ProductTable products={products} />

//             <button
//               type="submit"
//               className="w-1/2 flex m-auto items-center justify-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
//             >
//               Submit
//             </button>
//           </form>
//           {/* {hasManualProduct && (
//         <button
//           type="button"
//           onClick={openModal}
//           className="text-white flex items-center ml-auto cursor-pointer underline"
//         >
//           <AiOutlinePlus className="mr-1 bg-blue-400 rounded-full" />
//         </button>
//       )}


//       <AddProductModal isOpen={isModalOpen} onClose={closeModal} onAddProduct={handleAddProduct} />
//       <ProductTable products={products} /> */}
//         </div>

//       </div>


//     </>
//   );
// };

// export default BrandDetails;
// ///////////// end..............



// import React, { useState } from 'react';
// import { AiOutlinePlus } from 'react-icons/ai';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import SubBrandSection from './SubBrandSection';
// import Asidebar from '../../ReusableComponents/Asidebar';
// import AddProductModal from '../Modal/AddProductModal';
// import { useNavigate } from 'react-router-dom';
// import ProductTable from '../ReusableData/ProductTable';

// const BrandDetails = () => {
//   const navigate = useNavigate();
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [brandName, setBrandName] = useState('');
//   const [brandDescription, setBrandDescription] = useState('');
//   const [subBrands, setSubBrands] = useState([{ name: '', category: '', description: '', file: null }]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [hasManualProduct, setHasManualProduct] = useState(false); 

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   const handleAddSubBrand = () => {
//     setSubBrands([...subBrands, { name: '', category: '', description: '', file: null }]);
//   };

//   const handleRemoveSubBrand = (index) => {
//     setSubBrands(subBrands.filter((_, i) => i !== index));
//   };

//   const handleSubBrandChange = (index, field, value) => {
//     const updatedSubBrands = [...subBrands];
//     updatedSubBrands[index][field] = value;
//     setSubBrands(updatedSubBrands);
//   };

//   const handleFileChange = (index, file) => {
//     const updatedSubBrands = [...subBrands];
//     updatedSubBrands[index].file = file;
//     setSubBrands(updatedSubBrands);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = {
//       brandName,
//       brandDescription,
//       subBrands: subBrands.map(subBrand => ({
//         ...subBrand,
//         file: subBrand.file ? subBrand.file.name : '',
//       })),
//     };
//     console.log('Form Data:', data);
//     setBrandName('');
//     setBrandDescription('');
//     setSubBrands([{ name: '', category: '', description: '', file: null }]);
//     navigate('/supplier/create-promotion');
//   };

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   const handleAddProduct = (product) => {
//     setProducts([...products, product]);
//     setHasManualProduct(true);
//   };

//   const handleOpenModal = () => {
//     setHasManualProduct(false);
//     openModal();
//   };

//   return (
//     <>
//       <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8 font-roboto">
//         <button onClick={toggleSidebar} className="fixed top-4 left-4 md:hidden z-50 p-2 bg-blue-600 text-white rounded-md">
//           {sidebarOpen ? <FaTimes /> : <FaBars />}
//         </button>

//         <Asidebar sidebarOpen={sidebarOpen} title="Become Our Supplier" />

//         <div className={`bg-white w-full md:w-2/3 p-4 md:p-8 flex flex-col justify-between transition-all duration-300 ${sidebarOpen ? 'ml-0' : 'md:ml-1/3'}`}>
//           <form onSubmit={handleSubmit}>
//             <h2 className="text-2xl font-bold mb-6">Add Brand Details</h2>

//             <div className="mb-4">
//               <label className="block text-sm font-semibold">Brand Name*</label>
//               <input
//                 type="text"
//                 className="w-full border rounded px-4 py-2"
//                 value={brandName}
//                 onChange={(e) => setBrandName(e.target.value)}
//                 placeholder="Name"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-semibold">Brand Details*</label>
//               <textarea
//                 className="w-full border rounded px-4 py-2"
//                 value={brandDescription}
//                 onChange={(e) => setBrandDescription(e.target.value)}
//                 placeholder="Add Brand Description"
//               />
//             </div>

//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-lg font-semibold mr-4">Add Sub Brand Details</h3>
//               <button
//                 type="button"
//                 onClick={handleAddSubBrand}
//                 className="text-white flex items-center p-4"
//               >
//                 <AiOutlinePlus className="mr-1 bg-blue-400 rounded-full" />
//               </button>
//             </div>

//             {subBrands.map((subBrand, index) => (
//               <div key={index} className="relative mb-4 p-4 rounded">
//                 <SubBrandSection
//                   subBrand={subBrand}
//                   index={index}
//                   handleSubBrandChange={handleSubBrandChange}
//                   handleFileChange={handleFileChange}
//                   showFileInput={!hasManualProduct} // Pass prop to control visibility
//                 />
//                 {index > 0 && (
//                   <button
//                     type="button"
//                     onClick={() => handleRemoveSubBrand(index)}
//                     className="absolute top-2 right-2 text-red-500"
//                   >
//                     <FaTimes />
//                   </button>
//                 )}
//               </div>
//             ))}

//             {!hasManualProduct && (
//               <button
//                 type="button"
//                 onClick={handleOpenModal}
//                 className="text-blue-500 cursor-pointer underline"
//               >
//                 Enter Manually
//               </button>
//             )}

//             {hasManualProduct && (
//               <button
//                 type="button"
//                 onClick={openModal}
//                 className="text-white flex items-center ml-auto cursor-pointer underline"
//               >
//                 <AiOutlinePlus className="mr-1 bg-[#0D90C1] rounded-full" />
//               </button>
//             )}

//             <AddProductModal isOpen={isModalOpen} onClose={closeModal} onAddProduct={handleAddProduct} />
//             <ProductTable products={products} />

//             <button
//               type="submit"
//               className="w-1/3 flex ml-auto items-center justify-center bg-[#0D90C1] text-white py-2 rounded-md hover:bg-blue-600"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BrandDetails;
// add validation 

import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SubBrandSection from './SubBrandSection';
import Asidebar from '../../ReusableComponents/Asidebar';
import AddProductModal from '../Modal/AddProductModal';
import { useNavigate } from 'react-router-dom';
import ProductTable from '../ReusableData/ProductTable';

const BrandDetails = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [subBrands, setSubBrands] = useState([{ name: '', category: '', description: '', file: null }]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [hasManualProduct, setHasManualProduct] = useState(false); 

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddSubBrand = () => {
    setSubBrands([...subBrands, { name: '', category: '', description: '', file: null }]);
  };

  const handleRemoveSubBrand = (index) => {
    setSubBrands(subBrands.filter((_, i) => i !== index));
  };

  const handleSubBrandChange = (index, field, value) => {
    const updatedSubBrands = [...subBrands];
    updatedSubBrands[index][field] = value;
    setSubBrands(updatedSubBrands);
  };

  const handleFileChange = (index, file) => {
    const updatedSubBrands = [...subBrands];
    updatedSubBrands[index].file = file;
    setSubBrands(updatedSubBrands);
  };

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
    setHasManualProduct(true);
  };

  const handleOpenModal = () => {
    setHasManualProduct(false);
    openModal();
  };

  
  const validationSchema = Yup.object({
    brandName: Yup.string().required('Brand Name is required'),
    brandDescription: Yup.string().required('Brand Description is required'),
  });

  const formik = useFormik({
    initialValues: {
      brandName: '',
      brandDescription: '',
    },
    validationSchema,
    onSubmit: (values) => {
      const data = {
        ...values,
        subBrands: subBrands.map(subBrand => ({
          ...subBrand,
          file: subBrand.file ? subBrand.file.name : '',
        })),
      };
      console.log('Form Data:', data);
      formik.resetForm();
      setSubBrands([{ name: '', category: '', description: '', file: null }]);
      navigate('/supplier/create-promotion');
    },
  });

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8 font-roboto">
        <button onClick={toggleSidebar} className="fixed top-4 left-4 md:hidden z-50 p-2 bg-blue-600 text-white rounded-md">
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>

        <Asidebar sidebarOpen={sidebarOpen} title="Become Our Supplier" />

        <div className={`bg-white w-full md:w-2/3 p-4 md:p-8 flex flex-col justify-between transition-all duration-300 ${sidebarOpen ? 'ml-0' : 'md:ml-1/3'}`}>
          <form onSubmit={formik.handleSubmit}>
            <h2 className="text-2xl font-bold mb-6">Add Brand Details</h2>

            <div className="mb-4">
              <label className="block text-sm font-semibold">Brand Name*</label>
              <input
                type="text"
                className="w-full border rounded px-4 py-2"
                name="brandName"
                value={formik.values.brandName}
                onChange={formik.handleChange}
                placeholder="Name"
              />
              {formik.touched.brandName && formik.errors.brandName ? (
                <div className="text-red-500 text-sm">{formik.errors.brandName}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold">Brand Details*</label>
              <textarea
                className="w-full border rounded px-4 py-2"
                name="brandDescription"
                value={formik.values.brandDescription}
                onChange={formik.handleChange}
                placeholder="Add Brand Description"
              />
              {formik.touched.brandDescription && formik.errors.brandDescription ? (
                <div className="text-red-500 text-sm">{formik.errors.brandDescription}</div>
              ) : null}
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
              <div key={index} className="relative mb-4 p-4 rounded">
                <SubBrandSection
                  subBrand={subBrand}
                  index={index}
                  handleSubBrandChange={handleSubBrandChange}
                  handleFileChange={handleFileChange}
                  showFileInput={!hasManualProduct}
                />
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveSubBrand(index)}
                    className="absolute top-2 right-2 text-red-500"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>
            ))}

            {!hasManualProduct && (
              <button
                type="button"
                onClick={handleOpenModal}
                className="text-blue-500 cursor-pointer underline"
              >
                Enter Manually
              </button>
            )}

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
            <ProductTable products={products} />

            <button
              type="submit"
              className="w-1/3 flex ml-auto items-center justify-center bg-[#0D90C1] text-white py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BrandDetails;
