import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
const FourthSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="flex justify-around px-5 container mx-auto h-screen items-center">
      <div
        data-aos="zoom-in-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
        className="w-[600px]"
      >
        <h2 className="text-4xl font-bold font-display text-[#ff6b01]">
          About us
        </h2>
        <p className=" text-lg leading-[30px] pt-5 dark:text-[#bfbcbc] hover:text-[#141717] duration-[0.5s] font-sans  tracking-widest text-[#3c4444]">
          I make delicious healthy meals for busy people who want to enjoy home
          made food without the hassle of cooking. Why would you cook when you
          don't have to? The Hot Plate makes it easy to eat your favorite home
          cooked food anywhere you want. You deserve to eat great food, whether
          you're at home or on the go. We'll help you find unique meals wherever
          you are. With our app, you never have to settle for unhealthy,
          expensive takeaway food again.
        </p>
      </div>
      <div
        data-aos="zoom-out"
        data-aos-offset="200"
        data-aos-easing="linear"
        className=""
      >
        <img
          src="https://foodapp-by-eniola.netlify.app/static/media/FoodImage.ccbc8a18b3ce6a6bf1f5.webp"
          alt=""
          className="w-[500px]"
        />
      </div>
    </div>
  );
};

export default FourthSection;
