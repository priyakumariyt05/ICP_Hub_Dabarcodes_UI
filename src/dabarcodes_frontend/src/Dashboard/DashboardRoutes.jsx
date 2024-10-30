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
// import React from 'react';
// import { Route, Routes,Navigate } from 'react-router-dom';
// import Dashboard from './Dashboard';
// import PromotionManagement from './PromotionManagement';
// import SkuManagement from './SkuManagement';
// import Notifications from './Notifications';
// import Sidebar from './Sidebar';
// import UploadModal from './Modals/UploadModal';



// const DashboardRoutes = () => {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <main className="flex-1">
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/promotion-management" element={<PromotionManagement />} />
//           <Route path="/sku-management" element={<SkuManagement />} />
//           <Route path="/notifications" element={<Notifications />} />
//           <Route path="*" element={<Navigate to="/dashboard" />} />
//           <Route path="/upload-modal" element={<UploadModal />} />
//           {/* Add other routes if needed */}
//         </Routes>
//       </main>
//     </div>
//   );
// };

// export default DashboardRoutes;
// import React from "react";
// import {Route, Routes, Navigate} from "react-router-dom";
// import Dashboard from "./Dashboard";
// import PromotionManagement from "./PromotionManagement";
// import SkuManagement from "./SkuManagement";
// import Notifications from "./Notifications";
// import Sidebar from "./Sidebar";
// import UploadModal from "./Modals/UploadModal";
// import AccountPage from "./CreateAccount/Accountpage";

// const DashboardRoutes = () => {
//   return (
//     <>
//       <div className="flex">
//         <Sidebar />
//         <main className="flex-1">
//           <Routes>
//             {/* Default dashboard route */}
//             <Route path="/" element={<Dashboard />} />
//             {/* Sub-routes */}
//             <Route
//               path="promotion-management"
//               element={<PromotionManagement />}
//             />
//             <Route path="sku-management" element={<SkuManagement />} />
//             <Route path="notifications" element={<Notifications />} />
//             <Route path="upload-modal" element={<UploadModal />} />
//             {/* Catch-all route */}
//             <Route path="*" element={<Navigate to="/dashboard" />} />
//           </Routes>
//         </main>
//       </div>
//       <div>
//         <Routes>
//           <Route path="admin-create" element={<AccountPage />} />
//         </Routes>
//       </div>
//     </>
//   );
// };

// export default DashboardRoutes;
// import React from "react";
// import {Route, Routes, Navigate, useLocation} from "react-router-dom";
// import Dashboard from "./Dashboard";
// import PromotionManagement from "./PromotionManagement";
// import SkuManagement from "./SkuManagement";
// import Notifications from "./Notifications";
// import Sidebar from "./Sidebar";
// import UploadModal from "./Modals/UploadModal";
// import AccountPage from "./CreateAccount/Accountpage";
// import EmailVerificationPage from "./CreateAccount/EmailVerificationPage";
// import VerificationPage from "./CreateAccount/VerificationPage";
// import AdminLogin from "./CreateAccount/AdminLogin";
// import AdminPassword from "./CreateAccount/AdminPassword";

// const DashboardRoutes = () => {
//   const location = useLocation(); // Get current route location

//   return (
//     <div className="flex">
//       {/* Render Sidebar only if not on admin-create route */}
//       {/* {location.pathname !== "/dashboard/admin-create" && <Sidebar />} */}
//       {location.pathname !== "/dashboard/admin-create" &&
//         location.pathname !== "/dashboard/email-verification" &&
//         location.pathname !== "/dashboard/verification-page" &&
//         location.pathname !== "/dashboard/admin-login" &&
//         location.pathname !== "/dashboard/admin-password" && <Sidebar />}

