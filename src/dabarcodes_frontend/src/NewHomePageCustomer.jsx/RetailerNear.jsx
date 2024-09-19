// import React from 'react'
// import RetailerCard from './RetailerCard'
// import { useData } from '../ContextApi/DataContext'
// import SortFilterSection from './SortFilterSection'
// const RetailerNear = () => {
//     const {retailerList} =useData()
//     const sortOptions1 = [
//         { value: "price-asc", label: "Price: Low to High" },
//         { value: "price-desc", label: "Price: High to Low" },
//         { value: "rating", label: "Rating" }
//       ];
    
//       const filterOptions1 = [
//         { value: "category1", label: "Category 1" },
//         { value: "category2", label: "Category 2" },
//         { value: "category3", label: "Category 3" }
//       ];
//   return (
//     <>
   
//       <SortFilterSection
//         title="Top Products"
//         sortOptions={sortOptions1}
//         filterOptions={filterOptions1}
//       />
   

//       {/* Grid Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {retailerList.map((retailer, index) => (
//           <RetailerCard
//             key={index}
//             storeName={retailer.storeName}
//             offer={retailer.offer}
//             direction={retailer.direction}
//             // validTill={retailer.validTill}
//             storeTiming={retailer.storeTiming}
//             storeAddress={retailer.storeAddress}
//             imageSrc={retailer.imageSrc}
//           />
//         ))}
//       </div>
  

//     </>
//   )
// }

// export default RetailerNear
import React, { useState } from 'react';
import RetailerCard from './RetailerCard';
import { useData } from '../ContextApi/DataContext';
import SortFilterSection from './SortFilterSection';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';

const RetailerNear = () => {
  const { retailerList } = useData();
  const [currentPage, setCurrentPage] = useState(1);
  const retailersPerPage = 9;

  // Calculate total pages
  const totalPages = Math.ceil(retailerList.length / retailersPerPage);

  // Calculate the indices for current page's retailers
  const indexOfLastRetailer = currentPage * retailersPerPage;
  const indexOfFirstRetailer = indexOfLastRetailer - retailersPerPage;
  const currentRetailers = retailerList.slice(indexOfFirstRetailer, indexOfLastRetailer);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const sortOptions1 = [
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "rating", label: "Rating" }
  ];

  const filterOptions1 = [
    { value: "category1", label: "Category 1" },
    { value: "category2", label: "Category 2" },
    { value: "category3", label: "Category 3" }
  ];

  return (
    <>
    <Navbar2/>
      <SortFilterSection
        title="Retailer Near Me"
        sortOptions={sortOptions1}
        filterOptions={filterOptions1}
      />

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {currentRetailers.map((retailer, index) => (
          <RetailerCard
            key={index}
            storeName={retailer.storeName}
            offer={retailer.offer}
            direction={retailer.direction}
            storeTiming={retailer.storeTiming}
            storeAddress={retailer.storeAddress}
            imageSrc={retailer.imageSrc}
          />
        ))}
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center items-center mt-4 space-x-2 mb-10">
        {/* Previous Button */}
        <button
          className={`px-4 py-2 bg-gray-100 font-roboto rounded ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-transparent'}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          className={`px-4 py-2 bg-gray-100 font-roboto rounded ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <Footer/>
    </>
  );
};

export default RetailerNear;



