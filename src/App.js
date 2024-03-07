import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/loginForm/LoginForm";
import SignupForm from "./components/signupForm/SignupForm";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import './App.css';


function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/signup" element={<SignupForm />} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
