import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useCart } from "../Context/CartContext";

const ProductDetails = () => {
  const { addToCart } = useCart();

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <section className="product-details">
      <div className="product-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>

      <div className="product-info">
        <h1>{product.title}</h1>

        <p className="rating">⭐ {product.rating}</p>

        <h2>${product.price}</h2>

        <p>{product.description}</p>

        <p>
          <strong>Brand:</strong> {product.brand}
        </p>

        <p>
          <strong>Category:</strong> {product.category}
        </p>

        <p>
          <strong>Stock:</strong> {product.stock}
        </p>

        <button
          onClick={(e) => {
            e.preventDefault();
            console.log("Clicked", product.title);
            addToCart(product);
          }}
        >
          Add To Cart
        </button>
      </div>
    </section>
  );
};

export default ProductDetails;