//       <main className="flex-1">
//         <Routes>
//           {/* Default dashboard route */}
//           <Route path="/" element={<Dashboard />} />
//           {/* Sub-routes */}
//           <Route
//             path="promotion-management"
//             element={<PromotionManagement />}
//           />
//           <Route path="sku-management" element={<SkuManagement />} />
//           <Route path="notifications" element={<Notifications />} />
//           <Route path="upload-modal" element={<UploadModal />} />
//           <Route path="admin-create" element={<AccountPage />} />{" "}
//           <Route
//             path="email-verification"
//             element={<EmailVerificationPage />}
//           />
//           <Route path="verification-page" element={<VerificationPage />} />
//           <Route path="admin-login" element={<AdminLogin />} />
//           <Route path="admin-password" element={<AdminPassword />} />
//           {/* <Route
//             path="upload-modal"
//             element={
//               <UploadModal onClose={() => <Navigate to="/dashboard" />} />
//             } 
//           />*/}
//           {/* admin-create route */}
//           {/* Catch-all route */}
//           <Route path="*" element={<Navigate to="/dashboard" />} />
//         </Routes>
//       </main>
//     </div>
//   );
// };

// export default DashboardRoutes;
    //  import React from "react";
    //  import {Route, Routes, Navigate, useLocation} from "react-router-dom";
    //  import Dashboard from "./Dashboard";
    //  import PromotionManagement from "./PromotionManagement";
    //  import SkuManagement from "./SkuManagement";
    //  import Notifications from "./Notifications";
    //  import Sidebar from "./Sidebar";
    //  import TopNavbar from "./TopNavbar"; // Import TopNavbar
    //  import UploadModal from "./Modals/UploadModal";
    //  import AccountPage from "./CreateAccount/Accountpage";
    //  import EmailVerificationPage from "./CreateAccount/EmailVerificationPage";
    //  import VerificationPage from "./CreateAccount/VerificationPage";
    //  import AdminLogin from "./CreateAccount/AdminLogin";
    //  import AdminPassword from "./CreateAccount/AdminPassword";

    //  const DashboardRoutes = () => {
    //    const location = useLocation(); // Get current route location

    //    return (
    //      <div className="flex">
         
    //        {/* Render Sidebar only if not on specific routes */}
    //        {location.pathname !== "/dashboard/admin-create" &&
    //          location.pathname !== "/dashboard/email-verification" &&
    //          location.pathname !== "/dashboard/verification-page" &&
    //          location.pathname !== "/dashboard/admin-login" &&
    //          location.pathname !== "/dashboard/admin-password" && <Sidebar />}

    //        <div className="flex-1">
    //          {/* Top Navbar */}
    //          <TopNavbar />

    //          {/* Main content area */}
    //          <main className="p-4">
    //            <Routes>
    //              {/* Default dashboard route */}
    //              <Route path="/" element={<Dashboard />} />
    //              {/* Sub-routes */}
    //              <Route
    //                path="promotion-management"
    //                element={<PromotionManagement />}
    //              />
    //              <Route path="sku-management" element={<SkuManagement />} />
    //              <Route path="notifications" element={<Notifications />} />
    //              <Route path="upload-modal" element={<UploadModal />} />
    //              <Route path="admin-create" element={<AccountPage />} />{" "}
    //              <Route
    //                path="email-verification"
    //                element={<EmailVerificationPage />}
    //              />
    //              <Route
    //                path="verification-page"
    //                element={<VerificationPage />}
    //              />
    //              <Route path="admin-login" element={<AdminLogin />} />
    //              <Route path="admin-password" element={<AdminPassword />} />
    //              {/* Catch-all route */}
    //              <Route path="*" element={<Navigate to="/dashboard" />} />
    //            </Routes>
    //          </main>
    //        </div>
    //      </div>
    //    );
    //  };

    //  export default DashboardRoutes;
// import React from "react";
// import {Route, Routes, Navigate, useLocation} from "react-router-dom";
// import Dashboard from "./Dashboard";
// import PromotionManagement from "./PromotionManagement";
// import SkuManagement from "./SkuManagement";
// import Notifications from "./Notifications";
// import Sidebar from "./Sidebar";
// import TopNavbar from "./TopNavbar"; // Import TopNavbar
// import UploadModal from "./Modals/UploadModal";
// import AccountPage from "./CreateAccount/Accountpage";
// import EmailVerificationPage from "./CreateAccount/EmailVerificationPage";
// import VerificationPage from "./CreateAccount/VerificationPage";
// import AdminLogin from "./CreateAccount/AdminLogin";
// import AdminPassword from "./CreateAccount/AdminPassword";

