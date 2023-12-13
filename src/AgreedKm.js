import React, { useState } from 'react'

function AgreedKm({ goToNextStep }) {
    const [selectedKm, setSelectedKm] = useState('');

    const kmOptions = [
        "500 km", "1.500 km", "3.000 km", "5.000 km", "10.000 km", 
        "15.000 km", "20.000 km", "25.000 km", "30.000 km", "40.000 km"
    ];

    const handleNextButtonClick = () => {
        if (!selectedKm) {
            alert("Vælg venligst et antal kilometer.");
        } else {
            goToNextStep();
        }
    };

  return (
    <>
    <div className='cc-flex-container'>
    <div className="cc-div-2">Register ny aftale</div>
    <div onClick={handleNextButtonClick} className="cc-next-btn">Næste</div>
    </div>
    <div className="choose-customer-container">
      <div className="cc-div-3">
        <div className="cc-div-4">Aftalt kilometer</div>
        <div className="cc-div-5">
          <div className="cc-div-6">
            <div className="cc-column">
              <div className="cc-div-7">
                <div className="cc-div-8">Vælg antal kilometer</div>
                <select value={selectedKm} onChange={(e) => setSelectedKm(e.target.value)}>
                    <option value="">Vælg kilometer</option>
                    {kmOptions.map((km, index) => (
                        <option key={index} value={km}>{km}</option>
                    ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AgreedKm
