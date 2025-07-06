import React from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

export default function DoctorDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Welcome, Doctor</h2>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>📅 View Appointments</h3>
          <p>Check your upcoming patient appointments.</p>
          <button onClick={() => navigate('/doctor-appointments')}>View Schedule</button>
        </div>
        <div className="dashboard-card">
          <h3>✍️ Write E-Prescription</h3>
          <p>Create and manage prescriptions for patients.</p>
          {/* ✅ Navigate to /doctor-prescription */}
          <button onClick={() => navigate('/doctor-prescription')}>Write Now</button>
        </div>
        <div className="dashboard-card">
          <h3>📹 Start Virtual Visit</h3>
          <p>Start a video consultation with a patient.</p>
          <button>Start Visit</button>
        </div>
      </div>
    </div>
  );
}
