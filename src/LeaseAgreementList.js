import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './leaseagreementlist.css';

const LeaseAgreementList = () => {
  const [leaseAgreements, setLeaseAgreements] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/leaseAgreement')
      .then(response => setLeaseAgreements(response.data))
      .catch(error => console.error('Fejl ved hentning af leasingaftaler:', error));
  }, []);

  return (
    <div className="lease-agreement-list-container">
      <h2>Liste over leasingaftaler</h2>
      <table className="lease-agreement-table">
        <thead>
          <tr>
            <th>Lease ID</th>
            <th>Kunde</th>
            <th>Bil</th>
            <th>Afhentning</th>
            <th>Aflevering</th>
            <th>Startdato</th>
            <th>Slutdato</th>
            <th>Månedlig pris</th>
            <th>Aftalt kilometer</th>
            <th>Kørte kilometer</th>
            {/* Tilføj flere kolonner efter behov */}
          </tr>
        </thead>
        <tbody>
          {leaseAgreements.map(leaseAgreement => (
            <tr key={leaseAgreement.lease_id}>
              <td>{leaseAgreement.lease_id}</td>
              <td>{leaseAgreement.customer.name}</td>
              <td>{`${leaseAgreement.car.carBrand} ${leaseAgreement.car.model}`}</td>
              <td>{leaseAgreement.pickupLocation.address}</td>
              <td>{leaseAgreement.dropoffLocation.address}</td>
              <td>{leaseAgreement.startDate}</td>
              <td>{leaseAgreement.endDate}</td>
              <td>{leaseAgreement.monthlySubscriptionPrice}</td>
              <td>{leaseAgreement.agreedSubscriptionKM}</td>
              <td>{leaseAgreement.kmDriven}</td>
              {/* Tilføj flere celler efter behov */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaseAgreementList;
