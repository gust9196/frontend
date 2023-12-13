import React, {useState, useEffect } from 'react'
import './deliverypoint.css';
import axios from 'axios';

function DeliveryPoint({ goToNextStep, onSelectDeliveryPoint }) {

    const [pickupLocations, setPickupLocations] = useState([]);
    const [dropoffLocations, setDropoffLocations] = useState([]); // Hvis de er forskellige
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropoffLocation, setDropoffLocation] = useState('');

    useEffect(() => {
        axios.get('http://localhost:4000/pickupLocation')
            .then(response => {
                setPickupLocations(response.data);
                setDropoffLocations(response.data); // Opdater denne hvis forskellig fra pickupLocations
            })
            .catch(error => console.error('Fejl ved hentning af steder:', error));
    }, []);

    const handleNextButtonClick = () => {
        if (!pickupLocation || !dropoffLocation) {
            alert("Vælg venligst både et afhentningssted og et afleveringssted.");
        } else {
            onSelectDeliveryPoint(getLocationAddressById(pickupLocations, pickupLocation), getLocationAddressById(dropoffLocations, dropoffLocation));
            goToNextStep();
        }
    };

    const updateLocation = (locationArray, value, setLocation) => {
        setLocation(value); // Gemmer ID i stedet for adresse
    }

    const getLocationAddressById = (locationArray, locationId) => {
        const location = locationArray.find(loc => loc.id.toString() === locationId);
        return location ? location.address : '';
    }

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
                <select value={pickupLocation} onChange={(e) => updateLocation(pickupLocations, e.target.value, setPickupLocation)}>
            <option value="">Vælg afhentningssted</option>
            {pickupLocations.map((location, index) => (
                <option key={index} value={location.id}>{location.address}</option>
            ))}
            </select>
              </div>
            </div>
            <div className="cc-column-2">
              <div className="cc-div-10">
                <div className="cc-div-11">Vælg afleveringssted</div>
                <select value={dropoffLocation} onChange={(e) => updateLocation(dropoffLocations, e.target.value, setDropoffLocation)}>
                    <option value="">Vælg afleveringssted</option>
                    {dropoffLocations.map((location, index) => (
                    <option key={index} value={location.id}>{location.address}</option>
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
