import React, { useState } from "react";
import axios from 'axios';
import './login-sathyabama.css';
import { Link } from "react-router-dom";

const Login_sathyabama = () => {
    const [userType, setUserType] = useState('');
    const [regNo, setRegNo] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [email, setEmail] = useState(null);
    
    const LoginFunction = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://harshaloginsathyabama-api.us-e2.cloudhub.io/api/sendreg', {
                userType: userType,
                regNo: regNo,
                password: password
            });
            console.log(response.data);
        } catch(error) {
            console.error('Error:', error.response.data);
        }
    }

    // Function to render the appropriate link based on the selected user type
    const renderSubmitLink = () => {
        switch (userType) {
            case 'student':
                return <Link to="/event-student"><button type="submit">Login</button></Link>;
            case 'club-admin':
                return <Link to="/event-clubAdmin"><button type="submit">Login</button></Link>;
            case 'staff':
                return <Link to="/staff-home"><button type="submit">Login</button></Link>;
            default:
                return <button type="submit">Login</button>;
        }
    }

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
                    <input type="text" value={regNo} onChange={(e)=> setRegNo(e.target.value)} placeholder="Register-no"/>
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password"/>
                    {renderSubmitLink()}
                    <p className="message"><Link to="/forgot-password">Forgot Password</Link></p> 
                </form>
            </div>
        </div>
    );
}

export default Login_sathyabama;
