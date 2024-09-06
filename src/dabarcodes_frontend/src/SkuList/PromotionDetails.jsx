import Navbar2 from '../components/Navbar2';
import Navbar3 from '../components/Navbar3';
import React from 'react';
import ProductCard from './ProductCard';
import Footer from '../components/Footer';


const PromotionDetails = () => {
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
    imageUrl: "/image/image 42 (1).png",
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
  }
];
  return (
    <>
      <Navbar3 />
      <div className="p-8 mb-10">
        <div className="flex flex-col md:flex-row items-start justify-between p-6 max-w-6xl mx-auto">
          <div className="text-center md:text-left mb-4 md:mb-0 md:w-1/4">
            {/* <h2 className="text-2xl font-bold text-gray-800 mb-8 font-serif">
              Save $20 off on Delivery Order of $75 or More
            </h2> */}
            <h2 
  className="text-2xl font-extrabold text-[#171717] mb-8 leading-[37.2px] font-serif"
  style={{ fontFamily: 'Butler, serif' }}
>
  Save $20 off on Delivery Order of $75 or More
</h2>


            {/* <p className="text-gray-600 gap-4 mb-5 font-roboto" >
              Valid till: 2024, 18 Aug
            </p> */}<p className="text-gray-600 gap-4 mb-5 font-roboto">
  <span className="text-[#989898] mr-2">Valid till:</span> 
  <span className="text-[#171717]">2024, 18 Aug</span>
</p>

            <p className="text-gray-600">
              Promotional Offer: <span className="font-semibold text-blue-600">$20 off on $75</span>
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-2/3 flex flex-col">
          <h3
  className="text-[20px] font-extrabold text-[#000000] mt-10 mb-8 ml-7 leading-[24px] text-left"
  style={{ fontFamily: 'Butler, serif' }}
>
  Promotion Details
</h3>

            <ul className="list-disc list-outside pl-5 ml-12 mb-10 font-roboto text-[#171717]">
              <li>Save $5 on Your Next Purchase: Enjoy $5 off when you spend $50 or more.</li>
              <li>20% off Select Items: Get 20% off on a wide range of select items. Valid for online purchases.</li>
              <li>Buy One Get One Free: Purchase one item and get another one of the same free. Applicable to selected products only.</li>
              <li>Free Shipping on Orders Over $75: Enjoy free standard shipping on all orders over $75. Available for a limited time.</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button className="bg-blue-600 mr-14 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Click here to claim
          </button>
        </div>
    
        <div className="p-10 mb-10">
        <div className="flex justify-between items-center mt-10 mb-10">
          <h1 className="text-3xl font-semibold font-serif">Products qualifying for Promotion</h1>
        
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
      </div>
<Footer/>


    </>
  );
}

export default PromotionDetails;
