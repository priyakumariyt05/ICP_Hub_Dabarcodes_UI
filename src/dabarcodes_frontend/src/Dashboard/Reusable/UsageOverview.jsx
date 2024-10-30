import React from "react";
import Chart from "./Chart/Chart";

const UsageOverview = ({
  title,
  value,
  valueLabel,
  chartData,
  chartOptions,
  selectOptions,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <select className="border border-gray-300 rounded px-2 py-1 text-sm">
          {selectOptions.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
      </div>
      <h3 className="text-3xl font-semibold">{value}</h3>
      <p className="text-sm text-gray-500">{valueLabel}</p>
      <Chart data={chartData} options={chartOptions} />
    </div>
  );
};

export default UsageOverview;
