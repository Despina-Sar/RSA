import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavDropdown,Dropdown  } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import {Modal,Form, Row, Col } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState,useContext ,useEffect, useLayoutEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import useIsMobile from './TestuseIsMobile'; // Import the custom hook
import LanguageSwitcher from './LanguageSwitcher.jsx';
import Calculator from './Calculator.jsx';
import LanguageSwitcherMobile from './LanguageSwitcherMobile.jsx';
import { useTranslation } from 'react-i18next';
import "./NavBar.css";
import RSA_Visual1 from '../images/RSA_Visual1.png';
import RSA_VisualVertical from '../images/RSA_VisualVertical.png';
import ceidlogo from '../images/ceidlogo.PNG';
import favicon from '../images/favicon.png';
import AlgorithmEL from '../images/AlgorithmEL.PNG';
import AlgorithmEN from '../images/AlgorithmEN.PNG';
import AlgorithmVerticalEL from '../images/AlgorithmVerticalEL.PNG';
import AlgorithmVerticalEN from '../images/AlgorithmVerticalEN.PNG';





import {
  Link,useLocation
} from "react-router-dom";
import PlayMain from './PlayMain.jsx';



function NavBar({ step, onNext ,where  }) {

  const [isSmallScreen, setSmallScreen] = useState(window.innerWidth < 800);

  const [expandedSection, setExpandedSection] = useState(null);
  const [show, setShow] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseTop = () => setShowTop(false);
  const handleShowTop = () => setShowTop(true);
  const handleShowCalculator = () => setShowCalculator(true);
  const handleCloseCalculator = () => setShowCalculator(false);
 
  const isMobile = useIsMobile();

  const { t,i18n  } = useTranslation();
  const imageSrc1 = i18n.language === 'en' ? RSA_Visual1 : ceidlogo;
  const imageSrc = i18n.language === 'en' ? AlgorithmEN : AlgorithmEL;
  const imageSrcVertical1 = i18n.language === 'en' ? RSA_VisualVertical : favicon;
  const imageSrcVertical = i18n.language === 'en' ? AlgorithmVerticalEN : AlgorithmVerticalEL;

  const [scroll, setScroll] = useState(false);



  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth < 850);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  useEffect(() => {
   
   // console.log("modalOpen == false " + (modalOpen == false));
    //let x=false;
   
    if(where === "Play"){setScroll(true);}
    else if(where === "Help") {setScroll(true);}
    else if(where === "Test") {setScroll(false);}
    
  }, []);

  
  
  const handleScroll = (event) => {
    console.log('User scrolled:', event.target.scrollTop);
  };




  const location = useLocation(); // Get the current location

    // Function to refresh the browser
    const refreshPage = () => {
      window.location.reload();
    };
  

    const clarifications = [
      { 
        id: 1, 
        title:   t('OffcanvasTitle'), 
        content:
  
        <ol>
                
        <li>
        <strong><span  
            style={{ border:' 0px',
                    padding:'2px 5px',
                    width:'55%',
                    borderRadius: '5px',
                    backgroundColor: 'rgb(255, 255, 255)',
                    color:'black'}}>
             {t('AlgorithmStep1')}
            </span></strong>
        </li>

        <li>
        <strong><span  
            style={{ border:' 0px',
                    padding:'2px 5px',
                    width:'16%',
                    borderRadius: '5px',
                    backgroundColor: 'rgb(255, 255, 255)',
                    color:'black'}}>
               {t('AlgorithmStep2')}
            </span></strong>
        </li>
        <li>
        <strong> <span  
            style={{ border:' 0px',
                    padding:'2px 5px',
                    width:'35%',
                    borderRadius: '5px',
                    backgroundColor: 'rgb(255, 255, 255)',
                    color:'black'}}>
                {t('AlgorithmStep3')}
            </span></strong>
        </li>
        

        <li>
        <strong>
          <span  
            style={{ 
                border:' 0px',
                padding:'2px 5px',
                boxShadow : '0 0 8px rgba(255, 255, 255, 0.8)',
                borderRadius: '8px',
                backgroundColor: 'rgb(138,4,17)'}}>
                        {t('AlgorithmStep4')}
            </span> </strong> 
         
              <p dangerouslySetInnerHTML={{ __html: t('AlgorithmStep4a') }} />
            
        </li>
        <li>

    <strong><span  style={{
        border:' 0px',
        padding:'2px 5px',
        borderRadius: '8px', 
        boxShadow : '0 0 8px rgba(255, 255, 255, 0.8)',
        backgroundColor: 'rgb(138,4,17)'}}>
            {t('AlgorithmStep5')}
            </span> </strong> <br />        
            {t('AlgorithmStep5a')}    
        </li>                     
    </ol> 
      }
  
    ];


    const getTextForPath = () => {
      switch (location.pathname) {
        case '/':
          return 'Home Page';
        case '/HelpMain':
          return 'Βοήθεια';
        case '/PlayMain':
          return 'Play';
        case '/CardCarousel':
          return 'Card Carousel';
        default:
          return 'Unknown Page';
      }
    };
  
    const toggleSection = (id) => {
      setExpandedSection(expandedSection === id ? null : id);
    };
    
  return (
    <>
   
      <Navbar className = "navbar" style={{ marginLeft: scroll ? '14px' : '0' }}>
     
        <Container>
     
           <Navbar.Brand as={Link} to="/" id="nav-menu">
                <img
                  alt="Home Icon"
                  src={require('../images/favicon.png')}
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                  style={{ cursor: 'pointer' }}
                  marginTop= "10 px"
                /> 
                
           </Navbar.Brand>  
     
           {/*
           {!isMobile && (
           <div style={{ 
            fontWeight: 'lighter',
            fontSize: '1.1rem' ,
            color:'rgb(221, 221, 221)'
             }}>
               {getTextForPath()}            
           </div> 
          )}
           */}
           

         


           {location.pathname !== '/Info' &&(    
            <Nav id = "menu">  
        
         
          
          
            <Navbar.Brand as={Link} to="/" id="nav-menu">  
          
            </Navbar.Brand>  
      
            {/* location.pathname === '/HelpMain' && ( 
             <Button 
                    onClick={onNext}                         
                    style={{
                      fontSize: '1rem', // Slightly larger font for better readability
                      padding: '0.0rem 0.7rem', // Adjusted padding for a balanced look
                      fontWeight: 'bolder',
                      borderColor: '#c22748', // Custom border color
                      borderWidth: '2px', // Custom border thickness
                      color: '#c22748', // Ensure text color matches or complements the border
                      backgroundColor: 'rgb(8, 4, 4)', // Dark background
                      borderRadius: '5px', // Rounded corners for a modern look
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
                      transition: 'all 0.3s ease-in-out', // Smooth animation for hover effects
                      marginLeft: '5px' , marginRight: '5px' 
                      

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
                     {t('NavNext')}
               </Button>
           ) */} 


              <Navbar.Toggle aria-controls="basic-navbar-nav" /> 

              {isSmallScreen && (
                  <NavDropdown title= {<i className="bi bi-list"></i>} className="nav-dropdown">
                    <NavDropdown.Item as={Link} to="/PlayMain">{t('NavEducational')}</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/HelpMain">{t('NavHelp')}</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/CardCarousel">{t('NavTest')}</NavDropdown.Item>
                    <NavDropdown.Item onClick={(e) => e.stopPropagation()}>
                    <LanguageSwitcherMobile />
                    </NavDropdown.Item>
                  </NavDropdown>
            )}


              {!isSmallScreen && (
                      <Nav.Link as={Link} to="/PlayMain">{t('NavEducational')}</Nav.Link>
            )}
        
               {!isSmallScreen && (
                      <Nav.Link as={Link} to="/HelpMain">{t('NavHelp')}</Nav.Link>
                    )}

    

                {!isSmallScreen && (
                    //location.pathname === '/PlayMain' && ( 
                    <Nav.Link as={Link} to="/CardCarousel">{t('NavTest')}</Nav.Link>
                  // )
                  )}

                <Button variant="dark" onClick={handleShowCalculator} style={{ fontSize: '1.0rem',fontWeight: 'bolder',marginLeft: '5px'    }}>
                          <i className="bi bi-calculator-fill" style={{fontSize: '20px'}}></i>
                        </Button>
                        

                
            
            { isMobile && (
              <Button variant="dark" onClick={handleShow} style={{ fontSize: '1.0rem',fontWeight: 'bolder' ,marginLeft: '5px' , marginRight: '5px'   }}>
                 <i className="bi bi-question-lg" style={{fontSize: '20px'}}></i>
              </Button>
          )}


         {!isMobile && (
            <Button variant="dark" onClick={handleShowTop} style={{ fontSize: '1.0rem',fontWeight: 'bolder' ,marginLeft: '5px' , marginRight: '5px'   }}>
                 <i className="bi bi-question-lg" style={{fontSize: '20px'}}></i>
              </Button>
                  )}

{
          //location.pathname !== '/HomeGrid' && (
            <Button variant="dark" onClick={refreshPage} style={{ fontSize: '1.0rem',fontWeight: 'bolder'  , marginRight: '5px'  }}>
                    <i className="bi bi-arrow-clockwise" style={{fontSize: '20px'}}></i>
                 </Button>
            //    )
            }

       
    
           

        {!isSmallScreen && (
                <LanguageSwitcher/>
              )}

         


             <Offcanvas show={show} onHide={handleClose} style={{  backgroundColor: 'rgb(0, 0, 0)' ,color: 'white' }}>
                <Offcanvas.Header closeButton 
                  style={{
                    fontSize: '1rem', // Slightly larger font for better readability
                    padding: '0.4rem 0.3rem', // Adjusted padding for a balanced look
                    fontWeight: 'bolder',
                    borderColor: '#c22748', // Custom border color
                    borderWidth: '2px', // Custom border thickness
                    color: 'white', // Ensure text color matches or complements the border
                    backgroundColor: '#c22748', // Dark background
                    borderRadius: '5px', // Rounded corners for a modern look
                    marginLeft: '5px' , marginRight: '5px' , marginTop: '5px',
                    width: '10%'
                  }}>
                </Offcanvas.Header>
                <Offcanvas.Body>

                {clarifications.map((clarification) => (
                   <div>
                    <h6>{clarification.title}</h6>
                    <h9 className={expandedSection === clarification.id || !isMobile ? 'show' : 'hide'}>
                      {clarification.content}
                    </h9>
                  </div>
                ))}

                  <div  className="image-container">
                        <img
                          alt=""
                          src= {imageSrcVertical}
                          height="auto" width="80%"        
                        />   
                  </div>
                 </Offcanvas.Body>
              </Offcanvas>



              <Offcanvas show={showTop} onHide={handleCloseTop}  placement="top"  style={{  backgroundColor: 'rgb(0, 0, 0)' ,color: 'white' ,height: '56%'}}>
                <Offcanvas.Header closeButton 
                
                style={{
                      fontSize: '1rem', // Slightly larger font for better readability
                      padding: '0.4rem 0.3rem', // Adjusted padding for a balanced look
                      fontWeight: 'bolder',
                      borderColor: '#c22748', // Custom border color
                      borderWidth: '2px', // Custom border thickness
                      color: 'white', // Ensure text color matches or complements the border
                      backgroundColor: '#c22748', // Dark background
                      borderRadius: '5px', // Rounded corners for a modern look
                      marginLeft: '5px' , marginRight: '5px' , marginTop: '5px',
                      width: '3%'
                    }}
                    >
                </Offcanvas.Header>
                <Offcanvas.Body>
                   <Row>
                    <Col xs={3} >
                      {clarifications.map((clarification) => (
                        <div>
                          <h6>{clarification.title}</h6>
                          <h10 className={expandedSection === clarification.id || !isMobile ? 'showTop' : 'hide'}>
                            {clarification.content}
                          </h10>
                        </div>
                      ))}
                  </Col>
                  <Col>
                    <div  className="image-container">
                          <img
                           alt=""
                           src= {imageSrc}
                           height="auto" width="95%"        
                          />   
                    </div>
                  </Col>
                  </Row>
                 </Offcanvas.Body>
              </Offcanvas>



              <Offcanvas show={showCalculator} onHide={handleCloseCalculator} style={{  backgroundColor: 'rgb(0, 0, 0)' ,color: 'white', width: '35%', minWidth: '390px' }}>
                <Offcanvas.Header closeButton 
                
                style={{
                      fontSize: '1rem', // Slightly larger font for better readability
                      padding: '0.4rem 0.3rem', // Adjusted padding for a balanced look
                      fontWeight: 'bolder',
                      borderColor: '#c22748', // Custom border color
                      borderWidth: '2px', // Custom border thickness
                      color: 'white', // Ensure text color matches or complements the border
                      backgroundColor: '#c22748', // Dark background
                      borderRadius: '5px', // Rounded corners for a modern look
                      marginLeft: '5px' , marginRight: '5px' , marginTop: '5px',
                      width: '10%'
                    }}
                    >
                </Offcanvas.Header>
                <Offcanvas.Body>
                   <Row>
                      <Calculator/>
                  </Row>
                 </Offcanvas.Body>
              </Offcanvas>





                        
            </Nav>
           )}            
        </Container>
        
      </Navbar>   
 

        </>

  );
}

export default NavBar;