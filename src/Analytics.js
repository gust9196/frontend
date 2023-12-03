import React from 'react'
import { useNavigate } from 'react-router-dom';
import './analytics.css';
import Sidebar from './Sidebar';

function Analytics() {

    function AnalyticsForm(props) {

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
        <div className="a-main-container">
            <AnalyticsForm/>
        </div>
  )
}

export default Analytics
