import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "photoswipe/dist/photoswipe.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "react-toastify/dist/ReactToastify.css";
import "./assets/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

if (process.env.NODE_ENV !== "development") {
    console.log = () => {
    };
    console.error = () => {
    };
} else {
    console.log('############');
    console.log('Catalog Lucy Modas ....');
    console.log('HOST:  ....', process.env.REACT_APP_BASE_SERVICE_URL);
    console.log('############');
}

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);
