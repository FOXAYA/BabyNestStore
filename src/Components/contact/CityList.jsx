import React, { useState, useEffect } from "react";
import citiesData from "./cities.json";
import styles from "../Styles/City.module.css";

const CityList = ({ onSelectCity }) => {
  const [cities, setCities] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    setCities(citiesData.cities);
  }, []);

  const handleCardClick = (index, city) => {
    setActiveIndex(index);
    onSelectCity(city);
  };

  return (
    <div className={styles.cityListContainer}>
      {cities.map((city, index) => (
        <div
          key={city.id}
          tabIndex={0}
          className={`${styles.cityCard} ${
            activeIndex === index ? styles.activeCard : ""
          }`}
          onClick={() => handleCardClick(index, city)}
        >
          <h2>
            {city.emoji} {city.cityName}
          </h2>
          <p>{city.street}</p>
          <p>{city.telephone}</p>
          <p>{city.info}</p>
        </div>
      ))}
    </div>
  );
};

export default CityList;
