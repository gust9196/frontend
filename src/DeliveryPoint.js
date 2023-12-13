import React from 'react'

function DeliveryPoint({ goToNextStep }) {




    const handleNextButtonClick = () => {
            goToNextStep();
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

export default DeliveryPoint
