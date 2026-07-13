import "./OfferBanner.css";
import bannerImage from "../assets/offerBanner.jpeg";
import { NavLink } from "react-router-dom";

const OfferBanner = () => {
  return (
    <section className="offer-banner">

      <div className="offer-left">

        <span className="offer-tag">
          🔥 Limited Time Offer
        </span>

        <h2>
          Summer Sale
          <br />
          Up To <span>50% OFF</span>
        </h2>

        <p>
          Grab your favorite products before the offer ends.
          Enjoy premium quality at unbeatable prices.
        </p>

         <NavLink
            to="/shop"
            id="NavLink"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <button className="shop-btn">Shop Now</button>
          </NavLink>

      </div>

      <div className="offer-right">
        <img src={bannerImage} alt="Sale Banner" />
      </div>

    </section>
  );
};

export default OfferBanner;