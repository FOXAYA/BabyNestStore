import React, { useState, useEffect } from "react";

const PriceFilter = ({ priceRange, onRangeChange }) => {
  const [rangeValues, setRangeValues] = useState(priceRange || [10, 340]);

  const handleRangeChange = (e) => {
    const { name, value } = e.target;
    const newRangeValues = [...rangeValues];
    if (name === "min") {
      newRangeValues[0] = parseInt(value);
    } else {
      newRangeValues[1] = parseInt(value);
    }
    setRangeValues(newRangeValues);
    onRangeChange(newRangeValues);
  };

  useEffect(() => {
    if (priceRange && Array.isArray(priceRange) && priceRange.length === 2) {
      setRangeValues(priceRange);
    }
  }, [priceRange]);

  const rangeContainerStyle = {
    position: 'relative',
    width: '100%',
  };

  const sliderStyle = {
    '-webkit-appearance': 'none',
    appearance: 'none',
    width: '100%',
    height: '10px',
    background: 'rgba(0, 0, 0, 0.6)',
    outline: 'none',
    borderRadius: '5px',
    position: 'absolute',
  };

  

  return (
    <div className="mb-3">
      <h5 className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
        Price <span className="text-secondary">-</span>
      </h5>
      <div className="range-container" style={rangeContainerStyle}>
        <input
          type="range"
          name="min"
          min={10}
          max={340}
          value={rangeValues[0]}
          onChange={handleRangeChange}
          className="slider slider-min"
          style={sliderStyle}
        />
        <input
          type="range"
          name="max"
          min={10}
          max={340}
          value={rangeValues[1]}
          onChange={handleRangeChange}
          className="slider slider-max"
          style={sliderStyle}
        />
      </div>
      <p>
        Price: ${rangeValues[0]} - ${rangeValues[1]}
      </p>
    </div>
  );
};

export default PriceFilter;
