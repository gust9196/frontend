import React, { useState, useEffect } from 'react';
import axios from 'axios';
import"./damagerepair.css"


function DamageRepair() {
  const [formData, setFormData] = useState({
    car: '',
    leaseAgreement: '',
    description: '',
    registrationDate: '',
    repairCost: '',
  });

  const [car, setCars] = useState([]);
  const [leaseAgreement, setLeaseAgreements] = useState([]);

  useEffect(() => {
    // Hent biler fra backend og opdater cars state
    axios.get('http://localhost:4000/car')
      .then(response => setCars(response.data))
      .catch(error => console.error('Fejl ved hentning af biler:', error));

    // Hent leaseaftaler fra backend og opdater leaseAgreements state
    axios.get('http://localhost:4000/leaseAgreement')
      .then(response => setLeaseAgreements(response.data))
      .catch(error => console.error('Fejl ved hentning af leaseaftaler:', error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/damages/create', formData);
      console.log('Skade oprettet:', response.data);
      // Tilføj yderligere håndtering efter behov
    } catch (error) {
      console.error('Fejl ved oprettelse af skade:', error);
      // Tilføj fejlhåndtering efter behov
    }
  };

  return (
    <div>
      <h2>Opret Skaderegistrering</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Bil:
          <select name="car" value={formData.car} onChange={handleChange}>
            <option value="" disabled>Vælg bil</option>
            {car.map(car => (
              <option key={car.carId} value={car.carId}>{car.carBrand} {car.model}</option>
            ))}
          </select>
        </label>

        <label>
          Leaseaftale:
          <select name="leaseAgreement" value={formData.leaseAgreement} onChange={handleChange}>
    <option value="" disabled>Vælg leaseaftale</option>
    {leaseAgreement.map(lease => (
      <option key={lease.id} value={lease.id}>{lease.lease_id}</option>
    ))}
          </select>
        </label>

        <label>
          Beskrivelse:
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </label>

        <label>
          Registreringsdato:
          <input type="text" name="registrationDate" value={formData.registrationDate} onChange={handleChange} />
        </label>

        <label>
          Reparationsomkostninger:
          <input type="text" name="repairCost" value={formData.repairCost} onChange={handleChange} />
        </label>

        <button type="submit">Opret Skade</button>
      </form>
    </div>
  );
}

export default DamageRepair;
