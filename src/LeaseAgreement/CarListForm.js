import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Car/carlist.css";

const CarListForm = ({ goToNextStep, onSelectCar }) => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleCarSelect = (car) => {
    setSelectedCar(car);
    onSelectCar(car);
    console.log(car);
  };

  const handleNextButtonClick = () => {
    if (!selectedCar) {
      alert("Vælg venligst en bil før du fortsætter.");
    } else {
      onSelectCar(selectedCar);
      goToNextStep();
      console.log(selectedCar);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/car")
      .then((response) => setCars(response.data))
      .catch((error) => console.error("Fejl ved hentning af biler:", error));
  }, []);

  return (
    <>
      <div className="cc-flex-container">
        <div className="cc-div-2">Register ny aftale</div>
        <div onClick={handleNextButtonClick} className="cc-next-btn">
          Næste
        </div>
      </div>
      <div className="car-list-container">
        <div className="car-grid">
          {cars.map((car) => (
            <div
              key={car.carId}
              className={`car-item ${selectedCar === car ? "selected" : ""}`}
              onClick={() => handleCarSelect(car)}
            >
              <img
                src={car.urlPhoto}
                alt={`${car.carBrand} ${car.model}`}
                className="car-image"
              />
              <div className="car-details">
                <p>
                  <strong>ID:</strong> {car.carId}
                </p>
                <p>
                  <strong>Mærke:</strong> {car.carBrand}
                </p>
                <p>
                  <strong>Model:</strong> {car.model}
                </p>
                <p>
                  <strong>Nummerplade:</strong> {car.licensePlate}
                </p>
                <p>
                  <strong>Pris:</strong> {car.price}
                </p>
                <p>
                  <strong>Brændstof:</strong> {car.fuel}
                </p>
                <p>
                  <strong>Kørte kilometer ved start:</strong>{" "}
                  {car.drivenKilometersAtSubscriptionStart}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CarListForm;
