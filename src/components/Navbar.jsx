import { NavLink } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { IoShirtOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";




function Navbar() {
  return (
    <nav className="bg-[#292524] text-white font-bold p-10 flex justify-between">
      <h1 className="text-7xl">FAKESTORE</h1>
      <ul>
        <NavLink className="hover:underline" to="/">
          <li className="flex items-center gap-2"><IoHomeOutline />HOME</li>
        </NavLink>
        <NavLink className="hover:underline" to="products">
          <li className="flex items-center gap-2"><IoShirtOutline />PRODUCTS</li>
        </NavLink>
        <NavLink className="hover:underline" to="cart">
          <li className="flex items-center gap-2"><BsCart />CART</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
