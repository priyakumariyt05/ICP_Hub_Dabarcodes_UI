// import React from "react";
// import PromotionTable from "../Reusable/Table/PromotionTable";
// import PromotionChart from "../Reusable/Chart/PromotionChart";

// import StoreTable from "../Reusable/Table/StoreTable";

// // import ScatterChartComponent from "../Reusable/Chart/ScatterChartComponent";
// import DonutChart from "../Reusable/Chart/DonutChart";

// import ChartData from "./ChartData";

// const data = [
//   {name: "Mon", sales: 3000},
//   {name: "Tue", sales: 5000},
//   {name: "Wed", sales: 4000},
//   {name: "Thu", sales: 6000},
//   {name: "Fri", sales: 7000},
//   {name: "Sat", sales: 5000},
//   {name: "Sun", sales: 4000},
// ];
//   const promotionsData = [
//     {
//       productName: "Drinking Almond Milk",
//       promotionDate: "2024, Oct. 19",
//       promotionType: "30% off",
//     },
//     {
//       productName: "Semolina Pasta",
//       promotionDate: "2024, Oct. 19",
//       promotionType: "30% off",
//     },
//     {
//       productName: "Nestle Coffee",
//       promotionDate: "2024, Oct. 19",
//       promotionType: "30% off",
//     },
//     {
//       productName: "Apple Cider Vinegar",
//       promotionDate: "2024, Oct. 19",
//       promotionType: "30% off",
//     },
//     {
//       productName: "Powdered Milk",
//       promotionDate: "2024, Oct. 19",
//       promotionType: "30% off",
//     },
//   ];

//   // Dynamic data for the chart
//    const chartData = [120, 120, 60];
// const productsData = [120, 110, 150, 130, 100];
//      const storesData = [
//        {name: "Flossi Ewoldt", sales: "12,000"},
//        {name: "Valerie Nakamoto", sales: "11,000"},
//        {name: "Emeline Mostad", sales: "7,000"},
//        {name: "Willamina Dresser", sales: "4,000"},
//        {name: "Carilyn Peloso", sales: "1,000"},
//      ];
// const HomeDashboard = () => {

//   return (
//     <div className="p-6  min-h-screen">
//       <h2 className="text-lg font-bold mb-4">
//         Hi, John! You're currently viewing: Reliance Mart
//       </h2>

//       {/* Button Section */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
//         <button className="bg-[#E7F8FE]  py-2 px-4 rounded">
//           Add New Store

//         </button>
//         <button className="bg-[#E7F8FE]  py-2 px-4 rounded">
//           Add New Products
//         </button>
//         <button className="bg-[#E7F8FE]  py-2 px-4 rounded">
//           Supplier Requests
//         </button>
//         <button className="bg-[#E7F8FE] py-2 px-4 rounded">
//           Upgrade Subscription
//         </button>
//       </div>

//       {/* Statistics Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//         <div className="bg-white shadow rounded p-4">
//           <h3 className="text-sm text-gray-500">Total Sales</h3>
//           <p className="text-xl font-bold">$11,300</p>
//           <p className="text-sm text-green-500">+3.25% This Week</p>
//         </div>
//         <div className="bg-white shadow rounded p-4">
//           <h3 className="text-sm text-gray-500">Total Store</h3>
//           <p className="text-xl font-bold">11,300</p>
//         </div>
//         <div className="bg-white shadow rounded p-4">
//           <h3 className="text-sm text-gray-500">Total Suppliers</h3>
//           <p className="text-xl font-bold">11,300</p>
//         </div>
//       </div>

//       {/* Performance Overview Section */}

//       {/* Promotion chart */}
//       <div className=" my-10 ">
//         <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
//           <PromotionTable promotions={promotionsData} />
//           <PromotionChart data={chartData} />
//         </div>
//       </div>
//       {/* store data  */}

//       <div className="min-h-screen bg-gray-100 p-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Bar Chart for Top 5 Products */}
//           <DonutChart data={productsData} />

//           {/* Stores Table for Top 5 Stores */}
//           <StoreTable stores={storesData} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeDashboard;
{
  /* Performance Overview Section */
}

// <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
//   {/* First Column: Store Performance Overview */}
//   <div className="bg-white shadow rounded p-4">
//     <h3 className="text-sm text-gray-500">Store Performance Overview</h3>
//     <p className="text-xl font-bold">$5,000 per week</p>
//     <ResponsiveContainer width="100%" height={250}>
//       <LineChart data={data}>
//         {/* <CartesianGrid strokeDasharray="3 3" /> */}
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Line
//           type="monotone"
//           dataKey="sales"
//           stroke="#8884d8"
//           strokeWidth={2}
//         />
//       </LineChart>
//     </ResponsiveContainer>
//   </div>

//   {/* Second Column: Suppliers Requests */}
//   <div className="bg-white shadow rounded p-4">
//     <h3 className="text-sm text-gray-500">Suppliers Requests</h3>
//     <p>Current Utility Tickets: 03</p>
//     <p>Pending Requests: 11,300</p>
//     <p>Approved Requests: 11,300</p>
//   </div>
// </div>

