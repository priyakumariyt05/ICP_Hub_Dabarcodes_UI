// import React from 'react'
// import PromotionTable from './PromotionTable'
// import { Link } from 'react-router-dom';
// const PromotionPage = () => {
//   const data = [
//     { sku: 52, promotionId: 52, productName: 'Organic Blueberries', subBrand: 'Appy Limited', startDate: '10.09.2024', endDate: '20.09.2024', discount: '20% off' },
//     { sku: 152, promotionId: 152, productName: 'Organic Blueberries', subBrand: 'Appy Limited', startDate: '12.08.2024', endDate: '12.10.2024', discount: '5% off' },
//     { sku: 152, promotionId: 152, productName: 'Organic Blueberries', subBrand: 'Appy Limited', startDate: '09.08.2024', endDate: '09.08.2024', discount: '20% off' },
//     { sku: 36, promotionId: 36, productName: 'Organic Blueberries', subBrand: 'Appy Limited', startDate: '20.07.2024', endDate: '20.07.2024', discount: '20% off' },
//     { sku: 36, promotionId: 36, productName: 'Organic Blueberries', subBrand: 'Appy Limited', startDate: '02.07.2024', endDate: '02.07.2024', discount: '20% off' },
//     { sku: 94, promotionId: 94, productName: 'Organic Blueberries', subBrand: 'Appy Limited', startDate: '18.06.2024', endDate: '18.06.2024', discount: '20% off' },
//     { sku: 85, promotionId: 85, productName: 'Fresh Strawberries', subBrand: 'Berry Delight', startDate: '01.09.2024', endDate: '10.09.2024', discount: '15% off' },
//     { sku: 24, promotionId: 24, productName: 'Natural Honey', subBrand: 'Bee Pure', startDate: '15.07.2024', endDate: '15.08.2024', discount: '10% off' },
//     { sku: 63, promotionId: 63, productName: 'Avocado', subBrand: 'Green Farm', startDate: '05.05.2024', endDate: '15.05.2024', discount: '12% off' },
//     { sku: 47, promotionId: 47, productName: 'Organic Apples', subBrand: 'Fruit Orchard', startDate: '01.04.2024', endDate: '15.04.2024', discount: '18% off' }
//   ];
  
//   return (
//     <>
//       <div className="p-6 min-h-screen">
//         <h2 className="text-3xl font-bold mb-6">Promotion Page</h2>

//         {/* Button Section */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
     
     
//   <Link to="/supplier/promotion-management/ongoing-promotion" className="bg-[#E7F8FE] py-4 px-4 rounded block text-center">
//     Ongoing Promotion
//   </Link>
//   <Link to="/supplier/promotion-management/upcoming-promotion" className="bg-[#E7F8FE] py-4 px-4 rounded block text-center">
//     Upcoming Promotion
//   </Link>
//   <Link to="/supplier/promotion-management/expired-promotion" className="bg-[#E7F8FE] py-4 px-4 rounded block text-center">
//     Expired Promotion
//   </Link>
//   <Link to="/supplier/promotion-management/draft-promotion" className="bg-[#E7F8FE] py-4 px-4 rounded block text-center">
//     Draft Promotion
//   </Link>


//         </div>
//         <PromotionTable data={data} />


//       </div>
//     </>
//   )
// }

// export default PromotionPage
import { Link, Navigate, useNavigate } from "react-router-dom";
import PromotionTable from "./PromotionTable";

const PromotionPage = () => {
  const navigate = useNavigate()
  const data = [
    { sku: 52, promotionId: 52, productName: 'Organic Blueberries', subBrand: 'Appy Limited', startDate: '10.09.2024', endDate: '20.09.2024', discount: '20% off' },
    { sku: 152, promotionId: 152, productName: 'Organic Blueberries', subBrand: 'Appy Limited', startDate: '12.08.2024', endDate: '12.10.2024', discount: '5% off' },
   
  ];

  const handleRowClick = (rowData) => {
    console.log("Row clicked:", rowData);
  };
const addPromotion =()=>{
  navigate("/supplier/promotion-management/select-product")
}
  return (
    <div className="p-4 min-h-screen">
      <div className="flex items-center justify-between mb-6">
  <h2 className="text-3xl font-bold">Promotion Page</h2>
  <button onClick={addPromotion} className="px-4 py-2 bg-blue-500 text-white rounded">Add Promotion</button>
</div>

      {/* Button Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Link to="/supplier/promotion-management/ongoing-promotion" className="bg-[#E7F8FE] py-4 px-4 rounded block text-center">
          Ongoing Promotion
        </Link>
        <Link to="/supplier/promotion-management/upcoming-promotion" className="bg-[#E7F8FE] py-4 px-4 rounded block text-center">
          Upcoming Promotion
        </Link>
        <Link to="/supplier/promotion-management/expired-promotion" className="bg-[#E7F8FE] py-4 px-4 rounded block text-center">
          Expired Promotion
        </Link>
        <Link to="/supplier/promotion-management/draft-promotion" className="bg-[#E7F8FE] py-4 px-4 rounded block text-center">
          Draft Promotion
        </Link>
      </div>

      <PromotionTable data={data} onRowClick={handleRowClick} />
    </div>
  );
};

export default PromotionPage;
