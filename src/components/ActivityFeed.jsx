import React from 'react';
import { activityBars } from '../data/activityData';
import './ActivityFeed.css'; // You can change this to module.css if preferred

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <h3>Activity</h3>
      <div className="bar-container">
        {activityBars.map((height, index) => (
          <div
            key={index}
            className="activity-bar"
            style={{ height }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
