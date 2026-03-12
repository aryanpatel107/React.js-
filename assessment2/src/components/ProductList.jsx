import products from "../data/products";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="product-grid">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductList;