import React, { useState } from 'react';
import axios from 'axios';
import './forget.css'; // Import your CSS file here
import { Link } from 'react-router-dom';

const styles1 = {
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

const ForgotPassword = () => {
  const fpImageStyle = {
    backgroundImage: "url('https://t3.ftcdn.net/jpg/04/39/18/98/360_F_439189843_VPDNfusFZXHFXD8KWPDlaFbUfYcHBcwW.jpg')",
    backgroundSize: 'cover', // Cover the whole area
    backgroundPosition: 'center', // Center the image
    height: '100vh', // Full height
    width: '100vw', // Full width
  };

  return (
    <div style={fpImageStyle}>
    <div style={styles1.body}>
    <div class="fp-container">
  <form class="forgot-password-form">
    <h2>Forgot Password</h2>
    <div class="fp-form-group">
    <label for="RegNO">Regestration No *</label>

  <input type="integer" id="RegNO" name="RegNO" placeholder="Reg No." required/> <br/><br/>
      <label for="email">E-mail ID *</label>

    <input type="email" id="email" name="email" placeholder="E-mail ID" required/>
    
    </div>
    <button type="submit">RESET PASSWORD</button>
  </form>
</div>
</div>
</div>






    
  );
};

export default ForgotPassword;
