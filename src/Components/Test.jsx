

import React, { useState } from 'react';
import useIsMobile from './TestuseIsMobile'; // Import the custom hook
import './Test.css';


{/*}
import React, { useState } from 'react';

const Test = () => {
  // Boy's state
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [z, setZ] = useState('');
  const [isZCorrect, setIsZCorrect] = useState(false);

  // Girl's state
  const [p, setP] = useState('');
  const [f, setF] = useState('');
  const [isFCorrect, setIsFCorrect] = useState(false);

  // Handle input changes for the boy's inputs
  const handleInputChange = (e, setter) => {
    const value = e.target.value;
    setter(value);
    setIsZCorrect(false); // Reset validation on input change
  };

  // Handle the boy sending z to the girl
  const handleSendZ = () => {
    setIsZCorrect(Number(z) === Number(x) + Number(y));
  };

  // Handle input change for girl's inputs and reset validation
  const handleGirlInputChange = (e, setter) => {
    const value = e.target.value;
    setter(value);
    setIsFCorrect(false);
  };

  // Handle the girl sending p back to the boy if f is correct
  const handleSendP = () => {
    setIsFCorrect(Number(f) === Number(z) + Number(p));
  };

  return (
    <div style={styles.pageContainer}>
      {/* Boy's card with inputs and z calculation 
      <div style={styles.card}>
        <div style={styles.iconContainer}>👦</div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>x</label>
          <input
            type="number"
            value={x}
            onChange={(e) => handleInputChange(e, setX)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>y</label>
          <input
            type="number"
            value={y}
            onChange={(e) => handleInputChange(e, setY)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>z (x + y)</label>
          <input
            type="number"
            value={z}
            onChange={(e) => handleInputChange(e, setZ)}
            style={styles.input}
          />
        </div>
        <button onClick={handleSendZ} style={styles.button}>
          Send z
        </button>
      </div>

      {/* Arrows column with two arrows, showing values 
      <div style={styles.arrowsColumn}>
        {/* Arrow showing z sent from boy to girl 
        {isZCorrect && (
          <div style={styles.arrowContainer}>
            <div style={styles.arrowRight}>
              ➡️ <span style={styles.valueLabel}>z = {z}</span>
            </div>
          </div>
        )}
        {/* Arrow showing p sent from girl back to boy 
        {isFCorrect && (
          <div style={styles.arrowContainer}>
            <div style={styles.arrowLeft}>
              ⬅️ <span style={styles.valueLabel}>p = {p}</span>
            </div>
          </div>
        )}
      </div>

      {/* Girl's card with inputs and f calculation 
      <div style={styles.card}>
        <div style={styles.iconContainer}>👧</div>
        <div style={styles.receivedMessage}>
          {isZCorrect ? `Received z = ${z}` : "Waiting for z..."}
        </div>
        {isZCorrect && (
          <>
            <div style={styles.inputGroup}>
              <label style={styles.label}>p</label>
              <input
                type="number"
                value={p}
                onChange={(e) => handleGirlInputChange(e, setP)}
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>f (z + p)</label>
              <input
                type="number"
                value={f}
                onChange={(e) => handleGirlInputChange(e, setF)}
                style={styles.input}
              />
            </div>
            <button onClick={handleSendP} style={styles.button}>
              Send p
            </button>
          </>
        )}
      </div>
    </div>
  );
};

// CSS styles for the updated layout
const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f4f8'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    width: '200px',
    textAlign: 'center'
  },
  iconContainer: {
    fontSize: '60px',
    marginBottom: '10px'
  },
  inputGroup: {
    margin: '10px 0',
    width: '100%'
  },
  label: {
    fontSize: '12px',
    color: '#777',
    position: 'relative',
    top: '-10px',
    backgroundColor: '#fff',
    padding: '0 4px'
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '16px',
    textAlign: 'center'
  },
  button: {
    marginTop: '15px',
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  },
  arrowsColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowContainer: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '50px',
    marginTop: '20px'
  },
  arrowRight: {
    color: '#4CAF50',
    display: 'flex',
    alignItems: 'center'
  },
  arrowLeft: {
    color: '#FF5722',
    display: 'flex',
    alignItems: 'center'
  },
  valueLabel: {
    marginLeft: '10px',
    fontSize: '20px',
    color: '#333'
  },
  receivedMessage: {
    marginTop: '20px',
    fontSize: '14px',
    color: '#4CAF50'
  }
};

export default Test;


*/}





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
             <strong><span  style={{ border:' 0px',padding:'2px 5px',borderRadius: '8px',backgroundColor: 'rgb(4,145,141)'}}>Δημόσιο κλειδι (E,n):</span> </strong> <br />
            Ε δεν πρέπει να έχει κοινούς παράγοντες με το Φ(n), εκτός από το 1 <br /> 
              Ε δεν πρέπει να είναι πολλαπλάσιο των παραγόντων του Φ(n).
          </li>
          <li>

         <strong><span  style={{ border:' 0px',padding:'2px 5px',borderRadius: '8px',backgroundColor: 'rgb(138,4,17)'}}>Ιδιωτικό κλειδι (D,n):</span> </strong> <br />        
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

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown menu on mobile
  };

  return (
    <div className="clarifications-container">
      {isMobile && (
        <button onClick={toggleDropdown} className="dropdown-toggle">
          <i class="bi bi-list"></i>
        </button>
      )}
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
