import React, { useState } from "react";

function AgreedKm({ goToNextStep, onSelectKm }) {
  const [selectedKm, setSelectedKm] = useState("");

  const kmOptions = [
    "500",
    "1500",
    "3000",
    "5000",
    "10000",
    "15000",
    "20000",
    "25000",
    "30000",
    "40000",
  ];

  const handleNextButtonClick = () => {
    if (!selectedKm) {
      alert("Vælg venligst et antal kilometer.");
    } else {
      onSelectKm(selectedKm);
      goToNextStep();
    }
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
          <div className="cc-div-4">Aftalt kilometer</div>
          <div className="cc-div-5">
            <div className="cc-div-6">
              <div className="cc-column">
                <div className="cc-div-7">
                  <div className="cc-div-8">Vælg antal kilometer</div>
                  <select
                    value={selectedKm}
                    onChange={(e) => setSelectedKm(e.target.value)}
                  >
                    <option value="">Vælg kilometer</option>
                    {kmOptions.map((km, index) => (
                      <option key={index} value={km}>
                        {km}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AgreedKm;
