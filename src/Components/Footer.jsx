import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company */}

        <div className="footer-column">
          <h2 className="logo">
            Shop<span>X</span>
          </h2>

          <p>
            ShopX is your trusted destination for premium fashion, electronics,
            and lifestyle products at affordable prices.
          </p>

          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>

        {/* Quick Links */}

        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <NavLink to="/" id="quick-links">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop" id="quick-links">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/categories" id="quick-links">Categories</NavLink>
            </li>
            <li>
              <NavLink to="/about" id="quick-links">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" id="quick-links">Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* Customer Support */}

        <div className="footer-column">
          <h3>Customer Support</h3>

          <ul>
            <li>Help Center</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact */}

        <div className="footer-column">
          <h3>Contact Us</h3>

          <p>
            <FaMapMarkerAlt />
            India, Westbengal
          </p>

          <p>
            <FaPhoneAlt />
            +1 234 567 890
          </p>

          <p>
            <FaEnvelope />
            support@shopx.com
          </p>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2026 ShopX. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
