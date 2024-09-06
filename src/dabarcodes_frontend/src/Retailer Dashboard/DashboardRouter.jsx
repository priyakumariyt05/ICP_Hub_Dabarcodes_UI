import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import PromotionManagement from './PromotionManagement';
import Notifications from './Notifications';
import SkuManagement from './SkuManagement';
// import SKUManagement from './SKUManagement';
// import TokenManagement from './TokenManagement';
// import AnalyticsReport from './AnalyticsReport';
// import CustomerEngagement from './CustomerEngagement';
// import NotFound from './NotFound'; 

function DashboardRouter() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/promotion-management" element={<PromotionManagement />} />
            <Route path="/sku-management" element={<SkuManagement/>} />
            <Route path="/notification" element={<Notifications/>} />
       
           
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default DashboardRouter;
