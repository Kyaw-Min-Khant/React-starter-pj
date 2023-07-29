import React from "react";
import { SiLitecoin } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";
import { customState } from "../Context/StateContext";
import { Link } from "react-router-dom";
const Nav = () => {
  const {
    state: { addToCart },
  } = customState();
  return (
    <div>
      <div className=" flex justify-between container mx-auto px-10 py-3">
        <div className="">
          <SiLitecoin className=" text-3xl " />
        </div>
        <form>
          <input type="text" className=" w-[300px]" />
        </form>
        <Link to="/invoice">
          <div className="relative">
            <FaShoppingCart className="text-2xl" />
            <span className="absolute bg-red-700 text-white px-1 text-sm right-[-7px] rounded-lg top-[-12px]">
              {addToCart.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
