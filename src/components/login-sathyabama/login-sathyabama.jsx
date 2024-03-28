import React, {useState} from "react";
import axios from 'axios';


import './login-sathyabama.css'

const Login_sathyabama = ()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [email, setEmail] = useState(null);
    
    const LoginFunction = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post('http://localhost:8081/api/login', {
                username,
                password
            });
            console.log(response.data);
        }
        catch(error) {
            console.error('Error:', error.response.data);
        }
    }

    return(
        <form method="post" >
            <div class="login-page">
        <div class="form"> 
            <div class="login">
            <div class="login-header">
                <h3>LOGIN</h3>
                <p>Please enter your credentials to login.</p>
            </div>
            </div>
            <form class="login-form" onSubmit={LoginFunction}>
            <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} placeholder="Register-no"/>
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.password)} placeholder="password"/>
            <button type="submit">Login</button>
            <p class="message"><a href="#">Forgot Password</a></p>
            </form>
        </div>
        </div>
``
        </form>
        
    )
}
export default Login_sathyabama;