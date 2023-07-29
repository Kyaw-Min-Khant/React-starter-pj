import React from "react";
import { customState } from "../Context/StateContext";
import Card from "./Card";

const Products = () => {
  const {
    state: { productsList },
  } = customState();
  console.log(productsList);
  return (
    <div className="container py-5 bg-[#dfd9d9] mx-auto justify-around flex flex-wrap gap-y-10 gap-x-14">
      {productsList?.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Products;
