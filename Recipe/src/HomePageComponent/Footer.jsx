import React from "react";

const Footer = () => {
  return (
    <div className=" bg-[#ff6a00] p-10">
      <div className="container mx-auto flex justify-around">
        <div className="w-[500px] flex flex-col gap-y-4">
          <h2 className="text-3xl font-bold font-display text-white">Panda</h2>
          <p className="text-[#deded3]  text-sm">
            Solution for easy and flexible getting meals for the household.You
            can trust us anywhere through this platform
          </p>
          <p className="text-sm text-[#deded3]">©2022 Made with by Panda</p>
        </div>
        <div className="">
          <h2 className="text-xl font-bold pb-2 font-display text-white">
            About
          </h2>
          <ul>
            <li className="text-sm text-[#deded3] pb-3">Our Company</li>
            <li className="text-sm text-[#deded3] pb-3">Career</li>
            <li className="text-sm text-[#deded3] pb-3">Investors Relations</li>
            <li className="text-sm text-[#deded3] pb-3">Social Impact</li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-xl font-bold font-display text-white">Social</h2>
          <ul className="">
            <li className=""></li>
            <li className=""></li>
            <li className=""></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
