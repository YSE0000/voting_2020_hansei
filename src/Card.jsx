import React from 'react'
import { NavLink } from 'react-router-dom'



const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">
                            {props.title}
                         </h5>
                        <p className="card-text">
                            <br></br>
                            Each is a bulletin board of the undergraduate department.<br></br>
                            This bulletin board is run by the academic societies of each department.
                         </p>
                        <NavLink to="/board" className="btn btn-primary">
                            View
                        </NavLink>
                </div>
                </div>
            </div>
        </>
    );
};
export default Card;