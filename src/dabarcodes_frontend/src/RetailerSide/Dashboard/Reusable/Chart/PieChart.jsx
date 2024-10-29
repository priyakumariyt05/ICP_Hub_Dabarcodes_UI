// import React from "react";
// import {Pie} from "react-chartjs-2";
// import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";

// // Register necessary components for Chart.js
// ChartJS.register(ArcElement, Tooltip, Legend);

// const PieChart = ({data}) => {
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
//         label: "Top 5 Products",
//         data: data,
//         backgroundColor: [
//           "#10B4F1",
//           "#00CED1",
//           "#4682B4",
//           "#5F9EA0",
//           "#87CEFA",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     plugins: {
//       legend: {
//         display: true,
//         position: "left",
//         labels: {
//           boxWidth: 10,
//         },
//       },
//     },
//     responsive: true,
//     maintainAspectRatio: false,
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
//         <Pie data={chartData} options={options} />
//       </div>
//     </div>
//   );
// };

// export default PieChart;
import React from "react";
import {Pie} from "react-chartjs-2";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({data, options}) => {
  return (
    <div className="w-full max-w-xs">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
