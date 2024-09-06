import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="rounded-lg p-5 relative bg-[#E7F8FE] shadow flex flex-col items-center max-w-xs mx-auto">
      <span className="absolute top-2 right-[-0.5rem] bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">
        {product.expiration}
      </span>
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-40 h-32 object-cover rounded mb-2"
      />
      {/* <h2 className="text-lg font-bold mt-2 text-left w-full">{product.name}</h2> */}
      <h2
  className="text-[16px] font-extrabold leading-[19.2px] text-left text-black w-full"
  style={{ fontFamily: 'Butler' }}
>
  {product.name}
</h2>

      {/* <p className="mt-1 text-sm text-gray-600 text-left w-full">
        Here is the paragraph text you wanted to add below the name.
      </p> */}
      <p
  className="mt-1 text-[12px] font-normal leading-[14.4px] text-left text-[#646464] w-full"
  style={{ fontFamily: 'Roboto' }}
>
  Here is the paragraph text you wanted to add below the name.
</p>

      <p className="mt-2 text-sm text-white bg-red-600 text-left px-2 py-1 rounded self-start mb-4">
        {product.discount}
      </p>
      <button className="mt-3 bg-blue-500 text-white py-2 px-4 rounded w-full">
        Link SKU
      </button>
    </div>
   
  );
}

export default ProductCard;