// const DashboardRoutes = () => {
//   const location = useLocation(); // Get current route location

//   return (
//     <div className="h-screen flex flex-col">
//       {/* Top Navbar should be outside the flex-row containing Sidebar and content */}
//       <TopNavbar />

//       <div className="flex flex-1">
//         {/* Render Sidebar only if not on specific routes */}
//         {location.pathname !== "/dashboard/admin-create" &&
//           location.pathname !== "/dashboard/email-verification" &&
//           location.pathname !== "/dashboard/verification-page" &&
//           location.pathname !== "/dashboard/admin-login" &&
//           location.pathname !== "/dashboard/admin-password" && <Sidebar />}

//         <div className="flex-1 p-4">
//           {/* Main content area */}
//           <Routes>
//             {/* Default dashboard route */}
//             <Route path="/" element={<Dashboard />} />
//             {/* Sub-routes */}
//             <Route
//               path="promotion-management"
//               element={<PromotionManagement />}
//             />
//             <Route path="sku-management" element={<SkuManagement />} />
//             <Route path="notifications" element={<Notifications />} />
//             <Route path="upload-modal" element={<UploadModal />} />
//             <Route path="admin-create" element={<AccountPage />} />
//             <Route
//               path="email-verification"
//               element={<EmailVerificationPage />}
//             />
//             <Route path="verification-page" element={<VerificationPage />} />
//             <Route path="admin-login" element={<AdminLogin />} />
//             <Route path="admin-password" element={<AdminPassword />} />
//             {/* Catch-all route */}
//             <Route path="*" element={<Navigate to="/dashboard" />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardRoutes;


import React from "react";
import {Route, Routes, Navigate, useLocation} from "react-router-dom";
// import Dashboard from "./Dashboard";
// import PromotionManagement from "./PromotionManagement";
// import SkuManagement from "./SkuManagement";
import Notifications from "./Notifications";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar"; // Import TopNavbar
// import UploadModal from "./Modals/UploadModal";
import AccountPage from "./CreateAccount/Accountpage";
import EmailVerificationPage from "./CreateAccount/EmailVerificationPage";
import VerificationPage from "./CreateAccount/VerificationPage";
import AdminLogin from "./CreateAccount/AdminLogin";
import AdminPassword from "./CreateAccount/AdminPassword";
import Documentation from "./Home/Documentation";
import Dashboard from "./Home/Dashboard";
import HomeDashboard from "./Home/HomeDashboard";
import AllProduct from "./ProductManagement/AllProduct";
import ProductOnPromotion from "./ProductManagement/ProductOnPromotion";
import SupplierList from "./SupplierManagement/SupplierList";
import PromotionList from "./SupplierManagement/PromotionList";
import ProductPerformation from "./Reports/ProductPerformation";
import StoryBroads from "./Reports/StoryBroads";
import Store from "./StoreManagement/Store";
import Role from "./Role/Role";
// import NumberOfProductSold from "./Reports/Product/NumberOfProductSoldDetails";
import NumberOfProductSoldDetails from "./Reports/Product/NumberOfProductSoldDetails";
import StoryBroadProduct from "./Reports/Product/StoryBroadsProduct/StoryBroadProduct";
import PlansPricing from "./Subscription/PlanPricing";
import SubscriptionPlan from "./Subscription/SubscriptionPlan";
import ProfileData from "./ProfileData/ProfileData";
import StoreDashboard from "./StoreManagement/StoreDetail/StoreDashboard";
import StoreDetailsPage from "./StoreManagement/StoreDetail/StoreDetailsPage";
import StoreProductsDetailsPage from "./StoreManagement/StoreDetail/StoreProductDetailsPage";
import StoreEmployeePage from "./StoreManagement/StoreDetail/StoreEmployeePage";
import StoreAnalyticsReportsPage from "./StoreManagement/StoreDetail/StoreAnalyticsReportsPage";
import StoreSupplierPage from "./StoreManagement/StoreDetail/StoreSupplierPage";
import StorePromotionDetailsPage from "./StoreManagement/StoreDetail/StorePromotionDetailsPage";
import PromotionalDetailsPopup from "./Modals/PromotionalDetailsPopup";
import ProductNoPromotion from "./ProductManagement/ProductDetail/ProductNoPromotion";
import ProductPromotion from "./ProductManagement/ProductDetail/ProductPromotion";
import SupplierDetailPage from "./SupplierManagement/SupplierDetail/SupplierDetailPage";

