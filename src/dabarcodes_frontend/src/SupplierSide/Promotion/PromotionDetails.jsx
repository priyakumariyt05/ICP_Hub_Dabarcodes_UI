
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import BackButton from "../../Dashboard/Reusable/BackButton";
import PreviousRedemption from "../../Dashboard/Reusable/Table/PreviousRedemption";

const PromotionDetails = () => {
  const { promotionId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchedProduct = {
      promotionId,
      sku: '12345',
      productName: 'Organic Blueberries',
      subBrand: 'Appy Limited',
      startDate: '10.09.2024',
      endDate: '20.09.2024',
      discount: '20% off',
      priceBefore: 100,
      priceAfter: 80,
      description: 'Amazing promotion on organic blueberries!',
      retailers: 'Retailer A, Retailer B'
    };
    setProduct(fetchedProduct); // Set the fetched data to state
  }, [promotionId]);

  if (!product) {
    return <div>Loading...</div>;
  }
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
    <div className="min-h-screen flex flex-col md:flex-row bg-white p-4  font-roboto">

      <div className="bg-white w-full  p-4 md:p-8 flex flex-col">


        <div className="flex flex-start">
          <BackButton />

          <h1 className="text-2xl font-bold">Promotion Details</h1>

        </div>

        <form className="w-full">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="promotionSku" className="block text-sm font-semibold mb-2">
                Promotion SKU
              </label>
              <input
                id="promotionSku"
                type="text"
                value={product.sku}
                className="input border border-gray-300 p-4 w-full rounded-lg"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="productSku" className="block text-sm font-semibold mb-2">
                Product SKU
              </label>
              <input
                id="productSku"
                type="text"
                value={product.sku}
                className="input border border-gray-300 p-4 w-full rounded-lg"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="productName" className="block text-sm font-semibold mb-2">
                Product Name
              </label>
              <input
                id="productName"
                type="text"
                value={product.productName}
                className="input border border-gray-300 p-4 w-full rounded-lg"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="subBrand" className="block text-sm font-semibold mb-2">
                Sub Brand
              </label>
              <input
                id="subBrand"
                type="text"
                value={product.subBrand}
                className="input border border-gray-300 p-4 w-full rounded-lg"
                readOnly
              />
            </div>
          </div>
          <label className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            Flat Discount
          </label>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="priceBefore" className="block text-sm font-semibold mb-2">
                Price Before Promotion
              </label>
              <input
                id="priceBefore"
                type="number"
                value={product.priceBefore}
                className="input border border-gray-300 p-4 w-full rounded-lg"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="priceAfter" className="block text-sm font-semibold mb-2">
                Price After Promotion
              </label>
              <input
                id="priceAfter"
                type="number"
                value={product.priceAfter}
                className="input border border-gray-300 p-4 w-full rounded-lg"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="startDate" className="block text-sm font-semibold mb-2">
                Start Date
              </label>
              <input
                id="startDate"
                type="date"
                value={product.startDate}
                className="input border border-gray-300 p-4 w-full rounded-lg"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="stopDate" className="block text-sm font-semibold mb-2">
                Stop Date
              </label>
              <input
                id="stopDate"
                type="date"
                value={product.endDate}
                className="input border border-gray-300 p-4 w-full rounded-lg"
                readOnly
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-semibold mb-2">
              Promotional Description
            </label>
            <textarea
              id="description"
              value={product.description}
              className="textarea w-full border border-gray-300 p-4 rounded-lg"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="retailers" className="block text-sm font-semibold mb-2">
              Targeted Retailers
            </label>
            <input
              id="retailers"
              type="text"
              value={product.retailers}
              className="input w-full border border-gray-300 p-4 rounded-lg"
              readOnly
            />
          </div>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Link to="/supplier/promotion-management/promotion-details/:promotionId/accepted" className="bg-[#E7F8FE] py-4 px-4 rounded block text-center">
            Accepted
          </Link>
          <Link to="/supplier/promotion-management/promotion-details/:promotionId/rejected" className="bg-[#E7F8FE] py-4 px-4 rounded block text-center">
            Rejected
          </Link>
          <Link to="/supplier/promotion-management/promotion-details/:promotionId/pending" className="bg-[#E7F8FE] py-4 px-4 rounded block text-center">
            Pending
          </Link>
          <Link to="/supplier/promotion-management/promotion-details/:promotionId" className="bg-[#E7F8FE] py-4 px-4 rounded block text-center">
            Redeemed
          </Link>
        </div>
         {/* table */}
  
        <h1 className="text-2xl font-bold mb-4">Previous Redemptions</h1>
        <PreviousRedemption previousRedemption={previousData} />
     
      </div>

    </div>
  );
};

export default PromotionDetails;
