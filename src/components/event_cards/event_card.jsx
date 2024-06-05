import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './event_card.css'

function EventCards() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Function to fetch all event data from the backend
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:8000/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error while fetching events:', error);
      }
    };

    fetchEvents();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div className="event-cards">
      {events.map((event, index) => (
        <div key={index} className="event-card">
          <img src={event.eventimage} alt={event.eventname} />
          <h3>{event.eventname}</h3>
          <p>Date: {event.eventdate}</p>
          <p>Time: {event.eventtime}</p>
          <p>Venue: {event.eventvenue}</p>
        </div>
      ))}
    </div>
  );
}

export default EventCards;