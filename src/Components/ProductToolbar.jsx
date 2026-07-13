import "./ProductToolbar.css";

const ProductToolbar = ({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
  categories,
}) => {
  return (
    <section className="toolbar">

      {/* Search */}
      <div className="toolbar-search">
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Category */}
      <div className="toolbar-category">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>

          {categories.map((cat) => (
            <option key={cat.slug} value={cat.slug}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Sort */}
      <div className="toolbar-sort">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="low-high">Price: Low → High</option>
          <option value="high-low">Price: High → Low</option>
          <option value="rating">Highest Rating</option>
          <option value="title">A → Z</option>
        </select>
      </div>

    </section>
  );
};

export default ProductToolbar;