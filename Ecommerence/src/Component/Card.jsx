import React from "react";
import { customState } from "../Context/StateContext";

const Card = (props) => {
  const { image, title, id, price } = props;
  const { dispatch } = customState();
  const storeClick = () => {
    dispatch({ type: "Add_to_cart", payload: props });
  };
  return (
    <div className=" w-[200px] bg-white rounded shadow-lg shadow-[#cdc9c9]">
      <div className="">
        <img
          src={image}
          className="w-[150px] pt-1 mx-auto block h-[180px]"
          alt=""
        />
      </div>
      <div className=" px-3 py-1">
        <h2 className="text-lg truncate">{title}</h2>
        <h2 className="text-sm">${price}</h2>
      </div>
      <button
        onClick={storeClick}
        className="py-1 px-4 font-semibold mb-2 block mx-auto bg-red-700 active:bg-red-500 hover:bg-red-500 text-center text-white"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
