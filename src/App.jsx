import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProductDetails from "./Pages/ProductDetails";
import Checkout from "./Pages/Checkout";
import OrderSuccess from "./Pages/OrderSuccess";
import Footer from "./Components/Footer";
import Categories from "./Components/Categories";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Payment from "./Pages/Payment";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

           <Route path="/about" element={<About />} />

           <Route path="/contact" element={<Contact />} />

          <Route path="/shop" element={<Shop />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/wishlist" element={<Wishlist />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/checkout" element={<Checkout />} />

          <Route path="/order-success" element={<OrderSuccess />} />

          <Route path="/categories" element={<Categories />} />

          <Route path="/payment" element={<Payment />} />

          <Route path="/success" element={<OrderSuccess />} />


        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
