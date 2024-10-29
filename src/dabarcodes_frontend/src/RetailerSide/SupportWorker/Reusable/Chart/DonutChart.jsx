import React from "react";
import {Doughnut} from "react-chartjs-2";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";

// Register necessary components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({data}) => {
  const chartData = {
    labels: [
      "Whole Grain Oats",
      "Dairy Milk",
      "Nestle Coffee",
      "Salmon",
      "Fruits",
    ],
    datasets: [
      {
        label: "Top 5 Products",
        data: data, // dynamic data passed as prop
        backgroundColor: [
          "#1E90FF",
          "#00CED1",
          "#4682B4",
          "#5F9EA0",
          "#87CEFA",
        ],
        hoverBackgroundColor: [
          "#1C86EE",
          "#20B2AA",
          "#5B9BD5",
          "#40E0D0",
          "#B0E0E6",
        ],
        borderWidth: 2,
        cutout: "70%", // This makes the chart a donut
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          boxWidth: 10,
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4 text-left">Top 5 Products</h2>
      <div className="flex justify-between items-center mb-4">
        <select className="border px-2 py-1 rounded-md">
          <option>Supplier Name</option>
          <option>Supplier 1</option>
          <option>Supplier 2</option>
        </select>
        <select className="border px-2 py-1 rounded-md">
          <option>This Week</option>
          <option>Last Week</option>
        </select>
      </div>
      {/* <div className="relative h-64 w-full  ">
        <Doughnut data={chartData} options={options} />
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-64 w-full">
        <div className="flex justify-center items-center">
          <Doughnut data={chartData} options={options} />
        </div>
        <div className="flex justify-center items-center">
          {/* Your second content goes here */}
        </div>
      </div>
    </div>
  );
};

export default DonutChart;

