// import React, { useRef } from 'react';
// import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
// import CouponCard from '../SkuList/CouponCard';

// const UpcomingCoupons = () => {
//   const scrollContainerRef = useRef(null);

//   const scroll = (direction) => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       const scrollAmount = container.clientWidth; // Scroll by the width of the container
//       container.scrollBy({
//         left: direction === 'left' ? -scrollAmount : scrollAmount,
//         behavior: 'smooth',
//       });
//     }
//   };

//   const coupons = [
//     {
//       id: 1,
//       title: '$25 OFF',
//       description: 'On Frozen Products and Fruits',
//       expiry: 'Exp. July 29',
//       bgColor: 'bg-[#6087D4]',
//       buttonColor: 'bg-blue-500',
//       imageUrl: '/image/vector2.png',
//     },
//     {
//       id: 2,
//       title: '20% OFF',
//       description: 'On Frozen Products and Fruits',
//       expiry: 'Exp. July 29',
//       bgColor: 'bg-[#763AB6]',
//       buttonColor: 'bg-blue-500',
//       imageUrl: '/image/vector2.png',
//     },
//     {
//       id: 3,
//       title: 'Bundle OFF',
//       description: 'On Frozen Products and Fruits',
//       expiry: 'Exp. July 20',
//       bgColor: 'bg-[#EC5F93]',
//       buttonColor: 'bg-blue-500',
//       imageUrl: '/image/vector3.png',
//     },
//     {
//       id: 4,
//       title: 'Bundle OFF',
//       description: 'On Frozen Products and Fruits',
//       expiry: 'Exp. July 20',
//       bgColor: 'bg-[#EC5F93]',
//       buttonColor: 'bg-blue-500',
//       imageUrl: '/image/vector3.png',
//     },
//     {
//       id: 5,
//       title: 'Bundle OFF',
//       description: 'On Frozen Products and Fruits',
//       expiry: 'Exp. July 20',
//       bgColor: 'bg-[#EC5F93]',
//       buttonColor: 'bg-blue-500',
//       imageUrl: '/image/vector3.png',
//     },
//   ];

//   return (
//     <div className="p-8 m-8">
//       <div className="flex justify-between items-center mt-10 mb-10">
//         <h1 className="font-butler text-2xl font-extrabold leading-30px text-center text-[#171717]">
//         Save the Date: Upcoming Discounts
//         </h1>
//         <button className="text-blue-500 border-b-2 border-blue-500 pb-1 hover:bg-blue-100">
//           View All
//         </button>
//       </div>
//       <div className="relative max-w-7xl mx-auto p-5 rounded-lg">
//         <button
//           onClick={() => scroll('left')}
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#0673C1] text-white rounded-full p-2 z-10 shadow-md"
//         >
//           <IoArrowBack className="w-8 h-8" />
//         </button>
//         <button
//           onClick={() => scroll('right')}
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#0673C1] text-white rounded-full p-2 z-10 shadow-md"
//         >
//           <IoArrowForward className="w-8 h-8" />
//         </button>
//         <div
//           ref={scrollContainerRef}
//           className="flex gap-4 overflow-x-auto whitespace-nowrap scroll-smooth hide-scrollbar"
//           style={{ width: '100%', maxWidth: '1200px' }} // Adjust width to show 3 coupons at a time
//         >
//           {coupons.map((coupon) => (
//             <div style={{ flex: '0 0 33.33%' }} key={coupon.id}>
//               <CouponCard {...coupon} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpcomingCoupons;
// import React, { useRef } from 'react';
// import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
// import UpcomingCouponCard from './UpcomingCouponCard.jsx';

// const UpcomingCoupons = () => {
//   const scrollContainerRef = useRef(null);

//   const scroll = (direction) => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       const scrollAmount = container.clientWidth; // Scroll by the width of the container
//       container.scrollBy({
//         left: direction === 'left' ? -scrollAmount : scrollAmount,
//         behavior: 'smooth',
//       });
//     }
//   };

//   const coupons = [
//     {
//       id: 1,
//       title: '$25 OFF',
//       description: 'On Frozen Products and Fruits',
//       launch: 'Deal Launching on July', 
//       bgColor: 'bg-[#6087D4]',
//       buttonColor: 'bg-blue-500',
//       imageUrl: '/image/vector2.png',
//     },
//     {
//       id: 2,
//       title: '20% OFF',
//       description: 'On Frozen Products and Fruits',
//       launch: 'Deal Launching on July', 
//       bgColor: 'bg-[#763AB6]',
//       buttonColor: 'bg-blue-500',
//       imageUrl: '/image/vector2.png',
//     },
//     {
//       id: 3,
//       title: 'Bundle OFF',
//       description: 'On Frozen Products and Fruits',
//       launch: 'Deal Launching on July', 
//       bgColor: 'bg-[#EC5F93]',
//       buttonColor: 'bg-blue-500',
//       imageUrl: '/image/vector3.png',
//     },
//     {
//       id: 4,
//       title: 'Bundle OFF',
//       description: 'On Frozen Products and Fruits',
//       launch: 'Deal Launching on July', 
//       bgColor: 'bg-[#EC5F93]',
//       buttonColor: 'bg-blue-500',
//       imageUrl: '/image/vector3.png',
//     },
//     {
//       id: 5,
//       title: 'Bundle OFF',
//       description: 'On Frozen Products and Fruits',
//       launch: 'Deal Launching on July', // Updated field name
//       bgColor: 'bg-[#EC5F93]',
//       buttonColor: 'bg-blue-500',
//       imageUrl: '/image/vector3.png',
//     },
//   ];

//   return (
//     <div className="p-8 m-8">
//     <div className="flex justify-between items-center mt-10 mb-10">
//       <h1 className="font-butler text-2xl font-extrabold leading-30px text-center text-[#171717]">
//       Save the Date: Upcoming Discounts
//       </h1>
//       <button className="text-blue-500 border-b-2 border-blue-500 pb-1 hover:bg-blue-100">
//         View All
//       </button>
//     </div>
//     <div className="relative max-w-7xl mx-auto p-5 rounded-lg">
//       <button
//         onClick={() => scroll('left')}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#0673C1] text-white rounded-full p-2 z-10 shadow-md"
//       >
//         <IoArrowBack className="w-8 h-8" />
//       </button>
//       <button
//         onClick={() => scroll('right')}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#0673C1] text-white rounded-full p-2 z-10 shadow-md"
//       >
//         <IoArrowForward className="w-8 h-8" />
//       </button>
//       <div
//         ref={scrollContainerRef}
//         className="flex gap-4 overflow-x-auto whitespace-nowrap scroll-smooth hide-scrollbar"
//         style={{ width: '100%', maxWidth: '1200px' }} 
//         {coupons.map((coupon) => (
//           <div style={{ flex: '0 0 33.33%' }} key={coupon.id}>
//             <UpcomingCouponCard {...coupon} />
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
//   );
// };

// export default UpcomingCoupons;
// import React, { useRef } from 'react';
// import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
// import UpcomingCouponCard from './UpcomingCouponCard.jsx';
// import CouponCard from '../SkuList/CouponCard.jsx';


// const UpcomingCoupons = () => {
//   const scrollContainerRef = useRef(null);

//   const scroll = (direction) => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       const scrollAmount = container.clientWidth; 
//       container.scrollBy({
//         left: direction === 'left' ? -scrollAmount : scrollAmount,
//         behavior: 'smooth',
//       });
//     }
//   };

//   const coupons = [
//     {
//       id: 1,
//       title: '$25 OFF',
//       description: 'On Frozen Products and Fruits',
//       launch: 'Deal Launching on July', 
//       bgColor: 'bg-[#6087D4]',
//       buttonColor: 'bg-blue-500',
//       imageUrl: '/image/vector2.png',
//     },
//     {
//       id: 2,
//       title: '20% OFF',
//       description: 'On Frozen Products and Fruits',
//       launch: 'Deal Launching on July', 
//       bgColor: 'bg-[#763AB6]',
//       buttonColor: 'bg-blue-500',
//       imageUrl: '/image/vector2.png',
//     },
//     {
//       id: 3,
//       title: 'Bundle OFF',
//       description: 'On Frozen Products and Fruits',
//       launch: 'Deal Launching on July', 
//       bgColor: 'bg-[#EC5F93]',
//       buttonColor: 'bg-blue-500',
//       imageUrl: '/image/vector3.png',
//     },
//     {
//       id: 4,
//       title: 'Bundle OFF',
//       description: 'On Frozen Products and Fruits',
//       launch: 'Deal Launching on July', 
//       bgColor: 'bg-[#EC5F93]',
//       buttonColor: 'bg-blue-500',
//       imageUrl: '/image/vector3.png',
//     },
//     {
//       id: 5,
//       title: 'Bundle OFF',
//       description: 'On Frozen Products and Fruits',
//       launch: 'Deal Launching on July', 
//       bgColor: 'bg-[#EC5F93]',
//       buttonColor: 'bg-blue-500',
//       imageUrl: '/image/vector3.png',
//     },
//   ];

