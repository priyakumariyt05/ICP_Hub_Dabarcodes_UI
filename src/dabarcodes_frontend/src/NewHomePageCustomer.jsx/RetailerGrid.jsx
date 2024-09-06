// import React from 'react';
// import RetailerCard from './RetailerCard'; 

// const RetailerGrid = () => {

//   const retailers = [
//     { storeName: 'Retailer A', offer: '10% off on all products', validTill: '31st December 2024', imageSrc: '/image/retailerA.png' },
//     { storeName: 'Retailer B', offer: '20% off on electronics', validTill: '15th January 2025', imageSrc: '/image/retailerB.png' },
//     { storeName: 'Retailer C', offer: 'Buy 1 Get 1 Free', validTill: '10th November 2024', imageSrc: '/image/retailerC.png' },
//     { storeName: 'Retailer D', offer: 'Free Shipping on orders over $50', validTill: '25th December 2024', imageSrc: '/image/retailerD.png' },
//     { storeName: 'Retailer E', offer: '15% off on fashion items', validTill: '5th February 2025', imageSrc: '/image/retailerE.png' },
//     { storeName: 'Retailer F', offer: 'Up to 50% off on clearance items', validTill: '20th December 2024', imageSrc: '/image/retailerF.png' },
//   ];

//   return (
//     <div className="p-10">
//       <h1 className="text-2xl font-bold font-roboto text-center mb-8">Explore Promotions by Category</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {retailers.map((retailer, index) => (
//           <RetailerCard
//             key={index}
//             storeName={retailer.storeName}
//             offer={retailer.offer}
//             validTill={retailer.validTill}
//             imageSrc={retailer.imageSrc}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RetailerGrid;
import React from 'react';
import RetailerCard from './RetailerCard'; 

const RetailerGrid = () => {

  const retailers = [
    { storeName: 'Retailer A', offer: '10% off on all products', validTill: '31st December 2024', imageSrc: '/image/promo.png' },
    { storeName: 'Retailer B', offer: '20% off on electronics', validTill: '15th January 2025', imageSrc: '/image/promo.png' },
    { storeName: 'Retailer C', offer: 'Buy 1 Get 1 Free', validTill: '10th November 2024', imageSrc: '/image/promo.png' },
    { storeName: 'Retailer D', offer: 'Free Shipping on orders over $50', validTill: '25th December 2024', imageSrc: '/image/promo.png' },
    { storeName: 'Retailer E', offer: '15% off on fashion items', validTill: '5th February 2025', imageSrc: '/image/promo.png' },
    { storeName: 'Retailer F', offer: 'Up to 50% off on clearance items', validTill: '20th December 2024', imageSrc: '/image/promo.png' },
  ];

  return (
    <div className="p-10">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold font-butler">Retailer near me</h1>
        <button className="text-black px-4 py-2 rounded-full font-roboto">View All</button>
      </div>
      
      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {retailers.map((retailer, index) => (
          <RetailerCard
            key={index}
            storeName={retailer.storeName}
            offer={retailer.offer}
            validTill={retailer.validTill}
            imageSrc={retailer.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default RetailerGrid;
