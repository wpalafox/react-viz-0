import React from 'react';
import './Card.css';
import { useState, useEffect } from 'react';

export default function Card(props) {

function handleChange() {
        // Here, we invoke the callback with the new value
       props.handler(true)
}

  return (
        //style="width: 18rem;"
        <div className="col-sm">
            <div className="card" >
                <img src={props.image} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                   
                    <button type="button" className="btn btn-outline-primary" onClick={handleChange}>View</button>
                </div>
            </div>

        </div>

  )
}

