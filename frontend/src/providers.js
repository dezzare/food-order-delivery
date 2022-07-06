import React from "react";
import App from "./App";
import { ResetCSS } from "./global/resetCSS";
import FoodOrderProvider from "./providers/foodOrderProvider";

const Providers = () => {
  return (
    <main>
      <FoodOrderProvider>
        <ResetCSS />
        <App />
      </FoodOrderProvider>
    </main>
  );
};

export default Providers;
