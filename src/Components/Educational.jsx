
import React, { useState,useContext,useRef } from 'react';
import Card from 'react-bootstrap/Card';
import {Overlay, Tooltip, Modal,Form,Button, Row, Col } from 'react-bootstrap';
import { RSAContext } from './RSAContext';

const Educational = ({rsaValuess, updateRSAValues }) => {
  // Boy's state
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [z, setZ] = useState('');
 

  // Girl's state
  const [p, setP] = useState('');
  const [f, setF] = useState('');
  const [isFCorrect, setIsFCorrect] = useState(false);



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



  //-----------------------------   ME   -----------------------------------
  const [locked, setLocked] = useState(false); // State to lock the form
  const { rsaValues, setRSAValues } = useContext(RSAContext);
  const [form, setForm] = useState(rsaValues);
  const[errors, setErrors] = useState({})
  const [showModalB, setShowModalB] = useState(false); 
  const [showModalA, setShowModalA] = useState(false); 
  const [factors, setFactors] = useState('');
  const [isZCorrect, setIsZCorrect] = useState(false);                              //from 7.11




  const [showTooltip, setShowTooltip] = useState(false);
  const target = useRef(null);




  // Function to close the modal
  const handleCloseModB = () => setShowModalB(false);
  const handleCloseModA = () => setShowModalA(false);

    // Handle input changes for the bobs's inputs                                   //from 7.11
    const handleInputChange2 = (e, setter) => {
      const value = e.target.value;
      setter(value);
      setIsZCorrect(false); // Reset validation on input change 
    };
   


  const setField = (field, value) => {
    if (locked) return;
    setForm(prevForm => {
        const updatedForm = { ...prevForm, [field]: value };

        // Validate field on each change
        validateField(field, value, updatedForm);
        
        return updatedForm;
    });

    // Update RSA values in context
    setRSAValues(prev => ({
        ...prev,
        [field]: value,
    }));

    // Clear errors for the field if valid
    if (!!errors[field]) {
        setErrors(prevErrors => ({
            ...prevErrors,
            [field]: null,
        }));
    }
};



   // Validation function for individual fields
   const validateField = (field, value, updatedForm) => {
    const{p,q,n,fn,E,D,CT,M}= updatedForm;
    let newErrors = { ...errors }; // Start with current errors
    switch (field) {
      case 'p':
        validateP(field, value,updatedForm,newErrors);
         console.log("before revalidation of N: "+n);
         if (n !== undefined && n !== '') { console.log("Entered ValidateN"); validateN('n', n, updatedForm,newErrors);}
         if (fn !== undefined && fn !== '') {console.log("Entered ValidateFN"); validateFn('fn', fn, updatedForm,newErrors);}
         if (E !== undefined && E !== '') { console.log("Entered ValidateE");validateE('E', E, updatedForm,newErrors);}
         if (D !== undefined && D !== '') { console.log("Entered ValidateD");validateD('D', D, updatedForm,newErrors);}
         if (CT !== undefined && CT !== '') { console.log("Entered ValidateCT");handleSubmitCT('CT', CT, updatedForm,newErrors);}
         if (M !== undefined && M !== '') { console.log("Entered ValidateM");handleSubmitM('M', M, updatedForm,newErrors);}
        // Finally, update the errors state once with all accumulated errors
          setErrors(newErrors);

         break;
      case 'q':
        validateQ(field, value,updatedForm,newErrors);
          if (n !== undefined && n !== '') { console.log("Entered ValidateN"); validateN('n', n, updatedForm,newErrors);}
          if (fn !== undefined && fn !== '') {console.log("Entered ValidateFN"); validateFn('fn', fn, updatedForm,newErrors);}
          if (E !== undefined && E !== '') { console.log("Entered ValidateE");validateE('E', E, updatedForm,newErrors);}
          if (D !== undefined && D !== '') { console.log("Entered ValidateD");validateD('D', D, updatedForm,newErrors);}
      // Finally, update the errors state once with all accumulated errors
       setErrors(newErrors);
          break;
      case 'n':
        validateN(field, value, updatedForm,newErrors);
          if (E !== undefined && E !== '') { console.log("Entered ValidateE");validateE('E', E, updatedForm,newErrors);}
          if (D !== undefined && D !== '') { console.log("Entered ValidateD");validateD('D', D, updatedForm,newErrors);}
          setErrors(newErrors);
          setShowTooltip(!!newErrors.n);
        break;
      case 'fn':
        validateFn(field, value, updatedForm,newErrors);
          if (E !== undefined && E !== '') { console.log("Entered ValidateE");validateE('E', E, updatedForm,newErrors);}
          if (D !== undefined && D !== '') { console.log("Entered ValidateD");validateD('D', D, updatedForm,newErrors);}
        setErrors(newErrors);
        break;
      case 'E':
         validateE(field, value, updatedForm,newErrors);
         if (D !== undefined && D !== '') { console.log("Entered ValidateD");validateD('D', D, updatedForm,newErrors);}
        setErrors(newErrors);
        break;
      case 'D':
        validateD(field, value, updatedForm,newErrors);
        setErrors(newErrors);
        break;
      case 'M':
        console.log("Entered M");
        handleSubmitM(field, value,updatedForm,newErrors);
        setErrors(newErrors);
        break;
      case 'CT':
        handleSubmitCT(field, value,updatedForm,newErrors);
        setErrors(newErrors);
        break;
      default:
        break;
    }
  };



//-----------------------------------handle submit only for P-------------------------------------------
const validateP = (field, value, form,newErrors) =>{
  const{p}= form

  console.log(p);
  console.log(isPrime(p));
   //-validation for p == prime
   if (p === undefined || p === '' ){newErrors.p = 'Το πεδίο είναι κενό'}
   else{
    if (!isPrime(p)) {
      newErrors.p = 'Το '+p+' δεν είναι πρώτος αριθμός';
    }else {
     delete newErrors.p; // Clear error if validation passes
    }
   }
 }


 //---------------------------------handle submit only for Q --------------------------------------------
 const validateQ = (field, value, form,newErrors) =>{
  const{ q }= form

  //validation for q == prime
    if (q === undefined || q === '') {newErrors.q = 'Το πεδίο είναι κενό'}
    else{ 
      if (!isPrime(q)) {
        newErrors.q = 'Το '+q+' δεν είναι πρώτος αριθμός';
       
      } else {
       delete newErrors.q; // Clear error if validation passes
   }
  }          
}



//---------------------------------handle submit only for n -------------------------------------------
const validateN = (field, value, form,newErrors) =>{
  const{p,q,n}= form
  //const newErrors ={}
  
   // n validation
  if (n === undefined || n === '') {newErrors.n = 'Το πεδίο είναι κενό'}
  else{ 
  if (n != p*q) 
      {
      newErrors.n = n+' ≠  P x Q';
      console.log(n + " not p x q");
      } else {
        delete newErrors.n; // Clear error if validation passes
    }
  }     
}


//---------------------------------handle submit only for Fn--------------------------------------------
const validateFn = (field, value, form,newErrors) =>{
  const{p,q,fn}= form
 //const newErrors ={}


 //fn validation
 if (fn === undefined || fn === '') {newErrors.fn = 'Το πεδίο είναι κενό'}
 else{ 
 if (fn != ((q-1)*(p-1))) 
      {
          newErrors.fn = +fn+' ≠ (P - 1) x (Q - 1)';
          console.log(fn + " invalid");
      }else {
       delete newErrors.fn; // Clear error if validation passes
   }
 }  
}


//----------------------------------------handle submit only for E---------------------------------------------
{/*
const validateE = (field, value, form,newErrors) =>{
  let{fn,E}= form
  
  let Einput;
      if (E === undefined || E === '') {newErrors.E = 'Το πεδίο είναι κενό'}
  else{ 
      // Check if E and phi(N) are positive integers
      E=Number(E);
      Einput=Number(E);
      fn=Number(fn);
      if (!Number.isInteger(Einput) || !Number.isInteger(fn) || (Einput <= 1) || (fn <= 1)) 
        { newErrors.E = 'Wrong E' }

      // Check if E is coprime with phi(N)
      while (fn !== 0) {
          var temp = fn;
          fn = Einput % fn;
          Einput = temp;
      }
     console.log('E= '+Einput);
     if(Einput != 1){
          newErrors.E = 'Λάθος επιλογή κλειδιού'
       }else {
        delete newErrors.E; // Clear error if validation passes
    }
  }


  }
*/}


const validateE = (field, value, form, newErrors) => {
  let { fn, E } = form;
  
  // Μετατροπή των τιμών σε αριθμούς
  let Einput = Number(E);
  fn = Number(fn);

  // Έλεγχος αν το πεδίο E είναι κενό
  if (E === undefined || E === '') {
    newErrors.E = 'Το πεδίο E είναι κενό. Παρακαλώ εισάγετε έναν αριθμό.';
    console.log('Validation Error: Το πεδίο E είναι κενό.');
    return;
  }

  // Έλεγχος ότι E και fn είναι θετικοί ακέραιοι μεγαλύτεροι του 1
  if (!Number.isInteger(Einput) || Einput <= 1) {
    newErrors.E = 'Το E πρέπει να είναι θετικός ακέραιος μεγαλύτερος του 1.';
    console.log('Validation Error: Το E δεν είναι θετικός ακέραιος μεγαλύτερος του 1. E:', Einput);
    return;
  }

  if (!Number.isInteger(fn) || fn <= 1) {
    newErrors.E = 'Το φ(n) (fn) πρέπει να είναι θετικός ακέραιος μεγαλύτερος του 1.';
    console.log('Validation Error: Το φ(n) (fn) δεν είναι θετικός ακέραιος μεγαλύτερος του 1. fn:', fn);
    return;
  }

  // Έλεγχος αν το E είναι πρώτος με το φ(n)
  let a = Einput, b = fn;
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  console.log('Αποτέλεσμα του GCD για το E και το φ(n):', a);

  if (a !== 1) {
    newErrors.E = Number(E)+ ' δεν είναι "σχετικά πρώτο" με το '+ fn+' .Επιλέξτε αριθμό που να μην έχει κοινούς παράγοντες με το '+ fn+' πέρα από το 1.';
    console.log('Validation Error: Το E δεν είναι κατάλληλο δημόσιο κλειδί, διότι έχει κοινούς διαιρέτες με το φ(n). GCD:', a);
  } else {
    delete newErrors.E; // Αφαίρεση του μηνύματος λάθους εάν όλα είναι σωστά
    console.log('Success: Το E είναι έγκυρο δημόσιο κλειδί.');
  }
};


const validateD = (field, value, form, newErrors) => {
  const D = Number(value);
  const E = Number(rsaValues.E);
  const fn = Number(rsaValues.fn);

  if (D === undefined || D === '') {
    newErrors.D = 'Το πεδίο D είναι κενό. Παρακαλούμε εισάγετε μια τιμή.';
    console.log('Λάθος: Το πεδίο D είναι κενό.');
  } else { 
    const expectedD = modInverse(E, fn);

    if (D !== expectedD) {
         newErrors.D = '('+D+' * '+rsaValues.E+') mod '+rsaValues.fn+' ≠ 1';
    } else {
       delete newErrors.D; // Καθαρισμός του λάθους αν είναι σωστό το D
    }
  }
};


//----------------------------------------------------------------
const handleInputChange = (e) => {
  const inputValue = e.target.value;
  if (locked) return; // Prevent changes if locked

  if (inputValue === '') {
    setField('fn', '');
    setFactors('');
    setErrors({ ...errors, fn: 'Φn empty' });
    return;
  }
  
  const inputNumber = parseInt(inputValue);

 if (!isNaN(inputNumber) && inputNumber > 0) {
      setField('fn', inputValue);
      

      // Calculate factors
      const factorsArray = [];
      let n = inputNumber;
      for (let i = 2; i <= Math.sqrt(n); i++) {
        while (n % i === 0) {
          factorsArray.push(i);
          n /= i;
        }
      }
      if (n > 1) {
        factorsArray.push(n);
      }

   // Format factors as string
      const factorsString = factorsArray.join(' * ');
      setFactors(factorsString);
      
      // Clear errors
      setErrors({ ...errors, fn: '' });
    } else {
      setForm({ ...form, fn: inputValue });
      setFactors('');
      setErrors({ ...errors, fn: 'Παρακαλώ εισάγετε το σωστό θετικό αριθμό.' });
    }
  };



  // -------------------------------isPrime function---------------------------------//
const isPrime = (num) => {
  let j;
  if(num==1 || num==0){return false;}
  for (j = 2; j <= num - 1; j++) {
    if (num % j == 0) {
      return false;
        //add break logic
     }
}
  return true;
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
    throw new Error(`${e} has no modular inverse mod ${phiN}`);
  }

  if (t < 0) {
    t = t + phiN;
  }

  return t;
}

