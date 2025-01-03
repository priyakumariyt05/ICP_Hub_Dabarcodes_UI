import React, { useState } from "react";
const LoginActivity = () => {
  const [isToggled, setIsToggled] = useState(false);
  const sessions = [
    {
      device: "Windows computer",
      username: "Alex",
      location: "India",
      browser: "Google Chrome",
      deviceIconPath:
        "M4 5h12V4H4v1zM3 8v7h14V8H3zm4 4.5c0 .827.673 1.5 1.5 1.5h1c.827 0 1.5-.673 1.5-1.5S10.327 11 9.5 11h-1C6.673 11 6 11.673 6 12.5zM13 3h4v14h-1V4h-3V3z",
    },
    {
      device: "Android Mobile",
      username: "Alex",
      location: "India",
      browser: "Vivo T2",
      deviceIconPath:
        "M4 5h12V4H4v1zM3 8v7h14V8H3zm4 4.5c0 .827.673 1.5 1.5 1.5h1c.827 0 1.5-.673 1.5-1.5S10.327 11 9.5 11h-1C6.673 11 6 11.673 6 12.5zM13 3h4v14h-1V4h-3V3z",
    },
  ];

  // Privacy preferences
  const privacyOptions = [
    { value: "default", label: "Select an option" },
    { value: "high", label: "High Privacy" },
    { value: "medium", label: "Medium Privacy" },
    { value: "low", label: "Low Privacy" },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold my-6 font-roboto">
        Privacy And Security
      </h2>

      <h2 className="text-lg font-semibold mb-4 font-roboto">Login Activity</h2>

      {/* Dynamically Render Login Activity Cards */}
      {sessions.map((session, index) => (
        <div
          key={index}
          className="flex items-center justify-between border border-gray-200 rounded-lg p-4 mb-4 bg-white shadow-sm"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-lg">
              {/* Device */}
              <svg
                className="w-6 h-6 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d={session.deviceIconPath} />
              </svg>
            </div>
            <div>
              <p className="font-bold text-[16px] leading-[19.2px] text-left text-[#171717] font-roboto">
                {`1 session on ${session.device}`}
              </p>
              <p className="text-[14px] font-normal leading-[16.8px] text-left text-[#646464] font-roboto flex items-center space-x-2">
                {`Login by: ${session.username}`}
                <span className="bg-gray-400 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center ml-2">
                  ?
                </span>
              </p>
            </div>
          </div>
          <div className="text-right text-sm text-gray-500">
            <p className="text-[14px] font-roboto font-normal leading-[16.8px] text-left text-[#646464]">
              {session.device}
            </p>

            <p className="text-[14px] font-normal leading-[16.8px] text-left text-[#646464] font-roboto">
              {session.location}
            </p>
            <p className="text-[14px] font-normal leading-[16.8px] text-left text-[#646464] font-roboto">
              {session.browser}
            </p>
          </div>
        </div>
      ))}

      {/* Data Privacy Section */}
      <div className="flex items-center justify-between mb-4 mt-4">
        <h2 className="text-lg font-semibold font-roboto my-4">Data Privacy</h2>

        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only"
            checked={isToggled}
            onChange={() => setIsToggled(!isToggled)}
          />
          <div className="w-10 h-6 bg-blue-400 rounded-full shadow-inner"></div>
          <div
            className={`dot absolute w-6 h-6 bg-white rounded-full shadow transform transition ${
              isToggled ? "translate-x-4" : ""
            }`}
          ></div>
        </label>
      </div>

      {/* Privacy Preference Dropdown */}
      <div className="mb-4">
        <label
          className="block text-[14px] font-medium leading-[16.8px] text-left text-[#000000] font-roboto my-1"
          htmlFor="privacy-preference"
        >
          Privacy Preference *
        </label>

        <select
          id="privacy-preference"
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          {privacyOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LoginActivity;
