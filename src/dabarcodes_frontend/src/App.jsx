

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProductGrid from './SkuList/ProductGrid';
import PromotionalCoupon from './SkuList/PromotionalCoupon';
import SkuDetails from './SkuList/SkuDetails';
import SkuList1 from './SkuList/SkuList1';
import ConnectWalletModal from './SmallPages/ConnectWalletModal';
import RoleSelectionModal from './SmallPages/RoleSelectionModal';
import UtilityTokenCard from './SmallPages/UtilityTokenCard';
import PaymentProcessCard from './SmallPages/PaymentProcessCard';
import CouponPopup from './SmallPages/CouponPopup';
import ExploreCategory from './ExploreByCategory/ExploreCategory';
import PromotionDetails from './SkuList/PromotionDetails';
import ProfileInformation from './Profile/ProfileInformation';
import SubscriptionProfile from './Profile/SubscriptionProfile';
import HomePage from './HomePageCustomer/HomePage';
import SkuModal from './SmallPages/SkuModal';
import MySku from './Profile/MySku';
import ProfilePromotionalCoupons from './Profile/ProfilePromotionalCoupon';
import UtilityToken from './Profile/UtilityToken';

import SubscriptionPlans from './Layout/SubscriptionPlans';

import CreateAccountForm from './ProfileDetails/CreateAccountForm';

import PersonalDetails from './ProfileDetails/PersonalDetails';
import ContactDetails from './ProfileDetails/ContactDetails';
import AdditionalInformation from './ProfileDetails/AdditionalInformation';
import Filter from './Dashboard/Filter';
import ProductList from './SkuList/ProductList';


import Home from './Layout/Home';
import DashboardRoutes from './Dashboard/DashboardRoutes';
import PrivacyPreference from './ProfileDetails/PrivacyPreference';
import HomePage2 from './NewHomePageCustomer.jsx/Homepage2';
import TopSku from './NewHomePageCustomer.jsx/TopSku';
import Explore from './NewHomePageCustomer.jsx/Explore';
import ProductCard from './SkuList/ProductCard';
import HomeProductCard from './NewHomePageCustomer.jsx/HomeProductCard';
import CreateProfile from './CreateAccount/CreateProfile';
import QrCard from './NewHomePageCustomer.jsx/QrCard';
import SessionExpiredModal from './NewHomePageCustomer.jsx/SessionExpiredModal';
import SessionTimeoutModal from './NewHomePageCustomer.jsx/SessionTimeOutModal';
import SkuOverlay from './NewHomePageCustomer.jsx/SkuOverlay';
import PaymentDetailsCard from './NewHomePageCustomer.jsx/PaymentDetailsCard';
import PlanCard from './NewHomePageCustomer.jsx/PlanCard';
import Setting from './Profile/Setting/Setting';

import { FaEyeDropper } from 'react-icons/fa';
import FeedbackForm from './Profile/Setting/FeedbackForm';
import ContactSupport from './Profile/Setting/ContactSupport';
import OverlayQR from './NewHomePageCustomer.jsx/OverlaySKU/OverlayQR';
import OverlayMultiple from './NewHomePageCustomer.jsx/OverlaySKU/OverlayMultiple';
import ProfilePage from './Profile/ProfilePage';


function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/product-grid" element={<ProductGrid />} />
        <Route path="/promotional-coupon" element={<PromotionalCoupon />} />
        <Route path="/sku-details" element={<SkuDetails />} />
        <Route path="/sku-list" element={<SkuList1 />} />
        <Route path="/explore-category" element={<ExploreCategory />} />
        <Route path="/promotion-details" element={<PromotionDetails />} />
        <Route path="/connect-wallet" element={<ConnectWalletModal />} />
        <Route path="/role-selection" element={<RoleSelectionModal />} />
        <Route path="/utility-token" element={<UtilityTokenCard />} />
        <Route path="/payment-process" element={<PaymentProcessCard />} />
        <Route path="/coupon-popup" element={<CouponPopup />} />
        <Route path="/sku-modal" element={<SkuModal />} />
{/* Profile roting start */}

<Route path="/create-profile" element={<CreateProfile/>} />
        <Route path="/profile" element={<ProfileInformation />} />
        <Route path="/subscription-profile" element={<SubscriptionProfile />} />
        <Route path="/my-sku" element={<MySku />} />
        <Route path="/profile-promotional-coupons" element={<ProfilePromotionalCoupons />} />
        <Route path="/utility-tokens" element={<UtilityToken />} />
{/* Profile roting end */}
        {/* <Route path="/notifications" element={<Notifications />} /> */}
        <Route path="/subscription-plans" element={<SubscriptionPlans />} />
        {/* <Route path="/promotion-management" element={<PromotionManagement />} /> */}
        <Route path="/create-account" element={<CreateAccountForm />} />
        <Route path="/privacy-preference" element={<PrivacyPreference/>} />
        <Route path="/personal-details" element={<PersonalDetails />} />
        <Route path="/contact-details" element={<ContactDetails />} />
        {/* HOMEPAGE2 */}
        <Route path="/homepage2" element={<HomePage2 />} />
        <Route path="/top-sku" element={<TopSku />} />
         <Route path="/explore" element={<Explore />} />
         <Route path="/home-product-card" element={<HomeProductCard />} />
         <Route path="/qr-card" element={<QrCard />} />
         <Route path="/session-expired" element={<SessionExpiredModal />} />
         <Route path="/session-timeout" element={<SessionTimeoutModal/>} />
         <Route path="/sku-overlay" element={<SkuOverlay/>} />
         <Route path="/payment-card-details" element={<PaymentDetailsCard/>} />
         <Route path="/plan-card" element={<PlanCard/>} />
         <Route path="/setting/*" element={<Setting/>} />
         <Route path="/overlay" element={<OverlayQR/>} />
         <Route path="/overlay-multiple" element={<OverlayMultiple/>} />
     

  
         
         {/* HOMEPAGE 2 END */}
        <Route path="/additional-information" element={<AdditionalInformation />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
        <Route path="/*" element={<DashboardRoutes />} />
        {/* <Route path="/dashboard" element={<DashboardRoutes />} /> */}
        <Route path="/feedback" element={<FeedbackForm/>} />
        <Route path="/contact-support" element={<ContactSupport/>} />


      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
