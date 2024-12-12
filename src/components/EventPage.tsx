import React from 'react';
import { useParams } from 'react-router-dom';

interface Event {
  id: string;
  name: string;
  book: string;
  details: string;
}

interface EventPageProps {
  events: Event[];
}

const EventPage: React.FC<EventPageProps> = ({ events }) => {
  const { id } = useParams<{ id: string }>();
  const event = events.find((evt) => evt.id === id);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="event-page">
      <h2>{event.name}</h2>
      <p><strong>Book:</strong> {event.book}</p>
      <p><strong>Details:</strong> {event.details}</p>
    </div>
  );
};

export default EventPage;