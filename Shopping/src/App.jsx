import React from 'react'
import Productpage from './Component.jsx/Productpage'
import { Route,Routes } from 'react-router-dom'
import Details from './Component.jsx/Details';
import Form from './Component.jsx/Form';
import Update from './Component.jsx/Update';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Productpage />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/form" element={<Form />} />
      <Route path="/update/:id" element={<Update />} />
    </Routes>
  );
}

export default App