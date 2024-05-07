import React,{ useState } from 'react';
import axios from 'axios';
import './Register_form.css'; // Import your CSS file here
import { Link } from 'react-router-dom';

function EventRegistrationForm() {
  return (
    <div className="container">
      <h2>Event Registration Form</h2>
      <form method="POST">
        <div className="form-group">
          <label htmlFor="fullname">Full Name:</label>
          <input type="text" id="fullname" name="fullname" required/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required/>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="text" id="phone" name="phone" required/>
        </div>
        <div className="form-group">
          <label htmlFor="eventname">Event Name:</label>
          <input type="text" id="eventname" name="eventname" required/>
        </div>
        <div className="form-group">
          <label htmlFor="eventdate">Event Date:</label>
          <input type="date" id="eventdate" name="eventdate" required/>
        </div>
        <div className="form-group">
          <label htmlFor="eventtime">Event Time:</label>
          <input type="time" id="eventtime" name="eventtime" required/>
        </div>
        <div className="form-group">
          <label htmlFor="eventvenue">Event Venue:</label>
          <input type="text" id="eventvenue" name="eventvenue" required/>
        </div>
        <div className="form-group">
          <label htmlFor="eventcapacity">Event Capacity:</label>
          <input type="number" id="eventcapacity" name="eventcapacity" required/>
        </div>
        <div className="form-group">
          <label htmlFor="eventimage">Upload Event Photo:</label>
          <input type="file" id="eventimage" name="eventimage" accept="image/*" required/>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default EventRegistrationForm;
