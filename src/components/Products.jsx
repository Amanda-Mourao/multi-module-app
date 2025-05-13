import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AddToCart from "./AddToCart";
import { PiListStar } from "react-icons/pi";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="p-20 min-h-screen">
      <h2 className="text-4xl font-bold mb-15">OUR PRODUCTS</h2>
      {error && <p>{error}</p>}
      {loading ? (
        <p>LOADING...</p>
      ) : (
        <div className="grid grid-cols-3 gap-20">
          {products.map((product) => (
            <div key={product.id} className="w-95 h-120 flex flex-col justify-between mb-10">
              <h3 className="text-lg font-bold">{product.title}</h3>
              <p className="text-sm mb-5 flex items-center gap-1">
                <PiListStar />
                {product.rating.rate} / 5 by {product.rating.count} Reviews
              </p>
              <NavLink to={`/products/${product.id}`} className="flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-50 mb-5"
                />
              </NavLink>
              <p>{product.description.length > 100 ? `${product.description.substring(0, 100)}...` : `${product.description}`}</p>
              <div className="flex justify-between items-center mt-5">
                <p className="font-bold">{product.price} €</p>
                <AddToCart product={product} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
