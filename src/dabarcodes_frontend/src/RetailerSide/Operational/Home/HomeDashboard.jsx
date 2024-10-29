
import React from "react";

import Chart from "../Reusable/Chart/Chart";
import PromotionTable from "../Reusable/Table/PromotionTable";
import PromotionChart from "../Reusable/Chart/PromotionChart";
import DonutChart from "../Reusable/Chart/DonutChart";

import StoreTable from "../Reusable/Table/StoreTable";
import Donut from "../Reusable/Chart/Donut";
import HorizontalBarChart from "../Reusable/Chart/HorizontalBarChart";
import TransactionalChart from "../Reusable/Chart/TransactionalChart";
const HomeDashboard = () => {
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
  const PromotionChartData = [120, 120, 60];
  const productsData = [120, 110, 150, 130, 100];
  const storesData = [
    {name: "Flossi Ewoldt", sales: "12,000"},
    {name: "Valerie Nakamoto", sales: "11,000"},
    {name: "Emeline Mostad", sales: "7,000"},
    {name: "Willamina Dresser", sales: "4,000"},
    {name: "Carilyn Peloso", sales: "1,000"},
  ];
  const promotionsData = [
    {
      productName: "Drinking Almond Milk",
      promotionDate: "2024, Oct. 19",
    },
    {
      productName: "Semolina Pasta",
      promotionDate: "2024, Oct. 19",
    },
    {
      productName: "Nestle Coffee",
      promotionDate: "2024, Oct. 19",
    },
    {
      productName: "Apple Cider Vinegar",
      promotionDate: "2024, Oct. 19",
    },
    {
      productName: "Powdered Milk",
      promotionDate: "2024, Oct. 19",
    },
  ];
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
        backgroundColor: [
          "#29b6f6",
          "#0277bd",
          "#0288d1",
          "#26c6da",
          "#00acc1",
        ],
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
  // Data for Horizontal Bar Chart

  const horizontalBarData = {
    labels: ["50%", "50%", "50%", "50%", "50%"], 
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
  return (
    <>
      <div className="p-6  min-h-screen">
        <h2 className="text-lg font-bold mb-4">
          Hi, John! You're currently viewing: Reliance Mart
        </h2>

        {/* Button Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <button className="bg-[#E7F8FE]  py-4 px-4 rounded">
            Add New Products
          </button>
          <button className="bg-[#E7F8FE]  py-4 px-4 rounded">
            Supplier Requests
          </button>

          <button className="bg-[#E7F8FE] py-4 px-4 rounded">
            Upgrade Subscription
          </button>
        </div>
        {/* static part */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white shadow rounded p-4">
            <h3 className="text-sm text-gray-500">Total Sales</h3>
            <p className="text-xl font-bold">$11,300</p>
            <p className="text-sm text-green-500">+3.25% This Week</p>
          </div>
          <div className="bg-white shadow rounded p-4">
            <h3 className="text-sm text-gray-500">Total Store</h3>
            <p className="text-xl font-bold">11,300</p>
          </div>
          <div className="bg-white shadow rounded p-4">
            <h3 className="text-sm text-gray-500">Total Suppliers</h3>
            <p className="text-xl font-bold">11,300</p>
          </div>{" "}
        </div>

        <div className=" grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Stores Performance Overview */}
          <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold">Stores Performance Overview</h2>
              <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                <option>This Week</option>
                <option>Last Week</option>
              </select>
            </div>
            <h3 className="text-3xl font-semibold">$5,000</h3>
            <p className="text-sm text-gray-500">per week</p>
            <div className="h-64 w-full mt-6">
              {" "}
              {/* Full width chart */}
              <Chart data={chartData} options={chartOptions} />
            </div>
          </div>

          {/* Suppliers Requests */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Suppliers Requests</h2>
              <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                <option>This Week</option>
                <option>Last Week</option>
              </select>
            </div>
            <p>
              Current Utility Tokens: <strong>03</strong>
            </p>
            <div className="mt-4">
              <p className="mb-2">
                Pending Requests: <strong>11,300</strong>
              </p>
              <p>
                Approved Requests: <strong>11,300</strong>
              </p>
            </div>
          </div>
        </div>
        {/* Promotion chart */}
        <div className=" my-10 ">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4">
            <Donut
              data={doughnutData}
              options={doughnutOptions}
              title="Top 5 Product"
            />
            <PromotionTable promotions={promotionsData} />
          </div>
        </div>
        {/* store data  */}

        <div className="mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bar Chart for Top 5 Products */}
            <PromotionChart data={PromotionChartData} />

            {/* Stores Table for Top 5 Stores */}
            <StoreTable stores={storesData} />
          </div>
        </div>
        {/* Horizontal chart */}
        <div className="flex flex-col lg:flex-row gap-4  py-4">
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
        {/* Transcational chart */}
        <div className="p-4">
          {/* <TransactionalChart data={TransactionalData} /> */}
          <TransactionalChart
            data={TransactionalData}
            title="Transactional Count"
          />
        </div>
      </div>
    </>
  );
};

export default HomeDashboard;