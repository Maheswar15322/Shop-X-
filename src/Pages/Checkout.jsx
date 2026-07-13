import { useState } from "react";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./Checkout.css";

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    payment: "cod",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    clearCart();

    toast.success("Order Placed Successfully 🎉");

    navigate("/payment");
  };

  return (
    <section className="checkout">
      <h1>Checkout</h1>

      <div className="checkout-container">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
          />

          <textarea
            name="address"
            placeholder="Address"
            required
            onChange={handleChange}
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            required
            onChange={handleChange}
          />

          <input
            type="text"
            name="zip"
            placeholder="ZIP Code"
            required
            onChange={handleChange}
          />

          <h3>Payment Method</h3>

          <label>
            <input
              type="radio"
              name="payment"
              value="cod"
              defaultChecked
              onChange={handleChange}
            />
            Cash on Delivery
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="upi"
              onChange={handleChange}
            />
            UPI
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="card"
              onChange={handleChange}
            />
            Credit / Debit Card
          </label>

          <button type="submit">Place Order</button>
        </form>

        <div className="checkout-summary">
          <h2>Order Summary</h2>

          <p>Items : {cart.length}</p>

          <p>Shipping : Free</p>

          <h3>Total : ${totalPrice.toFixed(2)}</h3>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
