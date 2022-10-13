 import React from 'react'
 
import "./Signup.style.css"
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { axiosInstance } from '../../config';

 export default function Signup() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  

  

  const handleSubmit= async (e)=>{

   e.preventDefault();//this prevent the default code
   setError(false);

   if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
    //M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
    return
}
  
    try {
      const res = await axiosInstance.post("/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
      console.log(err)
    }

}


   return (
    <>
       <div className="register" onSubmit={handleSubmit}>
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..."
        onChange={e=>setUsername(e.target.value)}
        />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..."
         onChange={e=>setEmail(e.target.value)}
        />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..."
        onChange={e=>setPassword(e.target.value)}
        />
        <button className="registerButton" type='submit'>Register</button>
      </form>

    
      <button className="registerLoginButton">
      <Link className='link' to="/login">
        Login
        </Link>
        </button>
     
        {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}  
    </div>
    
    </> 


   )
 }
 