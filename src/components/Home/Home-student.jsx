import React, { useState } from 'react';
import './Home.css'; // Import your CSS file hereimport React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import EventCardsStudent from '../event_cards_student/event_card';



const EventPageStudent = () => {
  return (
    <><nav className="navbar">
      <div className="navbar-menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
        <button><i className="fas fa-search"></i></button>
      </div>
      <div className="navbar-add">
      </div>
      <div className="navbar-dropdown">
        <button className="dropdown-btn"><i className="fas fa-caret-down"></i></button>
        <div className="dropdown-content">
          <a href="#">Item 1</a>
          <a href="#">Item 2</a>
          <a href="#">Item 3</a>
        </div>
      </div>
      <div className="navbar-profile">
        <i className="fas fa-user-circle"></i>
      </div>
    </nav><div className="Ongoing">
        <h2>Ongoing Events</h2>
        <EventCardsStudent/>
      </div><div className="Upcoming">
        <h2>Upcoming Events</h2>
      </div></>
  );
}



export default EventPageStudent;