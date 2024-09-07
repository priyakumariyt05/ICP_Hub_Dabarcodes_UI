import "../components/style/Home.css";
import TestimonialSection from "./HomeComponents/TestimonialSection";
import PartnerSection from "./HomeComponents/PartnerSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Subscribe from "./HomeComponents/Subscribe";
import PromotionPage from "./HomeComponents/PromotionPage";
import About from "./HomeComponents/About";
import Hero from "./HomeComponents/Hero";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <PromotionPage />
      <Subscribe />
      <TestimonialSection />
      <PartnerSection />
      <Footer />
    </>
  );
};

export default Home;
