// import {useState, useEffect} from "react";
// import BackButton from "../../Reusable/BackButton";

// const ProductNoPromotion = ({storeData}) => {
//   const [storeInfo, setStoreInfo] = useState({
//     storeId: "",
//     storeType: "",
//     country: "",
//     state: "",
//     city: "",
//     postalCode: "",
//     phoneNumber: "",
//     email: "",
//     logo: "",
//     stats: {
//       totalProducts: "",
//       totalSuppliers: "",
//       totalPromotions: "",
//       totalSales: "",
//       totalUnitsSold: "",
//       topSellingProduct: "",
//     },
//   });

//   // Simulate fetching the data from an API
//   useEffect(() => {
//     if (storeData) {
//       setStoreInfo(storeData);
//     }
//   }, [storeData]);

//   return (
//     <div className=" mx-auto mt-8">
//       <div className="flex flex-start">
//         <BackButton />
//         <h1 className="text-2xl font-semibold mb-4">Product Name</h1>
//       </div>

//       <div className="flex items-start mb-8">
//         {/* Image on the left */}
//         <div className="border-2 border-gray-300 rounded-full p-2 w-24 h-24 flex items-center justify-center">
//           <img
//             src={storeInfo.logo || "/image/drink.png"}
//             alt="Reliance Store Logo"
//             // className="w-20 h-20 rounded-full"
//           />
//         </div>

//         {/* Right-side content */}
//         <div className="ml-8 w-full px-8">
//           {/* Store Overview */}
//           <h2 className="text-xl font-medium mb-4">Product Overview</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//             <div className="flex flex-col">
//               <label htmlFor="storeId" className="text-sm font-medium mb-1">
//                 Product Name
//               </label>
//               <input
//                 type="text"
//                 id="productName"
//                 className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="storeType" className="text-sm font-medium mb-1">
//                 Product Id
//               </label>
//               <input
//                 type="text"
//                 id="ProductId"
//                 className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>

//           {/* Store Address */}

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//             <div className="flex flex-col">
//               <label htmlFor="category" className="text-sm font-medium mb-1">
//                 Category
//               </label>
//               <input
//                 type="text"
//                 id="category"
//                 className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="brand" className="text-sm font-medium mb-1">
//                 Brand
//               </label>
//               <input
//                 type="text"
//                 id="brand"
//                 className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label
//                 htmlFor="regularPrice"
//                 className="text-sm font-medium mb-1"
//               >
//                 Regular Price
//               </label>
//               <input
//                 type="text"
//                 id="regularPrice"
//                 className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="stockLevel" className="text-sm font-medium mb-1">
//                 Stock Level
//               </label>
//               <input
//                 type="text"
//                 id="stockLevel"
//                 className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//             <div className="flex flex-col">
//               <label
//                 htmlFor="supplierName"
//                 className="text-sm font-medium mb-1"
//               >
//                 Supplier Name
//               </label>
//               <input
//                 type="text"
//                 id="SupplierName"
//                 className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>
//           <div className="grid grid-cols-1 gap-4 mb-8">
//             <div className="flex flex-col w-full">
//               <label htmlFor="message" className="text-sm font-medium mb-1">
//               Description
//               </label>
//               <textarea
//                 id="message"
//                 rows="4"
//                 placeholder="Product description here..."
//                 className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
//               ></textarea>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Statistics Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="border p-6 rounded shadow">
//           <h3 className="text-gray-600">Total Stock Quantity</h3>
//           <p>{storeInfo.stats.totalProducts || "No product found"}</p>
//         </div>
//         <div className="border p-6 rounded shadow">
//           <h3 className="text-gray-600">Total Unit Sold</h3>
//           <p>{storeInfo.stats.totalSuppliers || "No supplier found"}</p>
//         </div>
//         <div className="border p-6 rounded shadow">
//           <h3 className="text-gray-600">Total Sales</h3>
//           <p>{storeInfo.stats.totalPromotions || "No promotion found"}</p>
//         </div>
//         <div className="border p-6 rounded shadow">
//           <h3 className="text-gray-600">Average Redemption</h3>
//           <p>{productInfo.stats.totalSales || "No sales this week"}</p>
//         </div>
//         <div className="border p-6 rounded shadow">
//           <h3 className="text-gray-600">Average Redemption Promotion</h3>
//           <p>{productInfo.stats.totalUnitsSold || "No units sold this week"}</p>
//         </div>
//         <div className="border p-6 rounded shadow">
//           <h3 className="text-gray-600">Unique Customer Quote</h3>
//           <p>
//             {productInfo.stats.topSellingProduct ||
//               "No top selling product this week"}
//           </p>
//         </div>
//       </div>
  
