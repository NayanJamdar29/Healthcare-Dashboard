import React from 'react';
import { healthStatus } from '../data/healthStatus';

const HealthStatusCards = () => (
  <div className="status-cards">
    {healthStatus.map((item, i) => (
      <div key={i} className="card" style={{ borderLeft: `4px solid ${item.color}` }}>
        <h4>{item.label}</h4>
        <p>Status: {item.status}</p>
      </div>
    ))}
  </div>
);

export default HealthStatusCards;
