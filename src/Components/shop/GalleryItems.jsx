import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CategoryFilter from "./CategryFilter";
import SizeFilter from "./SizeFilter";
import ColorFilter from "./ColorFilter";
import BrandFilter from "./BrandFilter";
import "../Styles/Gallery.css";

const GalleryItems = ({ categories, sizes, colors, brands, filters, onFilterChange }) => {
  const getFilterClass = (filterValue, currentValue) => {
    return filterValue === currentValue ? "filter-active" : "filter-inactive";
  };

  return (
    <div className="container my-4 p-1">
      <div className="row">
        {/* Filter by Category */}
        <div className="col-12 mb-3">
          <CategoryFilter
            categories={categories}
            selectedCategory={filters.category}
            onSelectCategory={(category) => onFilterChange("category", category)}
            getFilterClass={getFilterClass} 
          />
        </div>

        {/* Filter by Size */}
        <div className="col-12 mb-3">
          <SizeFilter
            sizes={sizes}
            selectedSize={filters.size}
            onSelectSize={(size) => onFilterChange("size", size)}
            getFilterClass={getFilterClass} 
          />
        </div>

        {/* Filter by Color */}
        <div className="col-12 mb-3">
          <ColorFilter
            colors={colors}
            selectedColor={filters.color}
            onSelectColor={(color) => onFilterChange("color", color)}
            getFilterClass={getFilterClass}
          />
        </div>

        {/* Filter by Brand */}
        <div className="col-12 mb-3">
          <BrandFilter
            brands={brands}
            selectedBrand={filters.brand}
            onSelectBrand={(brand) => onFilterChange("brand", brand)}
            getFilterClass={getFilterClass} 
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryItems;
