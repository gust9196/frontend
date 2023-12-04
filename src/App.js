import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import Sidebar from "./Sidebar";
import RegisterNewAgreement from "./RegisterNewAgreement";
import RegisterNewCar from "./RegisterNewCar";
import RegisterNewCustomer from "./RegisterNewCustomer";
import DamageRepair from "./DamageRepair";
import Analytics from "./Analytics";
import CustomersList from "./CustomersList"
import CarAdmin from "./CarAdmin";
import CarList from "./CarList";
import LeaseAgreementList from "./LeaseAgreementList";
import NewsFeed from "./NewsFeed";
import CustomerList from "./CustomersList";

function App() {
  return (
    <>
      <Router>
        <div className="app-container">
        <Sidebar />
        <div className="sidebar-content-container">
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/new-agreement" element={<RegisterNewAgreement />} />
          <Route path="/new-car" element={<RegisterNewCar />} />
          <Route path="/new-customer" element={<RegisterNewCustomer />} />
          <Route path="/damage-repair" element={<DamageRepair />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/customerslist" element={<CustomersList />} />
          <Route path="/car-administration" element={<CarAdmin />} />
          <Route path="/carlist" element={<CarList />} />
          <Route path="/leaseagreementlist" element={<LeaseAgreementList />} />
          <Route path="/newsfeed" element={<NewsFeed />} />
          <Route path="/customerslist" element={<CustomerList />} />
        </Routes>
        </div>
        </div>
      </Router>
    </>
  );
}

export default App;
