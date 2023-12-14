import React, { useState } from "react";
import CarForm from "./CarForm";
import "./registernewcar.css";
import axios from "axios";

function RegisterNewCar() {
  const [carData, setCarData] = useState({
    carBrand: "",
    model: "",
    licensePlate: "",
    price: "",
    fuel: "",
    drivenKilometersAtSubscriptionStart: "",
    dateOfPurchase: "",
    urlPhoto: "",
  });

  const handleChange = (e) => {
    setCarData({ ...carData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Formularen blev indsendt");
    try {
      const response = await axios.post(
        "https://babackenddbapi.azurewebsites.net/car/create",
        carData,
      );
      console.log("Bil oprettet:", response.data);
    } catch (error) {
      console.error("Fejl ved oprettelse af bil:", error);
    }
  };
  return (
    <div className="re-main-container">
      <div className="div-container">
        <form onSubmit={handleSubmit}>
          <div className="div-header-title">Register ny bil</div>
          <div className="row-container">
            <div className="row-1">
              <div className="div-title">Bilmærke</div>
              <select
                name="carBrand"
                className="custom-select"
                value={carData.carBrand}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Vælg bilmærke
                </option>
                <option value="BMW">BMW</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Tesla">Tesla</option>
                <option value="VW">VW</option>
                <option value="Audi">Audi</option>
                <option value="Toyota">Toyota</option>
                <option value="Ford">Ford</option>
              </select>
              <div className="div-title">Model</div>
              <input
                type="text"
                name="model"
                className="div-input"
                value={carData.model}
                onChange={handleChange}
              />
              <div className="div-title">Registeringsnummer</div>
              <input
                type="text"
                name="licensePlate"
                className="div-input"
                value={carData.licensePlate}
                onChange={handleChange}
              />
              <div className="div-title">Indkøbspris</div>
              <input
                type="double"
                name="price"
                className="div-input"
                value={carData.price}
                onChange={handleChange}
              />
              <button type="submit" className="div-new-car-btn">
                {" "}
                Register ny bil
              </button>
            </div>
            <div className="row-2">
              <div className="div-title">Brændstof</div>
              <select
                name="fuel"
                className="custom-select"
                value={carData.fuel}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Vælg brændstof
                </option>
                <option value="El">El</option>
                <option value="Benzin">Benzin</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Diesel">Diesel</option>
              </select>
              <div className="div-title">KM kørt ved registering</div>
              <input
                type="text"
                name="drivenKilometersAtSubscriptionStart"
                className="div-input"
                value={carData.drivenKilometersAtSubscriptionStart}
                onChange={handleChange}
              />
              <div className="div-title">Indkøbs dato</div>
              <input
                type="text"
                name="dateOfPurchase"
                className="div-input"
                value={carData.dateOfPurchase}
                onChange={handleChange}
              />
              <div className="div-title">Link til billede</div>
              <input
                type="text"
                name="urlPhoto"
                className="div-input"
                value={carData.urlPhoto}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
      </div>
      <CarForm carData={carData} />
    </div>
  );
}

export default RegisterNewCar;
