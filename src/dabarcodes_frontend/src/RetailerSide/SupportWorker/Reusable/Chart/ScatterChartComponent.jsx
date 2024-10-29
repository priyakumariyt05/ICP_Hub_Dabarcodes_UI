import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ScatterChartComponent = ({
  title,
  data,
  dataKey,
  pointColor,
  valueText,
}) => {
  return (
    <div className="bg-white shadow rounded p-4">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-xl font-bold">{valueText}</p>
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Scatter data={data} fill={pointColor || "#8884d8"} />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScatterChartComponent;
