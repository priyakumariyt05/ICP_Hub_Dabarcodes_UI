import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
const BotokPage = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const [data, setData] = useState([
    {
      id: 52,
      name: "Organic Blueberries",
      type: "Prize/Reward",
      audience: "Loyalty Members",
      startDate: "10.09.2024",
      endDate: "20.09.2024",
      redemption: "Redeem at POS by scanning the QR code.",
    },
    {
      id: 52,
      name: "Organic Blueberries",
      type: "Prize/Reward",
      audience: "Loyalty Members",
      startDate: "10.09.2024",
      endDate: "20.09.2024",
      redemption: "Redeem at POS by scanning the QR code.",
    },
    {
      id: 52,
      name: "Organic Blueberries",
      type: "Prize/Reward",
      audience: "Loyalty Members",
      startDate: "10.09.2024",
      endDate: "20.09.2024",
      redemption: "Redeem at POS by scanning the QR code.",
    },

  ]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Filtered data based on search
  const filteredData = data.filter((row) =>
    row.name.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Brand Activation Campaign</h1>
        <Link to="/supplier/botok/product-sku">
          <button className="bg-[#0D90C1] text-white px-4 py-2 rounded">
            Start New
          </button>
        </Link>
      </div>

      <div className="flex items-center justify-end my-4">
        {/* Filter */}
        <div className="relative flex items-center mr-2">
          <select
            className="w-full rounded px-3 py-1 pr-10 appearance-none"
          // value={filter}
          // onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">Filter</option>
            <option value="Bakery">Bakery</option>
            <option value="Beverages">Beverages</option>
          </select>
          <HiAdjustmentsHorizontal
            size={24}
            className="absolute right-3 text-gray-600"
          />
        </div>

        {/* Search */}
        <div className="flex items-center border border-gray-300 rounded">
          <input
            type="text"
            placeholder="Search "
            onChange={handleSearch}
            className="px-2 py-1 focus:outline-none"
          />
          <IoSearchOutline size={24} className="text-gray-600 mx-2" />
        </div>
      </div>

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className=" p-2">Campaign ID</th>
              <th className=" p-2">Campaign Name</th>
              <th className="p-2">Type Of Release</th>
              <th className=" p-2">Target Audience</th>
              <th className="p-2">Start Date</th>
              <th className="p-2">End Date</th>
              <th className="p-2">Redemption Method</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-50 border-b">
                <td className=" p-2">{row.id}</td>
                <td className=" p-2">{row.name}</td>
                <td className=" p-2">{row.type}</td>
                <td className=" p-2">{row.audience}</td>
                <td className="p-2">{row.startDate}</td>
                <td className="p-2">{row.endDate}</td>
                <td className=" p-2">{row.redemption}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="border px-4 py-2 rounded"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="border px-4 py-2 rounded"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BotokPage;