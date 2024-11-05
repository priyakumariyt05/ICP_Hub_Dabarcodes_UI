import React from "react";
import { NavLink } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <aside className="w-full md:w-1/4 bg-[#B5E8FB] p-4 shadow-lg  rounded-lg md:h-[calc(100vh-2rem)]">
      <nav className="flex flex-col space-y-4 font-roboto">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "bg-[#E7F8FE]  p-4 rounded-md"
              : "text-black p-4 rounded-md hover:bg-gray-200 "
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="/subscription-profile"
          className={({ isActive }) =>
            isActive
              ? "bg-[#E7F8FE] p-4 rounded-md"
              : "text-black p-4 rounded-md hover:bg-gray-200"
          }
        >
          Subscription
        </NavLink>
        <NavLink
          to="/my-sku"
          className={({ isActive }) =>
            isActive
              ? "bg-[#E7F8FE] p-4 rounded-md"
              : "text-black p-4 rounded-md hover:bg-gray-200"
          }
        >
          My SKUs
        </NavLink>
        {/* <NavLink
          to="/profile-promotional-coupons"
          className={({ isActive }) =>
            isActive
              ? 'bg-blue-200 p-4 rounded-md'
              : 'text-black p-4 rounded-md hover:bg-gray-200'
          }
        >
          Promotional Coupons
        </NavLink> */}
        <NavLink
          to="/utility-tokens"
          className={({ isActive }) =>
            isActive
              ? "bg-[#E7F8FE] p-4 rounded-md"
              : "text-black p-4 rounded-md hover:bg-gray-200"
          }
        >
          Utility Tokens
        </NavLink>
        <NavLink
          to="/setting"
          className={({ isActive }) =>
            isActive
              ? "bg-[#E7F8FE] p-4 rounded-md"
              : "text-black p-4 rounded-md hover:bg-gray-200"
          }
        >
          Setting
        </NavLink>
      </nav>
    </aside>
  );
};

export default LeftSidebar;
