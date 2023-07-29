import { Rating } from "@mantine/core";
import React, { useState } from "react";
import Calculate from "./Caculate";

const InvoiceCard = (props) => {
  const [count, setCount] = useState(1);
       
  const { image, title, id, price, rating, increaseTotal,decreaseTotal } = props;
  const total = price * count;
  return (
    <div className="flex p-3 items-center rounded-md  gap-x-10 w-[600px] border-[1px] shadow-lg border-[#e0dede]">
      <div className="">
        <img src={image} className="w-[150px] h-[150px]" alt="" />
      </div>
      <div className="w-[400px]">
        <h2 className=" truncate">{title}</h2>
        <h2 className="py-1">${total}</h2>
        <Rating value={rating.rate} fractions={2} readOnly />
        <Calculate key={id} count={count} price={price} increaseTotal={increaseTotal} decreaseTotal={decreaseTotal} setCount={setCount} />
      </div>
    </div>
  );
};

export default InvoiceCard;
