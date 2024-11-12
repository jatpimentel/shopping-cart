import React from "react";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();

  // Calculate the total price of items in the cart
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.images[0]}
                alt={item.title}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h4>{item.title}</h4>
                <p>${item.price.toFixed(2)}</p>
                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, Math.max((item.quantity || 1) - 1, 1))
                    }
                    className="quantity-button"
                  >
                    -
                  </button>
                  <span>{item.quantity || 1}</span>
                  <button
                    onClick={() =>
                      updateQuantity(item.id, (item.quantity || 1) + 1)
                    }
                    className="quantity-button"
                  >
                    +
                  </button>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <div className="total">Total: ${total.toFixed(2)}</div>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
          <Link to="/checkout">
            <button className="checkout">Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
