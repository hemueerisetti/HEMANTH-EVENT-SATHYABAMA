import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './event_card.css';

function EventCardsStudent() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:8000/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error while fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="parent-container">
      <div className="event-cards">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <img src={event.eventimage.replace(/\\/g, '/')} alt={event.eventname} />
            <h3>{event.eventname}</h3>
            <p>Date: {event.eventdate}</p>
            <p>Time: {event.eventtime}</p>
            <p>Venue: {event.eventvenue}</p>
            <a href=''>Apply</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventCardsStudent;
