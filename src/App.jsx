import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Layout = lazy(() => import("./pages/layout/Layout"));
const Home = lazy(() => import("./pages/home/Home"));
const NotFound = lazy(() => import("./pages/not-found/NotFound"));
const DetailProduct = lazy(() => import("./pages/detail-product/DetailProduct"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Cart = lazy(() => import("./pages/cart/Cart"));
const Wishlist = lazy(() => import("./pages/wishlist/Wishlist"));
const Blog = lazy(() => import("./pages/blog/Blog"));
const Checkout = lazy(() => import("./pages/checkout/Checkout"));
const Shop = lazy(() => import("./pages/shop/Shop"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
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
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
