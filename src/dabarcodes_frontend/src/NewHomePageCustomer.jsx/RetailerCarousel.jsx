// import React from 'react';
// import Slider from 'react-slick';
// import RetailerCard from './RetailerCard';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const RetailerCarousel = () => {

//   const retailers = [
//     { storeName: 'Retailer A', offer: '10% off on all products', validTill: '31st December 2024', imageSrc: '/image/promo.png' },
//     { storeName: 'Retailer B', offer: '20% off on electronics', validTill: '15th January 2025', imageSrc: '/image/promo.png'},
//     { storeName: 'Retailer C', offer: 'Buy 1 Get 1 Free', validTill: '10th November 2024', imageSrc:  '/image/promo.png' },
//     { storeName: 'Retailer D', offer: 'Free Shipping on orders over $50', validTill: '25th December 2024', imageSrc:  '/image/promo.png' },
//     { storeName: 'Retailer E', offer: '15% off on fashion items', validTill: '5th February 2025', imageSrc: '/image/promo.png'},
//     { storeName: 'Retailer F', offer: 'Up to 50% off on clearance items', validTill: '20th December 2024', imageSrc:  '/image/promo.png'},
//   ];

//   const settings = {
//     dots: false, // Hide the dots
//     arrows: false, // Hide the arrows
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,  // Show 3 cards per slide
//     slidesToScroll: 1, // Scroll one slide at a time
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         }
//       }
//     ]
//   };

//   return (
//     <div className="p-10">
//          <div className="flex justify-between items-center mb-8">
//         <h1 className="text-2xl font-bold font-roboto">Explore Promotions by Category</h1>
//         <button className="text-black px-4 py-2 rounded-full font-roboto">View All</button>
//       </div>
//       <Slider {...settings}>
//         {retailers.map((retailer, index) => (
//           <RetailerCard
//             key={index}
//             storeName={retailer.storeName}
//             offer={retailer.offer}
//             validTill={retailer.validTill}
//             imageSrc={retailer.imageSrc}
//           />
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default RetailerCarousel;

import React from "react";
import Slider from "react-slick";
import RetailerCard from "./RetailerCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RetailerCarousel = ({
  title,
  retailers,
  buttonLabel,
  onViewAllClick,
}) => {
  const settings = {
    dots: false, // Hide the dots
    arrows: false, // Hide the arrows
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards per slide
    slidesToScroll: 1, // Scroll one slide at a time
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-10 ">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold font-butler ">{title}</h1>
        <button
          className="text-black px-4 py-2 rounded-full font-roboto"
          onClick={onViewAllClick}
        >
          {buttonLabel}
        </button>
      </div>
      <Slider {...settings}>
        {retailers.map((retailer, index) => (
          <RetailerCard
            key={index}
            storeName={retailer.storeName}
            offer={retailer.offer}
            // validTill={retailer.validTill}
            storeAddress={retailer.storeAddress}
            direction={retailer.direction}
            storeTiming={retailer.storeTiming}
            imageSrc={retailer.imageSrc}
          />
        ))}
      </Slider>
    </div>
  );
};

export default RetailerCarousel;
