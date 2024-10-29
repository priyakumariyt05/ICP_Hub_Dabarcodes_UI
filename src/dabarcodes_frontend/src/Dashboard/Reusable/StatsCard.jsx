// import React from "react";

// const StatsCard = ({title, value, timeFrame, percentageChange}) => {
//   return (
//     <div className="border border-gray-200 rounded-lg p-4 w-full max-w-xs">
//       <div className="flex justify-between items-center mb-2">
//         <h2 className="text-lg font-semibold">{title}</h2>
//         <span className="text-gray-500">{timeFrame}</span>
//       </div>
//       <div className="text-2xl font-bold mb-2">{value}</div>
//       <div className="flex items-center text-green-500">
//         <span className="text-xs">{percentageChange > 0 ? "▲" : "▼"}</span>
//         <span className="ml-1 text-sm">{percentageChange}%</span>
//       </div>
//     </div>
//   );
// };

// export default StatsCard;
import React from "react";

const StatsCard = ({title, value, percentageChange}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 w-full max-w-xs">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <select className="text-gray-500 text-sm border-none outline-none bg-transparent cursor-pointer">
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option>
        </select>
      </div>
      <div className="text-2xl font-bold mb-2">{value}</div>
      <div className="flex justify-end items-center">
        <div
          className={`flex items-center text-xs font-medium rounded-full px-2 py-1 ${
            percentageChange > 0
              ? "bg-green-100 text-green-500"
              : "bg-red-100 text-red-500"
          }`}
        >
          <span className="mr-1">{percentageChange > 0 ? "↑" : "↓"}</span>
          <span>{Math.abs(percentageChange)}%</span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;