//----------------------bob----------------------

const handleSubmit = () => {
  // Update the RSA values in the parent component
  const newErrors ={}
  const { p, q, n, fn, E, D } = form;

  const hasEmptyFields = !p || !q || !n || !fn || !E || !D;
  const hasErrors = Object.values(errors).some((error) => error !== null && error !== '');

  updateRSAValues({ p, q, n, fn, e: E, d: D });

   if (hasEmptyFields || hasErrors) {
    // Show an alert if any field is empty
    console.log('errors ' +newErrors);
    setShowModalB(true); // Show modal if fields are empty
    return; // Exit the function, preventing the rest of the code from running
    setLocked(false);
  }else{
   // Lock the form
   setIsZCorrect(true);
   //setLocked(true);
  //onSendClick();
  }  
};

//--------------------Alice---------------------------
const handleButtonClick = () => {
  const{M,CT}= form
  console.log('M: '+M +'  ,CT:'+CT);
  const hasEmptyFields = !M || !CT;
  const hasErrors = Object.values(errors).some((error) => error !== null && error !== '');

  // Check if any fields are empty or has errors
  if (hasEmptyFields || hasErrors) {
    setShowModalB(true); // Show modal if fields are empty
    setLocked(false);
  } else {
    // Call the onUnlockClick function since fields are filled
   //onUnlockClick();
    setIsFCorrect(true);
   //setLocked(true);
    console.log('CT sent to Bob!'); // Placeholder for any additional functionality
  }
};



