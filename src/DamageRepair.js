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
    <div>
      <h2>Opret Skade</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Vælg bil:
          <select value={selectedCar} onChange={(e) => setSelectedCar(e.target.value)}>
            <option value="">Vælg en bil</option>
            {cars.map(car => (
              <option key={car.carId} value={car.carId}>{car.carBrand} - {car.model}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Vælg leaseaftale:
          <select value={selectedLease} onChange={(e) => setSelectedLease(e.target.value)}>
            <option value="">Vælg en leaseaftale</option>
            {leases.map(lease => (
              <option key={lease.leaseId} value={lease.leaseId}>{lease.startDate} - {lease.endDate}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Beskrivelse:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Registreringsdato:
          <input type="text" value={registrationDate} onChange={(e) => setRegistrationDate(e.target.value)} />
        </label>
        <br />
        <label>
          Reparationsomkostninger:
          <input type="text" value={repairCost} onChange={(e) => setRepairCost(e.target.value)} />
        </label>
        <br />
        <button type="submit">Opret Skade</button>
      </form>
    </div>
  );
};

export default CreateDamage;
