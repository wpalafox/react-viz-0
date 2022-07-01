import React from 'react';
//import Chart from './components/Chart';
import './Card_CVE.css';
import { VictoryChart } from 'victory';


export default function (props) {
  return (
    <div>
            <div className="card">
               
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">CVSS v3: {props.score}</p>
                    <p className="card-text">EPSS: {props.epss}%</p>
                    <p className="card-text">Audience: {props.audience} </p>
                    <p className="card-text">Tweets: {props.tweets} </p>
                    <p className="card-text"> Retweets: {props.retweets}</p>
                    
                    <VictoryChart  />
                   
                </div>
                </div>

    </div>
  )
}
