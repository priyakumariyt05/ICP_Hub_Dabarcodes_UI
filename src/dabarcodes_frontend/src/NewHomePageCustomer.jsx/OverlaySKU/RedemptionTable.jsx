
import React from 'react';
import { AiOutlineUp} from 'react-icons/ai';

const RedemptionTable = ({ redemptions }) => {
  return (
    <div>
       <div className=" bg-white max-w-full p-10 shadow-lg rounded-lg mt-8 font-roboto">
      {/* <h3 className="text-xl font-semibold mb-2">Previous Redemption</h3> */}

      <h3 className="text-xl font-semibold mb-2 flex items-center">
  Previous Redemption
  <AiOutlineUp className="w-5 h-5 ml-2 text-gray-500" />
</h3>
      <hr className="border-t-2 border-gray-300 my-4" />
      {/* <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Promotion Name</th>
            <th className="p-3 text-left">Discount Amount</th>
            <th className="p-3 text-left">Net Amount</th>
          </tr>
        </thead>
        <tbody>
          {redemptions.map((redemption, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b`}
            >
              <td className="p-3">{redemption.date}</td>
              <td className="p-3">{redemption.promotionName}</td>
              <td className="p-3">${redemption.discountAmount}</td>
              <td className="p-3">${redemption.netAmount}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <table className="w-full table-auto border-collapse">
  <thead>
    <tr className="bg-gray-100 border-b">
      <th className="p-3 text-left">Date</th>
      <th className="p-3 text-left">Promotion Name</th>
      <th className="p-3 text-left">Discount Amount</th>
      <th className="p-3 text-left">Net Amount</th>
    </tr>
  </thead>
  <tbody>
    {redemptions.map((redemption, index) => (
      <tr
        key={index}
        className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-blue-100'} `}
      >
        <td className="lg:p-6">{redemption.date}</td>
        <td className="lg:p-6">{redemption.promotionName}</td>
        <td className="lg:p-6">${redemption.discountAmount}</td>
        <td className="lg:p-6">${redemption.netAmount}</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
    </div>
  );
};

export default RedemptionTable;
