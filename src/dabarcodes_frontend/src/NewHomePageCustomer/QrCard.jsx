import React from "react";

const QrCard = () => {
  return (
    <>
   
      <div className="flex items-center justify-left p-4 lg:ml-10 md:ml-0">
        <div className="flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 lg:space-x-8 p-8 max-w-4xl w-full lg:w-auto">
          <div className="text-left flex-1">
            <h2 className="text-2xl font-semibold pb-4">
              QR Code for Promotions
            </h2>
            <p className="text-base mt-2 line-height-[16.8] text-[#171717]">
              Scan the QR code below at the point of sale (POS) to redeem your
              promotion instantly. Simply present this code to the cashier or
              scan it at the self-checkout to enjoy your discount. Ensure your
              device screen is bright and clear for a quick and seamless
              transaction.
            </p>
          </div>
          <div className="flex-shrink-0">
            <img
              src="/image/qr.png"
              alt="QR Code"
              className=" object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default QrCard;
