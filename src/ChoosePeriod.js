import React, {useState} from 'react'
import './chooseperiod.css';

function ChoosePeriod({ goToNextStep, onSelectPeriod }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState('');

  const handleStartDateChange = (e) => {
      setStartDate(e.target.value);
      setError(''); // Ryd tidligere fejl, når startdato ændres
  };

  const handleEndDateChange = (e) => {
      setEndDate(e.target.value);
      setError(''); // Ryd tidligere fejl, når slutdato ændres
  };

  const handleNextButtonClick = () => {
    if (!startDate || !endDate) {
        alert("Vælg venligst både en startdato og en slutdato før du fortsætter.");
    } else if (validateDates()) {
        onSelectPeriod({ startDate, endDate }); // Ny linje til at opdatere periodData i RegisterNewAgreement
        goToNextStep();
    }
};

  const validateDates = () => {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const minDuration = 120 * 24 * 60 * 60 * 1000; // 120 dage i millisekunder
      const maxDuration = 36 * 30 * 24 * 60 * 60 * 1000; // Cirka 36 måneder i millisekunder

      if (end - start < minDuration) {
          setError('Perioden skal være mindst 120 dage.');
          return false;
      } else if (end - start > maxDuration) {
          setError('Perioden må ikke overstige 36 måneder.');
          return false;
      }

      return true;
  };
    
  return (
    <>
    <div className='cc-flex-container'>
    <div className="cc-div-2">Register ny aftale</div>
    <div onClick={handleNextButtonClick} className="cc-next-btn">Næste</div>
    </div>
    <div className="choose-customer-container">
      <div className="cc-div-3">
        <div className="cc-div-4">Periode</div>
        <div className="cc-div-5">
          <div className="cc-div-6">
            <div className="cc-column">
              <div className="cc-div-7">
                <div className="cc-div-8">Startdato</div>
                <input type="date" id="start" className="start" value={startDate} onChange={handleStartDateChange} />
                {startDate && <div className="date-display">{startDate}</div>}
              </div>
            </div>
            {error && <div className="error-message">{error}</div>}
            <div className="cc-column-2">
              <div className="cc-div-10">
              <div className="cc-div-8">Slutdato</div>
              <input type="date" id="stop" className="stop" value={endDate} onChange={handleEndDateChange} />
              {endDate && <div className="date-display">{endDate}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ChoosePeriod
