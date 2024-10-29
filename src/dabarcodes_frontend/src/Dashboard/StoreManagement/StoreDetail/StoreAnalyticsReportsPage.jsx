// import React from 'react'
// import StatsCard from '../../Reusable/StatsCard';
// const StoreAnalyticsReportsPage = () => {
//   const data = [
//     {
//       title: "Total Sales",
//       value: "$75,000",
//       timeFrame: "This Week",
//       percentageChange: 1,
//     },
//     {
//       title: "Unique Customer Count",
//       value: "5,000",
//       timeFrame: "This Week",
//       percentageChange: 1,
//     },
//     {
//       title: "Total Customer",
//       value: "75,000",
//       timeFrame: "This Week",
//       percentageChange: 1,
//     },
//     {
//       title: "Total Products",
//       value: "75,000",
//       timeFrame: "This Week",
//       percentageChange: 1,
//     },
//     {
//       title: "Total Active Promotions",
//       value: "5,000",
//       timeFrame: "This Week",
//       percentageChange: 1,
//     },
//   ];

//   return (
//     <>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//         {data.map((item, index) => (
//           <StatsCard
//             key={index}
//             title={item.title}
//             value={item.value}
//             timeFrame={item.timeFrame}
//             percentageChange={item.percentageChange}
//           />
//         ))}
//       </div>
//     </>
//   );
// }

// export default StoreAnalyticsReportsPage
import React from "react";
import StatsCard from "../../Reusable/StatsCard";

import Chart from "../../Reusable/Chart/Chart";
import HorizontalBarChart from "../../Reusable/Chart/HorizontalBarChart";
import Donut from "../../Reusable/Chart/Donut";
// import {Chart} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import PromotionChart from "../../Reusable/Chart/PromotionChart";
import TransactionalChart from "../../Reusable/Chart/TransactionalChart";
import BackButton from "../../Reusable/BackButton";


const StoreAnalyticsReportsPage = () => {
const data = [
  {title: "Total Sales", value: "$75,000", percentageChange: 1},
  {title: "Unique Customer Count", value: "5,000", percentageChange: 1},
  {title: "Total Customer", value: "75,000", percentageChange: 1},
  {title: "Total Products", value: "75,000", percentageChange: 1},
  {title: "Total Active Promotions", value: "5,000", percentageChange: 1},
];
const data2 =[{title: "Total Sales", value: "$75,000", percentageChange: 1},
  {title: "Unique Customer Count", value: "5,000", percentageChange: 1},
]
// Donut
 const doughnutData = {
   labels: [
     "Whole Grain Oats",
     "Dairy Milk",
     "Nestle Coffee",
     "Salmon",
     "Fruits",
   ],
   datasets: [
     {
       data: [120, 120, 120, 120, 120],
       backgroundColor: ["#29b6f6", "#0277bd", "#0288d1", "#26c6da", "#00acc1"],
       hoverOffset: 4,
       cutout: "70%",
     },
   ],
 };

 const doughnutOptions = {
   responsive: true,
   maintainAspectRatio: false,
   plugins: {
     legend: {
       position: "left",
       labels: {
         boxWidth: 15,
         padding: 20,
         
       },
     },
     title: {
       display: true,
      //  text: "Top 5 Products",
       font: {
         size: 16,
       },
     },
   },
 };
const TransactionalData = [
  {month: "Jan", count: 20},
  {month: "Feb", count: 30},
  {month: "Mar", count: 50},
  {month: "Apr", count: 40},
  {month: "May", count: 45},
  {month: "Jun", count: 80},
  {month: "Jul", count: 30},
  {month: "Aug", count: 20},
  {month: "Sept", count: 20},
  {month: "Oct", count: 20},
  {month: "Nov", count: 20},
  {month: "Dec", count: 20},
];
 // Data for Horizontal Bar Chart

  const horizontalBarData = {
    labels: ["50%", "50%", "50%", "50%", "50%"], // Display "50%" as y-axis labels
    datasets: [
      {
        label: "Transaction Count %",
        data: [100, 80, 60, 40, 20],
        backgroundColor: "#0277bd",
        borderColor: "#005f91",
        borderWidth: 1,
        barThickness: 35,
      },
    ],
  };

  const horizontalBarOptions = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          beginAtZero: true,
          max: 120, 
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 14,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      datalabels: {
        color: "#ffffff", 
        anchor: "start", 
        align: "end",
        formatter: function (value, context) {
  
          const supplierNames = [
            "Supplier A",
            "Supplier B",
            "Supplier C",
            "Supplier D",
            "Supplier E",
          ];
          return supplierNames[context.dataIndex]; // Show the supplier name
        },
        offset: 10, 
        clip: false, 
      },
    },
  };
