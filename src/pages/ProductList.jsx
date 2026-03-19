import { useState } from "react";
import products from "./product";
import ProductCard from "../components/ProductCard";
const ProductList = () => {
  const CATEGORIES = [
    "All",
    "Home",
    "Kitchen",
    "Stationery",
    "Apparel",
    "Garden",
    "Clothing",
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProducts = products
    .filter(
      (product) =>
        activeCategory === "All" || product.category === activeCategory,
    )
    .filter((product) => {
      const name = product?.name ?? "";
      const description = product?.description ?? "";
      const term = search.toLowerCase();

      return (
        name.toLowerCase().includes(term) ||
        description.toLowerCase().includes(term)
      );
    });

  const productsLength = filteredProducts.length;

  return (
    <main className="product-list">
      <div className="product-list__container container">
        <div className="product-list__header">
          <h2 className="product-list__title">Shop Our Collection</h2>
          <p className="product-list__count">{productsLength} items</p>
        </div>
        <div className="product-list__toolbar">
          <input
            id="prod-list_search"
            type="text"
            className="product-list__search"
            placeholder="Search products..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <div className="product-list__categories">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                className={`product-list__category-btn ${activeCategory === category ? "product-list__category-btn--active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <select className="product-list__sort" id="prod-list_sort">
            <option value="default">Sort: Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
        {productsLength === 0 ? (
          <div className="product-list_empty">
            <p className="product-list_empty-text">
              No products match your search.
            </p>
          </div>
        ) : (
          <div className="product-list_grid">
            {filteredProducts.map((productss) => (
              <ProductCard key={productss.id} product={productss} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default ProductList;
