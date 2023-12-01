import React, { useState } from 'react';
import { Route, Router, useNavigate } from 'react-router-dom';
import "./carform.css";

const ImageComponent = () => {
  const [inputs, setInputs] = useState({
    carName: '', 
    field2: '',
    field3: '',
    field4: '',
    field5: '',
    field6: '',
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <div className="cf-image-container">
      <img className='cf-img'
        src="https://blog.bilbasen.dk/wp-content/uploads/2021/02/tesla-x-1-scaled.jpg" 
        alt="Billede" 
      />
      <input 
              type="text" 
              name="carName" 
              value={inputs.carName} 
              onChange={handleChange} 
              placeholder="Navn på bilen"
              className='car-name-input'
            />
      <div className="cf-input-container">
        <div className="cf-input-row">
        <div className="cf-input-column">
            {[2, 3, 4].map((i) => (
              <input 
                key={i} 
                type="text" 
                name={`field${i}`} 
                value={inputs[`field${i}`]} 
                onChange={handleChange} 
                placeholder={`Felt ${i}`}
              />
            ))}
          </div>
          <div className="cf-input-column">
            {[5, 6, 7].map((i) => (
              <input 
                key={i} 
                type="text" 
                name={`field${i}`} 
                value={inputs[`field${i}`]} 
                onChange={handleChange} 
                placeholder={`Felt ${i}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;