import React from 'react';

const SimpleAppointmentCard = ({ title, time }) => (
  <div className="appointment-card">
    <strong>{title}</strong>
    <p>{time}</p>
  </div>
);

export default SimpleAppointmentCard;
