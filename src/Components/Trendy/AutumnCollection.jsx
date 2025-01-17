import ProductCard from "../shop/ProductCard";
import Product from "../shop/GaleryData";
import ButtonUi from "../ui/ButtonUi";

const AutumnCollection = () => {
  return (
    < div className="py-4 autumn-container">
      <ProductCard
        title="Trending now"
        subtitle="Autumn collection"
        products={Product}
        category="OuterWear"
        columns={4}
      />

      <div className="Shop_btn text-center">
        <ButtonUi
          className="rounded-5 px-5 py-3 text-white Shop_btn"
          text={"Shop Collection"}
          variant={"secondary"}
        />
      </div>
    </div>
  );
};

export default AutumnCollection;
