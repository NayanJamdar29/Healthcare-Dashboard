export const calendarAppointments = [
  {
    day: 'Mon 25',
    times: [{ time: '10:00' }, { time: '11:00' }]
  },
  {
    day: 'Tue 26',
    times: [{ time: '08:00' }, { time: '09:00', active: true }]
  },
  {
    day: 'Wed 27',
    times: [{ time: '10:00' }, { time: '13:00' }]
  },
  {
    day: 'Thurs 28',
    times: [{ time: '10:00' }, { time: '11:00', active: true }]
  },
  {
    day: 'Fri 29',
    times: [{ time: '14:00' }, { time: '16:00' }]
  },
  {
    day: 'Sat 30',
    times: [{ time: '12:00' }, { time: '14:00' }]
  },
  {
    day: 'Sun 31',
    times: [{ time: '09:00' }, { time: '10:00' }]
  }
];

export const upcomingSchedule = {
  'On Thursday': [
    { title: 'Health checkup complete', time: '11:00 AM', emoji: '🩺' },
    { title: 'Ophthalmologist', time: '14:00 PM', emoji: '👁️' }
  ],
  'On Saturday': [
    { title: 'Cardiologist', time: '12:00 AM', emoji: '❤️' },
    { title: 'Neurologist', time: '16:00 PM', emoji: '🧑‍⚕️' }
  ]
};
