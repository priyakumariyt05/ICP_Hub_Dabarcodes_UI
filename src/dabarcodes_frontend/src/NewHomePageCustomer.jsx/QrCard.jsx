import React from 'react';

const QrCard = () => {
  return (
    <>
    {/* // <div className="flex items-center justify-center h-screen bg-gray-100">
    //   <div className="flex items-center space-x-8 bg-white p-8 border border-gray-200 shadow-lg max-w-3xl">
    //     <div className="text-left">
    //       <h2 className="text-lg font-semibold">QR Code for Promotionss</h2>
    //       <p className="text-sm mt-2">
    //         Scan the QR code below at the point of sale (POS) to redeem your promotion instantly. Simply present this code to the cashier or scan it at the self-checkout to enjoy your discount. Ensure your device screen is bright and clear for a quick and seamless transaction.
    //       </p>
    //     </div>

    //     <div>
    //       <img 
    //         src="/image/qr.png" 
    //         alt="QR Code" 
           
    //       />
    //     </div>
    //   </div>
     
    // </div> */}
{/* <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
  <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 bg-white p-8 border border-gray-200 shadow-lg max-w-4xl w-full lg:w-auto">
    <div className="text-left flex-1">
      <h2 className="text-xl font-semibold">QR Code for Promotions</h2>
      <p className="text-base mt-2">
        Scan the QR code below at the point of sale (POS) to redeem your promotion instantly. Simply present this code to the cashier or scan it at the self-checkout to enjoy your discount. Ensure your device screen is bright and clear for a quick and seamless transaction.
      </p>
    </div>
    <div className="flex-shrink-0">
      <img 
        src="/image/qr.png" 
        alt="QR Code" 
        className="w-40 h-40 object-contain"
      />
    </div>
  </div>
</div> */}
{/* <div className="flex items-center justify-center min-h-screen p-4">
  <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 bg-white p-8 border border-gray-200 shadow-lg max-w-4xl w-full lg:w-auto min-h-[600px]">
    <div className="text-left flex-1">
      <h2 className="text-xl font-semibold">QR Code for Promotions</h2>
      <p className="text-base mt-2">
        Scan the QR code below at the point of sale (POS) to redeem your promotion instantly. Simply present this code to the cashier or scan it at the self-checkout to enjoy your discount. Ensure your device screen is bright and clear for a quick and seamless transaction.
      </p>
    </div>
    <div className="flex-shrink-0">
      <img 
        src="/image/qr.png" 
        alt="QR Code" 
        className="w-64 h-64 object-contain"
      />
    </div>
  </div>
</div> */}
<div className="flex items-center justify-left p-4 lg:ml-10 md:ml-0">
  <div className="flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 lg:space-x-8 p-8 max-w-4xl w-full lg:w-auto">
    <div className="text-left flex-1">
      <h2 className="text-2xl font-semibold pb-4">QR Code for Promotions</h2>
      <p className="text-base mt-2 line-height-[16.8] text-[#171717]">
        Scan the QR code below at the point of sale (POS) to redeem your promotion instantly. Simply present this code to the cashier or scan it at the self-checkout to enjoy your discount. Ensure your device screen is bright and clear for a quick and seamless transaction.
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