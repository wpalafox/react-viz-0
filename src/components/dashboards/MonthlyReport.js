import React from 'react';


//Testing data viz with this csv
import CSV from '../../test_csv/Data-Platform-MonthlyReport-2022-06-29.csv';
import Papa from 'papaparse';
//const dfd = require("danfojs");
import { readCSV } from 'danfojs';

import { useState, useEffect } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis,
  VictoryTheme } from 'victory';
import './MonthlyReport.css';
  

  



export default function MonthlyReport(props) {

const [dataComp, setDataComp] = useState([])
const read_csv = readCSV(CSV)

const data = [
  {count: 121, category: 'High', label: 'High'},
  {count: 5, category: 'High Expoitable', label: 'High Expoitable'},
  {count: 0, category: 'Critical Exploitable', label: 'Critical Exploitable'},

];
  

 
  return (
    <div className='container'>
      <div>MonthlyReport of {props.data}!</div>

      <VictoryChart
        // adding the material theme provided with Victory
        theme={VictoryTheme.material}
        domainPadding={10}
      >
           
            <VictoryBar
              data={data}
              x="label"
              y="count"
            />
      </VictoryChart>

   
    </div>

  )
}






//Javascript - Parse CSV data into an array
//https://sebhastian.com/javascript-csv-to-array/
//https://books.google.com/books?id=Efo-EAAAQBAJ&pg=PA292&lpg=PA292&dq=how+to+console+log+dataframe+from+danfo.readCSV+react.js&source=bl&ots=RAz5oYSNPj&sig=ACfU3U1o58ebdBJBfTvmU63xKKsptj6RGA&hl=en&sa=X&ved=2ahUKEwjH96y-sN74AhWFnWoFHc9rBOUQ6AF6BAgXEAM#v=onepage&q=how%20to%20console%20log%20dataframe%20from%20danfo.readCSV%20react.js&f=false

//https://javascript.plainenglish.io/off-line-data-visualizations-and-analysis-with-javascript-8e0a891493b1

//Victory GEtting STarted
//https://formidable.com/open-source/victory/docs

//To do
//Will have to fetch data from here, send a JSON object and the server will return a JSON object
//Once the object is received, I believe I will use a Hooks state handler to set the state,
//Then once the state is set, I will pass the state into the Data Viz component 