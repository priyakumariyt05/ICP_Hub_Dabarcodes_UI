import React from "react";
import CustomDoughnutChart from "../../Profile/CustomDoughnutChart";

import SubscriptionManagement from "../../NewHomePageCustomer/SubscriptionManagement";

import PlanCard from "./PlanCard";

const SubscriptionPlan = () => {
    const data = {
        labels: ["Used", "Unused", "Pending"],
        datasets: [
            {
                data: [45, 20, 54],
                backgroundColor: ["#0C87B5", "#10B4F1", "#07516C"],
                hoverBackgroundColor: ["#2563eb", "#9ca3af", "#003D6A"],
                borderColor: ["#ffffff", "#ffffff", "#ffffff"],
                borderWidth: 2,
                borderRadius: 30,
            },
        ],
    };

    const options = {
        cutout: "85%",
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <>
            <div className="flex flex-col md:flex-row min-h-screen p-6">
                <main className="w-full md:w-3/4 p-10 mt-10 md:mt-0 md:ml-6 mb-10 rounded-md flex-grow">
                    <h1 className="text-[31px] font-extrabold text-[#000000] mb-6 leading-[37.2px] text-left">
                        My Subscription
                    </h1>

                    <div className="space-y-6">
                        <PlanCard />

                        <section className="border-b pb-6">
                            <div className="flex flex-col md:flex-row justify-between items-start">
                                <h2 className="text-xl font-semibold">Utility Tokens</h2>
                                {/* <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 md:mt-0">Add Tokens</button> */}
                            </div>
                            <div className="flex flex-col md:flex-row items-start mt-4">
                                <div className="flex-shrink-0">
                                    <CustomDoughnutChart
                                        data={data}
                                        options={options}
                                        centerText="Total 99"
                                    />
                                </div>
                                <div className="md:ml-6 space-y-1 text-left mt-4">
                                    <p className="font-bold text-[#0C87B5]">
                                        Total utility tokens: 99
                                    </p>
                                    <p className="font-bold text-[#10B4F1]">
                                        Used utility tokens: 54
                                    </p>
                                    <p className="font-bold text-[#07516C]">
                                        Unused utility tokens: 45
                                    </p>
                                </div>
                            </div>
                        </section>

                        <SubscriptionManagement />
                    </div>
                </main>
            </div>
        </>
    );
};

export default SubscriptionPlan;
