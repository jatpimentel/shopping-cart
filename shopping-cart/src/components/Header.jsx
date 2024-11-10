import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import the CSS for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>ShopMate</h1>
      </div>
      <nav className="nav">
        <Link to="/products" className="nav-link">
          Products
        </Link>
        <Link to="/cart" className="nav-link">
          Cart
        </Link>
      </nav>
    </header>
  );
};

export default Header;
