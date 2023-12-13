import React from 'react';
import { useNavigate } from 'react-router-dom';
import './analytics.css';
import Sidebar from './Sidebar';

import billede1 from './Dashboard pictures/Dashboard1.jpeg';
import billede2 from './Dashboard pictures/Dashboard2.jpeg';


function Analytics() {
  function AnalyticsForm(props) {
    return (
      <div className="analytics-form">
        <img className="analytics-image" src={billede1} alt="Billede 1" />
        <img className="analytics-image" src={billede2} alt="Billede 2" />
        
        {/* Tilføj flere billeder efter behov */}
      </div>
    );
  }

  return (
    <div className="a-main-container">
      
      <AnalyticsForm />
    </div>
  );
}

export default Analytics;
