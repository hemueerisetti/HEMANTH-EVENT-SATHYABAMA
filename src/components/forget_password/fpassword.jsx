import React, { useState } from 'react';
import axios from 'axios';
import './forgot-password.css'; // Import your CSS file here
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(null);

  const generateOTP = () => {
    // Mock logic to generate OTP
    const generatedOTP = Math.floor(1000 + Math.random() * 9000);
    setOtp(generatedOTP.toString());
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Mock API call to verify email and OTP
      const response = await axios.post('http://example.com/api/forgot-password', {
        email,
        otp
      });
      console.log(response.data);
      // Redirect to success page or display success message
    } catch(error) {
      console.error('Error:', error.response.data);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="form">
        <div className="header">
          <h3>FORGOT PASSWORD</h3>
          <p>Please enter your email to receive OTP.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            value={email} 
            onChange={handleEmailChange} 
            placeholder="Email" 
            required 
          />
          <button type="button" onClick={generateOTP}>Generate OTP</button>
          <input 
            type="text" 
            value={otp} 
            readOnly 
            placeholder="OTP" 
            required 
          />
          <button type="submit">Submit</button>
          {error && <p className="error-message">{error}</p>}
          <p className="message">
            Remember your password? <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
