import React, {useState} from "react";
import Modal from "../Modals/Modal";

const EditStoreModal = ({
  selectedStore,
  setSelectedStore,
  showEditModal,
  setShowEditModal,
  onSave,
}) => {
  // You can add the handleImageUpload function here if needed for the file input
 

  // Function to handle image upload

  const handleSave = () => {
    console.log(selectedProduct);
    // Further logic for saving/updating the product
  };

  return (
    <Modal
      isOpen={showEditModal}
      onClose={() => setShowEditModal(false)}
      mainclass="flex justify-center items-center"
      className="w-[700px]"
    >
      <h2 className="text-xl font-bold text-center mb-6">
        Edit Store Details
      </h2>
      <form>
        {/* Product Image */}


        {/* Form fields */}
        {/* Product Name and Supplier Name */}
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <label className="block text-sm font-semibold mb-1">
             Store Name
            </label>
            <input
              type="text"
              value={selectedStore?.name || ""}
              onChange={(e) =>
                setSelectedStore({
                  ...selectedStore,
                  name: e.target.value,
                })
              }
              className="border p-2 w-full rounded"
              placeholder="Enter Product Name"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-semibold mb-1">
              Supplier Type
            </label>
            <input
              type="text"
              value={selectedProduct?.supplier || ""}
              onChange={(e) =>
                setSelectedStore({
                  ...selectedStore,
                  supplier: e.target.value,
                })
              }
              className="border p-2 w-full rounded"
              placeholder="Enter Supplier Name"
            />
          </div>
        </div>

        {/* Brand Name and Umbrella Brand */}
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <label className="block text-sm font-semibold mb-1">
              Brand Name
            </label>
            <input
              type="text"
              value={selectedProduct?.brand || ""}
              onChange={(e) =>
                setSelectedProduct({
                  ...selectedProduct,
                  brand: e.target.value,
                })
              }
              className="border p-2 w-full rounded"
              placeholder="Enter Brand Name"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-semibold mb-1">
              Umbrella Brand
            </label>
            <input
              type="text"
              value={selectedProduct?.umbrella || ""}
              onChange={(e) =>
                setSelectedProduct({
                  ...selectedProduct,
                  umbrella: e.target.value,
                })
              }
              className="border p-2 w-full rounded"
              placeholder="Enter Umbrella Brand"
            />
          </div>
        </div>

        {/* Original Price */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Original Price
          </label>
          <input
            type="text"
            value={selectedProduct?.price || ""}
            onChange={(e) =>
              setSelectedProduct({
                ...selectedProduct,
                price: e.target.value,
              })
            }
            className="border p-2 w-full rounded"
            placeholder="Enter Original Price"
          />
        </div>

        {/* Product Description */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1">
            Product Description
          </label>
          <textarea
            value={selectedProduct?.description || ""}
            onChange={(e) =>
              setSelectedProduct({
                ...selectedProduct,
                description: e.target.value,
              })
            }
            className="border p-2 w-full h-20 rounded"
            placeholder="Enter Product Description"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            type="button"
            className="bg-red-200 text-red-700 px-4 py-2 rounded hover:bg-red-300"
          >
            Deactivate Product
          </button>
          {/* <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleSave}
          >
            Update Details
          </button> */}

          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => onSave(selectedProduct)} // updated
          >
            Update Details
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditStoreModal;
