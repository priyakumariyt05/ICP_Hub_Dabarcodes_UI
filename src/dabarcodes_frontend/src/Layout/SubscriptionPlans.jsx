import React from "react";

const SubscriptionCard = ({ title, tokens, price }) => {
  return (
    <div className="bg-[#E0F7FA] p-4 rounded-lg shadow-md w-72 text-center">
      <h3 className="text-lg font-medium m-10 pb-4">{title}</h3>
      <p className="mt-4 text-1xl font-bold m-10 pb-4">{tokens}</p>
      <p className="mt-2 text-lg">{price}</p>
    </div>
  );
};

const SubscriptionPlans = () => {
  return (
    <div className="bg-white p-8 mx-4 lg:mx-16">
      <h2 className="text-2xl font-semibold mb-4">Choose your Subscription type</h2>
      <p className="text-gray-600 mb-8">
        Select a plan that best fits your needs. Each plan gives you a different number of utility tokens to link with your favorite SKUs.
      </p>
      <div className="flex flex-col lg:flex-row justify-between items-start space-y-4 lg:space-y-0 lg:space-x-4">
        <SubscriptionCard title="Regular" tokens="10 utility token monthly" price="$10.99/month" />
        <SubscriptionCard title="Silver" tokens="45 utility token monthly" price="$29.99/month" />
        <SubscriptionCard title="Gold" tokens="95 utility token monthly" price="$49.99/month" />
        <div className="bg-white p-4 rounded-lg shadow-md w-66">
          <h3 className="text-lg font-semibold mb-4">daBarcodes subscription offers</h3>
          <ul className="text-sm space-y-2 ">
            <li className="pb-2"><span className="w-2 h-2 bg-blue-800 inline-block rounded-full mr-2"></span>  Exclusive Discounts on Partner Stores</li>
            <li className="pb-2"><span className="w-2 h-2 bg-blue-800 inline-block rounded-full mr-2"></span>  Priority Access to Limited-Time Promotions</li>
            <li className="pb-2"><span className="w-2 h-2 bg-blue-800 inline-block rounded-full mr-2"></span>  Priority Access to Limited-Time Promotions</li>
            <li className="pb-2"><span className="w-2 h-2 bg-blue-800 inline-block rounded-full mr-2"></span>  Bonus Tokens on Special Events</li>
            <li className="pb-2"><span className="w-2 h-2 bg-blue-800 inline-block rounded-full mr-2"></span>  Priority Access to Limited-Time Promotions</li>
            <li className="pb-2"><span className="w-2 h-2 bg-blue-800 inline-block rounded-full mr-2"></span>  Personalized Recommendations Based on Linked SKUs</li>
            <li className="pb-2"><span className="w-2 h-2 bg-blue-800 inline-block rounded-full mr-2"></span>  Bonus Tokens on Special Events</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;