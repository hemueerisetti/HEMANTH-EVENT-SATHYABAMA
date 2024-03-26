import React, {useState} from "react";

import './login-sathyabama.css'

const Login_sathyabama = ()=>{
    const [action,setAction] = useState("Login");
    const onSubmit={()=>{
        ()
    }}
    return(
        <form onSubmit={()} method="post" >
            <div class="login-page">
        <div class="form"> 
            <div class="login">
            <div class="login-header">
                <h3>LOGIN</h3>
                <p>Please enter your credentials to login.</p>
            </div>
            </div>
            <form class="login-form">
            <input type="text" placeholder="Register-no"/>
            <input type="password" placeholder="password"/>
            <button classname={action==="Login"?"Login grey":"login"}onClick={()=>{setAction("Login")}}>Login</button>
            <p class="message"><a href="#">Forgot Password</a></p>
            </form>
        </div>
        </div>
``
        </form>
        
    )
}
export default Login_sathyabama;