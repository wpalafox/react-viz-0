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


function App() {
    const data = [
      {image: Wolf, title: 'Monthly Report', link: '/'},
      {image: Cat, title: 'Vulnerability Status Report', link: '/'},
      {image: Skull, title: 'Remediation Monitoring', link: '/'},
      {image: Fist, title: 'Quick Wins', link: '/'},


    ]
  
    const homepage_cards = data.map((item) =>
        
        
        <Card key={item.title} image={item.image} title={item.title} link={item.link}  />
 
 );
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
      <div className="container">
      <div className="row">
                <div className="col-sm">
                    <p>Aggregate by:</p>
                </div>
      </div>
      <div className="row">
            
      </div>
      <div className="row" id="dropdowns">
                <div className="col-sm">
                  <div className="dropdown">
                    <button className="btn btn-primary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Product Name
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                </div>

                <div className="col-sm">
                  <div className="dropdown">
                    <button className="btn btn-primary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Business Product Name
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                </div>

                <div className="col-sm">
                  <div className="dropdown">
                    <button className="btn btn-primary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Security Champion
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                </div>

                <div className="col-sm">
                  <div className="dropdown">
                    <button className="btn btn-primary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Manager
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                </div>
      </div>
          
      <div className="row">
                <div className="col-sm">
                    <p>Other reports:</p>
                </div>
      </div>
          
          
          <div className="row">
              {homepage_cards}
          </div>
          
          
          
          
          <div className="row">
            <div className="col-sm">
              <PieChart />
            </div>
          
            <div className="col-sm">
              <Chart />
            </div>
          </div>
        </div>
        
    </div>
  );
}

export default App;
