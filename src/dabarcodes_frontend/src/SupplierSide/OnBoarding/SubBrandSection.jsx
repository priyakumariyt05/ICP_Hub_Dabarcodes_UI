
// workin correct below
// import React from 'react';

// const SubBrandSection = ({ subBrand, index, handleSubBrandChange, handleFileChange }) => {
//     const downloadUrl = '/path-to-download-format.csv';

//     const handleSubBrandFieldChange = (field, value) => {
//         handleSubBrandChange(index, field, value);
//     };

//     const handleFileInputChange = (e) => {
//         handleFileChange(index, e.target.files[0]);
//     };

//     const downloadFormat = () => {
//         const link = document.createElement('a');
//         link.href = downloadUrl;
//         link.download = 'format-download.csv';
//         link.click();
//     };

//     return (
//         <>
//             <div className="mb-4">
//                 <div className="flex space-x-4 mb-4">
//                     {/* Sub Brand Name Input */}
//                     <div className="flex-1">
//                         <label className="block text-sm font-medium">Name</label>
//                         <input
//                             type="text"
//                             value={subBrand.name}
//                             onChange={(e) => handleSubBrandFieldChange('name', e.target.value)}
//                             placeholder="Enter Sub Brand Name"
//                             className="w-full p-2 border border-gray-300 rounded-md"
//                         />
//                     </div>

//                     {/* Brand Category Select */}
//                     <div className="flex-1">
//                         <label className="block text-sm font-medium">Brand Category</label>
//                         <select
//                             value={subBrand.category}
//                             onChange={(e) => handleSubBrandFieldChange('category', e.target.value)}
//                             className="w-full p-2 border border-gray-300 rounded-md"
//                         >
//                             <option value="">Select</option>
//                             <option value="Category 1">Category 1</option>
//                             <option value="Category 2">Category 2</option>
//                         </select>
//                     </div>
//                 </div>

//                 {/* Brand Description Textarea */}
//                 <div className="mb-4">
//                     <label className="block text-sm font-medium">Brand Description</label>
//                     <textarea
//                         value={subBrand.description}
//                         onChange={(e) => handleSubBrandFieldChange('description', e.target.value)}
//                         placeholder="Add Brand Details"
//                         className="w-full p-2 border border-gray-300 rounded-md"
//                         rows="3"
//                     ></textarea>
//                 </div>

//                 {/* File Upload */}
//                 <div className="mb-4">
//                     <div className="flex justify-between items-center mb-4">
//                         <label className="block text-sm font-medium">Product Details</label>
//                         <button onClick={downloadFormat} className="bg-gray-100 p-2 rounded-md">
//                             Format Download
//                         </button>
//                     </div>

//                     <div className="border border-dashed border-gray-400 p-4 text-center">
//                         <input
//                             id="upload-logo"
//                             type="file"
//                             onChange={handleFileInputChange}
//                             accept=".csv"
//                             className="hidden"
//                         />
//                         <label htmlFor="upload-logo" className="cursor-pointer bg-gray-100 p-2 rounded inline-block">
//                             {subBrand.file ? subBrand.file.name : "Upload CSV file"}
//                         </label>
//                         {subBrand.file && (
//                             <p className="text-sm text-gray-600 mt-2">{subBrand.file.name}</p>
//                         )}
//                         <p className="text-xs text-gray-500 mt-2">
//                             File should be in .csv format with a max file size of 5MB.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default SubBrandSection;
// working correct 
// working
// import React from 'react';

// const SubBrandSection = ({ subBrand, index, handleSubBrandChange, handleFileChange, showFileInput }) => {
//   const downloadUrl = '/path-to-download-format.csv';

//   const handleSubBrandFieldChange = (field, value) => {
//     handleSubBrandChange(index, field, value);
//   };

//   const handleFileInputChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
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
//       <div className="flex space-x-4 mb-4">
//         <div className="flex-1">
//           <label className="block text-sm font-medium">Name</label>
//           <input
//             type="text"
//             value={subBrand.name}
//             onChange={(e) => handleSubBrandFieldChange('name', e.target.value)}
//             placeholder="Enter Sub Brand Name"
//             className="w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>

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
//         </div>
//       </div>

//       <div className="mb-4">
//         <label className="block text-sm font-medium">Brand Description</label>
//         <textarea
//           value={subBrand.description}
//           onChange={(e) => handleSubBrandFieldChange('description', e.target.value)}
//           placeholder="Add Brand Details"
//           className="w-full p-2 border border-gray-300 rounded-md"
//           rows="3"
//         ></textarea>
//       </div>

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
//             <p className="text-xs mt-2">File should be in jpg, png format not larger than 5MB</p>

//             {/* Display uploaded file name */}
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
// add validation
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SubBrandSection = ({ subBrand, index, handleSubBrandChange, handleFileChange, showFileInput }) => {
  const downloadUrl = '/path-to-download-format.csv';

  const formik = useFormik({
    initialValues: {
      name: subBrand.name,
      category: subBrand.category,
      description: subBrand.description,
      file: subBrand.file,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      category: Yup.string().required('Category is required'),
      description: Yup.string().required('Description is required'),
      file: Yup.mixed().test(
        'fileSize',
        'File size is too large, max 5MB',
        value => !value || (value && value.size <= 5242880) // 5MB
      ),
    }),
    onSubmit: (values) => {
      handleSubBrandChange(index, 'name', values.name);
      handleSubBrandChange(index, 'category', values.category);
      handleSubBrandChange(index, 'description', values.description);
      handleFileChange(index, values.file);
    },
  });

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    formik.setFieldValue('file', file);
  };

  const downloadFormat = () => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'format-download.csv';
    link.click();
  };

  return (
    <form onSubmit={formik.handleSubmit} className="mb-4">
      <div className="flex space-x-4 mb-4">
        <div className="flex-1">
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Enter Sub Brand Name"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {formik.errors.name && formik.touched.name && (
            <p className="text-red-500 text-xs">{formik.errors.name}</p>
          )}
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium">Brand Category</label>
          <select
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select</option>
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
          </select>
          {formik.errors.category && formik.touched.category && (
            <p className="text-red-500 text-xs">{formik.errors.category}</p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Brand Description</label>
        <textarea
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          placeholder="Add Brand Details"
          className="w-full p-2 border border-gray-300 rounded-md"
          rows="3"
        ></textarea>
        {formik.errors.description && formik.touched.description && (
          <p className="text-red-500 text-xs">{formik.errors.description}</p>
        )}
      </div>

      {showFileInput && (
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
            <label
              htmlFor={`fileInput-${index}`}
              className="text-blue-500 cursor-pointer bg-gray-100 p-2 rounded"
            >
              Upload CSV
            </label>
            <p className="text-xs mt-2">File should be in jpg, png format not larger than 5MB</p>

            {subBrand.file && (
              <div className="mt-2">
                <p className="text-gray-600">{subBrand.file.name}</p>
              </div>
            )}
            {formik.errors.file && formik.touched.file && (
              <p className="text-red-500 text-xs">{formik.errors.file}</p>
            )}
          </div>
        </div>
      )}
    </form>
  );
};

export default SubBrandSection;
