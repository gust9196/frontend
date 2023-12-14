import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./searchcustomercomponent.css";

function SearchCustomerComponent({ goToNextStep, onSelectCustomer }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://babackenddbapi.azurewebsites.net/customer")
      .then((response) => setCustomers(response.data))
      .catch((error) => console.error("Error fetching customers:", error));
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = customers
        .filter(
          (customer) =>
            customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            customer.phoneNumber.includes(searchTerm) ||
            customer.customerID.toString().includes(searchTerm) ||
            customer.address.toLowerCase().includes(searchTerm.toLowerCase()),
        )
        .slice(0, 4);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm, customers]);

  const handleCustomerSelect = (customer) => {
    setSelectedCustomer(customer);
    setSearchTerm("");
    setSuggestions([]);
    // onSelectCustomer(customer); // Fjernet for at forhindre automatisk navigation
  };

  const handleNextButtonClick = () => {
    if (!selectedCustomer) {
      alert("Vælg venligst en kunde før du fortsætter.");
    } else {
      onSelectCustomer(selectedCustomer); // Tilføjet for at sende valgt kunde videre
      goToNextStep();
    }
  };

  const handleNewCustomerClick = () => {
    navigate("/new-customer");
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="cc-flex-container">
        <div className="cc-div-2">Register ny aftale</div>
        <div onClick={handleNextButtonClick} className="cc-next-btn">
          Næste
        </div>
      </div>
      <div className="choose-customer-container">
        <div className="cc-div-3">
          <div className="cc-div-4">Kunde</div>
          <div className="cc-div-5">
            <div className="cc-div-6">
              <div className="cc-column">
                <div className="cc-div-7">
                  <div className="cc-div-8">Vælg kunde</div>
                  <input
                    className="search-customer-input"
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="Søg kunde..."
                  />
                  <div>
                    {suggestions.map((customer) => (
                      <div
                        key={customer.customerID}
                        className="customer-suggestion"
                        onClick={() => handleCustomerSelect(customer)}
                      >
                        <p>
                          {customer.name} - <span>{customer.email}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                  {selectedCustomer && (
                    <div className="selected-customer">
                      <p>
                        {selectedCustomer.name} -{" "}
                        <span>{selectedCustomer.email}</span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="cc-column-2">
                <div className="cc-div-10">
                  <div className="cc-div-11">Opret kunde</div>
                  <div onClick={handleNewCustomerClick} className="cc-div-12">
                    Opret kunde
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchCustomerComponent;