// 3rd row
  const PromotionChartData = [120, 120, 60];
    const chartData = {
      labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Revenue",
          data: [10000, 40000, 20000, 50000, 60000, 40000, 20000],
          borderColor: "#3b82f6", // Blue line
          tension: 0, // Curved line
          pointRadius: 5, // Dot size
          pointBackgroundColor: "#3b82f6", // Dot color
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false, // Prevents fixed aspect ratio to allow full width
      plugins: {
        legend: {display: false}, // Hide legend
        tooltip: {
          enabled: true, // Disable tooltips completely
        },
      },
      scales: {
        x: {
          grid: {display: false}, // Hide vertical grid lines
        },
        y: {
          beginAtZero: true,
          ticks: {stepSize: 10000}, // Control y-axis steps
          grid: {color: "#e5e7eb"}, // Light gray grid lines
        },
      },
    };
  return (
    <>
      <div className="flex flex-start mt-8">
        <BackButton />
        <h1 className="text-2xl font-semibold mb-4">
          Reliance Mart Store 1 Analytics and Reports
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {data.map((item, index) => (
          <StatsCard
            key={index}
            title={item.title}
            value={item.value}
            percentageChange={item.percentageChange}
          />
        ))}
      </div>
      {/* average  */}
      <div className=" grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Average Products Redemption Rate */}
        <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">
              Average Products Redemption Rate
            </h2>
            <select className="border border-gray-300 rounded px-2 py-1 text-sm">
              <option>This Week</option>
              <option>Last Week</option>
            </select>
          </div>
          <h3 className="text-3xl font-semibold">75,000</h3>
          <p className="text-sm text-gray-500">per week</p>
          <div className="h-64 w-full mt-6">
            {" "}
            <Chart data={chartData} options={chartOptions} />
          </div>
        </div>
        {/* second row */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 ">
          <div className="grid grid-rows-2 gap-4 p-4">
            {data2.map((item, index) => (
              <StatsCard
                key={index}
                title={item.title}
                value={item.value}
                percentageChange={item.percentageChange}
              />
            ))}
          </div>
        </div>
      </div>
      {/* average end */}
      {/* 2nd */}
      <div className="flex flex-col lg:flex-row gap-4 py-8">
        <div className="flex-1">
          <Donut data={doughnutData} options={doughnutOptions} title="Top 5 Product" />
        </div>

        <div className="flex-1">
 
          <HorizontalBarChart
            data={horizontalBarData}
            options={horizontalBarOptions}
            title="Top 5 Suppliers"
            dropdownOptions={{
              metrics: ["Transaction Count %", "Supplier Count"],
              timeframes: ["This Week", "Last Week"],
            }}
          />
        </div>
      </div>
      {/* 3rd */}
      <div className="flex flex-col lg:flex-row gap-4 p-4">
        <div className="flex-1">
          <PromotionChart data={PromotionChartData} />
        </div>
        <div className="flex-1">
          <HorizontalBarChart
            data={horizontalBarData}
            options={horizontalBarOptions}
            title="Customer Location"
            dropdownOptions={{
              metrics: ["Transaction Count %", "Supplier Count"],
              timeframes: ["This Week", "Last Week"],
            }}
          />
        </div>
      </div>
      {/* 4th */}
      <div className="p-4">
        {/* <TransactionalChart data={TransactionalData} /> */}
        <TransactionalChart
          data={TransactionalData}
          title="Transactional Count"
        />
      </div>
    </>
  );
};

export default StoreAnalyticsReportsPage;