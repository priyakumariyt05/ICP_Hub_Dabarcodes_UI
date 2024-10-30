import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PromotionChart = ({ data }) => {
  const chartData = {
    labels: ["Ongoing Promotions", "Upcoming Promotions", "Expired Promotions"],
    datasets: [
      {
        label: "Promotions",
        data: data,
        backgroundColor: ["#0A6C91", "#B5E8FB", "#0EA2D9"],
        borderWidth: 0.1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          boxWidth: 20,
          fontSize: 14,
        },
      },
      datalabels: {
        color: "#fff",
        font: {
          size: 16,
          weight: "bold",
        },
        formatter: (value) => value,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4 text-left">
        Product on Promotion
      </h2>

      <div className="relative h-64 w-full flex justify-start">
        <div className="w-2/3">
          {" "}
          <Pie data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default PromotionChart;
