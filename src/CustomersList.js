import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './customerslist.css';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  /*
  let navigate = useNavigate();

  const handleButtonClick = (endpoint) => {
    navigate(endpoint);
  };
*/
  useEffect(() => {
    axios.get('http://localhost:4000/customer')
      .then(response => setCustomers(response.data))
      .catch(error => console.error('Fejl ved hentning af kunder:', error));
  }, []);

  return (
    <div className="customer-list-container">
      <h2>Liste over kunder</h2>
      <div className="customer-grid">
        {customers.map(customer => (
          <div key={customer.customerID} className="customer-item">
            <div className="customer-details">
              <p><strong>ID:</strong> {customer.customerID}</p>
              <p><strong>Navn:</strong> {customer.name}</p>
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
