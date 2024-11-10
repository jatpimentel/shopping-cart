import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Cart from "./components/Cart";
import Checkout from "./pages/Checkout";
import Header from "./components/Header";
const App = () => {
  return (
    <div>
      <Header /> {/* Use the Header */}
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<ProductList />} /> {/* Default route */}
      </Routes>
    </div>
  );
};

export default App;
