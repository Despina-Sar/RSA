import React from 'react';
 import './index.css';
import NavBar from './Components/NavBar'
//import Footer from './Components/Footer'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,Navigate
} from "react-router-dom";
import {HashRouter} from "react-router-dom";
import Demo from './Components/Demo';
import Training from './Components/Training';
import Real from './Components/Real';
import EducationalMain from './Components/EducationalMain';
import HowTo from './Components/HowTo';
import HomeGrid from './Components/HomeGrid';
import PlayMain from './Components/PlayMain';
import Test from './Components/Test';
import { Row, Col, Container,Button } from 'react-bootstrap';

import Test1 from "./Components/test1"; // Adjust the path as needed
import FancyHome from "./Components/FancyHome"; 

import { useRoutes } from "react-router-dom";



{/*

function App() { 
 return (
 

  
<div  className="background-container">
   

     {/*<HashRouter>
        <div className="App">
           <NavBar/>
      
            <div className="content">
            <Test/>
            <EducationalMain/>
            {/*
              <Routes>
                <Route path="/" element={<Home/>}/> 
                <Route path="/Demo" element={<Demo/>}/>
                <Route path="/EducationalMain" element={<EducationalMain/>}/>
                <Route path="/Training" element={<Training/>}/>
                <Route path="/Real" element={<Real/>}/>       
                <Route path="/Test" element={<Test/>}/>                            
             </Routes>

           
            </div>
        </div>      
     {/* </HashRouter>
    

     </div>
   

       
  );  
}
export default App;



*/}


          
           {/*
                <img
                  alt=""
                  src= {require('./images/favicon.png')}
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                  backgroundcolor= 'rgb(33, 37, 41)'
                />{' '}
          
              <Test/>
              <EducationalMain/>       
       */}



function App() {
  return (
    <Router>
      <div className="background-container">
        <Routes>
          {/* Main Screen Route */}
          <Route
            path="/"
            element={
              <Container className="app-container">
                <Row className="align-items-center justify-content-center vh-100">
                  <Col md={6} className="text-center app-left">
                    <div>
                      <img
                        alt=""
                        src={require('./images/favicon.png')}
                        width="170"
                        height="170"
                        className="d-inline-block align-top"
                        backgroundcolor="rgb(33, 37, 41)"
                      />
                      <h1 className="app-name">RSA Educational App</h1>
                    </div>
                  </Col>
                  <Col md={6} className="text-center app-right">
                    <div>
                      <Row className="mb-3">
                        <Link to="/HomeGrid">
                        <Button
                   style={{
                    fontSize: '1rem', // Slightly larger font for better readability
                    padding: '0.4rem 0.7rem', // Adjusted padding for a balanced look
                    fontWeight: 'bolder',
                    borderColor: '#06c3c9', // Custom border color
                    borderWidth: '2px', // Custom border thickness
                    color: '#06c3c9', // Ensure text color matches or complements the border
                    backgroundColor: 'rgb(8, 4, 4)', // Dark background
                    borderRadius: '5px', // Rounded corners for a modern look
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
                    transition: 'all 0.3s ease-in-out', // Smooth animation for hover effects
                    width:'70%'   
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#06c3c9'; // Change to border color on hover
                    e.target.style.color = '#fff'; // Make text white on hover
                    e.target.style.boxShadow = '0 8px 12px rgba(194, 39, 72, 0.5)'; // Highlight shadow
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgb(8, 4, 4)'; // Reset to original background
                    e.target.style.color = '#06c3c9'; // Reset text color
                    e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)'; // Reset shadow
                  }}
                > 
                Μάθε τα βασικά!</Button>
                        </Link>
                      </Row>
                      <Row>
                        <Link to="/PlayMain">
                        <Button 
                  style={{
                    fontSize: '1rem', // Slightly larger font for better readability
                    padding: '0.4rem 0.7rem', // Adjusted padding for a balanced look
                    fontWeight: 'bolder',
                    borderColor: '#c22748', // Custom border color
                    borderWidth: '2px', // Custom border thickness
                    color: '#c22748', // Ensure text color matches or complements the border
                    backgroundColor: 'rgb(8, 4, 4)', // Dark background
                    borderRadius: '5px', // Rounded corners for a modern look
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
                    transition: 'all 0.3s ease-in-out', // Smooth animation for hover effects
                    width:'70%'   
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#c22748'; // Change to border color on hover
                    e.target.style.color = '#fff'; // Make text white on hover
                    e.target.style.boxShadow = '0 8px 12px rgba(194, 39, 72, 0.5)'; // Highlight shadow
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgb(8, 4, 4)'; // Reset to original background
                    e.target.style.color = '#c22748'; // Reset text color
                    e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)'; // Reset shadow
                  }}
                 >
                  Ξεκίνα το παιχνίδι!</Button>
                        </Link>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Container>
            }
          />
         <Route path="/HomeGrid" element={<HomeGrid />} />
        <Route path="/PlayMain" element={<PlayMain />} />
        {/* Redirect `/RSA` to `/` */}
        <Route path="/RSA" element={<Navigate to="/" />} />
        {/* Optional Catch-All Redirect */}
        <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;