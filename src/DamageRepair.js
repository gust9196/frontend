import React from 'react'
import { useNavigate } from 'react-router-dom';
import './registernewagreement.css';
import Sidebar from './Sidebar';

function DamageRepair() {

    function DamageRepairForm(props) {

      return (
        <>
        yo
        </>

      )
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      // Her vil du håndtere indsendelsen af form data
      };

  let navigate = useNavigate();

  const handleButtonClick = (endpoint) => {
      navigate(endpoint);
  };


    return (
            <div className="dr-main-container">
                <Sidebar />
                <DamageRepairForm/>
            </div>
    )
}

export default DamageRepair
