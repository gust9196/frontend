import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './registernewcustomer.css';

function RegisterNewCustomer() {

    function RegisterNewCustomerForm(props) {

        return (
            <>
                <div className="div-container-nc">
                    <div className="div-header-title">Register ny kunde</div>
                    <div className="div-title">Navn</div>
                    <input type="text" className="div-input-nc" />
                    <div className="div-title">Adresse</div>
                    <input type="text" className="div-input-nc" />
                    <div className="div-title">Telefon nummer</div>
                    <input type="text" className="div-input-nc" />
                    <div className="div-title">E-mail</div>
                    <input type="text" className="div-input-nc" />
                    <div className="div-new-customer-btn">Register ny kunde</div>
                </div>
            </>
        )
    }

        const [name, setName] = useState('');
        const [address, setAddress] = useState('');
        const [phoneNumber, setPhoneNumber] = useState('');
        const [email, setEmail] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            // Her vil du håndtere indsendelsen af form data
            };

        let navigate = useNavigate();

        const handleButtonClick = (endpoint) => {
            navigate(endpoint);
        };

            return (
                <>
                <div className="nc-main-container">
                    <RegisterNewCustomerForm/>
                </div>
                </>
            );
}

export default RegisterNewCustomer
