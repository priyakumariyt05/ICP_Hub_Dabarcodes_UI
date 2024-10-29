
// import React from "react";
// import {Bar} from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// const HorizontalBarChart = ({data, options}) => {
//   return (
//     <div className="w-full h-[300px] lg:h-[400px] flex flex-col items-start justify-start border border-gray-200 rounded-lg p-4">
//       <div className="flex justify-between w-full mb-2">
//         <h2 className="text-lg font-semibold">Top 5 Suppliers</h2>
//         <div className="flex gap-4">
//           <select className="border border-gray-300 rounded px-2 py-1 text-sm">
//             <option>Transaction Count %</option>
//             <option>Supplier Count</option>
//           </select>
//           <select className="border border-gray-300 rounded px-2 py-1 text-sm">
//             <option>This Week</option>
//             <option>Last Week</option>
//           </select>
//         </div>
//       </div>
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default HorizontalBarChart;
// import React from "react";
// import {Bar} from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import ChartDataLabels from "chartjs-plugin-datalabels";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Tooltip,
//   Legend,
//   ChartDataLabels
// );

// const HorizontalBarChart = ({data, options}) => {
//   return (
//     <div className="w-full h-[300px] lg:h-[400px] flex flex-col items-start justify-start border border-gray-200 rounded-lg p-4">
//       <div className="flex justify-between w-full mb-2">
//         <h2 className="text-lg font-semibold">Top 5 Suppliers</h2>
//         <div className="flex gap-4">
//           <select className="border border-gray-300 rounded px-2 py-1 text-sm">
//             <option>Transaction Count %</option>
//             <option>Supplier Count</option>
//           </select>
//           <select className="border border-gray-300 rounded px-2 py-1 text-sm">
//             <option>This Week</option>
//             <option>Last Week</option>
//           </select>
//         </div>
//       </div>
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default HorizontalBarChart;
import React from "react";
import {Bar} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartDataLabels
);

const HorizontalBarChart = ({data, options, title}) => {
  return (
    <div className="w-full h-[300px] lg:h-[400px] flex flex-col items-start justify-start border border-gray-200 rounded-lg p-4 pb-8">
      <div className="flex justify-between w-full mb-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex gap-4">
          <select className="border border-gray-300 rounded px-2 py-1 text-sm">
            <option>Transaction Count %</option>
            <option>Supplier Count</option>
          </select>
          <select className="border border-gray-300 rounded px-2 py-1 text-sm">
            <option>This Week</option>
            <option>Last Week</option>
          </select>
        </div>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default HorizontalBarChart;
