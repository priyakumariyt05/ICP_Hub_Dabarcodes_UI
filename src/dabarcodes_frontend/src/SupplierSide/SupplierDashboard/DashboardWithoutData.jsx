
import React, { useState } from "react";
// import StoreUploadModal from "./Modals/StoreUploadModal";

import { useNavigate } from "react-router-dom";
import StoreUploadModal from "../../Dashboard/Modals/StoreUploadModal";
import ProductUploadModal from "../../Dashboard/Modals/ProductUploadModal";
import AddSubBrandModal from "../Modal/AddSubBrandModal";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

const DashboardWithoutData = () => {
  const navigate = useNavigate()
 
  const [isSubBrandModalOpen, setIsSubBrandModalOpen] = useState(false);
  const [isProductModalOpen, setProductModalOpen] = useState(false);

  return (
    <div className="">
      <h1 className="my-8 font-bold text-lg">
        Hi, John! You’re currently viewing: Reliance Mart
      </h1>
      <h2 className="text-2xl font-bold mb-4 ">Welcome to daBarcodes</h2>
      <div className="bg-white border rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold">Promoted yours products with dabarcodes</h3>
        <p className="mb-4">
          Boost your product visibility to expand your customer base and enhance brand awareness.
        </p>
        {/* <button className="border shadow-sm text-black px-4 py-2 rounded-lg">
          Read Documentation
        </button> */}
        <Link to="/supplier/promotion-management">
          <button
            className="bg-[#0D90C1] text-white px-4 py-2 mt-2 mr-2 rounded-lg"

          >
            Add Promotion
          </button>
        </Link>
        <button
          className=" border shadow-sm text-black px-4 py-2 rounded-lg"
          onClick={() => navigate("/supplier/documentation")}
        >
          Read Documentation
        </button>
      </div>
      <div className="bg-white border rounded-lg p-6">
        <h3 className="text-lg font-semibold my-4">Setup your Master Files</h3>
        <div className="mb-4 my-4">
          <h4 className="text-md font-semibold my-4">
            Add your Sub Brand
          </h4>
          <p>
            Upload your brand details to get started with daBarcodes, download 
            the format and accurately fill the data. For more information, please
             refer to the documentation
          </p>
          <button
            className="bg-[#0D90C1]  text-white px-4 py-2 mt-2 mr-2 rounded-lg"
            onClick={() => setIsSubBrandModalOpen(true)}
          >
            Add SubBrand
          </button>
          <button
            className=" border shadow-sm text-black px-4 py-2 rounded-lg"
            onClick={() => navigate("/supplier/documentation")}
          >
            Read Documentation
          </button>
        </div>
        <hr />
        <div>
          <h4 className="text-md font-semibold my-4">
            Add your Product details
          </h4>
          <p>Upload your Product details to get started with daBarcodes, 
          download the format and accurately fill the data. 
          For more information, please refer to the documentation</p>

          <button
            className="bg-[#0D90C1]  text-white px-4 py-2 mt-2 mr-2 rounded-lg"
            onClick={() => setProductModalOpen(true)} // Open product modal
          >
            Add Products
          </button>
          <button
            className="border shadow-sm text-black px-4 py-2 rounded-lg"
            onClick={() => navigate("/supplier/documentation")}
          >
            Read Documentation
          </button>
        </div>
      </div>

      {/* Render StoreUploadModal */}
      {/* <AddSubBrandModal
        isOpen={isSubBrandModal}
        closeModal={() => setSubBrandModal(false)}
      /> */}
      <Modal
        isOpen={isSubBrandModalOpen}
        onClose={() => setIsSubBrandModalOpen(false)}
        mainclass="flex items-center justify-center"
        className="w-full max-w-lg p-6"
      >
        <AddSubBrandModal onClose={() => setIsSubBrandModalOpen(false)} />
      </Modal>
      <ProductUploadModal
        isOpen={isProductModalOpen}
        closeModal={() => setProductModalOpen(false)}
      />
    </div>
  );
};

export default DashboardWithoutData;