
import { useState } from "react";

const AddProductForm = ({ closeModal, handleAddProduct }) => {
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        category: "",
        brand: "",
        image: null,
        umbrellaBrandName: "",
        price: "",
        promotion: "",
        productDescription: "",
    });

    const [errors, setErrors] = useState({}); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

 
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setFormData({ ...formData, image: reader.result }); 
            };
            reader.readAsDataURL(file); 
        }
    };
    
    // Simple form validation
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Product Name is required.";
        // if (!formData.id) newErrors.id = "Product ID is required.";
        // if (!formData.category) newErrors.category = "Category is required.";
        // if (!formData.brand) newErrors.brand = "Brand is required.";
        // if (!formData.store) newErrors.store = "Store is required.";
        // if (!formData.supplier) newErrors.supplier = "Supplier is required.";
        // if (!formData.image) newErrors.image = "Product Image is required.";

        return newErrors;
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        // Create a new product
        const newProduct = {
            id: Date.now(), // Or use some other unique identifier
            ...formData,
        };

        // Save product data to localStorage
        const existingProducts = JSON.parse(localStorage.getItem("products")) || [];
        existingProducts.push(newProduct);
        localStorage.setItem("products", JSON.stringify(existingProducts));

        // Add the product using the parent function
        handleAddProduct(newProduct);
        closeModal();
    };
    return (
        <div className="inset-0 bg-opacity-50 flex justify-center items-center font-roboto">
            <div className="bg-white w-full max-w-5xl p-8 rounded-md shadow-lg">
                <h2 className="text-center text-2xl font-semibold mb-6">
                    Add Product Details
                </h2>

                <form onSubmit={handleSubmit}>
                    {/* Product Image and Product Name */}
                    <div className="grid grid-cols-2 gap-6 mb-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Product Image *
                            </label>
                            <input
                                type="file"
                                onChange={handleImageUpload}
                                className={`w-full border border-gray-300 p-2 rounded-md ${errors.image ? "border-red-500" : ""
                                    }`}
                            />
                            {errors.image && (
                                <p className="text-red-500 text-sm">{errors.image}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Product Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter Product Name"
                                className={`w-full border border-gray-300 p-2 rounded-md ${errors.name ? "border-red-500" : ""
                                    }`}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm">{errors.name}</p>
                            )}
                        </div>
                    </div>

                    {/* Product ID and Category */}
                    <div className="grid grid-cols-2 gap-6 mb-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Product SKU *
                            </label>
                            <input
                                type="text"
                                name="id"
                                value={formData.id}
                                onChange={handleChange}
                                placeholder="Enter Product ID"
                                className={`w-full border border-gray-300 p-2 rounded-md ${errors.id ? "border-red-500" : ""
                                    }`}
                            />
                            {errors.id && <p className="text-red-500 text-sm">{errors.id}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Category *
                            </label>
                            <input
                                type="text"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                placeholder="Enter Category"
                                className={`w-full border border-gray-300 p-2 rounded-md ${errors.category ? "border-red-500" : ""
                                    }`}
                            />
                            {errors.category && (
                                <p className="text-red-500 text-sm">{errors.category}</p>
                            )}
                        </div>
                    </div>

                    {/* Brand, Store, and Supplier */}
                    <div className="grid grid-cols-2 gap-6 mb-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Brand Name*</label>
                            <input
                                type="text"
                                name="brand"
                                value={formData.brand}
                                onChange={handleChange}
                                placeholder="Enter Brand"
                                className={`w-full border border-gray-300 p-2 rounded-md ${errors.brand ? "border-red-500" : ""
                                    }`}
                            />
                            {errors.brand && (
                                <p className="text-red-500 text-sm">{errors.brand}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                {" "}
                                Umbrella Brand Name *
                            </label>
                            <input
                                type="text"
                                name="umbrellaBrandName"
                                value={formData.umbrellaBrandName}
                                onChange={handleChange}
                                placeholder="Umbrella Brand"
                                className={`w-full border border-gray-300 p-2 rounded-md ${errors.umbrellaBrandName ? "border-red-500" : ""
                                    }`}
                            />
                            {errors.umbrellaBrandName && (
                                <p className="text-red-500 text-sm">
                                    {errors.umbrellaBrandName}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 mb-4">
                        <div>
                            <label className="block text-sm font-medium mb-1"> Original Price</label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                placeholder="Enter Price"
                                className={`w-full border border-gray-300 p-2 rounded-md ${errors.price ? "border-red-500" : ""
                                    }`}
                            />
                            {errors.price && (
                                <p className="text-red-500 text-sm">{errors.price}</p>
                            )}
                        </div>
                        <div>

                            <label className="block text-sm font-medium">Promotion</label>
                            <select
                                className="w-full p-2 border border-gray-300 rounded-md"
                                name="promotion"
                                value={formData.promotion}
                                onChange={handleChange}
                            >
                                <option value="">Select</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>

                        </div>

                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-semibold mb-1">
                            Product Description
                        </label>
                        <textarea



                            className="border p-2 w-full h-20 rounded"
                            placeholder="Enter Product Description"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center gap-4">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProductForm;
