// import React, {useState, useEffect} from "react";

// const StoreDetailsPage = ({storeData}) => {
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

//   // Assume you fetch this data from an API
//   useEffect(() => {
//     if (storeData) {
//       setStoreInfo(storeData);
//     }
//   }, [storeData]);

//   return (
//     <div className="container mx-auto mt-8">
//       <h1 className="text-2xl font-semibold mb-6">Reliance Mart Store 1</h1>

//       {/* Store Overview */}
//       <div className="flex items-start mb-8">
//         <div className="border-2 border-gray-300 rounded-full p-2 w-24 h-24 flex items-center justify-center">
//           <img
//             src={storeInfo.logo || "/image/image 72.png"}
//             alt="Reliance Store Logo"
//             // className="w-20 h-20 rounded-full"
//           />
//         </div>

//         <div className="flex-grow">
//           <h2 className="text-lg font-semibold mb-4">Store Overview</h2>
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-600">Store ID</label>
//               <input
//                 type="text"
//                 value={storeInfo.storeId}
//                 className="border p-2 rounded w-full"
//                 readOnly
//               />
//             </div>
//             <div>
//               <label className="block text-gray-600">Store Type</label>
//               <input
//                 type="text"
//                 value={storeInfo.storeType}
//                 className="border p-2 rounded w-full"
//                 readOnly
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Store Address */}
//       <div className="mb-8">
//         <h2 className="text-lg font-semibold mb-4">Store Address</h2>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-gray-600">Country</label>
//             <input
//               type="text"
//               value={storeInfo.country}
//               className="border p-2 rounded w-full"
//               readOnly
//             />
//           </div>
//           <div>
//             <label className="block text-gray-600">State</label>
//             <input
//               type="text"
//               value={storeInfo.state}
//               className="border p-2 rounded w-full"
//               readOnly
//             />
//           </div>
//           <div>
//             <label className="block text-gray-600">City</label>
//             <input
//               type="text"
//               value={storeInfo.city}
//               className="border p-2 rounded w-full"
//               readOnly
//             />
//           </div>
//           <div>
//             <label className="block text-gray-600">Postal Code</label>
//             <input
//               type="text"
//               value={storeInfo.postalCode}
//               className="border p-2 rounded w-full"
//               readOnly
//             />
//           </div>
//         </div>
//       </div>

//       {/* Contact Details */}
//       <div className="mb-8">
//         <h2 className="text-lg font-semibold mb-4">Contact Details</h2>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-gray-600">Phone Number</label>
//             <input
//               type="text"
//               value={storeInfo.phoneNumber}
//               className="border p-2 rounded w-full"
//               readOnly
//             />
//           </div>
//           <div>
//             <label className="block text-gray-600">Email ID</label>
//             <input
//               type="text"
//               value={storeInfo.email}
//               className="border p-2 rounded w-full"
//               readOnly
//             />
//           </div>
//         </div>
//       </div>

//       {/* Statistics Section */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         <div className="border p-4 rounded shadow">
//           <h3 className="text-gray-600">Total Products</h3>
//           <p>{storeInfo.stats.totalProducts || "No product found"}</p>
//         </div>
//         <div className="border p-4 rounded shadow">
//           <h3 className="text-gray-600">Total Suppliers</h3>
//           <p>{storeInfo.stats.totalSuppliers || "No supplier found"}</p>
//         </div>
//         <div className="border p-4 rounded shadow">
//           <h3 className="text-gray-600">Total Promotions</h3>
//           <p>{storeInfo.stats.totalPromotions || "No promotion found"}</p>
//         </div>
//         <div className="border p-4 rounded shadow">
//           <h3 className="text-gray-600">Total Sales</h3>
//           <p>{storeInfo.stats.totalSales || "No sales this week"}</p>
//         </div>
//         <div className="border p-4 rounded shadow">
//           <h3 className="text-gray-600">Total Units Sold</h3>
//           <p>{storeInfo.stats.totalUnitsSold || "No units sold this week"}</p>
//         </div>
//         <div className="border p-4 rounded shadow">
//           <h3 className="text-gray-600">Top Selling Product</h3>
//           <p>
//             {storeInfo.stats.topSellingProduct ||
//               "No top selling product this week"}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StoreDetailsPage;
// import React, {useState, useEffect} from "react";

// const StoreDetailsPage = ({storeData}) => {
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
//     <div className="container mx-auto mt-8">
//       <h1 className="text-2xl font-semibold mb-6">Reliance Mart Store 1</h1>

