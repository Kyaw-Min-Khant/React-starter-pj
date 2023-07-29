import React, { useState } from "react";
import { SiFoodpanda } from "react-icons/si";
import { Link } from "react-router-dom";
import Lightmood from "./Lightmood";
import { useContextProvider } from "../LightDark/DarkcontextProvider";
import { useRandomRecipeMutation } from "../services/mealApi";
const MealNav = () => {
  const [recipeData, setData] = useState("");
  const { darkMode, handleThemeSwitch } = useContextProvider();
  const {} = useRandomRecipeMutation(recipeData);
  console.log(recipeData);
  return (
    <div className="dark:bg-[#615a5a] bg-[#F97B22] py-2 ">
      <div className="container mx-auto px-5 flex justify-between">
        <Link to="/">
          <div className="">
            <SiFoodpanda className="text-3xl" />
          </div>
        </Link>
        <div className="">
          <input
            onChange={(e) => setData(e.target.value)}
            value={recipeData}
            type="text"
            placeholder="Search Recipe..."
            className="w-[300px] py-1 rounded-lg bg-slate-200 border-[1px] border-slate-500"
          />
        </div>
        <div className="">
          <button onClick={handleThemeSwitch} className="">
            <Lightmood />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealNav;