//     </div>
//   );
// };

// export default ProductNoPromotion;
import {useState, useEffect} from "react";
import BackButton from "../../Reusable/BackButton";
import TransactionalChart from "../../Reusable/Chart/TransactionalChart";
import PreviousRedemption from "../../Reusable/Table/PreviousRedemption";
const ProductNoPromotion = ({productData}) => {
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
      setFormData(initialFormState); // Reset the form after submission
    }
  };
const TransactionalData = [
  {month: "Jan", count: 20},
  {month: "Feb", count: 30},
  {month: "Mar", count: 50},
  {month: "Apr", count: 40},
  {month: "May", count: 45},
  {month: "Jun", count: 80},
  {month: "Jul", count: 30},
  {month: "Aug", count: 20},
  {month: "Sept", count: 20},
  {month: "Oct", count: 20},
  {month: "Nov", count: 20},
  {month: "Dec", count: 20},
];
 const previousData = [
   {
     startDate: "2024-01-01",
     endDate: "2024-01-10",
     duration: "10 days",
     discount: "20%",
     originalPrice: "$100",
     totalSales: "$2000",
     totalUnitsSold: 20,
   },
   {
     startDate: "2024-02-01",
     endDate: "2024-02-10",
     duration: "9 days",
     discount: "15%",
     originalPrice: "$80",
     totalSales: "$1200",
     totalUnitsSold: 15,
   },
   {
     startDate: "2024-03-01",
     endDate: "2024-03-05",
     duration: "5 days",
     discount: "10%",
     originalPrice: "$50",
     totalSales: "$500",
     totalUnitsSold: 10,
   },
 ];
  return (
    <div className="mx-auto mt-8">
      <div className="flex flex-start items-center">
        <BackButton />
        <h1 className="text-2xl font-semibold mb-4 ml-4">Product Details</h1>
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
                label="Regular Price"
                id="regularPrice"
                value={formData.regularPrice}
                onChange={handleChange}
                error={errors.regularPrice}
              />
              <InputField
                label="Stock Level"
                id="stockLevel"
                value={formData.stockLevel}
                onChange={handleChange}
                error={errors.stockLevel}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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

            {/* <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Submit
            </button> */}
          </div>
        </div>
      </form>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {[
          {
            label: "Total Stock Quantity",
            value: productInfo.stats.totalStockProducts,
          },
          {label: "Total Units Sold", value: productInfo.stats.totalUnitSold},
          {label: "Total Sales", value: productInfo.stats.totalSales},
          {
            label: "Average Redemption",
            value: productInfo.stats.averageRedemption,
          },
          {
            label: "Average Redemption During Promotion",
            value: productInfo.stats.averageRedemptionPromotion,
          },
          {
            label: "Unique Customer Quote",
            value: productInfo.stats.uniqueCustomerQuote,
          },
        ].map((stat, index) => (
          <StatCard key={index} label={stat.label} value={stat.value} />
        ))}
      </div>
      <div className="p-4">
        {/* <TransactionalChart data={TransactionalData} /> */}
        <TransactionalChart
          data={TransactionalData}
          title="Total Sale in USD"
        />
      </div>
      <div className="p-4">
        {/* <TransactionalChart data={TransactionalData} /> */}
        <TransactionalChart
          data={TransactionalData}
          title="Promotion Timeline"
        />
      </div>
      {/* table */}
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Previous Redemptions</h1>
        <PreviousRedemption previousRedemption={previousData} />
      </div>
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

// Reusable Stat Card Component
const StatCard = ({label, value}) => (
  <div className="border p-6 rounded shadow">
    <h3 className="text-gray-600">{label}</h3>
    <p>{value || "No data available"}</p>
  </div>
);

export default ProductNoPromotion;

