import React, { useState } from 'react';
import axios from 'axios';
import './forget.css'; // Import your CSS file here
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [regNo, setRegNo] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://event-sathyabama-api.us-e2.cloudhub.io/api/Forgot-password', {
        email: email,
        regNo: regNo
      });
      console.log(response.data);
      // Handle success (e.g., show a success message)
    } catch (error) {
      setError(error.response ? error.response.data.message : 'An error occurred');
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="container">
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        <div className="form-group">
          <label htmlFor="email">E-mail ID *</label><br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="regNo">Register Number *</label><br />
          <input
            type="text"
            id="regNo"
            name="regNo"
            placeholder="Register Number"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
            required
          />
        </div>
        <Link to="/update_password"><button type="submit">RESET PASSWORD</button></Link>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default ForgotPassword;