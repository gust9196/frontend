import React, { useState, useEffect } from "react";
import axios from "axios";
import "./damagerepair.css";
import DamageList from "./DamageList";

const CreateDamage = () => {
  const [cars, setCars] = useState([]);
  const [leases, setLeases] = useState([]);
  const [selectedCar, setSelectedCar] = useState("");
  const [selectedLease, setSelectedLease] = useState("");
  const [description, setDescription] = useState("");
  const [registrationDate, setRegistrationDate] = useState("");
  const [repairCost, setRepairCost] = useState("");

  useEffect(() => {
    axios
      .get("https://babackenddbapi.azurewebsites.net/car")
      .then((response) => setCars(response.data))
      .catch((error) => console.error("Fejl ved hentning af biler:", error));

    axios
      .get("https://babackenddbapi.azurewebsites.net/leaseAgreement")
      .then((response) => setLeases(response.data))
      .catch((error) =>
        console.error("Fejl ved hentning af leaseaftaler:", error),
      );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDamage = {
      car: {
        carId: selectedCar,
      },
      leaseAgreement: {
        leaseId: selectedLease,
      },
      description,
      registrationDate,
      repairCost: parseFloat(repairCost),
    };

    axios
      .post("https://babackenddbapi.azurewebsites.net/damages/create", newDamage)
      .then((response) => {
        console.log("Skade oprettet:", response.data);
        setSelectedCar("");
        setSelectedLease("");
        setDescription("");
        setRegistrationDate("");
        setRepairCost("");
      })
      .catch((error) => console.error("Fejl ved oprettelse af skade:", error));
  };

  return (
    <div className="body-damagerepair">
      <div className="container-damagerepair">
        <h2 className="title-damagerepair">Opret Skade</h2>
        <form className="form-damagerepair" onSubmit={handleSubmit}>
          <div className="form-group-damagerepair">
            <label className="form-label-damagerepair">Vælg bil:</label>
            <select
              className="form-select-damagerepair"
              value={selectedCar}
              onChange={(e) => setSelectedCar(e.target.value)}
            >
              <option value="">Vælg en bil</option>
              {cars.map((car) => (
                <option key={car.carId} value={car.carId}>
                  {car.carBrand} - {car.model}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group-damagerepair">
            <label className="form-label-damagerepair">Vælg leaseaftale:</label>
            <select
              className="form-select-damagerepair"
              value={selectedLease}
              onChange={(e) => setSelectedLease(e.target.value)}
            >
              <option value="">Vælg en leaseaftale</option>
              {leases.map((lease) => (
                <option key={lease.leaseId} value={lease.leaseId}>
                  {lease.customer.name} - {lease.car.model} - {lease.endDate}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group-damagerepair">
            <label className="form-label-damagerepair">Beskrivelse:</label>
            <textarea
              className="form-textarea-damagerepair"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group-damagerepair">
            <label className="form-label-damagerepair">
              Registreringsdato:
            </label>
            <input
              className="form-input-damagerepair"
              type="text"
              value={registrationDate}
              onChange={(e) => setRegistrationDate(e.target.value)}
            />
          </div>
          <div className="form-group-damagerepair">
            <label className="form-label-damagerepair">
              Reparationsomkostninger:
            </label>
            <input
              className="form-input-damagerepair"
              type="text"
              value={repairCost}
              onChange={(e) => setRepairCost(e.target.value)}
            />
          </div>
          <button className="form-button-damagerepair" type="submit">
            Opret Skade
          </button>
        </form>
        <DamageList />
      </div>
    </div>
  );
};

export default CreateDamage;
