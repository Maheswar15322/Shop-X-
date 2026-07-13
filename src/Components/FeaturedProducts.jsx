import { useEffect, useState } from "react";
import "./FeaturedProducts.css";
import ProductCard from "./Components/ProductCard";

const FeaturedProducts = () => {

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchProducts = async () => {

      try{

        const response = await fetch(
          "https://dummyjson.com/products?limit=20"
        );

        const data = await response.json();

        setProducts(data.products);

      }catch(error){

        console.log(error);

      }finally{

        setLoading(false);

      }

    };

    fetchProducts();

  }, []);

  if(loading){
    return <h2>Loading Products...</h2>;
  }

  return (

    <section className="featured">

      <div className="section-title">
        <h2>Featured Products</h2>
        <p>Our most popular products.</p>
      </div>

      <div className="featured-grid">

        {products.map((product)=>(

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </section>

  );
};

export default FeaturedProducts;