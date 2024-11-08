// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ConnectWalletModal from "./SmallPages/ConnectWalletModal";
// import RoleSelectionModal from "./SmallPages/RoleSelectionModal";
// import UtilityTokenCard from "./SmallPages/UtilityTokenCard";
// import PaymentProcessCard from "./SmallPages/PaymentProcessCard";
// import ProfileInformation from "./Profile/ProfileInformation";
// import SubscriptionProfile from "./Profile/SubscriptionProfile";
// import SkuModal from "./SmallPages/SkuModal";
// import MySku from "./Profile/MySku";
// import UtilityToken from "./Profile/UtilityToken";
// import PersonalDetails from "./ProfileDetails/PersonalDetails";
// import ContactDetails from "./ProfileDetails/ContactDetails";
// import AdditionalInformation from "./ProfileDetails/AdditionalInformation";
// import Filter from "./Dashboard/Filter";
// // import ProductList from "./SkuList/ProductList";
// import Home from "./Layout/Home";
// import DashboardRoutes from "./Dashboard/DashboardRoutes";
// import PrivacyPreference from "./ProfileDetails/PrivacyPreference";
// import HomePage2 from "./NewHomePageCustomer/Homepage2";
// import TopSku from "./NewHomePageCustomer/TopSku";
// import HomeProductCard from "./NewHomePageCustomer/HomeProductCard";
// // import QrCard from "./NewHomePageCustomer/QrCard";
// import SessionExpiredModal from "./NewHomePageCustomer/SessionExpiredModal";
// import SessionTimeoutModal from "./NewHomePageCustomer/SessionTimeOutModal";
// import SkuOverlay from "./NewHomePageCustomer/SkuOverlay";
// import PaymentDetailsCard from "./NewHomePageCustomer/PaymentDetailsCard";

// import Setting from "./Profile/Setting/Setting";

// import FeedbackForm from "./Profile/Setting/FeedbackForm";
// import ContactSupport from "./Profile/Setting/ContactSupport";
// import OverlayQR from "./NewHomePageCustomer/OverlaySKU/OverlayQR";
// import OverlayMultiple from "./NewHomePageCustomer/OverlaySKU/OverlayMultiple";
// import PlansPricing from "./NewHomePageCustomer/PlansPricing";
// import AccountPage from "./Dashboard/Accountpage";
// import ExploreCategories from "./NewHomePageCustomer/Explore/ExploreCategories";
// import ExploreBrands from "./NewHomePageCustomer/Explore/ExploreBrands";
// import PasswordForm from "./Dashboard/PasswordForm";
// import RetailerNear from "./NewHomePageCustomer/RetailerNear";
// import AddStoreModal from "./Dashboard/Modals/AddStoreModal";
// import CreatePassword from "./ProfileDetails/CreatePassword";
// import AccountCredentialsPopup from "./NewHomePageCustomer/Modals/AccountCredentialsPopup";
// import Store from "./NewHomePageCustomer/StoreInformation/Store";
// // import NotificationsModals from "./NewHomePageCustomer/Modals/NotifcationModals";
// import LoginForm from "./ProfileDetails/LoginForm";

// function App() {
//   return (
//     <Router>
//       {/* <Navbar /> */}
//       {/* <NotificationsModals />  */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//       <Route path="/*" element={<Home />} />
//         {/* Like modals Start */}
//         <Route path="/connect-wallet" element={<ConnectWalletModal />} />
//         <Route path="/role-selection" element={<RoleSelectionModal />} />
//         {/* <Route path="/notification" element={<NotificationsModals />} /> */}

//         <Route path="/utility-token" element={<UtilityTokenCard />} />
//         <Route path="/payment-process" element={<PaymentProcessCard />} />
//         <Route path="/account-credentials" element={<AccountCredentialsPopup />} />

//         <Route path="/sku-modal" element={<SkuModal />} />
//         {/* Like modals End*/}
//         {/* Profile routing start */}

//         <Route path="/profile" element={<ProfileInformation />} />
//         <Route path="/subscription-profile" element={<SubscriptionProfile />} />
//         <Route path="/my-sku/*" element={<MySku />} />
//         <Route path="/setting/*" element={<Setting />} />
//         <Route path="/utility-tokens" element={<UtilityToken />} />

//         {/* Profile roting end */}
//         <Route path="/plan-pricing" element={<PlansPricing />} />
//     {/* Create user Profile Start */}
//     <Route path="/login-page" element={<LoginForm/>} />
//        <Route path="/privacy-preference" element={<PrivacyPreference />} />
//         <Route path="/personal-details" element={<PersonalDetails />} />
//         <Route path="/contact-details" element={<ContactDetails />} />
//         <Route
//           path="/additional-information"
//           element={<AdditionalInformation />}
//         />
//         <Route path="/create-password" element={<CreatePassword />} />

