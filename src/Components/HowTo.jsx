
import React, { useState } from 'react';
import { RSAProvider } from './RSAContext.jsx';
import Educational from './Educational';
import {Form,Button, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './HowTo.css';


function HowTo(){

const [isCard2Visible, setIsCard2Visible] = useState(false);
const [isCard3Visible, setIsCard3Visible] = useState(false);
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

  

return (
 <div className='howto-container '>
<Row>
   <Card className="howto-info">
    <Card.Title style={{ fontWeight: 'bold' ,fontSize: '0.8rem' ,color: 'rgb(243, 219, 219)'}}>
       Πληροφορίες για τον RSA
     </Card.Title>                    
    <>              
      <div>Algorithmos kruptografhshs me xrhsh dhmosiou kleidiou - RSA apo Ronald Rivest, Adi Shamir, και Leonard Adleman [1978]
        asymmetric encryption algorithm - Asymmetric encryption  ανταλλαγή κλειδιού
        Ο αλγόριθμος Diffie-Hellman [1976] χρησιμοποιείται για ανταλλαγή κλειδιού σε έναν κύκλο επικοινωνίας
 </div> 
       
    </>
   </Card>
 </Row>

 <Row>
   <Card className="howto-steps"style={{ borderColor: '#c22748' }} >
    <Card.Title style={{ fontWeight: 'bold' ,fontSize: '0.8rem' ,color: 'rgb(243, 219, 219)' }}>
    Εφαρμογή RSA: Στάδιο Ι
     </Card.Title>                    
    <>              
    <div>
    Για να μπορέσει η Alice να στείλει ένα κρυπτογραφημένο μήνυμα στον Bob, πρέπει πρώτα να δημιουργήσει το δημόσιο κλειδί του και να το στείλει στην Alice.
   </div>  
       
    </>
   </Card>
 </Row>

 <Row >
    <Col style={{ alignContent: 'left!important' }}>
    <Card className="howto-how">
        <Card.Title style={{ fontWeight: 'bold' ,fontSize: '0.8rem' ,color: 'rgb(243, 219, 219)' }}>
        Βήματα 
        </Card.Title>                    
        <>              
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
        </>
        <Button    
            onClick={showCard2}                   
            style={{
            fontSize: '0.9rem', // Slightly larger font for better readability
            padding: '0.2rem 0.2rem', // Adjusted padding for a balanced look
            fontWeight: 'bold',
            borderColor: '#c22748', // Custom border color
            borderWidth: '2px', // Custom border thickness
            color: '#c22748', // Ensure text color matches or complements the border
            backgroundColor: 'rgb(8, 4, 4)', // Dark background
            borderRadius: '5px', // Rounded corners for a modern look
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
            transition: 'all 0.3s ease-in-out', // Smooth animation for hover effects
            width: '25%'
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
            Παράδειγμα
        </Button>
    </Card>
   </Col>

   <Col>
   {isCard2Visible && (
    <Card  className="howto-how" >
        <Card.Title style={{ fontWeight: 'bold' ,fontSize: '0.8rem' ,color: 'rgb(243, 219, 219)' }}>
        Παράδειγμα 
        </Card.Title>                    
        <>      
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
                     backgroundColor: 'rgb(243, 219, 219)',
                     color:'black'}}>
            Επιλέγουμε p = 3 και q = 11
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
            n= 3 x 11 = 33
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
            Φ(n): (3 - 1) x (11 - 1) = 20
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
                    Δημόσιο κλειδι (7,33):
              </span> </strong> <br />
                Επιλέγουμε Ε = 7 γιατί <br /> Δεν έχει κοινούς παράγοντες με το 20 <br />  Δεν είναι πολλατγχδεφγτ42<br /> 
               
        </li>
        <li>

       <strong><span  style={{
         border:' 0px',
         padding:'2px 5px',
         borderRadius: '8px', 
         boxShadow : '0 0 8px rgba(255, 255, 255, 0.8)',
         backgroundColor: 'rgb(138,4,17)'}}>
             Ιδιωτικό κλειδι (3,33):
             </span> </strong> <br />        
         Επιλέγουμε D = 3 καθώς ικανοποιεί τη σχέση (3 x 7) mod 20 = 1    
        </li>                     
    </ol>         
        
        </>
    </Card>
    )}
   </Col>
 </Row>

 <Row>
   <Card className="howto-steps" style={{ borderColor: '#06c3c9' }} >
    <Card.Title style={{ fontWeight: 'bold' ,fontSize: '0.8rem' ,color: 'rgb(243, 219, 219)' }}>
    Εφαρμογή RSA: Στάδιο ΙΙ
     </Card.Title>                    
    <>              
       <div>
        Η Alice λαμβάνει το δημόσιο κλειδί του, κρυπτογραφεί το μήνυμα της και το στέλνει στον Bob.
       O Bob χρησιμοποιεί το ιδιωτικό κλειδί του και αποκρυπτογραφεί το μήνυμα.
       </div>
       
    </>
   </Card>
 </Row>

 <Row>
   <Card className="howto-cardvisual">
                     
     <div  className="image-container">
      <img
        alt=""
        src= {require('../images/RSA_Visual1.png')}
        height="auto" width="100%"        
      />   
   </div>
   </Card>
 </Row>

 <Row>
    <Col>
    <Card  className="howto-decr">
        <Card.Title style={{ fontWeight: 'bold' ,fontSize: '0.8rem' ,color: 'rgb(243, 219, 219)' }}>
        RSA κρυπτογραφηση & αποκρυπτογράφιση
        </Card.Title>                    
        <>              
           <div>
                Κρυπτογραφημένο μήνυμα: CT = M<sup>E</sup> mod n
                <br/> 
                Αποκρυπτογραφημένο μήνυμα: M = CT<sup>D</sup>mod n
                <br/>
           </div>
           </>
            <Button    
            onClick={showCard3}                   
            style={{
            fontSize: '0.9rem', // Slightly larger font for better readability
            padding: '0.2rem 0.2rem', // Adjusted padding for a balanced look
            fontWeight: 'bold',
            borderColor: '#c22748', // Custom border color
            borderWidth: '2px', // Custom border thickness
            color: '#c22748', // Ensure text color matches or complements the border
            backgroundColor: 'rgb(8, 4, 4)', // Dark background
            borderRadius: '5px', // Rounded corners for a modern look
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
            transition: 'all 0.3s ease-in-out', // Smooth animation for hover effects
            width: '25%'
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
            Παράδειγμα
        </Button>
        
       
    </Card>
   </Col>

   <Col>
   {isCard3Visible && (
    <Card className="howto-decr">
        <Card.Title style={{ fontWeight: 'bold' ,fontSize: '0.8rem' ,color: 'rgb(243, 219, 219)' }}>
        Παραδειγμα 
        </Card.Title>                    
        <>              
           
        <div className="my-close-btn" onClick={hideCard3}>
            X
          </div>       
          <div>
                Κρυπτογραφημένο μήνυμα του 2 : CT = 2<sup>7</sup>mod 33 = 29
                <br/> 
                Αποκρυπτογραφημένο μήνυμα: M = 29<sup>3</sup> mod 33 = 2
                <br/>
           </div>
        
        </>
    </Card>
     )}
   </Col>
 </Row>


  </div>
);

}
export default HowTo;
