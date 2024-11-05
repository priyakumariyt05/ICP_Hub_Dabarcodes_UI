import React from "react";

import CardSection from "./CardSection";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const BestCombo = ({ data }) => {
  const [sliderRef] = useKeenSlider({
    slides: { perView: 1, spacing: 15 },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 1, spacing: 15 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 2, spacing: 20 },
      },
    },
  });

  return (
    <div className="my-4 md:my-6 lg:my-8 border p-4 md:p-5 lg:p-6 rounded-md md:rounded-lg shadow-md md:shadow-lg m-8">
      <div className="flex  justify-between items-center my-4">
        <p className="font-semibold lg:text-[20px] text-[16px]">
          Best Combo Offers
        </p>
        <a
          href="#"
          className="text-[#0D90C1] text-sm md:text-base cursor-pointer hover:underline underline-offset-4"
        >
          View All
        </a>
      </div>
      <div className="relative keen-slider" ref={sliderRef}>
        {data.map((product) => (
          <div className="keen-slider__slide" key={product.id}>
            <CardSection product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestCombo;
