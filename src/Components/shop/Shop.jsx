import React, { useState, useMemo } from "react";
import Navbar from "../Navbar/Navbar";
import ShopHeader from "./ShopHeader";
import Footer2 from "../Footer/Footer2";
import GalleryItems from "./GalleryItems";
import Gallery from "./Gallery";
import Images from "./GaleryData";

const Shop = () => {
  const [filters, setFilters] = useState({
    category: "All categories",
    size: null,
    color: null,
    brand: null,
    price: [10, 340],
  });

  const categories = ["All categories", "Uncategorized", "Baby accessories", "Baby girl", "Baby boy", "Girl", "Boy", "Cribs", "Denim", "Dresses", "Jackets", "Outerwear", "Sweatshirts", "Swimsuits", "Tableware", "Toys"];
  const sizes = ["0-3 m", "3-6 m", "6-12 m", "1-2 year", "2-4 year", "4-8 year"];
  const colors = ["Black", "Brown", "Blue", "Green", "Grey"];
  const brands = ["Boden", "Burberry", "Rejina Pyo", "Tinycottons"];

  const filteredImages = useMemo(() => {
    return Images.filter((image) => {
      const inCategory = filters.category === "All categories" || (Array.isArray(image.category) ? image.category.includes(filters.category) : image.category === filters.category);
      const inSize = !filters.size || image.sizes.includes(filters.size);
      const inColor = !filters.color || image.colors.includes(filters.color);
      const inBrand = !filters.brand || image.brand === filters.brand;
      const inPrice = image.price >= filters.price[0] && image.price <= filters.price[1];

      return inCategory && inSize && inColor && inBrand && inPrice;
    });
  }, [filters]);

  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
  };

  return (
    <>
      <Navbar />
      <ShopHeader />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <GalleryItems
              categories={categories}
              sizes={sizes}
              colors={colors}
              brands={brands}
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </div>
          <div className="col-md-9">
            <Gallery images={filteredImages} />
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default Shop;