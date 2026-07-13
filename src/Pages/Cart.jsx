import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();

  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();

  if (cart.length === 0) {
    return (
      <section className="empty-cart">
        <h1>Your Cart is Empty 🛒</h1>
        <p className="empty-para">Looks like you haven't added anything yet.</p>
        <p className="emoji">🙇🏻‍♀️</p>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <h1>Shopping Cart</h1>

      <div className="cart-container">
        {/* LEFT */}

        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-card" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />

              <div className="cart-info">
                <h3>{item.title}</h3>

                <p className="category">{item.category}</p>

                <h2>${item.price}</h2>

                <div className="quantity">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>

                  <span>{item.quantity}</span>

                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT */}

        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <button
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
