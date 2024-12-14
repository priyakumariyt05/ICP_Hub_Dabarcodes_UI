// import React from 'react'
// import StatsCard from '../ReusableData/StatsCard';
// const SupplierHome = () => {
//   const data = [
//     { title: "SKU Count", value: "20,000" },
//     { title: "No. Of Categories", value: "100" },
//     { title: "No Of Brands", value: "1,300" },
//     { title: "SKU Count On Promotion", value: "9,340(46%)" },
//     { title: "Categries Being Promoted", value: "20(20%)" },
//     { title: "Brands Being Promoted", value: "650(50%)" },
//     { title: "SKU Count Promotion Redeemed", value: "75,00(50%)" },
//     { title: "Categories Promoted Redeemed", value: "10(50%)" },
//     { title: "Brands Promoted Redeemed", value: "65(10%)" },
//   ];
//   return (
//     <>
//       <div className="p-6  min-h-screen">
//         <h2 className="text-3xl font-bold mb-6">
//           Dashboard
//         </h2>

//         {/* Button Section */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
//           <button className="bg-[#E7F8FE]  py-2 px-4 rounded">
//             Add New Products
//           </button>
//           <button className="bg-[#E7F8FE]  py-4 px-4 rounded">
//             Add Sub Brand
//           </button>
//           <button className="bg-[#E7F8FE]  py-4 px-4 rounded">
//             Add Subscription
//           </button>

//           <button className="bg-[#E7F8FE] py-4 px-4 rounded">
//             Upgrade Subscription
//           </button>
//         </div>
//      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
//           {data.map((item, index) => (
//             <StatsCard
//               key={index}
//               title={item.title}
//               value={item.value}

//             />
//           ))}
//         </div>


//       </div>
//     </>
//   )
// }

// export default SupplierHome

import React, { useState } from 'react';
import StatsCard from '../ReusableData/StatsCard';
import Modal from '../Modal/Modal';
import AddSubBrandModal from '../Modal/AddSubBrandModal';
import { useNavigate } from 'react-router-dom';

const SupplierHome = () => {
  const navigate = useNavigate()
  const [isSubBrandModalOpen, setIsSubBrandModalOpen] = useState(false);

  const data = [
    { title: "SKU Count", value: "20,000" },
    { title: "No. Of Categories", value: "100" },
    { title: "No Of Brands", value: "1,300" },
    { title: "SKU Count On Promotion", value: "9,340(46%)" },
    { title: "Categries Being Promoted", value: "20(20%)" },
    { title: "Brands Being Promoted", value: "650(50%)" },
    { title: "SKU Count Promotion Redeemed", value: "75,00(50%)" },
    { title: "Categories Promoted Redeemed", value: "10(50%)" },
    { title: "Brands Promoted Redeemed", value: "65(10%)" },
  ];
const navigateSkuPage = ()=>{
  navigate("/supplier/sku-management")
}
const navigatePromotionPage= ()=>{
  navigate("/supplier/promotion-management")
}
const navigateSubscriptionPage = ()=>{
  navigate("/supplier/subscription-plan")
}

  return (
    <>
      <div className="p-6 min-h-screen">
        <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

        {/* Button Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {/* <button className="bg-[#E7F8FE] py-2 px-4 rounded">
            Add New Products
          </button> */}
  
      <button onClick={navigateSkuPage} className="bg-[#E7F8FE] py-2 px-4 rounded">
        Add New Products
      </button>
 
          <button
            className="bg-[#E7F8FE] py-4 px-4 rounded"
            onClick={() => setIsSubBrandModalOpen(true)}
          >
            Add Sub Brand
          </button>
          <button onClick={navigatePromotionPage} className="bg-[#E7F8FE] py-4 px-4 rounded">
            Add Promotion
          </button>
          <button onClick={navigateSubscriptionPage} className="bg-[#E7F8FE] py-4 px-4 rounded">
            Upgrade Subscription
          </button>
        </div>

        {/* Stats Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <StatsCard key={index} title={item.title} value={item.value} />
          ))}
        </div>
      </div>

      {/* Modal for Adding Sub Brand */}
      <Modal
        isOpen={isSubBrandModalOpen}
        onClose={() => setIsSubBrandModalOpen(false)}
        mainclass="flex items-center justify-center"
        className="w-full max-w-lg p-6"
      >
        <AddSubBrandModal onClose={() => setIsSubBrandModalOpen(false)} />
      </Modal>
    </>
  );
};

export default SupplierHome;
