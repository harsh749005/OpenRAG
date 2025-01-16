import React from "react";
import HeroSection from "../components/HeroSection";
import Feature from "../components/Feature";
import Section from "../components/Section";
import Work from "../components/Work";
import Founders from "../components/Founders";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-[100%] h-max pb-5 bg-black relative">
      <HeroSection />
      <Feature />
      <Section />
      <Work />
      <Founders />
      <Footer />
    </div>
  );
};

export default Home;
