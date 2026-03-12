import "./App.css";

function App() {
 const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1999,
    image:
      "https://images.pexels.com/photos/3394660/pexels-photo-3394660.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2999,
    image:
      "https://images.pexels.com/photos/277406/pexels-photo-277406.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 1499,
    image:
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    name: "Laptop Backpack",
    price: 999,
    image:
      "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 5,
    name: "Gaming Mouse",
    price: 799,
    image:
      "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 6,
    name: "Computer Monitor",
    price: 10000,
    image:
      "https://images.pexels.com/photos/5082566/pexels-photo-5082566.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];
  return (
    <>
      <header className="header">
        <div className="logo">ShopEasy</div>
        <nav>
          <ul className="nav">
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <input className="search" placeholder="Search products..." />
      </header>

      <section className="banner">
        <h1>Big Sale is Live!</h1>
        <p>Up to 50% Off</p>
        <button>Shop Now</button>
      </section>

      <section className="grid">
        {products.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹ {item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </section>

      <footer className="footer">
        © 2026 ShopEasy. All Rights Reserved.
      </footer>
    </>
  );
}

export default App;