import React from "react";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    title: "Monthly Subscription",
    price: "$30",
    period: "/month",
    description:
      "This is the best plan for the people who want the better experience of allstorecards",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    title: "Prepaid Subscription",
    price: "$40",
    period: "/month",
    description:
      "This is the best plan for the people who want the better experience of allstorecards",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
];

const PlansPricing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white font-roboto">
      <h2 className="text-3xl font-bold mb-2">Plans and Pricing</h2>
      <p className="text-gray-500 mb-8 text-center">
        Get access to all the features and SKUs with our plans
      </p>

      <div className="flex gap-6 flex-col md:flex-row">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 w-full max-w-sm shadow-md hover:shadow-lg"
            style={{ borderColor: index === 1 ? "#00BFFF" : "#e5e7eb" }} // Add border color for prepaid
          >
            <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
            <div className="text-3xl font-bold mb-1">
              {plan.price}
              <span className="text-xl font-normal">{plan.period}</span>
            </div>
            <p className="text-gray-500 mb-6">{plan.description}</p>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <div className="bg-blue-400 text-white rounded-full w-6 h-6 flex items-center justify-center mr-4">
                    <FaCheck className="w-3 h-3" /> {/* Smaller FaCheck icon */}
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlansPricing;
