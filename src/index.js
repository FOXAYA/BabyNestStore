import React from "react";
import ReactDOM from "react-dom/client";
import "../src/Components/Styles/mainstyles.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/Components/Styles/Responsive.css";

import { BasketProvider } from "./Components/shop/BasketContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BasketProvider>
      <App />
    </BasketProvider>
  </React.StrictMode>
);
