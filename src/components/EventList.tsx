import React from 'react';
import { Link } from 'react-router-dom';

interface Event {
  id: string;
  name: string;
  book: string;
  details: string;
}

interface EventListProps {
  events: Event[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <div className="event-list">
      <h2>Events</h2>
      {events.map((event) => (
        <Link to={`/event/${event.id}`} key={event.id} className="event-card-link">
          <div className="event-card">
            <h3>{event.name}</h3>
            <p><strong>Book:</strong> {event.book}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default EventList;