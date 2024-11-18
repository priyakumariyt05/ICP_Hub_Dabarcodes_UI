import {useState, useEffect} from "react";
import BackButton from "../../Reusable/BackButton";

const ProductDetailPage = ({productData}) => {
  const initialFormState = {
    productName: "",
    productId: "",
    category: "",
    brand: "",
    regularPrice: "",
    stockLevel: "",
    supplierName: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [productInfo, setProductInfo] = useState(productData || {stats: {}});

  // Update productInfo if productData changes
  useEffect(() => {
    if (productData) setProductInfo(productData);
  }, [productData]);

  // Handle input change for controlled components
  const handleChange = (e) => {
    const {id, value} = e.target;
    setFormData((prev) => ({...prev, [id]: value}));
  };

  // Validation logic
  const validateForm = () => {
    let validationErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        validationErrors[key] = `${key.replace(/([A-Z])/g, " $1")} is required`;
      }
    });
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data:", formData);
      alert("Form submitted successfully!");
      setFormData(initialFormState); 
    }
  };
  
  return (
    <div className="mx-auto mt-8">
      <div className="flex flex-start items-center">
        <BackButton />
        <h1 className="text-2xl font-semibold mb-4 ml-4">Product Overview</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex items-start mb-8">
          {/* Image on the left */}
          <div className="border-2 border-gray-300 rounded-full p-2 w-24 h-24 flex items-center justify-center">
            <img
              src={productInfo.logo || "/image/drink.png"}
              alt="Reliance Store Logo"
            />
          </div>

          {/* Right-side content */}
          <div className="ml-8 w-full px-8">
            {/* Product Overview */}
            <h2 className="text-xl font-medium mb-4">Product Overview</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <InputField
                label="Product Name"
                id="productName"
                value={formData.productName}
                onChange={handleChange}
                error={errors.productName}
              />
              <InputField
                label="Product ID"
                id="productId"
                value={formData.productId}
                onChange={handleChange}
                error={errors.productId}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <InputField
                label="Category"
                id="category"
                value={formData.category}
                onChange={handleChange}
                error={errors.category}
              />
              <InputField
                label="Brand"
                id="brand"
                value={formData.brand}
                onChange={handleChange}
                error={errors.brand}
              />
              <InputField
                label="Umbrella Brand Name"
                id="umbrellaBrandName"
                value={formData.regularPrice}
                onChange={handleChange}
                error={errors.regularPrice}
              />
              <InputField
                label="Regular Price"
                id="regularPrice"
                value={formData.regularPrice}
                onChange={handleChange}
                error={errors.regularPrice}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <InputField
                label="Stock Level"
                id="stockLevel"
                value={formData.stockLevel}
                onChange={handleChange}
                error={errors.stockLevel}
              />
              <InputField
                label="Supplier Name"
                id="supplierName"
                value={formData.supplierName}
                onChange={handleChange}
                error={errors.supplierName}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 mb-8">
              <TextAreaField
                label="Description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                error={errors.description}
              />
            </div>
            <h2 className="text-xl font-medium mb-4">Promotion Details</h2>
            <div>
              <div className="grid grid-cols-1 gap-4 mb-4"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div>
                  <label className="block text-sm font-medium mb-1">Start Date</label>
                  <input
                    type="date"
                    className="lg:w-full md:w-full sm:w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">End Date</label>
                  <input
                    type="date"
                    className="lg:w-full md:w-full sm:w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <InputField
                label="Orignal Price"
                id="OrignalPrice"
                // value={formData.supplierName}
                // onChange={handleChange}
                // error={errors.supplierName}
              />
              <InputField
                label="Price After Promotion"
                id="PriceAfterPromotion"
                // value={formData.supplierName}
                // onChange={handleChange}
                // error={errors.supplierName}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 mb-8">
              <TextAreaField
                label="Promotional Description"
                id="Promotionaldescription"
                // value={formData.description}
                // onChange={handleChange}
                // error={errors.description}
              />
            </div>
            {/* <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Submit
            </button> */}
          </div>
        </div>
      </form>

    </div>
  );
};

// Reusable Input Field Component
const InputField = ({label, id, value, onChange, error}) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="text-sm font-medium mb-1">
      {label}
    </label>
    <input
      type="text"
      id={id}
      value={value}
      onChange={onChange}
      className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

// Reusable TextArea Field Component
const TextAreaField = ({label, id, value, onChange, error}) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="text-sm font-medium mb-1">
      {label}
    </label>
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      rows="4"
      className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      placeholder={`Enter ${label.toLowerCase()} here...`}
    ></textarea>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);


export default ProductDetailPage;


