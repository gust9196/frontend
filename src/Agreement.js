import React, { useState, useEffect} from 'react'
import './agreement.css';
import axios from 'axios';


function Agreement({ customerData, periodData, selectedCar, deliveryPointData, agreedKm }) {
    const [totalPrice, setTotalPrice] = useState(0);
    const [monthlyPrice, setMonthlyPrice] = useState(0);

    useEffect(() => {
        const calculatePrice = () => {
          const fuelPrices = { 'Benzin': 2.5, 'Elektrisk': 5.9, 'Hybrid': 4, 'Diesel': 3.1 };
          const monthlyPayment = selectedCar.price / 120;
          const durationInMonths = getDurationInMonths(periodData.startDate, periodData.endDate);
          const kmPrice = fuelPrices[selectedCar.fuel] * agreedKm;
          const total = (monthlyPayment * durationInMonths) + kmPrice;
          setTotalPrice(total);
          setMonthlyPrice(total / durationInMonths);
        };
    
        if (selectedCar && periodData && agreedKm) {
          calculatePrice();
        }
      }, [selectedCar, periodData, agreedKm]);
    
      // Hjælpefunktion til at beregne varigheden i måneder
      const getDurationInMonths = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        return (end.getFullYear() - start.getFullYear()) * 12 + end.getMonth() - start.getMonth();
      };


  return (
    <>
    <div className='cc-flex-container'>
    <div className="cc-div-2">Register ny aftale</div>
    <div className="cc-next-btn">Færdig</div>
    </div>
    <div className="choose-customer-container">
      <div className="cc-div-3">
        <div className="cc-div-4">Aftaleoversigt</div>
        <div className="cc-div-5">
          <div className="cc-div-6">
            <div className="cc-column">
              <div className="cc-div-7">
                <div className="agreement-container">
                <div className="agreement-header">Aftale info</div>
                <div className='agreementInfo'><strong>Kunde:</strong> {customerData && `${customerData.name} (Email: ${customerData.email})`}</div>
                <div className='agreementInfo'><strong>Periode:</strong> Fra {periodData && periodData.startDate} til {periodData && periodData.endDate}</div>
                <div className='agreementInfo'><strong>Afhentningssted:</strong> {deliveryPointData && deliveryPointData.pickupLocation}</div>
                <div className='agreementInfo'><strong>Afleveringssted:</strong> {deliveryPointData && deliveryPointData.dropoffLocation}</div>
                <div className='agreementInfo'><strong>Aftalte Kilometer:</strong> {agreedKm} km</div>
                <div className='agreementInfo-price'><strong>Samlet Pris:</strong> {totalPrice.toFixed(2)} kr</div>
                <div className='agreementInfo-price'><strong>Pris Pr. Måned:</strong> {monthlyPrice.toFixed(2)} kr</div>
                </div>
              </div>
            </div>
            <div className="cc-column-2">
              <div className="cc-div-10">
                <div className="agreement-container-car">
                <div className="agreement-header">{selectedCar && selectedCar.carBrand} {selectedCar && selectedCar.model}</div>
                <div> <img src={selectedCar.urlPhoto} alt={`${selectedCar.carBrand} ${selectedCar.model}`} className="car-image-agreement" /></div>
                <div className='agreementInfo'><strong>Kørt km ved start:</strong> {selectedCar && selectedCar.drivenKilometersAtSubscriptionStart} km</div>
                <div className='agreementInfo'><strong>Brændstof:</strong> {selectedCar && selectedCar.fuel} </div>
                </div>
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
