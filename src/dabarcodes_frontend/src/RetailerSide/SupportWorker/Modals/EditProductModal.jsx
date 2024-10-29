import React, {useState} from "react";
import Modal from "../Modals/Modal";

const EditProductModal = ({
  selectedProduct,
  setSelectedProduct,
  showEditModal,
  setShowEditModal,
  onSave,
}) => {
  // You can add the handleImageUpload function here if needed for the file input
 const [selectedImage, setSelectedImage] = useState("");

 // Function to handle image upload
 const handleImageUpload = (e) => {
   const file = e.target.files[0];
   if (file) {
     const reader = new FileReader();
     reader.onloadend = () => {
       setSelectedImage(reader.result);
     };
     reader.readAsDataURL(file);
   }
 };
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
        Edit Product Name Details
      </h2>
      <form>
        {/* Product Image */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Product Image
          </label>
          <div className="flex items-center space-x-2">
            {selectedProduct?.image ? (
              <img
                src={selectedProduct.image}
                alt="Product"
                className="h-12 w-12 object-cover rounded"
              />
            ) : (
              <img
                src="your-placeholder-image-url"
                alt="Product Placeholder"
                className="h-12 w-12 object-cover rounded"
              />
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="text-gray-600 bg-gray-200 px-3 py-1 rounded cursor-pointer"
            >
              Upload Image
            </label>
          </div>
        </div>

        {/* Form fields */}
        {/* Product Name and Supplier Name */}
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <label className="block text-sm font-semibold mb-1">
              Product Name
            </label>
            <input
              type="text"
              value={selectedProduct?.name || ""}
              onChange={(e) =>
                setSelectedProduct({
                  ...selectedProduct,
                  name: e.target.value,
                })
              }
              className="border p-2 w-full rounded"
              placeholder="Enter Product Name"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-semibold mb-1">
              Supplier Name
            </label>
            <input
              type="text"
              value={selectedProduct?.supplier || ""}
              onChange={(e) =>
                setSelectedProduct({
                  ...selectedProduct,
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
              value={selectedProduct?.umbrellaBrandName || ""}
              onChange={(e) =>
                setSelectedProduct({
                  ...selectedProduct,
                  umbrellaBrandName: e.target.value,
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

export default EditProductModal;
