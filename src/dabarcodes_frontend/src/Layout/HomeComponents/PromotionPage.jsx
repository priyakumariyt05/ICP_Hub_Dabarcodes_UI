import React from "react";
import InfoSection from "./InfoSection";
import StepSection from "./StepSection";
import { FaHeart, FaSearch } from "react-icons/fa";
import "../../components/style/Home.css";

const PromotionPage = () => {
  const customerInfoItems = [
    {
      icon: FaHeart,
      heading: "Personalized Promotions",
      description:
        "Get promotions tailored to your shopping preferences. Enjoy savings on products you love the most.",
    },
    {
      icon: FaSearch,
      heading: "SKU Tracking",
      description:
        "Track your linked SKUs and stay updated on the best deals. Customize your preferences to get notifications about promotions on your favorite products.",
    },
  ];

  const customerSteps = [
    {
      imgSrc: "/image/Group 4526 (2).png",
      heading: "Sign up to the DaBarcodes",
      description:
        "Add additional details such as your preferences and interests to receive personalized promotions.",
      arrowImgSrc: ["/image/Arc 2.png"],
    },
    {
      imgSrc: "/image/Group 4526 (1).png",
      heading: "Browse the Promotions",
      description:
        "Select the promotions that suit your needs and link them to your profile. Save the linked promotions to your account for easy access.",
      arrowImgSrc: ["/image/Arc 1.png"],
    },
    {
      imgSrc: "/image/Group 4526.png",
      heading: "Redeem the Promotion",
      description:
        "Go to any participating retailer listed on the platform. Show the linked promotion details and redeem the offer.",
      arrowImgSrc: [],
    },
  ];

  const retailerInfoItems = [
    {
      icon: FaHeart,
      heading: "Customer Insights",
      description:
        "Gain deep insights into customer preferences and shopping behavior. Use this data to tailor your offerings and enhance customer satisfaction.",
    },
    {
      icon: FaSearch,
      heading: "SKU Promotion Approval",
      description:
        "Review and approve promotions created by suppliers. Ensure that the promotions align with your store’s strategy and attract more customers.",
    },
  ];

  const retailerSteps = [
    {
      imgSrc: "/image/Group 6.png",
      heading: "Integrate Your Products",
      description:
        "Utilize our user-friendly interface to upload and manage your SKU data, ensuring all products are correctly categorized and easily accessible.",
      arrowImgSrc: ["/image/Arc 2.png"],
    },
    {
      imgSrc: "/image/Group 2.png",
      heading: "Analyze Customer Insights",
      description:
        "Develop and create promotions for your listed products. Decide on the type of promotions you want to offer and set the terms and conditions.",
      arrowImgSrc: ["/image/Arc 1.png"],
    },
    {
      imgSrc: "/image/Group 45.png",
      heading: "Approve and Launch Promotions",
      description:
        "Collaborate with suppliers to approve and launch tailored promotions that resonate with your customers.",
      arrowImgSrc: [],
    },
  ];

  const supplierInfoItems = [
    {
      icon: FaHeart,
      heading: "Customer Insights",
      description:
        "Gain deep insights into customer preferences and shopping behavior. Use this data to tailor your offerings and enhance customer satisfaction.",
    },
    {
      icon: FaSearch,
      heading: "SKU Promotion Approval",
      description:
        "Review and approve promotions created by suppliers. Ensure that the promotions align with your store’s strategy and attract more customers.",
    },
  ];

  const supplierSteps = [
    {
      imgSrc: "/image/Group 6.png",
      heading: "List Your Products",
      description:
        "List your products on the daBarcodes platform. Provide details such as product categories, SKUs, and any other relevant information.",
      arrowImgSrc: ["/image/Arc 2.png"],
    },
    {
      imgSrc: "/image/Group 2.png",
      heading: "Create Promotions",
      description:
        "Develop and create promotions for your listed products. Decide on the type of promotions you want to offer and set the terms and conditions.",
      arrowImgSrc: ["/image/Arc 1.png"],
    },
    {
      imgSrc: "/image/Group 1.png",
      heading: "Monitor and Adjust",
      description:
        "Use the platform’s analytics to see how well your promotions are doing and make adjustments as needed to maximize their effectiveness.",
      arrowImgSrc: [],
    },
  ];

  return (
    <>
      <div className="my-24">
        <section id="for-customer">
          <InfoSection
            title="For Customers"
            imgSrc="/image/image 54.png"
            items={customerInfoItems}
          />
          <StepSection
            title="How to join DaBarcodes as a Customer"
            steps={customerSteps}
          />
        </section>

        <section id="for-retailer">
          <InfoSection
            title="For Retailers"
            items={retailerInfoItems}
            imgSrc="/image/Frame 337.png"
          />
          <StepSection
            title="How to join DaBarcodes as a Retailer"
            steps={retailerSteps}
          />
        </section>

        <section id="for-supplier">
          <InfoSection
            title="For Suppliers"
            imgSrc="/image/Frame 337.png"
            items={supplierInfoItems}
          />
          <StepSection
            title="How to join DaBarcodes as a Supplier"
            steps={supplierSteps}
          />
        </section>
      </div>
    </>
  );
};

export default PromotionPage;
