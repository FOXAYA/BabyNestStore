import ProductCard from "../shop/ProductCard";
import Product from "../shop/GaleryData";

// Component for rendering a ProductCard with "Best Sellers" details
const BsCards = () => {
  return (
    <ProductCard
      title="Our Favs"
      subtitle="Best Sellers"
      products={Product}
      category="BestSellers"
      columns={3}
    />
  );
};

export default BsCards;
