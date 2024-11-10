import React from "react";

const ProductCard = ({ product, addToCart }) => (
  <div className="product-card">
    <img src={product.images[0]} alt={product.title} />
    <h3>{product.title}</h3>
    <p>${product.price}</p>
    <button className="add-to-cart" onClick={() => addToCart(product)}>
      Add to Cart
    </button>
  </div>
);

export default ProductCard;
