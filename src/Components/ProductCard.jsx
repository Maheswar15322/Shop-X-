import "./ProductCard.css";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "../Context/WishlistContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const isWishlisted = isInWishlist(product.id);

  return (
    <Link to={`/product/${product.id}`} className="product-link">
      <div className="product-card">
        <img src={product.thumbnail} alt={product.title} />

        <h3>{product.title}</h3>

        <p className="category">{product.category}</p>

        <div className="price-rating">
          <span className="price">${product.price}</span>

          <span className="rating">⭐ {product.rating}</span>
        </div>

        <div className="button">
          <button className="cart-button"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
          >
            Add To Cart
          </button>

          <button
            className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();

              if (isWishlisted) {
                removeFromWishlist(product.id);
              } else {
                addToWishlist(product);
              }
            }}
          >
            <FaHeart />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
