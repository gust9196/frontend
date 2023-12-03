import React from 'react';
import "./carform.css";

const CarForm = ({ carData }) => {
  return (
    <div className="cf-image-container">
      <img className='cf-img'
        src={carData.imageLink } 
      />
      <input 
              type="text" 
              value={carData.brand} 
              readOnly
              className='car-name-input'
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
              value={carData.regNumber} 
              readOnly
              placeholder="Registeringsnummer"
            />
            <input 
              type="text" 
              value={carData.buyPrice} 
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
              value={carData.km} 
              readOnly
              placeholder="KM kørt ved registering"
            />
            <input 
              type="text" 
              value={carData.buyDate} 
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
