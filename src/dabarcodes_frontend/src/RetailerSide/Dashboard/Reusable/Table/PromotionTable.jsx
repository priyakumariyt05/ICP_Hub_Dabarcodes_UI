import React from "react";

const PromotionTable = ({promotions}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Upcoming Promotions</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="text-left border-b">
            <th className="pb-2">Product Name</th>
            <th className="pb-2">Promotion Starting on</th>
            <th className="pb-2">Promotion Type</th>
          </tr>
        </thead>
        <tbody>
          {promotions.map((promo, index) => (
            <tr key={index} className="border-b">
              <td className="py-2">{promo.productName}</td>
              <td className="py-2">{promo.promotionDate}</td>
              <td className="py-2">{promo.promotionType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PromotionTable;
