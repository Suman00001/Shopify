import React from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="signup-wrap">
    <h2>Sign Up</h2>
    <form action="signup.html" method="post">
    <input type="text" name="username" placeholder="Username"/>
    <input type="email" name="email" placeholder="Email"/>
    <input type="password" name="password" placeholder="Password"/>
    <input type="password" name="confirm_password" placeholder="Confirm Password"/>
    <input type="submit" value="Sign Up"/>
    <p>Already have an account? <NavLink to="/Login">Login</NavLink>.</p>
    </form>
    </div>
  )
}

export default SignUp
