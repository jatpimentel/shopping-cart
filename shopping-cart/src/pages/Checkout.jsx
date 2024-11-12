import React from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const handlePay = () => {
    alert("Payment Successful!");
    clearCart();
    navigate("/products");
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="checkout-item">
              <span>{item.title}</span>
              <span>${item.price.toFixed(2)}</span>
            </div>
          ))}
          <div className="total">
            Total: ${cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0).toFixed(2)}
          </div>
          <button className="pay" onClick={handlePay}>
            Pay
          </button>
          <button className="cancel" onClick={() => navigate("/cart")}>
            Cancel
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
