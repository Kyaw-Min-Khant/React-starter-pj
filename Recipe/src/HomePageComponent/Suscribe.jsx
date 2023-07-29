import React from "react";

const Suscribe = () => {
  return (
    <div className="flex flex-col py-5  items-center gap-3">
      <h2 className=" font-display text-[#ff6a00] text-4xl font-bold">
        Subscribe to our Newsletter
      </h2>
      <h2 className="font-sans text-lg font-medium">
        Enter your Email address to get daily offers and news
      </h2>
      <div className="flex justify-between pt-5 gap-x-5">
        <input
          type="text"
          className="w-[400px] h-[50px] border-[1px] border-[#ff6a00]"
        />
        <button className="text-xl font-display font-semibold text-white px-4 py-2 bg-[#ff6a00]">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Suscribe;
