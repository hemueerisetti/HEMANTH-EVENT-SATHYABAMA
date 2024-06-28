import React, { useState } from 'react';
import axios from 'axios';
import './Update.css'; 
import { Link } from 'react-router-dom';

const styles4 = {
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

const UpdatePassword = () => {
  const [userType, setUserType] = useState('');
  const [regNo, setRegNo] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("New passwords do not match");
      return;
    }

    try {
      const response = await axios.post('http://event-sathyabama-api.us-e2.cloudhub.io/api/Update-password', {
        regNo: regNo,
        newPassword: newPassword,
        userType: userType
      });
      console.log(response.data);
      setSuccess("Password updated successfully");
      setError(null); // clear previous errors if any
    } catch (error) {
      setError(error.response ? error.response.data.message : 'An error occurred');
      console.error('Error:', error.response ? error.response.data : error.message);
      setSuccess(null); // clear success message if any
    }
  };

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
        <div className="up-container">
          <form className="update-password-form" onSubmit={handleSubmit}>
            <h2>Update Password</h2>
            <div className="up-form-group">
              <label htmlFor="userType">User Type *</label>
              <select
                id="userType"
                name="userType"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                required
              >
                <option value="">Select User Type</option>
                <option value="student">Student</option>
                <option value="club-admin">Club Admin</option>
                <option value="staff">Staff</option>
              </select><br/><br/>
              <label htmlFor="regNo">RegNo *</label>
              <input
                type="text"
                id="regNo"
                name="regNo"
                placeholder="Enter RegNo"
                value={regNo}
                onChange={(e) => setRegNo(e.target.value)}
                required
              /><br/><br/>
              <label htmlFor="NewPW">New Password *</label>
              <input
                type="password"
                id="NewPW"
                name="NewPW"
                placeholder="Enter New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              /><br/><br/>
              <label htmlFor="CnfPW">Confirm Password *</label>
              <input
                type="password"
                id="CnfPW"
                name="CnfPW"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <Link to="/login"><button type="submit">UPDATE PASSWORD</button></Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
