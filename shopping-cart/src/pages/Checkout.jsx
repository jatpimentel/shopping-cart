import React from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

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
      {cartItems.map((item) => (
        <div key={item.id}>
          <span>{item.title}</span> - <span>${item.price}</span>
        </div>
      ))}
      <button className="pay" onClick={handlePay}>
        Pay
      </button>
      <button className="cancel" onClick={() => navigate("/cart")}>
        Cancel
      </button>
    </div>
  );
};

export default Checkout;
