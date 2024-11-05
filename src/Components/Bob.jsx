
import React, { useState,useContext  } from 'react';
import Card from 'react-bootstrap/Card';
import { Modal, Form,Button, Row, Col } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RSAContext } from './RSAContext';

//-----------------------------------------------CORRECT START------------------------------------------------------- 
function Bob({ onSendClick, rsaValuess, updateRSAValues  }){

//------------------offcanvas-------------
const { rsaValues, setRSAValues } = useContext(RSAContext);///////////////
const [form, setForm] = useState(rsaValues);////////////////
const [show, setShow] = useState(false);
const [showModal, setShowModal] = useState(false); // Controls modal visibility
const [locked, setLocked] = useState(false); // State to lock the form
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

//const [number, setNumber] = useState('');
const [factors, setFactors] = useState('');
const[errors, setErrors] = useState({})


/*
const setField = (field, value) => {
  if (locked) return; // Prevent changes if locked
  setForm(prevForm => {
    const newForm = { ...prevForm, [field]: value };
    validateField(field, value, newForm); // validate with the updated form state
    return newForm;
  });
  
  setRSAValues(prev => ({
    ...prev,
    [field]: value
  }));

  if (!!errors[field]) {
    setErrors(prevErrors => ({
      ...prevErrors,
      [field]: null
    }));
  }
};
*/

    // Set field with validation
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
      const{p,q,n,fn,E,D}= updatedForm;
      let newErrors = { ...errors }; // Start with current errors
      switch (field) {
        case 'p':
          validateP(field, value,updatedForm,newErrors);
           console.log("before revalidation of N: "+n);
           if (n !== undefined && n !== '') { console.log("Entered ValidateN"); validateN('n', n, updatedForm,newErrors);}
           if (fn !== undefined && fn !== '') {console.log("Entered ValidateFN"); validateFn('fn', fn, updatedForm,newErrors);}
           if (E !== undefined && E !== '') { console.log("Entered ValidateE");validateE('E', E, updatedForm,newErrors);}
           if (D !== undefined && D !== '') { console.log("Entered ValidateD");validateD('D', D, updatedForm,newErrors);}
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

          break;
        case 'fn':
          validateFn(field, value, updatedForm,newErrors);
            if (E !== undefined && E !== '') { console.log("Entered ValidateE");validateE('E', E, updatedForm,newErrors);}
            if (D !== undefined && D !== '') { console.log("Entered ValidateD");validateD('D', D, updatedForm,newErrors);}
          setErrors(newErrors);
          break;
        case 'E':
        case 'fn':
          validateE(field, value, updatedForm,newErrors);
           if (D !== undefined && D !== '') { console.log("Entered ValidateD");validateD('D', D, updatedForm,newErrors);}
          setErrors(newErrors);
          break;
        case 'D':
          validateD(field, value, updatedForm,newErrors);
          setErrors(newErrors);
          break;
        default:
          break;
      }
    };

    
  // Function to close the modal
  const handleCloseMod = () => setShowModal(false);

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
        setShowModal(true); // Show modal if fields are empty
        return; // Exit the function, preventing the rest of the code from running
        setLocked(false);
      }else{
       // Lock the form
      setLocked(true);
      onSendClick();
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

//-------------------------02.22.2024--------------
const validateN = (field, value, form,newErrors) =>{
  const{p,q,n}= form
  //const newErrors ={}
  
   // n validation
  if (n === undefined || n === '') {newErrors.n = 'Το πεδίο είναι κενό'}
  else{ 
  if (n != p*q) 
      {
      newErrors.n = 'Το '+n+' δεν ισούται με  P x Q';
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
           newErrors.fn = 'Το '+fn+' δεν ισούται με (P - 1) x (Q - 1)';
           console.log(fn + " invalid");
       }else {
        delete newErrors.fn; // Clear error if validation passes
    }
  }  
}


//----------------------------------------handle submit only for E---------------------------------------------
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
       console.log((Einput != 1));
        if(Einput != 1){
            newErrors.E = 'Λάθος επιλογή κλειδιού'
            console.log('inside final error');
        }else {
          delete newErrors.E; // Clear error if validation passes
      }
    }

  
    }
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


//--------------------------------handle submit only for D-------------------------------------------------
    
const handleInputChangeD = (field, value) => {
  // Update form state
  setField(field, value);
};


