import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import LoginForm from "./LoginForm";
import RegisterNewCar from "./RegisterNewCar";
import RegisterNewCustomer from "./RegisterNewCustomer";
import Carlist from "./Carlist";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/new-car" element={<RegisterNewCar />} />
          <Route path="/new-customer" element={<RegisterNewCustomer />} />
          <Route path="/carlist" element={<Carlist />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
