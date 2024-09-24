
import React from "react";
import Slider from "react-slick";
import CategoryCard from "../ReusableComponents/CategoryCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Category = () => {

  const categories = [
    { name: "Snacks", image: "/image/category.png" },
    { name: "Snacks", image: "/image/category.png" },
    { name: "Snacks", image: "/image/category.png" },
    { name: "Snacks", image: "/image/category.png" },
    { name: "Snacks", image: "/image/category.png" },
    { name: "Snacks", image: "/image/category.png" },
    { name: "Snacks", image: "/image/category.png" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <>
      <div className="p-8">
        <div className="flex justify-between items-center mt-10 mb-10">
          <h1 className="lg:text-2xl md:text-xl font-bold font-butler ml-4">
            Explore Promotions by Category
          </h1>
          <button className="text-blue-500 border-b-2 border-blue-500 pb-1 hover:bg-blue-100">
            View all
          </button>
        </div>

        <Slider {...settings}>
          {categories.map((category, index) => (
            <div key={index}>
              <CategoryCard category={category} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Category;

