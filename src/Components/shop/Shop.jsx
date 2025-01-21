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

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 767);

  // Handle screen resize for small screen detection
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update filters when URL parameters or search query changes
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search");

  useEffect(() => {
    setFilters({
      category: category || "All categories",
      size: size || null,
      color: color || null,
      brand: brand || null,
      search: searchQuery || null,
    });
  }, [category, size, color, brand, searchQuery]);

  // Handle filter logic with useMemo for optimized re-computation
  const filteredImages = useMemo(() => {
    return Product.filter((product) => {
      const inCategory =
        filters.category === "All categories" ||
        (Array.isArray(product.category)
          ? product.category.includes(filters.category)
          : product.category === filters.category);

      const inSize = !filters.size || (product.sizes && product.sizes.includes(filters.size));

      const inColor =
        !filters.color ||
        (product.colors &&
          product.colors.some(
            (productColor) =>
              productColor.toLowerCase().trim() === filters.color.toLowerCase().trim()
          ));

      const inBrand = !filters.brand || product.brand === filters.brand;

      const inSearch =
        !filters.search ||
        product.name.toLowerCase().includes(filters.search.toLowerCase());

      return inCategory && inSize && inColor && inBrand && inSearch;
    });
  }, [filters]);

  // Update filters and navigate to new URL on filter change
  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters, [key]: value };

      let url = "/shop";
      if (updatedFilters.category && updatedFilters.category !== "All categories") {
        url += `/category/${updatedFilters.category}`;
      }
      if (updatedFilters.size) {
        url += `/size/${updatedFilters.size}`;
      }
      if (updatedFilters.color) {
        url += `/color/${updatedFilters.color}`;
      }
      if (updatedFilters.brand) {
        url += `/brand/${updatedFilters.brand}`;
      }
      if (updatedFilters.search) {
        url += `?search=${encodeURIComponent(updatedFilters.search)}`;
      }

      navigate(url);
      return updatedFilters;
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
            {/* Sidebar Filters */}
            {!isSmallScreen && (
              <div className="col-md-3">
                <GalleryItems
                  categories={[
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
                  ]}
                  sizes={["0-3 m", "3-6 m", "6-12 m", "1-2 year", "2-4 year", "4-8 year"]}
                  colors={["Black", "Brown", "Blue", "Green", "Grey"]}
                  brands={["Boden", "Burberry", "Rejina Pyo", "Tinycottons"]}
                  filters={filters}
                  onFilterChange={handleFilterChange}
                />
              </div>
            )}

            {/* Gallery Section */}
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
