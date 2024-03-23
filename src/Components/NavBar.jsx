import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



import {
  Link
} from "react-router-dom";



function ColorSchemesExample() {
  return (
    
    <>
      {/*<Navbar bg="dark" variant="dark">*/}
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
            <Nav.Link as={Link} to="/Algorithm">Main Algorithm</Nav.Link>
            <Nav.Link as={Link} to="/Educational">Educational Algorithm</Nav.Link>
       
            </Nav>
         
            <Nav>
              <NavDropdown title="Menu" >
              <NavDropdown.Item  id="drop" as={Link} to="/Why">Why RSA</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  id="drop" as={Link} to="/Where"> Where </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item id="drop" as={Link} to="/Security">Security</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item id="drop" as={Link} to="/RSAHistory">RSA History</NavDropdown.Item>
              </NavDropdown>
             </Nav>
             
        </Container>
      </Navbar>   
       

  

  </>

  );
}

export default ColorSchemesExample;