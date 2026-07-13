import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./Context/CartContext";
import { WishlistProvider } from "./Context/WishlistContext";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./Context/ThemeContext";
import "./theme.css";
import { AuthProvider } from "./Context/AuthContext";


createRoot(document.getElementById("root")).render(
  <AuthProvider>
     <ThemeProvider>
    <CartProvider>
      <WishlistProvider>

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 1000,

            style: {
              background: "#222",
              color: "#fff",
              borderRadius: "10px",
              padding: "10px",
            },

            success: {
              iconTheme: {
                primary: "#22c55e",
                secondary: "#fff",
              },
            },

            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
            },
          }}
        />

        <App />
      </WishlistProvider>
    </CartProvider>
    </ThemeProvider>
    </AuthProvider>
  
);
