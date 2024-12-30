import React, { useEffect, useState } from "react";
import axios from "axios";
import "./register_event_page.css"

const EventCard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from the backend
    axios
      .post("http://localhost:8000/events")
      .then((response) => setEvents(response.data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <div className="event-container">
      {events.map((event, index) => (
        <div className="event-card" key={index}>
          <img
            src={`http://localhost:8000/${event.Image}`}
            alt={event.Event_Name}
            className="event-image"
          />
          <div className="event-details">
            <h3>{event.Event_Name}</h3>
            <p><strong>Date:</strong> {new Date(event.Event_Date).toLocaleDateString()}</p>
            <p><strong>Time:</strong> {event.Event_Time}</p>
            <p><strong>Venue:</strong> {event.Event_Venue}</p>
            <p><strong>Capacity:</strong> {event.Event_Capacity}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCard;