//  {/* Create user Profile end */}
//         {/* HOMEPAGE */}
//         <Route path="/homepage" element={<HomePage2 />} />
//         <Route path="/top-sku" element={<TopSku />} />
//         <Route path="/retailer-near" element={<RetailerNear />} />
//         <Route path="/catergories" element={<ExploreCategories />} />
//         <Route path="/explore-brands" element={<ExploreBrands />} />
//         <Route path="/home-product-card" element={<HomeProductCard />} />
//         {/* <Route path="/qr-card" element={<QrCard />} /> */}
//         <Route path="/session-expired" element={<SessionExpiredModal />} />
//         <Route path="/session-timeout" element={<SessionTimeoutModal />} />
//         <Route path="/sku-overlay" element={<SkuOverlay />} />
//         <Route path="/payment-card-details" element={<PaymentDetailsCard />} />

//             <Route path="/plan-pricing" element={<PlansPricing />} />

//         <Route path="/overlay" element={<OverlayQR />} />
//         <Route path="/overlay-multiple" element={<OverlayMultiple />} />
//         <Route path="/store" element={<Store />} />

//         {/* HOMEPAGE  END */}

//         <Route path="/filter" element={<Filter />} />

//         <Route path="/dashboard/*" element={<DashboardRoutes />} />

//         <Route path="account-page" element={<AccountPage />} />
//         <Route path="password-form" element={<PasswordForm />} />
//         <Route path="add-store-form" element={<AddStoreModal />} />
//         {/* <Route path="/dashboard" element={<DashboardRoutes />} /> */}
//         <Route path="/feedback" element={<FeedbackForm />} />
//         <Route path="/contact-support" element={<ContactSupport />} />
//       </Routes>
//       {/* <Footer /> */}
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import TopCategory from "./NewHomePageCustomer/TopCategory";
import TokensModal from "./NewHomePageCustomer/Modals/TokensModal";
import LinkedSku from "./NewHomePageCustomer/Modals/LinkedSku";
import NotificationsModals from "./NewHomePageCustomer/Modals/NotifcationModals";
import Loading from "./components/Loading";
const ConnectWalletModal = lazy(() =>
  import("./SmallPages/ConnectWalletModal")
);
const RoleSelectionModal = lazy(() =>
  import("./SmallPages/RoleSelectionModal")
);
const UtilityTokenCard = lazy(() => import("./SmallPages/UtilityTokenCard"));
const PaymentProcessCard = lazy(() =>
  import("./SmallPages/PaymentProcessCard")
);
const ProfileInformation = lazy(() => import("./Profile/ProfileInformation"));
const SubscriptionProfile = lazy(() => import("./Profile/SubscriptionProfile"));
const SkuModal = lazy(() => import("./SmallPages/SkuModal"));
const MySku = lazy(() => import("./Profile/MySku"));
const UtilityToken = lazy(() => import("./Profile/UtilityToken"));
const PersonalDetails = lazy(() => import("./ProfileDetails/PersonalDetails"));
const ContactDetails = lazy(() => import("./ProfileDetails/ContactDetails"));
const AdditionalInformation = lazy(() =>
  import("./ProfileDetails/AdditionalInformation")
);
const Filter = lazy(() => import("./Dashboard/Filter"));
const Home = lazy(() => import("./Layout/Home"));
const DashboardRoutes = lazy(() => import("./Dashboard/DashboardRoutes"));
const PrivacyPreference = lazy(() =>
  import("./ProfileDetails/PrivacyPreference")
);
const HomePage2 = lazy(() => import("./NewHomePageCustomer/Homepage2"));
const TopSku = lazy(() => import("./NewHomePageCustomer/TopSku"));
const HomeProductCard = lazy(() =>
  import("./NewHomePageCustomer/HomeProductCard")
);
const SessionExpiredModal = lazy(() =>
  import("./NewHomePageCustomer/SessionExpiredModal")
);
const SessionTimeoutModal = lazy(() =>
  import("./NewHomePageCustomer/SessionTimeOutModal")
);
const SkuOverlay = lazy(() => import("./NewHomePageCustomer/SkuOverlay"));
const PaymentDetailsCard = lazy(() =>
  import("./NewHomePageCustomer/PaymentDetailsCard")
);
const Setting = lazy(() => import("./Profile/Setting/Setting"));
const FeedbackForm = lazy(() => import("./Profile/Setting/FeedbackForm"));
const ContactSupport = lazy(() => import("./Profile/Setting/ContactSupport"));
const OverlayQR = lazy(() =>
  import("./NewHomePageCustomer/OverlaySKU/OverlayQR")
);
const OverlayMultiple = lazy(() =>
  import("./NewHomePageCustomer/OverlaySKU/OverlayMultiple")
);
const PlansPricing = lazy(() => import("./NewHomePageCustomer/PlansPricing"));

