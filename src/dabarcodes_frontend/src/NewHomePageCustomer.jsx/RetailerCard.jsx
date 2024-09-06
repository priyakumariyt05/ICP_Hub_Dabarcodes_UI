// const RetailerCard = ({ storeName, offer, validTill }) => {
//     return (
//       <div className="border rounded-lg p-4 shadow-md text-left mx-4 my-2 max-w-xs md:max-w-sm lg:max-w-md">
//         <div className="flex items-center mb-4">
//           <img
//             src="/image/promo.png"
//             alt="Store Logo"
//             className="w-12 h-12 mr-4"
//           />
//           <div>
//             <h2 className="font-bold">{storeName}</h2>
//             <p className="text-gray-500">Available online and physical store</p>
//           </div>
//         </div>
//         <p className="font-bold mt-2 text-[#646464]">
//           Valid till: <span className="text-[#171717]">{validTill}</span>
//         </p>
//         <p className="font-bold mt-2 text-[#646464]">
//           Promotional Offer: <span className="text-[#0D90C1]">{offer}</span>
//         </p>
//       </div>
//     );
//   };
  
import React from 'react';

const RetailerCard = ({
  storeName,
  offer,
  validTill,
  imageSrc = "/image/promo.png",
  imageAlt = "Store Logo",
  className = "", // Additional class names for customization
  children, // Allows adding additional content inside the card if needed
  showOffer = true, // Control visibility of the offer section
  showValidTill = true // Control visibility of the validTill section
}) => {
  return (
    <div className={`border rounded-lg p-4 shadow-md text-left mx-4 my-2 max-w-xs md:max-w-sm lg:max-w-md ${className}`}>
      <div className="flex items-center mb-4">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-12 h-12 mr-4"
        />
        <div>
          <h2 className="font-bold">{storeName}</h2>
          <p className="text-gray-500">Available online and physical store</p>
        </div>
      </div>
      {showValidTill && (
        <p className="font-bold mt-2 text-[#646464]">
          Valid till: <span className="text-[#171717]">{validTill}</span>
        </p>
      )}
      {showOffer && (
        <p className="font-bold mt-2 text-[#646464]">
          Promotional Offer: <span className="text-[#0D90C1]">{offer}</span>
        </p>
      )}
      {children} {/* Allows additional content to be passed inside the card */}
    </div>
  );
};

export default RetailerCard;