const validateD = (field, value, form,newErrors) =>{
    //calculate pricate key D
  const D = Number(value);
  const E = Number(rsaValues.E);
  const fn = Number(rsaValues.fn);

    console.log(D);
    

    if (D === undefined || D === '') {newErrors.D = 'Το πεδίο είναι κενό'}
    else{ 
      console.log('E, Fn' +E + '  - '+fn);
      let y=modInverse(E, fn);
      console.log('D= '+D+ ' and y=' +y);
    //  const D=Number(D);
      if(D !== y){
        console.log('D is diff from y');
        newErrors.D = 'Λάθος επιλογή κλειδιού' 
        }else {
          delete newErrors.D; // Clear error if validation passes
      }
    }

   
  }

  //--------------------------calculation functions--------------------------------------------------------


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
  

  return ( 
                
          <Card border="info" className="customcardBob">
            <Card.Body>
           
              <Row>
               <Col xs={7}>
               <Card.Title style={{ fontWeight: 'bold' ,fontSize: '1.0rem' }}>
                  <i class="bi bi-person-square"style={{fontSize: '16px', color:'rgb(68, 199, 235)'}} ></i> <br /> 
                    Bob:  Δημιουργία κλειδιών  &nbsp;
               </Card.Title>
            </Col>
            
            <Col className="text-end">
              <div style={{ fontSize: '1.0rem' , fontWeight: 'bold'}}>Βήμα 1</div>
              <Button variant="outline-info" onClick={handleShow} style={{ padding: '0.05rem 0.3rem' }}>
                       <i class="bi bi-question-lg" style={{ fontSize: '1.0rem' }}></i>
                </Button>
            </Col>

            </Row>
              

              <Offcanvas show={show} onHide={handleClose}  style={{  backgroundColor: 'rgb(33, 37, 41)' ,color: 'white' }}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title> <h2 style={{ fontSize: '1.0rem' }}>Bob: Δημιουργία κλειδιών</h2></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                     <ul style={{ fontSize: '0.9rem' }}>
                        <li><strong>Επιλογή P & Q:</strong> <br /> Επιλέγουμε δύο πρώτους αριθμούς.</li>
                        <li><strong>Υπολογισμός n:</strong>  n= P x Q</li>
                        <li><strong>Υπολογισμός της Συνάρτησης Euler:</strong><br />
                           Φ(n): (P - 1) x (Q - 1)</li>
                        <li>
                          <strong>Public Key (E,n):</strong> <br />
                          To E πρέπει να είναι ένας ακέραιος που ικανοποιεί τις εξής προϋποθέσεις:
                          <ol>
                               <li> Να είναι σχετικά πρώτο με το Φ(n). Αυτό σημαίνει ότι το Ε δεν πρέπει να έχει κοινούς παράγοντες με το Φ(n), πέρα από το 1</li>
                                <li> Να μην είναι πολλαπλάσιο των παραγόντων του Φ(n).</li>  
                           </ol>    
                        </li>
                        <li>
                          <strong> Private Key (D,n):</strong> 
                          <br />
                          Το D πρέπει να ικανοποιεί την εξίσωση    <br />
                         (D x E) mod (Φ(n)) = 1
                      
                        </li>
                                       
                      </ul>
                    </Offcanvas.Body>
              </Offcanvas>

              

               
                <Form className="customform">                    
                  <Form.Label>
                    1. Επίλεξε δύο πρώτους αριθμούς P και Q
                  </Form.Label>

                  <Row className="mb-2">
                      <Col xs={1}>
                      <Form.Label>P: </Form.Label>
                      </Col>
                      <Col xs={4}>
                        <Form.Control
                            type="number"
                            size="sm"
                            value={form.p}
                            onChange={(e) => setField('p', e.target.value)}
                            isInvalid={!!errors.p}
                            disabled={locked}
                          />
                        <Form.Control.Feedback type= 'invalid'>
                          {errors.p}
                        </Form.Control.Feedback>
                      </Col>
                     

                      <Col xs={1}>
                        <Form.Label>Q: </Form.Label>
                      </Col>
                      <Col xs={4}>
                      <Form.Control
                            type="number"
                            size="sm"
                            onChange={(e) => setField('q', e.target.value)}
                            isInvalid={!!errors.q}
                            disabled={locked}
                          />
                       <Form.Control.Feedback type= 'invalid'>
                          {errors.q}
                        </Form.Control.Feedback>
                      </Col>
                   </Row> 
                                      
                 </Form>


                 <Form className="customform">                    
                  <Form.Label>
                    2. Υπολόγησε τα n και Φ(n)
                  </Form.Label>

                  <Row className="mb-2">
                      <Col xs={1}>
                      <Form.Label>n: </Form.Label>
                      </Col>
                      <Col xs={4}>
                        <Form.Control
                            type="number"
                            size="sm"
                            value={form.n}
                            onChange={(e) => setField('n', e.target.value)}
                            isInvalid={!!errors.n}
                            disabled={locked}
                          />
                        <Form.Control.Feedback type= 'invalid'>
                          {errors.n}
                        </Form.Control.Feedback>
                      </Col>
                     

                      <Col xs={1}>
                        <Form.Label>Φ(n): </Form.Label>
                      </Col>
                      <Col xs={4}>
                      <Form.Control
                            type="number"
                            size="sm"                            
                            value={form.fn}
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
                                          
                 </Form>



                 <Form className="customform">                    
                  <Form.Label>
                  3.  Υπολόγησε Public Κey (E,n). Πρέπει να επιλέξεις το &nbsp;
                      <i class="bi bi-unlock-fill" style={{fontSize: '20px'}}></i> 
                     E. 
                     Προσοχη! <u>Δεν</u> πρέπει να διαιρεί το Φ(n) <u>και</u> να είναι πολλαπλάσιο των παραγόντων του Φ(n)
                  </Form.Label>


                {factors && ( 
                <Row className="mb-2"> 
                      <Col xs={6}>
                      <Form.Label>Οι παράγοντες του Φ(n) είναι: </Form.Label>
                      </Col>
                      <Col xs={4}>
                      <Form.Control
                            type="text"
                            readOnly
                            value={factors}
                            style={{ width: '160px', padding: '5px', fontSize: '13px', textAlign: 'center', marginLeft: '1px' }} 
                          />
                        </Col>                                
                    </Row> 
                  )}

                  <Row className="mb-2"> 
                      <Col xs={1}>
                      <Form.Label>E: </Form.Label>
                      </Col>
                      <Col xs={4}>
                        <Form.Control
                            type="integer"
                            size="sm"
                            value={form.E}
                            onChange={(e) => setField('E', e.target.value)}
                            isInvalid={!!errors.E}
                            disabled={locked}
                            style={{ width: '70px', padding: '5px', fontSize: '12px', textAlign: 'center', marginLeft: '1px' }} 
                          />
                        <Form.Control.Feedback type= 'invalid'>
                          {errors.E}
                        </Form.Control.Feedback>
                      </Col>                                    
                    </Row> 
                                      
                 </Form>



                 <Form className="customform">                    
                  <Form.Label>
                  4.   Υπολόγησε Private Κey (D,n). Επίλεξε το &nbsp;
                      <i class="bi bi-key-fill"  style={{fontSize: '20px'}} ></i> 
                     D
                  </Form.Label>

                  <Row className="mb-2">
                  <Col xs={6}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>         
                  <span style={{ fontSize: '13px' }}>D:</span>       
                    <Form.Control                          
                         type="number" 
                         value={form.D} 
                       //  onChange={(e) => handleInputChangeD('D', e.target.value)} 
                         onChange={(e) => setField('D', e.target.value)}
                         isInvalid={!!errors.D}
                         disabled={locked}
                         //placeholder="D" 
                        style={{ width: '70px', padding: '5px', fontSize: '12px', textAlign: 'center', marginLeft: '1px' }} 
                       />                   
                    <span style={{ fontSize: '13px' }}>* {rsaValues.E || 'E'} mod {rsaValues.fn || 'Φ(n)'} = 1</span>
                    </div>
                    <Form.Control.Feedback type= 'invalid'>
                          {errors.D}
                        </Form.Control.Feedback>
                    </Col>
                    {/*                     
                      <Col xs={7}>
                        <Button onClick={onSendClick} variant="outline-info">Send E to Alice</Button>
                     </Col>  
                    */}
                     <Col xs={6}>
                          <Button onClick={handleSubmit}
                          variant="outline-info" 
                          style={{ fontSize: '0.8rem', padding: '0.3rem 0.5rem', marginLeft: '30px'  }}
                          >Στείλε το E στην Alice
                          </Button>
                     </Col>  
                 
                    </Row> 
                                      
                 </Form>
                 

                {/* Bootstrap Modal for displaying empty field alert */}
                <Modal show={showModal} onHide={handleCloseMod} centered>
                  <Modal.Header>
                    <Modal.Title>Μήνυμα λάθους</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                     Παρακαλώ συμπληρώσε σωστά όλα τα πεδία ώστε να μπορέσεις να στείλεις το Public Key στην Alice.
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseMod}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>

            </Card.Body>
          </Card>
         
    

);
}
export default Bob;

//---------------------------------------------CORRECT END--------------------------------------------------


