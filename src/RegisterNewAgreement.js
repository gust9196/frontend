import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './registernewagreement.css';
import CarList from './CarList';

function RegisterNewAgreement() {

    function RegisterNewAgreementForm(props) {

        const [searchTerm, setSearchTerm] = useState('');
        const [suggestions, setSuggestions] = useState([]);
        const [customers, setCustomers] = useState([]);

        const [leasePeriod, setLeasePeriod] = useState('');

        const [selectedCustomer, setSelectedCustomer] = useState(null);

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
                customer.customerID.toString().includes(searchTerm) ||
                customer.address.toLowerCase().includes(searchTerm.toLowerCase())
              ).slice(0, 4); // Begrænser resultaterne til de første 4 kunder
          
              setSuggestions(filtered);
            } else {
              setSuggestions([]);
            }
          }, [searchTerm, customers]);
        
          const handleCustomerSelect = (customer) => {
            setSelectedCustomer(customer); // Opdater state med valgt kunde
            setSearchTerm(''); // Ryd søgefeltet
            setSuggestions([]); // Ryd forslag
        };
          
        
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
                                <div key={customer.customerID} className="customer-suggestion" onClick={() => handleCustomerSelect(customer)}>
                                    <p>{customer.name} - <span>{customer.email}</span></p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="customer-find">
                        <button className='reg-new-customer-btn' onClick={() => handleButtonClick('/new-customer')}>Register ny kunde</button>
                    </div>
                </div>
                {selectedCustomer && (
                    <div className="selected-customer">
                        <p>{selectedCustomer.name} - <span>{selectedCustomer.email}</span></p>
                    </div>
                )}
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
         <div className='reg-spacer'></div>
         <CarList />
        </>
        
  )
}

export default RegisterNewAgreement
