import React, {useState} from "react";

const ActivityLoginSection = () => {
  const [isToggled, setIsToggled] = useState(false);

  // Dynamic session data (this can also come from props or API)
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
    {value: "default", label: "Select an option"},
    {value: "high", label: "High Privacy"},
    {value: "medium", label: "Medium Privacy"},
    {value: "low", label: "Low Privacy"},
  ];

  return (
    <div className="max-w-4xl mx-auto">
    

      <h2 className="text-lg font-semibold mb-4 font-roboto">Login Activity</h2>

      {/* Dynamically Render Login Activity Cards */}
      {sessions.map((session, index) => (
        <div
          key={index}
          className="flex items-center justify-between border border-gray-200 rounded-lg p-4 mb-4 bg-white shadow-sm"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-lg">
              {/* Device Icon */}
              <svg
                className="w-6 h-6 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                {/* Customize SVG path based on device type */}
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

    </div>
  );
};

export default ActivityLoginSection;
