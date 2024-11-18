// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import CreatePromotion from "../OnBoarding/CreatePromotion";

// const CreatePromotionDetails = () => {
//   const { promotionId } = useParams(); // Get promotionId from URL
//   const [product, setProduct] = useState(null);


//   useEffect(() => {

//     const fetchedProduct = {
//       promotionId,
//       sku: '12345',
//       productName: 'Organic Blueberries',
//       subBrand: 'Appy Limited',
//       startDate: '10.09.2024',
//       endDate: '20.09.2024',
//       discount: '20% off',
//       priceBefore: 100,
//       priceAfter: 80,
//       description: 'Amazing promotion on organic blueberries!',
//       retailers: 'Retailer A, Retailer B'
//     };
//     setProduct(fetchedProduct); // Set the fetched data to state
//   }, [promotionId]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8 font-roboto">
//       {/* Main Content */}
//       <div className="bg-white w-full md:w-2/3 p-4 md:p-8 flex flex-col">
//         <h1 className="text-2xl font-bold mb-6">Create Promotion</h1>
//         <form className="w-full">
//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <div>
//               <label htmlFor="promotionSku" className="block text-sm font-semibold mb-2">
//                 Promotion SKU
//               </label>
//               <input
//                 id="promotionSku"
//                 type="text"
//                 value={product.sku}
//                 className="input border border-gray-300 p-4 w-full rounded-lg"
//                 readOnly
//               />
//             </div>
//             <div>
//               <label htmlFor="productSku" className="block text-sm font-semibold mb-2">
//                 Product SKU
//               </label>
//               <input
//                 id="productSku"
//                 type="text"
//                 value={product.sku}
//                 className="input border border-gray-300 p-4 w-full rounded-lg"
//                 readOnly
//               />
//             </div>
//             <div>
//               <label htmlFor="productName" className="block text-sm font-semibold mb-2">
//                 Product Name
//               </label>
//               <input
//                 id="productName"
//                 type="text"
//                 value={product.productName}
//                 className="input border border-gray-300 p-4 w-full rounded-lg"
//                 readOnly
//               />
//             </div>
//             <div>
//               <label htmlFor="subBrand" className="block text-sm font-semibold mb-2">
//                 Sub Brand
//               </label>
//               <input
//                 id="subBrand"
//                 type="text"
//                 value={product.subBrand}
//                 className="input border border-gray-300 p-4 w-full rounded-lg"
//                 readOnly
//               />
//             </div>
//           </div>
//           <label className="flex items-center mb-4">
//             <input type="checkbox" className="mr-2" />
//             Flat Discount
//           </label>
//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <div>
//               <label htmlFor="priceBefore" className="block text-sm font-semibold mb-2">
//                 Price Before Promotion
//               </label>
//               <input
//                 id="priceBefore"
//                 type="number"
//                 value={product.priceBefore}
//                 className="input border border-gray-300 p-4 w-full rounded-lg"
//                 readOnly
//               />
//             </div>
//             <div>
//               <label htmlFor="priceAfter" className="block text-sm font-semibold mb-2">
//                 Price After Promotion
//               </label>
//               <input
//                 id="priceAfter"
//                 type="number"
//                 value={product.priceAfter}
//                 className="input border border-gray-300 p-4 w-full rounded-lg"
//                 readOnly
//               />
//             </div>
//             <div>
//               <label htmlFor="startDate" className="block text-sm font-semibold mb-2">
//                 Start Date
//               </label>
//               <input
//                 id="startDate"
//                 type="date"
//                 value={product.startDate}
//                 className="input border border-gray-300 p-4 w-full rounded-lg"
//                 readOnly
//               />
//             </div>
//             <div>
//               <label htmlFor="stopDate" className="block text-sm font-semibold mb-2">
//                 Stop Date
//               </label>
//               <input
//                 id="stopDate"
//                 type="date"
//                 value={product.endDate}
//                 className="input border border-gray-300 p-4 w-full rounded-lg"
//                 readOnly
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="description" className="block text-sm font-semibold mb-2">
//               Promotional Description
//             </label>
//             <textarea
//               id="description"
//               value={product.description}
//               className="textarea w-full border border-gray-300 p-4 rounded-lg"
//               readOnly
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="retailers" className="block text-sm font-semibold mb-2">
//               Targeted Retailers
//             </label>
//             <input
//               id="retailers"
//               type="text"
//               value={product.retailers}
//               className="input w-full border border-gray-300 p-4 rounded-lg"
//               readOnly
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreatePromotionDetails;
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const CreatePromotionDetails = () => {
//   const { promotionId } = useParams(); // Get promotionId from URL
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     // Simulating a fetch operation for product details
//     const fetchedProduct = {
//       promotionId,
//       sku: '12345',
//       productName: 'Organic Blueberries',
//       subBrand: 'Appy Limited',
//       startDate: '2024-09-10',
//       endDate: '2024-09-20',
//       discount: '20% off',
//       priceBefore: 100,
//       priceAfter: 80,
//       description: 'Amazing promotion on organic blueberries!',
//       retailers: 'Retailer A, Retailer B'
//     };
//     setProduct(fetchedProduct);
//   }, [promotionId]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gray-50 p-6 font-roboto">
//       <div className="bg-white shadow-lg rounded-lg w-full md:w-2/3 lg:w-1/2 p-8">
//         <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">Create Promotion</h1>

//         <form className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label htmlFor="promotionSku" className="block text-sm font-semibold text-gray-700 mb-2">
//                 Promotion SKU
//               </label>
//               <input
//                 id="promotionSku"
//                 type="text"
//                 value={product.sku}
//                 className="w-full border border-gray-300 rounded-lg p-3"
//                 readOnly
//               />
//             </div>
//             <div>
//               <label htmlFor="productSku" className="block text-sm font-semibold text-gray-700 mb-2">
//                 Product SKU
//               </label>
//               <input
//                 id="productSku"
//                 type="text"
//                 value={product.sku}
//                 className="w-full border border-gray-300 rounded-lg p-3"
//                 readOnly
//               />
//             </div>
//             <div>
//               <label htmlFor="productName" className="block text-sm font-semibold text-gray-700 mb-2">
//                 Product Name
//               </label>
//               <input
//                 id="productName"
//                 type="text"
//                 value={product.productName}
//                 className="w-full border border-gray-300 rounded-lg p-3"
//                 readOnly
//               />
//             </div>
//             <div>
//               <label htmlFor="subBrand" className="block text-sm font-semibold text-gray-700 mb-2">
//                 Sub Brand
//               </label>
//               <input
//                 id="subBrand"
//                 type="text"
//                 value={product.subBrand}
//                 className="w-full border border-gray-300 rounded-lg p-3"
//                 readOnly
//               />
//             </div>
//           </div>

//           <div className="flex items-center space-x-2 mb-4">
//             <input type="checkbox" className="h-4 w-4 text-blue-500 border-gray-300 rounded" />
//             <label className="text-sm font-medium text-gray-700">Flat Discount</label>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label htmlFor="priceBefore" className="block text-sm font-semibold text-gray-700 mb-2">
//                 Price Before Promotion
//               </label>
//               <input
//                 id="priceBefore"
//                 type="number"
//                 value={product.priceBefore}
//                 className="w-full border border-gray-300 rounded-lg p-3"
//                 readOnly
//               />
//             </div>
//             <div>
//               <label htmlFor="priceAfter" className="block text-sm font-semibold text-gray-700 mb-2">
//                 Price After Promotion
//               </label>
//               <input
//                 id="priceAfter"
//                 type="number"
//                 value={product.priceAfter}
//                 className="w-full border border-gray-300 rounded-lg p-3"
//                 readOnly
//               />
//             </div>
//             <div>
//               <label htmlFor="startDate" className="block text-sm font-semibold text-gray-700 mb-2">
//                 Start Date
//               </label>
//               <input
//                 id="startDate"
//                 type="date"
//                 value={product.startDate}
//                 className="w-full border border-gray-300 rounded-lg p-3"
//                 readOnly
//               />
//             </div>
//             <div>
//               <label htmlFor="endDate" className="block text-sm font-semibold text-gray-700 mb-2">
//                 End Date
//               </label>
//               <input
//                 id="endDate"
//                 type="date"
//                 value={product.endDate}
//                 className="w-full border border-gray-300 rounded-lg p-3"
//                 readOnly
//               />
//             </div>
//           </div>

//           <div>
//             <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
//               Promotional Description
//             </label>
//             <textarea
//               id="description"
//               value={product.description}
//               className="w-full border border-gray-300 rounded-lg p-3"
//               readOnly
//             />
//           </div>

//           <div>
//             <label htmlFor="retailers" className="block text-sm font-semibold text-gray-700 mb-2">
//               Targeted Retailers
//             </label>
//             <input
//               id="retailers"
//               type="text"
//               value={product.retailers}
//               className="w-full border border-gray-300 rounded-lg p-3"
//               readOnly
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreatePromotionDetails;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RetailerList from "../ReusableData/RetailerList";
import BackButton from "../../Dashboard/Reusable/BackButton";
import { useNavigate } from "react-router-dom";

const CreatePromotionDetails = () => {
  const navigate = useNavigate()
  const { promotionId } = useParams(); // Get promotionId from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulating a fetch operation for product details
    const fetchedProduct = {
      promotionId,
      sku: '12345',
      productName: 'Organic Blueberries',
      subBrand: 'Appy Limited',
      startDate: '2024-09-10',
      endDate: '2024-09-20',
      discount: '20% off',
      priceBefore: 100,
      priceAfter: 80,
      description: 'Amazing promotion on organic blueberries!',
      retailers: 'Retailer A, Retailer B'
    };
    setProduct(fetchedProduct);
  }, [promotionId]);

  if (!product) {
    return <div>Loading...</div>;
  }
  const handleNextClick = () => {
    // Navigate karte waqt promotionId ke baad next route add kar rahe hain
    navigate(`/supplier/promotion-management/select-product/create-promotion-details/${promotionId}/select-retailer`);
  };
  return (
    <>


      <div className="p-6 min-h-screen">
{/* 
        <div className="flex items-center justify-left mb-8">
          <BackButton />
          <h1 className="text-2xl font-bold text-gray-800 text-center">Create Promotion</h1>
        </div> */}
        <div className="flex flex-start">
          <BackButton />
          <h1 className="text-2xl font-bold text-gray-800 text-center">Create Promotion</h1>
        </div>


        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="promotionSku" className="block text-sm font-semibold text-gray-700 mb-2">
                Promotion SKU
              </label>
              <input
                id="promotionSku"
                type="text"
                value={product.sku}
                className="w-full border border-gray-300 rounded-lg p-3"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="productSku" className="block text-sm font-semibold text-gray-700 mb-2">
                Product SKU
              </label>
              <input
                id="productSku"
                type="text"
                value={product.sku}
                className="w-full border border-gray-300 rounded-lg p-3"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="productName" className="block text-sm font-semibold text-gray-700 mb-2">
                Product Name
              </label>
              <input
                id="productName"
                type="text"
                value={product.productName}
                className="w-full border border-gray-300 rounded-lg p-3"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="subBrand" className="block text-sm font-semibold text-gray-700 mb-2">
                Sub Brand
              </label>
              <input
                id="subBrand"
                type="text"
                value={product.subBrand}
                className="w-full border border-gray-300 rounded-lg p-3"
                readOnly
              />
            </div>
          </div>

          <div className="flex items-center space-x-2 mb-4">
            <input type="checkbox" className="h-4 w-4 text-blue-500 border-gray-300 rounded" />
            <label className="text-sm font-medium text-gray-700">Flat Discount</label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="priceBefore" className="block text-sm font-semibold text-gray-700 mb-2">
                Price Before Promotion
              </label>
              <input
                id="priceBefore"
                type="number"
                value={product.priceBefore}
                className="w-full border border-gray-300 rounded-lg p-3"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="priceAfter" className="block text-sm font-semibold text-gray-700 mb-2">
                Price After Promotion
              </label>
              <input
                id="priceAfter"
                type="number"
                value={product.priceAfter}
                className="w-full border border-gray-300 rounded-lg p-3"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="startDate" className="block text-sm font-semibold text-gray-700 mb-2">
                Start Date
              </label>
              <input
                id="startDate"
                type="date"
                value={product.startDate}
                className="w-full border border-gray-300 rounded-lg p-3"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="endDate" className="block text-sm font-semibold text-gray-700 mb-2">
                End Date
              </label>
              <input
                id="endDate"
                type="date"
                value={product.endDate}
                className="w-full border border-gray-300 rounded-lg p-3"
                readOnly
              />
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
              Promotional Description
            </label>
            <textarea
              id="description"
              value={product.description}
              className="w-full border border-gray-300 rounded-lg p-3"
              readOnly
            />
          </div>


        </form>

        <div className="flex justify-center flex-col mt-8 space-x-4">
          <button onClick={handleNextClick} className="px-6 py-2 bg-[#0D90C1] text-white rounded-md">
            Next
          </button>
          <button className="px-6 py-2 text-blue-600 underline">
            Draft Promotion
          </button>
        </div>
      </div>

    </>
  );
};

export default CreatePromotionDetails;
