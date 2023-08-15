import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AddToFavorites from "./Components/context/appContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AddToFavorites>
        <App />
      </AddToFavorites>
    </BrowserRouter>
  </React.StrictMode>
);

