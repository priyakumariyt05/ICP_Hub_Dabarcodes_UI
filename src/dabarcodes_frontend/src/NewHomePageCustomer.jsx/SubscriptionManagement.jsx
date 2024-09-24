import React, { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import SubscriptionHistory from "./SubscriptionHistory"; // Import the reusable component

const SubscriptionManagement = () => {
  // State for toggling edit mode
  const [isEditingPlan, setIsEditingPlan] = useState(false);
  const [isEditingPayment, setIsEditingPayment] = useState(false);

  // Dummy subscription history data
  const historyData = [
    {
      date: "2024, Sept 15",
      description: "Monthly (Renewal)",
      amount: "0.007 ETH",
      transactionId: "TX123456789ABC",
      status: "Completed",
      statusColor: "green",
    },
    {
      date: "2024, Sept 10",
      description: "Added utility tokens",
      amount: "0.007 ETH",
      transactionId: "TX123456789ABC",
      status: "Completed",
      statusColor: "green",
    },
    {
      date: "2024, Sept 8",
      description: "Monthly (Renewal)",
      amount: "0.007 ETH",
      transactionId: "TX123456789ABC",
      status: "Failed",
      statusColor: "red",
    },
  ];

  return (
    <div className="max-w-xl ml-0 p-4 bg-white font-roboto">
      {" "}
      {/* Roboto font applied */}
      {/* Utility Token Purchase */}
      <div className="flex items-center justify-between mb-4 p-4 border border-gray-200 rounded">
        <div className="flex items-center">
          <img
            src="/image/token.png"
            alt=""
            className="h-6 w-6 text-gray-600 mr-2"
          />
          <span className="text-gray-600">Need more Utility Tokens?</span>
          <a href="/utility-token" className="text-blue-500 pl-2">
            Purchase Now
          </a>
        </div>
      </div>
      {/* Update or Change Plan & Payment Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 ">
        <div className="p-4 border border-gray-200 rounded shadow-md">
          <div className="flex justify-between items-center mb-4">
            <span
              style={{
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: 800,
                lineHeight: "19.2px",
                textAlign: "left",
                color: "#000000",
              }}
            >
              Update or Change Plan
            </span>
            <MdOutlineEdit
              className="h-5 w-5 text-gray-600 cursor-pointer"
              onClick={() => setIsEditingPlan(!isEditingPlan)}
            />
          </div>
          {isEditingPlan ? (
            <input
              type="text"
              className="mt-2 py-2 px-4 border border-blue-500 rounded-md w-full"
              placeholder="Enter new plan"
            />
          ) : (
            <>
              <button className="mt-2 py-2 px-4 border border-blue-500 bg-blue-100 text-black rounded-md mb-2">
                Monthly Subscription
              </button>
              <div className="mt-2 text-gray-600">Prepaid Subscription</div>
            </>
          )}
        </div>

        <div className="p-4 border border-gray-200 rounded shadow-md">
          <div className="flex justify-between items-center ">
            <span className="text-gray-600" style={{ fontFamily: "Roboto" }}>
              Payment Details
            </span>
            <MdOutlineEdit
              className="h-5 w-5 text-gray-600 cursor-pointer"
              onClick={() => setIsEditingPayment(!isEditingPayment)}
            />
          </div>
          {isEditingPayment ? (
            <input
              type="text"
              className="mt-2 py-2 px-4 border border-blue-500 rounded-md w-full"
              placeholder="Enter new payment details"
            />
          ) : (
            <>
              <div className="mt-2 text-gray-600">Wallet Provider: ICP</div>
              <div className="mt-1 text-gray-600 truncate">
                Wallet address: 0x1A2b3C4D5e...
              </div>
            </>
          )}
        </div>
      </div>
      {/* Reusable Subscription History Component */}
      <SubscriptionHistory history={historyData} />
    </div>
  );
};

export default SubscriptionManagement;
