import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { MovieContextProvider } from "./Contexts/MovieContext";
import "swiper/css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MovieContextProvider>
      <Router>
        <App />
      </Router>
    </MovieContextProvider>
  </React.StrictMode>
);
