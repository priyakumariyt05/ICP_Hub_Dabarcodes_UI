// import React from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Dashboard from './Dashboard'
// import PromotionManagement from './PromotionManagement'
// import SkuManagement from './SkuManagement'
// import Notifications from './Notifications'
// import Sidebar from './Sidebar'

// const DashboardRoutes = () => {
//   return (
//     <div>
//           <Router>
//       <div className="flex">
//         <Sidebar />
//         <main className="flex-1 ">
//           <Routes>
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/promotion-management" element={<PromotionManagement />} />
//             <Route path="/sku-management" element={<SkuManagement/>} />
//             <Route path="/notification" element={<Notifications/>} />
       
           
//           </Routes>
//         </main>
//       </div>
//     </Router>
//     </div>
//   )
// }

// export default DashboardRoutes
// DashboardRoutes.js
import React from 'react';
import { Route, Routes,Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import PromotionManagement from './PromotionManagement';
import SkuManagement from './SkuManagement';
import Notifications from './Notifications';
import Sidebar from './Sidebar';
import UploadModal from './Modals/UploadModal';



const DashboardRoutes = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/promotion-management" element={<PromotionManagement />} />
          <Route path="/sku-management" element={<SkuManagement />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
          <Route path="/upload-modal" element={<UploadModal />} />
          {/* Add other routes if needed */}
        </Routes>
      </main>
    </div>
  );
};

export default DashboardRoutes;