//----------------------------------------handle submit only for M---------------------------------------------

const handleSubmitM = (field, value, form,newErrors) =>{
  
  //1109  const handleSubmitM = e =>{
      //e.preventDefault()
      let{M}= form
      console.log("Entered M validation");
              if (M === undefined || M === '') {newErrors.M = 'Το πεδίο είναι κενό'}
      else{ 
          // Check if E and phi(N) are positive integers
          M=Number(M);
          if(M < 0){
            newErrors.M = 'M πρέπει να είναι μεγαλύτερο του 0'
            console.log("M πρέπει να είναι μεγαλύτερο του 0");
         }
         else {
          delete newErrors.M; // Clear error if validation passes
         }
        }     
      }
  
  //----------------------------------------handle submit only for CT---------------------------------------------
  const handleSubmitCT = (field, value, form,newErrors) =>{
    const { E, n } = rsaValues;
    console.log('Soo lets check bob values ..E= '+ E+' N= '+n);
  
    console.log('rsaValues:', rsaValues);
    let{M,CT}= form
    
     if (CT === undefined || CT === '') {newErrors.CT = 'Το πεδίο είναι κενό'}
    else{ 
        // Check if E and phi(N) are positive integers
       /*E=Number(E);
        M=Number(M);
        n=Number(n);
        */
        const E = Number(rsaValues.E);
        const n = Number(rsaValues.n);
        console.log( M )
        console.log( E )
        console.log(n)
        let encryptedMessage = rsaEncrypt(Number(M) , E , n);
        console.log("Encrypted Message (C):", encryptedMessage);
  
        if (encryptedMessage !== Number(CT)) 
          { console.log("x^y = xeʸ");
            newErrors.CT = CT + ' ≠ ' + M + ' ' + convertToSuperscript(E) + ' mod ' + n;}
        else {
            delete newErrors.CT; // Clear error if validation passes
        }
     }
    }
  
  
  
    function convertToSuperscript(number) {
      const superscriptMap = {
          '0': '\u00B0', '1': '\u00B9', '2': '\u00B2', '3': '\u00B3', '4': '\u2074',
          '5': '\u2075', '6': '\u2076', '7': '\u2077', '8': '\u2078', '9': '\u2079'
      };
      return number.toString().split('').map(digit => superscriptMap[digit] || digit).join('');
  }

  function modExp(base, exp, mod) {
    if (mod === 1) return 0;
    let result = 1;
    base = base % mod;
    while (exp > 0) {
        if (exp % 2 === 1) {
            result = (result * base) % mod;
        }
        exp = exp >> 1;
        base = (base * base) % mod;
    }
    return result;
  }
  
  // RSA Encrypt function
  function rsaEncrypt(M, E, N) {
    return modExp(M, E, N);
  }
  
  

  return (
    <div style={styles.pageContainer}>
      {/* Boy's card with inputs and z calculation */}
      <Card border="info" className="customcardBob1">
   

          {/*       
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
        */}
          <Card.Title style={{ fontWeight: 'bold' ,fontSize: '1rem' ,color:'rgb(68, 199, 235)',textAlign: 'center', }}>
                  <i class="bi bi-person-square"style={{fontSize: '40px', color:'rgb(68, 199, 235)'}} ></i> &nbsp;
                    Αποστολέας   
               </Card.Title><br /> 

        <Row className="mb-3">
          <Col xs={3}>
            <Form.Control
                  className="custom-placeholder"
                 placeholder="P"
                 style={{ fontSize: '1.5rem', padding: '0.5rem 0.5rem', color:'rgb(255, 255, 255)' ,backgroundColor: 'rgb(33,37,41)',fontWeight:'bolder'}}
                 value={form.p}
                 onChange={(e) => setField('p', e.target.value)}
                  isInvalid={!!errors.p}
                 disabled={locked}
            />
             <Form.Control.Feedback type= 'invalid'>
                  {errors.p}
              </Form.Control.Feedback>
            </Col>
            <Col xs={3}>
            <Form.Control
               className="custom-placeholder"
                placeholder="Q"
                style={{ fontSize: '1.5rem', padding: '0.5rem 0.5rem', color:'rgb(255, 255, 255)' ,backgroundColor: 'rgb(33,37,41)'}}
                onChange={(e) => setField('q', e.target.value)}
                isInvalid={!!errors.q}
                disabled={locked}
              />
              <Form.Control.Feedback type= 'invalid'>
                  {errors.q}
              </Form.Control.Feedback>
            </Col>
     

         <Col xs={3}>
            <Form.Control
                 className="custom-placeholder"
                value={form.n}
                placeholder="n"
                style={{ fontSize: '1.5rem', padding: '0.5rem 0.5rem', color:'rgb(255, 255, 255)' ,backgroundColor: 'rgb(33,37,41)'}}
                onChange={(e) => setField('n', e.target.value)}
                isInvalid={!!errors.n}
               disabled={locked}
             />
             <Form.Control.Feedback type= 'invalid' >
                 {errors.n}
              </Form.Control.Feedback>
          </Col>

{/*
          <Col xs={6}>
          <Form.Control
            ref={target}
            className="custom-placeholder"
            value={form.n ? `n=${form.n}` : ''} // Display "n=" prefix
            placeholder="n"
            style={{
              fontSize: '1.5rem',
              padding: '0.5rem 0.5rem',
              color: 'rgb(255, 255, 255)',
              backgroundColor: 'rgb(33,37,41)',
            }}
            onChange={(e) => setField('n', e.target.value.replace(/^n=/, ''))}
            disabled={false}
          />
          <Overlay target={target.current} show={showTooltip} placement="bottom">
                {(props) => (
                  <Tooltip id="overlay-tooltip" {...props}>
                    {errors.n}
                  </Tooltip>
                )}
          </Overlay>
          </Col>
          */}

          <Col xs={3}>
              <Form.Control
                  className="custom-placeholder"
                  value={form.fn}
                  placeholder="Φ(n)"
                  style={{ fontSize: '1.5rem', padding: '0.5rem 0.5rem', color:'rgb(255, 255, 255)' ,backgroundColor: 'rgb(33,37,41)'}}
            //    onChange={(e) => setField('fn', e.target.value)}
                  onChange={handleInputChange}                            
                 isInvalid={!!errors.fn}
                 disabled={locked}
              />
              <Form.Control.Feedback type= 'invalid'>
                  {errors.fn}
               </Form.Control.Feedback>
           </Col>
      </Row>

    
                          
            <Row className="mb-3">                                   
              <Form.Control
                   className="custom-placeholder"
                   type="text"
                   readOnly
                   placeholder="Παράγοντες Φ(n)"
                   value={factors}
                   style={{ width: '160px', 
                    padding: '0.5rem 0.5rem', 
                    // ontSize: '1.5rem', 
                    textAlign: 'center', 
                    marginLeft: '1px' , 
                    color:'rgb(255, 255, 255)',
                    backgroundColor: 'rgb(33,37,41)',
                    fontWeight:'bolder'
                  }} 
                />                                                 
           </Row> 
   
                 <Row className="mb-3"  style={{ alignItems: 'center'}} > 
                      <Col xs={4}>
                        <Form.Control
                          className="custom-placeholder"
                           type="integer"
                           placeholder="E"
                           value={form.E}
                           onChange={(e) => setField('E', e.target.value)}
                           isInvalid={!!errors.E}
                           disabled={locked}                           
                           style={{ fontSize: '1.5rem', padding: '0.5rem 0.5rem',color:'rgb(255, 255, 255)' ,backgroundColor: 'rgb(4,145,141)',fontWeight:'bolder'}}
                          />
                        <Form.Control.Feedback type= 'invalid'>
                          {errors.E}
                        </Form.Control.Feedback>
                        
                      </Col>      
                      <Col xs={4}>
                        <Form.Control
                          className="custom-placeholder"
                           type="integer"
                           placeholder="D"
                           value={form.D}
                           onChange={(e) => setField('D', e.target.value)}
                           isInvalid={!!errors.D}
                           disabled={locked}                           
                           style={{ 
                            fontSize: '1.5rem', 
                            padding: '0.5rem 0.5rem',
                            color:'rgb(255, 255, 255)',
                            backgroundColor: 'rgb(138,4,17)',
                            fontWeight:'bolder' ,
                            '::placeholder': {color:'rgb(255, 255, 255)'}
                          }}
                          />
                        <Form.Control.Feedback type= 'invalid'>
                          {errors.D}
                        </Form.Control.Feedback>
                        
                      </Col>                            
                        
                        </Row>
               
        <Button onClick={handleSubmit}
            variant="outline-info" 
            style={{ fontSize: '1.1rem', padding: '0.3rem 0.5rem' ,fontWeight:'bolder'}}
                >Στείλε το κλειδί
        </Button>

              {/* Bootstrap Modal for displaying empty field alert */}
              <Modal show={showModalB} onHide={handleCloseModB} centered>
                  <Modal.Header>
                    <Modal.Title>Μήνυμα λάθους</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                     Παρακαλώ συμπληρώσε σωστά όλα τα πεδία ώστε να μπορέσεις να στείλεις το Public Key στην Alice.
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModB}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>

      </Card>

      {/* Arrows column with two arrows, showing values */}
      <div style={styles.arrowsColumn}>
        {/* Arrow showing z sent from boy to girl */}
        {isZCorrect && (
          <div style={styles.arrowContainer}>
             {/* <div style={styles.arrowRight}>
                  <i class="bi bi-arrow-right"style={{fontSize: '100px', color:'white'}} ></i>*/}
             <Col>
                <div className="arrowRight">
                   <i class="bi bi-arrow-right" ></i>
                <span style={styles.valueLabel}>
                   <i class="bi bi-unlock-fill"style={{fontSize: '60px', color:'rgb(4,145,141)'}}></i> 
                    E = {form.E}
              </span>
               </div>
               </Col>
          </div>
        )}
        {/* Arrow showing p sent from girl back to boy */}
        {isFCorrect && (
          <div style={styles.arrowContainer}>
           {/* <div style={styles.arrowLeft}>
                   <i class="bi bi-arrow-left"style={{fontSize: '100px', color:'rgb(33,37,41)'}} ></i>*/}
           <div className="arrowLeft">
           <i class="bi bi-arrow-left"></i>
              <span style={styles.valueLabel}>
                <i class="bi bi-file-earmark-lock" style={{fontSize: '60px', color:'rgb(236, 26, 26)'}}></i>
                CT = {form.CT}
                </span>
            </div>
          </div>
        )}
      </div>

      {/* Girl's card with inputs and f calculation */}
      <Card border="danger" className="customcardAlice1">

      <Card.Title style={{ fontWeight: 'bold' ,fontSize: '1rem' ,color:'rgb(235, 68, 113)',textAlign: 'center', }}>
           <i class="bi bi-person-square"style={{fontSize: '40px', color:'rgb(235, 68, 113)'}} ></i> &nbsp;
           Παραλήπτης 
           </Card.Title>


           <div style={styles.receivedMessage}>
               {isZCorrect ? `Έλαβε το Δημόσιο κλειδί` : "Περιμένει το Ε..."}
           </div> <br />
                                 

        {isZCorrect && (
          <>

            
            <Row className="mb-3">
                 
                 <Col xs={6}>
                   <Form.Control
                       className="custom-placeholder"
                       placeholder="M"
                       value={form.M}
                        onChange={(e) => setField('M', e.target.value)}
                       isInvalid={!!errors.M}
                       disabled={locked}
                       style={{ fontSize: '1.5rem', padding: '0.5rem 0.5rem', color:'rgb(255, 255, 255)' ,backgroundColor: 'rgb(33,37,41)',fontWeight:'bolder'}}
                     />
                   <Form.Control.Feedback type= 'invalid'>
                     {errors.M}
                   </Form.Control.Feedback>
                 </Col>    
                 <Col xs={6}>                                
                 <Form.Control                          
                     className="custom-placeholder"
                     placeholder="CT"
                     value={form.CT} 
                    //  onChange={(e) => handleInputChangeD('D', e.target.value)} 
                     onChange={(e) => setField('CT', e.target.value)}
                     isInvalid={!!errors.CT}
                     disabled={locked}
                     style={{ fontSize: '1.5rem', padding: '0.5rem 0.5rem', color:'rgb(255, 255, 255)' ,backgroundColor: 'rgb(33,37,41)',fontWeight:'bolder'}}
                   />   
                    <Form.Control.Feedback type= 'invalid'>
                     {errors.CT}
                   </Form.Control.Feedback> 
                </Col>                
               </Row> 

            <Button 
                  onClick={handleButtonClick}
                   variant="outline-danger" 
                   style={{ fontSize: '1.1rem', padding: '0.3rem 0.3rem',fontWeight:'bolder'  }}> 
                   Στείλε το μήνυμα
            </Button>

          </>
        )}
               <Modal show={showModalA} onHide={handleCloseModA} centered>
                  <Modal.Header>
                    <Modal.Title>Μήνυμα λάθους</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  Παρακαλώ συμπληρώσε σωστά όλα τα πεδία ώστε να μπορέσεις να στείλεις το κρυπτογραφημένο μήνυμα στον Bob.
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModA}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>


      </Card>
    </div>
  );
};

// CSS styles for the updated layout
const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: '70vh',
    fontFamily: 'Arial, sans-serif'   
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
    fontSize: '14px',
    color: '#ffffff',
    position: 'relative',
    top: '-10px',
    backgroundColor: 'rgb(33,37,41)',
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
  /*
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
  */
  valueLabel: {
    marginLeft: '10px',
    fontSize: '20px',
    color: 'white',
    fontWeight:'bolder'
  },
  receivedMessage: {
    marginTop: '10px',
    fontSize: '13px',
    color:'rgb(255, 255, 255)',
    backgroundColor: 'rgb(33,37,41)',
   
  }
};

export default Educational;
