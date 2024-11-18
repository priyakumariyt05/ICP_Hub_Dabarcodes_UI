
import React, { useState } from "react";
import ProfileSection from "./ProfileSection";
import SettingSection from "./SettingSection";
import ActivityLoginSection from "./ActivityLoginSection";

const ProfileData = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <>

   
    <div className="p-6 font-roboto">
      {/* Navbar with tabs */}
      <nav className="border-b border-gray-300 mb-6">
        <ul className="flex space-x-4">
          <li>
            <button
              onClick={() => setActiveTab("Profile")}
              className={`p-2 text-lg font-semibold ${
                activeTab === "Profile"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              Profile
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("Settings")}
              className={`p-2 text-lg font-semibold ${
                activeTab === "Settings"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              Settings
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("Activity Login")}
              className={`p-2 text-lg font-semibold ${
                activeTab === "Activity Login"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              Activity Login
            </button>
          </li>
        </ul>
      </nav>

      {/* Content Section */}
      {activeTab === "Profile" && <ProfileSection />}
      {activeTab === "Settings" && <SettingSection />}
      {activeTab === "Activity Login" && <ActivityLoginSection />}
    </div>

    </>
  );
};

export default ProfileData;
