import React, { useState, useEffect } from 'react';
import styles from './CardCarousel.module.css';
import NavBar from './NavBar'
import RandomMessage from './RandomMessage.jsx'
import {Button,Form,Modal} from 'react-bootstrap'
import { findAllInRenderedTree } from 'react-dom/test-utils';

const CardCarousel = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [rsaValues, setRsaValues] = useState([]);
  const [userInputs, setUserInputs] = useState({});
  const [hints, setHints] = useState({});
  const [errors, setErrors] = useState({});
  const [showModalE, setShowModalE] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(''); // State to store the selected message
  const [isMessageSet, setIsMessageSet] = useState(false);

  const updateSelectedMessage = (newMessage) => {
    console.log("isMessageSet "+ isMessageSet    );
    if (!isMessageSet) { // Only update if the message hasn't been set
      setSelectedMessage(newMessage);
      setIsMessageSet(true); // Mark the message as set
    }
  };

  useEffect(() => {
    generateNewTest();
  }, []);

  const generateNewTest = () => {
    const newValues = Array(6)
      .fill(null)
      .map(() => generateRSAQuestions());
    setRsaValues(newValues);
    setUserInputs({});
    setHints({});
    setErrors({});
  };

  const generateRSAQuestions = () => {
    let p = getPrime();
    let q = getPrime();
    if((p==2 && q==3) || (p==3 && q==2))
      { 
        p = getPrime();
        console.log(p);
 
      }
    const n = p * q;
    const phiN = (p - 1) * (q - 1);
    const e = findValidE(phiN);
    const d = findModInverse(e, phiN);
    const message = Math.floor(Math.random() * 20) + 1;
    const encryptedMessage = modExp(message, e, n);

    return {
      p,
      q,
      n,
      phiN,
      e,
      d,
      message,
      encryptedMessage,
    };
  };

  const getPrime = () => {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19];
    return primes[Math.floor(Math.random() * primes.length)];
  };

  
  //const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  const gcd = (a, b) => {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  const findValidE = (phiN) => {
    for (let i = 2; i < phiN; i++) {
      if (gcd(i, phiN) === 1) return i;
    }
    return 2;
  };

  const findModInverse = (a, m) => {
    const m0 = m;
    let x0 = 0;
    let x1 = 1;
    while (a > 1) {
      const q = Math.floor(a / m);
      [a, m] = [m, a % m];
      [x0, x1] = [x1 - q * x0, x0];
    }
    return x1 < 0 ? x1 + m0 : x1;
  };

  const modExp = (base, exp, mod) => {
    let result = 1;
    base %= mod;
    while (exp > 0) {
      if (exp % 2 === 1) result = (result * base) % mod;
      exp = Math.floor(exp / 2);
      base = (base * base) % mod;
    }
    return result;
  };

  const handleInputChange = (key, value) => {
    setUserInputs((prev) => ({ ...prev, [key]: value }));
  };

  const refreshPage = () => {
    window.location.reload();
  };

  

  const handleCorrectSix = () => {
    const { encryptedMessage } = rsaValues[currentCard] || {};
    const errorsix = {};
    const validatedsix = {};
    console.log(encryptedMessage);
    console.log(selectedMessage);

      if (currentCard === 5) {
      if (encryptedMessage === selectedMessage) {
        alert("Correct Answer");
        validatedsix = true;
      } 
      else{ errorsix = 'Λάθος απάντηση';} 
    }
    
    
  };


  const handleWrongSix = () => {
    const {  encryptedMessage } = rsaValues[currentCard] || {};
    const errors = {};
    const validated = {};
    console.log(encryptedMessage);
    console.log(selectedMessage);

      if (currentCard === 5) {
      if (encryptedMessage !== selectedMessage) {
        alert("Correct Answer");
        validated.six = true;
      }
      else{ errors.six = 'Λάθος απάντηση';} 
    }
 
  };



  
  const toggleHint = (key) => {
    setHints((prev) => ({ ...prev, [key]: !prev[key] }));
  };


  function modInverse(e, phiN) {
    let [t, newT] = [0, 1];
    let [r, newR] = [phiN, e];
  
    while (newR !== 0) {
      let quotient = Math.floor(r / newR);
      [t, newT] = [newT, t - quotient * newT];
      [r, newR] = [newR, r - quotient * newR];
    }
  
    if (r > 1) {
     // throw new Error(`${e} has no modular inverse mod ${phiN}`);
     return -1;
    }
  
    if (t < 0) {
      t = t + phiN;
    }
  
    return t;
  }

  const renderCardContent = () => {
    const { p, q, n, phiN, e, d, message, encryptedMessage } = rsaValues[currentCard] || {};

    const isValidated = userInputs.validated?.[currentCard];
    const valid0=userInputs.validated?.[0];
    const valid1=userInputs.validated?.[1];
    const valid2=userInputs.validated?.[2];
    const valid3=userInputs.validated?.[3];
    const valid4=userInputs.validated?.[4];
    const valid5=userInputs.validated?.[5];


    if (valid0== true && valid0==true && valid2==true  && valid3==true  && valid4==true  && valid5==true )
    {console.log("Validation: "+valid0+valid1+valid2);
      setTimeout(() => {
        setShowModalE(true);
      }, 1000);
    }

    console.log(rsaValues[currentCard] );
    console.log(userInputs.d);
 

    if (currentCard === 0) {
      return (
        <>
          <p style={{ fontSize: '16px', fontWeight:'bold'}}>
              1. Υπολογισμός δημοσίου κλειδιού
          </p>
          
          <p>Δίνονται δύο πρώτοι αριθμοί:</p>
          <p>P = {p}, Q = {q}</p>
          <p>Υπολόγισε το δημόσιο κλειδί E:</p>
   
          <input
            type="number"
            className={isValidated ? styles.validInput : styles.Input}
            placeholder="E (δημόσιο κλειδί)"
            value={userInputs.e || ''}
            onChange={(e) => handleInputChange('e', e.target.value)}
            style={{
              fontSize: '0.8rem', width: '50%'
             }}
          />
      
          <button
            className={styles.hintButton}
            onClick={() => toggleHint('keys')}
            disabled={isValidated}
          >
            {hints.keys ? <i class="bi bi-lightbulb-off"></i> : <i class="bi bi-lightbulb"></i>}
          </button>

          {hints.keys && (
            <p className={styles.hint}> E = {e}</p>
          )}

           {errors.keys && <p className={styles.error}>{errors.keys}</p>}
        </>
      );
    }

  
    if (currentCard === 5) {
      return (
        <>
           <p style={{ fontSize: '16px', fontWeight:'bold'}}>
            6. Έλεγχος κρυπτογράφισης
          </p>
          <p>Δίνονται τα ακόλουθα στοιχεία του αλγορίθμου:</p>
          <p>P = {p}, Q = {q}, E = {e} , μήνυμα = {message}</p>
           <p>Coorect one is {encryptedMessage}</p>
          {false &&(
             <RandomMessage 
            encryptedMessage={encryptedMessage} 
            updateSelectedMessage={updateSelectedMessage}
            isMessageSet={isMessageSet}  // Pass the flag to RandomMessage
      />)}
           <p>Το κρυπτογραφημένο μήνυμα είναι το {selectedMessage}</p>
          
          <input
            type="number"
            placeholder="E (δημόσιο κλειδί)"
            className={isValidated ? styles.validInput : styles.Input}
            value={userInputs.e || ''}
            onChange={(e) => handleInputChange('e', e.target.value)}
            disabled={isValidated}
            style={{
              fontSize: '0.8rem', width: '70%'
             }}
             
          />
          {errors.six && <p className={styles.error}>{errors.six}</p>}
          
        </>
      );
    }

  };
  
  

  return (
    <div className={styles['CarouselMain']}>
    <NavBar/>
    <div className={styles['test-container']}>
     
      <div className={styles.card}>{renderCardContent()}</div>
      <div className={styles['button-container']}>
     
        <Button onClick={handleCorrectSix} disabled={currentCard === 0}
               >
                 <i class="bi bi-check-lg"></i>
        </Button>
        <Button onClick={handleWrongSix} disabled={currentCard === 0}
               >
                 <i class="bi bi-x-lg"></i>
        </Button>
      


        {showModalE} {/* Blue and Black Confetti */}
              <Modal
                show={showModalE}
                centered
              >
              <Modal.Header className="modal-header-dark">
                  <Modal.Title>Συγχαρητήρια</Modal.Title>                
                </Modal.Header>
                <Modal.Body className="modal-body-dark">
                 Ολοκλήρωσες επιτυχώς το test!
                </Modal.Body>
                <Modal.Footer className="modal-footer-dark">
                  <Button
                    className="modal-close-button"
                    onClick={refreshPage}
                  >
                   Δοκίμασε ξανά
                  </Button>
                </Modal.Footer>
              </Modal>
      </div>
    </div>
    </div>
  );
};

export default CardCarousel;
