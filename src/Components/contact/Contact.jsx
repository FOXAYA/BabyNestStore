import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import CityList from "./CityList";
import Map from "./Map";
import Footer2 from "../Footer/Footer2";
import ContactUs from "./ContactUs";
import City from "./City";
import HeaderSection from "./HeaderSection";

const Contact = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <>
      <Navbar />

      <HeaderSection
        title="Contact Us"
         subtitle={"HOME - CONTACT US"}
      />
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
