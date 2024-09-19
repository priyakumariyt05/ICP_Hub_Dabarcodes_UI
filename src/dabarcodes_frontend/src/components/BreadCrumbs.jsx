
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Breadcrumb() {
  const location = useLocation(); 
  const navigate = useNavigate();
  const pathnames = location.pathname.split("/").filter((x) => x); 
  return (
    <div className="px-4 py-2 text-sm text-gray-600 font-roboto flex ">
      <Link to="/" className="hover:underline">
        Home
      </Link>
      /
      <Link to="/homepage" className=" hover:underline">
          SKU
            
        </Link>
      {pathnames.length > 0 && " / "}
      {pathnames.map((value, index) => {
    
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1; // Check if it's the last breadcrumb

        return isLast ? (
          // If it's the last breadcrumb, show it as plain text
          <span key={to} className="text-gray-500">
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </span>
        ) : (
          // If not the last breadcrumb, make it clickable
          <div key={to}>
            <Link
              to={to} 
              className="hover:underline"
              onClick={() => navigate(to)} // Navigate to the selected breadcrumb
            >
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </Link>
            {" / "}
          </div>
        );
      })}
    </div>
  );
}

export default Breadcrumb;
