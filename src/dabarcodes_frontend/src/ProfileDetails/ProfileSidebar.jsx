import React from "react";
import VerticalStep from "./VerticalStep";
import HorizontalStep from "./HorizontalStep";

const ProfileSidebar = ({ sidebarOpen, currentStep }) => {
  return (
    <div
      className={`w-full md:w-1/4 bg-[#B5E8FB] md:bg-[#D1EDFF] p-4 shadow-lg bg-transparent rounded-lg md:h-[calc(100vh-2rem)] 
        ${sidebarOpen ? "fixed top-0 left-0 h-full z-40" : "hidden"} md:block`}
    >
      <div className="md:mb-8 hidden md:block">
        <img src="/image/image 40.png" alt="Logo" className="h-8 w-auto mb-8" />
      </div>
      <h2 className="text-xl font-bold mb-8 md:block hidden">Create Account</h2>

      <VerticalStep currentStep={currentStep} />

      <HorizontalStep currentStep={currentStep} />
    </div>
  );
};

export default ProfileSidebar;
