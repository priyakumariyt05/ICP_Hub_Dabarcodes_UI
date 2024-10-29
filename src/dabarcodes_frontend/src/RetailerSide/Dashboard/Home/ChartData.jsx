// import React from "react";

// import Chart from "../Reusable/Chart/Chart";

// const ChartData = () => {
//   const chartData = {
//     labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
//     datasets: [
//       {
//         label: "Revenue",
//         data: [10000, 40000, 20000, 50000, 60000, 40000, 20000],
//         borderColor: "#3b82f6", // Blue line
//         tension: 0, // Curved line
//         pointRadius: 5, // Dot size
//         pointBackgroundColor: "#3b82f6", // Dot color
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: false, // Prevents fixed aspect ratio to allow full width
//     plugins: {
//       legend: {display: false}, // Hide legend
//       tooltip: {
//         enabled: false, // Disable tooltips completely
//       },
//     },
//     scales: {
//       x: {
//         grid: {display: false}, // Hide vertical grid lines
//       },
//       y: {
//         beginAtZero: true,
//         ticks: {stepSize: 10000}, // Control y-axis steps
//         grid: {color: "#e5e7eb"}, // Light gray grid lines
//       },
//     },
//   };

//   return (
//     <>

//     <div className="p-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//       {/* Stores Performance Overview */}
//       <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-bold">Stores Performance Overview</h2>
//           <span className="text-sm">This Week</span>
//         </div>
//         <h3 className="text-3xl font-semibold">$5,000</h3>
//         <p className="text-sm text-gray-500">per week</p>
//         <div className="h-64 w-full mt-6">
//           {" "}
//           {/* Full width chart */}
//           <Chart data={chartData} options={chartOptions} />
//         </div>
//       </div>

//       {/* Suppliers Requests */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-bold">Suppliers Requests</h2>
//           <span className="text-sm">This Week</span>
//         </div>
//         <p>
//           Current Utility Tokens: <strong>03</strong>
//         </p>
//         <div className="mt-4">
//           <p className="mb-2">
//             Pending Requests: <strong>11,300</strong>
//           </p>
//           <p>
//             Approved Requests: <strong>11,300</strong>
//           </p>
//         </div>
//       </div>

//       {/* Total Products and Promotions */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <p>Total Products</p>
//         <h2 className="text-3xl font-semibold">11,300</h2>
//         <p>Active Promotions</p>
//         <h2 className="text-3xl font-semibold">113</h2>
//       </div>

//       {/* Average Products Redemption Rate */}
//       <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-bold">
//             Average Products Redemption Rate
//           </h2>
//           <span className="text-sm">This Week</span>
//         </div>
//         <h3 className="text-3xl font-semibold">75,000</h3>
//         <p className="text-sm text-gray-500">per week</p>
//         <div className="h-64 w-full mt-6">
//           {" "}
//           {/* Full width chart */}
//           <Chart data={chartData} options={chartOptions} />
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default ChartData;
