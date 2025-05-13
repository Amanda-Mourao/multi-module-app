import { BsCartCheck } from "react-icons/bs";
import Swal from "sweetalert2";

function AddToCart({ product }) {
  const handleCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    Swal.fire({
      title: "Item added to your cart!",
      icon: "success",
      confirmButtonColor: "#292524",
    });
  };

  return (
    <button
      className="flex items-center gap-2 bg-[#292524] text-white font-bold rounded-lg p-2 hover:shadow-lg shadow-[#9c9c9c] active:bg-black"
      onClick={handleCart}
    >
      ADD TO CART
      <BsCartCheck />
    </button>
  );
}

export default AddToCart;
