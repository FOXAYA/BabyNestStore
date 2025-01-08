import React from "react";

const CategoryFilter = ({ categories = [], onSelectCategory }) => {
  return (
    <div className="mb-3">
      <h5
        className="d-flex justify-content-between align-items-center"
        style={{ cursor: "pointer" }}
      >
        Filter by category <span className="text-secondary">-</span>
      </h5>
      <ul className="list-unstyled">
        {categories.map((category) => (
          <li key={category}>
            <button
              className="btn btn-link text-start p-0"
              style={{
                color: "rgba(0, 0, 0, 0.6)",
                textDecoration: "none", 
              }}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
