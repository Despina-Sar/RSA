import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from "react";
import {Tab, Row, Col,Dropdown  } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './NavMenu.css';


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
                 Ε δεν πρέπει να έχει κοινούς παράγοντες με το Φ(n), εκτός από το 1 <br /> 
            Ε δεν πρέπει να είναι πολλαπλάσιο των παραγόντων του Φ(n).
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
  },
  { 
    id: 2, 
    title: "Διαδικασία Κρυπτογράφησης", 
    content: 
     <ul>
        <li>Η Alice θέλει να στείλει ένα ασφαλές μήνυμα στον Bob</li>
        <li>O Bob μοιράζεται με την Alice το δημόσιο κλειδί του.</li>
        <li>Η Alice κρυπτογραφεί το μήνυμα με το δημόσιο κλειδί του Bob</li>
        <li>Ο Bob αποκρυπτογραφεί το μήνυμα με το ιδιωτικό κλειδί του.</li>               
   </ul>  
  },
  { 
    id: 3, 
    title: "Visual", 
    content: 
    <div  className="image-container">
    <img
      alt=""
      src= {require('../images/RSA_Visual1.png')}
      height="auto" width="99%"        
    />   
 </div>
  }
];


function NavMenu() {
  const [activeTab, setActiveTab] = useState(null); // No active tab by default
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown starts closed

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Toggle dropdown open/close
    if (dropdownOpen) {
      setActiveTab(null); // Hide card when closing dropdown
    }
  };

  const handleSelect = (id) => {
    setActiveTab(id); // Set active tab
    setDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <Container fluid className="clarifications-navbar">
      {/* Top Navbar */}
      <Navbar bg="dark" variant="dark" className="mb-3">
        <Navbar.Brand href="#">Clarifications</Navbar.Brand>
        <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Options
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {clarifications.map((item) => (
              <Dropdown.Item
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className="dropdown-item-dark"
              >
                {item.title}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>

      {/* Content */}
      <Row>
        <Col>
          {clarifications.map(
            (item) =>
              activeTab === item.id && (
                <div key={item.id} className="clarification-content">
                  <h4>{item.title}</h4>
                  <div>{item.content}</div>
                </div>
              )
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default NavMenu;