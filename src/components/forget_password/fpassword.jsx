import React, { useState } from 'react';
import axios from 'axios';
import './forget.css'; // Import your CSS file here
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  

  return (
    <div class="container">
  <form class="forgot-password-form">
    <h2>Forgot Password</h2>
    <div class="form-group">
      <label for="email">E-mail ID *</label><br></br>

    <input type="email" id="email" name="email" placeholder="E-mail ID" required/>
    </div>
    <button type="submit">RESET PASSWORD</button>
  </form>
</div>





    
  );
};

export default ForgotPassword;
