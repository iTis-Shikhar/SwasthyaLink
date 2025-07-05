import React, { useState } from "react";
import "./BookAppointment.css"; // reuse existing styles

export default function SetReminders() {
  const [medicine, setMedicine] = useState("");
  const [time, setTime] = useState("");
  const [reminders, setReminders] = useState([]);

  const handleAddReminder = (e) => {
    e.preventDefault();

    if (!medicine || !time) {
      alert("Please enter both medicine and time.");
      return;
    }

    const newReminder = {
      id: Date.now(),
      medicine,
      time,
    };

    setReminders([...reminders, newReminder]);
    setMedicine("");
    setTime("");
  };

  return (
    <div className="appointment-container">
      <h2>⏰ Set Medication Reminder</h2>
      <form onSubmit={handleAddReminder} className="appointment-form">
        <input
          type="text"
          placeholder="Medicine Name"
          value={medicine}
          onChange={(e) => setMedicine(e.target.value)}
          required
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <button type="submit">Add Reminder</button>
      </form>

      <div className="appointment-list">
        {reminders.length === 0 ? (
          <p>No reminders added yet.</p>
        ) : (
          reminders.map((reminder) => (
            <div key={reminder.id} className="appointment-card">
              <h3>{reminder.medicine}</h3>
              <p><strong>Time:</strong> {reminder.time}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
