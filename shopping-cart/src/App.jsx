import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FilterProductTable from "./components/FilterProductTable";
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";
import { useEffect } from "react";
import ProductCard from "./components/products/ProductCard";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://fakestoreapi.com/products?sort=${sort}`,
          { signal }
        );
        const data = await response.json();

        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
    return () => {
      controller.abort();
    };
  }, [sort]);

  return (
    <FilterProductTable>
      <SearchBar
        query={query}
        setQuery={setQuery}
        stockChecked={stockChecked}
        setStockChecked={setStockChecked}
        sort={sort}
        setSort={setSort}
      />
      {!loading ? (
        <div className="flex flex-wrap gap-3">
          {products.map((product) => (
            <ProductCard
              key={`product-${product.id}`}
              imageSrc={product.image}
              name={product.title}
              id={product.id}
            ></ProductCard>
          ))}
        </div>
      ) : (
        <span>Loading pa hulat...</span>
      )}
    </FilterProductTable>
  );
}

export default App;
