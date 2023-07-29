import React, { useEffect } from "react";
import Lottie from "lottie-react";
import HeroSection from "./Hero.json";
import "aos/dist/aos.css";
import Aos from "aos";
const HeroAnimation = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos="zoom-in"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className="w-[500px]"
    >
      <Lottie animationData={HeroSection} />
    </div>
  );
};

export default HeroAnimation;
