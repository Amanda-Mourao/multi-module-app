import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<h2>NOT FOUND</h2>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
