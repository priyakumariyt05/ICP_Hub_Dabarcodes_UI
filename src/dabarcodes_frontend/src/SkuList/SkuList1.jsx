import React from 'react';
import CategoryCard from "../ReusableComponents/CategoryCard";
import Navbar2 from '../components/Navbar2';
import ProductGrid from './ProductGrid';
import Footer from '../components/Footer';

const SkuList1 = () => {
  const categories = [
    { name: 'Dairy Products', image: '/image/dairy.png', backgroundColor: '#F7F4EC' },
    { name: 'Frozen Food', image: '/image/dairy.png', backgroundColor: '#F1E7FE' },
    { name: 'Fresh Meat', image: '/image/dairy.png', backgroundColor: '#FED3D2' },
    { name: 'Shelf Stable Food', image: '/image/dairy.png', backgroundColor: '#F1E3D6' },
    { name: 'Fruits and Vegetables', image: '/image/dairy.png', backgroundColor: '#D5F7C5' },
   
  ];

  return (
    <>
      <Navbar2 />
      <div className="p-8">
        <div className="flex justify-between items-center mt-10 mb-10">
          <h1 className="text-2xl font-semibold">SKU</h1>
        </div>
        <div className="flex justify-between items-center mt-10 mb-10">
          <h1 className="text-2xl font-bold font-butler">Explore Promotions by Category</h1>
          <button className="text-blue-500 border-b-2 border-blue-500 pb-1 hover:bg-blue-100">
            View all
          </button>
        </div>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
      <ProductGrid/>
      <Footer/>
    </>
  );
}

export default SkuList1;

