import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import Sidebar from "./Sidebar";
import RegisterNewAgreement from "./RegisterNewAgreement";
import RegisterNewCar from "./RegisterNewCar";
import RegisterNewCustomer from "./RegisterNewCustomer";
import DamageRepair from "./DamageRepair";
import Analytics from "./Analytics";
import Customers from "./Customers";
import CarAdmin from "./CarAdmin";
import CarList from "./CarList";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/new-agreement" element={<RegisterNewAgreement />} />
          <Route path="/new-car" element={<RegisterNewCar />} />
          <Route path="/new-customer" element={<RegisterNewCustomer />} />
          <Route path="/damage-repair" element={<DamageRepair />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/car-administration" element={<CarAdmin />} />
          <Route path="/carlist" element={<CarList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
