import React from "react";
import {Route, Routes, Navigate, useLocation} from "react-router-dom";

import Notifications from "./Notifications";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar"; // Import TopNavbar

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

const OperationalRoutes = () => {
  const location = useLocation(); // Get current route location

  return (
    <div className="h-screen flex flex-col">
      {/* Top Navbar should be outside the flex-row containing Sidebar and content */}
      {location.pathname !== "/operational-manager/admin-create" &&
        location.pathname !== "/operational-manager/email-verification" &&
        location.pathname !== "/operational-manager/verification-page" &&
        location.pathname !== "/operational-manager/admin-login" &&
        location.pathname !== "/operational-manager/admin-password" && (
          <TopNavbar />
        )}

      <div className="flex flex-1">
        {/* Render Sidebar only if not on specific routes */}
        {location.pathname !== "/operational-manager/admin-create" &&
          location.pathname !== "/operational-manager/email-verification" &&
          location.pathname !== "/operational-manager/verification-page" &&
          location.pathname !== "/operational-manager/admin-login" &&
          location.pathname !== "/operational-manager/admin-password" && (
            <Sidebar />
          )}

        <div className="flex-1 p-4">
          {/* Main content area */}
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/operational-manager/getting-started" />}
            />
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

            {/* Store Operational Manager routes */}
            <Route
              path="/store-operational-manager/:section"
              element={<StoreDashboard />}
            />
            <Route
              path="/store-operational-manager/store-details-page"
              element={<StoreDetailsPage />}
            />
            <Route
              path="/store-operational-manager/store-products-details-page"
              element={<StoreProductsDetailsPage />}
            />
            <Route
              path="/store-operational-manager/store-employee-details-page"
              element={<StoreEmployeePage />}
            />
            <Route
              path="/store-operational-manager/store-analytics-reports-page"
              element={<StoreAnalyticsReportsPage />}
            />
            <Route
              path="/store-operational-manager/store-supplier-details-page"
              element={<StoreSupplierPage />}
            />
            <Route
              path="/store-operational-manager/store-promotion-details-page"
              element={<StorePromotionDetailsPage />}
            />

            {/* Other routes */}
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

export default OperationalRoutes;
