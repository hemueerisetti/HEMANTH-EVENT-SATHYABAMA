import React, { useState } from "react";
import axios from 'axios';
import './login-sathyabama.css';
import { Link, useNavigate } from "react-router-dom";

const Login_sathyabama = () => {
    const [userType, setUserType] = useState('');
    const [regNo, setRegNo] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const LoginFunction = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://event-sathyabama-api.us-e2.cloudhub.io/api/Credintial-Validation', {
                regNo: regNo,
                password: password,
                userType: userType
            });

            console.log(response.data);

            if (response.status === 200) {
                if (userType === 'student') {
                    navigate('/event-student');
                } else if (userType === 'club-admin') {
                    navigate('/event-clubAdmin');
                } else if (userType === 'staff') {
                    navigate('/staff');
                }
            } else {
                setError('Invalid login credentials');
            }
        } catch (error) {
            setError(error.response ? error.response.data.message : 'An error occurred');
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="login-page">
            <div className="form">
                <div className="login">
                    <div className="login-header">
                        <h3>LOGIN</h3>
                        <p>Please enter your credentials to login.</p>
                    </div>
                </div>
                <form className="login-form" onSubmit={LoginFunction}>
                    <select value={userType} onChange={(e) => setUserType(e.target.value)}>
                        <option value="">Select User Type</option>
                        <option value="student">STUDENT</option>
                        <option value="club-admin">CLUB-ADMIN</option>
                        <option value="staff">STAFF</option>
                    </select>
                    <input type="text" value={regNo} onChange={(e) => setRegNo(e.target.value)} placeholder="Register No"/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                    <button type="submit">Login</button>
                    {error && <p className="error">{error}</p>}
                    <p className="message"><Link to="/forgot-password">Forgot Password</Link></p> 
                </form>
            </div>
        </div>
    );
}

export default Login_sathyabama;
