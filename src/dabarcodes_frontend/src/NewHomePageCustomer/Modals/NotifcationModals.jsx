import React, { useState } from "react";
import Modal from "./Modal";
import { useModal } from "../../ContextApi/ModalContext";
import { CiCircleQuestion } from "react-icons/ci";

const cardItems = ["All", "General", "Promotions", "Expiring Soon", "Coupons"];

const cardData = [
  {
    imgSrc: "/image/promo.png",
    title: "Exclusive Deal: Save 20% on your linked SKUs at [Retailer Name].",
    skuName: "SKU Name : SKU Name",
    promotionDetail: "Promotion Detail : 20% off",
    validTill: "Valid till: August 29, 2024",
    buttonText: "Claim offer",
    category: "Promotions",
  },
  {
    imgSrc: "/image/promo.png",
    title: "General Offer: Save 10% on your next purchase.",
    skuName: "SKU Name : SKU Name",
    promotionDetail: "Promotion Detail : 10% off",
    validTill: "Valid till: September 30, 2024",
    buttonText: "Claim offer",
    category: "General",
  },
  {
    imgSrc: "/image/promo.png",
    title: "General Offer: Save 10% on your next purchase.",
    skuName: "SKU Name : SKU Name",
    promotionDetail: "Promotion Detail : 10% off",
    validTill: "Valid till: September 30, 2024",
    buttonText: "Claim offer",
    category: "General",
  },
  {
    imgSrc: "/image/promo.png",
    title: "General Offer: Save 10% on your next purchase.",
    skuName: "SKU Name : SKU Name",
    promotionDetail: "Promotion Detail : 10% off",
    validTill: "Valid till: September 30, 2024",
    buttonText: "Claim offer",
    category: "General",
  },

  {
    imgSrc: "/image/promo.png",
    title: "Expiring Soon: Save 5% on your linked SKUs.",
    skuName: "SKU Name : SKU Name",
    promotionDetail: "Promotion Detail : 5% off",
    validTill: "Valid till: September 28, 2024",
    buttonText: "Claim offer",
    category: "Expiring Soon",
  },
  {
    imgSrc: "/image/promo.png",
    title: "Expiring Soon: Save 5% on your linked SKUs.",
    skuName: "SKU Name : SKU Name",
    promotionDetail: "Promotion Detail : 5% off",
    validTill: "Valid till: September 28, 2024",
    buttonText: "Claim offer",
    category: "Expiring Soon",
  },
  {
    imgSrc: "/image/promo.png",
    title: "Expiring Soon: Save 5% on your linked SKUs.",
    skuName: "SKU Name : SKU Name",
    promotionDetail: "Promotion Detail : 5% off",
    validTill: "Valid till: September 28, 2024",
    buttonText: "Claim offer",
    category: "Expiring Soon",
  },
  {
    imgSrc: "/image/promo.png",
    title: "Expiring Soon: Save 5% on your linked SKUs.",
    skuName: "SKU Name : SKU Name",
    promotionDetail: "Promotion Detail : 5% off",
    validTill: "Valid till: September 28, 2024",
    buttonText: "Claim offer",
    category: "Expiring Soon",
  },
  {
    imgSrc: "/image/promo.png",
    title: "Coupon Deal: Get $5 off on your next purchase.",
    skuName: "SKU Name : SKU Name",
    promotionDetail: "Promotion Detail : $5 off",
    validTill: "Valid till: October 15, 2024",
    buttonText: "Claim offer",
    category: "Coupons",
  },
  {
    imgSrc: "/image/promo.png",
    title: "Coupon Deal: Get $5 off on your next purchase.",
    skuName: "SKU Name : SKU Name",
    promotionDetail: "Promotion Detail : $5 off",
    validTill: "Valid till: October 15, 2024",
    buttonText: "Claim offer",
    category: "Coupons",
  },
];

const NotificationsModals = () => {
  const { isNotificationsOn, closeNotifications } = useModal();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  if (!isNotificationsOn) return null;

  // Determine the active category based on the active index
  const filteredData =
    activeIndex === 0 // "All"
      ? cardData
      : cardData.filter((card) => card.category === cardItems[activeIndex]);

  return (
    <Modal
      isOpen={isNotificationsOn}
      onClose={closeNotifications}
      className="flex md:flex-col gap-4 w-[300px] md:w-[551px] h-fit"
      mainclass="flex justify-center items-center md:items-start md:justify-end md:pt-24 md:pr-32"
    >
      <div>
        <ul className="flex md:flex-row flex-col md:justify-center md:items-center md:gap-6 gap-4">
          <CiCircleQuestion size={20} className="text-[#37352F]" />
          {cardItems.map((item, index) => (
            <li
              key={item}
              onClick={() => handleItemClick(index)}
              className={`cursor-pointer flex items-center ${
                activeIndex === index
                  ? "font-semibold underline decoration-black underline-offset-8"
                  : ""
              }`}
            >
              {item}
              {activeIndex === index && (
                <p className="bg-[#FE5F33] underline w-4 h-4 border border-rounded text-white rounded-[3px] text-center text-xs ml-2">
                  {filteredData.length}
                </p>
              )}
            </li>
          ))}
        </ul>
        <hr className="hidden md:block border-t-2 mt-4 border-[#F5F5F5]" />
      </div>
      <hr className="md:hidden w-px h-[400px] bg-gray-300 transform rotate-180" />

      <div className="overflow-y-auto max-h-[400px] hide-scrollbar">
        {filteredData.map((card, index) => (
          <div key={card.title + index}>
            <CardComponent
              imgSrc={card.imgSrc}
              title={card.title}
              skuName={card.skuName}
              promotionDetail={card.promotionDetail}
              validTill={card.validTill}
              buttonText={card.buttonText}
            />
            <hr className="block border-t-2 mt-4 border-[#F5F5F5]" />
          </div>
        ))}
      </div>
    </Modal>
  );
};

const CardComponent = ({
  imgSrc,
  title,
  skuName,
  promotionDetail,
  validTill,
  buttonText,
}) => {
  return (
    <div className="md:flex gap-4 mb-8">
      <img className="w-12 h-12 mt-2" src={imgSrc} alt="Card Image" />
      <div>
        <p className="text-md font-normal">{title}</p>
        <p className="pt-2 text-xs text-[#646464]">{skuName}</p>
        <p className="pt-2 text-xs text-[#646464]">{promotionDetail}</p>
        <p className="pt-2 text-xs text-[#646464]">{validTill}</p>
        <button className="border mt-4 border-[#0D90C1] font-medium rounded-md text-[#0D90C1] px-2 md:px-4 py-1 hover:bg-[#E7F8FE]">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default NotificationsModals;
