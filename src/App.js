import React from "react";
import Home from "./components/Home";
import { CartProvider } from "./Context/CartContext";
import "./styles/App.css"


function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}

export default App;
