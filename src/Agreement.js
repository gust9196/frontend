import React, { useState, useEffect} from 'react'
import './agreement.css';
import axios from 'axios';


function Agreement({ customerData, periodData, selectedCar, deliveryPointData, agreedKm }) {




  return (
    <>
    <div className='cc-flex-container'>
    <div className="cc-div-2">Register ny aftale</div>
    <div className="cc-next-btn">Færdig</div>
    </div>
    <div className="choose-customer-container">
      <div className="cc-div-3">
        <div className="cc-div-4">Aftale</div>
        <div className="cc-div-5">
          <div className="cc-div-6">
            <div className="cc-column">
              <div className="cc-div-7">
                <div className="cc-div-8">Vælg afhentningssted</div>
                <div className="agreement-container">
            <h1>Aftaleoversigt</h1>
            <div><strong>Kunde:</strong> {customerData && `${customerData.name} (Email: ${customerData.email})`}</div>
            <div><strong>Periode:</strong> Fra {periodData && periodData.startDate} til {periodData && periodData.endDate}</div>
            <div><strong>Valgt Bil:</strong> {selectedCar && selectedCar.carBrand} {selectedCar && selectedCar.model}</div>
            <div><strong>Afhentningssted:</strong> {deliveryPointData && deliveryPointData.pickupLocation}</div>
            <div><strong>Afleveringssted:</strong> {deliveryPointData && deliveryPointData.dropoffLocation}</div>
            <div><strong>Aftalte Kilometer:</strong> {agreedKm} km</div>
            </div>
              </div>
            </div>
            <div className="cc-column-2">
              <div className="cc-div-10">
                <div className="cc-div-11">Vælg afleveringssted</div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Agreement