//   return (
//     <>


//     <div className="p-8 m-8">
//       <div className="flex justify-between items-center mt-10 mb-10">
//         <h1 className="font-butler text-2xl font-extrabold leading-30px text-center text-[#171717]">
//         Save the Date: Upcoming Discounts
//         </h1>
//         <button className="text-blue-500 border-b-2 border-blue-500 pb-1 hover:bg-blue-100">
//           View All
//         </button>
//       </div>
//       <div className="relative max-w-7xl mx-auto p-5 rounded-lg">
//         <button
//           onClick={() => scroll('left')}
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#0673C1] text-white rounded-full p-2 z-10 shadow-md"
//         >
//           <IoArrowBack className="w-8 h-8" />
//         </button>
//         <button
//           onClick={() => scroll('right')}
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#0673C1] text-white rounded-full p-2 z-10 shadow-md"
//         >
//           <IoArrowForward className="w-8 h-8" />
//         </button>
//         <div
//           ref={scrollContainerRef}
//           className="flex gap-4 overflow-x-auto whitespace-nowrap scroll-smooth hide-scrollbar"
//           style={{ width: '100%', maxWidth: '1200px' }} // Adjust width to show 3 coupons at a time
//         >
//           {coupons.map((coupon) => (
//             <div style={{ flex: '0 0 33.33%' }} key={coupon.id}>
//               <CouponCard {...coupon} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default UpcomingCoupons;
import React, { useRef } from 'react';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import CouponCard from '../SkuList/CouponCard.jsx';
import UpcomingCouponCard from './UpcomingCouponCard.jsx.jsx';

const UpcomingCoupons = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth; 
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const coupons = [
    {
      id: 1,
      title: '$25 OFF',
      description: 'On Frozen Products and Fruits',
      launch: 'Deal Launching on July',
      bgColor: 'bg-[#6087D4]',
      buttonColor: 'bg-blue-500',
      imageUrl: '/image/vector2.png',
    },
    {
      id: 2,
      title: '20% OFF',
      description: 'On Frozen Products and Fruits',
      launch: 'Deal Launching on July',
      bgColor: 'bg-[#763AB6]',
      buttonColor: 'bg-blue-500',
      imageUrl: '/image/vector2.png',
    },
    {
      id: 3,
      title: 'Bundle OFF',
      description: 'On Frozen Products and Fruits',
      launch: 'Deal Launching on July',
      bgColor: 'bg-[#EC5F93]',
      buttonColor: 'bg-blue-500',
      imageUrl: '/image/vector3.png',
    },
    {
      id: 4,
      title: 'Bundle OFF',
      description: 'On Frozen Products and Fruits',
      launch: 'Deal Launching on July',
      bgColor: 'bg-[#EC5F93]',
      buttonColor: 'bg-blue-500',
      imageUrl: '/image/vector3.png',
    },
    {
      id: 5,
      title: 'Bundle OFF',
      description: 'On Frozen Products and Fruits',
      launch: 'Deal Launching on July',
      bgColor: 'bg-[#EC5F93]',
      buttonColor: 'bg-blue-500',
      imageUrl: '/image/vector3.png',
    },
  ];

  return (
    <div className="p-8 m-8">
      <div className="flex justify-between items-center mt-10 mb-10">
        <h1 className="font-butler text-2xl font-extrabold leading-30px text-center text-[#171717]">
          Save the Date: Upcoming Discounts
        </h1>
        <button className="text-blue-500 border-b-2 border-blue-500 pb-1 hover:bg-blue-100">
          View All
        </button>
      </div>
      <div className="relative max-w-7xl mx-auto p-5 rounded-lg">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#0673C1] text-white rounded-full p-2 z-10 shadow-md"
        >
          <IoArrowBack className="w-8 h-8" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#0673C1] text-white rounded-full p-2 z-10 shadow-md"
        >
          <IoArrowForward className="w-8 h-8" />
        </button>
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto whitespace-nowrap scroll-smooth hide-scrollbar"
        >
          {coupons.map((coupon) => (
            <div
              key={coupon.id}
              className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4" // Responsive width for different screen sizes
            >
              <UpcomingCouponCard {...coupon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingCoupons;
