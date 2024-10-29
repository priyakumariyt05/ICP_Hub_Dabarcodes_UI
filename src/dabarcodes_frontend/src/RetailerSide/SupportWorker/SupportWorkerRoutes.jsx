import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Notifications from "./Notifications";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar"; 
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

const SupportWorkerRoutes = () => {
  const location = useLocation();

  return (
    <div className="h-screen flex flex-col">
      {location.pathname !== "/support-worker/admin-create" &&
        location.pathname !== "/support-worker/email-verification" &&
        location.pathname !== "/support-worker/verification-page" &&
        location.pathname !== "/support-worker/admin-login" &&
        location.pathname !== "/support-worker/admin-password" && <TopNavbar />}

      <div className="flex flex-1">
        {location.pathname !== "/support-worker/admin-create" &&
          location.pathname !== "/support-worker/email-verification" &&
          location.pathname !== "/support-worker/verification-page" &&
          location.pathname !== "/support-worker/admin-login" &&
          location.pathname !== "/support-worker/admin-password" && <Sidebar />}

        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Navigate to="/support-worker/getting-started" />} />
            <Route path="getting-started" element={<Dashboard />} />
            <Route path="home-dashboard" element={<HomeDashboard />} />
            <Route path="all-product" element={<AllProduct />} />
            <Route path="product-promotion" element={<ProductOnPromotion />} />
            <Route path="supplier-list" element={<SupplierList />} />
            <Route path="promotion-request" element={<PromotionList />} />
            <Route path="store" element={<Store />} />
            <Route path="role" element={<Role />} />
            <Route path="product-performance" element={<ProductPerformation />} />
            <Route path="story-broads" element={<StoryBroads />} />
            <Route path="number-of-product-sold" element={<NumberOfProductSoldDetails />} />
            <Route path="story-broads-product" element={<StoryBroadProduct />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="profile-data" element={<ProfileData />} />
            <Route path="plan-pricing" element={<PlansPricing />} />
            <Route path="subscription-plan" element={<SubscriptionPlan />} />
            <Route path="store-dashboard" element={<StoreDashboard />} />
            <Route path="/support-worker/store-dashboard/:section" element={<StoreDashboard />} />
            <Route path="/store-dashboard/store-details-page" element={<StoreDetailsPage />} />
            <Route path="/store-dashboard/store-products-details-page" element={<StoreProductsDetailsPage />} />
            <Route path="/store-dashboard/store-employee-details-page" element={<StoreEmployeePage />} />
            <Route path="/store-dashboard/store-analytics-reports-page" element={<StoreAnalyticsReportsPage />} />
            <Route path="/store-dashboard/store-supplier-details-page" element={<StoreSupplierPage />} />
            <Route path="/store-dashboard/store-promotion-details-page" element={<StorePromotionDetailsPage />} />
            <Route path="admin-create" element={<AccountPage />} />
            <Route path="email-verification" element={<EmailVerificationPage />} />
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

export default SupportWorkerRoutes;
