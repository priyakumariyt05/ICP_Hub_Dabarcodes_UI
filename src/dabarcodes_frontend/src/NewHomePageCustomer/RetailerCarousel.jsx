

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
