import React, { useState } from "react";
import "./Payment.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const Payment = () => {
  const { cart } = useCart();

  const navigate = useNavigate();

  const [paymentData, setPaymentData] = useState({
    name: "",
    email: "",
    address: "",
    card: "",
  });

  const handleChange = (e) => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayment = (e) => {
    e.preventDefault();

    if (
      !paymentData.name ||
      !paymentData.email ||
      !paymentData.address ||
      !paymentData.card
    ) {
      alert("Please fill all details");
      return;
    }

    // Fake payment processing

    setTimeout(() => {
      navigate("/success");
    }, 1500);
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="payment-page">
      <h1>Checkout</h1>

      <div className="payment-container">
        <div className="order-summary">
          <h2>Your Order</h2>

          {cart.map((item) => (
            <div className="order-item" key={item.id}>
              <img src={item.thumbnail} />

              <div>
                <h4>{item.title}</h4>
                <p>
                  ${item.price} x {item.quantity}
                </p>
              </div>
            </div>
          ))}

          <h3>Total : ${total.toFixed(2)}</h3>
        </div>

        <div className="payment-form">
          <h2>Payment Details</h2>

          <form onSubmit={handlePayment}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />

            <textarea
              name="address"
              placeholder="Delivery Address"
              onChange={handleChange}
            />

            <input
              type="text"
              name="card"
              placeholder="Card Number"
              maxLength="16"
              onChange={handleChange}
            />

            <button to="/success">Pay Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
