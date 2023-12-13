import React, { useState, useEffect} from 'react'
import './registernewagreement.css';
import CarListForm from './CarListForm';
import SearchCustomerComponent from './SearchCustomerComponent';
import ChoosePeriod from './ChoosePeriod';
import DeliveryPoint from './DeliveryPoint';
import AgreedKm from './AgreedKm';

function RegisterNewAgreement() {

    const [currentStep, setCurrentStep] = useState(1);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    

    const goToNextStep = () => {
      setCurrentStep(currentStep + 1);
  };

  const handleCustomerSelection = (customer) => {
      setSelectedCustomer(customer);
      goToNextStep();
  };

  return (
        <>
          {currentStep === 1 && <SearchCustomerComponent goToNextStep={goToNextStep} />}
          {currentStep === 2 && <ChoosePeriod goToNextStep={goToNextStep} />}
          {currentStep === 3 && <CarListForm goToNextStep={goToNextStep} />}
          {currentStep === 4 && <DeliveryPoint goToNextStep={goToNextStep} />}
          {currentStep === 5 && <AgreedKm goToNextStep={goToNextStep} />}
        </>
        
  )
}

export default RegisterNewAgreement
