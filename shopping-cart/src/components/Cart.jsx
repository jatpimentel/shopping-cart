import React from "react";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <span>{item.title}</span>
              <span>${item.price}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <div className="total">Total: ${total.toFixed(2)}</div>
          <Link to="/checkout">
            <button className="checkout">Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
