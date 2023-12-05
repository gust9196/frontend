import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './registernewagreement.css';

function RegisterNewAgreement() {

    function RegisterNewAgreementForm(props) {

        const [searchTerm, setSearchTerm] = useState('');
        const [suggestions, setSuggestions] = useState([]);
        const [customers, setCustomers] = useState([]);

        const [leasePeriod, setLeasePeriod] = useState('');

        let navigate = useNavigate();

        useEffect(() => {
            axios.get('http://localhost:4000/customer')
              .then(response => setCustomers(response.data))
              .catch(error => console.error('Error fetching customers:', error));
          }, []);
        
          useEffect(() => {
            if (searchTerm) {
              const filtered = customers.filter(customer => 
                customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                customer.phoneNumber.includes(searchTerm) ||
                customer.customerID.includes(searchTerm) ||
                customer.address.toLowerCase().includes(searchTerm.toLowerCase())
              );
              setSuggestions(filtered);
            } else {
              setSuggestions([]);
            }
          }, [searchTerm, customers]);
        
        
          const handleButtonClick = (endpoint) => {
            navigate(endpoint);
          };
    
        const handleChange = (e) => {
            setSearchTerm(e.target.value);
        };

        return (
            <>
            <h1>Register ny aftale</h1>
            <div className="registernewagreement-container">
            <div className="search-container">
            <h2>Søg kunde</h2>
            <div className="customer-rows">
            <div className="customer-search">
            <input type="text" value={searchTerm} onChange={handleChange} placeholder="Søg kunde..." />
            <div>
                {suggestions.map(customer => (
                    <div key={customer.customerID}>{customer.name} - {customer.email}</div>
                ))}
            </div>
            </div>
            <div className="customer-find">
            <button className='reg-new-customer-btn' onClick={() => handleButtonClick('/new-customer')}>Register ny kunde</button>
            </div>
            </div>
            </div>
            <div className="agreement-periode">
                <h2>Lejeperiode</h2>
                <div className='periode-rows'>
                    <div className='periode-row1'>
                        <h2>Startdato</h2>
                    <input type="date" id="start" name="start" />
                    </div>
                    <div className='periode-row2'>
                        <h2>Slutdato</h2>
                    <input type="date" id="stop" name="stop" />
                    </div>
                </div>
                
            </div>
            </div>
            </>

        )
    }

    let navigate = useNavigate();

    const handleButtonClick = (endpoint) => {
        navigate(endpoint);
    };




  return (
        <>
         <RegisterNewAgreementForm />
        </>
        
  )
}

export default RegisterNewAgreement
