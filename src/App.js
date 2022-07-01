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

//Dashboard components
import MonthlyReport from './components/dashboards/MonthlyReport';
import VulnerabilityStatusReport from './components/dashboards/VulnerabilityStatusReport';
import RemediationMonitoring from './components/dashboards/RemediationMonitoring';
import QuickWins from './components/dashboards/QuickWins';


function App() {
    
  //React State Hooks paired with handlers. 
  const [productName, setProductName] = useState("Vanilla");
    
  const productNameHandler = (e) => {
      const value = e.value
      setProductName(value)
      console.log("Value selected ",value)
    }
  
    useEffect(() => {
      console.log("Product name state: ",productName)
    })
  
  const [bProductName, setbProductName] = useState("");
  const [securityChampion, setSecurityChampion] = useState("");
  const [manager, setManager] = useState("");
  
  //Handle the change
  //const handleProductNameChange = (e) => {setProductName[e.target.value]}

  
  //Testing for dropdown
  const techCompanies = [
    { label: "Apple", value: 1 },
    { label: "Facebook", value: 2 },
    { label: "Netflix", value: 3 },
  ];

    //Testing for dropdown
    const footballTeams = [
      { label: "Ravens", value: 1 },
      { label: "Cowboys", value: 2 },
      { label: "Saints", value: 3 },
     
    ];

    //Testing for dropdown
    const iceCream = [
      { label: "Vanilla", value: "vanilla" },
      { label: "Chocolate", value: "chocolate" },
      { label: "Coffee", value: "coffee" },
      
    ];
    /*
    const [selectedOption, setSelectedOption] = useState({ value: 'vanilla', label: 'Vanilla' });

    const handleChange = (e) => {
      setSelectedOption({selectedOption: e.target.value})
    }
    */
      //Testing for dropdown
      const Cars = [
        { label: "Civic", value: 1 },
        { label: "Mustang", value: 2 },
        { label: "Tacoma", value: 3 },
       
      ];
  
  
  
  
    const data = [
      {image: Wolf, title: 'Monthly Report', link: '/monthly_report'},
      {image: Cat, title: 'Vulnerability Status Report', link: '/'},
      {image: Skull, title: 'Remediation Monitoring', link: '/'},
      {image: Fist, title: 'Quick Wins', link: '/'},


    ]

    const data0 = [
      {title: 'CVE-2022-30333', score: 7.5, epss: .89, audience: 5000 , tweets: 10000, retweets: 15000},
      {title: 'CVE-2022-23277', score: 8.8, epss: 1.97, audience: 5000 , tweets: 10000, retweets: 15000},
      {title: 'CVE-2022-30190', score: 7.8, epss: 69.59, audience: 5000 , tweets: 10000, retweets: 15000},
    


    ]
  
    const homepage_cards = data.map((item) =>
        
        
        <Card key={item.title} image={item.image} title={item.title} link={item.link}  />
 
 );

    const CVSS_cards = data0.map((item) =>
        
        
      <Card_CVE key={item.title} score={item.score} epss={item.epss} audience={item.audience} tweets={item.tweets} retweets={item.retweets}  />

  );
  
  
  
  
  
  
  
  
  
  
  
  
  
  
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
                      onChange={productNameHandler}
                      
                      
                      />
                </div>

                <div className="col-sm">
                <div className="col-sm">
                    <p>Business Product Name</p>
                    <Select options={ footballTeams } />
                </div>
                </div>

                <div className="col-sm">
                <div className="col-sm">
                    <p>Security Champion</p>
                    <Select options={ techCompanies } />
                </div>
                </div>

                <div className="col-sm">
                <p>Manager</p>
                    <Select options={ Cars } />
                </div>
      </div>
          
     
          
          
          
          
          
          
          <div className="row">
              {homepage_cards}
          </div>

         
          
        
          
          
          
          
        
         
        </div>
        
    </div>
  );
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