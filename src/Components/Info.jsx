import React, { useState } from 'react';
import "./Info.css";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import NavBar from './NavBar.jsx'
import { useTranslation } from 'react-i18next';
import RSA_Visual1 from '../images/RSA_Visual1.png';
import ceidlogo from '../images/ceidlogo.PNG';
import AlgorithmEL from '../images/AlgorithmEL.PNG';
import AlgorithmEN from '../images/AlgorithmEN.PNG';

const HomeGrid = () => {
   const navigate = useNavigate(); 
const [isCard2Visible, setIsCard2Visible] = useState(false);
const [isCard3Visible, setIsCard3Visible] = useState(false);
const { t,i18n  } = useTranslation();

const imageSrc1 = i18n.language === 'en' ? RSA_Visual1 : ceidlogo;
const imageSrc = i18n.language === 'en' ? AlgorithmEN : AlgorithmEL;

  // Show Card 2
  const showCard2 = () => {
    setIsCard2Visible(true);
  };

  const hideCard2 = () => {
    setIsCard2Visible(false);
  };

  const showCard3 = () => {
    setIsCard3Visible(true);
  };

  const hideCard3 = () => {
    setIsCard3Visible(false);
  };
  const HomeRedirection = () => {
    navigate('/'); // Navigate to the '/' route when button is clicked
  };

  return (
<div>

<NavBar/>


{/*
    <div className="right-buttons">
    <Button variant="dark"        
           onClick={HomeRedirection} // Trigger navigation on click
             >
           Αρχική
         </Button>  
   </div>
*/}

    <div className="grid-container">

    {/* <NavigateButton
     className="custom-navigate-button"
     
        to="/PlayMain"
        label="Start the Game"
      />
      */}
 
       <div className="card full-width">
      <div className="card-content">
       <h2 className="card-title">{t('InfoCard1Title')}</h2>
        <p className="card-description">
        {t('InfoCard1Description')}
       </p>  
      </div>
    </div>
    <div className="card full-width">
        
        <div  className="image-container">
        <img
            alt=""
            src= {imageSrc}
            height="auto" width="100%"        
        />   
   
       
      </div>
    </div>
    
    <div className="card full-width">
      <div className="card-content">
      <h2 className="card-title">{t('InfoCard2Title')}</h2>
      {/*
      <p className="card-description">
      Για να μπορέσει η Alice να στείλει ένα κρυπτογραφημένο μήνυμα στον Bob, ο Bob πρέπει πρώτα να δημιουργήσει το δημόσιο κλειδί του και να το κοινοποιήσει στην Alice.
        </p>
        */}
        <p className="card-description">
        {t('InfoCard2Description')}
        </p>
      </div>
    </div>
    <div className="card">
      <div className="card-content">
      <h2 className="card-title">{t('InfoCard3Title')}</h2>
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
        <button className="custombutton" onClick={showCard2}
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
            > {t('InfoCard3Button')}</button>
      </div>
    </div>

  {isCard2Visible && (
    <div className="card">
      <div className="card-content">
      <h2 className="card-title">{t('InfoCard4Title')}</h2>
      
        <div className="my-close-btn" onClick={hideCard2}>
            X
          </div>  

        <ol>
            
            <li>
            <strong><span  
                style={{ border:' 0px',
                        padding:'2px 5px',
                        width:'55%',
                        borderRadius: '5px',
                        backgroundColor: 'rgb(255, 255, 255)',
                        color:'black'}}>
             {t('AlgorithmEx1')}
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
              {t('AlgorithmEx2')}
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
                 {t('AlgorithmEx3')}
                </span></strong>
            </li>
            
    
            <li>
            <strong><span  
                style={{ 
                    border:' 0px',
                    padding:'2px 5px',
                    boxShadow : '0 0 8px rgba(255, 255, 255, 0.8)',
                    borderRadius: '8px',
                    backgroundColor: 'rgb(138,4,17)'}}>
                         {t('AlgorithmEx4')}
                </span> </strong> <br />
                <p dangerouslySetInnerHTML={{ __html: t('AlgorithmEx4a') }} />
                
            </li>
            <li>

        <strong><span  style={{
            border:' 0px',
            padding:'2px 5px',
            borderRadius: '8px', 
            boxShadow : '0 0 8px rgba(255, 255, 255, 0.8)',
            backgroundColor: 'rgb(138,4,17)'}}>
                 {t('AlgorithmEx5')}
                </span> </strong> <br />        
                {t('AlgorithmEx5a')}
            </li>                     
        </ol>
    </div>
    </div>
 )}
    <div className="card full-width">
      <div className="card-content">
       <h2 className="card-title">{t('InfoCard5Title')}</h2>
        
        {/* <p className="card-description">
         Η Alice λαμβάνει το δημόσιο κλειδί του Bob, το χρησιμοποιεί για να κρυπτογραφήσει το μήνυμά της 
         και το αποστέλλει σε αυτόν. Ο Bob στη συνέχεια χρησιμοποιεί το ιδιωτικό του κλειδί για να 
         αποκρυπτογραφήσει το μήνυμα και να το διαβάσει.
          </p>
          */}
          <p className="card-description">
               <p dangerouslySetInnerHTML={{ __html: t('InfoCard5Description') }} />
          </p>
       </div>
    </div>
   

    <div className="card">
      <div className="card-content">
      <h2 className="card-title">{t('InfoCard6Title')}</h2>
          <p className="card-description">
          <p dangerouslySetInnerHTML={{ __html: t('InfoCard6Description') }} />
              
           </p>
        <button className="custombutton"   onClick={showCard3} 
         onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#c22748'; // Change to border color on hover
            e.target.style.color = '#fff'; // Make text white on hover
            e.target.style.boxShadow = '0 8px 12px rgba(194, 39, 72, 0.5)'; // Highlight shadow
            }}
            onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgb(8, 4, 4)'; // Reset to original background
            e.target.style.color = '#c22748'; // Reset text color
            e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)'; // Reset shadow
            }}>
                 {t('InfoCard6Button')}</button>
      </div>
    </div>
    {isCard3Visible && (
    <div className="card">
      <div className="card-content">
      <h2 className="card-title">{t('InfoCard7Title')}</h2>
          <div className="my-close-btn" onClick={hideCard3}>
            X
          </div>     
          
          <p className="card-description">
          <p dangerouslySetInnerHTML={{ __html: t('InfoCard7Description') }} />
                </p>
       </div>
    </div>
    )}
    
  </div>
  </div>
);
};
  
export default HomeGrid;
