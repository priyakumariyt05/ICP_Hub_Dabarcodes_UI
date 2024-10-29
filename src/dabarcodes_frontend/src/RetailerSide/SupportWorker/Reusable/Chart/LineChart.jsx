import React from "react";
import {Line} from "react-chartjs-2";

const lineData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      label: "Content",
      data: [10, 20, 15, 30, 25, 40],
      borderColor: "#00c0ef",
      backgroundColor: "rgba(0, 192, 239, 0.2)",
      pointBorderColor: "#00c0ef", // Point border color
      pointBackgroundColor: "#ffffff", // Point background color
      pointRadius: 6, // Size of the points
      pointHoverRadius: 8, // Hover effect on points
    },
  ],
};

// Line Chart component
const LineChart = () => (
  
    <Line data={lineData} />

);

export default LineChart;
