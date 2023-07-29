import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./App/store.js";
import { DarkModeContextProvider } from "./LightDark/DarkcontextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DarkModeContextProvider>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </DarkModeContextProvider>
);
