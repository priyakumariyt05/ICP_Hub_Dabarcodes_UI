import React from "react";
import CardOverlay from "./CardOverlay";
import RedemptionTable from "./RedemptionTable";
import Navbar2 from "../../components/Navbar2";
import Footer from "../../components/Footer";

const productData = {
  name: "Nestle Ice Coffee",
  image: "/image/drink.png",
  originalPrice: 37,
  discountedPrice: 32,
  discountLabel: "15",

  validUntil: "Sept 19, 2024",
  promoter: "Urban Grocers",
  description:
    "Super smooth and creamy vanilla half and half crowned with a rich, bold coffee essence...",
  brand: "Nestle",
  flavor: "Vanilla",
  consistency: "Creamy",
  itemWeight: "500g",
};

const qrCodeImage = "/image/image 63.png";

const retailer = "GT Retailer Ltd.";

const redemptions = [
  {
    date: "2024, Sept 15",
    promotionName: "$10 Off on Nestle Ice Coffee",
    discountAmount: "10.00",
    netAmount: "30.00",
  },
  {
    date: "July 10, 2024",
    promotionName: "Buy 1 Get 1 Free - Nestle Ice Coffee",
    discountAmount: "10.00",
    netAmount: "30.00",
  },
  {
    date: "June 22, 2024",
    promotionName: "$5 Off on Nestle Ice Coffee",
    discountAmount: "5.00",
    netAmount: "30.00",
  },
  {
    date: "June 2, 2024",
    promotionName: "$10 Off on Nestle Ice Coffee",
    discountAmount: "10.00",
    netAmount: "30.00",
  },
];

const OverlayQR = () => {
  return (
    <>
      <Navbar2 />
      <div>
        <CardOverlay
          product={productData}
          qrCodeImage={qrCodeImage}
          retailer={retailer}
          // redemptions={redemptions}
        />
      </div>
      <RedemptionTable redemptions={redemptions} />
      <Footer />
    </>
  );
};

export default OverlayQR;
