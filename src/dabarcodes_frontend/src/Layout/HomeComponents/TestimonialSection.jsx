
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const useSlider = (reviewsLength, visibleSlides) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex >= reviewsLength - visibleSlides ? prevIndex : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentSlide((prevIndex) => (prevIndex <= 0 ? prevIndex : prevIndex - 1));
  };

  return { currentSlide, next, prev };
};

const TestimonialSection = () => {
  const [visibleSlides, setVisibleSlides] = useState(2);

  const reviews = [
    {
      date: "May 8, 2020",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.",
      author: "John Doe",
      image: "/image/Rectangle 1.png",
    },
    {
      date: "May 8, 2022",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.",
      author: "John Doe",
      image: "/image/Rectangle 1.png",
    },
    {
      date: "May 8, 2024",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.",
      author: "John Doe",
      image: "/image/Rectangle 1.png",
    },
    {
      date: "May 8, 2023",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.",
      author: "John Doe",
      image: "/image/Rectangle 1.png",
    },

  ];

  const { currentSlide, next, prev } = useSlider(reviews.length, visibleSlides);

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(window.innerWidth < 800 ? 1 : 2);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="testimonials" className="relative max-w-6xl mx-auto mb-24">
      <h2 className="text-center text-3xl font-bold mb-8">Testimonials</h2>
      <div className="flex space-x-8 overflow-hidden">
        {reviews
          .slice(currentSlide, currentSlide + visibleSlides)
          .map((review, index) => (
            <TestimonialCard key={index} review={review} />
          ))}
      </div>
      <SliderControls
        currentSlide={currentSlide}
        next={next}
        prev={prev}
        reviews={reviews}
        visibleSlides={visibleSlides}
      />
    </div>
  );
};

const TestimonialCard = ({ review }) => (
  <div id="testimonials" className="bg-white rounded-lg shadow-lg p-8 flex space-x-6 w-full transform transition-transform duration-700 ease-in-out sm:flex-row flex-col items-center">
    <img
      src={review.image}
      alt={review.author}
      className="sm:w-48 sm:h-56 object-cover sm:rounded-lg w-24 h-24 rounded-full"
    />
    <div className="mt-2">
      <p className="text-sm text-gray-500 font-roboto">{review.date}</p>
      <p className="text-gray-600 text-sm sm:text-md mt-2 font-roboto">{review.text}</p>
      <p className="text-gray-900 font-bold sm:mt-4 font-roboto">{review.author}</p>
    </div>
  </div>
);

const SliderControls = ({ currentSlide, next, prev, reviews, visibleSlides }) => (
  <div className="flex justify-center items-center sm:mt-16 relative">
    <button
      onClick={prev}
      disabled={currentSlide === 0}
      className={`${
        currentSlide === 0 ? "text-gray-400 cursor-not-allowed" : ""
      }`}
    >
      <FaChevronLeft size={24} />
    </button>
    <div className="flex justify-center mx-4">
      {reviews.map((_, index) => (
        <div
          key={index}
          className={`h-2 w-2 rounded-full mx-2 ${
            index === currentSlide ? "bg-blue-600" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
    <button
      onClick={next}
      disabled={currentSlide >= reviews.length - visibleSlides}
      className={`${
        currentSlide >= reviews.length - visibleSlides
          ? "text-gray-400 cursor-not-allowed"
          : ""
      }`}
    >
      <FaChevronRight size={24} />
    </button>
  </div>
);

export default TestimonialSection;