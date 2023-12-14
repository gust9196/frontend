import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  const PrivateRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  function ConditionalSidebar() {
    const location = useLocation();
    if (location.pathname !== "/login") {
      return (
        <PrivateRoute>
          <Sidebar />
        </PrivateRoute>
      );
    }
    return null;
  }

  return (
    <>
      <Router>
        <div className="app-container">
          <ConditionalSidebar />
          <div className="sidebar-content-container">
            <Routes>
              <Route
                path="/login"
                element={<LoginForm onLogin={handleLogin} />}
              />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <NewsFeed />
                  </PrivateRoute>
                }
              />
              <Route
                path="/new-agreement"
                element={
                  <PrivateRoute>
                    <RegisterNewAgreement />
                  </PrivateRoute>
                }
              />
              <Route
                path="/new-car"
                element={
                  <PrivateRoute>
                    <RegisterNewCar />
                  </PrivateRoute>
                }
              />
              <Route
                path="/new-customer"
                element={
                  <PrivateRoute>
                    <RegisterNewCustomer />
                  </PrivateRoute>
                }
              />
              <Route
                path="/damage-repair"
                element={
                  <PrivateRoute>
                    <DamageRepair />
                  </PrivateRoute>
                }
              />
              <Route
                path="/analytics"
                element={
                  <PrivateRoute>
                    <Analytics />
                  </PrivateRoute>
                }
              />
              <Route
                path="/customerslist"
                element={
                  <PrivateRoute>
                    <CustomersList />
                  </PrivateRoute>
                }
              />
              <Route
                path="/carlist"
                element={
                  <PrivateRoute>
                    <CarList />
                  </PrivateRoute>
                }
              />
              <Route
                path="/leaseagreementlist"
                element={
                  <PrivateRoute>
                    <LeaseAgreementList />
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
