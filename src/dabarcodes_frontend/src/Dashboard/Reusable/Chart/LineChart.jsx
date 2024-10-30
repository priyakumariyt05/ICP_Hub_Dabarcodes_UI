import React from "react";
import { Line } from "react-chartjs-2";

const lineData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      label: "Content",
      data: [10, 20, 15, 30, 25, 40],
      borderColor: "#00c0ef",
      backgroundColor: "rgba(0, 192, 239, 0.2)",
      pointBorderColor: "#00c0ef",
      pointBackgroundColor: "#ffffff",
      pointRadius: 6,
      pointHoverRadius: 8,
    },
  ],
};

const LineChart = () => <Line data={lineData} />;

export default LineChart;
