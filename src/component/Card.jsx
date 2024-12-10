import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = (props) => {
  return (
    <div className='col-md-4'>
      <div className="card w-18rem">
  <img src={props.imgsrc} className="card-img-top" alt="Loading..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.desc}</p>
    <NavLink to='/ViewProduct' className="btn btn-primary">View Products</NavLink>
  </div>
</div>
    </div>

  )
}

export default Card
