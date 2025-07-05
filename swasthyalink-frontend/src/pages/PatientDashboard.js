import React from 'react';
import './Dashboard.css';

export default function PatientDashboard() {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Welcome, Patient</h2>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>📅 Book Appointment</h3>
          <p>Schedule a consultation with your doctor.</p>
          <button>Book Now</button>
        </div>
        <div className="dashboard-card">
          <h3>💊 My Prescription</h3>
          <p>View your prescribed medicines anytime.</p>
          <button>View Prescription</button>
        </div>
        <div className="dashboard-card">
          <h3>⏰ Set Reminders</h3>
          <p>Get alerts for taking medicines and appointments.</p>
          <button>Set Reminder</button>
        </div>
        <div className="dashboard-card">
          <h3>📹 Join Virtual Visit</h3>
          <p>Start an online consultation with your doctor.</p>
          <button>Join Now</button>
        </div>
      </div>
    </div>
  );
}
