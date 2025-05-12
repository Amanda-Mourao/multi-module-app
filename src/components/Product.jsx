import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddToCart from "./AddToCart";

function Product() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  return (
    <div className="p-20 min-h-screen">
      {loading ? (
        <p>LOADING...</p>
      ) : product ? (
        <div className="flex items-center">
          <img src={product.image} alt="" className="w-70 m-5" />
          <div className="m-10">
            <h2 className="text-lg font-bold mb-10">{product.title}</h2>
            <p className="mb-10">{product.description}</p>
            <div className="flex justify-between items-center">
              <p className="font-bold">{product.price} €</p>
              <AddToCart product={product} />
            </div>
          </div>
        </div>
      ) : (
        <p>PRODUCT NOT FOUND</p>
      )}
    </div>
  );
}

export default Product;
