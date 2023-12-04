import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './customerslist.css';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  let navigate = useNavigate();

  const handleButtonClick = (endpoint) => {
    navigate(endpoint);
  };

  useEffect(() => {
    axios.get('http://localhost:4000/customers')
      .then(response => setCustomers(response.data))
      .catch(error => console.error('Fejl ved hentning af kunder:', error));
  }, []);

  return (
    <div className="customer-list-container">
      <h2>Liste over kunder</h2>
      <div className="customer-grid">
        {customers.map(customer => (
          <div key={customer.customerId} className="customer-item">
            <div className="customer-details">
              <p><strong>ID:</strong> {customer.customerId}</p>
              <p><strong>Navn:</strong> {customer.carName}</p>
              <p><strong>Adresse:</strong> {customer.address}</p>
              <p><strong>Telefon nummer:</strong> {customer.phoneNumber}</p>
              <p><strong>E-mail:</strong> {customer.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerList;
