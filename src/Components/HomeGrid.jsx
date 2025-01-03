import React, { useState } from 'react';
import "./HomeGrid.css";
import NavigateButton from './NavigateButton.jsx'; 
import {Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import NavBar from './NavBar'


const HomeGrid = () => {
   const navigate = useNavigate(); 
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
       <h2 className="card-title">RSA</h2>
        <p className="card-description">
        Ο RSA είναι ένας αλγόριθμος ασύμμετρης κρυπτογράφησης που χρησιμοποιείται ευρέως για την προστασία της ασφάλειας δεδομένων και την εξασφάλιση 
        εμπιστευτικότητας στις επικοινωνίες. Το όνομά του προέρχεται από τους δημιουργούς του, Ron Rivest, Adi Shamir and Leonard Adleman, και παρουσιάστηκε
        για πρώτη φορά το 1977. Ο αλγόριθμος βασίζεται στις μαθηματικές ιδιότητες των πρώτων αριθμών και στη δυσκολία παραγοντοποίησης μεγάλων σύνθετων αριθμών, 
        καθιστώντας εξαιρετικά δύσκολη την παραβίαση του. Μέσω του συστήματος δημόσιου και ιδιωτικού κλειδιού, ο RSA χρησιμοποιείται όχι μόνο για την κρυπτογράφηση μηνυμάτων,
         αλλά και για την υλοποίηση ψηφιακών υπογραφών, παρέχοντας ταυτοποίηση και ακεραιότητα δεδομένων. 
        Αποτελεί ένα από τα θεμέλια της σύγχρονης κρυπτογραφίας και χρησιμοποιείται σε πλήθος εφαρμογών, όπως το HTTPS και η ασφαλής ανταλλαγή email.
       </p>  
      </div>
    </div>
    <div className="card full-width">
        <div className="card-content">
        <div  className="image-container">
        <img
            alt=""
            src= {require('../images/RSA_Visual1.png')}
            height="auto" width="100%"        
        />   
    </div>
       
      </div>
    </div>
    
    <div className="card full-width">
      <div className="card-content">
      <h2 className="card-title">Εφαρμογή RSA: Στάδιο Ι</h2>
      {/*
      <p className="card-description">
      Για να μπορέσει η Alice να στείλει ένα κρυπτογραφημένο μήνυμα στον Bob, ο Bob πρέπει πρώτα να δημιουργήσει το δημόσιο κλειδί του και να το κοινοποιήσει στην Alice.
        </p>
        */}
        <p className="card-description">
      Δημιουργία και κοινοποίηση δημοσίου κλειδιού παραλήπτη.
        </p>
      </div>
    </div>
    <div className="card">
      <div className="card-content">
      <h2 className="card-title">Βήματα</h2>
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
                    Ε δεν είναι πολλαπλάσιο των παραγόντων του Φ(n)
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
            >Παράδειγμα</button>
      </div>
    </div>

  {isCard2Visible && (
    <div className="card">
      <div className="card-content">
      <h2 className="card-title">Παράδειγμα</h2>
      
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
                    Επιλέγουμε Ε = 7 γιατί <br /> δεν έχει κοινούς παράγοντες με το 20 <br /> δεν είναι πολλαπλάσιου των 2 & 5<br /> 
                
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
    </div>
    </div>
 )}
    <div className="card full-width">
      <div className="card-content">
       <h2 className="card-title">Εφαρμογή RSA: Στάδιο ΙΙ</h2>
        
        {/* <p className="card-description">
         Η Alice λαμβάνει το δημόσιο κλειδί του Bob, το χρησιμοποιεί για να κρυπτογραφήσει το μήνυμά της 
         και το αποστέλλει σε αυτόν. Ο Bob στη συνέχεια χρησιμοποιεί το ιδιωτικό του κλειδί για να 
         αποκρυπτογραφήσει το μήνυμα και να το διαβάσει.
          </p>
          */}
          <p className="card-description">
           Κρυπτογράφηση και αποστολή μηνύματος από τον αποστολέα και αποκρυπτογράφηση από τον παραλήπτη.
          </p>
       </div>
    </div>
   

    <div className="card">
      <div className="card-content">
      <h2 className="card-title">RSA κρυπτογραφηση & αποκρυπτογράφιση</h2>
          <p className="card-description">
                Κρυπτογραφημένο μήνυμα: CT = M<sup>E</sup> mod n
                <br/> 
                Αποκρυπτογραφημένο μήνυμα: M = CT<sup>D</sup>mod n
                <br/>
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
                Παράδειγμα</button>
      </div>
    </div>
    {isCard3Visible && (
    <div className="card">
      <div className="card-content">
      <h2 className="card-title">Παράδειγμα</h2>
          <div className="my-close-btn" onClick={hideCard3}>
            X
          </div>     
          
          <p className="card-description">
                Κρυπτογραφηση του μηνύματος 2 : CT = 2<sup>7</sup>mod 33 = 29
                <br/> 
                Αποκρυπτογραφηση: M = 29<sup>3</sup> mod 33 = 2
                <br/>
                </p>
       </div>
    </div>
    )}
    
  </div>
  </div>
);
};
  
export default HomeGrid;
