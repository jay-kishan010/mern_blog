import { useState } from "react"
import axios from 'axios'
import "./register.css"
import {useNavigate} from 'react-router-dom'
import { useFormik } from "formik";
import React from 'react'

const Register = () => {
  const navigate = useNavigate()
  const registerForm = useFormik ({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      const {username,email,password}=values;
      try {
        const res = await axios.post("http://localhost:5000/api/auth/register",{
          username,
          email,
          password
         })
         res.data && navigate("/login")
      } catch (error) {
        console.log(error);
      }
     
       }})
      //  console.log(res.status);
      
  

    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={registerForm.handleSubmit}>
        <label>Username</label>
        <input className="registerInput" type="text" id="username" values={registerForm.values.username} onChange={registerForm.handleChange} placeholder="Enter your username..." />
        <label>Email</label>
        <input className="registerInput" type="text" id="email" values={registerForm.values.email} onChange={registerForm.handleChange} placeholder="Enter your email..." />
        <label>Password</label>
        <input className="registerInput" type="password" id="password" values={registerForm.values.password} onChange={registerForm.handleChange} placeholder="Enter your password..." />
        <button className="registerButton">Register</button>
        <button className="registerLoginButton" type="Submit">Login</button>
      </form>
    </div>
    )
}

export default Register