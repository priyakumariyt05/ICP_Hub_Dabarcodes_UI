import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    name: "Organic Almonds",
    discount: "29% off",
    expiration: "Expiring in 5 days",
    imageUrl: "/image/image 42.png",
    skuLink: "#",
  },
  {
    name: "Organic Almonds",
    
    discount: "29% off",
    expiration: "Expiring in 5 days",
    imageUrl: "/image/image 42.png",
    skuLink: "#",
  },
  {
    name: "Organic Almonds",
    
    discount: "29% off",
    expiration: "Expiring in 5 days",
    imageUrl: "/image/image 42.png",
    skuLink: "#",
  },
  {
    name: "Organic Almonds",
    
    discount: "29% off",
    expiration: "Expiring in 5 days",
    imageUrl: "/image/image 42.png",
    skuLink: "#",
  },
  {
    name: "Organic Almonds",
    
    discount: "29% off",
    expiration: "Expiring in 5 days",
    imageUrl: "/image/image 42.png",
    skuLink: "#",
  },
];

function ProductList() {
  return (
    <>
 <div className="flex justify-center items-center mt-14 mb-10">
  {/* <h1 className="text-4xl font-medium ">You might also like</h1> */}
  <h1 className="text-3xl font-extrabold text-custom-dark leading-[46.8px] text-center font-butler">
  You might also like
</h1>

</div>
 <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-20">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
    </>
  );
}

export default ProductList;
