// DamageList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './damagelist.css';

const DamageList = () => {
  const [damages, setDamages] = useState([]);

  useEffect(() => {
    // Hent skadeliste fra backend ved komponentens indlæsning
    axios.get('http://localhost:4000/damages')
      .then(response => setDamages(response.data))
      .catch(error => console.error('Fejl ved hentning af skadeliste:', error));
  }, []); 

  return (
    <div className="damage-list-container">
      <h2 className='damage-header'>Skadeliste</h2>
      <table className="damage-table">
        <thead>
          <tr>
            <th>Bil</th>
            <th>Leaseaftale</th>
            <th>Beskrivelse</th>
            <th>Registreringsdato</th>
            <th>Reparationsomkostninger</th>
          </tr>
        </thead>
        <tbody>
          {damages.map((damage) => (
            <tr key={damage.id} className="damage-item">
              <td>{damage.car.carBrand} - {damage.car.model}</td>
              <td>{damage.leaseAgreement.customer.name}</td>
              <td>{damage.description}</td>
              <td>{damage.registrationDate}</td>
              <td>{damage.repairCost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DamageList;
