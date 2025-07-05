import React from 'react';
import './Dashboard.css';

export default function ClinicDashboard() {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Welcome, Clinic</h2>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>👨‍⚕️ Manage Doctors</h3>
          <p>Add, remove, or update doctor profiles in your clinic.</p>
          <button>Go to Doctor List</button>
        </div>
        <div className="dashboard-card">
          <h3>📋 Manage Appointments</h3>
          <p>View and coordinate appointments for all doctors.</p>
          <button>Manage Schedule</button>
        </div>
        <div className="dashboard-card">
          <h3>📁 Access Patient Records</h3>
          <p>Secure access to all patient records in the clinic.</p>
          <button>View Records</button>
        </div>
        <div className="dashboard-card">
          <h3>📤 Upload Reports</h3>
          <p>Upload lab test results or health reports for patients.</p>
          <button>Upload Files</button>
        </div>
      </div>
    </div>
  );
}
