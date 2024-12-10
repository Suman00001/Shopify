import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { IoIosCart } from "react-icons/io";
import './Login.css';



const Navbar = () => {
  return (

    <div className='sticky-top'>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid ms-3">
          <NavLink className="navbar-brand me-5 fw-bold" to="/">Shopify</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link me-3" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link me-3" aria-current="page" to="/Product">Catagory</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link me-5" aria-current="page" to="/About">About</NavLink>
              </li>
              <input className="form-control me-2" id='search' type="search" placeholder="Search" aria-label="Search" />
            </ul>
            <form className="d-flex">
              <NavLink to="/Login" button className="btn btn-outline-success me-4">Login / Sign Up</NavLink>
              <div class="position-relative me-5">
                <NavLink to="/Cart"><IoIosCart className='display-6' /></NavLink>
                <span class="position-absolute start-100 translate-middle badge rounded-pill bg-danger mt-1">
                  1
                  <span class="visually-hidden">Product in Cart</span>
                </span>
              </div>

            </form>
          </div>
        </div>
      </nav>
    </div>


  )
}

export default Navbar
