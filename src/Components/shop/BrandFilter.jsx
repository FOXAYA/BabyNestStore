import React from "react";

const BrandFilter = ({ brands = [], onSelectBrand }) => {
  if (!brands || brands.length === 0) {
    return <p>No brands available</p>;
  }

  return (
    <div className="mb-3">
      <h5
        className="d-flex justify-content-between align-items-center"
        style={{ cursor: "pointer" }}
      >
        Brand{" "}
        <span className="text-secondary">-</span>
      </h5>
      <ul className="list-unstyled">
        {brands.map((brand, index) => (
          <li key={index}>
            <button
              className="btn btn-link text-start p-0"
              style={{
                color: "rgba(0, 0, 0, 0.6)",
                textDecoration: "none",
              }}
              onClick={() => onSelectBrand(brand)}
            >
              {brand}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandFilter;