import React, { useState } from "react";
import "./registernewcustomer.css";
import axios from "axios";

function RegisterNewCustomer() {
  const [customerData, setCustomerData] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Formularen blev indsendt");
    try {
      const response = await axios.post(
        "https://babackenddbapi.azurewebsites.net/customer/create",
        customerData,
      );
      console.log("kunde oprettet:", response.data);
    } catch (error) {
      console.error("Fejl ved oprettelse af kunde:", error);
    }
  };

  return (
    <div className="div-container-nc">
      <div className="div-header-title">Register ny kunde</div>
      <div className="div-title">Navn</div>
      <input
        type="text"
        className="div-input-nc"
        name="name"
        value={customerData.name}
        onChange={handleChange}
      />
      <div className="div-title">Adresse</div>
      <input
        type="text"
        className="div-input-nc"
        name="address"
        value={customerData.address}
        onChange={handleChange}
      />
      <div className="div-title">Telefon nummer</div>
      <input
        type="text"
        className="div-input-nc"
        name="phoneNumber"
        value={customerData.phoneNumber}
        onChange={handleChange}
      />
      <div className="div-title">E-mail</div>
      <input
        type="text"
        className="div-input-nc"
        name="email"
        value={customerData.email}
        onChange={handleChange}
      />
      <button className="div-new-customer-btn" onClick={handleSubmit}>
        Register ny kunde
      </button>
    </div>
  );
}

export default RegisterNewCustomer;
