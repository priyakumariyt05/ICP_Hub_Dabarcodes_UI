import React from "react";
import CustomDoughnutChart from "../CustomDoughnutChart";

import { useData } from "../../ContextApi/DataContext";

import { productData } from "../../Data/giftCarddata";
import SkuCard from "../SkuCard";
import { RandomcardData } from "../../Data/data";


const  WishlistSku = () => {
  // const {randomCardData} = useData()
  const data = {
    labels: ["Used", "Unused", "Pending"],
    datasets: [
      {
        data: [4, 3, 3,2,5],
        backgroundColor: ["#F1E3D6", "#F1E7FE", "#FED3D2" ,"#D5F7C5","#F7F4EC"],
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
      <div className="space-y-6">
        <section className="border-b pb-6">
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
            <div className="flex-shrink-0">
              <CustomDoughnutChart
                data={data}
                options={options}
                centerText="Total 99"
              />
            </div>
            <div className="mt-4 md:mt-0 md:ml-6 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div>
                <p className="font-medium font-roboto"> 
                <span className="w-2 h-2 bg-[#F1E3D6] inline-block rounded-full mr-2"></span>

                Fresh Meat: 4</p>
                <p className="font-medium font-roboto">
                <span className="w-2 h-2 bg-[#F1E7FE] inline-block rounded-full mr-2"></span>
                  Fresh and Vegetable: 54
                </p>
                <p className="font-medium font-roboto">
                <span className="w-2 h-2 bg-[#FED3D2] inline-block rounded-full mr-2"></span>
                Shelf Stable Food: 45</p>
                
              </div>
              <div>
                <p className="font-medium font-roboto">
                <span className="w-2 h-2 bg-[#D5F7C5] inline-block rounded-full mr-2"></span>
                Frozen Food: 4</p>
                <p className="font-medium font-roboto">
                <span className="w-2 h-2 bg-[#F7F4EC] inline-block rounded-full mr-2"></span>
                Dairy Product: 5</p>
              </div>
            </div>
          </div>
        </section>


        
       <SkuCard Data={productData}/>
      </div>
    </>
  );
};

export default WishlistSku;