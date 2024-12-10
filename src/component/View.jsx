import React from 'react'
import { NavLink } from 'react-router-dom'

const View = (props) => {
    let count=0;
    function addHendler(e){
        // e.preventDefault();
        count=count+1;
        console.log(count);
//         <div class="alert alert-success" role="alert">
//   <h4 className="alert-heading">Well done!</h4>
//   <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
//   <hr/>
//   <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
// </div> 

    }

    return (
        <div className="card bg-light mt-5 p-3 max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={props.imgsrc} className="img-fluid rounded-start" alt="Loading..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                        <p className="card-text">{props.price}</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <NavLink to='/ViewProduct' className="btn btn-primary" onClick={addHendler}>Add to Cart</NavLink>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default View
