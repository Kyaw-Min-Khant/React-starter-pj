import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
const FifthSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="container mx-auto gap-y-10 flex flex-col justify-between">
      <div
        data-aos="fade-down"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h2 className="text-4xl py-1 text-[#ff6a00] font-bold text-center font-display ">
          Get our mobile app
        </h2>
        <h2 className="text-xl py-1 text-center font-sans">
          Enjoy better experience
        </h2>
      </div>
      <div className="flex justify-around ">
        <div
          data-aos="zoom-out-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-out"
          className="w-[500px] pt-[30px]"
        >
          <h2 className="text-lg dark:text-[#bfbcbc] leading-[30px] hover:text-[#141717] duration-[0.5s] font-sans  tracking-widest text-[#3c4444]">
            With our app, you never have to settle for unhealthy, expensive
            takeaway food again. From spicy noodles to fresh salads, we'll
            deliver anywhere in your city. Get tasty meals in just 30 minutes.
            It's simple. We make it easy for you to make smart business
            decisions fast. Whether you have a busy schedule or just enjoy
            home-cooked food,
          </h2>
        </div>
        <div
          data-aos="zoom-out-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-out"
          className=""
        >
          <img
            src="https://foodapp-by-eniola.netlify.app/static/media/mobile.57ecbe01422877502c86.webp"
            alt=""
            className="h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
