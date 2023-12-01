import React from 'react'
import { useNavigate } from 'react-router-dom';
import './caradmin.css';
import Sidebar from './Sidebar';

function CarAdmin() {

    function CarAdminForm(props) {

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






  return (
        <div className="ca-main-container">
            <Sidebar />
            <CarAdminForm/>
        </div>
  )
}

export default CarAdmin
