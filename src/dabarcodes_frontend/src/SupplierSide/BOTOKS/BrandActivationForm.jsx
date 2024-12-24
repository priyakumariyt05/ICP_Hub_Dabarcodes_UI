import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../../Dashboard/Reusable/BackButton";

const BrandActivationForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        sku: id,
        productName: "",
        subBrand: "",
        price: "",
        tokenAllocation: "",
        promotionName: "",
        releaseType: "",
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.sku) newErrors.sku = "Product SKU is required.";
        if (!formData.productName)
            newErrors.productName = "Product Name is required.";
        if (!formData.price) newErrors.price = "Original Price is required.";
        if (!formData.tokenAllocation)
            newErrors.tokenAllocation = "Token Allocation is required.";
        if (!formData.releaseType)
            newErrors.releaseType = "Type of Release is required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            if (formData.releaseType === "event-details") {
                navigate(`/supplier/botok/product-sku/${id}/event-details`);
            } else if (formData.releaseType === "prize-premium-details") {
                navigate(`/supplier/botok/product-sku/${id}/prize-premium-details`);
            } else if (formData.releaseType === "community-campaign-details") {
                navigate(
                    `/supplier/botok/product-sku/${id}/community-campaign-details`
                );
            }
        }
    };
    return (
        <div className="w-full max-w-6xl mx-auto p-8">
            <div className="flex flex-start">
                <BackButton />

                <h1 className="text-2xl font-semibold mb-4">Brand Activation Campaign</h1>
            </div>
            {/* Description */}
            <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet consectetur. Et duis sit ac phasellus
                ultrices mi suspendisse accumsan. Mauris eget est pretium eu ultricies
                porttitor nulla a. A vel arcu lacus ultricies praesent mi pretium et. Ut
                ullamcorper etiam sit tempor. Neque iaculis cursus ultrices vitae
                pharetra lectus quam est faucibus. Suscipit pharetra at lorem cras id
                porta.
            </p>
            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
            >
                {/* Product SKU */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Product SKU
                    </label>
                    <input
                        type="text"
                        name="sku"
                        value={formData.sku}
                        onChange={handleInputChange}
                        placeholder="12345"
                        className={`w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:ring focus:ring-blue-200 outline-none ${errors.sku ? "border-red-500" : ""
                            }`}
                    />
                    {errors.sku && (
                        <p className="text-red-500 text-sm mt-1">{errors.sku}</p>
                    )}
                </div>

                {/* Product Name */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Product Name
                    </label>
                    <input
                        type="text"
                        name="productName"
                        value={formData.productName}
                        onChange={handleInputChange}
                        placeholder="Name"
                        className={`w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:ring focus:ring-blue-200 outline-none ${errors.productName ? "border-red-500" : ""
                            }`}
                    />
                    {errors.productName && (
                        <p className="text-red-500 text-sm mt-1">{errors.productName}</p>
                    )}
                </div>

                {/* Sub Brand */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Sub Brand
                    </label>
                    <input
                        type="text"
                        name="subBrand"
                        value={formData.subBrand}
                        onChange={handleInputChange}
                        placeholder="Name"
                        className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:ring focus:ring-blue-200 outline-none"
                    />
                </div>

                {/* Original Price */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Original Price
                    </label>
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        placeholder="$45"
                        className={`w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:ring focus:ring-blue-200 outline-none ${errors.price ? "border-red-500" : ""
                            }`}
                    />
                    {errors.price && (
                        <p className="text-red-500 text-sm mt-1">{errors.price}</p>
                    )}
                </div>

                {/* BATOK Token Allocation */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        BATOK Token Allocation
                    </label>
                    <input
                        type="text"
                        name="tokenAllocation"
                        value={formData.tokenAllocation}
                        onChange={handleInputChange}
                        placeholder="Allocate Tokens to Campaign"
                        className={`w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:ring focus:ring-blue-200 outline-none ${errors.tokenAllocation ? "border-red-500" : ""
                            }`}
                    />
                    {errors.tokenAllocation && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.tokenAllocation}
                        </p>
                    )}
                </div>

                {/* Brand Promotion Name */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Brand Promotion Name
                    </label>
                    <input
                        type="text"
                        name="promotionName"
                        value={formData.promotionName}
                        onChange={handleInputChange}
                        placeholder="Campaign Name"
                        className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:ring focus:ring-blue-200 outline-none"
                    />
                </div>

                {/* Type of Release */}
                <select
                    name="releaseType"
                    value={formData.releaseType}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                >
                    <option value="">Select Release Type</option>
                    <option value="event-details">Event Details</option>
                    <option value="prize-premium-details">Prize Premium Details</option>
                    <option value="community-campaign-details">
                        Community Campaign Details
                    </option>
                </select>

                {/* Next Button */}
                <div className="flex justify-end mt-6">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded"
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BrandActivationForm;