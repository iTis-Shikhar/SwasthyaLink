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

import BookAppointment from './pages/BookAppointment';
import MyPrescription from './pages/MyPrescription';
import SetReminders from './pages/SetReminders';
import JoinVirtualVisit from './pages/JoinVirtualVisit';

import DoctorAppointments from './pages/DoctorAppointments';
// ✅ New import for prescription page
import DoctorPrescription from './pages/DoctorPrescription';

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
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/my-prescription" element={<MyPrescription />} />
            <Route path="/set-reminders" element={<SetReminders />} />
            <Route path="/join-virtual-visit" element={<JoinVirtualVisit />} />
          </Route>

          <Route element={<PrivateRoute allowedRole="Doctor" />}>
            <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
            <Route path="/doctor-appointments" element={<DoctorAppointments />} />
            {/* ✅ New route for writing prescriptions */}
            <Route path="/doctor-prescription" element={<DoctorPrescription />} />
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
