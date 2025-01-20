import React, { useState } from "react";

const ColorFilter = ({ colors, onSelectColor }) => {
  const [state, setState] = useState({ isColorOpen: false });

  const toggleColorSection = () => {
    setState((prevState) => ({
      ...prevState,
      isColorOpen: !prevState.isColorOpen
    }));
  };

  if (!colors || !Array.isArray(colors)) {
    return <p>No colors available</p>;
  }

  return (
    <div className="mb-3">
      <h5
        className="d-flex justify-content-between align-items-center"
        onClick={toggleColorSection}
        style={{ cursor: "pointer" }}
      >
        Color{" "}
        <span className="text-secondary">
          {state.isColorOpen ? "-" : "+"}
        </span>
      </h5>
      {state.isColorOpen && (
        <ul className="list-unstyled d-flex flex-wrap justify-content-start">
          {colors.map((color) => (
            <li key={color} className="me-2 mb-2">
              <button
                className="btn p-0"
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  backgroundColor: color,
                  border: color.toLowerCase() === "white" ? "1px solid #000" : "none",
                }}
                onClick={() => onSelectColor(color)}
                title={color}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ColorFilter;
