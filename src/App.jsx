import { useState } from "react";
// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/authentication/login/login";
import SignUp from "./component/authentication/signup/signup";
import Forgot from "./component/authentication/forgot/forgot";
import Home from "./component/home/home";
import Dashboard from "./component/Dashboard/dashboard";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
