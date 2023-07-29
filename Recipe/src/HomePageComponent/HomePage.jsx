import React from "react";
import HeroSection from "./HeroSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";
import Suscribe from "./Suscribe";
import Footer from "./Footer";
import Navigation from "./Navigation";
import FancyButton from "./FancyButton";
const HomePage = () => {
  return (
    <div className="dark:bg-[#444242] bg-[#FFF8DE]">
      <Navigation />
      <FancyButton />
      <HeroSection id="box1" />
      <SecondSection id="box2" />
      <ThirdSection id="box3" />
      <FourthSection id="box4" />
      <FifthSection id="box5" />
      <Suscribe />
      <Footer />
    </div>
  );
};

export default HomePage;
