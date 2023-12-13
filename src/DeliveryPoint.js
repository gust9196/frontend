import React, {useState} from 'react'
import './deliverypoint.css';

function DeliveryPoint({ goToNextStep }) {

    const locations = [
        "FDM Aarhus Vintervej 1 8210 Århus",
        "FDM Aalborg Atletikvej 6 9230 Svenstrup",
        "FDM Fredericia Vesterballevej 6 7000 Fredercia",
        "FDM Silkeborg Bredhøjvej 5 8600 Silkeborg"
    ];

    const [pickupLocation, setPickupLocation] = useState('');
    const [dropoffLocation, setDropoffLocation] = useState('');




    const handleNextButtonClick = () => {
        if (!pickupLocation || !dropoffLocation) {
            alert("Vælg venligst både et afhentningssted og et afleveringssted.");
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
        <div className="cc-div-4">Kunde</div>
        <div className="cc-div-5">
          <div className="cc-div-6">
            <div className="cc-column">
              <div className="cc-div-7">
                <div className="cc-div-8">Vælg afhentningssted</div>
                <select value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)}>
                    <option value="">Vælg afhentningssted</option>
                    {locations.map((location, index) => (
                        <option key={index} value={location}>{location}</option>
                    ))}
                </select>
              </div>
            </div>
            <div className="cc-column-2">
              <div className="cc-div-10">
                <div className="cc-div-11">Vælg afleveringssted</div>
                <select value={dropoffLocation} onChange={(e) => setDropoffLocation(e.target.value)}>
                    <option value="">Vælg afleveringssted</option>
                    {locations.map((location, index) => (
                        <option key={index} value={location}>{location}</option>
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

export default DeliveryPoint
