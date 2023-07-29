import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePageComponent/HomePage";
import Meal from "../meal/Meal";
const RoutePage = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe" element={<Meal />} />
      </Routes>
    </div>
  );
};

export default RoutePage;
