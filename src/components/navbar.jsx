import React, { useState } from 'react';
import './sample.css'; // Import your CSS file here

function EventPage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div>
            <header>
                <div className="navbar">
                    <button className="menu-toggle" onClick={toggleSidebar}><i className="fas fa-bars"></i></button>

                    {/* Sidebar menu */}
                    <div id="mySidebar" className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                        <a href="#" className="closebtn" onClick={toggleSidebar}>×</a>
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Clients</a>
                        <a href="#">Contact</a>
                    </div>

                    <div className="nav-search">
                        <input className="event-search" type="text" placeholder="Search event here" />
                        <div className="search-icon">
                            <i className="fas fa-search"></i>
                        </div>
                    </div>

                    <div className="create-btn">
                        <a href="Register_form.jsx" className="create-btn"> Create + </a>
                    </div>

                    <div className="dropdown">
                        <button className="dropdown-btn"><i className="fas fa-caret-down"></i></button>
                        <div className="dropdown-content">
                            <a href="#">School of Computing</a>
                            <a href="#">School of Electrical and Electronics</a>
                            <a href="#">School of Mechanical</a>
                            <a href="#">School of Bio and Chemical Engineering</a>
                            <a href="#">School of Building and Environment</a>
                            <a href="#">School of Dental sciences</a>
                            <a href="#">School of Allied Health sciences</a>
                            <a href="#">School of science & Humanities </a>
                            <a href="#">School of Law</a>
                            <a href="#">School of Pharmacy</a>
                            <a href="#">School of Nursing</a>
                            <a href="#">School of Paramedical sciences</a>
                            <a href="#">School of Management Studies</a>
                        </div>
                    </div>

                    <div className="profile">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default EventPage;
