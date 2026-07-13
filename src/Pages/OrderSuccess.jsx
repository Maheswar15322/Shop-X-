import { Link } from "react-router-dom";
import "./OrderSuccess.css";

const OrderSuccess = () => {
  const orderId = Math.floor(
    100000 + Math.random() * 900000
  );

  return (
    <section className="success">
  <div className="success-card">
    <div className="checkmark">✓</div>

    <h1>Order Placed Successfully!</h1>

    <p>
      Thank you for shopping with ShopX.
      <br />
      Your order has been confirmed and will be processed soon.
    </p>

    <div className="order-id">
      Order ID: <strong>#{orderId}</strong>
    </div>

    <div className="success-buttons">
      <Link to="/shop" className="continue-btn">
        Continue Shopping
      </Link>

      <Link to="/" className="home-btn">
        Back to Home
      </Link>
    </div>
  </div>
</section>
  );
};

export default OrderSuccess;