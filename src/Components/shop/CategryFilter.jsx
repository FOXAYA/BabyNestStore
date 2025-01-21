import React, { useState } from "react";

const CategoryFilter = ({
  categories = [],
  selectedCategory,
  onSelectCategory,
  getFilterClass,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const sortedCategories = [...categories].sort((a, b) => a.localeCompare(b));

  return (
    <div className="mb-3">
      <h5
        className="d-flex justify-content-between align-items-center catogary-filter"
        style={{ cursor: "pointer" }}
        onClick={toggleFilter}
      >
        Filter by category <span className="text-secondary">-</span>
      </h5>

      {isOpen && (
        <ul className="list-unstyled catogary-list">
          {sortedCategories.map((category) => (
            <li key={category}>
              <button
                className={`btn btn-link text-start p-0 ${getFilterClass(
                  category,
                  selectedCategory
                )}`}
                style={{
                  textDecoration: "none",
                }}
                onClick={() => onSelectCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryFilter;
