import React from "react";

const SizeFilter = ({ sizes = [], selectedSize, onSelectSize }) => {
  return (
    <div className="mb-3">
      <h5
        className="d-flex justify-content-between align-items-center"
        style={{ cursor: "pointer" }}
      >
        Size <span className="text-secondary">-</span>
      </h5>
      <ul className="list-unstyled d-flex flex-wrap justify-content-start">
        {sizes.map((size) => (
          <li key={size} className="me-2 mb-2">
            <button
              className={`btn btn-light text-start p-2 ${selectedSize === size ? 'btn-primary' : ''}`}
              style={{
                borderRadius: 5, 
              }}
              onClick={() => onSelectSize(size)}
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
