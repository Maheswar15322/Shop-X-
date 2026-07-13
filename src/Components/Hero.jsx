import "./Hero.css";
import heroImage from "../assets/hero.jpg";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="offer">🔥 New Collection 2026</span>

        <h1>
          Discover Your
          <span> Dream Style</span>
        </h1>

        <p>
          Explore thousands of premium fashion products with exclusive offers,
          fast delivery, and secure payments.
        </p>

        <div className="hero-buttons">
          <NavLink
            to="/shop"
            id="NavLink"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <button className="shop-btn">Shop Now</button>
          </NavLink>

          <button className="explore-btn">Explore</button>
        </div>

        <div className="hero-info">
          <div>
            <h2>25K+</h2>
            <p>Happy Customers</p>
          </div>

          <div>
            <h2>150+</h2>
            <p>Brands</p>
          </div>

          <div>
            <h2>5K+</h2>
            <p>Products</p>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="circle"></div>

        <img src={heroImage} alt="Hero Product" />

        <div className="discount-card">
          <h3>50% OFF</h3>
          <p>Summer Sale</p>
        </div>

        <div className="shipping-card">🚚 Free Shipping</div>
      </div>
    </section>
  );
};

export default Hero;
