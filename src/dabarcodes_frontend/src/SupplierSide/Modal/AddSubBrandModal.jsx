
import React from 'react';

const AddSubBrandModal = ({ onClose }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Add Sub Brand Details</h2>
      <form>
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter Sub Brand Name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Brand Category</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            >
              <option>Select</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Brand Description</label>
          <textarea
            placeholder="Add Brand Details"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            rows="3"
          ></textarea>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="w-1/2 flex m-auto items-center justify-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddSubBrandModal;

