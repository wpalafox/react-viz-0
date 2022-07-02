import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
        //style="width: 18rem;"
        <div className="col-sm">
            <div className="card" >
                <img src={props.image} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                   
                    <a href={props.link} className="btn btn-primary">View</a>
                </div>
            </div>

        </div>

  )
}

