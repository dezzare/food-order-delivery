import React from "react";
import { Routes, Route } from "react-router-dom"
import HomePage from "./views/home"
import Cardapio from "./views/cardapio"

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="cart"
        element={<Cardapio />}
      />
    </Routes>
  )
}

export default MainRoutes
