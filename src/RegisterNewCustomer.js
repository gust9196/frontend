import React from 'react'
import './registernewcustomer.css';

function RegisterNewCustomer() {
  return (
    <>
        <div className="div-container">
            <div className="div-header-title">Register ny kunde</div>
            <div className="div-title">Navn</div>
            <input type="text" className="div-input" />
            <div className="div-title">Adresse</div>
            <input type="text" className="div-input" />
            <div className="div-title">Telefon nummer</div>
            <input type="text" className="div-input" />
            <div className="div-title">E-mail</div>
            <input type="text" className="div-input" />
        </div>
    </>
  )
}

export default RegisterNewCustomer
