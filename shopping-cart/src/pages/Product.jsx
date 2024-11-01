import React from "react";
import { useRouteLoaderData, useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchSingleProduct = async (id) => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);

        if (!response.ok) {
          return console.log("network failed");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleProduct(params.product_id);
  }, []);
  if (!product) {
    return <div>Product does not exist yet</div>;
  }

  return <div></div>;
};

export default Product;
