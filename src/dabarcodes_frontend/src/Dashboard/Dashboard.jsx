// import React from 'react';
// import Sidebar from './Sidebar';
// import { FiMoreVertical } from 'react-icons/fi';

// const Dashboard = () => {
//   return (
//     <>
//       <div className="flex h-screen">
//         {/* <Sidebar /> */}
//         <div className="flex-grow p-6 bg-white overflow-y-auto md:ml-64">
//           {/* Top Dashboard Section 1 */}
//           {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             <div className="relative p-4 border rounded-lg">
//               <h2 className="text-lg font-semibold text-gray-400 pb-2">Total Revenue</h2>
//               <p className="text-2xl pb-4">$2,420</p>
//               <p className="text-green-500 absolute bottom-0 right-0 mb-2 mr-2 px-2 py-1 bg-green-100 rounded-full">
//                 ↑ 20%
//               </p>
//             </div>
//             <div className="relative p-4 border rounded-lg">
//               <h2 className="text-lg font-semibold text-gray-400 pb-2">SKUs on Promotion</h2>
//               <p className="text-2xl pb-4">75</p>
//               <p className="text-green-500 absolute bottom-0 right-0 mb-2 mr-2 px-2 py-1 bg-green-100 rounded-full">
//                 ↑ 10%
//               </p>
//             </div>
//             <div className="relative p-4 border rounded-lg">
//               <h2 className="text-lg font-semibold text-gray-400 pb-2">Total SKU</h2>
//               <p className="text-2xl pb-4">1,300</p>
//               <p className="text-green-500 absolute bottom-0 right-0 mb-2 mr-2 px-2 py-1 bg-green-100 rounded-full">
//                 ↑ 20%
//               </p>
//             </div>
//           </div> */}
      

// <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//   <div className="relative p-4 border rounded-lg">
//     <div className="absolute top-2 right-2">
//       <FiMoreVertical className="w-5 h-5 text-gray-400" />
//     </div>
//     <h2 className="text-lg font-semibold text-gray-400 pb-2">Total Revenue</h2>
//     <p className="text-2xl pb-4">$2,420</p>
//     <p className="text-green-500 absolute bottom-0 right-0 mb-2 mr-2 px-2 py-1 bg-green-100 rounded-full">
//       ↑ 20%
//     </p>
//   </div>
//   <div className="relative p-4 border rounded-lg">
//     <div className="absolute top-2 right-2">
//       <FiMoreVertical className="w-5 h-5 text-gray-400" />
//     </div>
//     <h2 className="text-lg font-semibold text-gray-400 pb-2">SKUs on Promotion</h2>
//     <p className="text-2xl pb-4">75</p>
//     <p className="text-green-500 absolute bottom-0 right-0 mb-2 mr-2 px-2 py-1 bg-green-100 rounded-full">
//       ↑ 10%
//     </p>
//   </div>
//   <div className="relative p-4 border rounded-lg">
//     <div className="absolute top-2 right-2">
//       <FiMoreVertical className="w-5 h-5 text-gray-400" />
//     </div>
//     <h2 className="text-lg font-semibold text-gray-400 pb-2">Total SKU</h2>
//     <p className="text-2xl pb-4">1,300</p>
//     <p className="text-green-500 absolute bottom-0 right-0 mb-2 mr-2 px-2 py-1 bg-green-100 rounded-full">
//       ↑ 20%
//     </p>
//   </div>
// </div>

//           {/* Top Dashboard Section 1 Ended */}

//           {/* SKU Suppliers and SKUs Section 2 */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
//             <div className="p-4 border rounded-lg">
//               <h2 className="font-medium">SKU from Suppliers</h2>
//               <table className="w-full mt-4 text-left">
//                 <thead>
//                   <tr className="border-b">
//                     <th className="py-2 font-medium">SKU Name</th>
//                     <th className=" font-medium">Brand Name</th>
//                     <th className="font-medium">SKU Category</th>
//                     <th className="font-medium">Associated Promotion</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr className="border-b">
//                     <td className="py-2">Crunchy Nut Bars</td>
//                     <td>NutriMax</td>
//                     <td>Snack Bars</td>
//                     <td>20% Off</td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-2">Organic Pasta</td>
//                     <td>PureHarvest</td>
//                     <td>Pasta</td>
//                     <td>10% Off</td>
//                   </tr>
//                   <tr>
//                     <td className="py-2">Healthy Fruit Snacks</td>
//                     <td>FruityBites</td>
//                     <td>Fruit Snacks</td>
//                     <td>$5 Off 2 or More Packs</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//             <div className="p-4 border rounded-lg">
//               <h2 className="text-lg font-semibold text-gray-400">My SKUs</h2>
//               <table className="w-full mt-4 text-left">
//                 <thead>
//                   <tr className="border-b">
//                     <th className="py-2 font-medium">SKU Name</th>
//                     <th className='font-medium'>Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr className="border-b">
//                     <td className="py-2">Crunchy Nut Bars</td>
//                     <td className="text-green-500 ">In Stock</td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="py-2">Organic Pasta</td>
//                     <td className="text-red-500">Out of Stock</td>
//                   </tr>
//                   <tr>
//                     <td className="py-2">Healthy Fruit Snacks</td>
//                     <td className="text-green-500">In Stock</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           {/* SKU Suppliers and SKUs Section 2 Ended */}

