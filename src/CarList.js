import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './carlist.css';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/car')
      .then(response => setCars(response.data))
      .catch(error => console.error('Fejl ved hentning af biler:', error));
  }, []);

  return (
    <div className="car-list-container">
      <h2>Liste over biler</h2>
      <div className="car-grid">
        {cars.map(car => (
          <div key={car.carId} className="car-item">
            <img src={car.urlPhoto} alt={`${car.carBrand} ${car.model}`} className="car-image" />
            <div className="car-details">
              <p><strong>ID:</strong> {car.carId}</p>
              <p><strong>Mærke:</strong> {car.carBrand}</p>
              <p><strong>Model:</strong> {car.model}</p>
              <p><strong>Nummerplade:</strong> {car.licensePlate}</p>
              <p><strong>Pris:</strong> {car.price}</p>
              <p><strong>Brændstof:</strong> {car.fuel}</p>
              <p><strong>Kørte kilometer ved start:</strong> {car.drivenKilometersAtSubscriptionStart}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;