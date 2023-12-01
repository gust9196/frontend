import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import LoginForm from "./LoginForm";
import RegisterNewCar from "./RegisterNewCar";
import ImageComponent from "./CarForm";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/new-car" element={<RegisterNewCar />} />
          <Route path="/carform" element={<ImageComponent />} /> {/* Updated component name */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
