import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/not-found/NotFound";
import Layout from "./pages/layout/Layout";
import DetailProduct from "./pages/detail-product/DetailProduct";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import Wishlist from "./pages/wishlist/Wishlist";
import Blog from "./pages/blog/Blog";
import Checkout from "./pages/checkout/Checkout";
import Shop from "./pages/shop/Shop";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Home />} />
          <Route path="/product/:id" element={<DetailProduct />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
