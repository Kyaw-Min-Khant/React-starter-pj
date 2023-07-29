import React from "react";
import { useRandomRecipeMutation } from "../services/mealApi";
import MealCard from "./MealCard";
import MealNav from "./MealNav";
const Meal = () => {
  const { data: food } = useRandomRecipeMutation();
  return (
    <>
      <MealNav />
      <div className="flex justify-start container mx-auto px-10 gap-10 flex-wrap">
        {food?.results?.map((item) => (
          <MealCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default Meal;
