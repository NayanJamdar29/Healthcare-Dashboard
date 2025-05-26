import React from 'react';
import { calendarAppointments, upcomingSchedule } from '../data/appointments';

const CalendarView = () => {
  return (
    <div
      style={{
        background: '#fff',
        paddingLeft: '1rem',
        paddingRight:'1rem',
        borderRadius: '16px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Header */}
      <h3 style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', marginBottom: '20px' }}>
        October 2021
      </h3>

      {/* Calendar Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '16px',
          // marginBottom: '30px',
        }}
      >
        {calendarAppointments.map((day, i) => (
          <div
            key={i}
            style={{
              background: i === 1 ? '#eef0fe' : 'transparent',
              borderRadius: '12px',
              padding: '10px',
              minWidth: '100px',
            }}
          >
            <h5 style={{ fontSize: '14px', marginBottom: '8px', color: '#555' }}>{day.day}</h5>
            {day.times.map((t, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: t.active ? '#3b45c4' : '#dcddee',
                  color: t.active ? '#fff' : '#555',
                  padding: '4px 8px',
                  borderRadius: '8px',
                  fontSize: '12px',
                  textAlign: 'center',
                  marginBottom: '4px',
                }}
              >
                {t.time}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Appointments */}
      <div
        style={{
          display: 'flex',
          gap: '20px',
          marginBottom: '30px',
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            flex: '1 1 240px',
            backgroundColor: '#3b45c4',
            borderRadius: '12px',
            padding: '16px',
            color: '#fff',
          }}
        >
          <h4 >Dentist 🦷</h4>
          <p style={{ margin: 0, fontSize: '14px' }}>09:00–11:00</p>
          <p style={{ margin: 0, fontSize: '12px' }}>Dr. Cameron Williamson</p>
        </div>
        <div
          style={{
            flex: '1 1 240px',
            backgroundColor: '#eef0fe',
            borderRadius: '12px',
            padding: '16px',
            color: '#333',
          }}
        >
          <h4 >Physiotherapy Appointment 💪</h4>
          <p style={{ margin: 0, fontSize: '14px' }}>11:00–12:00</p>
          <p style={{ margin: 0, fontSize: '12px' }}>Dr. Kevin Djones</p>
        </div>
      </div>

      {/* Upcoming Schedule */}
      <h4 style={{ marginBottom: '12px' }}>The Upcoming Schedule</h4>
      {Object.entries(upcomingSchedule).map(([day, appointments]) => (
        <div key={day} style={{ marginBottom: '16px' }}>
          <p style={{ fontSize: '14px', color: '#777', marginBottom: '6px' }}>{day}</p>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            {appointments.map((app, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#eef0fe',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  minWidth: '140px',
                  flex: '1 1 140px',
                }}
              >
                <h5 style={{ fontSize: '14px', margin: 0 }}>
                  {app.title} {app.emoji}
                </h5>
                <p style={{ fontSize: '12px', margin: 0 }}>{app.time}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CalendarView;