// <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 mt-10">
//   {/* Second Column: Suppliers Requests */}

//   <div className="grid grid-cols-1 md:grid-cols-1 gap-4 ">
//     <div className="bg-white shadow rounded p-4">
//       <h3 className="text-sm text-gray-500">Total Sales</h3>
//       <p className="text-xl font-bold">$11,300</p>
//       <p className="text-sm text-green-500">+3.25% This Week</p>
//     </div>

//     <div className="bg-white shadow rounded p-4">
//       <h3 className="text-sm text-gray-500">Total Suppliers</h3>
//       <p className="text-xl font-bold">11,300</p>
//     </div>
//   </div>
//   <div className="bg-white shadow rounded p-4">
//     <h3 className="text-sm text-gray-500">Store Performance Overview</h3>
//     <p className="text-xl font-bold">$5,000 per week</p>
//     <ResponsiveContainer width="100%" height={250}>
//       <LineChart data={data}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Line
//           type="monotone"
//           dataKey="sales"
//           stroke="#8884d8"
//           strokeWidth={2}
//         />
//       </LineChart>
//     </ResponsiveContainer>
//     {/* <LineChartComponent/> */}
//   </div>
// </div>
import React from "react";

import Chart from "../Reusable/Chart/Chart";
import PromotionTable from "../Reusable/Table/PromotionTable";
import PromotionChart from "../Reusable/Chart/PromotionChart";

import Donut from "../Reusable/Chart/Donut";

import StoreTable from "../Reusable/Table/StoreTable";
import StorePerfomanceOverview from "../Reusable/StorePerfomanceOverview";
import SupplierRequest from "../Reusable/SupplierRequest";

import AverageRedemptionRate from "../Reusable/AverageRedemptionRate";
const HomeDashboard = () => {
  const PromotionChartData = [120, 120, 60];
  const productsData = [120, 110, 150, 130, 100];
  const storesData = [
    { name: "Flossi Ewoldt", sales: "12,000" },
    { name: "Valerie Nakamoto", sales: "11,000" },
    { name: "Emeline Mostad", sales: "7,000" },
    { name: "Willamina Dresser", sales: "4,000" },
    { name: "Carilyn Peloso", sales: "1,000" },
  ];
  const promotionsData = [
    {
      productName: "Drinking Almond Milk",
      promotionDate: "2024, Oct. 19",
      promotionType: "30% off",
    },
    {
      productName: "Semolina Pasta",
      promotionDate: "2024, Oct. 19",
      promotionType: "30% off",
    },
    {
      productName: "Nestle Coffee",
      promotionDate: "2024, Oct. 19",
      promotionType: "30% off",
    },
    {
      productName: "Apple Cider Vinegar",
      promotionDate: "2024, Oct. 19",
      promotionType: "30% off",
    },
    {
      productName: "Powdered Milk",
      promotionDate: "2024, Oct. 19",
      promotionType: "30% off",
    },
  ];
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

  return (
    <>
      <div className="p-6  min-h-screen">
        <h2 className="text-lg font-bold mb-4">
          Hi, John! You're currently viewing: Reliance Mart
        </h2>

        {/* Button Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <button className="bg-[#E7F8FE]  py-2 px-4 rounded">
            Add New Store
          </button>
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
        {/* Static data */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {" "}
          <div className="bg-white shadow rounded p-4">
            <h3 className="text-sm text-gray-500">Total Sales</h3>
            <p className="text-xl font-bold">$11,300</p>
            <p className="text-sm text-green-500">+3.25% This Week</p>{" "}
          </div>{" "}
          <div className="bg-white shadow rounded p-4">
            <h3 className="text-sm text-gray-500">Total Store</h3>
            <p className="text-xl font-bold">11,300</p>{" "}
          </div>{" "}
          <div className="bg-white shadow rounded p-4">
            <h3 className="text-sm text-gray-500">Total Suppliers</h3>
            <p className="text-xl font-bold">11,300</p>{" "}
          </div>{" "}
        </div>
        <div className=" grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Stores Performance Overview */}

          <StorePerfomanceOverview />

          {/* Suppliers Requests */}

          <SupplierRequest />

          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 ">
            <div className="bg-white shadow rounded p-4">
              <h3 className="text-sm text-gray-500">Total Sales</h3>
              <p className="text-xl font-bold">$11,300</p>
              <p className="text-sm text-green-500">+3.25% This Week</p>
            </div>

            <div className="bg-white shadow rounded p-4">
              <h3 className="text-sm text-gray-500">Total Suppliers</h3>
              <p className="text-xl font-bold">11,300</p>
            </div>
          </div>

          {/* Average Products Redemption Rate */}

          <AverageRedemptionRate />
        </div>
        {/* Promotion chart */}
        <div className=" my-10 ">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
            <PromotionTable promotions={promotionsData} />
            <PromotionChart data={PromotionChartData} />
          </div>
        </div>
        {/* store data  */}

        <div className="min-h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex-1">
              <Donut
                data={doughnutData}
                options={doughnutOptions}
                title="Top 5 Product"
              />
            </div>

            {/* Stores Table for Top 5 Stores */}
            <StoreTable stores={storesData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDashboard;
