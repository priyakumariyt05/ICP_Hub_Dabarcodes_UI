// import React, { useState } from 'react';

// const UploadModal = ({ isOpen, onClose }) => {
//     const [file, setFile] = useState(null);

//     const handleFileChange = (event) => {
//         setFile(event.target.files[0]);
//     };

//     const handleUpload = () => {
//         console.log('Uploading file:', file);
//         // Implement the upload logic here
//     };

//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full font-roboto">
//             <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
//                 <div className="mt-3 text-center">
//                     <h3 className="text-lg leading-6 font-medium text-gray-900">Upload File for Store Information</h3>
//                     <div className="mt-2">
//                         <input type="file" onChange={handleFileChange} className="my-4"/>
//                         <button onClick={handleUpload} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Upload File</button>
//                     </div>
//                     <div className="mt-4">
//                         <button onClick={onClose} className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">Close</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UploadModal;
import React, {useState} from "react";

const UploadModal = ({onClose}) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    console.log("Uploading file:", file);
    // Implement the upload logic here
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full font-roboto">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Upload File for Store Information
          </h3>
          <div className="mt-2">
            <input type="file" onChange={handleFileChange} className="my-4" />
            <button
              onClick={handleUpload}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Upload File
            </button>
          </div>
          <div className="mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;


// import React, { useState } from 'react';
// import UploadModal from './UploadModal'; // Adjust the path as needed

// const ParentComponent = () => {
//     const [isModalOpen, setModalOpen] = useState(false);

//     const openModal = () => setModalOpen(true);
//     const closeModal = () => setModalOpen(false);

//     return (
//         <div>
//             <button onClick={openModal} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">Open Upload Modal</button>
//             <UploadModal isOpen={isModalOpen} onClose={closeModal} />
//         </div>
//     );
// };

// export default ParentComponent;

