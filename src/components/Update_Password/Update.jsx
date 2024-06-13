import React, { useState } from 'react';
import axios from 'axios';
import './Update.css'; // Import your CSS file here
import { Link } from 'react-router-dom';

const styles4 = {
  body: {
    fontFamily: "'Roboto', sans-serif", 
    // backgroundColor: '#9e1c3f',
    display: 'flex',
    fontSize: '14px',
    outline: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  }
};

const UpdatePassword = () => {
  const upImageStyle = {
    backgroundImage: "url('https://t3.ftcdn.net/jpg/04/39/18/98/360_F_439189843_VPDNfusFZXHFXD8KWPDlaFbUfYcHBcwW.jpg')",
    backgroundSize: 'cover', // Cover the whole area
    backgroundPosition: 'center', // Center the image
    height: '100vh', // Full height
    width: '100vw', // Full width
  };

  return (
    <div style={upImageStyle}>
    <div style={styles4.body}>
    <div class="up-container">
  <form class="update-password-form">
    <h2>Update Password</h2>
    <div class="up-form-group">
    <label for="CurrPW">Current Password*</label>

  <input type="password" id="CurrPW" name="CurrPW" placeholder="Enter Current Password" required/> <br/><br/>
      <label for="NewPW">New Password *</label>

    <input type="password" id="NewPW" name="NewPW" placeholder="Enter New Password" required/><br/><br/>
    <label for="CnfPW">Confirm Password *</label>

    <input type="password" id="CnfPW" name="CnfPW" placeholder="Confirm  Password" required/>
    
    </div>
    <button type="submit">UPDATE PASSWORD</button>
  </form>
</div>
</div>
</div>






    
  );
};

export default UpdatePassword;
