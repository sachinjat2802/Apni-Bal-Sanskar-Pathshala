import React from 'react';
import './Events.css';

const events = [
  { id: 1, title: 'Charity Gala', date: '2024-08-15', description: 'A night to remember, all for a good cause.' },
  { id: 2, title: 'Community Clean-up', date: '2024-09-05', description: 'Join us in making our community a cleaner place.' },
  { id: 3, title: 'Fundraising Marathon', date: '2024-10-20', description: 'Run for a reason. All proceeds go to our projects.' },
];

const Events = () => {
  return (
    <div className="events">
      <h1>Upcoming Events</h1>
      <div className="event-list">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <h2>{event.title}</h2>
            <p><strong>Date:</strong> {event.date}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
