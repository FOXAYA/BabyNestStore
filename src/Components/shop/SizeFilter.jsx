import React, { useState } from "react";

const SizeFilter = ({ sizes = [], selectedSize, onSelectSize }) => {
  const [expanded, setExpanded] = useState(false); // State to track filter expansion

  const handleToggleExpansion = () => {
    setExpanded(!expanded);
  };

  const handleSizeSelect = (size) => {
    onSelectSize(size);
  };

  return (
    <div className="mb-3">
      <h5
        className="d-flex justify-content-between align-items-center"
        style={{ cursor: "pointer" }}
        onClick={handleToggleExpansion}
      >
        Size
        <span className="text-secondary">
          {expanded ? "-" : "+"}
        </span>
      </h5>
      <ul
        className={`list-unstyled d-flex flex-wrap justify-content-start ${
          expanded ? "" : "collapse"
        }`}
      >
        {sizes.map((size) => (
          <li key={size} className="me-2 mb-2">
            <button
              className={`btn btn-light text-start p-2 ${
                selectedSize === size ? "btn-primary" : ""
              }`}
              style={{ borderRadius: 5 }}
              onClick={() => handleSizeSelect(size)}
            >
              {size}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SizeFilter;