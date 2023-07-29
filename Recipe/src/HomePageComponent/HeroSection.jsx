import React, { useEffect } from "react";
import HeroAnimation from "./HeroAnimation";
import Aos from "aos";
import "aos/dist/aos.css";
const HeroSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="flex dark:bg-[#444242] bg-white justify-around px-[70px] flex-wrap  items-center ">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="linear"
        className=" mt-[100px]"
      >
        <h2 className="text-xl py-1 font-display font-bold">Panda</h2>
        <h2 className="text-5xl py-1 font-display leading-[65px] font-semibold">
          Enjoy
          <span className="text-[#ff6b01] mx-2">
            home made <br /> meals
          </span>
          far away from
          <br /> home
        </h2>
        <h2 className="text-lg font-display font-medium  py-1">
          Helping you enjoy comfortable and <br /> healthy food anywhere and
          anytime on the go
        </h2>
        <button className="px-3 py-1 mt-2 text-white font-serif font-medium  rounded bg-[#F97B22]">
          Recipes
        </button>
      </div>
      <HeroAnimation />
    </div>
  );
};

export default HeroSection;