//       {/* Store Overview */}
//       <div className="flex items-start mb-8">
//         <div className="border-2 border-gray-300 rounded-full p-2 w-24 h-24 flex items-center justify-center">
//           <img
//             src={storeInfo.logo || "/image/image 72.png"}
//             alt="Reliance Store Logo"
//             // className="w-20 h-20 rounded-full"
//           />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl ml-8 px-8">
         
         
//           <div className="flex flex-col">
//             <label htmlFor="storeId" className="text-sm font-medium mb-1">
//               Store ID
//             </label>
//             <input
//               type="text"
//               id="storeId"
//               className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={storeInfo.storeId}
//               onChange={(e) =>
//                 setStoreInfo({...storeInfo, storeId: e.target.value})
//               }
//             />
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="storeType" className="text-sm font-medium mb-1">
//               Store Type
//             </label>
//             <input
//               type="text"
//               id="storeType"
//               className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={storeInfo.storeType}
//               onChange={(e) =>
//                 setStoreInfo({...storeInfo, storeType: e.target.value})
//               }
//             />
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="country" className="text-sm font-medium mb-1">
//               Country
//             </label>
//             <input
//               type="text"
//               id="country"
//               className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={storeInfo.country}
//               onChange={(e) =>
//                 setStoreInfo({...storeInfo, country: e.target.value})
//               }
//             />
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="state" className="text-sm font-medium mb-1">
//               State
//             </label>
//             <input
//               type="text"
//               id="state"
//               className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={storeInfo.state}
//               onChange={(e) =>
//                 setStoreInfo({...storeInfo, state: e.target.value})
//               }
//             />
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="city" className="text-sm font-medium mb-1">
//               City
//             </label>
//             <input
//               type="text"
//               id="city"
//               className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={storeInfo.city}
//               onChange={(e) =>
//                 setStoreInfo({...storeInfo, city: e.target.value})
//               }
//             />
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="postalCode" className="text-sm font-medium mb-1">
//               Postal Code
//             </label>
//             <input
//               type="text"
//               id="postalCode"
//               className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={storeInfo.postalCode}
//               onChange={(e) =>
//                 setStoreInfo({...storeInfo, postalCode: e.target.value})
//               }
//             />
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="phoneNumber" className="text-sm font-medium mb-1">
//               Phone Number
//             </label>
//             <input
//               type="text"
//               id="phoneNumber"
//               className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={storeInfo.phoneNumber}
//               onChange={(e) =>
//                 setStoreInfo({...storeInfo, phoneNumber: e.target.value})
//               }
//             />
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="email" className="text-sm font-medium mb-1">
//               Email ID
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={storeInfo.email}
//               onChange={(e) =>
//                 setStoreInfo({...storeInfo, email: e.target.value})
//               }
//             />
//           </div>
//         </div>
//       </div>

//       {/* Statistics Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="border p-4 rounded shadow">
//           <h3 className="text-gray-600">Total Products</h3>
//           <p>{storeInfo.stats.totalProducts || "No product found"}</p>
//         </div>
//         <div className="border p-4 rounded shadow">
//           <h3 className="text-gray-600">Total Suppliers</h3>
//           <p>{storeInfo.stats.totalSuppliers || "No supplier found"}</p>
//         </div>
//         <div className="border p-4 rounded shadow">
//           <h3 className="text-gray-600">Total Promotions</h3>
//           <p>{storeInfo.stats.totalPromotions || "No promotion found"}</p>
//         </div>
//         <div className="border p-4 rounded shadow">
//           <h3 className="text-gray-600">Total Sales</h3>
//           <p>{storeInfo.stats.totalSales || "No sales this week"}</p>
//         </div>
//         <div className="border p-4 rounded shadow">
//           <h3 className="text-gray-600">Total Units Sold</h3>
//           <p>{storeInfo.stats.totalUnitsSold || "No units sold this week"}</p>
//         </div>
//         <div className="border p-4 rounded shadow">
//           <h3 className="text-gray-600">Top Selling Product</h3>
//           <p>
//             {storeInfo.stats.topSellingProduct ||
//               "No top selling product this week"}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StoreDetailsPage;
import {useState, useEffect} from "react";
import BackButton from "../../Reusable/BackButton";

