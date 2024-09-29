
import React, { useState } from "react";
import { VscSettings } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const SortFilterSection = ({ title, sortOptions, filterOptions }) => {
  const [sortOption, setSortOption] = useState("");
  const [filterOption, setFilterOption] = useState("");
  // const [searchQuery, setSearchQuery] = useState("");

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };

  // const handleSearchChange = (e) => {
  //   setSearchQuery(e.target.value);
  // };

  return (
    <div className="p-4 lg:p-10">
      {/* Responsive flex container */}
      <div className="flex flex-col lg:flex-row justify-between items-left space-y-4 lg:space-y-0">
        {/* Title Section */}
        <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold font-roboto">
          {title}
        </h1>

        {/* Sort, Filter, and Search on the right */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-4 lg:ml-auto space-y-2 sm:space-y-0">
          {/* Sort Section */}
          <div className="relative w-full sm:w-auto">
            <select
              className=" p-2 w-full sm:w-auto rounded-md font-roboto appearance-none"
              value={sortOption}
              onChange={handleSortChange}
            >
              <option value="">Sort</option>
              {sortOptions.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {/* Sort Icon inside select */}
            <HiAdjustmentsHorizontal  className="absolute right-2 top-3 text-gray-500 pointer-events-none" />
          </div>

          {/* Filter Section */}
          <div className="relative w-full sm:w-auto ">
            <select
              className=" p-2 pr-10 w-full sm:w-auto rounded-md font-roboto appearance-none"
              value={filterOption}
              onChange={handleFilterChange}
            >
              <option value="">Filter</option>
              {filterOptions.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {/* Filter Icon inside select */}
            <HiAdjustmentsHorizontal className="absolute right-2 top-3 text-gray-500 pointer-events-none" />
          </div>

          {/* Search Input Section */}
          {/* <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className=" p-2 w-full sm:w-auto rounded-md font-roboto border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            
            <FaSearch className="absolute right-2 top-3 text-gray-500 pointer-events-none" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SortFilterSection;
