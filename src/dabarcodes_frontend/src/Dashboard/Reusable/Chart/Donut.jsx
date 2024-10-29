// import React from "react";
// import {Doughnut} from "react-chartjs-2";
// import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const Donut = ({data, options}) => {
//   return (
//     <div className="w-full h-[400px] lg:h-[500px] flex items-center justify-center">
//       <Doughnut data={data} options={options} />
//     </div>
//   );
// };

// export default Donut;
import React from "react";
import {Doughnut} from "react-chartjs-2";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Donut = ({data, options,title}) => {
  return (
    <div className="w-full h-[300px] lg:h-[400px] flex flex-col items-start justify-start border border-gray-200 rounded-lg p-4">
      <div className="flex justify-between w-full mb-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex gap-4">
          <select className="border border-gray-300 rounded px-2 py-1 text-sm">
            <option>Supplier Name</option>
            <option>Product Category</option>
          </select>
          <select className="border border-gray-300 rounded px-2 py-1 text-sm">
            <option>This Week</option>
            <option>Last Week</option>
          </select>
        </div>
      </div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default Donut;
