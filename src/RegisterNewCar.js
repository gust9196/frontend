import React, { useState } from 'react';
import CarForm from "./CarForm";
import './registernewcar.css';

function RegisterNewCar() {
    const [carData, setCarData] = useState({
        brand: '',
        model: '',
        regNumber: '',
        buyPrice: '',
        fuel: '',
        km: '',
        buyDate: '',
        imageLink: '',
    });

    const handleChange = (e) => {
        setCarData({ ...carData, [e.target.name]: e.target.value });
    };

    return (
        <div className="re-main-container">
            <div className="div-container">
                <div className="div-header-title">Register ny bil</div>
                <div className='row-container'>
                    <div className='row-1'>
                        <div className="div-title">Bilmærke</div>
                          <select name="brand" className="custom-select" value={carData.brand} onChange={handleChange}>
                              <option value="" disabled>Vælg bilmærke</option>
                              <option value="BMW">BMW</option>
                              <option value="Mercedes">Mercedes</option>
                              <option value="Tesla">Tesla</option>
                              <option value="VW">VW</option>
                              <option value="Audi">Audi</option>
                              <option value="Toyota">Toyota</option>
                              <option value="Ford">Ford</option>
                          </select>
                        <div className="div-title">Model</div>
                        <input type="text" name="model" className="div-input" value={carData.model} onChange={handleChange} />
                        <div className="div-title">Registeringsnummer</div>
                        <input type="text" name="regNumber" className="div-input" value={carData.regNumber} onChange={handleChange} />
                        <div className="div-title">Indkøbspris</div>
                        <input type="text" name="buyPrice" className="div-input" value={carData.buyPrice} onChange={handleChange} />
                        <div className="div-new-car-btn">Register ny bil</div>
                    </div>
                    <div className='row-2'>
                        <div className="div-title">Brændstof</div>
                          <select name="fuel" className="custom-select" value={carData.fuel} onChange={handleChange}>
                              <option value="" disabled>Vælg brændstof</option>
                              <option value="El">El</option>
                              <option value="Benzin">Benzin</option>
                              <option value="Hybrid">Hybrid</option>
                          </select>
                        <div className="div-title">KM kørt ved registering</div>
                        <input type="text" name="km" className="div-input" value={carData.km} onChange={handleChange} />
                        <div className="div-title">Indkøbs dato</div>
                        <input type="text" name="buyDate" className="div-input" value={carData.buyDate} onChange={handleChange} />
                        <div className="div-title">Link til billede</div>
                        <input type="text" name="imageLink" className="div-input" value={carData.imageLink} onChange={handleChange} />
                    </div>
                </div>
            </div>
            <CarForm carData={carData} />
        </div>
    );
}

export default RegisterNewCar;
