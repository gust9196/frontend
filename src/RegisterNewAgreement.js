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
            <div className="customer-search">
            <input type="text" value={searchTerm} onChange={handleChange} placeholder="Søg kunde..." />
            <div>
                {suggestions.map(customer => (
                    <div key={customer.id}>{customer.name} - {customer.email}</div>
                ))}
            </div>
            </div>
            </div>
            <div className="agreement-periode">
                <h2>Lejeperiode</h2>
                <select value={leasePeriod} className='custom-select-na' onChange={(e) => setLeasePeriod(e.target.value)}>
                    <option value="">Vælg lejeperiode</option>
                    <option value="3 måneder">3 måneder</option>
                    <option value="6 måneder">6 måneder</option>
                    <option value="9 måneder">9 måneder</option>
                    <option value="12 måneder">12 måneder</option>
                    <option value="15 måneder">15 måneder</option>
                    <option value="18 måneder">18 måneder</option>
                    <option value="21 måneder">21 måneder</option>
                    <option value="24 måneder">24 måneder</option>
                    <option value="27 måneder">27 måneder</option>
                    <option value="30 måneder">30 måneder</option>
                    <option value="33 måneder">33 måneder</option>
                    <option value="26 måneder">36 måneder</option>
                </select>
                
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
