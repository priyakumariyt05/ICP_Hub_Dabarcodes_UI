import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Asidebar from "../../ReusableComponents/Asidebar";
import PlansPricing from "../BOTOKS/PlansPricing";
const SubscriptionDetails = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    console.log("Sidebar toggled:", sidebarOpen);
  };



  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white p-4 md:p-8 font-roboto">
  
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 md:hidden z-50 p-2 bg-blue-600 text-white rounded-md"
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <Asidebar sidebarOpen={sidebarOpen} title="Become Our Supplier" />

      {/* Main Content */}
      <div
        className={`bg-white w-full md:w-2/3 p-4 md:p-8 flex flex-col justify-between transition-all duration-300 ease-in-out ${sidebarOpen ? "ml-0" : "md:ml-1/3"
          }`}
      >
       <h2 className="text-2xl font-bold mb-6">Subscription Details</h2>
<PlansPricing/>
<div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-lg font-bold text-black">Why Subscribe?</h2>
      <p className="text-gray-600 mt-2 ">
        Gain access to essential tools that empower your business to grow and
        connect with your audience. Each token type serves a unique purpose:
      </p>
      <ul className="list-disc list-inside mt-4 text-gray-500">
        <li>
          <span className="font-semibold text-gray-500">SKUTOK</span> – Seamlessly
          upload and manage product details on the platform.
        </li>
        <li className="mt-2 text-gray-600">
          <span className="font-semibold text-gray-500">PROTOK</span> – Promote
          specific SKUs for enhanced visibility.
        </li>
        <li className="mt-2 text-gray-600">
          <span className="font-semibold text-gray-500">BOTOKS</span> – Activate
          your brand and run impactful engagement campaigns.
        </li>
      </ul>
    </div>
      </div>
    </div>
  );
};

export default SubscriptionDetails;
