import React, {useState} from 'react'
import { Route, Router, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import './register.css';

function Register() {

    function RegisterForm(props) {

        return(
            <>
                <div className="div-container">
                    <div className="div-header-title">Register ny bil</div>
                    <div className="div-title">Bilmærke</div>
                    <div className="div-input" />
                    <div className="div-title">Model</div>
                    <div className="div-input" />
                    <div className="div-title">Registeringsnummer</div>
                    <div className="div-input" />
                    <div className="div-title">Indkøbspris</div>
                    <div className="div-input" />
                    <div className="div-title">Brændstof</div>
                    <div className="div-input" />
                    <div className="div-title">KM kørt ved registering</div>
                    <div className="div-input" />
                    <div className="div-title">Link til billede</div>
                    <div className="div-input" />
                    <div className="div-new-customer">Register ny kunde</div>
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
        <div className="re-main-container">
            <Sidebar />
            <RegisterForm />
        </div>
      </>
    );


  }
   
  export default Register;
  