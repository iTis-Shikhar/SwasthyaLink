import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, Timestamp, getDocs, query, where } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import './BookAppointment.css';

function BookAppointment() {
  const { user } = useAuth();

  // Dynamic doctor list
  const [doctors, setDoctors] = useState([]);
  const [loadingDoctors, setLoadingDoctors] = useState(true);

  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');

  // Fetch doctor list when component mounts
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const q = query(collection(db, 'users'), where('role', '==', 'Doctor'));
        const querySnapshot = await getDocs(q);
        const doctorList = querySnapshot.docs.map(doc => ({
          uid: doc.id,
          name: doc.data().name,
        }));
        setDoctors(doctorList);
      } catch (error) {
        console.error('Error fetching doctors:', error);
        alert('Failed to load doctors.');
      } finally {
        setLoadingDoctors(false);
      }
    };

    fetchDoctors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedDoctor || !date || !time) {
      alert('Please fill all required fields.');
      return;
    }

    const doctorObj = doctors.find(d => d.uid === selectedDoctor);

    try {
      await addDoc(collection(db, 'appointments'), {
        patientEmail: user?.email || '',
        doctorId: doctorObj.uid,
        doctorName: doctorObj.name,
        date,
        time,
        reason,
        createdAt: Timestamp.now(),
      });

      alert('Appointment booked successfully!');
      // Clear form
      setSelectedDoctor('');
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
        {/* Doctor dropdown */}
        {loadingDoctors ? (
          <p>Loading doctors...</p>
        ) : (
          <select
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            required
          >
            <option value="">Select Doctor</option>
            {doctors.map((doc) => (
              <option key={doc.uid} value={doc.uid}>
                {doc.name}
              </option>
            ))}
          </select>
        )}

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
