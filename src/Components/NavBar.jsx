import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Modal,Form, Row, Col } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState,useContext  } from 'react';
import Button from 'react-bootstrap/Button';
import useIsMobile from './TestuseIsMobile'; // Import the custom hook



import {
  Link,useLocation
} from "react-router-dom";



function NavBar({ step, onNext }) {


    const [expandedSection, setExpandedSection] = useState(null);

  const [show, setShow] = useState(false);
  const [showTop, setShowTop] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseTop = () => setShowTop(false);
  const handleShowTop = () => setShowTop(true);
  const isMobile = useIsMobile();


  const location = useLocation(); // Get the current location

    // Function to refresh the browser
    const refreshPage = () => {
      window.location.reload();
    };
  

    const clarifications = [
      { 
        id: 1, 
        title: "Υπολογισμός κλειδιών", 
        content:
  
        <ol>
          
            <li>
              <strong><span  
                style={{ border:' 0px',
                         padding:'2px 5px',
                         width:'55%',
                         borderRadius: '5px',
                         backgroundColor: 'rgb(243, 219, 219)',
                         color:'black'}}>
                Επιλέγουμε δύο πρώτους αριθμούς
                </span></strong>
            </li>
  
            <li>
              <strong><span  
                style={{ border:' 0px',
                         padding:'2px 5px',
                         width:'16%',
                         borderRadius: '5px',
                         backgroundColor: 'rgb(243, 219, 219)',
                         color:'black'}}>
                n= P x Q
                </span></strong>
            </li>
            <li>
              <strong> <span  
                style={{ border:' 0px',
                         padding:'2px 5px',
                         width:'35%',
                         borderRadius: '5px',
                         backgroundColor: 'rgb(243, 219, 219)',
                         color:'black'}}>
                Φ(n): (P - 1) x (Q - 1)
                </span></strong>
            </li>
            
      
            <li>
               <strong><span  
                  style={{ 
                     border:' 0px',
                     padding:'2px 5px',
                     boxShadow : '0 0 8px rgba(255, 255, 255, 0.8)',
                     borderRadius: '8px',
                     backgroundColor: 'rgb(4,145,141)'}}>
                        Δημόσιο κλειδι (E,n):
                  </span> </strong> <br />
                Ε δεν έχει κοινούς παράγοντες με το Φ(n), εκτός από το 1 <br /> 
                Ε δεν είναι πολλαπλάσιο των παραγόντων του Φ(n).
            </li>
            <li>
  
           <strong><span  style={{
             border:' 0px',
             padding:'2px 5px',
             borderRadius: '8px', 
             boxShadow : '0 0 8px rgba(255, 255, 255, 0.8)',
             backgroundColor: 'rgb(138,4,17)'}}>
                 Ιδιωτικό κλειδι (D,n):
                 </span> </strong> <br />        
            (D x E) mod (Φ(n)) = 1    
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
      <Navbar className = "navbar">
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
           


        

           {location.pathname !== '/HomeGrid' && (    
            <Nav id = "menu">  
        
         
          
          
            <Navbar.Brand as={Link} to="/" id="nav-menu">  
          
            </Navbar.Brand>  
      
            { location.pathname === '/HelpMain' && ( 
             <Button 
                    onClick={onNext}                         
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
                    Επόμενο
               </Button>
           ) } 


{
        //(location.pathname === '/HelpMain' ||location.pathname === '/CardCarousel' )&& ( 
                      <Nav.Link as={Link} to="/PlayMain">Εκπαίδευση</Nav.Link>
          //  )
            }
        
        {
           //location.pathname === '/PlayMain' && ( 
                      <Nav.Link as={Link} to="/HelpMain">Βοήθεια</Nav.Link>
          //  )
          }

    

         {
          //location.pathname === '/PlayMain' && ( 
          <Nav.Link as={Link} to="/CardCarousel">Test</Nav.Link>
        // )
        }

          {
          //location.pathname !== '/HomeGrid' && (
            <Button variant="dark" onClick={refreshPage} style={{ fontSize: '1.0rem',fontWeight: 'bolder' }}>
                    <i class="bi bi-arrow-clockwise" style={{fontSize: '20px'}}></i>
                 </Button>
            //    )
            }
            
            { isMobile && (
              <Button variant="dark" onClick={handleShow} style={{ fontSize: '1.0rem',fontWeight: 'bolder' ,marginLeft: '5px' , marginRight: '5px'   }}>
                 <i class="bi bi-question-lg" style={{fontSize: '20px'}}></i>
              </Button>
          )}


         {!isMobile && (
            <Button variant="dark" onClick={handleShowTop} style={{ fontSize: '1.0rem',fontWeight: 'bolder' ,marginLeft: '5px' , marginRight: '5px'   }}>
                 <i class="bi bi-question-lg" style={{fontSize: '20px'}}></i>
              </Button>
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
                          src= {require('../images/RSA_VisualVertical.png')}
                          height="auto" width="107%"        
                        />   
                  </div>
                 </Offcanvas.Body>
              </Offcanvas>



              <Offcanvas show={showTop} onHide={handleCloseTop}  placement="top"  style={{  backgroundColor: 'rgb(0, 0, 0)' ,color: 'white' ,height: '50%'}}>
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
                            src= {require('../images/RSA_Visual1.png')}
                            height="auto" width="100%"        
                          />   
                    </div>
                  </Col>
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