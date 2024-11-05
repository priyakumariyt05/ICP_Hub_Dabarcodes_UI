import React from "react";
import CustomDoughnutChart from "./CustomDoughnutChart";
import LeftSidebar from "./LeftSidebar";
import Navbar2 from "../components/Navbar2";

const ProfilePromotionalCoupons = () => {
  const coupons = [
    {
      id: 1,
      status: "Active till August, 29",
      title: "BUNDLE OFF",
      description: "On Frozen Products and Fruits",
      imgSrc: "/image/vector2.png",
      buttonText: "Redeem",
      buttonClass: "bg-blue-200 text-blue-800",
      cardClass: "bg-blue-600 text-white",
    },
    {
      id: 2,
      status: "Deal Launching on July 29",
      title: "BUNDLE OFF",
      description: "On Frozen Products and Fruits",
      imgSrc: "/image/vector2.png",
      buttonText: "Redeem",
      buttonClass: "bg-blue-200 text-blue-800",
      cardClass: "bg-blue-600 text-white",
    },
    {
      id: 3,
      status: "Expired",
      title: "BUNDLE OFF",
      description: "On Frozen Products and Fruits",
      imgSrc: "/image/vector2.png",
      buttonText: "Expired",
      buttonClass: "bg-gray-600 text-gray-200",
      cardClass: "bg-gray-400 text-white",
      disabled: true,
    },
    {
      id: 4,
      status: "Deal Launching on July 29",
      title: "BUNDLE OFF",
      description: "On Frozen Products and Fruits",
      imgSrc: "/image/vector2.png",
      buttonText: "Redeem",
      buttonClass: "bg-blue-200 text-blue-800",
      cardClass: "bg-blue-600 text-white",
    },
  ];

  const data = {
    labels: ["Used", "Unused", "Pending"],
    datasets: [
      {
        data: [45, 20, 54],
        backgroundColor: ["#54FE7C", "#0C90EE", "#B4B1B4"],
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

  const totalCoupons = data.datasets[0].data.reduce(
    (acc, value) => acc + value,
    0
  );

  return (
    <>
      <Navbar2 />
      <div className="flex flex-col md:flex-row mt-10 p-4 md:p-8 gap-5">
        <LeftSidebar />
        <div className="w-full md:w-3/4 p-4 md:p-6">
          <section className="border-b pb-4 md:pb-6">
            <div className="flex flex-col md:flex-row justify-between items-center pb-4 md:pb-6">
              <h2 className="text-xl md:text-2xl font-semibold">
                Promotional Coupons
              </h2>
              <a href="#" className="text-sm">
                My Redeemed Coupons
              </a>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8 mt-4">
              <div className="flex-shrink-0">
                <CustomDoughnutChart
                  data={data}
                  options={options}
                  centerText={`Total ${totalCoupons}`}
                />
              </div>
              <ul className="space-y-2 md:space-y-1 text-left">
                <li className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-green-400 inline-block rounded-full mr-2"></span>
                  Active New 1
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-blue-400 inline-block rounded-full mr-2"></span>
                  Upcoming Promotions 2
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-yellow-400 inline-block rounded-full mr-2"></span>
                  Expiring Soon 0
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-gray-400 inline-block rounded-full mr-2"></span>
                  Expired 1
                </li>
              </ul>
            </div>
          </section>
          <div className="space-y-4">
            {coupons.map((coupon) => (
              <div
                key={coupon.id}
                className={`p-4 md:p-6 ${coupon.cardClass} rounded-lg flex justify-between items-center flex-col md:flex-row`}
              >
                <div className="flex items-start w-full md:w-auto mb-4 md:mb-0">
                  <div>
                    <p className="text-sm mb-1">{coupon.status}</p>
                    <div className="flex items-start">
                      <img
                        src={coupon.imgSrc}
                        alt="Coupon"
                        className="w-12 h-12 mr-4"
                      />
                      <div>
                        <h3 className="text-lg font-bold mb-1">
                          {coupon.title}
                        </h3>
                        <p className="text-sm">{coupon.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className={`px-4 py-2 rounded-lg w-full md:w-auto ${coupon.buttonClass}`}
                  disabled={coupon.disabled}
                >
                  {coupon.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePromotionalCoupons;
