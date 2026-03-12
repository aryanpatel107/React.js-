import { useCart } from "../context/CartContext";

function Cart() {
  const { cart } = useCart();

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item, index) => (
        <p key={index}>{item.title}</p>
      ))}
    </div>
  );
}

export default Cart;

