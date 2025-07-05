import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Help from './pages/Help';
import PatientDashboard from './pages/PatientDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import ClinicDashboard from './pages/ClinicDashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />

          {/* Protected Routes */}
          <Route element={<PrivateRoute allowedRole="Patient" />}>
            <Route path="/patient-dashboard" element={<PatientDashboard />} />
          </Route>

          <Route element={<PrivateRoute allowedRole="Doctor" />}>
            <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          </Route>

          <Route element={<PrivateRoute allowedRole="Clinic" />}>
            <Route path="/clinic-dashboard" element={<ClinicDashboard />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
