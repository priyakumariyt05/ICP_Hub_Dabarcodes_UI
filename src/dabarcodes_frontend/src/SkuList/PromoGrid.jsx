// import React from 'react';

// const PromoCard = ({ storeName, offer, validTill }) => {
//   return (
//     <div className="border rounded-lg p-4 shadow-md text-left mx-4 my-2 max-w-xs md:max-w-sm lg:max-w-md">
//       <div className="flex items-center mb-4">
//         <img
//           src="/image/promo.png" 
//           alt="Store Logo"
//           className="w-12 h-12 mr-4"
//         />
//         <div>
//           <h2 className="font-bold">{storeName}</h2>
//           <p className="text-gray-500">Available online and physical store</p>
//         </div>
//       </div>
//       <p className="font-bold mt-2">
//         Valid till: <span className="text-gray-500">{validTill}</span>
//       </p>
//       <p className="font-bold mt-2 text-teal-500">
//         Promotional Offer: {offer}
//       </p>

  
//     </div>
//   );
// };

// const PromoGrid = () => {
//   return (
//     <div className="max-w-6xl mx-auto p-4 m-10">
//     <div className="flex justify-between items-center mt-10 mb-10">
//           <h1 className="text-2xl font-semibold">Participating Retailers</h1>
        
//         </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <PromoCard
//           storeName="Store name 1"
//           offer="20% off"
//           validTill="7th Aug"
//         />
//         <PromoCard
//           storeName="Store name 2"
//           offer="20% off"
//           validTill="7th Aug"
//         />
//         <PromoCard
//           storeName="Store name 3"
//           offer="20% off"
//           validTill="7th Aug"
//         />
//       </div>
      
//     </div>
//   );
// };

// export default PromoGrid;


const PromoCard = ({ storeName, offer, validTill }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md text-left mx-4 my-2 max-w-xs md:max-w-sm lg:max-w-md">
      <div className="flex items-center mb-4">
        <img
          src="/image/promo.png"
          alt="Store Logo"
          className="w-12 h-12 mr-4"
        />
        <div>
          <h2 className="font-bold">{storeName}</h2>
          <p className="text-gray-500">Available online and physical store</p>
        </div>
      </div>
      <p className="font-bold mt-2 text-[#646464]">
        Valid till: <span className="text-[#171717]">{validTill}</span>
      </p>
      <p className="font-bold mt-2 text-[#646464]">
        Promotional Offer: <span className="text-[#0D90C1]">{offer}</span>
      </p>
    </div>
  );
};

const PromoGrid = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 m-10">
      <div className="flex justify-between items-center mt-10 mb-10">
        <h1 className="text-2xl font-semibold">Participating Retailers</h1>
      </div>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PromoCard
            storeName="Store name 1"
            offer="20% off"
            validTill="7th Aug"
          />
          <PromoCard
            storeName="Store name 2"
            offer="20% off"
            validTill="7th Aug"
          />
          <PromoCard
            storeName="Store name 3"
            offer="20% off"
            validTill="7th Aug"
          />
          
        </div>

        {/* Down Arrow Inline with the Last Card */}
        <div className="absolute bottom-[-20px] left-0 right-0 flex justify-center">
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PromoGrid