import React from 'react';
import './Dashboard.css';

export default function DoctorDashboard() {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Welcome, Doctor</h2>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>📅 View Appointments</h3>
          <p>Check your upcoming patient appointments.</p>
          <button>View Schedule</button>
        </div>
        <div className="dashboard-card">
          <h3>✍️ Write E-Prescription</h3>
          <p>Create and manage prescriptions for patients.</p>
          <button>Write Now</button>
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
