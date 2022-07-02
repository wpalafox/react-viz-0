import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import reportWebVitals from './reportWebVitals';
import MonthlyReport from './components/dashboards/MonthlyReport';
import VulnerabilityStatusReport from './components/dashboards/VulnerabilityStatusReport';
import RemediationMonitoring from './components/dashboards/RemediationMonitoring';
import QuickWins from './components/dashboards/QuickWins';




const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
         
        
          

          
        
        
        </Routes>
      <Footer />
    
    
    </BrowserRouter>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
