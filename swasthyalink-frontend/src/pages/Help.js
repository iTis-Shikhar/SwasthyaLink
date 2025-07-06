import React from 'react';
import './Help.css';

function Help() {
  return (
    <div className="help-container">
      <h2 className="help-title">🙋‍♂️ Need Help?</h2>
      <p className="help-intro">
        We’re here to assist you with any questions or issues you might have while using SwasthyaLink. Here are some frequently asked questions:
      </p>

      <div className="faq-section">
        <h3>📝 Frequently Asked Questions</h3>

        <div className="faq">
          <h4>🔐 How do I log in or register?</h4>
          <p>Click on the “Login” or “Register” button in the navigation bar and choose your role: Patient, Doctor, or Clinic.</p>
        </div>
        <div className="faq">
          <h4>📅 How do I book an appointment?</h4>
          <p>Once logged in as a Patient, go to your dashboard and click on “Book Appointment”.</p>
        </div>
        <div className="faq">
          <h4>💊 Where can I see my prescriptions?</h4>
          <p>Prescriptions will be available in the “My Prescription” tab inside your dashboard after your doctor submits them.</p>
        </div>
        <div className="faq">
          <h4>📞 I still need help. How can I contact support?</h4>
          <p>You can email us at <a href="mailto:support@swasthyalink.com">support@swasthyalink.com</a>.</p>
        </div>
      </div>
    </div>
  );
}

export default Help;
