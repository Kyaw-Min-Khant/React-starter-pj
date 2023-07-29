import React from "react";

const Card = ({ image, id, title }) => {
  return (
    <div>
      <div className="bg-[#FFFAF4] rounded-md  shadow w-[250px]">
        <img src={image} alt="" className="h-[250px] p-0 rounded-md" />
        <div className="p-3">
          <h2 className="text-sm truncate font-semibold">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
