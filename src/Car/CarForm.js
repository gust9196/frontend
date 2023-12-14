import React from "react";
import "./carform.css";

const CarForm = ({ carData }) => {
  return (
    <div className="cf-image-container">
      <img className="cf-img" src={carData.urlPhoto} alt="car" />
      <input
        type="text"
        value={carData.carBrand}
        readOnly
        className="car-name-input"
        placeholder="Bilmærke"
      />
      <div className="cf-input-container">
        <div className="cf-input-row">
          <div className="cf-input-column">
            <input
              type="text"
              value={carData.model}
              readOnly
              placeholder="Model"
            />
            <input
              type="text"
              value={carData.licensePlate}
              readOnly
              placeholder="Registeringsnummer"
            />
            <input
              type="double"
              value={carData.price}
              readOnly
              placeholder="Indkøbspris"
            />
          </div>
          <div className="cf-input-column">
            <input
              type="text"
              value={carData.fuel}
              readOnly
              placeholder="Brændstof"
            />
            <input
              type="text"
              value={carData.drivenKilometersAtSubscriptionStart}
              readOnly
              placeholder="KM kørt ved registering"
            />
            <input
              type="text"
              value={carData.dateOfPurchase}
              readOnly
              placeholder="Indkøbs dato"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarForm;
