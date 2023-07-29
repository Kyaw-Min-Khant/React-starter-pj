import React from "react";
import "./third.css";
import Card from "./Card";
import { useMealQuery } from "../services/grocery";
const ThirdSection = () => {
  const { data: items } = useMealQuery();
  console.log(items?.results);
  return (
    <div className=" flex overflow-hidden bg-[#c1570b] p-5">
      {items?.results?.map((item) => (
        <div key={item.id} className=" mx-3 box">
          <Card {...item} />
        </div>
      ))}
    </div>
  );
};

export default ThirdSection;
