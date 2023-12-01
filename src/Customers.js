import React from 'react'
import { useNavigate } from 'react-router-dom';
import './customers.css';
import Sidebar from './Sidebar';

function Customers() {


    function CustomersForm(props) {

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
        <div className="c-main-container">
            <Sidebar />
            <CustomersForm/>
        </div>
  )
}

export default Customers
