// LineChart.jsx
import React from "react";
import {Line} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({data, options}) => {
  return (
    <div className="h-64 w-full">
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
