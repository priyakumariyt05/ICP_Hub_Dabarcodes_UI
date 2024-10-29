// import React from "react";
// import {Bar} from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// // Register necessary components for Chart.js
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const BarChart = ({data}) => {
//   const chartData = {
//     labels: [
//       "Whole Grain Oats",
//       "Dairy Milk",
//       "Nestle Coffee",
//       "Salmon",
//       "Fruits",
//     ],
//     datasets: [
//       {
//         label: "Units Sold",
//         data: data, // dynamic data passed as prop
//         backgroundColor: [
//           "#1E90FF",
//           "#00CED1",
//           "#4682B4",
//           "#5F9EA0",
//           "#87CEFA",
//         ],
//         borderWidth: 1,
//         barPercentage: 0.5, // controls the width of bars
//       },
//     ],
//   };

//   const options = {
//     plugins: {
//       legend: {
//         display: true,
//         position: "bottom",
//         labels: {
//           boxWidth: 10,
//         },
//       },
//     },
//     responsive: true,
//     maintainAspectRatio: false,
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div className="p-4 bg-white shadow-md rounded-lg">
//       <h2 className="text-lg font-semibold mb-4 text-left">Top 5 Products</h2>
//       <div className="flex justify-between items-center mb-4">
//         <select className="border px-2 py-1 rounded-md">
//           <option>Supplier Name</option>
//           <option>Supplier 1</option>
//           <option>Supplier 2</option>
//         </select>
//         <select className="border px-2 py-1 rounded-md">
//           <option>This Week</option>
//           <option>Last Week</option>
//         </select>
//       </div>
//       <div className="relative h-64 w-full">
//         <Bar data={chartData} options={options} />
//       </div>
//     </div>
//   );
// };

// export default BarChart;
import React from "react";
import {Bar} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({data, options}) => {
  return (
    <div className="w-full max-w-lg">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
