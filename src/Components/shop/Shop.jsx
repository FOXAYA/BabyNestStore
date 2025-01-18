import React, { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ShopHeader from "./ShopHeader";
import Footer2 from "../Footer/Footer2";
import GalleryItems from "./GalleryItems";
import Gallery from "./Gallery";
import Product from "./GaleryData";

const Shop = () => {
  const { category, size, color, brand } = useParams();
  const location = useLocation(); 
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    category: category || "All categories",
    size: size || null,
    color: color || null,
    brand: brand || null,
    search: null, 
  });

  const searchParams = new URLSearchParams(location.search); 
  const searchQuery = searchParams.get("search");

  const categories = [
    "All categories",
    "Uncategorized",
    "Baby accessories",
    "Baby girl",
    "Baby boy",
    "Girl",
    "Boy",
    "Cribs",
    "Denim",
    "Dresses",
    "Jackets",
    "Outerwear",
    "Sweatshirts",
    "Swimsuits",
    "Tableware",
    "Toys",
    "BestSellers",
  ];
  const sizes = [
    "0-3 m",
    "3-6 m",
    "6-12 m",
    "1-2 year",
    "2-4 year",
    "4-8 year",
  ];
  const colors = ["Black", "Brown", "Blue", "Green", "Grey"];
  const brands = ["Boden", "Burberry", "Rejina Pyo", "Tinycottons"];

  
  const filteredImages = useMemo(() => {
    return Product.filter((image) => {
      const inCategory =
        filters.category === "All categories" ||
        (Array.isArray(image.category)
          ? image.category.includes(filters.category)
          : image.category === filters.category);
      const inSize =
        !filters.size ||
        (image.sizes && image.sizes.length > 0 && image.sizes.includes(filters.size));
      const inColor =
        !filters.color ||
        (image.colors && image.colors.length > 0 && image.colors.includes(filters.color));
      const inBrand = !filters.brand || image.brand === filters.brand;
      const inSearch =
         !filters.search ||
       (filters.search && image.name.toLowerCase().includes(filters.search.toLowerCase()));


      return inCategory && inSize && inColor && inBrand && inSearch;
    });
  }, [filters]);

  useEffect(() => {
    setFilters({
      category: category || "All categories",
      size: size || null,
      color: color || null,
      brand: brand || null,
      search: searchQuery || null, 
    });
  }, [category, size, color, brand, searchQuery]);

  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters, [key]: value };

      let url = "/shop";
      if (newFilters.category && newFilters.category !== "All categories") {
        url += `/category/${newFilters.category}`;
      }
      if (newFilters.size) {
        url += `/size/${newFilters.size}`;
      }
      if (newFilters.color) {
        url += `/color/${newFilters.color}`;
      }
      if (newFilters.brand) {
        url += `/brand/${newFilters.brand}`;
      }
      if (newFilters.search) {
        url += `?search=${encodeURIComponent(newFilters.search)}`;
      }

      navigate(url);
      return newFilters;
    });
  };

  const headerTitle = category
    ? category.replace("-", " ").toUpperCase()
    : searchQuery
    ? `Search Results for "${searchQuery}"`
    : "SHOP";

  return (
    <>
      <Navbar />
      <ShopHeader title={headerTitle} />
      <div style={{ backgroundColor: "#F8F4EB" }}>
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
        </div>
    </>
  );
};

export default Shop;