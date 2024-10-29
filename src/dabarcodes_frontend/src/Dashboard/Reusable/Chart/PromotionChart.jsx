// import React from "react";
// import {Pie} from "react-chartjs-2";
// import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
// import ChartDataLabels from "chartjs-plugin-datalabels";

// // Register the necessary components for Chart.js
// ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

// const PromotionChart = ({data}) => {
//   const chartData = {
//     labels: ["Ongoing Promotions", "Upcoming Promotions", "Expired Promotions"],
//     datasets: [
//       {
//         label: "Promotions",
//         data: data,
//         backgroundColor: ["#1E90FF", "#00CED1", "#4682B4"], // Colors as seen in your image
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     plugins: {
//       legend: {
//         display: true,
//         position: "bottom",
//       },
//       datalabels: {
//         color: "#fff", // White labels
//         font: {
//           size: 16,
//           weight: "bold",
//         },
//         formatter: (value) => value, // Display raw values inside the segments
//       },
//     },
//     responsive: true,
//     maintainAspectRatio: false,
//   };

//   return (
//     <div className="p-4 bg-white shadow-md rounded-lg">
//       <h2 className="text-lg font-semibold mb-4">Product on Promotion</h2>
//       <div className="relative h-64 w-full  ">
//         <Pie data={chartData} options={options} />
//       </div>
//     </div>
//   );
// };

// export default PromotionChart;
import React from "react";
import {Pie} from "react-chartjs-2";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register necessary components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PromotionChart = ({data}) => {
  const chartData = {
    labels: ["Ongoing Promotions", "Upcoming Promotions", "Expired Promotions"],
    datasets: [
      {
        label: "Promotions",
        data: data,
        backgroundColor: ["#0A6C91", "#B5E8FB", "#0EA2D9"], // Colors for each section
        borderWidth: 0.1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom", // Legend below the chart
        labels: {
          boxWidth: 20,
          fontSize: 14,
        },
      },
      datalabels: {
        color: "#fff", // Label color inside the pie chart
        font: {
          size: 16,
          weight: "bold",
        },
        formatter: (value) => value, // Show raw values inside chart segments
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      {/* Align text to the left */}
      <h2 className="text-lg font-semibold mb-4 text-left">
        Product on Promotion
      </h2>

      {/* Align the pie chart to the left */}
      <div className="relative h-64 w-full flex justify-start">
        {/* Add justify-start to align the chart to the left */}
        <div className="w-2/3">
          {" "}
          {/* You can control the size of the chart with width */}
          <Pie data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default PromotionChart;
