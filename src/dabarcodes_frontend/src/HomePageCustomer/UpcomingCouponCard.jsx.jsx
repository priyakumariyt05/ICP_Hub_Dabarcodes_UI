// import React from 'react';
// const UpcomingCouponCard = ({ title, description, launch, bgColor, imageUrl, buttonColor }) => (
//   <div className="relative bg-white rounded-lg shadow-md overflow-hidden ">
//     <div
//       className={`absolute inset-0 ${bgColor}`}
//       style={{ height: 'calc(60% + 1rem)', width: '100%' }}
//     ></div>
//     <div className="relative p-5 flex flex-col">
//       <div className="flex flex-row items-start gap-5">
//         <div className="flex-1">
//           <h2 className="text-2xl font-bold mb-4 text-white font-butler opacity-80">{title}</h2>
//           <p className=" mb-4 text-[#E8E8E8] font-roboto font-normal text-sm leading-16.8">{description}</p>
//           <p className="text-sm mb-4 text-white">{launch}</p>
//         </div>
//         <div className="flex-shrink-0">
//           <img
//             src={imageUrl}
//             alt="Coupon Image"
//             className="w-full h-auto object-contain max-w-[150px]"
//           />
//         </div>
//       </div>
//       <div className="flex justify-end mt-4"> {/* Aligns button to the end */}
//         <button className={`${buttonColor} hover:opacity-90 text-white py-2 px-4 rounded`}>
//           Click here to Claim
//         </button>
//       </div>

//     </div>
//   </div>
// );

// export default UpcomingCouponCard;
// import React from 'react';

// const UpcomingCouponCard = ({ title, description, launch, bgColor, imageUrl, buttonColor }) => (
//   <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
//     <div
//       className={`absolute inset-0 ${bgColor}`}
//       style={{ height: 'calc(60% + 1rem)', width: '100%' }}
//     ></div>
//     <div className="relative p-5 flex flex-col h-full">
//       <div className="flex flex-col sm:flex-row items-start gap-5">
//         <div className="flex-1">
//           <h2 className="text-2xl font-bold mb-4 text-white font-butler opacity-80">{title}</h2>
//           <p className="mb-4 text-[#E8E8E8] font-roboto font-normal text-sm leading-6">{description}</p>
//           <p className="text-sm mb-4 text-white">{launch}</p>
//         </div>
//         <div className="flex-shrink-0">
//           <img
//             src={imageUrl}
//             alt="Coupon Image"
//             className="w-full h-auto max-w-[150px] object-contain"
//           />
//         </div>
//       </div>
//       <div className="flex justify-center sm:justify-end mt-4">
//         <button className={`${buttonColor} hover:opacity-90 text-white py-2 px-4 rounded`}>
//           Click here to Claim
//         </button>
//       </div>
//     </div>
//   </div>
// );

// export default UpcomingCouponCard;
// import React from 'react';

// const UpcomingCouponCard = ({ title, description, launch, bgColor, imageUrl, buttonColor }) => (
//   <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
//     <div
//       className={`absolute inset-0 ${bgColor}`}
//       style={{ height: 'calc(60% + 1rem)', width: '100%' }}
//     ></div>
//     <div className="relative p-5 flex flex-col h-full">
//       <div className="flex flex-row items-start gap-5">
//         <div className="flex-1">
//           <h2 className="text-2xl font-bold mb-4 text-white font-butler opacity-80">{title}</h2>
//           <p className="mb-4 text-[#E8E8E8] font-roboto font-normal text-sm leading-16.8">{description}</p>
//           <p className="text-sm mb-4 text-white">{launch}</p>
//         </div>
//         <div className="flex-shrink-0">
//           <img
//             src={imageUrl}
//             alt="Coupon Image"
//             className="w-auto h-[150px] object-contain" // Adjust height as needed
//           />
//         </div>
//       </div>
//       <div className="flex justify-end mt-4"> {/* Aligns button to the end */}
//         <button className={`${buttonColor} hover:opacity-90 text-white py-2 px-4 rounded`}>
//           Click here to Claim
//         </button>
//       </div>
//     </div>
//   </div>
// );

// export default UpcomingCouponCard;
import React from "react";
const UpcomingCouponCard = ({
  title,
  description,
  launch,
  bgColor,
  imageUrl,
  buttonColor,
}) => (
  <div className="relative bg-white rounded-lg shadow-md overflow-hidden ">
    <div
      className={`absolute inset-0 ${bgColor}`}
      style={{ height: "calc(60% + 1rem)", width: "100%" }}
    ></div>
    <div className="relative p-5 flex flex-col">
      <div className="flex flex-row items-start gap-5">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4 text-white font-butler opacity-80">
            {title}
          </h2>
          <p className=" mb-4 text-[#E8E8E8] font-roboto font-normal text-sm leading-16.8">
            {description}
          </p>
          <p className="text-sm mb-4 text-white">{launch}</p>
        </div>
        <div className="flex-shrink-0">
          <img
            src={imageUrl}
            alt="Coupon Image"
            className="w-full h-auto object-contain max-w-[150px]"
          />
        </div>
      </div>
      <div className="flex justify-end items-center mt-4">
        <button
          className={`${buttonColor} hover:opacity-90 text-white py-2 px-4 rounded`}
        >
          Click here to Claim
        </button>
      </div>
    </div>
  </div>
);

export default UpcomingCouponCard;
