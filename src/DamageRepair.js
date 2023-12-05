import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./damagerepair.css"

const CreateDamage = () => {
  const [cars, setCars] = useState([]);
  const [leases, setLeases] = useState([]);
  const [selectedCar, setSelectedCar] = useState('');
  const [selectedLease, setSelectedLease] = useState('');
  const [description, setDescription] = useState('');
  const [registrationDate, setRegistrationDate] = useState('');
  const [repairCost, setRepairCost] = useState('');

  useEffect(() => {
    // Hent biler fra databasen ved komponentens indlæsning
    axios.get('http://localhost:4000/car')
      .then(response => setCars(response.data))
      .catch(error => console.error('Fejl ved hentning af biler:', error));

    // Hent leaseaftaler fra databasen ved komponentens indlæsning
    axios.get('http://localhost:4000/leaseAgreement')
      .then(response => setLeases(response.data))
      .catch(error => console.error('Fejl ved hentning af leaseaftaler:', error));
  }, []); // Tomt array betyder, at useEffect kun køres ved komponentens indlæsning

  const handleSubmit = (e) => {
    e.preventDefault();

    // Opret skadeobjekt
    const newDamage = {
      car: {
        carId: selectedCar
      },
      leaseAgreement: {
        leaseId: selectedLease
      },
      description,
      registrationDate,
      repairCost: parseFloat(repairCost)
    };

    // Send POST-anmodning til backend
    axios.post('http://localhost:4000/damages/create', newDamage)
      .then(response => {
        console.log('Skade oprettet:', response.data);
        // Nulstil formular efter oprettelse
        setSelectedCar('');
        setSelectedLease('');
        setDescription('');
        setRegistrationDate('');
        setRepairCost('');
      })
      .catch(error => console.error('Fejl ved oprettelse af skade:', error));
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
          <label className="form-label-damagerepair">Registreringsdato:</label>
          <input
            className="form-input-damagerepair"
            type="text"
            value={registrationDate}
            onChange={(e) => setRegistrationDate(e.target.value)}
          />
        </div>
        <div className="form-group-damagerepair">
          <label className="form-label-damagerepair">Reparationsomkostninger:</label>
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
    </div>
  </div>
);

  
  
  
};

export default CreateDamage;
