import React from "react";

const StatsCard = ({ title, value, percentageChange }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-8 w-full max-w-xs">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-sm text-gray-400 font-medium">{title}</h2>
    </div>
      <div className="text-2xl text-gray-900 font-bold mb-2">{value}</div>
  
    </div>
  );
};

export default StatsCard;