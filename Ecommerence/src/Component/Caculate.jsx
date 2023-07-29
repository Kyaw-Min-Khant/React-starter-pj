import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Calculate = (props) => {
  const { count, setCount, increaseTotal, price, decreaseTotal } = props;
  const minus = () => {
    if (count > 1) {
      decreaseTotal(price);
      setCount(count - 1);
    } else count;
  };
  const plus = () => {
    increaseTotal(price);
    setCount(count + 1);
  };
  return (
    <div className=" pt-3">
      <div className="flex gap-x-3">
        <AiOutlinePlus
          onClick={plus}
          className="text-2xl shadow-md p-1 cursor-pointer"
        />
        <p className="text-lg pointer-events-auto">{count}</p>
        <AiOutlineMinus
          onClick={minus}
          className="text-2xl shadow-md p-1 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Calculate;
