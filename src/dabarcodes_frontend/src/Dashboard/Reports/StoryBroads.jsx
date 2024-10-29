import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import BackButton from "../Reusable/BackButton";

import StoryBroadProduct from "./Product/StoryBroadsProduct/StoryBroadProduct";

const StoryBroads = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("oppurtunity");
  const [showDetail, setShowDetail] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (route) => {
    if (route === "story-broads-product") {
      setShowDetail(true);
    } else {
      navigate(route);
    }
  };

  // Function to handle tab change and hide the detailed view
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setShowDetail(false); 
    setActiveCard(null); 
  };

  // Function to handle card click and set the active card
  const handleActiveCard = (cardName) => {
    setActiveCard(cardName);
    if (cardName === "story-broads-product") {
      handleCardClick("story-broads-product");
    }
  };

  return (
    <div className="min-h-screen p-6">
      {/* Back Button and Heading */}
      <div className="flex justify-between mb-6">
        <div className="flex items-center">
          <BackButton />
          <h1 className="text-2xl font-semibold mb-4">Reports</h1>
        </div>
      </div>

      {/* Subheading */}
      <h2 className="text-lg font-medium mb-4">Story Broads</h2>

      {/* Tabs */}
      <div className="flex space-x-4 mb-4 overflow-x-auto">
        <button
          className={`text-sm font-medium py-2 px-4 ${
            selectedTab === "oppurtunity"
              ? "border-b-2 border-black"
              : "text-gray-500"
          }`}
          onClick={() => handleTabChange("oppurtunity")}
        >
          Oppurtunity
        </button>
        <button
          className={`text-sm font-medium py-2 px-4 ${
            selectedTab === "watch"
              ? "border-b-2 border-black"
              : "text-gray-500"
          }`}
          onClick={() => handleTabChange("watch")}
        >
          Watch
        </button>
        <button
          className={`text-sm font-medium py-2 px-4 ${
            selectedTab === "need-attention"
              ? "border-b-2 border-black"
              : "text-gray-500"
          }`}
          onClick={() => handleTabChange("need-attention")}
        >
          Need Attentions
        </button>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {selectedTab === "oppurtunity" && (
          <>
            <div
              className={`p-4 rounded shadow cursor-pointer ${
                activeCard === "story-broads-product"
                  ? "bg-[#10B4F1]"
                  : "bg-[#B5E8FB]"
              }`}
              onClick={() => handleActiveCard("story-broads-product")}
            >
              High Price Movement
            </div>
            <div
              className={`p-4 rounded shadow ${
                activeCard === "high-product-movement"
                  ? "bg-[#10B4F1]"
                  : "bg-[#B5E8FB]"
              }`}
              onClick={() => handleActiveCard("high-product-movement")}
            >
              High Product Movement
            </div>
            <div
              className={`p-4 rounded shadow ${
                activeCard === "story-broads" ? "bg-[#10B4F1]" : "bg-[#B5E8FB]"
              }`}
            >
              Bundling of promotions high volume with low volume
            </div>
          </>
        )}
        {/* {selectedTab === "watch" && (
          <>
            <div className="bg-[#B5E8FB] p-4 rounded shadow">
              Top Products Sold
            </div>
            <div className="bg-[#B5E8FB] p-4 rounded shadow">
              Top Units Sold
            </div>
          </>
        )} */}
        {selectedTab === "watch" && (
          <>
            <div
              className={`p-4 rounded shadow cursor-pointer ${
                activeCard === "story-broads-product"
                  ? "bg-[#10B4F1]"
                  : "bg-[#B5E8FB]"
              }`}
              onClick={() => handleActiveCard("story-broads-product")}
            >
              High Price Movement
            </div>
            <div
              className={`p-4 rounded shadow ${
                activeCard === "high-product-movement"
                  ? "bg-[#10B4F1]"
                  : "bg-[#B5E8FB]"
              }`}
              onClick={() => handleActiveCard("high-product-movement")}
            >
              High Product Movement
            </div>
            <div
              className={`p-4 rounded shadow ${
                activeCard === "story-broads" ? "bg-[#10B4F1]" : "bg-[#B5E8FB]"
              }`}
            >
              Bundling of promotions high volume with low volume
            </div>
          </>
        )}
        {/* {selectedTab === "need-attention" && (
          <>
            <div className="bg-[#B5E8FB] p-4 rounded shadow">
              Bottom Products Sold
            </div>
            <div className="bg-[#B5E8FB] p-4 rounded shadow">
              Bottom Units Sold
            </div>
          </>
        )} */}
        {selectedTab === "need-attention" && (
          <>
            <div
              className={`p-4 rounded shadow cursor-pointer ${
                activeCard === "story-broads-product"
                  ? "bg-[#10B4F1]"
                  : "bg-[#B5E8FB]"
              }`}
              onClick={() => handleActiveCard("story-broads-product")}
            >
              High Price Movement
            </div>
            <div
              className={`p-4 rounded shadow ${
                activeCard === "high-product-movement"
                  ? "bg-[#10B4F1]"
                  : "bg-[#B5E8FB]"
              }`}
              onClick={() => handleActiveCard("high-product-movement")}
            >
              High Product Movement
            </div>
            <div
              className={`p-4 rounded shadow ${
                activeCard === "story-broads" ? "bg-[#10B4F1]" : "bg-[#B5E8FB]"
              }`}
            >
              Bundling of promotions high volume with low volume
            </div>
          </>
        )}
      </div>

      {/* Detailed View for Number of Product Sold */}
      {showDetail && <StoryBroadProduct onClose={() => setShowDetail(false)} />}
    </div>
  );
};

export default StoryBroads;
