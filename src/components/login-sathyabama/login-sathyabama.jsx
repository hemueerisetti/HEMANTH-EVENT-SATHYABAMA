import React, { useState } from "react";
import axios from 'axios';
import './login-sathyabama.css';
import { Link } from "react-router-dom";

const Login_sathyabama = () => {
    const [regNo, setregNo] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [email, setEmail] = useState(null);
    
    const LoginFunction = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('harshaloginsathyabama-api.us-e2.cloudhub.io/api/sendreg', {
                regNo: regNo,
                password: password

            });
            console.log(response.data);
        } catch(error) {
            console.error('Error:', error.response.data);
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
                    <input type="text" value={regNo} onChange={(e)=> setregNo(e.target.value)} placeholder="Register-no"/>
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="password"/>
                    <button type="submit"> Login </button>
                    <p className="message"><Link to="/forgot-password">Forgot Password</Link></p> 
                </form>
            </div>
        </div>
    );
}

export default Login_sathyabama;
