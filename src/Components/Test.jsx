

import React, { useState } from 'react';
import useIsMobile from './TestuseIsMobile'; // Import the custom hook
import './Test.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom






const Test = () => {
  const isMobile = useIsMobile(); // Check if the screen is mobile-sized
  const [expandedSection, setExpandedSection] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to toggle dropdown
  const { t } = useTranslation();
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
                     {t('AlgorithmStep1')}
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
                       {t('AlgorithmStep2')}
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
                        {t('AlgorithmStep3')}
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




  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown menu on mobile
  };

  const navigate = useNavigate(); // Initialize navigate function


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
