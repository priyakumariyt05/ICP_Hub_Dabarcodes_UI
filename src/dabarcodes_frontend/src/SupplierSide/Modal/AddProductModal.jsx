import React, { useState } from 'react';
const AddProductModal = ({ isOpen, onClose, onAddProduct }) => {
  const [sku, setSku] = useState('');
  const [productName, setProductName] = useState('');
  const [productType, setProductType] = useState('');
  const [size, setSize] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null); 
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    const newErrors = {};

    if (!sku) newErrors.sku = 'Product SKU is required.';
    if (!productName) newErrors.productName = 'Product Name is required.';
    if (!productType) newErrors.productType = 'Product Type is required.';
    if (!size) newErrors.size = 'Size is required.';
    if (!description) newErrors.description = 'Product Description is required.';
    if (!image) newErrors.image = 'Product Image is required.';
    if (!category) newErrors.category = 'Category is required.';
    if (!subcategory) newErrors.subcategory = 'Subcategory is required.';
    if (!price || isNaN(price)) newErrors.price = 'Valid price is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateFields()) return;

    const newProduct = {
      sku,
      productName,
      productType,
      size,
      description,
      image,
      category,
      subcategory,
      price,
    };
    onAddProduct(newProduct);

    setSku('');
    setProductName('');
    setProductType('');
    setSize('');
    setDescription('');
    setImage(null);
    setImageUrl('');
    setCategory('');
    setSubcategory('');
    setPrice('');
    setErrors({});
    onClose();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setImageUrl(URL.createObjectURL(file));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-2xl w-full">
        <h2 className="text-2xl font-semibold text-center mb-8">Add Product Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
          {/* Product SKU */}
          <div>
            <label className="block text-sm font-medium">Product SKU</label>
            <input
              type="text"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
              className={`w-full border rounded px-4 py-2 mt-1 ${errors.sku ? 'border-red-500' : ''}`}
            />
            {errors.sku && <p className="text-red-500 text-sm">{errors.sku}</p>}
          </div>

          {/* Product Image */}
          <div>
            <label className="block text-sm font-medium">Product Image</label>
            <div className="flex items-center gap-2">
              <input
                type="file"
                onChange={handleImageChange}
                className="hidden"
                id="upload-image"
              />
              <label htmlFor="upload-image" className="cursor-pointer bg-gray-100 border rounded px-3 py-2">
                Upload Image
              </label>
              {imageUrl && (
                <img src={imageUrl} alt="Selected Preview" className="w-12 h-12 rounded object-cover" />
              )}
            </div>
            {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
          </div>

          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium">Product Name</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className={`w-full border rounded px-4 py-2 mt-1 ${errors.productName ? 'border-red-500' : ''}`}
            />
            {errors.productName && <p className="text-red-500 text-sm">{errors.productName}</p>}
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={`w-full border rounded px-4 py-2 mt-1 ${errors.category ? 'border-red-500' : ''}`}
            />
            {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
          </div>

          {/* Product Type */}
          <div>
            <label className="block text-sm font-medium">Product Type</label>
            <input
              type="text"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
              className={`w-full border rounded px-4 py-2 mt-1 ${errors.productType ? 'border-red-500' : ''}`}
            />
            {errors.productType && <p className="text-red-500 text-sm">{errors.productType}</p>}
          </div>

          {/* Subcategory */}
          <div>
            <label className="block text-sm font-medium">Subcategory</label>
            <input
              type="text"
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
              className={`w-full border rounded px-4 py-2 mt-1 ${errors.subcategory ? 'border-red-500' : ''}`}
            />
            {errors.subcategory && <p className="text-red-500 text-sm">{errors.subcategory}</p>}
          </div>

          {/* Size */}
          <div>
            <label className="block text-sm font-medium">Size</label>
            <input
              type="text"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className={`w-full border rounded px-4 py-2 mt-1 ${errors.size ? 'border-red-500' : ''}`}
            />
            {errors.size && <p className="text-red-500 text-sm">{errors.size}</p>}
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium">Retail Price (Including Taxes)</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className={`w-full border rounded px-4 py-2 mt-1 ${errors.price ? 'border-red-500' : ''}`}
            />
            {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
          </div>

          {/* Product Description */}
          <div className="col-span-2">
            <label className="block text-sm font-medium">Product Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={`w-full border rounded px-4 py-2 mt-1 ${errors.description ? 'border-red-500' : ''}`}
              rows="3"
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
          </div>
        </div>

        <div className="flex justify-between">
          <button onClick={onClose} className="bg-white border border-gray-300 text-gray-600 py-2 px-6 rounded hover:bg-gray-100">
            Cancel
          </button>
          <button onClick={handleSubmit} className="bg-[#0D90C1] text-white py-2 px-6 rounded hover:bg-blue-700">
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
