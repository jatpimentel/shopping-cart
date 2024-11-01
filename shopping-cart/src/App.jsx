import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

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

  return <></>;
}

export default App;
