import React, { useState, useEffect} from 'react'
import './registernewagreement.css';
import CarListForm from './CarListForm';
import SearchCustomerComponent from './SearchCustomerComponent';
import ChoosePeriod from './ChoosePeriod';

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
        </>
        
  )
}

export default RegisterNewAgreement
