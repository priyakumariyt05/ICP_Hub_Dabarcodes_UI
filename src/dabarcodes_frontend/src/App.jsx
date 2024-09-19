import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConnectWalletModal from "./SmallPages/ConnectWalletModal";
import RoleSelectionModal from "./SmallPages/RoleSelectionModal";
import UtilityTokenCard from "./SmallPages/UtilityTokenCard";
import PaymentProcessCard from "./SmallPages/PaymentProcessCard";
import ProfileInformation from "./Profile/ProfileInformation";
import SubscriptionProfile from "./Profile/SubscriptionProfile";
import SkuModal from "./SmallPages/SkuModal";
import MySku from "./Profile/MySku";
import UtilityToken from "./Profile/UtilityToken";
import PersonalDetails from "./ProfileDetails/PersonalDetails";
import ContactDetails from "./ProfileDetails/ContactDetails";
import AdditionalInformation from "./ProfileDetails/AdditionalInformation";
import Filter from "./Dashboard/Filter";
import ProductList from "./SkuList/ProductList";
import Home from "./Layout/Home";
import DashboardRoutes from "./Dashboard/DashboardRoutes";
import PrivacyPreference from "./ProfileDetails/PrivacyPreference";
import HomePage2 from "./NewHomePageCustomer.jsx/Homepage2";
import TopSku from "./NewHomePageCustomer.jsx/TopSku";
import HomeProductCard from "./NewHomePageCustomer.jsx/HomeProductCard";
import QrCard from "./NewHomePageCustomer.jsx/QrCard";
import SessionExpiredModal from "./NewHomePageCustomer.jsx/SessionExpiredModal";
import SessionTimeoutModal from "./NewHomePageCustomer.jsx/SessionTimeOutModal";
import SkuOverlay from "./NewHomePageCustomer.jsx/SkuOverlay";
import PaymentDetailsCard from "./NewHomePageCustomer.jsx/PaymentDetailsCard";

import Setting from "./Profile/Setting/Setting";

import FeedbackForm from "./Profile/Setting/FeedbackForm";
import ContactSupport from "./Profile/Setting/ContactSupport";
import OverlayQR from "./NewHomePageCustomer.jsx/OverlaySKU/OverlayQR";
import OverlayMultiple from "./NewHomePageCustomer.jsx/OverlaySKU/OverlayMultiple";
import PlansPricing from "./NewHomePageCustomer.jsx/PlansPricing";
import AccountPage from "./Dashboard/Accountpage";
import ExploreCategories from "./NewHomePageCustomer.jsx/Explore/ExploreCategories";
import ExploreBrands from "./NewHomePageCustomer.jsx/Explore/ExploreBrands";
import PasswordForm from "./Dashboard/PasswordForm";
import RetailerNear from "./NewHomePageCustomer.jsx/RetailerNear";
import AddStoreModal from "./Dashboard/Modals/AddStoreModal";
import CreatePassword from "./ProfileDetails/CreatePassword";
import AccountCredentialsPopup from "./NewHomePageCustomer.jsx/Modals/AccountCredentialsPopup";
import Store from "./NewHomePageCustomer.jsx/StoreInformation/Store";




function App() {
  return (
    <Router>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/*" element={<Home />} />
        {/* Like modals Start */}
        <Route path="/connect-wallet" element={<ConnectWalletModal />} />
        <Route path="/role-selection" element={<RoleSelectionModal />} />
        <Route path="/utility-token" element={<UtilityTokenCard />} />
        <Route path="/payment-process" element={<PaymentProcessCard />} />
        <Route path="/account-credentials" element={<AccountCredentialsPopup />} />
  
        <Route path="/sku-modal" element={<SkuModal />} />
        {/* Like modals End*/}
        {/* Profile routing start */}

    
        <Route path="/profile" element={<ProfileInformation />} />
        <Route path="/subscription-profile" element={<SubscriptionProfile />} />
        <Route path="/my-sku/*" element={<MySku />} />
        <Route path="/setting/*" element={<Setting />} />
        <Route path="/utility-tokens" element={<UtilityToken />} />
        
        {/* Profile roting end */}
        <Route path="/plan-pricing" element={<PlansPricing />} />
    {/* Create user Profile Start */}
       <Route path="/privacy-preference" element={<PrivacyPreference />} />
        <Route path="/personal-details" element={<PersonalDetails />} />
        <Route path="/contact-details" element={<ContactDetails />} />
        <Route
          path="/additional-information"
          element={<AdditionalInformation />}
        />
        <Route path="/create-password" element={<CreatePassword />} />

 {/* Create user Profile end */}
 
        {/* HOMEPAGE */}
        <Route path="/homepage" element={<HomePage2 />} />
        <Route path="/top-sku" element={<TopSku />} />
        <Route path="/retailer-near" element={<RetailerNear />} />
        <Route path="/catergories" element={<ExploreCategories />} />
        <Route path="/explore-brands" element={<ExploreBrands />} />
        <Route path="/home-product-card" element={<HomeProductCard />} />
        {/* <Route path="/qr-card" element={<QrCard />} /> */}
        <Route path="/session-expired" element={<SessionExpiredModal />} />
        <Route path="/session-timeout" element={<SessionTimeoutModal />} />
        <Route path="/sku-overlay" element={<SkuOverlay />} />
        <Route path="/payment-card-details" element={<PaymentDetailsCard />} />
        
            <Route path="/plan-pricing" element={<PlansPricing />} />
       
        <Route path="/overlay" element={<OverlayQR />} />
        <Route path="/overlay-multiple" element={<OverlayMultiple />} />
        <Route path="/store" element={<Store />} />

        {/* HOMEPAGE  END */}
     
        <Route path="/filter" element={<Filter />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
        {/* <Route path="/*" element={<DashboardRoutes />} /> */}
        <Route path="account-page" element={<AccountPage />} />
        <Route path="password-form" element={<PasswordForm />} />
        <Route path="add-store-form" element={<AddStoreModal />} />
        {/* <Route path="/dashboard" element={<DashboardRoutes />} /> */}
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/contact-support" element={<ContactSupport />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
