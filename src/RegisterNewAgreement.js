import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './registernewagreement.css';
import Sidebar from './Sidebar';

function RegisterNewAgreement() {

    function RegisterNewAgreementForm(props) {

        const [searchTerm, setSearchTerm] = useState('');
        const [suggestions, setSuggestions] = useState([]);
        const [customers, setCustomers] = useState([]);

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
            <input type="text" value={searchTerm} onChange={handleChange} placeholder="Søg kunde..." />
            <div>
                {suggestions.map(customer => (
                    <div key={customer.id}>{customer.name} - {customer.email}</div>
                ))}
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
