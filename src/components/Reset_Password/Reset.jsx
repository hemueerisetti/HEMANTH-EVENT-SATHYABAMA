import React, { useState } from 'react';
import axios from 'axios';
import './Reset.css'; // Import your CSS file here
import { Link } from 'react-router-dom';

const styles5 = {
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

const ResetPassword = () => {
  const reImageStyle = {
    backgroundImage: "url('https://t3.ftcdn.net/jpg/04/39/18/98/360_F_439189843_VPDNfusFZXHFXD8KWPDlaFbUfYcHBcwW.jpg')",
    backgroundSize: 'cover', // Cover the whole area
    backgroundPosition: 'center', // Center the image
    height: '100vh', // Full height
    width: '100vw', // Full width
  };

  return (
    <div style={reImageStyle}>
    <div style={styles5.body}>
    <div class="re-container">
  <form class="reset-password-form">
    <h2>Reset Password</h2>
    <div class="re-form-group">

      <label for="NewPW">New Password *</label>

    <input type="password" id="NewPW" name="NewPW" placeholder="Enter New Password" required/><br/><br/>
    <label for="CnfPW">Confirm Password *</label>

    <input type="password" id="CnfPW" name="CnfPW" placeholder="Confirm  Password" required/>
    
    </div>
    <button type="submit">RESET PASSWORD</button>
  </form>
</div>
</div>
</div>






    
  );
};

export default ResetPassword;
