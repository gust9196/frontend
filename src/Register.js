import React, {useState} from 'react'
import "./register.css"
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

function Register() {

    function RegisterForm(props) {

        return(
            <form onSubmit={handleSubmit}>
      <label>
        Navn
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Adresse
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <label>
        Telefon nummer
        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </label>
      <label>
        E-Mail
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit">Register ny kunde</button>
    </form>
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
        <Sidebar />
      </>
    );


  }
   
  export default Register;
  