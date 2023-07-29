import React, { useState } from "react";
import { customState } from "../Context/StateContext";
import InvoiceCard from "./InvoiceCard";

const Invoice = () => {
  const {
    state: { addToCart },
  } = customState();
  console.log(addToCart);
  const onePrice = addToCart.reduce((pv, cv) => pv + cv.price, 0);
  const [mainTotal, setMainTotal] = useState(onePrice);
  const increaseTotal = (price) => {
    setMainTotal(mainTotal + price);
  };
  const decreaseTotal = (price) => {
    setMainTotal(mainTotal - price);
  };
  console.log(mainTotal);
  return (
    <div className=" min-h-screen ">
      <div className="">
        <div className="flex-col gap-y-10 flex justify-around">
          {addToCart?.map((item) => (
            <InvoiceCard
              mainTotal={mainTotal}
              increaseTotal={increaseTotal}
              decreaseTotal={decreaseTotal}
              {...item}
              key={item.id}
            />
          ))}
        </div>
        <h2 className="">{mainTotal.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Invoice;
