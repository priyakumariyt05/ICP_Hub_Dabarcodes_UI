
import React, {useState} from "react";
// import StoreUploadModal from "./Modals/StoreUploadModal";
import ProductUploadModal from "../Modals/ProductUploadModal";
import StoreUploadModal from "../Modals/StoreUploadModal"
import {useNavigate} from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate()
  // State for controlling modals
  const [isStoreModalOpen, setStoreModalOpen] = useState(false);
  const [isProductModalOpen, setProductModalOpen] = useState(false);

  return (
    <div className="">
      <h1 className="my-8 font-bold text-lg">
        Hi, John! You’re currently viewing: Reliance Mart
      </h1>
      <h2 className="text-2xl font-bold mb-4 ">Welcome to daBarcodes</h2>
      <div className="bg-white border rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold">Get Started with daBarcodes</h3>
        <p className="mb-4">
          To get started with daBarcodes, download the format and fill the data.
          For more information, refer to the documentation.
        </p>
        {/* <button className="border shadow-sm text-black px-4 py-2 rounded-lg">
          Read Documentation
        </button> */}
        <button
          className="bg-[#0D90C1]  text-white px-4 py-2 rounded-lg"
          onClick={() => navigate("/dashboard/documentation")}
        >
          Read Documentation
        </button>
      </div>
      <div className="bg-white border rounded-lg p-6">
        <h3 className="text-lg font-semibold my-4">Setup your Master Files</h3>
      
      
        <div>
          <h4 className="text-md font-semibold my-4">
            Add your Product details
          </h4>
          <p>Upload your product details to get started with daBarcodes.</p>

          <button
            className="bg-[#0D90C1]  text-white px-4 py-2 mt-2 mr-2 rounded-lg"
            onClick={() => setProductModalOpen(true)} // Open product modal
          >
            Add Products
          </button>
          <button
            className="border shadow-sm text-black px-4 py-2 rounded-lg"
            onClick={() => navigate("/dashboard/documentation")}
          >
            Read Documentation
          </button>
        </div>
      </div>

      {/* Render StoreUploadModal */}
   
      <ProductUploadModal
        isOpen={isProductModalOpen}
        closeModal={() => setProductModalOpen(false)}
      />
    </div>
  );
};

export default Dashboard;
