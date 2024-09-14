
import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Optional: use any icons or custom buttons

const Scroll = ({ children }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 text-gray-600 rounded-full"
      >
        <FaChevronLeft />
      </button>
      <div
        ref={scrollRef}
        className="overflow-x-auto whitespace-nowrap scroll-smooth px-4"
      >
        {children}
      </div>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 text-gray-600 rounded-full"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Scroll;

