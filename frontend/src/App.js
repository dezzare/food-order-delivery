import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/header"
import Routes from "./routes"
import store from "./components/store"

const App = () => {

  const localCart = JSON.parse(localStorage.getItem('dioshopping: cart'))

  if (localCart !== null) {
    store.dispatch({ type: 'CHANGE_CART', localCart })
  }

  return (
    <Provider store={store}>
      <Router >
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
