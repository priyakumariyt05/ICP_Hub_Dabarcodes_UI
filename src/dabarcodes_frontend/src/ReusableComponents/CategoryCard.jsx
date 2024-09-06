

import React from 'react';

function CategoryCard({ category }) {
  return (
    <div className="flex flex-col items-center max-w-xs mx-auto">
      <div
        className="rounded-lg p-5 bg-white flex flex-col items-center"
        style={{ backgroundColor: category.backgroundColor, width: '200px' }} 
      >
        <img
          src={category.image}
          alt={category.name}
          className="w-18 h-18 rounded "
        />
      </div>
      <h2 className="font-roboto text-[16px] font-regular leading-[19.2px] text-center text-[#171717]">
  {category.name}
</h2>

    </div>
  );
}

export default CategoryCard;


