import { BsCartCheck } from "react-icons/bs";
import Swal from "sweetalert2";

function AddToCart({ product }) {
  const handleCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    // alert("Added to your cart!");
    Swal.fire({
      title: "Item added to your cart!",
      icon: "success",
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
