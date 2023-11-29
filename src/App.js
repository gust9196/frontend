import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import LoginForm from "./LoginForm";
import Register from "./Register";


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />}/>
        <Route path="/sidebar" element={<Sidebar />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;