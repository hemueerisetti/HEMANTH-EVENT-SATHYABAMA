import React, { useState } from 'react';
import axios from 'axios';
import './forget.css';
import { Link } from 'react-router-dom';

const styles1 = {
  body: {
    fontFamily: "'Roboto', sans-serif",
    display: 'flex',
    fontSize: '14px',
    outline: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  }
};

const fpImageStyle = {
  backgroundImage: "url('https://t3.ftcdn.net/jpg/04/39/18/98/360_F_439189843_VPDNfusFZXHFXD8KWPDlaFbUfYcHBcwW.jpg')",
  backgroundSize: 'cover', // Cover the whole area
  backgroundPosition: 'center', // Center the image
  height: '100vh', // Full height
  width: '100vw', // Full width
};

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [regNo, setRegNo] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://event-sathyabama.us-e2.cloudhub.io/api/Forgot-password', {
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
    <div style={fpImageStyle}>
      <div style={styles1.body}>
        <div className="fp-container">
          <form className="forgot-password-form" onSubmit={handleSubmit}>
            <h2>Forgot Password</h2>
            <div className="fp-form-group">
              <label htmlFor="regNo">Registration No *</label>
              <input
                type="text"
                id="regNo"
                name="regNo"
                placeholder="Reg No."
                value={regNo}
                onChange={(e) => setRegNo(e.target.value)}
                required
              />
              <br /><br />
              <label htmlFor="email">E-mail ID *</label>
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
            {error && <p className="error-message">{error}</p>}
            <button type="submit">RESET PASSWORD</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
