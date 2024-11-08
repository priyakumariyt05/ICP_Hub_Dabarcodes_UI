import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import CreateAccount from "./OnBoarding/CreateAccount";
const SupplierRoutes = () => {
  const location = useLocation(); // Get current route location

  return (
    <div className="h-screen flex flex-col">
   
      {/* <TopNavbar /> */}
     
        <div className="flex-1 p-4">
          {/* Main content area */}
          <Routes>
          <Route path="create-account" element={<CreateAccount />} />
            
          </Routes>
        </div>
      </div>

  );
};

export default SupplierRoutes;