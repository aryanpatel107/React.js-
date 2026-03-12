import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState("home"); // home | cart
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * 83,
    0
  );

  if (loading) {
    return (
      <div className="center">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <h1 className="logo">EliteStore</h1>

        <div className="nav-links">
          <button
            className={page === "home" ? "active" : ""}
            onClick={() => setPage("home")}
          >
            Home
          </button>

          <button
            className={page === "cart" ? "active" : ""}
            onClick={() => setPage("cart")}
          >
            Cart ({cart.length})
          </button>
        </div>
      </header>

      {/* HOME PAGE */}
      {page === "home" && (
        <>
          <section className="hero">
            <h2>Premium Collection</h2>
            <p>Discover high-quality products with modern design.</p>
          </section>

          <section className="grid">
            {products.map((product) => (
              <div key={product.id} className="card">
                <div className="image-wrapper">
                  <img src={product.image} alt={product.title} />
                </div>

                <div className="card-body">
                  <h4>{product.title}</h4>
                  <p className="price">
                    ₹ {(product.price * 83).toFixed(0)}
                  </p>
                  <button
                    className="buy-btn"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </section>
        </>
      )}

      {/* CART PAGE */}
      {page === "cart" && (
        <section className="cart-page">
          <h2>Your Cart</h2>

          {cart.length === 0 ? (
            <p className="empty">Cart is empty.</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.image} alt={item.title} />
                  <div>
                    <h4>{item.title}</h4>
                    <p>₹ {(item.price * 83).toFixed(0)}</p>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}

              <div className="total">
                Total: ₹ {total.toFixed(0)}
              </div>
            </>
          )}
        </section>
      )}
    </div>
  );
}