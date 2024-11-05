import React, { useState } from "react";
import BackButton from "../Reusable/BackButton";
const SupplierList = () => {
  // State management
  const [suppliers, setSuppliers] = useState([
    {
      id: "S001",
      name: "Reliance Fresh",
      location: "Mumbai, India",
      store: "Supermarket",
      brand: "Supermarket",
      umbrellaBrand: "P&G",
    },
    {
      id: "S002",
      name: "Reliance Mart",
      location: "Delhi, India",
      store: "Supermarket",
      brand: "Supermarket",
      umbrellaBrand: "P&G",
    },
    {
      id: "S003",
      name: "Reliance Trends",
      location: "Bangalore, India",
      store: "Hypermarket",
      brand: "Supermarket",
      umbrellaBrand: "Nestle",
    },
    {
      id: "S004",
      name: "Reliance Trends",
      location: "Pune, India",
      store: "Convenience Store",
      brand: "Supermarket",
      umbrellaBrand: "Nestle",
    },
    {
      id: "S005",
      name: "Reliance Digital",
      location: "Pune, India",
      store: "Supermarket",
      brand: "Supermarket",
      umbrellaBrand: "P&G",
    },
    {
      id: "S006",
      name: "Reliance Digital",
      location: "Pune, India",
      store: "Supermarket",
      brand: "Supermarket",
      umbrellaBrand: "Nestle",
    },
    {
      id: "S006",
      name: "Reliance Digital",
      location: "Pune, India",
      store: "Supermarket",
      brand: "Supermarket",
      umbrellaBrand: "Nestle",
    },
    {
      id: "S006",
      name: "Reliance Digital",
      location: "Pune, India",
      store: "Supermarket",
      brand: "Supermarket",
      umbrellaBrand: "Nestle",
    },
    {
      id: "S006",
      name: "Reliance Digital",
      location: "Pune, India",
      store: "Supermarket",
      brand: "Supermarket",
      umbrellaBrand: "Nestle",
    },
    {
      id: "S006",
      name: "Reliance Digital",
      location: "Pune, India",
      store: "Supermarket",
      brand: "Supermarket",
      umbrellaBrand: "Nestle",
    },

    {
      id: "S006",
      name: "Reliance Digital",
      location: "Pune, India",
      store: "Supermarket",
      brand: "Supermarket",
      umbrellaBrand: "Nestle",
    },
    {
      id: "S006",
      name: "Reliance Digital",
      location: "Pune, India",
      store: "Supermarket",
      brand: "Supermarket",
      umbrellaBrand: "Nestle",
    },    { id: "S006", name: "Reliance Digital", location: "Pune, India", store: "Supermarket", brand: "Supermarket", umbrellaBrand: "Nestle" },

    // Repeat more suppliers as needed
  ]);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Pagination logic
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // Paginated suppliers
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedSuppliers = suppliers.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div className="flex flex-start">
          <BackButton />
          <h1 className="text-2xl font-semibold mb-4">All Suppliers</h1>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-between items-center my-4">
        <div className="flex flex-wrap gap-4">
          <button className="btn">Products</button>
          <button className="btn">Promotions</button>
          <button className="btn">Category</button>
        </div>
      </div>
      <hr className="mb-6" />
      {/* Sorting and Search */}
      <div className="flex justify-end items-center mb-4">
        <div className="flex space-x-2">
          <button className="px-4 py-2 border rounded">Sort</button>
          <input
            type="text"
            placeholder="Search"
            className="border px-3 py-2 rounded w-64"
          />
        </div>
      </div>

      {/* Suppliers Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead className="border-b">
            <tr>
              <th className="px-4 py-2 text-left">Supplier ID</th>
              <th className="px-4 py-2 text-left">Supplier Name</th>
              <th className="px-4 py-2 text-left">Location</th>
              <th className="px-4 py-2 text-left">Store Name</th>
              <th className="px-4 py-2 text-left">Brand Name</th>
              <th className="px-4 py-2 text-left">Umbrella Brand Name</th>
            </tr>
          </thead>
          <tbody className="border-l-4 border-blue-400">
            {paginatedSuppliers.map((supplier) => (
              <tr key={supplier.id} className="border-b ">
                <td className="px-4 py-4">{supplier.id}</td>
                <td className="px-4 py-4">{supplier.name}</td>
                <td className="px-4 py-4">{supplier.location}</td>
                <td className="px-4 py-4">{supplier.store}</td>
                <td className="px-4 py-4">{supplier.brand}</td>
                <td className="px-4 py-4">{supplier.umbrellaBrand}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <button
          className="px-4 py-2 border"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of 10</span>
        <button
          className="px-4 py-2 border"
          onClick={handleNextPage}
          disabled={paginatedSuppliers.length < itemsPerPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SupplierList;
