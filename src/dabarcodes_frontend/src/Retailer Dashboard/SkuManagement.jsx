import React from 'react';
// import Sidebar from './Sidebar';

const dashboardData = {
  revenue: [
    { title: 'Total Revenue', value: '$2,420', change: '↑ 20%', color: 'text-green-500' },
    { title: 'SKUs on Promotion', value: '75', change: '↑ 10%', color: 'text-green-500' },
    { title: 'Total SKU', value: '1,300', change: '↑ 20%', color: 'text-green-500' },
  ],
  skuSuppliers: [
    { name: 'Crunchy Nut Bars', brand: 'NutriMax', category: 'Snack Bars', promotion: '20% Off' },
    { name: 'Organic Pasta', brand: 'PureHarvest', category: 'Pasta', promotion: '10% Off' },
    { name: 'Healthy Fruit Snacks', brand: 'FruityBites', category: 'Fruit Snacks', promotion: '$5 Off 2 or More Packs' },
  ],
  mySkus: [
    { name: 'Crunchy Nut Bars', status: 'In Stock', statusColor: 'text-green-500' },
    { name: 'Organic Pasta', status: 'Out of Stock', statusColor: 'text-red-500' },
    { name: 'Healthy Fruit Snacks', status: 'In Stock', statusColor: 'text-green-500' },
  ],
  topPerformingPromotions: [
    { title: '20% Off Snack Bars', percentage: '30%', value: '100' },
    { title: '$5 Off 2 or More Packs', percentage: '65%', value: '1500' },
    { title: '10% Off Organic Pasta', percentage: '40%', value: '800' },
    { title: '$10 Off on Fruits', percentage: '80%', value: '2300' },
  ],
  leaderboard: [
    { rank: '1', name: 'Fatima Del Rio', earnings: '$11,300' },
    { rank: '2', name: 'David R. Teeter', earnings: '$10,200' },
    { rank: '3', name: 'Lori L. Puckett', earnings: '$9,100' },
  ],
};

const SkuManagement = () => {
  return (
    <div className="flex h-screen">
      {/* <Sidebar /> */}
      <div className="flex-grow p-6 bg-white overflow-y-auto md:ml-64">
        {/* Top Dashboard Section 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dashboardData.revenue.map((item, index) => (
            <div key={index} className="relative p-4 border rounded-lg">
              <h2 className="text-lg font-semibold text-gray-400 pb-2">{item.title}</h2>
              <p className="text-2xl pb-4">{item.value}</p>
              <p className={`text-green-500 absolute bottom-0 right-0 mb-2 mr-2 px-2 py-1 bg-green-100 rounded-full`}>
                {item.change}
              </p>
            </div>
          ))}
        </div>
        {/* Top Dashboard Section 1 Ended */}

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
                  <th className='font-medium'>Status</th>
                </tr>
              </thead>
              <tbody>
                {dashboardData.mySkus.map((sku, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2">{sku.name}</td>
                    <td className={`text-sm ${sku.statusColor}`}>{sku.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* SKU Suppliers and SKUs Section 2 Ended */}

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
                  <span className="flex-grow text-right pr-2">{entry.earnings}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Top Performance Section Ended */}
      </div>
    </div>
  );
};

export default SkuManagement;
