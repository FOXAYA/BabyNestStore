import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CategoryFilter from "./CategryFilter";
import SizeFilter from "./SizeFilter";
import ColorFilter from "./ColorFilter";
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";

const GalleryItems = ({ categories, sizes, colors, brands, filters, onFilterChange }) => {
  return (
    <div className="container my-4 p-3">
      {/* Filter by Category */}
      <CategoryFilter
        categories={categories}
        selectedCategory={filters.category}
        onSelectCategory={(category) => onFilterChange("category", category)}
      />

      {/* Filter by Size */}
      <SizeFilter
        sizes={sizes}
        selectedSize={filters.size}
        onSelectSize={(size) => onFilterChange("size", size)}
      />

      {/* Filter by Color */}
      <ColorFilter
        colors={colors}
        selectedColor={filters.color}
        onSelectColor={(color) => onFilterChange("color", color)}
      />

      {/* Filter by Brand */}
      <BrandFilter
        brands={brands}
        selectedBrand={filters.brand}
        onSelectBrand={(brand) => onFilterChange("brand", brand)}
      />

      {/* Filter by Price */}
      <PriceFilter
        priceRange={filters.price}
        onRangeChange={(priceRange) => onFilterChange("price", priceRange)}
      />
    </div>
  );
};

export default GalleryItems;
