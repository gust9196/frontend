import React, {useState} from 'react'
import { Route, Router, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import ImageComponent from "./CarForm";
import './registernewcar.css';

function RegisterNewCar() {

    function RegisterNewCarForm(props) {

        return(
            <>
                <div className="div-container">
                  <div className='row-1'>
                      <div className="div-header-title">Register ny bil</div>
                      <div className="div-title">Bilmærke</div>
                      <input type="text" className="div-input" />
                      <div className="div-title">Model</div>
                      <input type="text" className="div-input" />
                      <div className="div-title">Registeringsnummer</div>
                      <input type="text" className="div-input" />
                      <div className="div-title">Indkøbspris</div>
                      <input type="text" className="div-input" />
                      <div className="div-new-car">Register ny bil</div>
                  </div>
                  <div className='row-2'>
                      <div className="div-title">Brændstof</div>
                      <input type="text" className="div-input" />
                      <div className="div-title">KM kørt ved registering</div>
                      <input type="text" className="div-input" />
                      <div className="div-title">Indkøbs dato</div>
                      <input type="text" className="div-input" />
                      <div className="div-title">Link til billede</div>
                      <input type="text" className="div-input" />
                  </div>
              </div>
            </>
        )
    }

    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [regNumber, setRegNumber] = useState('');
    const [buyPrice, setBuyPrice] = useState('');
    const [fuel, setFuel] = useState('');
    const [km, setKm] = useState('');
    const [buyDate, setBuyDate] = useState('');
    const [imageLink, setImageLink] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Her vil du håndtere indsendelsen af form data
      };

    let navigate = useNavigate();

    const handleButtonClick = (endpoint) => {
      navigate(endpoint);
    };
   
    return (
      <>
        <div className="re-main-container">
            <Sidebar />
            <RegisterNewCarForm /> 
            <ImageComponent />
        </div>
      </>
    );


  }
   
  export default RegisterNewCar;
  