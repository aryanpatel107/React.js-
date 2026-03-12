import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} />
      <h4>{product.title}</h4>
      <p>₹ {Math.round(product.price * 83)}</p>
      <Link to={`/product/${product.id}`}>
        <button>View</button>
      </Link>
    </div>
  );
}

export default ProductCard;