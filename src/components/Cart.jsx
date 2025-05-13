import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BsCartX } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import Swal from "sweetalert2";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleRemove = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    Swal.fire({
      title: "Item removed from your cart!",
      icon: "error",
      confirmButtonColor: "#292524",
    });
  };

  return (
    <div className="p-20 min-h-screen">
      <h2 className="text-4xl font-bold mb-15">CART</h2>
      {cart.length === 0 ? (
        <div>
          <p className="mb-5">NO PRODUCTS IN YOUR CART YET.</p>
          <NavLink to="/products">
            <p className="flex items-center gap-2 hover:underline">
              CLICK HERE TO SEE OUR PRODUCTS
              <GoArrowRight />
            </p>
          </NavLink>
        </div>
      ) : (
        <ul>
          {cart.map((el) => (
            <li key={el.id} className="flex items-center mb-15 gap-15">
              <img src={el.image} alt="" className="w-50" />
              <div>
                <p className="text-xl font-bold">{el.title}</p>
                <p className="mb-5">{el.price} €</p>
                <button
                  className="flex items-center gap-2 bg-[#292524] text-white font-bold rounded-lg p-2 hover:shadow-lg shadow-[#9c9c9c] active:bg-black"
                  onClick={() => handleRemove(el.id)}
                >
                  REMOVE FROM CART
                  <BsCartX />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