const DashboardRoutes = () => {
  const location = useLocation(); // Get current route location

  return (
    <div className="h-screen flex flex-col">
      {/* Top Navbar should be outside the flex-row containing Sidebar and content */}
      {/* <TopNavbar /> */}
      {location.pathname !== "/dashboard/admin-create" &&
        location.pathname !== "/dashboard/email-verification" &&
        location.pathname !== "/dashboard/verification-page" &&
        location.pathname !== "/dashboard/admin-login" &&
        location.pathname !== "/dashboard/admin-password" && <TopNavbar />}

      <div className="flex flex-1">
        {/* Render Sidebar only if not on specific routes */}
        {location.pathname !== "/dashboard/admin-create" &&
          location.pathname !== "/dashboard/email-verification" &&
          location.pathname !== "/dashboard/verification-page" &&
          location.pathname !== "/dashboard/admin-login" &&
          location.pathname !== "/dashboard/admin-password" && <Sidebar />}

        <div className="flex-1 p-4">
          {/* Main content area */}
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/dashboard/getting-started" />}
            />

            {/* Getting Started route */}
            <Route path="getting-started" element={<Dashboard />} />
            <Route path="home-dashboard" element={<HomeDashboard />} />
            <Route path="all-product" element={<AllProduct />} />
            <Route path="product-promotion" element={<ProductOnPromotion />} />
            <Route path="supplier-list" element={<SupplierList />} />
            <Route path="promotion-request" element={<PromotionList />} />
            <Route path="store" element={<Store />} />
            <Route path="role" element={<Role />} />
            <Route
              path="product-performance"
              element={<ProductPerformation />}
            />
            <Route path="story-broads" element={<StoryBroads />} />
            {/* Reports childs */}
            <Route
              path="number-of-product-sold"
              element={<NumberOfProductSoldDetails />}
            />
            <Route
              path="story-broads-product"
              element={<StoryBroadProduct />}
            />
            <Route path="notifications" element={<Notifications />} />
            <Route path="profile-data" element={<ProfileData />} />
            <Route path="plan-pricing" element={<PlansPricing />} />
            <Route path="subscription-plan" element={<SubscriptionPlan />} />
            <Route path="store-dashboard" element={<StoreDashboard />} />
            {/* store details pages routes */}
            <Route
              path="/dashboard/store-dashboard/:section"
              element={<StoreDashboard />}
            />
            <Route
              path="/store-dashboard/store-details-page"
              element={<StoreDetailsPage />}
            />
            <Route
              path="/store-dashboard/store-products-details-page"
              element={<StoreProductsDetailsPage />}
            />
            <Route
              path="/store-dashboard/store-employee-details-page"
              element={<StoreEmployeePage />}
            />
            <Route
              path="/store-dashboard/store-analytics-reports-page"
              element={<StoreAnalyticsReportsPage />}
            />
            <Route
              path="/store-dashboard/store-supplier-details-page"
              element={<StoreSupplierPage />}
            />
            <Route
              path="/store-dashboard/store-promotion-details-page"
              element={<StorePromotionDetailsPage />}
            />
            <Route
              path="/product/promotion"
              element={<ProductPromotion />}
            />
            <Route
              path="/product/no-promotion"
              element={<ProductNoPromotion />}
            />
            {/* store details pages routes  end */}
            {/* suppplier detail page */}
            <Route path="supplier-detail-page" element={<SupplierDetailPage />} />
            {/* Other routes */}


            {/* <Route path="upload-modal" element={<UploadModal />} /> */}
            <Route path="admin-create" element={<AccountPage />} />
            <Route
              path="email-verification"
              element={<EmailVerificationPage />}
            />
            <Route path="verification-page" element={<VerificationPage />} />
            <Route path="admin-login" element={<AdminLogin />} />
            <Route path="admin-password" element={<AdminPassword />} />
            <Route path="documentation" element={<Documentation />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default DashboardRoutes;


// Responsive But looks not very well//
// import React from "react";
// import {Route, Routes, Navigate, useLocation} from "react-router-dom";
// import Sidebar from "./Sidebar";
// import TopNavbar from "./TopNavbar"; // Import TopNavbar
// import Dashboard from "./Home/Dashboard";
// import HomeDashboard from "./Home/HomeDashboard";
// import AllProduct from "./ProductManagement/AllProduct";
// import ProductOnPromotion from "./ProductManagement/ProductOnPromotion";
// import SupplierList from "./SupplierManagement/SupplierList";
// import PromotionList from "./SupplierManagement/PromotionList";
// import ProductPerformation from "./Reports/ProductPerformation";
// import StoryBroads from "./Reports/StoryBroads";
// import Store from "./StoreManagement/Store";
// import Role from "./Role/Role";
// import NumberOfProductSoldDetails from "./Reports/Product/NumberOfProductSoldDetails";
// import StoryBroadProduct from "./Reports/Product/StoryBroadsProduct/StoryBroadProduct";
// import PlansPricing from "./Subscription/PlanPricing";
// import SubscriptionPlan from "./Subscription/SubscriptionPlan";
// import AccountPage from "./CreateAccount/Accountpage";
// import EmailVerificationPage from "./CreateAccount/EmailVerificationPage";
// import VerificationPage from "./CreateAccount/VerificationPage";
// import AdminLogin from "./CreateAccount/AdminLogin";
// import AdminPassword from "./CreateAccount/AdminPassword";
// import Documentation from "./Home/Documentation";
// import Notifications from "./Notifications";

// const DashboardRoutes = () => {
//   const location = useLocation(); // Get current route location

//   return (
//     <div className="h-screen flex flex-col">
//       {location.pathname !== "/dashboard/admin-create" &&
//         location.pathname !== "/dashboard/email-verification" &&
//         location.pathname !== "/dashboard/verification-page" &&
//         location.pathname !== "/dashboard/admin-login" &&
//         location.pathname !== "/dashboard/admin-password" && <TopNavbar />}

//       <div className="flex flex-1">
//         {location.pathname !== "/dashboard/admin-create" &&
//           location.pathname !== "/dashboard/email-verification" &&
//           location.pathname !== "/dashboard/verification-page" &&
//           location.pathname !== "/dashboard/admin-login" &&
//           location.pathname !== "/dashboard/admin-password" && <Sidebar />}

//         {/* Main Content Area */}
//         <div className="main-content p-4">
//           <Routes>
//             <Route
//               path="/"
//               element={<Navigate to="/dashboard/getting-started" />}
//             />
//             <Route path="getting-started" element={<Dashboard />} />
//             <Route path="home-dashboard" element={<HomeDashboard />} />
//             <Route path="all-product" element={<AllProduct />} />
//             <Route path="product-promotion" element={<ProductOnPromotion />} />
//             <Route path="supplier-list" element={<SupplierList />} />
//             <Route path="promotion-request" element={<PromotionList />} />
//             <Route path="store" element={<Store />} />
//             <Route path="role" element={<Role />} />
//             <Route
//               path="product-performance"
//               element={<ProductPerformation />}
//             />
//             <Route path="story-broads" element={<StoryBroads />} />
//             <Route
//               path="number-of-product-sold"
//               element={<NumberOfProductSoldDetails />}
//             />
//             <Route
//               path="story-broads-product"
//               element={<StoryBroadProduct />}
//             />
//             <Route path="notifications" element={<Notifications />} />
//             <Route path="plan-pricing" element={<PlansPricing />} />
//             <Route path="subscription-plan" element={<SubscriptionPlan />} />
//             <Route path="admin-create" element={<AccountPage />} />
//             <Route
//               path="email-verification"
//               element={<EmailVerificationPage />}
//             />
//             <Route path="verification-page" element={<VerificationPage />} />
//             <Route path="admin-login" element={<AdminLogin />} />
//             <Route path="admin-password" element={<AdminPassword />} />
//             <Route path="documentation" element={<Documentation />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardRoutes;

