
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CustomDoughnutChart = ({ data, options, centerText }) => {
    return (
        <div className="relative w-full max-w-xs md:max-w-md h-64 ">
            <Doughnut data={data} options={options} />
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold">{centerText}</span>
            </div>
        </div>
    );
};

export default CustomDoughnutChart;
