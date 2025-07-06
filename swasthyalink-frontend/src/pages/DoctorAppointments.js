import React, { useEffect, useState } from 'react';
import './Dashboard.css'; // reuse existing styling
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';

export default function DoctorAppointments() {
  const { user } = useAuth(); // get logged-in doctor
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.uid) return;

    const fetchAppointments = async () => {
      try {
        const q = query(
          collection(db, 'appointments'),
          where('doctorId', '==', user.uid)
        );

        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setAppointments(data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
        alert('Failed to load appointments.');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [user]);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">📅 My Appointments</h2>
      {loading ? (
        <p>Loading...</p>
      ) : appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <div className="dashboard-grid">
          {appointments.map((app) => (
            <div key={app.id} className="dashboard-card">
              <h3>{app.date} at {app.time}</h3>
              <p><strong>Patient:</strong> {app.patientEmail}</p>
              <p><strong>Reason:</strong> {app.reason || 'N/A'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
