import React from 'react';
import {link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className = "navbar">
            <div className='navbar-logo'>
                sathyabama    
            </div>
            <ul className = 'navbar-menu'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Help">Help</Link></li>

            </ul>
            
        </div>
    );
}

export default Navbar;
