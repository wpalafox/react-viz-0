import logo from './logo.svg';
import './App.css';
import PieChart from './components/PieChart';
import Chart from './components/Chart';
import Card from './components/Card';
import Wolf from './images/wolf.jpeg';
import Cat from './images/cat.jpeg';
import Fist from './images/fist_bump.jpeg';
import Skull from './images/skull.png';
import VR from './images/vr_headset.jpeg';
import Card_CVE from './components/Card_CVE.js';
import { useState, useEffect } from 'react';
import Select from 'react-select';

//Context





//Dashboard components
import MonthlyReport from './components/dashboards/MonthlyReport';
import VulnerabilityStatusReport from './components/dashboards/VulnerabilityStatusReport';
import RemediationMonitoring from './components/dashboards/RemediationMonitoring';
import QuickWins from './components/dashboards/QuickWins';


function App() {
    
  //The Booleans below are used for the conditional rendering logic of the App
  //Boolean values: Aggregate Value selected?
  const [aggregateSelected, setaggregateSelected] = useState(false); 
  //Boolean values for Dashboards initially set to False to determine if they 
  //are rendering or not
  const [monthlyReport, setmonthlyReport] = useState(false);
  const [vulnerabilityStatus, setvulnerabilityStatus] = useState(false); 
  const [remediationMonitoring, setvremediationMonitoring] = useState(false);
  const [quickWins, setquickWins] = useState(false);
  
  
  //React State Hooks paired with handlers. 
  const [aggregateValue, setaggregateValue] = useState("");
    
  const selectedAggregateHandler = (e) => {
      const value = e.value
      setaggregateValue(value)
      setaggregateSelected(true)
      console.log("Value selected ",value)
     

      //Then will pass this state value as a prop into all 4 dashboard components
    

    }

  //Will use this function to clear selection and go back to selection drop down menus
  const resetAggregateSelection = () => {
    setaggregateSelected(false)
    setmonthlyReport(false)
    

  }

  //Handlers for all 4 dashboard views

  const monthlyReportHandler = (value) => {
    setmonthlyReport(value);
  }
  
  
  
  
  
  //useEffect will console.log any changes of state in the app in real time.  
    useEffect(() => {
      //console.log("Aggregate Type State: ",aggregateValue)
      //console.log("Aggregate Selected State: ",aggregateSelected)
      console.log("MonthlyReport State?: ", monthlyReport);
      console.log("Aggregate Selected?: ", aggregateSelected);
      
    })
  
    /*
  //React State Hooks paired with handlers. 2 of 4
  const [bProductName, setbProductName] = useState("");
  
  const bproductNameHandler = (e) => {
    const value = e.value
    setbProductName(value)
    console.log("Value selected ",value)
  }

 
   //React State Hooks paired with handlers. 3 of 4
  const [securityChampion, setSecurityChampion] = useState("");
  
  const securityChampioneHandler = (e) => {
    const value = e.value
    setSecurityChampion(value)
    console.log("Value selected ",value)
  }
  
   //React State Hooks paired with handlers. 4 of 4
  
  const [manager, setManager] = useState("");

  const managerHandler = (e) => {
    const value = e.value
    setManager(value)
    console.log("Value selected ",value)
  }
  */
  

  
  //Dummy Lists of Objects for testing and setting state (for dropdowns)
  const techCompanies = [
    { label: "Apple", value: "apple" },
    { label: "Facebook", value: "facebook" },
    { label: "Netflix", value: "netflix" },
  ];

    //Testing for dropdown
    const footballTeams = [
      { label: "Ravens", value: "ravens" },
      { label: "Cowboys", value: "cowboys" },
      { label: "Saints", value: "saints" },
     
    ];

    //Testing for dropdown
    const iceCream = [
      { label: "Vanilla", value: "vanilla" },
      { label: "Chocolate", value: "chocolate" },
      { label: "Coffee", value: "coffee" },
      
    ];

  
    //Testing for dropdown
      const Cars = [
        { label: "Civic", value: "civic" },
        { label: "Mustang", value: "mustang" },
        { label: "Tacoma", value: "tacoma" },
       
      ];
  
  
  
  
  
  //Need to pass handlers for each respective Dashboard into here
    const data = [
      {image: Wolf, title: 'Monthly Report', handler: monthlyReportHandler},
      {image: Cat, title: 'Vulnerability Status Report', link: '/'},
      {image: Skull, title: 'Remediation Monitoring', link: '/'},
      {image: Fist, title: 'Quick Wins', link: '/'},


    ]

  const homepage_cards = data.map((item) =>
        
        <Card key={item.title} image={item.image} title={item.title} handler={item.handler}  />

);
  
    const data0 = [
      {title: 'CVE-2022-30333', score: 7.5, epss: .89, audience: 5000 , tweets: 10000, retweets: 15000},
      {title: 'CVE-2022-23277', score: 8.8, epss: 1.97, audience: 5000 , tweets: 10000, retweets: 15000},
      {title: 'CVE-2022-30190', score: 7.8, epss: 69.59, audience: 5000 , tweets: 10000, retweets: 15000},
    


    ]
 
   
const CVSS_cards = data0.map((item) =>
        
        
      <Card_CVE key={item.title} score={item.score} epss={item.epss} audience={item.audience} tweets={item.tweets} retweets={item.retweets}  />

  );
  
  
  
  
  
  
  
  
  
  
  
 
  
    if(!aggregateSelected){ 
      return (
        <div className="App">
          <header className="App-header">
          
          </header>
          <div className="container">
          <div className="row">
                    <div className="col-sm">
                        <p><b>Aggregate by</b></p>
                    </div>
          </div>
          <div className="row">
                
          </div>
          <div className="row" id="dropdowns">
                    <div className="col-sm">
                        <p>Product Name</p>
                        <Select 

                          options={iceCream}
                          onChange={selectedAggregateHandler}
                          
                          
                          />
                    </div>

                    <div className="col-sm">
                    <div className="col-sm">
                        <p>Business Product Name</p>
                        <Select 
                        
                          options={ footballTeams }
                          onChange={selectedAggregateHandler}
              
                          />
                    </div>
                    </div>

                    <div className="col-sm">
                    <div className="col-sm">
                        <p>Security Champion</p>
                        <Select 
                        options={ techCompanies }
                        onChange={selectedAggregateHandler} 
                        />
                    </div>
                    </div>

                    <div className="col-sm">
                    <p>Manager</p>
                        <Select 
                          options={ Cars } 
                          onChange={selectedAggregateHandler}
                        
                        
                        />
                    </div>
          </div>
  
            </div>
            
        </div>
      );
    }else if(aggregateSelected && !monthlyReport){
      return (
        <div className="container">
            <div className="row" id="selection-status-row">
            <div className="col">
              <p><b>{aggregateValue}</b> aggregation filter selected</p>
            

            <button type="button" id="reset" className="btn btn-danger" onClick={resetAggregateSelection}>Reset</button>
            </div>
            </div>
            <div className="row">
                {homepage_cards}
              
            </div>
          
        </div>



      )



    }else if(monthlyReport && aggregateSelected){
      return (
      
      <MonthlyReport data={aggregateValue} />
  

      );
    }





}


