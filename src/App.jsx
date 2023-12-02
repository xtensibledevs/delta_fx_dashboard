import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./authentication/login/login";
import SignUp from "./authentication/signup/signup";
import Forgot from "./authentication/forgot/forgot";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </Router>
  );
}
