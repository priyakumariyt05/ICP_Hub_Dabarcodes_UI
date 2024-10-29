

import React from "react";
import {MdOutlineModeEdit, MdDeleteOutline} from "react-icons/md";

const ProductActions = ({
  selectedProduct,
  onEdit,
  onDelete,
  onSort,
  onSearch,
  sortKey,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
      <div className="flex flex-wrap gap-2 justify-start">
        <button onClick={onEdit} disabled={!selectedProduct}>
          <MdOutlineModeEdit className="text-2xl" />
        </button>
        <button
          onClick={() => onDelete(selectedProduct?.id)}
          disabled={!selectedProduct}
        >
          <MdDeleteOutline className="text-2xl" />
        </button>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => onSort(sortKey)}
          className="bg-gray-200 p-2 w-full sm:w-auto rounded-md hover:bg-gray-300"
        >
          Sort
        </button>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded p-2 w-full sm:w-auto ml-2"
        />
      </div>
    </div>
  );
};

export default ProductActions;
