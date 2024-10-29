import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const LineChartComponent = ({title, data, dataKey, lineColor, valueText}) => {
  return (
    <div className="bg-white shadow rounded p-4">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-xl font-bold">{valueText}</p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={lineColor || "#8884d8"}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;


// import React from "react";
// import {Line} from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend,
//   LineElement,
//   PointElement, // Ensure PointElement is imported
// } from "chart.js";

// // Register the components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend,
//   LineElement,
//   PointElement
// );

// const LineChartComponent = () => {
//   const lineData = {
//     labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
//     datasets: [
//       {
//         label: "Content",
//         data: [10, 20, 15, 30, 25, 40],
//         borderColor: "#00c0ef",
//         backgroundColor: "rgba(0, 192, 239, 0.2)",
//         pointBorderColor: "#00c0ef", // Circle border color
//         pointBackgroundColor: "#ffffff", // Circle fill color
//         pointStyle: "circle", // Explicitly set pointStyle as 'circle'
//         pointRadius: 6, // Adjust the size of the points
//       },
//     ],
//   };

//   return (
//     <>
//       <div className="p-4 bg-white shadow-md rounded-md">
     
//         <Line data={lineData} />
//       </div>
//     </>
//   );
// };

// export default LineChartComponent;
