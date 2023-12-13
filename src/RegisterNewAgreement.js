import React, { useState, useEffect} from 'react'
import './registernewagreement.css';
import CarListForm from './CarListForm';
import SearchCustomerComponent from './SearchCustomerComponent';
import ChoosePeriod from './ChoosePeriod';
import DeliveryPoint from './DeliveryPoint';
import AgreedKm from './AgreedKm';
import Agreement from './Agreement';

function RegisterNewAgreement() {

    const [currentStep, setCurrentStep] = useState(1);
    const [customerData, setCustomerData] = useState({});
    const [periodData, setPeriodData] = useState({});
    const [selectedCar, setSelectedCar] = useState(null);
    const [deliveryPointData, setDeliveryPointData] = useState({});
    const [agreedKm, setAgreedKm] = useState(null);
    

    const goToNextStep = () => {
      setCurrentStep(currentStep + 1);
  };

  const handleCustomerSelection = (customer) => {
    setCustomerData(customer);
    goToNextStep();
};

const handlePeriodSelection = (period) => {
  setPeriodData(period);
  goToNextStep();
};

const handleCarSelection = (car) => {
  setSelectedCar(car);
  goToNextStep();
};

const handleDeliveryPointSelection = (pickup, dropoff) => {
  setDeliveryPointData({ pickupLocation: pickup, dropoffLocation: dropoff });
  goToNextStep();
};

const handleKmSelection = (km) => {
  setAgreedKm(km);
  goToNextStep();
};

  return (
        <>
          {currentStep === 1 && <SearchCustomerComponent onSelectCustomer={handleCustomerSelection} goToNextStep={goToNextStep} />}
          {currentStep === 2 && <ChoosePeriod onSelectPeriod={handlePeriodSelection} goToNextStep={goToNextStep} />}
          {currentStep === 3 && <CarListForm onSelectCar={handleCarSelection} goToNextStep={goToNextStep} />}
          {currentStep === 4 && <DeliveryPoint onSelectDeliveryPoint={handleDeliveryPointSelection} goToNextStep={goToNextStep} />}
          {currentStep === 5 && <AgreedKm onSelectKm={handleKmSelection} goToNextStep={goToNextStep} />}
          {currentStep === 6 && <Agreement 
                                customerData={customerData} 
                                periodData={periodData} 
                                selectedCar={selectedCar} 
                                deliveryPointData={deliveryPointData} 
                                agreedKm={agreedKm} />}
        </>
        
  )
}

export default RegisterNewAgreement
