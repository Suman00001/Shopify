import React from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className="login-wrap">
    <h2>Login</h2>
    <form action="index.html" method="post">
    <input type="text" name="username" placeholder="Username"/>
    <input type="password" name="password" placeholder="Password"/>
    <input type="submit" value="Login"/>
    </form>
    <p>Don't have an account? <NavLink to='/SignUp'>Sign up</NavLink>.</p>
    </div>
  )
}

export default Login
