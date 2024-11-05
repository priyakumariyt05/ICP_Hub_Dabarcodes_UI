import React, { useState } from "react";
import GeneralSetting from "./GeneralSetting";
import FeedbackForm from "./FeedbackForm";
import Navbar2 from "../../components/Navbar2";
import LeftSidebar from "../LeftSidebar";

const Setting = () => {
  const [selectedComponent, setSelectedComponent] = useState("settings");

  const handleComponentSwitch = (component) => {
    setSelectedComponent(component);
  };

  return (
    <>
      <Navbar2 />
      <div className="flex flex-col md:flex-row min-h-screen p-6">
        <LeftSidebar />
        <main className="flex-1 p-6 md:p-10">
          {selectedComponent === "settings" && (
            <GeneralSetting handleComponentSwitch={handleComponentSwitch} />
          )}
          {selectedComponent === "feedback" && (
            <FeedbackForm handleComponentSwitch={handleComponentSwitch} />
          )}
        </main>
      </div>
    </>
  );
};

export default Setting;