const ExploreCategories = lazy(() =>
  import("./NewHomePageCustomer/Explore/ExploreCategories")
);
const ExploreBrands = lazy(() =>
  import("./NewHomePageCustomer/Explore/ExploreBrands")
);

const RetailerNear = lazy(() => import("./NewHomePageCustomer/RetailerNear"));

const CreatePassword = lazy(() => import("./ProfileDetails/CreatePassword"));
const AccountCredentialsPopup = lazy(() =>
  import("./NewHomePageCustomer/Modals/AccountCredentialsPopup")
);
const Store = lazy(() =>
  import("./NewHomePageCustomer/StoreInformation/Store")
);
const LoginForm = lazy(() => import("./ProfileDetails/LoginForm"));
import OperationalRoutes from "./RetailerSide/Operational/OperationalRoutes";
import SupportWorkerRoutes from "./RetailerSide/SupportWorker/SupportWorkerRoutes";
import SupplierRoutes from "./SupplierSide/SupplierRoutes";

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />

          {/* Like modals Start */}
          <Route path="/connect-wallet" element={<ConnectWalletModal />} />
          <Route path="/role-selection" element={<RoleSelectionModal />} />
          <Route path="/utility-token" element={<UtilityTokenCard />} />
          <Route path="/payment-process" element={<PaymentProcessCard />} />
          <Route
            path="/account-credentials"
            element={<AccountCredentialsPopup />}
          />
          <Route path="/sku-modal" element={<SkuModal />} />
          <Route path="/notifications" element={<NotificationsModals />} />
          {/* <Route path="/token" element={<TokensModal />} /> */}
          <Route path="/linked-sku" element={<LinkedSku />} />
          {/* Like modals End*/}

          {/* Profile routing start */}
          <Route path="/profile" element={<ProfileInformation />} />
          <Route
            path="/subscription-profile"
            element={<SubscriptionProfile />}
          />
          <Route path="/my-sku/*" element={<MySku />} />
          <Route path="/setting/*" element={<Setting />} />
          <Route path="/utility-tokens" element={<UtilityToken />} />
          {/* Profile routing end */}

          <Route path="/plan-pricing" element={<PlansPricing />} />

          {/* Create user Profile Start */}
          <Route path="/login-page" element={<LoginForm />} />
          <Route path="/privacy-preference" element={<PrivacyPreference />} />
          <Route path="/personal-details" element={<PersonalDetails />} />
          <Route path="/contact-details" element={<ContactDetails />} />
          <Route
            path="/additional-information"
            element={<AdditionalInformation />}
          />
          <Route path="/create-password" element={<CreatePassword />} />
          {/* Create user Profile End */}

          {/* HOMEPAGE */}
          <Route path="/homepage" element={<HomePage2 />} />
          <Route path="/top-sku" element={<TopSku />} />
          <Route path="/top-category" element={<TopCategory />} />
          <Route path="/retailer-near" element={<RetailerNear />} />
          <Route path="/categories" element={<ExploreCategories />} />
          <Route path="/explore-brands" element={<ExploreBrands />} />
          <Route path="/home-product-card" element={<HomeProductCard />} />
          <Route path="/session-expired" element={<SessionExpiredModal />} />
          <Route path="/session-timeout" element={<SessionTimeoutModal />} />
          <Route path="/sku-overlay" element={<SkuOverlay />} />
          <Route
            path="/payment-card-details"
            element={<PaymentDetailsCard />}
          />
          <Route path="/overlay" element={<OverlayQR />} />
          <Route path="/overlay-multiple" element={<OverlayMultiple />} />
          <Route path="/store" element={<Store />} />
          {/* HOMEPAGE End */}

          <Route path="/filter" element={<Filter />} />
          <Route path="/dashboard/*" element={<DashboardRoutes />} />
          <Route
            path="/operational-manager/*"
            element={<OperationalRoutes />}
          />
          <Route path="/support-worker/*" element={<SupportWorkerRoutes />} />
          <Route path="/supplier/*" element={<SupplierRoutes />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/contact-support" element={<ContactSupport />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
