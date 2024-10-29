
import React, {useState} from "react";
import {CiCircleQuestion} from "react-icons/ci";

const cardItems = ["All", "Promotions", "Supplier Requests", "Miscellaneous"];

const cardData = [
  {
    title: "New Promotion Request from Supplier",
    description:
      "Supplier XYZ has submitted a new promotion request for Product Nestle Coffee 500g pouch.",
    dateRange: "Promotion Timeline: 2024, Oct 7 to 2024, Oct 19",
    buttonText: "View Request",
    category: "Promotions",
  },
  {
    title: "Promotion Expiring Soon",
    description:
      "Promotion #24689 from Supplier ABC Industries is attracting more customers... expiring in [X] days.",
    buttonText: "View Request",
    category: "Promotions",
  },
  {
    title: "Low Stock",
    description:
      "Product [Product Name] has reached a low stock level. Only [X] units remain.",
    buttonText: "View Request",
    category: "Supplier Requests",
  },
  {
    title: "Upcoming Promotion Opportunity",
    description:
      "A seasonal promotion is coming up... attract more customers using high-traffic products.",
    buttonText: "View Request",
    category: "Miscellaneous",
  },
];

const Notifications = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  // Filter cards based on the active category
  const filteredData =
    activeIndex === 0
      ? cardData
      : cardData.filter((card) => card.category === cardItems[activeIndex]);

  return (
    <>
      <div>
        {/* Notification Tabs */}
        <ul className="flex md:flex-row flex-col md:justify-start md:items-start md:gap-6 gap-4">
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
                <p className="bg-[#FE5F33] underline w-4 h-4 border text-white rounded-[3px] text-center text-xs ml-2">
                  {filteredData.length}
                </p>
              )}
            </li>
          ))}
        </ul>
        <hr className="hidden md:block border-t-2 mt-4 border-[#F5F5F5]" />
      </div>

      {/* Card List */}
      <div className="overflow-y-auto max-h-[400px] hide-scrollbar">
        {filteredData.map((card, index) => (
          <div key={card.title + index}>
            <CardComponent
              title={card.title}
              description={card.description}
              dateRange={card.dateRange}
              buttonText={card.buttonText}
            />
            <hr className="block border-t-2 mt-4 border-[#F5F5F5]" />
          </div>
        ))}
      </div>
    </>
  );
};

const CardComponent = ({title, description, dateRange, buttonText}) => {
  return (
    <div className="p-4 bg-white border border-[#E5E5E5] rounded-md shadow-sm mb-6 md:flex justify-between items-center">
      {/* Left Side: Card Content */}
      <div>
        <p className="font-semibold text-md">{title}</p>
        <p className="text-sm text-[#646464] mt-2">{description}</p>
        {dateRange && (
          <p className="text-sm text-[#646464] mt-2">{dateRange}</p>
        )}
      </div>

      {/* Right Side: Button */}
      <div className="mt-4 md:mt-0 text-right">
        <button className="border border-[#0D90C1] text-[#0D90C1] px-4 py-2 rounded hover:bg-[#E7F8FE] font-medium">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Notifications;
