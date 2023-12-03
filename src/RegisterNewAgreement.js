import React from 'react'
import { useNavigate } from 'react-router-dom';
import './registernewagreement.css';
import Sidebar from './Sidebar';

function RegisterNewAgreement() {

    function RegisterNewAgreementForm(props) {

        return (
            <>
            yo
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
