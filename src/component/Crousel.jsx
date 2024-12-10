import React from 'react'
import web from '../img/img1.png'
import web2 from '../img/img2.png'
import web3 from '../img/img4.png'

const Crousel = () => {
  return (
   
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={web} class="d-block w-100" alt="Loading..."/>
      </div>
      <div className="carousel-item">
        <img src={web2} class="d-block w-100" alt="Loading..."/>
      </div>
      <div className="carousel-item">
        <img src={web3} class="d-block w-100" alt="Loading"/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  
  )
}

export default Crousel
