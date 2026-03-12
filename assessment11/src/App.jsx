import { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const searchRef = useRef(null);

  // Fetch products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Auto focus search
  useEffect(() => {
    searchRef.current.focus();
  }, []);

  // Filter logic
  useEffect(() => {
    let updated = products;

    if (category !== "all") {
      updated = updated.filter((p) => p.category === category);
    }

    if (search) {
      updated = updated.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredProducts(updated);
  }, [search, category, products]);

  const categories = [
    "all",
    ...new Set(products.map((p) => p.category)),
  ];

  return (
    <div className="container">
      <Navbar />

      <div className="controls">
        <input
          ref={searchRef}
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      {loading && <p className="message">Loading products...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
}

export default App;