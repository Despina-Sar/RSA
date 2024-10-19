import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




import {
  Link
} from "react-router-dom";



function ColorSchemesExample() {
  return (
    <>
      <Navbar className = "navbar">
        <Container>
     
        <Navbar.Brand as={Link} to="/" id="nav-menu">       
         <img
              alt=""
              src= {require('../images/favicon.png')}
              width="25"
              height="25"
              className="d-inline-block align-top"
            />{' '}
            Home
           </Navbar.Brand>    
            <Nav id = "menu">
            <Nav.Link as={Link} to="/Demo">Demo</Nav.Link>
            <Nav.Link as={Link} to="/Training">Training</Nav.Link>
          {/* <Nav.Link as={Link} to="/Educational">EducationalTest</Nav.Link>  */}
           <Nav.Link as={Link} to="/Real">Real Card</Nav.Link>
         {/*  <Nav.Link as={Link} to="/Algorithm">AlgorithmTest</Nav.Link>  */}
                  
            </Nav>            
        </Container>
      </Navbar>   
        </>

  );
}

export default ColorSchemesExample;