const StoreDetailsPage = ({storeData}) => {
  const [storeInfo, setStoreInfo] = useState({
    storeId: "",
    storeType: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
    phoneNumber: "",
    email: "",
    logo: "",
    stats: {
      totalProducts: "",
      totalSuppliers: "",
      totalPromotions: "",
      totalSales: "",
      totalUnitsSold: "",
      topSellingProduct: "",
    },
  });

  // Simulate fetching the data from an API
  useEffect(() => {
    if (storeData) {
      setStoreInfo(storeData);
    }
  }, [storeData]);

  return (
    <div className=" mx-auto mt-8">
      <div className="flex flex-start">
        <BackButton />
        <h1 className="text-2xl font-semibold mb-4">
          Reliance Mart Store 1 Sore Details
        </h1>
      </div>

      <div className="flex items-start mb-8">
        {/* Image on the left */}
        <div className="border-2 border-gray-300 rounded-full p-2 w-24 h-24 flex items-center justify-center">
          <img
            src={storeInfo.logo || "/image/image 72.png"}
            alt="Reliance Store Logo"
            // className="w-20 h-20 rounded-full"
          />
        </div>

        {/* Right-side content */}
        <div className="ml-8 w-full px-8">
          {/* Store Overview */}
          <h2 className="text-xl font-medium mb-4">Store Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex flex-col">
              <label htmlFor="storeId" className="text-sm font-medium mb-1">
                Store ID
              </label>
              <input
                type="text"
                id="storeId"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={storeInfo.storeId}
                onChange={(e) =>
                  setStoreInfo({...storeInfo, storeId: e.target.value})
                }
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="storeType" className="text-sm font-medium mb-1">
                Store Type
              </label>
              <input
                type="text"
                id="storeType"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={storeInfo.storeType}
                onChange={(e) =>
                  setStoreInfo({...storeInfo, storeType: e.target.value})
                }
              />
            </div>
          </div>

          {/* Store Address */}
          <h2 className="text-xl font-medium mb-4">Store Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex flex-col">
              <label htmlFor="country" className="text-sm font-medium mb-1">
                Country
              </label>
              <input
                type="text"
                id="country"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={storeInfo.country}
                onChange={(e) =>
                  setStoreInfo({...storeInfo, country: e.target.value})
                }
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="state" className="text-sm font-medium mb-1">
                State
              </label>
              <input
                type="text"
                id="state"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={storeInfo.state}
                onChange={(e) =>
                  setStoreInfo({...storeInfo, state: e.target.value})
                }
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="city" className="text-sm font-medium mb-1">
                City
              </label>
              <input
                type="text"
                id="city"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={storeInfo.city}
                onChange={(e) =>
                  setStoreInfo({...storeInfo, city: e.target.value})
                }
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="postalCode" className="text-sm font-medium mb-1">
                Postal Code
              </label>
              <input
                type="text"
                id="postalCode"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={storeInfo.postalCode}
                onChange={(e) =>
                  setStoreInfo({...storeInfo, postalCode: e.target.value})
                }
              />
            </div>
          </div>

          {/* Contact Details */}
          <h2 className="text-xl font-medium mb-4">Contact Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex flex-col">
              <label htmlFor="phoneNumber" className="text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={storeInfo.phoneNumber}
                onChange={(e) =>
                  setStoreInfo({...storeInfo, phoneNumber: e.target.value})
                }
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium mb-1">
                Email ID
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={storeInfo.email}
                onChange={(e) =>
                  setStoreInfo({...storeInfo, email: e.target.value})
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border p-6 rounded shadow">
          <h3 className="text-gray-600">Total Products</h3>
          <p>{storeInfo.stats.totalProducts || "No product found"}</p>
        </div>
        <div className="border p-6 rounded shadow">
          <h3 className="text-gray-600">Total Suppliers</h3>
          <p>{storeInfo.stats.totalSuppliers || "No supplier found"}</p>
        </div>
        <div className="border p-6 rounded shadow">
          <h3 className="text-gray-600">Total Promotions</h3>
          <p>{storeInfo.stats.totalPromotions || "No promotion found"}</p>
        </div>
        <div className="border p-6 rounded shadow">
          <h3 className="text-gray-600">Total Sales</h3>
          <p>{storeInfo.stats.totalSales || "No sales this week"}</p>
        </div>
        <div className="border p-6 rounded shadow">
          <h3 className="text-gray-600">Total Units Sold</h3>
          <p>{storeInfo.stats.totalUnitsSold || "No units sold this week"}</p>
        </div>
        <div className="border p-6 rounded shadow">
          <h3 className="text-gray-600">Top Selling Product</h3>
          <p>
            {storeInfo.stats.topSellingProduct ||
              "No top selling product this week"}
          </p>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(storeInfo.stats).map(([key, value]) => (
          <div key={key} className="border p-6 rounded shadow">
        
            <h3 className="text-gray-600">
              {key
                .replace(/([A-Z])/g, " $1") 
                .replace(/^./, (str) => str.toUpperCase())}{" "}
              
            </h3>
            <p>
              {value ||
                `No ${key.toLowerCase().replace(/([A-Z])/g, " $1")} found`}
            </p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default StoreDetailsPage;
