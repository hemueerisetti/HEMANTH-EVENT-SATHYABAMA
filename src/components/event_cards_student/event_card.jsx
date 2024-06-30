import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './event_card.css';

function EventCardsStudent() {
  const [events, setEvents] = useState([]);
  const [appliedEvents, setAppliedEvents] = useState([]);

  // Retrieve token and extract regNo from it
  const token = localStorage.getItem('token');
  const regNo = token ? JSON.parse(atob(token.split('.')[1])).regNo : '';

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:8000/events');
        setEvents(response.data);

        // Check which events the student has applied for
        const appliedResponse = await axios.post('http://localhost:8000/check-application', { regNo });
        setAppliedEvents(appliedResponse.data);
      } catch (error) {
        console.error('Error while fetching events:', error);
      }
    };

    fetchEvents();
  }, [regNo]);

  const handleApply = async (eventName) => {
    try {
      await axios.post(`http://localhost:8000/event-apply/${eventName}`, { regNo });
      alert('Applied successfully!');
      // Optionally update the local state
      setAppliedEvents([...appliedEvents, eventName]);
    } catch (error) {
      console.error('Error while applying for the event:', error);
    }
  };

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
            <button
              className="apply-button"
              onClick={() => handleApply(event.eventname)}
              disabled={appliedEvents.includes(event.eventname)}
            >
              {appliedEvents.includes(event.eventname) ? 'Applied' : 'Apply'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventCardsStudent;
