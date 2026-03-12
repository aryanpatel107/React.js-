function ProductCard({ product }) {
  const rupees = Math.round(product.price * 83);

  return (
    <div className="card">
      <div className="image-wrapper">
        <img src={product.image} alt={product.title} />
      </div>

      <h3>{product.title}</h3>
      <p className="price">₹ {rupees}</p>
      <span className="category">{product.category}</span>
    </div>
  );
}

export default ProductCard;