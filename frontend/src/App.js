import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import Layout from "./components/layout";
import Header from "./components/header"
// import useFoodOrder from "./hooks/foodOrderHooks";

const App = () => {
  return (
    <Router >
      <Header />
    </Router>
  );
};

export default App;
