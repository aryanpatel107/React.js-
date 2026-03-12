import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError("Something went wrong while fetching data.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="center">
        <h2>Loading products...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="center error">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">
          <span>Pro</span>Store
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        <h1 className="title">Premium Product Collection</h1>
        <ProductList products={products} />
      </div>
    </>
  );
}

export default App;