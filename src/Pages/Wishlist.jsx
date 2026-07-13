import { useWishlist } from "../Context/WishlistContext";
import "./Wishlist.css";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <section className="empty-wishlist">
        <h1>Your Wishlist is Empty ❤️</h1>
        <p className="empty-para">Looks like you haven't added anything yet.</p>
        <p className="emoji">🙇🏻‍♀️</p>
      </section>
    );
  }

  return (
    <section className="wishlist">
      <h1>My Wishlist</h1>

      {wishlist.map((product) => (
        <div className="wishlist-card" key={product.id}>
          <img src={product.thumbnail} alt={product.title} />

          <div>
            <h3>{product.title}</h3>

            <p>${product.price}</p>
          </div>

          <button onClick={() => removeFromWishlist(product.id)}>Remove</button>
        </div>
      ))}
    </section>
  );
};

export default Wishlist;
