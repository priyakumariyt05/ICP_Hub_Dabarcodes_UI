// import React from "react";
// import {Bar} from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend
// );

// const TransactionalChart = ({
//   data,
//   title = "Transactional Count",
//   timePeriod = "This Year",
// }) => {
//   const chartData = {
//     labels: data.map((item) => item.month),
//     datasets: [
//       {
//         label: "Transactions",
//         data: data.map((item) => item.count),
//         backgroundColor: "#0277bd", // Tailwind blue-700 color
//         borderRadius: 4,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         callbacks: {
//           label: (tooltipItem) => `Count: ${tooltipItem.raw}`,
//         },
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false,
//         },
//       },
//       y: {
//         beginAtZero: true,
//         ticks: {
//           stepSize: 20,
//         },
//       },
//     },
//   };

//   return (
//     <div className="bg-white p-4 rounded-md shadow-md">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-lg font-semibold">{title}</h2>
//         <span className="text-sm text-gray-500">{timePeriod}</span>
//       </div>
//       <div className="h-64">
//         <Bar data={chartData} options={options} />
//       </div>
//     </div>
//   );
// };

// export default TransactionalChart;
// import React, {useState} from "react";
// import {Bar} from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend
// );

// const TransactionalChart = ({data, title = "Transactional Count"}) => {
//   const [timePeriod, setTimePeriod] = useState("This Year");

//   // Function to handle time period change
//   const handleTimePeriodChange = (e) => {
//     setTimePeriod(e.target.value);
//     // You can add logic here to fetch or filter data based on the selected time period
//   };

//   const chartData = {
//     labels: data.map((item) => item.month),
//     datasets: [
//       {
//         label: "Transactions",
//         data: data.map((item) => item.count),
//         backgroundColor: "#0277bd", // Tailwind blue-700 color
//         borderRadius: 4,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         callbacks: {
//           label: (tooltipItem) => `Count: ${tooltipItem.raw}`,
//         },
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false,
//         },
//       },
//       y: {
//         beginAtZero: true,
//         ticks: {
//           stepSize: 20,
//         },
//       },
//     },
//   };

//   return (
//     <div className="bg-white p-4 rounded-md shadow-md">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-lg font-semibold">{title}</h2>
//         <select
//           value={timePeriod}
//           onChange={handleTimePeriodChange}
//           className="text-sm text-gray-500 border border-gray-300 rounded-md p-1"
//         >
//           <option value="This Year">This Year</option>
//           <option value="Last Year">Last Year</option>
//           <option value="Last 6 Months">Last 6 Months</option>
//           <option value="Last 3 Months">Last 3 Months</option>
//           <option value="This Month">This Month</option>
//         </select>
//       </div>
//       <div className="h-64">
//         <Bar data={chartData} options={options} />
//       </div>
//     </div>
//   );
// };

// export default TransactionalChart;
import React, {useState} from "react";
import {Bar} from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels"; // Import plugin

// Register required components and plugins
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels // Register datalabels plugin
);

const TransactionalChart = ({data, title = "Transactional Count"}) => {
  const [timePeriod, setTimePeriod] = useState("This Year");

  // Handle time period change
  const handleTimePeriodChange = (e) => {
    setTimePeriod(e.target.value);
    // Add data filtering logic if needed
  };

  // Chart data
  const chartData = {
    labels: data.map((item) => item.month),
    datasets: [
      {
        label: "Transactions",
        data: data.map((item) => item.count),
        backgroundColor: "#0277bd", // Tailwind blue-700 color
        borderRadius: 4,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `Count: ${tooltipItem.raw}`, // Tooltip only
        },
      },
      datalabels: {
        display: false, // Disable data labels inside bars
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide X-axis grid lines
        },
        ticks: {
          display: true, // Display X-axis labels
        },
      },
      y: {
        beginAtZero: true, // Y-axis starts at 0
        ticks: {
          stepSize: 20, // Y-axis intervals
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      {/* Header with title and time period selector */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <select
          value={timePeriod}
          onChange={handleTimePeriodChange}
          className="text-sm text-gray-500 border border-gray-300 rounded-md p-1"
        >
          <option value="This Year">This Year</option>
          <option value="Last Year">Last Year</option>
          <option value="Last 6 Months">Last 6 Months</option>
          <option value="Last 3 Months">Last 3 Months</option>
          <option value="This Month">This Month</option>
        </select>
      </div>

      {/* Chart */}
      <div className="h-64">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default TransactionalChart;
