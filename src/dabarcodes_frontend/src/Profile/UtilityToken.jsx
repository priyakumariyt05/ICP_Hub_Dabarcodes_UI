import React from "react";
import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";
import LeftSidebar from "./LeftSidebar";
import CustomDoughnutChart from "./CustomDoughnutChart";

const UtilityToken = () => {
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
      tooltip: {
        enabled: false,
      },
      datalabels: {
        display: false,
      },
    },
  };

  return (
    <>
      <Navbar2 />
      <div className="flex flex-col md:flex-row min-h-screen p-6">
        <LeftSidebar />
        <main className="flex-1 p-4 md:p-6 lg:p-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4 font-roboto">
            {" "}
            My Utility Token
          </h2>
          <hr className="border-t-2 border-gray-300 mb-4" />
          <h1 className=" md:text-xl font-bold mb-4 font-roboto">
            Utility Token
          </h1>
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
            <div className="flex-shrink-0">
              <CustomDoughnutChart
                data={data}
                options={options}
                centerText="Total 99"
              />
            </div>
            <ul className="flex flex-col space-y-2 md:space-y-2 mt-4 md:mt-24">
              <li className="flex items-center text-l font-roboto text-bold text-[#07516C]">
                <span className="w-2 h-2 bg-blue-800 inline-block rounded-full mr-2 "></span>
                Total utility token <span className="text-black ml-2">99</span>
              </li>
              <li className="lex items-center text-x font-roboto text-bold text-[#3b849e]">
                <span className="w-2 h-2 bg-blue-400 inline-block rounded-full mr-2"></span>
                Used utility token <span className="text-black ml-2">45</span>
              </li>
              <li className="flex items-center text-l font-roboto text-bold text-[#69bad8]">
                <span className="w-2 h-2 bg-blue-500 inline-block rounded-full mr-2 "></span>
                Unused utility tokens{" "}
                <span className="text-black ml-2">34</span>
              </li>
            </ul>
          </div>
          <section className="space-y-4 pt-6">
            <button className="bg-blue-500 text-white py-2 px-6 rounded block mx-auto md:mx-0">
              Add More Tokens
            </button>
            <hr className="border-t-2 border-gray-300 my-4" />
          </section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
            {/* First card */}
            <div className="p-4 bg-white shadow-lg rounded-lg flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left">
                <h3
                  className="text-lg font-bold pb-2"
                  style={{
                    fontFamily: "Butler, serif",
                    fontSize: "16px",
                    fontWeight: "800",
                    lineHeight: "19.2px",
                    textAlign: "left",
                    color: "#0D90C1",
                  }}
                >
                  Check all Fixed Linked SKU
                </h3>

                <p
                  className="text-sm pb-1"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "16.8px",
                    textAlign: "left",
                    color: "#646464",
                  }}
                >
                  Number of SKU:{" "}
                  <span className="font-bold text-black">14</span>
                </p>

                <p
                  className="text-sm pb-2"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "16.8px",
                    textAlign: "left",
                    color: "#646464",
                  }}
                >
                  SKUs with Active Promotions:{" "}
                  <span className="font-bold">4</span>
                </p>

                <div className="flex items-start  mt-4">
                  <span className="bg-gray-400 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                    ?
                  </span>
                </div>
              </div>
            </div>
            {/* Second card */}
            <div className="p-4 bg-white shadow-lg rounded-lg flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left">
                <h3
                  className="text-lg font-bold pb-2"
                  style={{
                    fontFamily: "Butler, serif",
                    fontSize: "16px",
                    fontWeight: "800",
                    lineHeight: "19.2px",
                    textAlign: "left",
                    color: "#0D90C1",
                  }}
                >
                  Floating SKU
                </h3>

                <p
                  className="text-sm pb-1"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "16.8px",
                    textAlign: "left",
                    color: "#646464",
                  }}
                >
                  Linked to:{" "}
                  <span className="font-bold text-black">SKU Name</span>
                </p>
                <p
                  className="text-sm pb-2"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "16.8px",
                    textAlign: "left",
                    color: "#646464",
                  }}
                >
                  Expiring on: <span className="font-bold">Sept 19, 2024</span>
                </p>
                <div className="flex items-start  mt-4">
                  <span className="bg-gray-400 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                    ?
                  </span>
                </div>
              </div>
              <div className="bg-blue-100 text-blue-500 text-xs font-semibold px-2 py-1 rounded-full">
                USED
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default UtilityToken;
