// import React from "react";
// import { Route, Routes, Navigate, useLocation } from "react-router-dom";

// import CreateAccount from "./OnBoarding/CreateAccount";
// import TopNavbar from "./TopNavbar";
// import Sidebar from "./Sidebar";
// import SupplierHome from "./SupplierDashboard/SupplierHome";
// import BrandDetails from "./OnBoarding/BrandDetails";
// import CreatePromotion from "./OnBoarding/CreatePromotion";
// import ProductDetails from "./OnBoarding/ProductDetails";

// const SupplierRoutes = () => {
//   const location = useLocation(); // Get current route location

//   return (
//     <div className="h-screen flex flex-col">
//       {/* Render TopNavbar only if not on specific routes */}
//       {location.pathname !== "/supplier/create-account" &&
//         location.pathname !== "/supplier/brand-details" &&
//         location.pathname !== "/supplier/create-promotion" &&
//         location.pathname !== "/supplier/product-details/:id" &&
//         <TopNavbar />}


//       <div className="flex flex-1">
//         {/* Render Sidebar only if not on specific routes */}
//         {location.pathname !== "/supplier/create-account" &&
//           location.pathname !== "/supplier/brand-details" &&
//           location.pathname !== "/supplier/create-promotion" &&
//           location.pathname !== "/supplier/product-details/:id" &&
//           <Sidebar />}

//         <div className="flex-1 p-4">
//           {/* Main content area */}
//           <Routes>
//             <Route path="create-account" element={<CreateAccount />} />
//             <Route path="brand-details" element={<BrandDetails />} />
//             <Route path="supplier-home" element={<SupplierHome />} />
//             <Route path="create-promotion" element={<CreatePromotion />} />
//             <Route path="/product-details/:id" element={<ProductDetails />} />

//             {/* Add additional routes here as needed */}
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SupplierRoutes;
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import CreateAccount from "./OnBoarding/CreateAccount";
import TopNavbar from "./TopNavbar";
import Sidebar from "./Sidebar";
import SupplierHome from "./SupplierDashboard/SupplierHome";
import BrandDetails from "./OnBoarding/BrandDetails";
import CreatePromotion from "./OnBoarding/CreatePromotion";
import ProductDetails from "./OnBoarding/ProductDetails";
import SelectRetailer from "./OnBoarding/SelectRetailer";
import PromotionPage from "./Promotion/PromotionPage";
import Ongoing from "./Promotion/Ongoing";
import Upcoming from "./Promotion/Upcoming";
import Draft from "./Promotion/Draft";
import Expired from "./Promotion/Expired";
import DashboardWithoutData from "./SupplierDashboard/DashboardWithoutData";
import Documentation from "./SupplierDashboard/Documentation";
import Notifications from "./Notifications";
import PlansPricing from "./Token/PlansPricing";
import SubscriptionPlan from "./Token/SubscriptionPlan";
import ProfileData from "./ProfileData/ProfileData";
import SkuManagement from "./SKU/SkuManagement";
import SelectProduct from "./Promotion/SelectProduct";
import CreatePromotionDetails from "./Promotion/CreatePromotionDetails";
import Retailer from "./Promotion/Retailer";
import PromotionDetails from "./Promotion/PromotionDetails";
import Accepted from "./Promotion/Detail/Accepted";
import Rejected from "./Promotion/Detail/Rejected";
import Pending from "./Promotion/Detail/Pending";
import ProductDetailPage from "./SKU/ProductDetailPage";
import SubscriptionDetails from "./OnBoarding/SubscriptionDetails";
import Report from "./Report/Report";
import BotokPage from "./BOTOKS/BotokPage";
import EventDetails from "./BOTOKS/EventDetails";
import PrizePremiumDetails from "./BOTOKS/PrizePremiumDetails";
import CommunityCampaignDetails from "./BOTOKS/CommunityCampaignDetails";
import ProductSku from "./BOTOKS/ProductSku";
import BrandActivationForm from "./BOTOKS/BrandActivationForm";

const SupplierRoutes = () => {
  const location = useLocation();

  // Check if the current path should hide TopNavbar and Sidebar
  const hideNavAndSidebar = [
    "/supplier/create-account",
    "/supplier/brand-details",
    "/supplier/create-promotion",
    "/supplier/select-retailer",
    "/supplier/subscription-details"
  ].some((path) => location.pathname.startsWith(path)) || location.pathname.includes("/supplier/product-details");

  return (
    <div className="h-screen flex flex-col">
      {/* Render TopNavbar only if not on specific routes */}
      {!hideNavAndSidebar && <TopNavbar />}

      <div className="flex flex-1">
        {/* Render Sidebar only if not on specific routes */}
        {!hideNavAndSidebar && <Sidebar />}

        <div className="flex-1 p-4">
          {/* Main content area */}
          <Routes>
            <Route path="create-account" element={<CreateAccount />} />
            <Route path="brand-details" element={<BrandDetails />} />
            <Route path="subscription-details" element={<SubscriptionDetails />} />
            <Route path="supplier-home" element={<SupplierHome />} />
            <Route path="sku-management" element={<SkuManagement />} />
            <Route path="report" element={<Report />} />
            <Route path="sku-management/product-details/:id" element={<ProductDetailPage />} />
            <Route path="supplier-home-without-data" element={<DashboardWithoutData />} />
            <Route path="subscription-plan" element={<SubscriptionPlan />} />
            <Route path="botok" element={<BotokPage />} />
            <Route path="botok" element={<BotokPage />} />
            <Route path="/botok/product-sku" element={<ProductSku />} />
            <Route
              path="/botok/product-sku/:id"
              element={<BrandActivationForm />}
            />


            <Route
              path="botok/product-sku/:id/event-details"
              element={<EventDetails />}
            />
            <Route
              path="botok/product-sku/:id/prize-premium-details"
              element={<PrizePremiumDetails />}
            />
            <Route
              path="botok/product-sku/:id/community-campaign-details"
              element={<CommunityCampaignDetails />}
            />
            <Route path="profile-data" element={<ProfileData />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="documentation" element={<Documentation />} />
            <Route path="create-promotion" element={<CreatePromotion />} />
            <Route path="product-details/:id" element={<ProductDetails />} />
            <Route path="select-retailer" element={<SelectRetailer />} />
            <Route path="promotion-management" element={<PromotionPage />} />
            <Route path="promotion-management/ongoing-promotion" element={<Ongoing />} />
            <Route path="promotion-management/upcoming-promotion" element={<Upcoming />} />
            <Route path="promotion-management/draft-promotion" element={<Draft />} />
            <Route path="promotion-management/expired-promotion" element={<Expired />} />
            <Route path="promotion-management/select-product" element={<SelectProduct />} />
            <Route path="/promotion-management/promotion-details/:promotionId" element={<PromotionDetails />} />
            <Route path="/promotion-management/promotion-details/:promotionId/accepted" element={<Accepted />} />

            <Route path="/promotion-management/promotion-details/:promotionId/rejected" element={<Rejected />} />
            <Route path="/promotion-management/promotion-details/:promotionId/pending" element={<Pending />} />
            <Route
              path="/promotion-management/select-product/create-promotion-details/:promotionId"
              element={<CreatePromotionDetails />}
            />
            <Route
              path="/promotion-management/select-product/create-promotion-details/:promotionId/select-retailer"
              element={<Retailer />}
            />


            {/* Add additional routes here as needed */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default SupplierRoutes;
