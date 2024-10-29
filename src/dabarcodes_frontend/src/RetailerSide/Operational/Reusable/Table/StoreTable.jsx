import React from "react";

const StoreTable = ({stores}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4 text-left">Top 5 Stores</h2>
      <div className="flex justify-between items-center mb-4">
        <select className="border px-2 py-1 rounded-md">
          <option>Top 5 Stores</option>
          <option>Store 1</option>
          <option>Store 2</option>
        </select>
        <select className="border px-2 py-1 rounded-md">
          <option>This Week</option>
          <option>Last Week</option>
        </select>
      </div>
      <table className="w-full table-auto border-collapse text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2">Store Name</th>
            <th className="py-2">Average Sale</th>
          </tr>
        </thead>
        <tbody>
          {stores.map((store, index) => (
            <tr key={index} className="border-b">
              <td className="py-2">{store.name}</td>
              <td className="py-2">${store.sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StoreTable;
