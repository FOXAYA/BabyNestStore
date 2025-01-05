import React, { useState } from "react";

import NavbarLayout from "../layouts/NavbarLayout";

import CityList from "./CityList";
import Map from "./Map";
import Footer2 from "../Footer2/Footer2";
import ContactUs from "./ContactUs";
import ContactHeader from "./ContactHeader";
import City from "./City";

const Contact = () => {
  const [selectedCity, setSelectedCity] = useState(null);


  return (
    <>
      <NavbarLayout />
      
      <ContactHeader />
      
      <ContactUs />
      <City />
      <div className="city-list-map-container">
        <CityList onSelectCity={setSelectedCity} />
        <Map selectedCity={selectedCity} />
        <Footer2 />
      </div>
    </>
  );
};

export default Contact;
