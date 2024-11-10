import React, { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const { addToCart } = useCart(); // Destructuring from useCart

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
