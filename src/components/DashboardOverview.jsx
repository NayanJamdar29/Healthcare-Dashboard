import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import ActivityFeed from './ActivityFeed';

const DashboardOverview = () => (
  <section className="container mt-4">
    <div className="row g-3">
      {/* Left Column */}
      <div className="col-12 col-lg-6">
        <AnatomySection />
        <ActivityFeed />
      </div>

      {/* Right Column - Calendar */}
      <div className="col-12 col-lg-6">
        <CalendarView />
      </div>
    </div>
  </section>
);

export default DashboardOverview;
