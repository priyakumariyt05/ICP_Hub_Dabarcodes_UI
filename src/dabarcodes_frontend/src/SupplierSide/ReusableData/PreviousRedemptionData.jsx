import React from "react";

const PreviousRedemptionData = ({ previousRedemption }) => {
  return (
    <div className="p-4 bg-white rounded-lg">
      {/* <h2 className="text-lg font-semibold mb-4">Previous Redemptions</h2> */}
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="text-left  border-l-4 border-blue-400">
            <th className="p-2 ">Start Date</th>
            <th className="p-2">End Date</th>
            <th className="p-2">Duration</th>
            <th className="p-2">Discount</th>
            <th className="p-2">Original Price</th>
            <th className="p-2">Total Sales</th>
            <th className="p-2">Total Units Sold</th>
          </tr>
        </thead>
        <tbody className="border-l-4 border-blue-400">
          {previousRedemption.map((previous, index) => (
            <tr key={index} className="border-t">
              <td className="py-4 pl-2">{previous.startDate}</td>
              <td className="py-4 pl-2">{previous.endDate}</td>
              <td className="py-4 pl-2">{previous.duration}</td>
              <td className="py-4 pl-2">{previous.discount}</td>
              <td className="py-4 pl-2">{previous.originalPrice}</td>
              <td className="py-4 pl-2">{previous.totalSales}</td>
              <td className="py-4 pl-2">{previous.totalUnitsSold}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PreviousRedemptionData;
