import React , { useEffect } from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,Navigate,useLocation
} from "react-router-dom";
import Info from './Components/Info';
import HelpMain from './Components/HelpMain';
import CardCarousel from './Components/CardCarousel';
import PlayMain from './Components/PlayMain';
import { Row, Col, Container,Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import NavBar from './Components/NavBar.jsx'
import LanguageSwitcher from './Components/LanguageSwitcher.jsx';
import LanguageSwitcherMobile from './Components/LanguageSwitcherMobile.jsx';
import AccessibilityMenu from './Components//AccessibilityMenu';

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
  
const { t } = useTranslation();
  return (

  

    <Router  basename="/RSA">

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
                      <br/>                      
                      <br/>
                      <h5 className="app-name"> {t('App')}</h5>
                    </div>
                  </Col>

                  <Col md={6} className="text-center app-right">
                     <div className="button-container">
                      <Row className="mb-3">
                        <Link to="/Info">
                        <Button
                   style={{
                    fontSize: '1.1rem', // Slightly larger font for better readability
                   
                    fontWeight: 'bolder',
                    borderColor: '#06c3c9', // Custom border color
                    borderWidth: '2px', // Custom border thickness
                    color: '#06c3c9', // Ensure text color matches or complements the border
                    backgroundColor: 'rgb(8, 4, 4)', // Dark background
                    borderRadius: '5px', // Rounded corners for a modern look
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
                    transition: 'all 0.3s ease-in-out', // Smooth animation for hover effects
                    width:'300px' ,
                    height:'45px'     
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#06c3c9'; // Change to border color on hover
                    e.target.style.color = '#fff'; // Make text white on hover
                    e.target.style.boxShadow = '0 8px 12px rgba(32, 179, 179, 0.5)'; // Highlight shadow
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgb(8, 4, 4)'; // Reset to original background
                    e.target.style.color = '#06c3c9'; // Reset text color
                    e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)'; // Reset shadow
                  }}
                > 
                 {t('AppButton1')}
                </Button>
                        </Link>
                      </Row>
                      <Row>
                        <Link to="/PlayMain">
                        <Button 
                  style={{
                    fontSize: '1.1rem', // Slightly larger font for better readability
                    fontWeight: 'bolder',
                    borderColor: '#c22748', // Custom border color
                    borderWidth: '2px', // Custom border thickness
                    color: '#c22748', // Ensure text color matches or complements the border
                    backgroundColor: 'rgb(8, 4, 4)', // Dark background
                    borderRadius: '5px', // Rounded corners for a modern look
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
                    transition: 'all 0.3s ease-in-out', // Smooth animation for hover effects
                    width:'300px',
                    height:'45px'                      

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
                  {t('AppButton2')}
                       </Button>
                        </Link>
                      </Row>
                      <Row className="mb-3">
                      
                        <Button 
                          style={{
                            fontSize: '0.9rem', // Slightly larger font for better readability
                            padding: '0.0rem ',  // Adjusted padding for a balanced look
                            fontWeight: 'bolder',
                            borderColor: 'grey', // Custom border color
                            borderWidth: '2px', // Custom border thickness
                            color: 'white', // Ensure text color matches or complements the border
                            backgroundColor: 'rgb(8, 4, 4)', // Dark background
                            borderRadius: '5px', // Rounded corners for a modern look
                            transition: 'all 0.3s ease-in-out', // Smooth animation for hover effects
                            width:'100%',
                            marginTop:'10px'
                                                      
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#grey'; // Change to border color on hover
                            e.target.style.color = 'white'; // Make text white on hover
                            e.target.style.boxShadow = '0 8px 12px grey'; // Highlight shadow
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'rgb(8, 4, 4)'; // Reset to original background
                            e.target.style.color = 'white'; // Reset text color
                            e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)'; // Reset shadow
                          }}
                        >
                           <LanguageSwitcherMobile />
                       </Button>
                       
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Container>
            }
          />
     
       {/*  <Route path="/HomeGrid" element={<HomeGrid />} />
        <Route path="/PlayMain" element={<PlayMain />} />
      
        <Route path="/RSA" element={<Navigate to="/" />} />
      
        <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        */}
    
      <Route path="/Info" element={<Info />} />
      <Route path="/PlayMain" element={<PlayMain />} />
      <Route path="/HelpMain" element={<HelpMain />} />
      <Route path="/CardCarousel" element={<CardCarousel />} />
      <Route path="/RSA" element={<Navigate to="/" />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
      </div>
    </Router>
 
  );
}

export default App;