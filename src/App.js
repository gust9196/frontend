import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./Login/LoginForm";
import Sidebar from "./Sidebar/Sidebar";
import RegisterNewAgreement from "./LeaseAgreement/RegisterNewAgreement";
import RegisterNewCar from "./Car/RegisterNewCar";
import RegisterNewCustomer from "./Customer/RegisterNewCustomer";
import DamageRepair from "./DamageRepair/DamageRepair";
import Analytics from "./Analytics/Analytics";
import CustomersList from "./Customer/CustomersList";
import CarList from "./Car/CarList";
import LeaseAgreementList from "./LeaseAgreement/LeaseAgreementList";
import NewsFeed from "./Api/NewsFeed";

function App() {
  return (
    <>
      <Router>
        <div className="app-container">
          <Sidebar />
          <div className="sidebar-content-container">
            <Routes>
              <Route path="/" element={<NewsFeed />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/new-agreement" element={<RegisterNewAgreement />} />
              <Route path="/new-car" element={<RegisterNewCar />} />
              <Route path="/new-customer" element={<RegisterNewCustomer />} />
              <Route path="/damage-repair" element={<DamageRepair />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/customerslist" element={<CustomersList />} />
              <Route path="/carlist" element={<CarList />} />
              <Route
                path="/leaseagreementlist"
                element={<LeaseAgreementList />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
