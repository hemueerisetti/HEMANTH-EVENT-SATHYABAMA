import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import "./student_page.css"


const EventPage_Student = () => {
  return (
    <>
      <nav className="navbar">
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
          {/* Optionally, you can add a button or link here */}
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
      </nav>
      <div className="content"> {/* Add the content class here */}
      </div>
    </>
  );
}

export default EventPage_Student;
