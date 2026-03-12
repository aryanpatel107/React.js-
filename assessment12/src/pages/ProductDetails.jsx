import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="details">
      <img src={product.image} />
      <h2>{product.title}</h2>
      <p>₹ {Math.round(product.price * 83)}</p>
      <button onClick={() => addToCart(product)}>Add To Cart</button>
    </div>
  );
}

export default ProductDetails;