export default App;


/*
Testing out the Charts rendering from the Victory Library
  <div className="row">
            <div className="col-sm">
              <PieChart />
            </div>
          
            <div className="col-sm">
              <Chart />
            </div>
*/

//Helpful links
//How to send state props to another component in react with onclick
//https://www.geeksforgeeks.org/how-to-send-state-props-to-another-component-in-react-with-onclick/
//https://stackoverflow.com/questions/38572842/react-select-setstate-of-prop
//https://stackoverflow.com/questions/28868071/onchange-event-using-react-js-for-drop-down
//https://www.pluralsight.com/guides/how-to-capture-the-value-of-dropdown-lists-with-react-bootstrap


//THIS IS IT
//https://www.codegrepper.com/code-examples/javascript/handlechange+select+react


//Psuedo code
//Now that I have set the state variables up for the App component, I will need to trigger 
//the coponent on a click with the state passed into it as a prop....

//This library may help in the future.
//https://react-query.tanstack.com/overview

//Passing data between components
//https://www.geeksforgeeks.org/how-to-pass-data-from-one-component-to-other-component-in-reactjs/
//You can think of React context as the equivalent of global variables for our React components.
//This is the benefit of React context – we can bypass using props entirely and therefore avoid the issue of props drilling.
//https://www.freecodecamp.org/news/react-context-for-beginners/




//Think about another way to attack this: since all the passing of data involves a component,
//that is in the return part of a parent component, I think I need to include
//conditional rendering so I can simply pass the props.. so may not use the router this time.
//https://reactjs.org/docs/conditional-rendering.html

//Okay, I need to take a step back and first, only allow the user to select one state from dropdown...
//Or have the option to reset...
//Psuedo code, if something is selected, then the other selects will not render..
//And a button will be available to reset...
