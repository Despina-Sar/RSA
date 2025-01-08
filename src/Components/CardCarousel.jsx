import React, { useState, useEffect } from 'react';
import styles from './CardCarousel.module.css';
import NavBar from './NavBar'
import RandomMessage from './RandomMessage.jsx'
import {Button,Form,Modal} from 'react-bootstrap'
import { findAllInRenderedTree } from 'react-dom/test-utils';
import Pagination from 'react-bootstrap/Pagination';


const CardCarousel = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [rsaValues, setRsaValues] = useState([]);
  const [userInputs, setUserInputs] = useState({});
  const [hints, setHints] = useState({});
  const [errors, setErrors] = useState({});
  const [showModalE, setShowModalE] = useState(false);
  const [showModalF, setShowModalF] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(''); // State to store the selected message
  const [isMessageSet, setIsMessageSet] = useState(false);
  const [trueCount, setTrueCount] = useState(0);
  const [emptyCount, setEmptyCount] = useState(0);
 


  const handleClose = () => setShowModalE(false);
  const handleCloseF = () => setShowModalF(false);

  
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
    setErrors((prev) => ({
      ...prev,
      six: selectedMessage === encryptedMessage ? null : 'Λάθος απάντηση',
    }));
    setUserInputs((prev) => ({
      ...prev,
      validated: {
        ...prev.validated,
        [currentCard]: selectedMessage === encryptedMessage,
      }
    }));
    setUserInputs((prev) => ({ ...prev, ['six']: true }));
  };
  
  const handleWrongSix = () => {
    const { encryptedMessage } = rsaValues[currentCard] || {};
    setErrors((prev) => ({
      ...prev,
      six: selectedMessage !== encryptedMessage ? null : 'Λάθος απάντηση',
    }));
    setUserInputs((prev) => ({
      ...prev,
      validated: {
        ...prev.validated,
        [currentCard]: selectedMessage !== encryptedMessage,
      }
    }));
    setUserInputs((prev) => ({ ...prev, ['six']: false }));
  };
  



  const handleValidation = () => {
    const { p, q, n, phiN, e, d, message, encryptedMessage } = rsaValues[currentCard] || {};
    const errors = {};
    const validated = {};
  
      if (currentCard === 0) {
       let validatenumE= validateE(phiN,userInputs.e);
       if (validatenumE == false) {
         errors.keys = 'Λάθος δημόσιο κλειδί.';
               } else {
         validated.keys = true;
      }
     }

    if (currentCard === 1) {
      if (parseInt(userInputs.d, 10) !== d) {
        errors.privateKey = 'Λάθος ιδιωτικό κλειδί.';
      } else {
        validated.privateKey = true;
      }
    } else if (currentCard === 2) {
      if (parseInt(userInputs.encryptedMessage, 10) !== encryptedMessage) {
        errors.encryptedMessage = 'Λάθος κρυπτογραφημένο μήνυμα.';
        validated.encryptedMessage = false;
      } else {
        validated.encryptedMessage = true;
      }
    }
    else if (currentCard === 3) {
      if (parseInt(userInputs.message, 10) !== message) {
        errors.message = 'Λάθος μήνυμα.';
      } else {
        validated.message = true;
      }
    } 
    else if (currentCard === 4) {
      if (parseInt(userInputs.e1, 10) !== e) {
        errors.e1 = 'Λάθος δημόσιο κλειδί.';
      } else {
        validated.e1 = true;
      }
    } 
  
    setErrors(errors);
  
    if (Object.keys(errors).length === 0) {
      setUserInputs((prev) => ({
        ...prev,
        validated: {
          ...prev.validated,
          [currentCard]: true, // Mark the current card as validated
        },
      }));
    }
    else{
      setUserInputs((prev) => ({
        ...prev,
        validated: {
          ...prev.validated,
          [currentCard]: false, // Mark the current card as validated
        },
      }));
    }
  };


  const CountCorrectNotValidation = (notValidated) => {
        const invalid={};
  

    for (let i = 0; i < notValidated.length; i++) {
       const currentCard = notValidated[i];
       const { p, q, n, phiN, e, d, message, encryptedMessage } = rsaValues[currentCard] || {};
  
    switch (currentCard) {
      case 0:
        let validatenumE = validateE(phiN, userInputs.e);
        if (!validatenumE) {
          invalid.keys = false;
        }
        break;
      case 1:
          if (parseInt(userInputs.d, 10) !== d) {
          invalid.privateKey = false;
        }
        break;
      case 2:
          if (parseInt(userInputs.encryptedMessage, 10) !== encryptedMessage) {
          invalid.encryptedMessage = false;
        }
        break;
      case 3:
        if (parseInt(userInputs.message, 10) !== message) {
            invalid.message = false;
        }
        break;
      case 4:
        if (parseInt(userInputs.e, 10) !== e) {
           invalid.e = false;
        }
        break;
      default:
        break;
    }

    }
      const properties2 = ['keys', 'privateKey', 'encryptedMessage', 'message', 'e'];
      const invalidArray = properties2.map(prop => invalid[prop]);
      const invalidCount = invalidArray.filter(item => item === false).length;
    
    return invalidCount;
  
  };

  
  const toggleHint = (key) => {
    setHints((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleNext = () => {
    if (currentCard < 5) setCurrentCard(currentCard + 1);
  };

  const handleBack = () => {
    if (currentCard > 0) setCurrentCard(currentCard - 1);
  };


  const validateE = (fn,Einput) => {
       // Έλεγχος αν το E είναι πρώτος με το φ(n)
    let a = Einput, b = fn;
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    console.log('Αποτέλεσμα του GCD για το E και το φ(n):', a);
  
    if (a !== 1) {
      return false;
    } else {
      return true;
    }
  };

  const validateD = (D, E, fn) => {
    console.log("D: "+D);
    console.log("E: "+E);
    console.log("fn: "+fn);
      const expectedD = modInverse(E, fn);
      if(expectedD == -1 ){ return false;}
      if (D !== expectedD) {
           return false;
      } else {
        return true;
      }
    
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


  function finalization() {

    console.log(userInputs);   
   
    {/*
    const valid0=userInputs.validated?.[0];
    const valid1=userInputs.validated?.[1];
    const valid2=userInputs.validated?.[2];
    const valid3=userInputs.validated?.[3];
    const valid4=userInputs.validated?.[4];
    const valid5= userInputs.validated?.[5];
    let validArray = [valid0, valid1, valid2, valid3, valid4, valid5];
    */}

    const validArray = new Array(6).fill(undefined).map((_, i) => userInputs.validated?.[i] ?? undefined);
    console.log("validArray "+validArray);
     const properties = ['d', 'e', 'encryptedMessage', 'message', 'e1', 'six'];
    const emptyArray = properties.map(prop => userInputs[prop]);
    const emptyCount = emptyArray.filter(item => item === undefined).length;
  

    if (emptyCount == 0)      
      { 
        const emptyIndices = validArray
        .map((item, index) => (item === undefined ? index : null))
        .filter(index => index !== null);
        const countNotValidated =CountCorrectNotValidation(emptyIndices);
        const validArrayUpdated = new Array(6).fill(undefined).map((_, i) => userInputs.validated?.[i] ?? undefined);
        const countAlreadyValidated = validArrayUpdated.filter(item => item === true).length;

        let totalCorrect= countAlreadyValidated + ((emptyIndices.length)- countNotValidated); 
          setTimeout(() => {
          setTrueCount(totalCorrect); // Set trueCount in state
          setShowModalE(true); // Show the modal
        }, 1000);
      }
    
      else
      {

        setTimeout(() => {
          setEmptyCount(emptyCount); // Set trueCount in state
           setShowModalF(true); // Show the modal
        }, 1000);

      }

  }

  function showFinalModal() {
        let totalCorrect =null;
        const validArray = new Array(6).fill(undefined).map((_, i) => userInputs.validated?.[i] ?? undefined);
        console.log("validArray "+validArray);
        const properties = ['d', 'e', 'encryptedMessage', 'message', 'e1', 'six'];
        const emptyArray = properties.map(prop => userInputs[prop]);
        const emptyCount = emptyArray.filter(item => item === undefined).length;
        console.log("emptyCount "+emptyCount);

        if(emptyCount == 6)
        {
          totalCorrect= 0;
        }else{
          const emptyIndices = validArray
          .map((item, index) => (item === undefined ? index : null))
          .filter(index => index !== null);
  
          const countNotValidated =CountCorrectNotValidation(emptyIndices);
          const validArrayUpdated = new Array(6).fill(undefined).map((_, i) => userInputs.validated?.[i] ?? undefined);
          const countAlreadyValidated = validArrayUpdated.filter(item => item === true).length;
  
          let totalCorrect= countAlreadyValidated + ((emptyIndices.length)- countNotValidated); 

        }
     
          setTimeout(() => {
          setTrueCount(totalCorrect); // Set trueCount in state
          handleCloseF();
          setShowModalE(true); // Show the modal
        }, 1000);


     }


     const [currentPage, setCurrentPage] = useState(1);
     const totalPages = 10; // or any number of total pages
   
     const handlePageChange = (page) => {
       setCurrentPage(page);
     };
  


  const renderCardContent = () => {
    const { p, q, n, phiN, e, d, message, encryptedMessage } = rsaValues[currentCard] || {};

    const isValidated = userInputs.validated?.[currentCard];



   

    if (currentCard === 0) {
      return (
        <>
          <p style={{ fontSize: '16px', fontWeight:'bold'}}>
              1. Υπολογισμός δημοσίου κλειδιού
          </p>
          
          <p>Δίνονται δύο πρώτοι αριθμοί:</p>
          <p>P = {p}, Q = {q}</p>
          <p>Υπολόγισε το δημόσιο κλειδί E:</p>
          <p>Correct E = {e}</p>
   
      

          <input
            type="number"
            className={isValidated ? styles.validInput : styles.Input}
            placeholder="E"
            value={userInputs.e || ''}
            onChange={(e) => handleInputChange('e', e.target.value)}
            style={{
              fontSize: '0.8rem', width: '30%'
             }}
          />
      <br />
         {hints.keys && (
            <p className={styles.hint}> E = {e}</p>
          )}

        {!isValidated &&  errors.keys &&(
          
            <button
              className={styles.hintButton}
              onClick={() => toggleHint('keys')}
            >
              {hints.keys ? <i className="bi bi-lightbulb-off"></i> : <i className="bi bi-lightbulb"></i>}
            </button>
          )}
        {/* Conditionally render hint button based on input validity */}
   
        
          {errors.keys && <p className={styles.error}>{errors.keys}</p>}

        </>
      );
    }

    {/*
    if (currentCard === 1) {
      return (
        <>
           <p style={{ fontSize: '16px', fontWeight:'bold'}}>
            2. Υπολογισμός ιδιωτικού κλειδιού
            </p>
            <p>Δίνονται οι ακόλουθοι αριθμοί:</p>
          <p>P = {p}, Q = {q}, E = {e}</p>
          <p>Υπολόγισε το ιδιωτικό κλειδί D:</p>
     
          <input
                className={isValidated ? styles.validInput : styles.Input}
                type="number"
                placeholder="D (ιδιωτικό κλειδί)"
                disabled={isValidated}
                value={userInputs.d || ''}
                onChange={(e) => handleInputChange('d', e.target.value)}
                style={{
                  fontSize: '0.8rem', width: '50%'
                }}
          />

       
          <button
            className={styles.hintButton}
            onClick={() => toggleHint('privateKey')}
            disabled={isValidated}
          >
            {hints.privateKey ? <i class="bi bi-lightbulb-off"></i>: <i class="bi bi-lightbulb"></i>}
          </button>
          {hints.privateKey && (
            <p className={styles.hint}>Ιδιωτικό κλειδί D = {d}</p>
          )}
          {errors.privateKey && <p className={styles.error}>{errors.privateKey}</p>}

        </>
      );
    }
  */}
  

    if (currentCard === 1) {
      return (
        <>
           <p style={{ fontSize: '16px', fontWeight:'bold'}}>
            2. Υπολογισμός ιδιωτικού κλειδιού
            </p>
          <p>Δίνονται οι ακόλουθοι αριθμοί:</p>
          <p>n = {n}, Φ(n) = {phiN}, E = {e}</p>
          <p>Υπολόγισε το ιδιωτικό κλειδί D:</p>
          <p>Correct D = {d}</p>
     
          <input
                className={isValidated ? styles.validInput : styles.Input}
                type="number"
                placeholder="D"
                disabled={isValidated}
                value={userInputs.d || ''}
                onChange={(e) => handleInputChange('d', e.target.value)}
                style={{
                  fontSize: '0.8rem', width: '30%'
                }}
          />
             <br />
             {hints.privateKey && (
            <p className={styles.hint}>Ιδιωτικό κλειδί D = {d}</p>
          )}

     {!isValidated &&  errors.privateKey &&(
          <button
            className={styles.hintButton}
            onClick={() => toggleHint('privateKey')}
            disabled={isValidated}
          >
            {hints.privateKey ? <i class="bi bi-lightbulb-off"></i>: <i class="bi bi-lightbulb"></i>}
          </button>
     )}

       
          {errors.privateKey && <p className={styles.error}>{errors.privateKey}</p>}

        </>
      );
    }
  
    if (currentCard === 2) {
      return (
        <>
           <p style={{ fontSize: '16px', fontWeight:'bold'}}>
            3. Κρυπτογράφηση μηνύματος
          </p>
          <p>Δίνονται τα ακόλουθα στοιχεία του αλγορίθμου:</p>
          <p>n = {n}, E = {e}, μήνυμα = {message}</p>
          <p>Υπολόγισε τον κρυπτογραφημένο μήνυμα CT:</p>
          <p>Correct  μήνυμα = {encryptedMessage}</p>

          <input
            type="number"
            placeholder="CT"
            className={isValidated ? styles.validInput : styles.Input}
            value={userInputs.encryptedMessage || ''}
            onChange={(e) => handleInputChange('encryptedMessage', e.target.value)}
            disabled={isValidated}
            style={{
              fontSize: '0.8rem', width: '30%'
             }}
          />
          <br />
          {hints.encryptedMessage && (
            <p className={styles.hint}>Κρυπτογραφημένο μήνυμα = {encryptedMessage}</p>
          )}
         {!isValidated &&  errors.encryptedMessage &&(
          <button
            className={styles.hintButton}
            onClick={() => toggleHint('encryptedMessage')}
            disabled={isValidated}
          >
            {hints.encryptedMessage ? <i class="bi bi-lightbulb-off"></i> : <i class="bi bi-lightbulb"></i>}
          </button>
         )}
         
           {errors.encryptedMessage && <p className={styles.error}>{errors.encryptedMessage}</p>}
        </>
      );
    }

    if (currentCard === 3) {
      return (
        <>
           <p style={{ fontSize: '16px', fontWeight:'bold'}}>
            4. Αποκρυπτογράφηση μηνύματος
          </p>
          <p>Δίνονται τα ακόλουθα στοιχεία του αλγορίθμου:</p>
          <p>n = {n}, E = {e},  D = {d}, κρυπτογραφημένο μήνυμα = {encryptedMessage}</p>
          <p>Υπολόγισε τον αποκρυπτογραφημένο μήνυμα Μ:</p>

          <p>Correct  μήνυμα = {message}</p>

          <input
            type="number"
            placeholder="Μ"
            className={isValidated ? styles.validInput : styles.Input}
            value={userInputs.message || ''}
            onChange={(e) => handleInputChange('message', e.target.value)}
            disabled={isValidated}
            style={{
              fontSize: '0.8rem', width: '30%'
             }}
          />

         <br />
         {hints.message && (
            <p className={styles.hint}>Κρυπτογραφημένο μήνυμα = {message}</p>
          )}
         
         {!isValidated &&  errors.message &&(
          <button
            className={styles.hintButton}
            onClick={() => toggleHint('message')}
            disabled={isValidated}
          >
            {hints.message ? <i class="bi bi-lightbulb-off"></i> : <i class="bi bi-lightbulb"></i>}
          </button>
          )}

          
           {errors.message && <p className={styles.error}>{errors.message}</p>}
        </>
      );
    }

    if (currentCard === 4) {
      return (
        <>
           <p style={{ fontSize: '16px', fontWeight:'bold'}}>
            5. Υπολογισμός δημόσιου κλειδιού
          </p>
          <p>Δίνονται τα ακόλουθα στοιχεία του αλγορίθμου:</p>
          <p>n = {n}, Φ(n) = {phiN}</p>
          <p>Υπολόγισε το δημόσιο κλειδί Ε:</p>

          <p>Correct  E = {e}</p>

          <input
            type="number"
            placeholder="E"
            className={isValidated ? styles.validInput : styles.Input}
            value={userInputs.e1 || ''}
            onChange={(e) => handleInputChange('e1', e.target.value)}
            disabled={isValidated}
            style={{
              fontSize: '0.8rem', width: '30%'
             }}
          />
         <br />
         {hints.e && (
            <p className={styles.hint}>Δημόσιο κλειδί E = {e}</p>
          )}
         {!isValidated &&  errors.e1 &&(
          <button
            className={styles.hintButton}
            onClick={() => toggleHint('e1')}
            disabled={isValidated}
          >
            {hints.e1 ? <i class="bi bi-lightbulb-off"></i> : <i class="bi bi-lightbulb"></i>}
          </button>
         )}

         
           {errors.e && <p className={styles.error}>{errors.e}</p>}
        </>
      );
    }

    if (currentCard === 5) {
      return (
        <>
           <p style={{ fontSize: '16px', fontWeight:'bold'}}>
            6. Έλεγχος κρυπτογράφησης
          </p>
          <p>Δίνονται τα ακόλουθα στοιχεία του αλγορίθμου:</p>
          <p>P = {p}, Q = {q}, E = {e} , μήνυμα = {message}</p>

          <p>Correct  encryptedMessage = {encryptedMessage}</p>
        
           <div className={styles['Hidden']}>
                <RandomMessage 
                  encryptedMessage={encryptedMessage} 
                  updateSelectedMessage={updateSelectedMessage}
                  isMessageSet={isMessageSet}
                />
              </div>
           <p>Το κρυπτογραφημένο μήνυμα είναι το {selectedMessage}.</p>
    
         {errors.six && <p className={styles.error}>{errors.six}</p>}
         {isValidated && <p className={styles.success}>Σωστή απάντηση</p>}
          
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

        <Button onClick={handleBack} 
                style={{
                  display: currentCard === 0 ? 'none' : 'block' ,
                  fontSize: '1rem', // Slightly larger font for better readability
                  padding: '0.4rem 0.7rem', // Adjusted padding for a balanced look
                  fontWeight: 'bolder',
                  borderColor: 'grey', // Custom border color
                  borderWidth: '2px', // Custom border thickness
                  color: '#grey', // Ensure text color matches or complements the border
                  backgroundColor: 'rgb(8, 4, 4)', // Dark background
                  borderRadius: '5px', // Rounded corners for a modern look
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
                  transition: 'all 0.3s ease-in-out', // Smooth animation for hover effects
                  marginLeft: '5px' , marginRight: '5px' 
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#grey'; // Change to border color on hover
                  e.target.style.color = '#fff'; // Make text white on hover
                  e.target.style.boxShadow = '0 8px 12px rgba(32, 179, 179, 0.5)'; // Highlight shadow
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'rgb(8, 4, 4)'; // Reset to original background
                  e.target.style.color = '#grey'; // Reset text color
                  e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)'; // Reset shadow
                }}>
                  <i class="bi bi-arrow-left"></i>
        </Button>
    


        <Button onClick={handleCorrectSix} disabled={currentCard === 0}
                style={{
                  display: currentCard !== 5 ? 'none' : 'block' ,
                  fontSize: '1rem', // Slightly larger font for better readability
                  padding: '0.4rem 0.7rem', // Adjusted padding for a balanced look
                  fontWeight: 'bolder',
                  borderColor: '#06c3c9', // Custom border color
                  borderWidth: '2px', // Custom border thickness
                  color: '#06c3c9', // Ensure text color matches or complements the border
                  backgroundColor: 'rgb(8, 4, 4)', // Dark background
                  borderRadius: '5px', // Rounded corners for a modern look
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
                  transition: 'all 0.3s ease-in-out', // Smooth animation for hover effects
                  width:'60%'   
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#06c3c9'; // Change to border color on hover
                  e.target.style.color = '#fff'; // Make text white on hover
                  e.target.style.boxShadow = '0 8px 12px rgba(32, 179, 179, 0.5)'; // Highlight shadow
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'rgb(8, 4, 4)'; // Reset to original background
                  e.target.style.color = '#06c3c9'; // Reset text color
                  e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)'; // Reset shadow
                }}>
                 Σωστό
        </Button>
        <Button onClick={handleWrongSix} disabled={currentCard === 0}
              style={{
                    display: currentCard !== 5 ? 'none' : 'block' ,
                    fontSize: '1rem', // Slightly larger font for better readability
                    padding: '0.4rem 0.7rem', // Adjusted padding for a balanced look
                    fontWeight: 'bolder',
                    borderColor: '#06c3c9', // Custom border color
                    borderWidth: '2px', // Custom border thickness
                    color: '#06c3c9', // Ensure text color matches or complements the border
                    backgroundColor: 'rgb(8, 4, 4)', // Dark background
                    borderRadius: '5px', // Rounded corners for a modern look
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
                    transition: 'all 0.3s ease-in-out', // Smooth animation for hover effects
                    width:'60%'   
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#06c3c9'; // Change to border color on hover
                    e.target.style.color = '#fff'; // Make text white on hover
                    e.target.style.boxShadow = '0 8px 12px rgba(32, 179, 179, 0.5)'; // Highlight shadow
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgb(8, 4, 4)'; // Reset to original background
                    e.target.style.color = '#06c3c9'; // Reset text color
                    e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)'; // Reset shadow
                  }}>
                Λάθος      
         </Button>
        <Button onClick={handleValidation}
                 style={{
                  display: currentCard === 5 ? 'none' : 'block' ,
                  fontSize: '1rem', // Slightly larger font for better readability
                  padding: '0.4rem 0.7rem', // Adjusted padding for a balanced look
                  fontWeight: 'bolder',
                  borderColor: '#06c3c9', // Custom border color
                  borderWidth: '2px', // Custom border thickness
                  color: '#06c3c9', // Ensure text color matches or complements the border
                  backgroundColor: 'rgb(8, 4, 4)', // Dark background
                  borderRadius: '5px', // Rounded corners for a modern look
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
                  transition: 'all 0.3s ease-in-out', // Smooth animation for hover effects
                  width:'100%'   
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#06c3c9'; // Change to border color on hover
                  e.target.style.color = '#fff'; // Make text white on hover
                  e.target.style.boxShadow = '0 8px 12px rgba(32, 179, 179, 0.5)'; // Highlight shadow
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'rgb(8, 4, 4)'; // Reset to original background
                  e.target.style.color = '#06c3c9'; // Reset text color
                  e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)'; // Reset shadow
                }}
            >Έλεγχος
        </Button>

     
       <Button onClick={handleNext} disabled={currentCard === 5} 
                style={{
                  display: currentCard === 5 ? 'none' : 'block' ,
                  fontSize: '1rem', // Slightly larger font for better readability
                  padding: '0.4rem 0.7rem', // Adjusted padding for a balanced look
                  fontWeight: 'bolder',
                  borderColor: 'grey', // Custom border color
                  borderWidth: '2px', // Custom border thickness
                  color: '#grey', // Ensure text color matches or complements the border
                  backgroundColor: 'rgb(8, 4, 4)', // Dark background
                  borderRadius: '5px', // Rounded corners for a modern look
                 
                  transition: 'all 0.3s ease-in-out', // Smooth animation for hover effects
                  marginLeft: '5px' , marginRight: '5px' 
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#grey'; // Change to border color on hover
                  e.target.style.color = '#fff'; // Make text white on hover
                  e.target.style.boxShadow = '0 8px 12px rgba(32, 179, 179, 0.5)'; // Highlight shadow
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'rgb(8, 4, 4)'; // Reset to original background
                  e.target.style.color = '#grey'; // Reset text color
                  e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)'; // Reset shadow
                }}>
                <i class="bi bi-arrow-right"></i>
        </Button>
   

        {showModalE} {/* Blue and Black Confetti */}
              <Modal
                show={showModalE}
                centered
              >
              <Modal.Header className="modal-header-dark">
                  <Modal.Title className="text-center w-100">Το test ολοκληρώθηκε</Modal.Title>                
                </Modal.Header>
                <Modal.Body className="modal-body-dark">
                  Απάντησες σωστά σε {trueCount} από τις 6 ερωτήσεις.
                 </Modal.Body>
                <Modal.Footer className="modal-footer-dark">
                <Button
                    className="modal-close-button"
                    onClick={handleClose}>
                    Έλεγχος αποτελεσμάτων
                  </Button>
                  
                  <Button
                    className="modal-close-button"
                    onClick={refreshPage}>
                    Δοκίμασε ξανά
                  </Button>

                 

                </Modal.Footer>
              </Modal>

              {showModalF} {/* Blue and Black Confetti */}
              <Modal
                show={showModalF}
                centered
              >
              <Modal.Header className="modal-header-dark">
                  <Modal.Title className="text-center w-100">
                  <i class="bi bi-exclamation-triangle"></i>&nbsp;
                   Προσοχή</Modal.Title>                
                </Modal.Header>
                <Modal.Body className="modal-body-dark">
                  Δεν έχεις ολοκληρώσει το test. <br/> Απομένουν {emptyCount} ερωτήσεις.
                 </Modal.Body>
                <Modal.Footer className="modal-footer-dark">
                <Button
                    className="modal-close-button"
                    onClick={handleCloseF}>
                    Επιστροφή στο test
                  </Button>
                  
                  <Button
                    className="modal-close-button"
                    onClick={showFinalModal}>
                    Οριστική υποβολή
                  </Button>

                 

                </Modal.Footer>
              </Modal>
      </div>
      <Button onClick={finalization} disabled={currentCard !== 5} 
                style={{
                  display: currentCard !== 5 ? 'none' : 'block' ,
                  fontSize: '1rem', // Slightly larger font for better readability
                  padding: '0.4rem 0.7rem', // Adjusted padding for a balanced look
                  fontWeight: 'bolder',
                  borderColor: '#c22748', // Custom border color
                  borderWidth: '2px', // Custom border thickness
                  color: '#c22748', // Ensure text color matches or complements the border
                  backgroundColor: 'rgb(8, 4, 4)', // Dark background
                  borderRadius: '5px', // Rounded corners for a modern look
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
                  transition: 'all 0.3s ease-in-out', // Smooth animation for hover effects
                  marginLeft: '5px' , marginRight: '5px', 
                  marginTop:'10px'
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
                }}>
                Οριστική υποβολή
        </Button>


{/*
        <br/>
        <br/>
        <Pagination className="fancy-pagination" style={{color:'black'}}>
          {rsaValues.map((_, index) => (
            <Pagination.Item 
              key={index} 
              active={index === currentCard} 
              onClick={() => setCurrentCard(index)}
              >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
*/}
       
    </div>
    </div>
  );
};

export default CardCarousel;
