import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Check if product is already in wishlist
  const isInWishlist = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  // Add to wishlist
  const addToWishlist = (product) => {
    if (wishlist.some((item) => item.id === product.id)) {
      return;
    }

    toast.success(`${product.title} added to Wishlist ❤️`);

    setWishlist((prev) => [...prev, product]);
  };

  // Remove from wishlist
  const removeFromWishlist = (id) => {
    toast.error("Removed from Wishlist");

    setWishlist((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);