import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <header className="header">
      <div className="logo">ShopEasy</div>

      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />
    </header>
  );
};

export default Header;