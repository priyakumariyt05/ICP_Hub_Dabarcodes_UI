
import React, { useState, useRef } from 'react';
import Sidebar from './Sidebar';
import { FaFilter, FaSearch } from 'react-icons/fa';

const itemsPerPage = 5; // Number of items to display per page

const PromotionManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Reference for the table container
  const tableContainerRef = useRef(null);

  const promotions = [
    // Example promotions data
    { status: 'New', name: 'Promotional Event', startDate: '2024, August 17', endDate: '2024, October 17', validityStatus: 'Active', decisionStatus: 'Approved' },
    { status: 'New', name: '$40 off', startDate: '2024, August 12', endDate: '2024, October 17', validityStatus: 'Active', decisionStatus: 'Approved' },
    { status: 'New', name: '$40 off', startDate: '2024, August 13', endDate: '2024, October 17', validityStatus: 'Active', decisionStatus: 'Approved' },
    { status: 'New', name: '12% off', startDate: '2024, August 17', endDate: '2024, October 17', validityStatus: 'Active', decisionStatus: 'Approved' },
    { status: 'Ended', name: '30%', startDate: '2024, August 17', endDate: '2024, October 17', validityStatus: 'Ended', decisionStatus: 'Rejected' },
    { status: 'Pending', name: '32%', startDate: '2024, September 17', endDate: '2024, October 17', validityStatus: 'Active', decisionStatus: 'Pending' },
  ];

  const filteredPromotions = promotions.filter(promo => promo.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const totalPages = Math.ceil(filteredPromotions.length / itemsPerPage);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginatedPromotions = filteredPromotions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Swipe Functionality
  let startX = 0;
  let scrollLeft = 0;

  const onTouchStart = (e) => {
    startX = e.touches[0].pageX;
    scrollLeft = tableContainerRef.current.scrollLeft;
  };

  const onTouchMove = (e) => {
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 2; // 2 is for fast scrolling
    tableContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="flex h-screen overflow-hidden font-roboto">
      <Sidebar />

      <div className="flex-grow p-8 bg-gray-50 overflow-x-auto md:ml-64">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
        </header>

        <div className="flex items-center justify-end space-x-4 mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
              className="border border-gray-300 rounded-lg py-2 px-4 pl-10 focus:outline-none"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <button className="flex items-center space-x-2 border border-gray-300 bg-white rounded-lg py-2 px-4">
            <FaFilter className="text-gray-500" />
            <span className="text-gray-600">Filters</span>
          </button>
        </div>

        <div
          className="table-container bg-white shadow rounded-lg overflow-x-auto"
          ref={tableContainerRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
        >
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-left bg-[#F9F9FD]">
                <th className="p-4">Status ↓</th>
                <th className="p-4">Promotion Name ↓</th>
                <th className="p-4">Start Date ↓</th>
                <th className="p-4">End Date ↓</th>
                <th className="p-4">Validity Status ↓</th>
                <th className="p-4">Decision Status ↓</th>
              </tr>
            </thead>
            <tbody>
              {paginatedPromotions.map((promo, index) => (
                <tr key={index} className="border-t border-b">
                  <td className="p-4">
                    <span
                      className={`inline-block text-gray-800 rounded-lg px-3 py-1 ${promo.status === 'New' ? 'bg-[#EAFDEE]' : promo.status === 'Ended' ? 'bg-[#FFEBE6]' : 'bg-[#FFFAE4]'}`}
                    >
                      {promo.status}
                    </span>
                  </td>
                  <td className="p-4">{promo.name}</td>
                  <td className="p-4">{promo.startDate}</td>
                  <td className="p-4">{promo.endDate}</td>
                  <td className="p-4">
                    <span
                      className={`inline-block text-gray-800 rounded-lg px-3 py-1 ${promo.validityStatus === 'Active' ? 'bg-[#EAFDEE]' : 'bg-[#FFEBE6]'}`}
                    >
                      {promo.validityStatus}
                    </span>
                  </td>
                  <td className="p-4">
                    {promo.decisionStatus === 'Pending' ? (
                      <div className="flex space-x-4">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Approve</button>
                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg">Reject</button>
                      </div>
                    ) : (
                      promo.decisionStatus
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4 p-4">
          <button
            onClick={handlePrevious}
            className="text-gray-600 border border-gray-300 px-4 py-2 rounded-[10px]"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-gray-600">Page {currentPage} of {totalPages}</span>
          <button
            onClick={handleNext}
            className="text-gray-600 border border-gray-300 px-4 py-2 rounded-[10px]"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionManagement;
