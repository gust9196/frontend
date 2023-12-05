import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './registernewagreement.css';

function RegisterNewAgreement() {

    function RegisterNewAgreementForm(props) {

        const [searchTerm, setSearchTerm] = useState('');
        const [suggestions, setSuggestions] = useState([]);
        const [customers, setCustomers] = useState([]);

        const [leasePeriod, setLeasePeriod] = useState('');

        /*useEffect(() => {
            // Antag at fetchCustomers henter kundeliste fra backend
            fetchCustomers().then(data => setCustomers(data));
        }, []);*/

        useEffect(() => {
            if (searchTerm) {
                const filtered = customers.filter(customer => 
                    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    customer.phone.includes(searchTerm) ||
                    customer.customerNumber.includes(searchTerm)
                );
                setSuggestions(filtered);
            } else {
                setSuggestions([]);
            }
        }, [searchTerm, customers]);
    
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
                    <div key={customer.id}>{customer.name} - {customer.email}</div>
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
        <div className="na-main-container">
            <RegisterNewAgreementForm />
        </div>
  )
}

export default RegisterNewAgreement
