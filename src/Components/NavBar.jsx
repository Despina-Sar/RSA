import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState,useContext  } from 'react';
import Button from 'react-bootstrap/Button';

import {
  Link
} from "react-router-dom";



function ColorSchemesExample() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar className = "navbar">
        <Container>
     
        <Navbar.Brand as={Link} to="/" id="nav-menu">       
         <img
              alt=""
              src= {require('../images/favicon.png')}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Home
           </Navbar.Brand>    
            <Nav id = "menu">
            <Nav.Link as={Link} to="/Demo">Demo</Nav.Link>
            <Nav.Link as={Link} to="/Training">Training</Nav.Link>
             <Nav.Link as={Link} to="/EducationalMain">EducationalTest</Nav.Link>
           <Nav.Link as={Link} to="/Real">Real Example</Nav.Link>
           <Nav.Link as={Link} to="/Test">Test</Nav.Link>
           <Navbar.Brand as={Link} to="/" id="nav-menu">    
           
            </Navbar.Brand>  
            <Button variant="outline-info" onClick={handleShow} style={{ fontSize: '0.8rem', padding: '0.2rem', marginLeft: '30px'  }}>
               <i class="bi bi-question-lg" style={{fontSize: '20px', color:'rgb(68, 199, 235)'}}></i>
            </Button>

             <Offcanvas show={show} onHide={handleClose} style={{  backgroundColor: 'rgb(33, 37, 41)' ,color: 'white' }}>
                <Offcanvas.Header closeButton style={{  backgroundColor: 'rgb(33, 37, 41)' ,color: 'white' }}>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div  className="image-container">
                        <img
                          alt=""
                          src= {require('../images/RSA_Visual.png')}
                          height="auto" width="107%"        
                        />   
                  </div>
                 </Offcanvas.Body>
              </Offcanvas>
                        
            </Nav>            
        </Container>
      </Navbar>   
        </>

  );
}

export default ColorSchemesExample;