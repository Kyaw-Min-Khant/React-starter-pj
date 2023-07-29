import React, { useEffect } from "react";
import { AiOutlineOrderedList } from "react-icons/ai";
import { MdDeliveryDining } from "react-icons/md";
import { BsAwardFill } from "react-icons/bs";
import "aos/dist/aos.css";
import Aos from "aos";
const SecondSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className=" flex flex-col justify-evenly items-center  h-screen">
      <div
        data-aos="fade-down"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="text-center"
      >
        <h2 className="text-4xl text-[#F97B22] font-sans font-semibold">
          Why choose us
        </h2>
        <p className="text-lg font-serif">
          This is what makes our product different
        </p>
      </div>
      <div className=" flex flex-wrap justify-evenly gap-8">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="w-[300px] p-3 bg-white"
        >
          <AiOutlineOrderedList className=" text-6xl text-[#ff7b1d] mx-auto" />
          <div className="text-center mt-3">
            <h2 className=" text-lg font-semibold font-serif">Easy to Order</h2>
            <p className=" text-sm font-serif mt-3 px-3 tracking-wider leading-6 text-[#454545]">
              Order food at a single click and select all food to order at any
              poin in time and at ease and comfort
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="w-[300px] p-3 bg-white"
        >
          <MdDeliveryDining className=" text-6xl text-[#ff7b1d] mx-auto" />
          <div className="text-center mt-3">
            <h2 className=" text-lg font-semibold font-serif">fast delivery</h2>
            <p className=" text-sm font-serif mt-3 px-3 tracking-wider leading-6 text-[#454545]">
              food delivery fast and reliable and get delivered at deliivery
              time and location any day, any time
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="w-[300px] p-3 bg-white"
        >
          <BsAwardFill className=" text-6xl text-[#ff7b1d] mx-auto" />
          <div className="text-center mt-3">
            <h2 className=" text-lg font-semibold font-serif">100% quality</h2>
            <p className=" text-sm font-serif mt-3 px-3 tracking-wider leading-6 text-[#454545]">
              We provide quality food for you and your loved ones for health and
              so onnnnnn and for wellness
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
