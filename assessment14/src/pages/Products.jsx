import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";

export default function Products() {
  const [products, setProducts] = useState([]); // initial state is empty array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts(); // wait for API
        setProducts(data); // now products is an array
      } catch (err) {
        console.error("Failed to load products:", err);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) return <p className="loading">Loading products...</p>;
  if (!products.length) return <p className="loading">No products available.</p>;

  return (
    <div className="overview">
      {products.map((product) => (
        <div key={product.id} className="card">
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
}