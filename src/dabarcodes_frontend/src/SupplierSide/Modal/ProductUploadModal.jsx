import React from "react";
import { FaFileCsv } from "react-icons/fa";

const ProductUploadModal = ({ isOpen, closeModal }) => {
  const [file, setFile] = React.useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  const handleSubmit = () => {
    if (file) {
      console.log("Submitted file: ", file);
      alert(`File "${file.name}" submitted successfully!`);
    } else {
      alert("Please select a file to submit.");
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-center text-lg font-semibold mb-4">
              Upload CSV File for Product Information
            </h2>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
              <input
                type="file"
                accept=".csv"
                className="hidden"
                id="fileInput"
                onChange={handleFileChange}
              />
              <label
                htmlFor="fileInput"
                className="bg-gray-200 py-2 px-4 rounded-md cursor-pointer"
              >
                Upload File
              </label>
            </div>

            {file && (
              <div className="mt-4 p-4 border rounded-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaFileCsv className="text-blue-500 text-2xl mr-2" />
                    <div>
                      <p className="text-gray-700">{file.name}</p>
                      <p className="text-gray-500 text-sm">
                        {(file.size / 1024 / 1024).toFixed(1)} MB
                      </p>
                    </div>
                  </div>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={handleRemoveFile}
                  >
                    &times;
                  </button>
                </div>
              </div>
            )}
            <div className="text-left mt-4">
              <a href="" className="text-blue-500 hover:underline">
                Download CSV Format
              </a>
            </div>
            {file && (
              <div className="text-right mt-4">
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductUploadModal;