import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import './BookAppointment.css'; // (Optional: if you want custom styling)

function BookAppointment() {
  const { user } = useAuth();

  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!doctor || !date || !time) {
      alert('Please fill all required fields.');
      return;
    }

    try {
      await addDoc(collection(db, 'appointments'), {
        patientEmail: user?.email || '',
        doctor,
        date,
        time,
        reason,
        createdAt: Timestamp.now(),
      });

      alert('Appointment booked successfully!');
      // Clear form
      setDoctor('');
      setDate('');
      setTime('');
      setReason('');
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('Error booking appointment: ' + error.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Doctor's Name"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <textarea
          placeholder="Reason for Visit (optional)"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default BookAppointment;
