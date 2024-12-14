import React from "react";

const PlanCard = () => {
  return (
    <div className="border rounded-lg p-4 max-w-full md:max-w-[600px] relative ">
      <div className="absolute top-0 right-0 mt-2 bg-blue-100 text-blue-800 px-3 py-1 text-sm rounded-l-full rounded-r-none">
        Member Since: 2024, Aug. 18
      </div>
      <h3 className="font-semibold font-roboto text-xl md:text-2xl">
        Your Plan
      </h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <p class="font-roboto text-sm font-normal leading-4 text-[#646464] text-left my-2">
            Plan Type:
          </p>
          <p class="font-roboto text-sm font-normal leading-4 text-[#646464] text-left my-2">
            Staus:
          </p>
          <p class="font-roboto text-sm font-normal leading-4 text-[#646464] text-left my-2">
            Next Renewal Date:
          </p>
          <p class="font-roboto text-sm font-normal leading-4 text-[#646464] text-left my-2">
            Utility Token Available:
          </p>
        </div>
        <div className="mb-4">
          <p className="font-roboto text-sm font-normal leading-4 text-[#171717] text-left my-2">
            Monthly Subscription
          </p>
          <p className="font-roboto text-sm font-normal leading-4 text-[#171717] text-left my-2">
            Active
          </p>
          <p className="font-roboto text-sm font-normal leading-4 text-[#171717] text-left my-2">
            2024, Sept. 24
          </p>
          <p className="font-roboto text-sm font-normal leading-4 text-[#171717] text-left my-2">
            03
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