//           {/* Top Performance Section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
//             <div className="p-4 border rounded-lg">
//               <h2 className="text-lg font-bold">Top Performing Promotion</h2>
//               <ul className="mt-4">
//                 {/* 1 */}
//                 <li className="flex items-center py-2">
//                   <div className="flex-1 mr-4">
//                     <div className="relative bg-[#DBF4FD] h-4 rounded-full">
//                       <div
//                         className="bg-[#0D90C1] h-full rounded-full flex items-center justify-center"
//                         style={{ width: "30%" }}
//                       >
//                         <span className="text-white font-medium">100</span>
//                       </div>
//                     </div>
//                   </div>
//                   <span className="text-gray-800 ml-4">20% Off Snack Bars</span>
//                 </li>
//                 {/* 2 */}
//                 <li className="flex items-center py-2">
//                   <div className="flex-1 mr-4">
//                     <div className="relative bg-[#DBF4FD] h-4 rounded-full">
//                       <div
//                         className="bg-[#0D90C1] h-full rounded-full flex items-center justify-center"
//                         style={{ width: "65%" }}
//                       >
//                         <span className="text-white font-medium">1500</span>
//                       </div>
//                     </div>
//                   </div>
//                   <span className="text-gray-800 ml-4"> $5 Off 2 or More Packs</span>
//                 </li>
//                 {/* 3 */}
//                 <li className="flex items-center py-2">
//                   <div className="flex-1 mr-4">
//                     <div className="relative bg-[#DBF4FD] h-4 rounded-full">
//                       <div
//                         className="bg-[#0D90C1] h-full rounded-full flex items-center justify-center"
//                         style={{ width: "40%" }}
//                       >
//                         <span className="text-white font-medium">800</span>
//                       </div>
//                     </div>
//                   </div>
//                   <span className="text-gray-800 ml-4">10% Off Organic Pasta</span>
//                 </li>
//                 {/* 4 */}
//                 <li className="flex items-center py-2">
//                   <div className="flex-1 mr-4">
//                     <div className="relative bg-[#DBF4FD] h-4 rounded-full">
//                       <div
//                         className="bg-[#0D90C1] h-full rounded-full flex items-center justify-center"
//                         style={{ width: "80%" }}
//                       >
//                         <span className="text-white font-medium">2300</span>
//                       </div>
//                     </div>
//                   </div>
//                   <span className="text-gray-800 ml-4">$10 Off on Fruits</span>
//                 </li>
//               </ul>
//             </div>

//             <div className="p-4 border rounded-lg">
//               <h2 className="text-lg font-semibold text-gray-400">Leaderboard</h2>
//               <ul className="mt-4">
//                 <li className="flex items-center justify-between py-2 border border-gray-300 shadow-md rounded-md mb-2">
//                   <span className="flex-grow text-left pl-2 text-[#0D90C1]">1</span>
//                   <span className="flex-grow text-left pl-2">Fatima Del Rio</span>
//                   <span className="flex-grow text-right pr-2">$11,300</span>
//                 </li>
//                 <li className="flex items-center justify-between py-2 border border-gray-300 shadow-md rounded-md mb-2">
//                   <span className="flex-grow text-left pl-2 text-[#0D90C1]">2</span>
//                   <span className="flex-grow text-left pl-2">David R. Teeter</span>
//                   <span className="flex-grow text-right pr-2">$10,200</span>
//                 </li>
//                 <li className="flex items-center justify-between py-2 border border-gray-300 shadow-md rounded-md mb-2">
//                   <span className="flex-grow text-left pl-2 text-[#0D90C1]">3</span>
//                   <span className="flex-grow text-left pl-2">Lori L. Puckett</span>
//                   <span className="flex-grow text-right pr-2">$9,100</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           {/* Top Performance Section Ended */}

//  <div className="inline-flex items-center space-x-2 my-2 mt-10">
//    <div className="py-4 px-8 border border-gray-300 rounded-md bg-white text-gray-700 cursor-pointer hover:bg-gray-100 flex items-center justify-center mr-10">   Upload SKUs CSV   </div>
//    <div className="py-4 px-8 border border-gray-300 rounded-md bg-white text-gray-700 cursor-pointer hover:bg-gray-100 flex items-center justify-center">  New SKU
//   </div>
//  </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { FiMoreVertical } from 'react-icons/fi';

