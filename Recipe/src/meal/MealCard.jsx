import React from "react";

const MealCard = ({ title, id, image }) => {
  return (
    <div className="rounded-md border-[1px] shadow w-[180px]">
      <img src={image} alt="" className="h-[180px] p-0 rounded-md" />
      <div className="">
        <h2 className="text-sm truncate">{title}</h2>
      </div>
    </div>
  );
};

export default MealCard;
