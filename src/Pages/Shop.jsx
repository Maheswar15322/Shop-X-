import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import ProductToolbar from "../Components/ProductToolbar";
import { useSearchParams } from "react-router-dom";
import "./Shop.css";

const Shop = () => {
 const [searchParams] = useSearchParams();

const selectedCategories =
  searchParams.get("categories")?.split(",") || [];

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [sort, setSort] = useState("");

  const [categories, setCategories] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 28;

  useEffect(() => {
    // Fetch Products
    fetch("https://dummyjson.com/products?limit=1000")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

    // Fetch Categories
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Copy products array
  let filteredProducts = [...products];

  // Search
  if (search.trim() !== "") {
    filteredProducts = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase()),
    );
  }

// Shop dropdown has priority
if (category !== "") {
  filteredProducts = filteredProducts.filter(
    (product) => product.category === category
  );
}

// Otherwise use Home categories
else if (selectedCategories.length > 0) {
  filteredProducts = filteredProducts.filter((product) =>
    selectedCategories.includes(product.category)
  );
}

  // Sort
  switch (sort) {
    case "low-high":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;

    case "high-low":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;

    case "rating":
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;

    case "title":
      filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
      break;

    default:
      break;
  }

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const pageNumbers = [];

  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, currentPage + 2);

  // Keep 5 buttons visible
  if (currentPage <= 3) {
    endPage = Math.min(5, totalPages);
  }

  if (currentPage >= totalPages - 2) {
    startPage = Math.max(totalPages - 4, 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <section className="shop">
      <ProductToolbar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
        categories={categories}
      />

      <div className="shop-heading">
        <h1>Our Products</h1>
        <p>Discover our latest collection.</p>
      </div>

      {loading ? (
        <h2 className="loading">Loading...</h2>
      ) : (
        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <h2>No Products Found</h2>
          )}
        </div>
      )}

      <div className="pagination">
        {/* Previous */}
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ← Prev
        </button>

        {/* First Page */}
        {startPage > 1 && (
          <>
            <button onClick={() => setCurrentPage(1)}>1</button>

            {startPage > 2 && <span>...</span>}
          </>
        )}

        {/* Dynamic Pages */}
        {pageNumbers.map((page) => (
          <button
            key={page}
            className={currentPage === page ? "active" : ""}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}

        {/* Last Page */}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span>...</span>}

            <button onClick={() => setCurrentPage(totalPages)}>
              {totalPages}
            </button>
          </>
        )}

        {/* Next */}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next →
        </button>
      </div>
    </section>
  );
};

export default Shop;
