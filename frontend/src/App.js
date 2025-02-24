import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import NewEntry from "./pages/NewEntry";
import Login from "./pages/Login";  
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import './styles/global.css';

function App() {
  return (
    <Router>
      <Navbar />
      <nav>
        <Link to="/">🏠 Home</Link>
        <Link to="/new-entry">📝 New Entry</Link>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-entry" element={<NewEntry />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
