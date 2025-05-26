import React from 'react';
import DashboardOverview from './DashboardOverview';
import CalendarView from './CalendarView';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => (
  <div className="dashboard-main">
    <DashboardOverview />
  </div>
);

export default DashboardMainContent;
