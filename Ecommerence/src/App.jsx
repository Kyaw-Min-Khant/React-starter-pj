import React from "react";
import Products from "./Component/Products";
import Nav from "./Component/Nav";
import { Routes, Route } from "react-router-dom";
import Invoice from "./Component/Invoice";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
    </div>
  );
};

export default App;
