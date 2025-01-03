

import React, { useState } from 'react';
import useIsMobile from './TestuseIsMobile'; // Import the custom hook
import './Test.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import NavigateButton from './NavigateButton.jsx';
import {Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import DropDown from './DropDown';





const Test = () => {
  const isMobile = useIsMobile(); // Check if the screen is mobile-sized
  const [expandedSection, setExpandedSection] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to toggle dropdown

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
    },

    { 
      id: 2, 
      title: "Απεικόνιση Αλγορίθμου", 
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


  const refreshPage = () => {
    window.location.reload();
  };




  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown menu on mobile
  };

  const navigate = useNavigate(); // Initialize navigate function

  const HomeRedirection = () => {
    navigate('/'); // Navigate to the '/' route when button is clicked
  };


  return (
    <div className="clarifications-container">
    {/*  {isMobile && (
     <Navbar  className="Nav" >
 
       
        <button onClick={toggleDropdown} className="dropdown-toggle">
          
        </button>

        
        
        <div className="right-buttons">
     
       
          <Button variant="dark"        
            onClick={HomeRedirection} // Trigger navigation on click
              >
            Αρχική
          </Button>
          <Button variant="dark" onClick={refreshPage}>
          <i class="bi bi-arrow-clockwise"></i>
        </Button>

      </div>

    </Navbar>
      )}
    */}
      <br/>
      <div className={`clarifications ${isMobile && !isDropdownOpen ? 'hidden' : ''}`}>
        {clarifications.map((clarification) => (
          <div
            key={clarification.id}
            className={`clarification-square ${expandedSection === clarification.id ? 'expanded' : ''}`}
            onClick={() => isMobile && toggleSection(clarification.id)}
          >
            <h3>{clarification.title}</h3>
            <p className={expandedSection === clarification.id || !isMobile ? 'show' : 'hide'}>
              {clarification.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
