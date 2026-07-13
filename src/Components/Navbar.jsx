import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiSearch, FiUser, FiLogOut } from "react-icons/fi";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

import "./Navbar.css";

import ThemeToggle from "./ThemeToggle";

import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";
import { useAuth } from "../Context/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const { currentUser, logout } = useAuth();

  const closeMenu = () => setMenuOpen(false);

  const handleLogout = async () => {
    try {
      await logout();
      closeMenu();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="header">
      <nav className="navbar">
        {/* Logo */}

        <NavLink to="/" className="logo" onClick={closeMenu}>
          Shop<span>X</span>
        </NavLink>

        {/* Desktop Navigation */}

        <ul className="desktop-nav">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Shop
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/categories"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Categories
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Desktop Right */}

        <div className="desktop-icons">
          <ThemeToggle />

          <NavLink to="/shop" className="icon-btn">
            <FiSearch />
          </NavLink>

          <NavLink to="/wishlist" className="icon-link">
            <FaHeart />

            {wishlist.length > 0 && (
              <span className="badge">{wishlist.length}</span>
            )}
          </NavLink>

          <NavLink to="/cart" className="icon-link">
            <FaShoppingCart />

            {cart.length > 0 && <span className="badge">{cart.length}</span>}
          </NavLink>

          {currentUser ? (
            <div className="user-menu">
              <FiUser className="user-icon" />

              <span className="user-name">
                {currentUser.displayName || currentUser.email.split("@")[0]}
              </span>

              <button className="logout-btn" onClick={handleLogout}>
                <FiLogOut />
              </button>
            </div>
          ) : (
            <NavLink to="/login" className="login-nav">
              <FiUser />

              <span>Login</span>
            </NavLink>
          )}
        </div>

        {/* Hamburger */}

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>
      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/shop" onClick={closeMenu}>
          Shop
        </NavLink>

        <NavLink to="/categories" onClick={closeMenu}>
          Categories
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>

        <hr />

        <div className="mobile-icons">
          <div className="mobile-theme">
            <span>Theme</span>
            <ThemeToggle />
          </div>

          <NavLink to="/wishlist" className="mobile-icon" onClick={closeMenu}>
            <div className="mobile-left">
              <FaHeart />
              <span>Wishlist</span>
            </div>

            {wishlist.length > 0 && (
              <span className="badge">{wishlist.length}</span>
            )}
          </NavLink>

          <NavLink to="/cart" className="mobile-icon" onClick={closeMenu}>
            <div className="mobile-left">
              <FaShoppingCart />
              <span>Cart</span>
            </div>

            {cart.length > 0 && <span className="badge">{cart.length}</span>}
          </NavLink>

          {currentUser ? (
            <div className="mobile-user">
              <div className="mobile-user-info">
                <FiUser />

                <span>
                  {currentUser.displayName || currentUser.email.split("@")[0]}
                </span>
              </div>

              <button className="logout-btn" onClick={handleLogout}>
                <FiLogOut />
                Logout
              </button>
            </div>
          ) : (
            <NavLink to="/login" className="login-nav" onClick={closeMenu}>
              <FiUser />
              <span>Login</span>
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
