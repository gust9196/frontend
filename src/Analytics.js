import React from 'react';
import './analytics.css';

import billede1 from './Dashboard pictures/Dashboard1.jpeg';
import billede2 from './Dashboard pictures/Dashboard2.jpeg';


function Analytics() {


  function AnalyticsForm(props) {
    return (
      <div className="analytics-form">
        <img className="analytics-image" src={billede1} alt="Billede 1" />
        <img className="analytics-image" src={billede2} alt="Billede 2" />
      </div>
    );
  }

  return (
    <>
      <AnalyticsForm />
    </>   
  );
}

export default Analytics;
