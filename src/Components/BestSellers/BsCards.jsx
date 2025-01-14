import ProductCard from "../shop/ProductCard";
import Product from "../shop/GaleryData";

const BsCards= () => {
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