const Dashboard = () => {
  // Sample state data
  const [dashboardData, setDashboardData] = useState({
    revenue: 2420,
    skusOnPromotion: 75,
    totalSku: 1300,
    skuSuppliers: [
      { name: 'Crunchy Nut Bars', brand: 'NutriMax', category: 'Snack Bars', promotion: '20% Off' },
      { name: 'Organic Pasta', brand: 'PureHarvest', category: 'Pasta', promotion: '10% Off' },
      { name: 'Healthy Fruit Snacks', brand: 'FruityBites', category: 'Fruit Snacks', promotion: '$5 Off 2 or More Packs' }
    ],
    mySkus: [
      { name: 'Crunchy Nut Bars', status: 'In Stock' },
      { name: 'Organic Pasta', status: 'Out of Stock' },
      { name: 'Healthy Fruit Snacks', status: 'In Stock' }
    ],
    topPerformingPromotions: [
      { title: '20% Off Snack Bars', value: 100, percentage: '30%' },
      { title: '$5 Off 2 or More Packs', value: 1500, percentage: '65%' },
      { title: '10% Off Organic Pasta', value: 800, percentage: '40%' },
      { title: '$10 Off on Fruits', value: 2300, percentage: '80%' }
    ],
    leaderboard: [
      { rank: 1, name: 'Fatima Del Rio', amount: 11300 },
      { rank: 2, name: 'David R. Teeter', amount: 10200 },
      { rank: 3, name: 'Lori L. Puckett', amount: 9100 }
    ]
  });

  return (
    <>
      <div className="flex h-screen font-roboto">
        {/* <Sidebar /> */}
        <div className="flex-grow p-6 bg-white overflow-y-auto md:ml-64">
          {/* Top Dashboard Section 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries({
              'Total Revenue': dashboardData.revenue,
              'SKUs on Promotion': dashboardData.skusOnPromotion,
              'Total SKU': dashboardData.totalSku
            }).map(([title, value]) => (
              <div key={title} className="relative p-4 border rounded-lg">
                <div className="absolute top-2 right-2">
                  <FiMoreVertical className="w-5 h-5 text-gray-400" />
                </div>
                <h2 className="text-lg font-semibold text-gray-400 pb-2">{title}</h2>
                <p className="text-2xl pb-4">${value}</p>
                <p className="text-green-500 absolute bottom-0 right-0 mb-2 mr-2 px-2 py-1 bg-green-100 rounded-full">
                  ↑ 20%
                </p>
              </div>
            ))}
          </div>

          {/* SKU Suppliers and SKUs Section 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 border rounded-lg">
              <h2 className="font-medium">SKU from Suppliers</h2>
              <table className="w-full mt-4 text-left">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 font-medium">SKU Name</th>
                    <th className="font-medium">Brand Name</th>
                    <th className="font-medium">SKU Category</th>
                    <th className="font-medium">Associated Promotion</th>
                  </tr>
                </thead>
                <tbody>
                  {dashboardData.skuSuppliers.map((sku, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2">{sku.name}</td>
                      <td>{sku.brand}</td>
                      <td>{sku.category}</td>
                      <td>{sku.promotion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border rounded-lg">
              <h2 className="text-lg font-semibold text-gray-400">My SKUs</h2>
              <table className="w-full mt-4 text-left">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 font-medium">SKU Name</th>
                    <th className="font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {dashboardData.mySkus.map((sku, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2">{sku.name}</td>
                      <td className={sku.status === 'In Stock' ? 'text-green-500' : 'text-red-500'}>
                        {sku.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Top Performance Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 border rounded-lg">
              <h2 className="text-lg font-bold">Top Performing Promotion</h2>
              <ul className="mt-4">
                {dashboardData.topPerformingPromotions.map((promotion, index) => (
                  <li key={index} className="flex items-center py-2">
                    <div className="flex-1 mr-4">
                      <div className="relative bg-[#DBF4FD] h-4 rounded-full">
                        <div
                          className="bg-[#0D90C1] h-full rounded-full flex items-center justify-center"
                          style={{ width: promotion.percentage }}
                        >
                          <span className="text-white font-medium">{promotion.value}</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-gray-800 ml-4">{promotion.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 border rounded-lg">
              <h2 className="text-lg font-semibold text-gray-400">Leaderboard</h2>
              <ul className="mt-4">
                {dashboardData.leaderboard.map((entry, index) => (
                  <li key={index} className="flex items-center justify-between py-2 border border-gray-300 shadow-md rounded-md mb-2">
                    <span className="flex-grow text-left pl-2 text-[#0D90C1]">{entry.rank}</span>
                    <span className="flex-grow text-left pl-2">{entry.name}</span>
                    <span className="flex-grow text-right pr-2">${entry.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="inline-flex items-center space-x-2 my-2 mt-10">
            <div className="py-4 px-8 border border-gray-300 rounded-md bg-white text-gray-700 cursor-pointer hover:bg-gray-100 flex items-center justify-center mr-10">
              Upload SKUs CSV
            </div>
            <div className="py-4 px-8 border border-gray-300 rounded-md bg-white text-gray-700 cursor-pointer hover:bg-gray-100 flex items-center justify-center">
              New SKU
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
