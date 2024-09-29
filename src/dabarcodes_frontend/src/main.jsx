import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "keen-slider/keen-slider.min.css";
import { DataProvider } from "./ContextApi/DataContext";
import { ModalProvider } from "./ContextApi/ModalContext";
// import { UserProvider } from "./ContextApi/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  {/* // <UserProvider> */}
  <ModalProvider>
     <DataProvider>
      <App />
    </DataProvider>
    </ModalProvider>
    {/* </UserProvider> */}
  </React.StrictMode>
);
