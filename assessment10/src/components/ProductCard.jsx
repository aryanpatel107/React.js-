const ProductCard = ({ product }) => {
  const exchangeRate = 83;
  const priceInRupees = product.price * exchangeRate;

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(priceInRupees);

  return (
    <div className="card">
      <div className="image-wrapper">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="card-body">
        <h3>{product.title}</h3>
        <p className="price">{formattedPrice}</p>
        <p className="category">{product.category}</p>
      </div>
    </div>
  );
};

export default ProductCard;